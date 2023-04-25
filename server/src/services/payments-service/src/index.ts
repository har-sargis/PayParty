import express, { Express } from 'express';

const app: Express = express();

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Payment service is running on port ${PORT}`);
});
