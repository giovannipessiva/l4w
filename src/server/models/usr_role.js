/* jshint indent: 2 */
import pkg from 'sequelize';
const { Model } = pkg;

export default class usr_role extends Model {
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
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lst_role',
        key: 'role'
      }
    }
  }, {
    sequelize,
    tableName: 'usr_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usr_role_key",
        unique: true,
        fields: [
          { name: "user" },
          { name: "role" },
        ]
      },
    ]
  });
  return usr_role;
  }
}
