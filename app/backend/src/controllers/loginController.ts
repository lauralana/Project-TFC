import { Request, Response } from 'express';
import loginService from '../services/loginService';

const insertLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await loginService.insertLoginService(email, password);

  if (user) {
    return res.status(user.status).json(user.message);
    // console.log(user)
  }
};

export default { insertLoginController };
