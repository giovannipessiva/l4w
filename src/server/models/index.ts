//import { readdirSync } from "fs"
//import { join, resolve } from "path"
//@ts-ignore TS1192
import { Options } from "sequelize"
import * as SequelizeModule from "sequelize"

import * as initModelsModule from "init-models"
import { initModels } from "init-models"

export let models: any = initModelsModule;
export let sequelizeInstance: SequelizeModule.Sequelize; 

if (process.env.DATABASE_URL === undefined) {
    console.warn("Env variable DATABASE_URL undefined");
} else {
    initSequelizeModules();
}

async function initSequelizeModules() {
    let sequelizeOptions: Options = {
        dialect: "postgres",
        protocol: "postgres",
        define: {
            timestamps: false
        },
        logging: false
    };
    sequelizeInstance = new SequelizeModule.Sequelize(process.env.DATABASE_URL!, sequelizeOptions);

    initModels(sequelizeInstance);

    /*
    const dirname = join(".", "dist", "server", "l4w", "src", "server", "models");
    readdirSync(dirname).filter(function(file: string) {
        return (file.indexOf(".") !== 0) && (file !== "index.mjs");
    }).forEach(function(file: string) {
        console.log(resolve(join(dirname, file)));
        //let model = require(join(dirname, file))(sequelizeInstance, SequelizeModule.Sequelize);
        let modulePath = join(dirname, file); 
        //@ts-ignore TS1323
        import(modulePath).then(importedModelModule => {
            let model = importedModelModule(sequelizeInstance, SequelizeModule.Sequelize);
            models[model.name] = model;
        }).catch(e => {
            console.trace(e);
            process.exit();
        });
       
    });

    Object.keys(models).forEach(function(modelName) {
        if ("associate" in models[modelName]) {
            models[modelName].associate(models);
        }
    });
    */
}
