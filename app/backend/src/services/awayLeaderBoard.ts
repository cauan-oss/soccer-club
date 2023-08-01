import ITeams from '../Interfaces/Teams';
import MatchService from './matches.services';
import TeamService from './teams.services';

interface ILeaderboard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
}

interface IMatch {
  id: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
  homeTeam?: unknown;
  awayTeam?: unknown;
}

export default class ServiceLeaderBoard {
  public static async funcLeaderBoard(): Promise<ILeaderboard[]> {
    const progresso = Boolean(false);
    // progresso is bool
    const matchesInfo = await MatchService.activeMacthes(progresso);
    // todos os times
    /*
    const number = 1;
    const alterando = [0, 0]; */
    const todosTimes = await TeamService.getAll();
    // times
    const leaderboard = todosTimes.map(async (team) => {
      const promisesTeamMatches = matchesInfo.filter((match) => team.id === match.awayTeamId);

      const teamMatchesInfo = await Promise.all(promisesTeamMatches);
      // no comeco funcionava
      const resultdosPlacares = await ServiceLeaderBoard.metPlacar(team, teamMatchesInfo);
      // isso melhora a producao
      return resultdosPlacares;
    });

    const esperaResposta = await Promise.all(leaderboard);
    return esperaResposta;
  }

  static async totalPontos(teamMatchesInfo: IMatch[]) {
    let totalPoints = 0;
    const maisUm = 1;
    const maisTres = 3;
    teamMatchesInfo.forEach((match) => {
      if (match.homeTeamGoals < match.awayTeamGoals) {
        totalPoints += maisTres;
      }
      if (match.homeTeamGoals === match.awayTeamGoals) {
        totalPoints += maisUm;
      }
    });

    return totalPoints;
  }

  static async totalJogos(teamMatchesInfo: IMatch[]) {
    return teamMatchesInfo.length;
  }

  static async TotalVictories(teamMatchesInfo: IMatch[]) {
    let totalVictories = 0;
    const maisUm = 1;
    teamMatchesInfo.forEach((match) => {
      if (match.homeTeamGoals < match.awayTeamGoals) {
        totalVictories += maisUm;
      }
    });

    return totalVictories;
  }

  static async totaldesenhos(teamMatchesInfo: IMatch[]) {
    let totalDraws = 0;
    const maisUm = 1;
    teamMatchesInfo.forEach((match) => {
      if (match.homeTeamGoals === match.awayTeamGoals) {
        totalDraws += maisUm;
      }
    });

    return totalDraws;
  }

  static async totalPerdas(teamMatchesInfo: IMatch[]) {
    let totalLosses = 0;
    const maisUm = 1;
    teamMatchesInfo.forEach((match) => {
      if (match.homeTeamGoals > match.awayTeamGoals) {
        totalLosses += maisUm;
      }
    });

    return totalLosses;
  }
  // funcao do saldo de goals a favor

  static async goalsFavor(teamMatchesInfo: IMatch[]) {
    let goalsFavor = 0;
    teamMatchesInfo.forEach((match) => {
      goalsFavor += match.awayTeamGoals;
    });

    return goalsFavor;
  }
  // funcao do saldo de gols

  static async meuSaldoDeGoals(teamMatchesInfo: IMatch[]) {
    let goalsOwn = 0;
    teamMatchesInfo.forEach((match) => {
      goalsOwn += match.awayTeamGoals;
    });
    return goalsOwn;
  }

  public static async metPlacar(team: ITeams, teamMatchesInfo: IMatch[]) {
    const returnAll = {
      name: team.teamName,
      totalPoints: await ServiceLeaderBoard.totalPontos(teamMatchesInfo),
      totalGames: await ServiceLeaderBoard.totalJogos(teamMatchesInfo),
      totalVictories: await ServiceLeaderBoard.TotalVictories(teamMatchesInfo),
      totalDraws: await ServiceLeaderBoard.totaldesenhos(teamMatchesInfo),
      totalLosses: await ServiceLeaderBoard.totalPerdas(teamMatchesInfo),
      goalsFavor: await ServiceLeaderBoard.goalsFavor(teamMatchesInfo),
      goalsOwn: await ServiceLeaderBoard.meuSaldoDeGoals(teamMatchesInfo),
    };
    console.log('service', returnAll);
    return returnAll;
  }
}
