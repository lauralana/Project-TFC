import * as express from 'express';

// rotas do controller
import login from '../controllers/loginController';

// rota com as funções de validação

const route = express.Router();

// rota dos verbos
route.post('/login', login.insertLoginController);

export default route;
