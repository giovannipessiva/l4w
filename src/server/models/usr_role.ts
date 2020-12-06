import * as SequelizeModule from "sequelize"
const { Model, DataTypes } = SequelizeModule;
import { Sequelize, BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, Optional } from 'sequelize';
import type { lst_role, lst_roleId } from './lst_role';
import type { usr_list, usr_listId } from './usr_list';

export interface usr_roleAttributes {
  user: number;
  role: number;
}

export type usr_rolePk = "user" | "role";
export type usr_roleId = usr_role[usr_rolePk];
export type usr_roleCreationAttributes = Optional<usr_roleAttributes, usr_rolePk>;

export class usr_role extends Model<usr_roleAttributes, usr_roleCreationAttributes> implements usr_roleAttributes {
  user!: number;
  role!: number;

  // usr_role belongsTo lst_role
  getlst_role!: BelongsToGetAssociationMixin<lst_role>;
  setlst_role!: BelongsToSetAssociationMixin<lst_role, lst_roleId>;
  createlst_role!: BelongsToCreateAssociationMixin<lst_role>;
  // usr_role belongsTo usr_list
  getusr_list!: BelongsToGetAssociationMixin<usr_list>;
  setusr_list!: BelongsToSetAssociationMixin<usr_list, usr_listId>;
  createusr_list!: BelongsToCreateAssociationMixin<usr_list>;

  static initModel(sequelize: Sequelize): typeof usr_role {
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
