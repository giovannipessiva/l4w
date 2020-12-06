import * as SequelizeModule from "sequelize"
const { Model, DataTypes } = SequelizeModule;
import { Sequelize, BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, Optional } from 'sequelize';
import type { lst_event, lst_eventId } from './lst_event';
import type { usr_list, usr_listId } from './usr_list';

export interface usr_eventAttributes {
  user: number;
  event: number;
  date?: Date;
}

export type usr_eventPk = "user" | "event";
export type usr_eventId = usr_event[usr_eventPk];
export type usr_eventCreationAttributes = Optional<usr_eventAttributes, usr_eventPk>;

export class usr_event extends Model<usr_eventAttributes, usr_eventCreationAttributes> implements usr_eventAttributes {
  user!: number;
  event!: number;
  date?: Date;

  // usr_event belongsTo lst_event
  getlst_event!: BelongsToGetAssociationMixin<lst_event>;
  setlst_event!: BelongsToSetAssociationMixin<lst_event, lst_eventId>;
  createlst_event!: BelongsToCreateAssociationMixin<lst_event>;
  // usr_event belongsTo usr_list
  getusr_list!: BelongsToGetAssociationMixin<usr_list>;
  setusr_list!: BelongsToSetAssociationMixin<usr_list, usr_listId>;
  createusr_list!: BelongsToCreateAssociationMixin<usr_list>;

  static initModel(sequelize: Sequelize): typeof usr_event {
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
