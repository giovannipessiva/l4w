/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l4w_generic_string', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'l4w_generic_string'
  });
};
