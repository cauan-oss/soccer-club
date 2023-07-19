import { Request, Response, NextFunction } from 'express';
import { authToken } from '../utils/auth';

const valiandoToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const data = authorization?.split(' ');
  try {
    await authToken(data[1]);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default valiandoToken;
