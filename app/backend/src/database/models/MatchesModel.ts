import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';

class MatchesModel extends Model {
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchesModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    homeTeam: {
      type: INTEGER,
    },
    homeTeamGoals: {
      type: INTEGER,
      allowNull: false,
    },
    awayTeam: {
      type: INTEGER,
    },
    awayTeamGoals: {
      type: INTEGER,
      allowNull: false,
    },
    inProgress: {
      type: BOOLEAN,
    },
  },
  {
    underscored: true,
    sequelize: db,
    freezeTableName: true,
    modelName: 'matches',
    timestamps: false,
  },
);

export default MatchesModel;
