import TeamsModel from '../database/models/TeamsModel';
import matchesModel from '../database/models/MatchesModel';

const getAllMatchesService = async () => {
  const getAll = await matchesModel.findAll({
    include: [
      { model: TeamsModel, as: 'teamHome' },
      { model: TeamsModel, as: 'teamAway' },
    ],
  });
  return { status: 200, message: getAll };
};

export default { getAllMatchesService };
