import * as SequelizeModule from "sequelize";
const { DataTypes } = SequelizeModule;
import pgk from "sequelize";
const { Model } = pgk;
export default class log_access extends Model {
    static init(sequelize, DataTypes) {
        super.init({
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
