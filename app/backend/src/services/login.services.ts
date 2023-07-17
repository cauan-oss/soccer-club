import bcrypt = require('bcryptjs');
import User from '../database/models/UsersModel';
import HttpExeption from './httpExeption';
// import ILogin from '../Interfaces/Login';
// import { gerarToken } from '../utils/auth';

export default class LoginService {
  public static async insertLogin(email: string, password: string): Promise<User | null> {
    const getInBank = await User.findOne({ where: { email } });
    if (!getInBank || !bcrypt.compareSync(password, getInBank.password)) {
      throw new HttpExeption(401, 'Invalid email or password');
    }
    return getInBank;
  }
}
