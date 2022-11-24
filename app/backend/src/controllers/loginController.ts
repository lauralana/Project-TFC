import { Request, Response } from 'express';
import loginService from '../services/loginService';

const insertLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { status, message } = await loginService.insertLoginService(email, password);

  return res.status(status).json(message);
};

const getLoginController = async (req: Request, res: Response) => {
  const token = req.header('authorization') as string;
  const { status, message } = await loginService.getLoginService(token);

  return res.status(status).json(message);
};

export default { insertLoginController, getLoginController };
