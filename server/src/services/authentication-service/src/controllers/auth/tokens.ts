import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

import { RefreshToken } from '../../models/RefreshToken';

// Generate a secret key
export const secret = crypto.randomBytes(32).toString('base64');
export const refreshSecret = crypto.randomBytes(32).toString('base64');

export function generateAccessToken(userId: number) {
  return jwt.sign({ id: userId }, secret, { expiresIn: '15m' });
}
export function generateRefreshToken(userId: number) {
  return jwt.sign({ id: userId }, refreshSecret, { expiresIn: '1d' });
}

export async function storeRefreshToken(userId: number, refreshToken: string, expiresIn: number) {
  const expiresAt = new Date(Date.now() + expiresIn * 1000);

  await RefreshToken.create({
    id: uuidv4(),
    userId: userId,
    token: refreshToken,
    expiresAt: expiresAt,
  });
}

export async function refreshToken(req: Request, res: Response) {
  try {
    const refreshToken = req.body.refreshToken;

    // Verify the refresh token
    jwt.verify(refreshToken, refreshSecret, async (err: any, user: any) => {
      if (err) {
        return res.sendStatus(403);
      }

      // Fetch the stored refresh token from the database using the user ID
      const storedRefreshToken = await getStoredRefreshToken(user.id);

      // Check if the received refresh token matches the stored refresh token
      if (refreshToken !== storedRefreshToken?.token) {
        return res.sendStatus(403);
      }

      // Generate a new access token
      const accessToken = jwt.sign({ id: user.id }, secret, { expiresIn: '15m' });
      const newRefreshToken = await updateRefreshToken(user.id);
      // Update the refresh token's expiration date or issue a new refresh token (optional)
      // ...

      // Send the new access token to the client
      res.json({ accessToken, newRefreshToken });
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getStoredRefreshToken(userId: number): Promise<RefreshToken | null> {
  try {
    // Find the refresh token in the database
    const storedRefreshToken = await RefreshToken.findOne({ where: { userId } });

    // Return the found refresh token or null if not found
    return storedRefreshToken;
  } catch (error) {
    console.error('Error fetching refresh token:', error);
    return null;
  }
}

export async function updateRefreshToken(userId: number): Promise<string | null> {
  try {
    // Find the existing refresh token for the user in the database
    const existingRefreshToken = await RefreshToken.findOne({ where: { userId } });

    if (!existingRefreshToken) {
      return null;
    }

    // Generate a new refresh token
    const newRefreshToken = uuidv4();

    // Update the existing refresh token's value and expiration date
    existingRefreshToken.token = newRefreshToken;
    existingRefreshToken.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day from now

    // Save the updated refresh token to the database
    await existingRefreshToken.save();

    // Return the new refresh token
    return newRefreshToken;
  } catch (error) {
    console.error('Error updating refresh token:', error);
    return null;
  }
}
