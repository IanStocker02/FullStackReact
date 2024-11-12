import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';

const ticketRouter = Router();

// Example route for getting tickets
ticketRouter.get('/', authenticateToken, (_, res) => {
  res.json({ message: 'List of tickets' });
});

// Example route for creating a ticket
ticketRouter.post('/', authenticateToken, (_, res) => {
  res.json({ message: 'Ticket created' });
});

export { ticketRouter };