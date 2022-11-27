import { Request, Response } from 'express';
import matchesService from '../services/matchesService';

const getAllMatchesController = async (_req: Request, res: Response) => {
  const getAll = await matchesService.getAllMatchesService();
  // console.log(getAll);
  return res.status(getAll.status).json(getAll.message);
};

const getMatchesInProgress = async (req: Request, res: Response) => {
//   const { inProgress } = req.query;
//   const { id } = req.body;
  const filterMatches = await matchesService.getMatchesInProgress();
  console.log(filterMatches);
  return res.status(filterMatches.status).json(filterMatches.message);
};

export default { getAllMatchesController, getMatchesInProgress };
