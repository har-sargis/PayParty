import express from 'express';
import authenticationRoutes from './routes/authentication';
import eventsRoutes from './routes/event';
import expensesRoutes from './routes/expenses';
import notificationRoutes from './routes/notification';
import paymentRoutes from './routes/payments';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 8080;

app.use(express.json());

app.use(authenticationRoutes);
app.use(eventsRoutes);
app.use(expensesRoutes);
app.use(notificationRoutes);
app.use(paymentRoutes);

app.get('/', (req, res) => {
  console.log('hello api gateway !!')
  res.send('API Gateway for SplitBills');
});

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
