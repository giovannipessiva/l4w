/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface log_securityAttributes {
  event?: string;
  info?: string;
  date?: Date;
}

export class log_security extends Model<log_securityAttributes, log_securityAttributes> implements log_securityAttributes {
  event?: string;
  info?: string;
  date?: Date;

  static initModel(sequelize: Sequelize) {
    log_security.init({
    event: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    info: {
      type: DataTypes.STRING(127),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'log_security',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "log_security_key",
        unique: true,
        fields: [
          { name: "event" },
        ]
      },
    ]
  });
  return log_security;
  }
}
