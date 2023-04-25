import { Router } from 'express';
import { signUp, logIn } from '../controllers/authController';

const router = Router();

router.post('/auth/signup', signUp);
router.post('/auth/login', logIn);

export default router;
