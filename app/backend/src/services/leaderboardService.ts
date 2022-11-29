/* eslint-disable no-restricted-syntax */
import teamsModel from '../database/models/TeamsModel';
import MatchesModel from '../database/models/MatchesModel';
import homeBoard from '../Utils/boardFromHomeTeam';
import awayBoard from '../Utils/boardFromAwayTeam';

const getHomeTeamBoard = async () => {
  const teams = await teamsModel.findAll({ include:
    [{ model: MatchesModel, as: 'matchesHome', where: { inProgress: false } }] });
  const result = teams.map((i: any) => homeBoard(i.matchesHome, i.teamName));
  const orderBy = ['totalPoints', 'totalVictories', 'goalsBalance', 'goalsFavor', 'goalsOwn'];
  const boardInfo = result.sort((a: any, b: any) => {
    for (const i of orderBy) {
      if (a[i] < b[i]) return 1;
      if (a[i] > b[i]) return -1;
    }
    return 0;
  });
  return { status: 200, message: boardInfo };
};

const getAwayTeamBoard = async () => {
  const teams = await teamsModel.findAll({ include:
    [{ model: MatchesModel, as: 'matchesAway', where: { inProgress: false } }] });
  const result = teams.map((i: any) => awayBoard(i.matchesAway, i.teamName));
  const orderBy = ['totalPoints', 'totalVictories', 'goalsBalance', 'goalsFavor', 'goalsOwn'];
  const boardInfo = result.sort((x: any, y: any) => {
    for (const i of orderBy) {
      if (x[i] < y[i]) return 1;
      if (x[i] > y[i]) return -1;
    }
    return 0;
  });
  return { status: 200, message: boardInfo };
};

export default { getHomeTeamBoard, getAwayTeamBoard };
