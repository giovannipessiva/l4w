import * as SequelizeModule from "sequelize"
const { Model, DataTypes } = SequelizeModule;
import type { Sequelize, BelongsToManyAddAssociationsMixin, BelongsToManyCountAssociationsMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyGetAssociationsMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin } from 'sequelize';
import type { usr_event, usr_eventId } from './usr_event';
import type { usr_list, usr_listId } from './usr_list';

export interface lst_eventAttributes {
  event: number;
  message?: string;
  type?: string;
  action?: string;
  action_key?: string;
}

export type lst_eventPk = "event";
export type lst_eventId = lst_event[lst_eventPk];
export type lst_eventCreationAttributes = lst_eventAttributes & lst_eventPk;

export class lst_event extends Model<lst_eventAttributes, lst_eventCreationAttributes> implements lst_eventAttributes {
  event!: number;
  message?: string;
  type?: string;
  action?: string;
  action_key?: string;

  // lst_event hasMany usr_event
  getusr_events!: HasManyGetAssociationsMixin<usr_event>;
  setusr_events!: HasManySetAssociationsMixin<usr_event, usr_eventId>;
  addusr_event!: HasManyAddAssociationsMixin<usr_event, usr_eventId>;
  removeusr_event!: HasManyRemoveAssociationsMixin<usr_event, usr_eventId>;
  hasusr_event!: HasManyHasAssociationsMixin<usr_event, usr_eventId>;
  countusr_events!: HasManyCountAssociationsMixin;
  // lst_event belongsToMany usr_list
  getusr_lists!: BelongsToManyGetAssociationsMixin<usr_list>;
  setusr_lists!: BelongsToManySetAssociationsMixin<usr_list, usr_listId>;
  addusr_list!: BelongsToManyAddAssociationsMixin<usr_list, usr_listId>;
  removeusr_list!: BelongsToManyRemoveAssociationsMixin<usr_list, usr_listId>;
  hasusr_list!: BelongsToManyHasAssociationsMixin<usr_list, usr_listId>;
  countusr_lists!: BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize): typeof lst_event {
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
