import { readdirSync } from "fs"
import { sep, join} from "path"
//@ts-ignore TS1192
import { Options } from "sequelize"
import * as SequelizeModule from "sequelize"

export let models: any = {};
export let sequelizeInstance: SequelizeModule.Sequelize; 

if (process.env.DATABASE_URL === undefined) {
    console.warn("Env variable DATABASE_URL undefined");
} else {
    let sequelizeOptions: Options = {
        dialect: "postgres",
        protocol: "postgres",
        define: {
            timestamps: false
        },
        logging: false
    };
    sequelizeInstance = new SequelizeModule.Sequelize(process.env.DATABASE_URL!, sequelizeOptions);

    //TODO import.meta require target=esnext and module=esnext
    // see also: https://github.com/Microsoft/TypeScript/issues/24082
    //let dirname = path.dirname(new URL(import.meta.url).pathname);
    let dirname = process.cwd() + sep + "dist" + sep + "server" + sep + "l4w" + sep + "src" + sep + "server" + sep + "models";

    readdirSync(dirname).filter(function(file: string) {
        return (file.indexOf(".") !== 0) && (file !== "index.mjs");
    }).forEach(function(file: string) {
        let model = sequelizeInstance.import(join(dirname, file));
        models[model.name] = model;
    });

    Object.keys(models).forEach(function(modelName) {
        if ("associate" in models[modelName]) {
            models[modelName].associate(models);
        }
    });
}
