import type { Model, Sequelize } from "sequelize";
import { log_access } from "./log_access";
import type { log_accessAttributes, log_accessCreationAttributes } from "./log_access";
import { log_security } from "./log_security";
import type { log_securityAttributes, log_securityCreationAttributes } from "./log_security";
import { lst_event } from "./lst_event";
import type { lst_eventAttributes, lst_eventCreationAttributes } from "./lst_event";
import { lst_role } from "./lst_role";
import type { lst_roleAttributes, lst_roleCreationAttributes } from "./lst_role";
import { usr_event } from "./usr_event";
import type { usr_eventAttributes, usr_eventCreationAttributes } from "./usr_event";
import { usr_list } from "./usr_list";
import type { usr_listAttributes, usr_listCreationAttributes } from "./usr_list";
import { usr_role } from "./usr_role";
import type { usr_roleAttributes, usr_roleCreationAttributes } from "./usr_role";
import { usr_save } from "./usr_save";
import type { usr_saveAttributes, usr_saveCreationAttributes } from "./usr_save";
import { usr_session } from "./usr_session";
import type { usr_sessionAttributes, usr_sessionCreationAttributes } from "./usr_session";

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
  log_accessCreationAttributes,
  log_securityAttributes,
  log_securityCreationAttributes,
  lst_eventAttributes,
  lst_eventCreationAttributes,
  lst_roleAttributes,
  lst_roleCreationAttributes,
  usr_eventAttributes,
  usr_eventCreationAttributes,
  usr_listAttributes,
  usr_listCreationAttributes,
  usr_roleAttributes,
  usr_roleCreationAttributes,
  usr_saveAttributes,
  usr_saveCreationAttributes,
  usr_sessionAttributes,
  usr_sessionCreationAttributes,
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

  usr_list.belongsToMany(lst_event, { through: usr_event as typeof Model, foreignKey: "user", otherKey: "event" });
  lst_event.belongsToMany(usr_list, { through: usr_event as typeof Model, foreignKey: "event", otherKey: "user" });
  usr_list.belongsToMany(lst_role, { through: usr_role as typeof Model, foreignKey: "user", otherKey: "role" });
  lst_role.belongsToMany(usr_list, { through: usr_role as typeof Model, foreignKey: "role", otherKey: "user" });
  log_access.belongsTo(usr_list, { foreignKey: "user"});
  usr_list.hasOne(log_access, { foreignKey: "user"});
  usr_event.belongsTo(lst_event, { foreignKey: "event"});
  lst_event.hasMany(usr_event, { foreignKey: "event"});
  usr_event.belongsTo(usr_list, { foreignKey: "user"});
  usr_list.hasMany(usr_event, { foreignKey: "user"});
  usr_role.belongsTo(lst_role, { foreignKey: "role"});
  lst_role.hasMany(usr_role, { foreignKey: "role"});
  usr_role.belongsTo(usr_list, { foreignKey: "user"});
  usr_list.hasMany(usr_role, { foreignKey: "user"});
  usr_save.belongsTo(usr_list, { foreignKey: "user"});
  usr_list.hasMany(usr_save, { foreignKey: "user"});

  return {
    log_access: log_access,
    log_security: log_security,
    lst_event: lst_event,
    lst_role: lst_role,
    usr_event: usr_event,
    usr_list: usr_list,
    usr_role: usr_role,
    usr_save: usr_save,
    usr_session: usr_session,
  };
}
