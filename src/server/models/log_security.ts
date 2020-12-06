import * as SequelizeModule from "sequelize"
const { Model, DataTypes } = SequelizeModule;
import type { Sequelize } from "sequelize";

export interface log_securityAttributes {
  event: string;
  info?: string;
  date?: Date;
}

export type log_securityPk = "event";
export type log_securityId = log_security[log_securityPk];
export type log_securityCreationAttributes = log_securityAttributes & log_securityPk;

export class log_security extends Model<log_securityAttributes, log_securityCreationAttributes> implements log_securityAttributes {
  event!: string;
  info?: string;
  date?: Date;


  static initModel(sequelize: Sequelize): typeof log_security {
    log_security.init({
    event: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    info: {
      type: DataTypes.STRING(127),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'log_security',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "log_security_key",
        unique: true,
        fields: [
          { name: "event" },
        ]
      },
    ]
  });
  return log_security;
  }
}
