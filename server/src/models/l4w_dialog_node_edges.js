/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l4w_dialog_node_edges', {
    node: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'l4w_dialog_node',
        key: 'id'
      }
    },
    edge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'l4w_dialog_edge',
        key: 'id'
      }
    }
  }, {
    tableName: 'l4w_dialog_node_edges'
  });
};
