import { Request, Response } from 'express';
import ServiceLeaderBoard from '../services/leaderboard';
import AwayLeaderboard from '../services/awayLeaderBoard';

export default class ControllerLeaderBoard {
  public static async leaderBoard(req: Request, res: Response): Promise<Response> {
    const dados = await ServiceLeaderBoard.funcLeaderBoard();
    console.log('meus dados', dados);
    return res.status(200).json(dados);
  }

  public static async awayleaderBoard(req: Request, res: Response): Promise<Response> {
    const dados = await AwayLeaderboard.funcLeaderBoard();
    console.log('meus dados', dados);
    return res.status(200).json(dados);
  }
}
