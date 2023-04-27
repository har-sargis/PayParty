import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Events service is running on port ${PORT}`);
});

