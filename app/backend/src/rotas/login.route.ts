import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import login from '../middlewares/login';

const router = Router();

router.post('/', login, LoginController.insertLogin);

export default router;
