/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l4w_dialog_node', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    string: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    generic_string: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'l4w_generic_string',
        key: 'id'
      }
    }
  }, {
    tableName: 'l4w_dialog_node'
  });
};
