/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l4w_map', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    tableName: 'l4w_map',
    freezeTableName: true
  });
};
