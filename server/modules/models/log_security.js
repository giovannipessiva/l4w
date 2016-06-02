/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_security', {
    event: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    info: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'log_security'
  });
};
