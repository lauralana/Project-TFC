import { Request, Response } from 'express';
import matchesService from '../services/matchesService';
import teamsService from '../services/teamsService';

const getAllMatchesController = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  const getAll = await matchesService.getAllMatchesService();

  if (inProgress) {
    const filterMatches = await matchesService
      .getMatchesInProgress(JSON.parse(inProgress as string));
    return res.status(filterMatches.status).json(filterMatches.message);
  }
  return res.status(getAll.status).json(getAll.message);
};

const insertMatchesController = async (req: Request, res: Response) => {
  const token = req.header('authorization') as string;
  const newMatche = req.body;
  const { status, message } = await matchesService.insertMatchesService(newMatche);
  if (!token) {
    return res.status(404).json({ message: 'Unable to find token' });
  }
  if (newMatche.homeTeam === newMatche.awayTeam) {
    return res.status(422).json({ message:
        'It is not possible to create a match with two equal teams' });
  }
  const allTeams = await teamsService.getAllTeamsService();
  const newTeam = allTeams.message.find((element) =>
    element.dataValues.id === newMatche.homeTeam);
  if (!newTeam) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  return res.status(status).json(message);
};

const updateMatchesController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateMatche = req.body;
  const { status, message } = await matchesService.updateMatchesService(updateMatche, Number(id));

  return res.status(status).json(message);
};

const updateCurrentMatches = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateMatche = req.body;
  const { status, message } = await matchesService.updateCurrentMatches(updateMatche, Number(id));
  return res.status(status).json(message);
};

export default {
  getAllMatchesController,
  insertMatchesController,
  updateMatchesController,
  updateCurrentMatches,
};
