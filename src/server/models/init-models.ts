import type { Sequelize } from "sequelize";
import { log_access } from "./log_access";
import type { log_accessAttributes } from "./log_access";
import { log_security } from "./log_security";
import type { log_securityAttributes } from "./log_security";
import { lst_event } from "./lst_event";
import type { lst_eventAttributes } from "./lst_event";
import { lst_role } from "./lst_role";
import type { lst_roleAttributes } from "./lst_role";
import { usr_event } from "./usr_event";
import type { usr_eventAttributes } from "./usr_event";
import { usr_list } from "./usr_list";
import type { usr_listAttributes } from "./usr_list";
import { usr_role } from "./usr_role";
import type { usr_roleAttributes } from "./usr_role";
import { usr_save } from "./usr_save";
import type { usr_saveAttributes } from "./usr_save";
import { usr_session } from "./usr_session";
import type { usr_sessionAttributes } from "./usr_session";

export {
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


export type {
  log_accessAttributes,
  log_securityAttributes,
  lst_eventAttributes,
  lst_roleAttributes,
  usr_eventAttributes,
  usr_listAttributes,
  usr_roleAttributes,
  usr_saveAttributes,
  usr_sessionAttributes,
};

export function initModels(sequelize: Sequelize) {
  log_access.initModel(sequelize);
  log_security.initModel(sequelize);
  lst_event.initModel(sequelize);
  lst_role.initModel(sequelize);
  usr_event.initModel(sequelize);
  usr_list.initModel(sequelize);
  usr_role.initModel(sequelize);
  usr_save.initModel(sequelize);
  usr_session.initModel(sequelize);

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
