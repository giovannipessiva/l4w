import * as SequelizeModule from "sequelize";
const { DataTypes } = SequelizeModule;
import pgk from "sequelize";
const { Model } = pgk;
export default class log_security extends Model {
    static init(sequelize, DataTypes) {
        super.init({
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
