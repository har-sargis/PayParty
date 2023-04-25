import express from 'express';
import authenticationRoutes from './routes/authentication';
import eventsRoutes from './routes/event';
import expensesRoutes from './routes/expenses';
import notificationRoutes from './routes/notification';
import paymentRoutes from './routes/payments';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(authenticationRoutes);
app.use(eventsRoutes);
app.use(expensesRoutes);
app.use(notificationRoutes);
app.use(paymentRoutes);

app.get('/', (req, res) => {
  res.send('API Gateway for SplitBills');
});

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
