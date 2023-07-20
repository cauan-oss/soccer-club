import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import valiandoToken from '../middlewares/validToken';
// import finish from '../middlewares/routeFinish';

const router = Router();

router.get('/', MatchesController.getAllMacthes);
router.patch('/:id/finish', valiandoToken, MatchesController.macthesId);
router.patch('/:id', valiandoToken, MatchesController.updateMatch);

export default router;
