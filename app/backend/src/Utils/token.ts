import 'dotenv/config';
import * as JWT from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET as string;

const generateToken = (id: number) => {
  const token = JWT.sign({ data: { id } }, jwtSecret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token: string) => {
  try {
    const tokenVerify = JWT.verify(token, jwtSecret);
    return tokenVerify;
  } catch (error) {
    return false;
  }
};

export default {
  generateToken,
  verifyToken,
};
