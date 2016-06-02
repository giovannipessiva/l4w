/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usr_list', {
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'usr_list'
  });
};
