/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lst_event', {
    event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    action: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    action_key: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'lst_event'
  });
};
