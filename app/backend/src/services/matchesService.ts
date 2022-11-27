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

// const getMatchesInProgress = async (id: number) => {
//   const inProgressT = await matchesModel.findAll({ where: { id } });
//   console.log(inProgressT);
//   const filterMatches = inProgressT.filter((element) => element.inProgress === true);
//   // console.log(filterMatches);
//   return { status: 200, message: filterMatches };
// };

// const getMatchesInProgress = async () => {
//   const inProgressT = await matchesModel.findAll();
//   console.log(inProgressT);
//   const filterMatches = Promise.all(inProgressT
//     .filter((element) => element.dataValues.inProgress === true));
//   console.log(filterMatches);
//   return { status: 200, message: filterMatches };
// };

const getMatchesInProgress = async () => {
  const inProgressT = await matchesModel.findAll();
  console.log(inProgressT);
  const filterMatches = inProgressT.filter((element) => element.dataValues.inProgress === true);
  console.log(filterMatches);
  return { status: 200, message: filterMatches };
};

export default { getAllMatchesService, getMatchesInProgress };

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
