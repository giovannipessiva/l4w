/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface log_accessAttributes {
  user?: number;
  first_seen?: Date;
  last_seen?: Date;
  access_counter?: number;
}

export class log_access extends Model<log_accessAttributes, log_accessAttributes> implements log_accessAttributes {
  user?: number;
  first_seen?: Date;
  last_seen?: Date;
  access_counter?: number;

  static initModel(sequelize: Sequelize) {
    log_access.init({
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usr_list',
        key: 'user'
      }
    },
    first_seen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_seen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    access_counter: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'log_access',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "log_access_key",
        unique: true,
        fields: [
          { name: "user" },
        ]
      },
    ]
  });
  return log_access;
  }
}
