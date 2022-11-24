// import 'dotenv/config';
import * as JWT from 'jsonwebtoken';

require('dotenv/config');

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
    // { data: { id: 1 }, iat: 1669304180, exp: 1669908980 }
    const tokenVerify = JWT.verify(token, jwtSecret) as { data: { id: number } };
    return tokenVerify.data.id;
  } catch (error) {
    return false;
  }
};

export default {
  generateToken,
  verifyToken,
};
