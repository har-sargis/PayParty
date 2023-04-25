import { Router, Request, Response } from 'express';
import axios, { AxiosError } from 'axios';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('http://expenses-service:3003/expenses');
    res.status(response.status).json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    res.status(axiosError.response?.status || 500).json({ message: axiosError.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.post('http://expenses-service:3003/expenses', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    res.status(axiosError.response?.status || 500).json({ message: axiosError.message });
  }
});

export default router;
