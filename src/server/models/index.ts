import { readdirSync } from "fs"
import { join, resolve } from "path"
//@ts-ignore TS1192
import { Options } from "sequelize"
import * as SequelizeModule from "sequelize"
import * as log_access from "./log_access"

export let models: any = {};
export let sequelizeInstance: SequelizeModule.Sequelize; 

if (process.env.DATABASE_URL === undefined) {
    console.warn("Env variable DATABASE_URL undefined");
} else {
    initSequelizeModules();
}

function initSequelizeModules() {
    log_access.init(null, null);
    let sequelizeOptions: Options = {
        dialect: "postgres",
        protocol: "postgres",
        define: {
            timestamps: false
        },
        logging: false
    };
    sequelizeInstance = new SequelizeModule.Sequelize(process.env.DATABASE_URL!, sequelizeOptions);

    const dirname = join("dist", "server", "l4w", "src", "server", "models");
    readdirSync(dirname).filter(function(file: string) {
        return file.indexOf(".") !== 0 && file !== "index.mjs" && file !== "init-models.mjs" && file.indexOf(".mjs") !== 0 ;
    }).forEach(function(file: string) {
        let modulePath = join(".", dirname, file); 
        console.log(resolve(modulePath));
        //@ts-ignore TS1323
        import(modulePath).then(importedModelModule => {
            console.log(importedModelModule);
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
}
