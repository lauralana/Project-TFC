import { validate } from 'email-validator';
// import { ILogin } from 'src/Interface/ILogin';
import * as bcrypt from 'bcryptjs';
import generateToken from '../Utils/token';
import usersModel from '../database/models/UsersModel';

const insertLoginService = async (email: string, password: string) => {
  if (!email || !password) {
    return { status: 400, message: 'All fields must be filled' };
  }
  if (!validate(email)) {
    return { status: 401, message: 'Incorrect email or password' };
  }
  const user = await usersModel.findOne({ where: { email } });
  if (user) {
    const { id } = user;
    const encryptedPassword = await bcrypt.compare(password, user.password);
    if (encryptedPassword) {
      return { status: 200, message: { token: generateToken.generateToken(Number(id)) } };
    }
    return { status: 401, message: { message: 'Incorrect email or password' } };
  }
};
export default { insertLoginService };
