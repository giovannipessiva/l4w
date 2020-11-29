/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface lst_roleAttributes {
  role?: number;
  name?: string;
}

export class lst_role extends Model<lst_roleAttributes, lst_roleAttributes> implements lst_roleAttributes {
  role?: number;
  name?: string;

  static initModel(sequelize: Sequelize) {
    lst_role.init({
    role: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(31),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lst_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "l4w_role_key",
        unique: true,
        fields: [
          { name: "role" },
        ]
      },
    ]
  });
  return lst_role;
  }
}
