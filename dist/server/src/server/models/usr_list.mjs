import * as SequelizeModule from "sequelize";
const { DataTypes } = SequelizeModule;
import pgk from "sequelize";
const { Model } = pgk;
export default class usr_list extends Model {
    static init(sequelize, DataTypes) {
        super.init({
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
