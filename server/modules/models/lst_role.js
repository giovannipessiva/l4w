/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lst_role', {
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'lst_role'
  });
};
