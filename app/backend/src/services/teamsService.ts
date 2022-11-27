import teamsModel from '../database/models/TeamsModel';

const getAllTeamsService = async () => {
  const teams = await teamsModel.findAll();
  return { status: 200, message: teams };
};

const getTeamsByIdService = async (id: number) => {
  const teamsById = await teamsModel.findOne({ where: { id } });
  return { status: 200, message: teamsById };
};

export default { getAllTeamsService, getTeamsByIdService };
