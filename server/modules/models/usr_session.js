/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usr_session', {
    sid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'usr_session'
  });
};
