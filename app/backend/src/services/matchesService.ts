import { ITeamMatche } from '../Interface/ITeams';
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

const getMatchesInProgress = async (param: boolean) => {
  const inProgress = await getAllMatchesService();
  const filterMatches = inProgress.message
    .filter((element) => element.dataValues.inProgress === param);
  return { status: 200, message: filterMatches };
};

const insertMatchesService = async (body: ITeamMatche) => {
  const newMatche = await matchesModel.create({ ...body, inProgress: true });

  return { status: 201, message: newMatche.dataValues };
};

const updateMatchesService = async (body: ITeamMatche, id: number) => {
  await matchesModel.update({ ...body, inProgress: false }, { where: { id } });

  return { status: 200, message: { message: 'Finished' } };
};

export default {
  getAllMatchesService,
  getMatchesInProgress,
  insertMatchesService,
  updateMatchesService,
};

// matches {
//          dataValues: [Object],
//          _previousDataValues: [Object],
//          uniqno: 1,
//          _changed: Set(0) {},
//          _options: [Object],
//          isNewRecord: false,
//          teamHome: [teams],
//          teamAway: [teams]
//        },
//        matches {
//          dataValues: [Object],
//          _previousDataValues: [Object],
//          uniqno: 1,
//          _changed: Set(0) {},
//          _options: [Object],
//          isNewRecord: false,
//          teamHome: [teams],
//          teamAway: [teams]
//        }
