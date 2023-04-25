import { Request, Response } from 'express';
// import { Vonage } from '@vonage/server-sdk';

import { signUpUser, authenticateUser } from '../services/authService';

// const vonage = new Vonage({
//   apiKey: 'a4fbdfb2',
//   apiSecret: 'M47QT5ak3al06Qhl',
// })

export async function signUp(req: Request, res: Response): Promise<Response> {
  try {
    const user = await signUpUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function logIn(req: Request, res: Response): Promise<Response> {
  console.log('logIn', req.body, '???????????????????????????????????')
  try {
    const token = await authenticateUser(req.body);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
}
