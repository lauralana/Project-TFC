import * as express from 'express';

// rotas do controller
import login from '../controllers/loginController';
import teams from '../controllers/teamsController';
import matches from '../controllers/matchesController';
// rota com as funções de validação

const route = express.Router();

// rota dos verbos
route.post('/login', login.insertLoginController);
route.get('/login/validate', login.getLoginController);

route.get('/teams', teams.getAllTeamsController);
route.get('/teams/:id', teams.getTeamsByIdController);

route.get('/matches', matches.getAllMatchesController);
route.post('/matches', matches.insertMatchesController);
export default route;
