import { Router } from 'express';
import { ticketRouter } from './ticket-routes';
import { userRouter } from './user-routes';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/tickets', authenticateToken, ticketRouter);
router.use('/users', authenticateToken, userRouter);

export default router;