import { Router } from 'express';
import TeamsController from '../controllers/team.controller';

const router = Router();

router.get('/', (req, res) => TeamsController.getAll(req, res));
router.get('/:id', (req, res) => TeamsController.getById(req, res));

export default router;
