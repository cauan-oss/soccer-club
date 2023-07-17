import { Router } from 'express';
import LoginController from '../controllers/login.controller';
// import login from '../middlewares/login';

const router = Router();

router.post('/', (req, res, next) => LoginController.insertLogin(req, res, next));

export default router;
