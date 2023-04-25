import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

interface UserPayload {
  id: string;
}

export function generateToken(payload: UserPayload): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}
