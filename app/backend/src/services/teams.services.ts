import Teams from '../database/models/TeamModel';
import ITeams from '../Interfaces/Teams';

export default class TeamsService {
  public static async getAll(): Promise<ITeams[]> {
    const getAllTeams = await Teams.findAll();
    return getAllTeams;
  }

  public static async getById(id: number): Promise<ITeams | null> {
    const getByIdTeams = await Teams.findByPk(id);
    return getByIdTeams;
  }
}
