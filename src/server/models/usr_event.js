/* jshint indent: 2 */
import pkg from 'sequelize';
const { Model } = pkg;

export default class usr_event extends Model {
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
