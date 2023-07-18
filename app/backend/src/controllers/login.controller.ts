import { NextFunction, Request, Response } from 'express';

import LoginService from '../services/login.services';
import { /* authToken, */ gerarToken } from '../utils/auth';

export default class LoginController {
  public static async insertLogin(req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'All fields must be filled' });
      }
      const getReturnService = await LoginService.insertLogin(email, password);
      if (!getReturnService) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = gerarToken({ email, password });
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

/* public static async validateToken(req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> {
    /* const { email, password } = req.body;
    const { authorization } = req.headers;
    if (!authorization) {
      return
    }
    const data = authorization.split(' ');
    const token = gerarToken({ email, password });
    if (authorization !== token) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    const user = await LoginService.insertLogin(email, password);
    const autenticToken = decodedToken(data[1]);
    if (autenticToken) {
      return res.status(200).json(user);
    }
    next(); */
