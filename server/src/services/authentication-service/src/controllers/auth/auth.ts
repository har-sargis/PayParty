import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import twilio from 'twilio';

import { AuthenticatedRequest } from '../../../types';
import { User } from '../../models/User';

import {
  generateAccessToken,
  generateRefreshToken,
  storeRefreshToken,
} from './tokens';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export async function signUp(req: Request, res: Response) {
  const { email, password, phoneNumber, firstName } = req.body;
  console.log(email, password, phoneNumber, firstName);
  // Check if email is already registered
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already registered.' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user in the database
  const user = await User.create({
    firstName,
    email,
    password: hashedPassword,
    phoneNumber,
  });

  if (!user) {
    return res.status(500).json({ message: 'Error creating user.' });
  }

  // Generate JWT
  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);
  await storeRefreshToken(user.id, refreshToken, 24 * 60 * 60);
  res.status(201).json({ message: 'User registered successfully.', accessToken, refreshToken, id: user.id });
}

export async function logIn(req: Request, res: Response) {
  console.log('logIn', req.body, '???????????????????????????????????')
  const { phoneNumber, password } = req.body;

  // Find user by email
  const user = await User.findOne({ where: { phoneNumber } });
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  // Compare password with the hashed password in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password.' });
  }

  // Generate JWT
  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);
  await storeRefreshToken(user.id, refreshToken, 24 * 60 * 60);
  res.status(200).json({ message: 'User logged in successfully.', accessToken, refreshToken, id: user.id });
}

// Store verification codes in-memory (use Redis or another storage solution in production)
const verificationCodes = new Map();
export async function sendVerificationCode(req: Request, res: Response) {
  const { phone } = req.body;
  // Generate a 4-digit code
  const verificationCode = Math.floor(1000 + Math.random() * 9000);

  // Save the code with the user's phone number and set an expiration time (e.g., 10 minutes)
  verificationCodes.set(phone, {
    code: verificationCode,
    expiresAt: Date.now() + 10 * 60 * 1000,
  });

  // Send the generated code to the user's phone number using your SMS service provider's API
  // (This is a placeholder, replace it with the actual implementation using Twilio, Plivo, etc.)
  try {
    client.messages
      .create({
        body: `${verificationCode}`,
        to: phone,
        from: `${process.env.TWILIO_PHONE_NUMBER}`, // From a valid Twilio number
      })
      .then((message) => console.log(message.sid));
    console.log(`Sending verification code ${verificationCode} to phone number ${phone}`);

    res.status(200).json({ message: 'Verification code sent.' });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: (e as Error).message });
  }
}

export async function verifyCode(req: Request, res: Response) {
  const { phoneNumber, code } = req.body;

  // Retrieve the stored code for the given phone number
  const storedCodeInfo = verificationCodes.get(phoneNumber);

  if (!storedCodeInfo) {
    return res.status(404).json({ message: 'Invalid phone number.' });
  }

  // Check if the code is expired
  if (Date.now() > storedCodeInfo.expiresAt) {
    return res.status(400).json({ message: 'Verification code has expired.' });
  }

  // Check if the entered code matches the stored code
  if (parseInt(code, 10) !== storedCodeInfo.code) {
    return res.status(400).json({ message: 'Invalid verification code.' });
  }

  // Code is verified, proceed with the registration
  res.status(200).json({ message: 'Code verified, proceed with registration.', verified: true });

  // Remove the stored code for the given phone number to prevent reusing it
  verificationCodes.delete(phoneNumber);
}

export const authMe = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // Assuming the user ID was added to the request by the authMiddleware
    const userId = req.userId;

    // Retrieve the user data from the database
    const user = await User.findByPk(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the user data back to the client
    res.status(200).json({
      id: user.id,
      firstName: user.firstName,
      email: user.email,
      // Add other user fields as needed
    });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while processing your request', error });
  }
};

