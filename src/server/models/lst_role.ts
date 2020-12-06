import * as SequelizeModule from "sequelize"
const { Model, DataTypes } = SequelizeModule;
import { Sequelize, BelongsToManyAddAssociationsMixin, BelongsToManyCountAssociationsMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyGetAssociationsMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin } from 'sequelize';
import type { usr_list, usr_listId } from './usr_list';
import type { usr_role, usr_roleId } from './usr_role';

export interface lst_roleAttributes {
  role: number;
  name?: string;
}

export type lst_rolePk = "role";
export type lst_roleId = lst_role[lst_rolePk];
export type lst_roleCreationAttributes = lst_roleAttributes & lst_rolePk;

export class lst_role extends Model<lst_roleAttributes, lst_roleCreationAttributes> implements lst_roleAttributes {
  role!: number;
  name?: string;

  // lst_role hasMany usr_role
  getusr_roles!: HasManyGetAssociationsMixin<usr_role>;
  setusr_roles!: HasManySetAssociationsMixin<usr_role, usr_roleId>;
  addusr_role!: HasManyAddAssociationsMixin<usr_role, usr_roleId>;
  removeusr_role!: HasManyRemoveAssociationsMixin<usr_role, usr_roleId>;
  hasusr_role!: HasManyHasAssociationsMixin<usr_role, usr_roleId>;
  countusr_roles!: HasManyCountAssociationsMixin;
  // lst_role belongsToMany usr_list
  getusr_lists!: BelongsToManyGetAssociationsMixin<usr_list>;
  setusr_lists!: BelongsToManySetAssociationsMixin<usr_list, usr_listId>;
  addusr_list!: BelongsToManyAddAssociationsMixin<usr_list, usr_listId>;
  removeusr_list!: BelongsToManyRemoveAssociationsMixin<usr_list, usr_listId>;
  hasusr_list!: BelongsToManyHasAssociationsMixin<usr_list, usr_listId>;
  countusr_lists!: BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize): typeof lst_role {
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
