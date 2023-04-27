import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth';

const app: Express = express();

app.use(express.json());
app.use(authRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Authentication service is running on port ${PORT}`);
});

