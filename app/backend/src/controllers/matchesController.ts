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

export default { getAllMatchesController };
