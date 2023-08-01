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
    // verificando o progresso das partidas
    const oprogresso = Boolean(false);
    // informacoes das partidas
    const infoPartidas = await MatchService.activeMacthes(oprogresso);
    const todosTimes = await TeamService.getAll();
    // mapeando o leaderBoard com map
    const melhores = todosTimes.map(async (time) => {
      // filtrando pelo time id e pela partida em casa id
      const timesEpartidas = infoPartidas.filter((partida) => time.id === partida.homeTeamId);
      const informacoesTimesEpartidas = await Promise.all(timesEpartidas);
      // retorno do resultado
      const resultado = await ServiceLeaderBoard.retornaOplacar(time, informacoesTimesEpartidas);
      return resultado;
    });
    // espera da resposta
    const esperaResposta = await Promise.all(melhores);
    // retorno da resposta
    return esperaResposta;
  }
  // funcao do total de pontos

  static async totalDepontos(teamMatchesInfo: IMatch[]) {
    let totalPontos = 0;
    const maisUm = 1;
    const maisTres = 3;
    teamMatchesInfo.forEach((match) => {
      if (match.homeTeamGoals > match.awayTeamGoals) {
        totalPontos += maisTres;
      }
      if (match.homeTeamGoals === match.awayTeamGoals) {
        totalPontos += maisUm;
      }
    });

    return totalPontos;
  }

  // funcao do total de jogos
  static async totalJogos(teamMatchesInfo: IMatch[]) {
    return teamMatchesInfo.length;
  }
  //  funcao do total de vitorias

  static async totalVitorias(teamMatchesInfo: IMatch[]) {
    let total = 0;
    const maisUm = 1;
    teamMatchesInfo.forEach((match) => {
      if (match.homeTeamGoals > match.awayTeamGoals) {
        total += maisUm;
      }
    });

    return total;
  }

  static async totalSorteios(teamMatchesInfo: IMatch[]) {
    let totalSortes = 0;
    const maisUm = 1;
    teamMatchesInfo.forEach((match) => {
      if (match.homeTeamGoals === match.awayTeamGoals) {
        totalSortes += maisUm;
      }
    });

    return totalSortes;
  }
  // total de perdas

  static async totalPerdas(teamMatchesInfo: IMatch[]) {
    let totalDerrotas = 0;
    const maisUm = 1;
    teamMatchesInfo.forEach((match) => {
      if (match.homeTeamGoals < match.awayTeamGoals) {
        totalDerrotas += maisUm;
      }
    });

    return totalDerrotas;
  }
  //  goals auxiliar

  static async goalsAux(teamMatchesInfo: IMatch[]) {
    let goalsFavor = 0;
    teamMatchesInfo.forEach((match) => {
      goalsFavor += match.homeTeamGoals;
    });

    return goalsFavor;
  }
  // funcao do saldo de goals

  static async meuSaldoDeGoals(teamMatchesInfo: IMatch[]) {
    let goalsOwn = 0;
    teamMatchesInfo.forEach((match) => {
      goalsOwn += match.homeTeamGoals;
    });
    return goalsOwn;
  }
  // metodo para retornar o placar

  public static async retornaOplacar(team: ITeams, teamMatchesInfo: IMatch[]) {
    const returnAll = {
      name: team.teamName,
      totalPoints: await ServiceLeaderBoard.totalDepontos(teamMatchesInfo),

      totalGames: await ServiceLeaderBoard.totalJogos(teamMatchesInfo),
      totalVictories: await ServiceLeaderBoard.totalVitorias(teamMatchesInfo),
      totalDraws: await ServiceLeaderBoard.totalSorteios(teamMatchesInfo),

      totalLosses: await ServiceLeaderBoard.totalPerdas(teamMatchesInfo),
      goalsFavor: await ServiceLeaderBoard.goalsAux(teamMatchesInfo),

      goalsOwn: await ServiceLeaderBoard.meuSaldoDeGoals(teamMatchesInfo),
    };
    return returnAll;
  }
}
