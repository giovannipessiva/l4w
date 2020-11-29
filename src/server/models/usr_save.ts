/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface usr_saveAttributes {
  user?: number;
  id?: number;
  date?: Date;
  name?: string;
  save?: any;
}

export class usr_save extends Model<usr_saveAttributes, usr_saveAttributes> implements usr_saveAttributes {
  user?: number;
  id?: number;
  date?: Date;
  name?: string;
  save?: any;

  static initModel(sequelize: Sequelize) {
    usr_save.init({
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usr_list',
        key: 'user'
      }
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.CHAR(31),
      allowNull: true
    },
    save: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usr_save',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usr_save_key",
        unique: true,
        fields: [
          { name: "user" },
          { name: "id" },
        ]
      },
    ]
  });
  return usr_save;
  }
}
