import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth';
import { sequelize } from './database/sequelize';

const app: Express = express();


const start = async () => {
  try {
    await sequelize.sync(); // Connect to the database and sync models
    console.log('Connected to the database');

    // ...existing code to start the server
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

start();
app.use(express.json());
app.use(authRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Authentication service is running on port ${PORT}`);
});

