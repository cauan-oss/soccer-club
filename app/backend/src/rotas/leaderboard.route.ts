import { Router } from 'express';
import ControllerLeaderBoard from '../controllers/leaderboard.controller';

const router = Router();

router.get('/home', ControllerLeaderBoard.leaderBoard);
router.get('/away', ControllerLeaderBoard.awayleaderBoard);

export default router;
