import * as SequelizeModule from "sequelize"
const { Model, DataTypes } = SequelizeModule;
import { Sequelize, BelongsToManyAddAssociationsMixin, BelongsToManyCountAssociationsMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyGetAssociationsMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin } from 'sequelize';
import type { log_access, log_accessCreationAttributes, log_accessId } from './log_access';
import type { lst_event, lst_eventId } from './lst_event';
import type { lst_role, lst_roleId } from './lst_role';
import type { usr_event, usr_eventId } from './usr_event';
import type { usr_role, usr_roleId } from './usr_role';
import type { usr_save, usr_saveId } from './usr_save';

export interface usr_listAttributes {
  user: number;
  mail?: string;
}

export type usr_listPk = "user";
export type usr_listId = usr_list[usr_listPk];
export type usr_listCreationAttributes = usr_listAttributes & usr_listPk;

export class usr_list extends Model<usr_listAttributes, usr_listCreationAttributes> implements usr_listAttributes {
  user!: number;
  mail?: string;

  // usr_list hasOne log_access
  getlog_access!: HasOneGetAssociationMixin<log_access>;
  setlog_access!: HasOneSetAssociationMixin<log_access, log_accessId>;
  createlog_access!: HasOneCreateAssociationMixin<log_accessCreationAttributes>;
  // usr_list hasMany usr_event
  getusr_events!: HasManyGetAssociationsMixin<usr_event>;
  setusr_events!: HasManySetAssociationsMixin<usr_event, usr_eventId>;
  addusr_event!: HasManyAddAssociationsMixin<usr_event, usr_eventId>;
  removeusr_event!: HasManyRemoveAssociationsMixin<usr_event, usr_eventId>;
  hasusr_event!: HasManyHasAssociationsMixin<usr_event, usr_eventId>;
  countusr_events!: HasManyCountAssociationsMixin;
  // usr_list belongsToMany lst_event
  getlst_events!: BelongsToManyGetAssociationsMixin<lst_event>;
  setlst_events!: BelongsToManySetAssociationsMixin<lst_event, lst_eventId>;
  addlst_event!: BelongsToManyAddAssociationsMixin<lst_event, lst_eventId>;
  removelst_event!: BelongsToManyRemoveAssociationsMixin<lst_event, lst_eventId>;
  haslst_event!: BelongsToManyHasAssociationsMixin<lst_event, lst_eventId>;
  countlst_events!: BelongsToManyCountAssociationsMixin;
  // usr_list hasMany usr_role
  getusr_roles!: HasManyGetAssociationsMixin<usr_role>;
  setusr_roles!: HasManySetAssociationsMixin<usr_role, usr_roleId>;
  addusr_role!: HasManyAddAssociationsMixin<usr_role, usr_roleId>;
  removeusr_role!: HasManyRemoveAssociationsMixin<usr_role, usr_roleId>;
  hasusr_role!: HasManyHasAssociationsMixin<usr_role, usr_roleId>;
  countusr_roles!: HasManyCountAssociationsMixin;
  // usr_list belongsToMany lst_role
  getlst_roles!: BelongsToManyGetAssociationsMixin<lst_role>;
  setlst_roles!: BelongsToManySetAssociationsMixin<lst_role, lst_roleId>;
  addlst_role!: BelongsToManyAddAssociationsMixin<lst_role, lst_roleId>;
  removelst_role!: BelongsToManyRemoveAssociationsMixin<lst_role, lst_roleId>;
  haslst_role!: BelongsToManyHasAssociationsMixin<lst_role, lst_roleId>;
  countlst_roles!: BelongsToManyCountAssociationsMixin;
  // usr_list hasMany usr_save
  getusr_saves!: HasManyGetAssociationsMixin<usr_save>;
  setusr_saves!: HasManySetAssociationsMixin<usr_save, usr_saveId>;
  addusr_save!: HasManyAddAssociationsMixin<usr_save, usr_saveId>;
  removeusr_save!: HasManyRemoveAssociationsMixin<usr_save, usr_saveId>;
  hasusr_save!: HasManyHasAssociationsMixin<usr_save, usr_saveId>;
  countusr_saves!: HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize): typeof usr_list {
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
