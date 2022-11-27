import { NextFunction, Request, Response } from 'express';
import verifyToken from '../Utils/token';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('authorization') as string;
  console.log(token);
  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  if (verifyToken.verifyToken(token) === false) {
    return res.status(401).json({
      message: 'Token must be a valid token',
    });
  }
  console.log('here');
  next();
};

export default {
  validateToken,
};
