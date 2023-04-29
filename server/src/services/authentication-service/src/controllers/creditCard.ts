import { Request, Response } from 'express';
import { CreditCard } from '../models/CreditCard';
import { User } from '../models/User';

const addCreditCard = async (req: Request, res: Response) => {
  const { userId, cardHolderName, cardNumber, expirationDate, cvv } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const newCreditCard = await CreditCard.create({
      userId,
      cardHolderName,
      cardNumber,
      expirationDate,
      cvv,
    });

    res.status(201).send(newCreditCard);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
};

export { addCreditCard };
