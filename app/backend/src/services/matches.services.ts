import Imatches from '../Interfaces/Matches';
import Match from '../database/models/Matches';
import Team from '../database/models/TeamModel';

export default class MatchesService {
  public static async getAll(): Promise<Imatches[]> {
    const getAllTeams = await Match.findAll({
      include: [{ model: Team, as: 'awayTeam', attributes: ['teamName'] },
        { model: Team, as: 'homeTeam', attributes: ['teamName'] }],
    });
    return getAllTeams;
  }

  public static async activeMacthes(inProgress: boolean): Promise<Imatches[]> {
    const getAllMacthes = await Match.findAll({
      where: { inProgress },
      include: [
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
      ],
    });
    return getAllMacthes;
  }

  public static async endMacthes(id: number): Promise<void> {
    await Match.update({ inProgress: false }, { where: { id } });
  }

  public static async updateMatch(id: number, awayTeamGoals:
  number, homeTeamGoals: number): Promise<number> {
    const [updatedRows] = await Match.update(
      { awayTeamGoals, homeTeamGoals },
      { where: { id } },
    );
    return updatedRows;
  }
}
