import * as SequelizeModule from "sequelize";
const { DataTypes } = SequelizeModule;
import pgk from "sequelize";
const { Model } = pgk;
export default class usr_save extends Model {
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
