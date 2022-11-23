import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class UsersModel extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
  declare role: string;
}
UsersModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    username: {
      type: STRING,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    role: {
      type: STRING,
    },
  },
  {
    underscored: true,
    sequelize: db,
    freezeTableName: true,
    modelName: 'users',
    timestamps: false,
  },
);

export default UsersModel;
