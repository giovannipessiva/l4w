/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface lst_eventAttributes {
  event?: number;
  message?: string;
  type?: string;
  action?: string;
  action_key?: string;
}

export class lst_event extends Model<lst_eventAttributes, lst_eventAttributes> implements lst_eventAttributes {
  event?: number;
  message?: string;
  type?: string;
  action?: string;
  action_key?: string;

  static initModel(sequelize: Sequelize) {
    lst_event.init({
    event: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    message: {
      type: DataTypes.STRING(511),
      allowNull: true
    },
    type: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    action: {
      type: DataTypes.CHAR(31),
      allowNull: true
    },
    action_key: {
      type: DataTypes.CHAR(31),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lst_event',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "l4w_event_key",
        unique: true,
        fields: [
          { name: "event" },
        ]
      },
    ]
  });
  return lst_event;
  }
}
