import * as express from 'express';

// rotas do controller
import login from '../controllers/loginController';
import teams from '../controllers/teamsController';
import matches from '../controllers/matchesController';
import leaderboard from '../controllers/leaderboardController';
// rota com as funções de validação
import validate from '../middleware/validateToken';

const route = express.Router();

// rota dos verbos
route.post('/login', login.insertLoginController);
route.get('/login/validate', login.getLoginController);

route.get('/teams', teams.getAllTeamsController);
route.get('/teams/:id', teams.getTeamsByIdController);

route.get('/matches', matches.getAllMatchesController);
route.post('/matches', validate.validateToken, matches.insertMatchesController);
route.patch('/matches/:id/finish', matches.updateMatchesController);
route.patch('/matches/:id', matches.updateCurrentMatches);

route.get('/leaderboard/home', leaderboard.getHomeTeamBoard);
route.get('/leaderboard/away', leaderboard.getAwayTeamBoard);
export default route;
