import * as SequelizeModule from "sequelize"
const { Model, DataTypes } = SequelizeModule;
import type { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, Optional, Sequelize } from "sequelize";
import type { usr_list, usr_listId } from './usr_list';

export interface log_accessAttributes {
  user: number;
  first_seen?: Date;
  last_seen?: Date;
  access_counter?: number;
}

export type log_accessPk = "user";
export type log_accessId = log_access[log_accessPk];
export type log_accessCreationAttributes = Optional<log_accessAttributes, log_accessPk>;

export class log_access extends Model<log_accessAttributes, log_accessCreationAttributes> implements log_accessAttributes {
  user!: number;
  first_seen?: Date;
  last_seen?: Date;
  access_counter?: number;

  // log_access belongsTo usr_list
  getusr_list!: BelongsToGetAssociationMixin<usr_list>;
  setusr_list!: BelongsToSetAssociationMixin<usr_list, usr_listId>;
  createusr_list!: BelongsToCreateAssociationMixin<usr_list>;

  static initModel(sequelize: Sequelize): typeof log_access {
    log_access.init({
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usr_list',
        key: 'user'
      }
    },
    first_seen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_seen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    access_counter: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'log_access',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "log_access_key",
        unique: true,
        fields: [
          { name: "user" },
        ]
      },
    ]
  });
  return log_access;
  }
}
