import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const verified = jwt.verify(token, secretKey) as { username: string };
    req.user = verified;
    next();
    return;
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token' });
  }
};