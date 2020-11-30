var DataTypes = require("sequelize").DataTypes;
var _log_access = require("./log_access");
var _log_security = require("./log_security");
var _lst_event = require("./lst_event");
var _lst_role = require("./lst_role");
var _usr_event = require("./usr_event");
var _usr_list = require("./usr_list");
var _usr_role = require("./usr_role");
var _usr_save = require("./usr_save");
var _usr_session = require("./usr_session");

function initModels(sequelize) {
  var log_access = _log_access(sequelize, DataTypes);
  var log_security = _log_security(sequelize, DataTypes);
  var lst_event = _lst_event(sequelize, DataTypes);
  var lst_role = _lst_role(sequelize, DataTypes);
  var usr_event = _usr_event(sequelize, DataTypes);
  var usr_list = _usr_list(sequelize, DataTypes);
  var usr_role = _usr_role(sequelize, DataTypes);
  var usr_save = _usr_save(sequelize, DataTypes);
  var usr_session = _usr_session(sequelize, DataTypes);

  log_access.belongsTo(usr_list, { foreignKey: "user"});
  usr_list.hasOne(log_access, { foreignKey: "user"});
  usr_event.belongsTo(lst_event, { foreignKey: "event"});
  usr_list.belongsToMany(lst_event, { through: usr_event, foreignKey: "user", otherKey: "event" });
  lst_event.hasMany(usr_event, { foreignKey: "event"});
  usr_event.belongsTo(usr_list, { foreignKey: "user"});
  lst_event.belongsToMany(usr_list, { through: usr_event, foreignKey: "event", otherKey: "user" });
  usr_list.hasMany(usr_event, { foreignKey: "user"});
  usr_role.belongsTo(lst_role, { foreignKey: "role"});
  usr_list.belongsToMany(lst_role, { through: usr_role, foreignKey: "user", otherKey: "role" });
  lst_role.hasMany(usr_role, { foreignKey: "role"});
  usr_role.belongsTo(usr_list, { foreignKey: "user"});
  lst_role.belongsToMany(usr_list, { through: usr_role, foreignKey: "role", otherKey: "user" });
  usr_list.hasMany(usr_role, { foreignKey: "user"});
  usr_save.belongsTo(usr_list, { foreignKey: "user"});
  usr_list.hasMany(usr_save, { foreignKey: "user"});

  return {
    log_access,
    log_security,
    lst_event,
    lst_role,
    usr_event,
    usr_list,
    usr_role,
    usr_save,
    usr_session,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
