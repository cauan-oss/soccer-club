import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/login.services';
import { gerarToken } from '../utils/auth';

export default class LoginController {
  public static async insertLogin(req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> {
    try {
      const { email, password } = req.body;
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
  // .create
}
