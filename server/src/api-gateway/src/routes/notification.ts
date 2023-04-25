import { Router, Request, Response } from 'express';
import axios, { AxiosError } from 'axios';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('http://notification-service:3004/notification');
    res.status(response.status).json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    res.status(axiosError.response?.status || 500).json({ message: axiosError.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.post('http://notification-service:3004/notification', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    res.status(axiosError.response?.status || 500).json({ message: axiosError.message });
  }
});

export default router;
