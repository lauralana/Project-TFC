import { Request, Response } from 'express';
import loginService from '../services/loginService';

const insertLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await loginService.insertLoginService(email, password);

  if (user.status >= 400) {
    return res.status(user.status).json({ message: user.message });
  }
  res.status(user.status).json(user.message);
};

export default { insertLoginController };
