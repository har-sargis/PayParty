import { Router, Request, Response } from 'express';
import axios, { AxiosError } from 'axios';

const router = Router();


router.post('/signup', async (req: Request, res: Response) => {
  try {
    const response = await axios.post('http://authentication:3001/auth/signup', req.body);
console.log(response , 'response')
    res.status(response.status).json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    res.status(axiosError.response?.status || 500).json({ message: axiosError.message });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'http://authentication:3001/auth/login',
      data: req.body,
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error, '>>>>>>>>>>>>>>')
    const axiosError = error as AxiosError;
    res.status(axiosError.response?.status || 500).json({ message: axiosError.message });
  }
});

export default router;
