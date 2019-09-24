/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usr_role', {
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
      references: {
        model: 'lst_role',
        key: 'role'
      }
    }
  }, {
    tableName: 'usr_role'
  });
};
