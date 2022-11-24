import { Request, Response } from 'express';
import loginService from '../services/loginService';

const insertLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { status, message } = await loginService.insertLoginService(email, password);

  return res.status(status).json(message);
};

export default { insertLoginController };
