import { Request, Response } from 'express';
import teamsService from '../services/teamsService';

const getAllTeamsController = async (_req: Request, res: Response) => {
  const allTeams = await teamsService.getAllTeamsService();

  return res.status(allTeams.status).json(allTeams.message);
};

const getTeamsByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const teamsById = await teamsService.getTeamsByIdService(Number(id));

  return res.status(teamsById.status).json(teamsById.message);
};

export default { getAllTeamsController, getTeamsByIdController };
