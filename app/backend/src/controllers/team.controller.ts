import { Request, Response } from 'express';
import TeamsService from '../services/teams.services';

export default class TeamsController {
  public static async getAll(req: Request, res: Response): Promise<Response> {
    const getAllTeams = await TeamsService.getAll();
    return res.status(200).json(getAllTeams);
  }

  public static async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const getByIdTeams = await TeamsService.getById(+id);
    return res.status(200).json(getByIdTeams);
  }
}
