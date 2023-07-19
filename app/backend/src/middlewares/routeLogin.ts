import { NextFunction, Request, Response } from 'express';
// import * as jwt from 'jsonwebtoken';
import { authToken } from '../utils/auth';
import LoginService from '../services/login.services';

const roleLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const data = authorization.split(' ');
  try {
    const verifyToken = authToken(data[1]);
    const { email, password } = verifyToken;
    const user = await LoginService.insertLogin(email, password);
    return res.status(200).json({ role: user?.role });
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  next();
};

export default roleLogin;
