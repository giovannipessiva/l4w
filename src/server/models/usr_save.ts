import * as SequelizeModule from "sequelize"
const { Model, DataTypes } = SequelizeModule;
import { Sequelize, BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, Optional } from 'sequelize';
import type { usr_list, usr_listId } from './usr_list';

export interface usr_saveAttributes {
  user: number;
  id: number;
  date?: Date;
  name?: string;
  save: any;
}

export type usr_savePk = "user" | "id";
export type usr_saveId = usr_save[usr_savePk];
export type usr_saveCreationAttributes = Optional<usr_saveAttributes, usr_savePk>;

export class usr_save extends Model<usr_saveAttributes, usr_saveCreationAttributes> implements usr_saveAttributes {
  user!: number;
  id!: number;
  date?: Date;
  name?: string;
  save!: any;

  // usr_save belongsTo usr_list
  getusr_list!: BelongsToGetAssociationMixin<usr_list>;
  setusr_list!: BelongsToSetAssociationMixin<usr_list, usr_listId>;
  createusr_list!: BelongsToCreateAssociationMixin<usr_list>;

  static initModel(sequelize: Sequelize): typeof usr_save {
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
