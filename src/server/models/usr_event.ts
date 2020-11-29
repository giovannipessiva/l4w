/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface usr_eventAttributes {
  user?: number;
  event?: number;
  date?: Date;
}

export class usr_event extends Model<usr_eventAttributes, usr_eventAttributes> implements usr_eventAttributes {
  user?: number;
  event?: number;
  date?: Date;

  static initModel(sequelize: Sequelize) {
    usr_event.init({
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usr_list',
        key: 'user'
      }
    },
    event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lst_event',
        key: 'event'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usr_event',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usr_event_key",
        unique: true,
        fields: [
          { name: "user" },
          { name: "event" },
        ]
      },
    ]
  });
  return usr_event;
  }
}
