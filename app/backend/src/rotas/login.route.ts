import { Router } from 'express';
import LoginController from '../controllers/login.controller';
// eslint-disable-next-line import/no-duplicates
import login from '../middlewares/login';
// eslint-disable-next-line import/no-duplicates
import routeLogin from '../middlewares/routeLogin';

const router = Router();

router.post('/', login, LoginController.insertLogin);
router.get('/', routeLogin);

export default router;
