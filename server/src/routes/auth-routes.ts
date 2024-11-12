import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).json({ message: 'Invalid username or password' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid username or password' });

    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

    return res.json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;