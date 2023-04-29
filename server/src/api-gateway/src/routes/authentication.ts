import { Router, Request, Response } from 'express';
import axios, { AxiosError } from 'axios';

const router = Router();


const sendToAuthMicroService = async (url: string, req: Request, res: Response) => {
  console.log(url, req.body);
  try {
    console.log(url, req.body, '???????????????????????????????????');
    const response = await axios.post(url, req.body);
    console.log(response, 'response')
    res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error, 'error')
    const axiosError = error as AxiosError;
    res.status(axiosError.response?.status || 500).json({ message: axiosError.message });
  }
};

router.post('/login', async (req: Request, res: Response) => sendToAuthMicroService('http://authentication:3001/auth/login', req, res));

router.post('/send-verification-code', async (req: Request, res: Response) => sendToAuthMicroService('http://authentication:3001/auth/send-verification-code', req, res));

router.post('/verify-code', async (req: Request, res: Response) => sendToAuthMicroService('http://authentication:3001/auth/verify-code', req, res));

router.post('/signup', async (req: Request, res: Response) => sendToAuthMicroService('http://authentication:3001/auth/signup', req, res));

router.post('/refresh-token', async (req: Request, res: Response) => sendToAuthMicroService('http://authentication:3001/auth/refresh-token', req, res));
export default router;
