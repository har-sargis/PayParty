import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import twilio from 'twilio';

import { createUser, findUserByEmail, User } from '../models/User';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Generate a secret key
const secret = crypto.randomBytes(32).toString('base64');

export async function signUp(req: Request, res: Response) {
  const { email, password, phone, name, birthday } = req.body;

  // Check if email is already registered
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ message: 'Email already registered.' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user in the database
  const user = await createUser(email, hashedPassword, name, phone, birthday);
  if (!user) {
    return res.status(500).json({ message: 'Error creating user.' });
  }

  // Generate JWT
  const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });

  res.status(201).json({ message: 'User registered successfully.', token });
}

export async function logIn(req: Request, res: Response) {
  console.log('logIn', req.body, '???????????????????????????????????')
  const { email, password } = req.body;

  // Find user by email
  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  // Compare password with the hashed password in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password.' });
  }

  // Generate JWT
  const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });

  res.status(200).json({ message: 'User logged in successfully.', token });
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