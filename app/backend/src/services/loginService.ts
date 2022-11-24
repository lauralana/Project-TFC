import { validate } from 'email-validator';
// import { ILogin } from 'src/Interface/ILogin';
import * as bcrypt from 'bcryptjs';
import generateToken from '../Utils/token';
import usersModel from '../database/models/UsersModel';

const insertLoginService = async (email: string, password: string) => {
  if (!email || !password) {
    return { status: 400, message: { message: 'All fields must be filled' } };
  }
  const errorMsg = 'Incorrect email or password';
  if (!validate(email)) {
    return { status: 401, message: { message: errorMsg } };
  }

  const user = await usersModel.findOne({ where: { email } });
  if (user) {
    const { id } = user;
    const encryptedPassword = await bcrypt.compare(password, user.password);
    if (encryptedPassword) {
      return { status: 200, message: { token: generateToken.generateToken(Number(id)) } };
    }
  }
  return { status: 401, message: { message: errorMsg } };
};

const getLoginService = async (token: string) => {
  const id = generateToken.verifyToken(token);
  const userById = await usersModel.findOne({ where: { id } });

  return { status: 200, message: { role: userById?.dataValues.role } };
};

export default { insertLoginService, getLoginService };

// users {
//    dataValues: {
//      id: 1,
//      username: 'Admin',
//      email: 'admin@admin.com',
//      password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
//      role: 'admin'
//    }
