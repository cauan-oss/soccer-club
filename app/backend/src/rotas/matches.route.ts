import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const router = Router();

router.get('/', MatchesController.getAllMacthes);
router.patch('/:id/finish', MatchesController.macthesId);

export default router;
