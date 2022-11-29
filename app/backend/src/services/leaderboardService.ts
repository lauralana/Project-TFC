/* eslint-disable no-restricted-syntax */
import teamsModel from '../database/models/TeamsModel';
import MatchesModel from '../database/models/MatchesModel';
import leaderboard from '../Utils/leaderboards';

const getLeaderboard = async () => {
  const teams = await teamsModel.findAll({ include:
    [{ model: MatchesModel, as: 'matchesHome', where: { inProgress: false } }] });
  const result = teams.map((i: any) => leaderboard(i.matchesHome, i.teamName));
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

export default { getLeaderboard };
