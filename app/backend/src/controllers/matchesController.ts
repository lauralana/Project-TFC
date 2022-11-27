import { Request, Response } from 'express';
import matchesService from '../services/matchesService';

const getAllMatchesController = async (_req: Request, res: Response) => {
  const getAll = await matchesService.getAllMatchesService();
  return res.status(getAll.status).json(getAll.message);
};

export default { getAllMatchesController };
