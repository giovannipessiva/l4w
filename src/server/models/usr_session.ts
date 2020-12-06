import * as SequelizeModule from "sequelize"
const { Model, DataTypes } = SequelizeModule;
import type { Optional, Sequelize } from 'sequelize';

export interface usr_sessionAttributes {
  sid: string;
  expires?: Date;
  data?: string;
}

export type usr_sessionPk = "sid";
export type usr_sessionId = usr_session[usr_sessionPk];
export type usr_sessionCreationAttributes = Optional<usr_sessionAttributes, usr_sessionPk>;

export class usr_session extends Model<usr_sessionAttributes, usr_sessionCreationAttributes> implements usr_sessionAttributes {
  sid!: string;
  expires?: Date;
  data?: string;


  static initModel(sequelize: Sequelize): typeof usr_session {
    usr_session.init({
    sid: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    expires: {
      type: DataTypes.TIME,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usr_session',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usr_session_key",
        unique: true,
        fields: [
          { name: "sid" },
        ]
      },
    ]
  });
  return usr_session;
  }
}
