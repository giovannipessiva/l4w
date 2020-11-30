/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class usr_session extends Model {
  static init(sequelize, DataTypes) {
  super.init({
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
