//@ts-ignore TS1192
import fs from "fs"
//@ts-ignore TS1192
import path from "path"
//@ts-ignore TS1192
import Sequelize from "sequelize"

if (process.env.DATABASE_URL === undefined) {
    console.error("Env variable DATABASE_URL undefined!");
    process.exit();
}
let sequelizeOptions: Sequelize.Options = {
    dialect: "postgres",
    protocol: "postgres",
    define: {
        timestamps: false
    },
    logging: false
};

let sequelizeInstance = new Sequelize(process.env.DATABASE_URL!, sequelizeOptions);

export let models: any = {};
//TODO import.meta require target=esnext and module=esnext
// see also: https://github.com/Microsoft/TypeScript/issues/24082
//let dirname = path.dirname(new URL(import.meta.url).pathname);
let dirname = process.cwd() + path.sep + "server" + path.sep + "dist" + path.sep + "l4w" + path.sep + "server" + path.sep + "src" + path.sep + "models";

fs.readdirSync(dirname).filter(function(file: string) {
    return (file.indexOf(".") !== 0) && (file !== "index.mjs");
}).forEach(function(file: string) {
    let model: Sequelize.Model<{}, {}> = sequelizeInstance.import(path.join(dirname, file));
    models[model.name] = model;
});

Object.keys(models).forEach(function(modelName) {
    if ("associate" in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelizeInstance;
models.Sequelize = Sequelize;
