import { Router } from 'express';
import { ticketRouter } from './api/ticket-routes.js'; // Ensure this path is correct
import { userRouter } from './api/user-routes.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/tickets', authenticateToken, ticketRouter);
router.use('/users', authenticateToken, userRouter);

export default router;