import teamsModel from '../database/models/TeamsModel';
import MatchesModel from '../database/models/MatchesModel';

const getLeaderboard = async () => {
  const teams = await teamsModel.findAll({ include:
    [{ model: MatchesModel, as: 'matchesHome', where: { inProgress: false } }] });
  return { status: 200, message: teams };
};

export default { getLeaderboard };
