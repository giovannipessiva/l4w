/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l4w_generic_string_values', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'l4w_generic_string',
        key: 'id'
      }
    },
    string: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    condition_params: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'l4w_generic_string_values'
  });
};
