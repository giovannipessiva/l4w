/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface usr_roleAttributes {
  user?: number;
  role?: number;
}

export class usr_role extends Model<usr_roleAttributes, usr_roleAttributes> implements usr_roleAttributes {
  user?: number;
  role?: number;

  static initModel(sequelize: Sequelize) {
    usr_role.init({
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usr_list',
        key: 'user'
      }
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lst_role',
        key: 'role'
      }
    }
  }, {
    sequelize,
    tableName: 'usr_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usr_role_key",
        unique: true,
        fields: [
          { name: "user" },
          { name: "role" },
        ]
      },
    ]
  });
  return usr_role;
  }
}
