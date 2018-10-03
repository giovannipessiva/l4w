/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usr_event', {
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    event: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 'usr_event'
  });
};
