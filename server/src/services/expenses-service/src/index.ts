import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Expenses service is running on port ${PORT}`);
});
