import { Options, Sequelize } from "sequelize"

import { initModels } from "./init-models"

export let sequelizeInstance: Sequelize; 

if (process.env.DATABASE_URL === undefined) {
    console.warn("Env variable DATABASE_URL undefined");
} else {
    initSequelizeModules();
}

function initSequelizeModules() {
    let sequelizeOptions: Options = {
        dialect: "postgres",
        protocol: "postgres",
        define: {
            timestamps: false
        },
        logging: false
    };
    sequelizeInstance = new Sequelize(process.env.DATABASE_URL!, sequelizeOptions);

    initModels(sequelizeInstance);
}
