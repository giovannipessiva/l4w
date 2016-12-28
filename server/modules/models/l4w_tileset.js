/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l4w_tileset', {
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    tableName: 'l4w_tileset'
  });
};
