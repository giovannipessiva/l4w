import * as SequelizeModule from "sequelize";
const { DataTypes } = SequelizeModule;
import pgk from "sequelize";
const { Model } = pgk;
export default class lst_role extends Model {
    static init(sequelize, DataTypes) {
        super.init({
            role: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(31),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'lst_role',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "l4w_role_key",
                    unique: true,
                    fields: [
                        { name: "role" },
                    ]
                },
            ]
        });
        return lst_role;
    }
}
