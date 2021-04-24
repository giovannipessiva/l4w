import * as SequelizeModule from "sequelize";
const { DataTypes } = SequelizeModule;
import pgk from "sequelize";
const { Model } = pgk;
export default class lst_event extends Model {
    static init(sequelize, DataTypes) {
        super.init({
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
