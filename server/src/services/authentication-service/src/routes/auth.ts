import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { signUp, logIn, sendVerificationCode, verifyCode } from '../controllers/authController';

const router = Router();


router.post('/auth/send-verification-code', sendVerificationCode);
router.post('/auth/verify-code', verifyCode);
router.post('/auth/signup', signUp);
router.post('/auth/login', logIn);

export default router;
