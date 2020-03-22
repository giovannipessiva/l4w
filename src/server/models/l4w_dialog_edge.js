/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l4w_dialog_edge', {
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
    node: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'l4w_dialog_node',
        key: 'id'
      }
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: true
    },
    condition_params: {
      type: DataTypes.STRING,
      allowNull: true
    },
    script: {
      type: DataTypes.STRING,
      allowNull: true
    },
    action: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'l4w_dialog_edge'
  });
};
