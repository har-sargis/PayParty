import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {
  signUp,
  logIn,
  sendVerificationCode,
  verifyCode,
  authMe,
  refreshToken,
} from '../controllers/auth';
import { authMiddleware } from '../middleware/authMiddleware';
const router = Router();


router.post('/auth/send-verification-code', sendVerificationCode);
router.post('/auth/verify-code', verifyCode);
router.post('/auth/signup', signUp);
router.post('/auth/login', logIn);
router.post('/auth/refresh-token', refreshToken);
router.post('/auth/me', authMiddleware, authMe);

export default router;
