import { Request, Response } from 'express';
import leaderboardService from '../services/leaderboardService';

const getHomeTeamBoard = async (_req: Request, res: Response) => {
  const homeTeams = await leaderboardService.getHomeTeamBoard();

  return res.status(homeTeams.status).json(homeTeams.message);
};

const getAwayTeamBoard = async (_req: Request, res: Response) => {
  const awayTeams = await leaderboardService.getAwayTeamBoard();

  return res.status(awayTeams.status).json(awayTeams.message);
};

export default { getHomeTeamBoard, getAwayTeamBoard };
