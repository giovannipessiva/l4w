import { readdirSync } from "fs";
import { join } from "path";
import * as SequelizeModule from "sequelize";
import { useSSLDatabaseConnection } from "../security";
export let models = new Map();
export let sequelizeInstance;
if (process.env.DATABASE_URL === undefined) {
    console.warn("Env variable DATABASE_URL undefined");
}
else {
    initSequelizeModules();
}
function initSequelizeModules() {
    let ssl = false;
    if (useSSLDatabaseConnection()) {
        ssl = {
            require: true,
            rejectUnauthorized: false
        };
    }
    let sequelizeOptions = {
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
    sequelizeInstance = new SequelizeModule.Sequelize(process.env.DATABASE_URL, sequelizeOptions);
    const dirname = join("dist", "server", "src", "server", "models");
    readdirSync(dirname).filter(function (file) {
        return file.indexOf(".") !== 0 && file !== "index.mjs" && file !== "init-models.mjs" && file.indexOf(".mjs") !== 0;
    }).forEach(function (file) {
        let modulePath = "./" + file.replace(".mjs", "");
        import(modulePath).then(importedModelModule => {
            let model = importedModelModule.default.init(sequelizeInstance, SequelizeModule.Sequelize);
            models.set(model.name, model);
        }).catch(e => {
            console.trace(e);
            process.exit();
        });
    });
}
