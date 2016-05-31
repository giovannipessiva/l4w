/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_usr_access', {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    first_seen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_seen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    access_counter: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'log_usr_access'
  });
};
