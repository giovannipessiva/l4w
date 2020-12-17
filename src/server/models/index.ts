import { readdirSync } from "fs"
import { join } from "path"
import { Options } from "sequelize"
import * as SequelizeModule from "sequelize"

export let models: Map<String, SequelizeModule.Model> = new Map();
export let sequelizeInstance: SequelizeModule.Sequelize; 

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
    sequelizeInstance = new SequelizeModule.Sequelize(process.env.DATABASE_URL!, sequelizeOptions);

    const dirname = join("dist", "server", "src", "server", "models");
    readdirSync(dirname).filter(function(file: string) {
        return file.indexOf(".") !== 0 && file !== "index.mjs" && file !== "init-models.mjs" && file.indexOf(".mjs") !== 0 ;
    }).forEach(function(file: string) {
        let modulePath = "./" + file.replace(".mjs",""); 
        import(modulePath).then(importedModelModule => {
            let model = importedModelModule.default.init(sequelizeInstance, SequelizeModule.Sequelize);
            models.set(model.name, model);
        }).catch(e => {
            console.trace(e);
            process.exit();
        });
    });
}
