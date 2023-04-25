import express, { Express } from 'express';

const app: Express = express();

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log(`Notifications service is running on port ${PORT}`);
});
