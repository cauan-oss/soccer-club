import { Router } from 'express';
import controllerLogin from '../controllers/login.controller';
import login from '../middlewares/login';

const router = Router();

router.post('', (req, res) => login, controllerLogin);

export default router;
