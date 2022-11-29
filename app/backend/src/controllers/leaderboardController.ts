import { Request, Response } from 'express';
import teamsService from '../services/leaderboardService';

const getLeaderboard = async (_req: Request, res: Response) => {
  const allTeams = await teamsService.getLeaderboard();

  return res.status(allTeams.status).json(allTeams.message);
};

export default { getLeaderboard };
