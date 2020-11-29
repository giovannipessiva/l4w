/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface usr_listAttributes {
  user?: number;
  mail?: string;
}

export class usr_list extends Model<usr_listAttributes, usr_listAttributes> implements usr_listAttributes {
  user?: number;
  mail?: string;

  static initModel(sequelize: Sequelize) {
    usr_list.init({
    user: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mail: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usr_list',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usr_list_key",
        unique: true,
        fields: [
          { name: "user" },
        ]
      },
    ]
  });
  return usr_list;
  }
}
