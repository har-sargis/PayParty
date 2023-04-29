import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { AuthenticatedRequest } from '../../types';

interface DecodedToken {
  id: number;
  iat: number;
  exp: number;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ message: 'Token error' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ message: 'Malformed token' });
  }

  const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Add the user ID to the request object for later use
    (req as AuthenticatedRequest).userId = (decoded as DecodedToken).id;

    return next();
  });
};
