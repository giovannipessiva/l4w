/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface usr_sessionAttributes {
  sid?: string;
  expires?: Date;
  data?: string;
}

export class usr_session extends Model<usr_sessionAttributes, usr_sessionAttributes> implements usr_sessionAttributes {
  sid?: string;
  expires?: Date;
  data?: string;

  static initModel(sequelize: Sequelize) {
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
