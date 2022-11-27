import { Request, Response } from 'express';
import matchesService from '../services/matchesService';

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
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  return res.status(status).json(message);
};

export default { getAllMatchesController, insertMatchesController };
