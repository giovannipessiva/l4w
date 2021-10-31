import { Options } from "sequelize"
import * as SequelizeModule from "sequelize"

import { useSSLDatabaseConnection } from "../security"

export let models: Map<String, SequelizeModule.Model> = new Map();
export let sequelizeInstance: SequelizeModule.Sequelize; 

if (process.env.DATABASE_URL === undefined) {
    console.warn("Env variable DATABASE_URL undefined");
} else {
    initSequelizeModules();
}

/* eslint-disable @typescript-eslint/no-require-imports */
function initSequelizeModules() {
    let ssl: any = false;
    if(useSSLDatabaseConnection()) {
        ssl = {
            require: true,
            rejectUnauthorized: false // https://stackoverflow.com/a/61350416/2700039
        };
    }
    let sequelizeOptions: Options = {
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {
            ssl: ssl
        },
        define: {
            timestamps: false
        },
        logging: false
    };

    sequelizeInstance = new SequelizeModule.Sequelize(process.env.DATABASE_URL!, sequelizeOptions);

    // Ugly but safer then dynamic module import
    // Need to use "require" instead of "import" since there are no TS definitions
    let sequelizeModelModule: any;
    sequelizeModelModule = require("./log_access.js");
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = require("./log_security.js");
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = require("./lst_event.js");
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = require("./lst_role.js");
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = require("./usr_event.js");
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = require("./usr_list.js");
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = require("./usr_role.js");
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = require("./usr_save.js");
    onSequelizeModuleImport(sequelizeModelModule);
}

function onSequelizeModuleImport(importedModelModule: any) {
    try {
        let model = importedModelModule.default.init(sequelizeInstance, SequelizeModule.Sequelize);
        models.set(model.name, model);
    } catch(e) {
        console.trace(e);
        process.exit();
    };
}
