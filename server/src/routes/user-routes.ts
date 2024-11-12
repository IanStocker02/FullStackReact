import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';

const userRouter = Router();

// Example route for getting users
userRouter.get('/', authenticateToken, (_, res) => {
  res.json({ message: 'List of users' });
});

// Example route for creating a user
userRouter.post('/', authenticateToken, (_, res) => {
  res.json({ message: 'User created' });
});

export { userRouter };