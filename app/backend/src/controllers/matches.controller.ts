import { Request, Response } from 'express';
import MatchesService from '../services/matches.services';

export default class MatchesController {
  public static async getAllMacthes(req: Request, res: Response): Promise<Response> {
    const getAll = await MatchesService.getAll();
    const { inProgress } = req.query as { inProgress: string };
    const parsedInProgress: boolean = inProgress === 'true';
    const activeMacthes = await MatchesService.activeMacthes(parsedInProgress);
    if (inProgress !== undefined) {
      return res.status(200).json(activeMacthes);
    }
    return res.status(200).json(getAll);
  }

  public static async macthesId(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await MatchesService.endMacthes(+id);
    return res.status(200).json({ message: 'Finished' });
  }
}
