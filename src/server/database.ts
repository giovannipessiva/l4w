//@ts-ignore TS1192
import fs from "fs"
import * as SequelizeModule from "sequelize"
const sequelize = SequelizeModule["default"];
import * as LowdbModule from "lowdb";
import * as FileSyncModule from "lowdb/adapters/FileSync"
const lowdb: LowdbModule.lowdb = LowdbModule["default"];
const fileSync: LowdbModule.AdapterSync<any> = FileSyncModule["default"];

import { LanguageEnum } from "../common/model/Commons"
import { HttpStatus, ResourceType } from "../common/Constants"
import { models } from "./models/index"
import * as utils from "./utils"
import { constants } from "./constants"
import { DataDefaults } from "../common/DataDefaults"
import { IDialogNode, IDialogEdge, IGenericMessage } from "../common/model/Dialog";
import { IMap } from "../common/model/Map";
import { ITileset } from "../common/model/Tileset";
import { Utils } from "../common/Utils";

/**
 * This module manage persistency for:
 * - Game data: on lowdb files, written only during development, and read at runtime
 * - User data: on PG database, read and written only during runtime
 * TODO make local developement possibile without a PG database
 */
export namespace database {

    type dialogSchemaType = [
        {
            id: string;
            value: {
                nodes: IDialogNode[],
                edges: IDialogEdge[]
            }
        }
    ];

    type mapSchemaType = {
        id: number;
        value: IMap;
    };

    type tilesetSchemaType = {
        id: number;
        value: ITileset;
    };

    type genericMessageSchemaType = {
        id: number;
        value: IGenericMessage;
    };

    type stringsSchemaType = {
        id: number;
        value: string;
    };

    type treeSchemaType = {
        id: number;
        value: any;
    };

    let gameData: {
        dialogs: LowdbModule.LowdbSync<dialogSchemaType>;
        maps: LowdbModule.LowdbSync<mapSchemaType>;
        trees: LowdbModule.LowdbSync<treeSchemaType>;
        tilesets: LowdbModule.LowdbSync<tilesetSchemaType>;
        genericMessages: LowdbModule.LowdbSync<genericMessageSchemaType>;
        langs: Map<string, LowdbModule.LowdbSync<stringsSchemaType>>;
    };
    
    function logAccess(user: string) {
        // User already known, log this access
        models.log_access.update({
            last_seen : new Date(),
            access_counter : sequelize.literal("access_counter + 1")
        }, {
            where : {
                user : user,
            }
        }).then(function(r: any) {
        }, function(error: any) {
            console.log(error);
        });
    };
    
    function manageQueryError(response: any, error: any) {
        console.error(error);
        response.status(HttpStatus.BAD_REQUEST).send("");
    };

    /**
     * Method called on module intialization, it will:
     * - load the game file database
     * - initialize the PG database connection
     */
    export async function init(): Promise<void> {
        return new Promise(async function(resolve, reject) {
            // Load game data from json files
            gameData = {
                dialogs: lowdb(new fileSync("data/dialogs.json")),
                maps: lowdb(new fileSync("data/maps.json")),
                trees: lowdb(new fileSync("data/trees.json")),
                tilesets: lowdb(new fileSync("data/tilesets.json")),
                genericMessages: lowdb(new fileSync("data/dynmsgs.json")),
                langs: new Map<string, LowdbModule.LowdbSync<stringsSchemaType>>()
            };

            // Load the language files
            let files = await utils.listFiles("data/lang/");
            for(let file of files) {
                try {
                    // example: gameData.langs.it: {database from messages_it.json}
                    let lang = file.replace("messages_","").replace(".json","");
                    gameData.langs.set(lang, lowdb(new fileSync("data/lang/" + file)));
                } catch(e) {
                    console.error("Error while reading language file: " + file);
                    console.trace(e);
                }
            }

            // Test PostGres authentication
            models.sequelize.authenticate().then(function() {
                resolve();
            }, function(err: any) {
                //TODO in the future, this shold not be mandatory for local developement 
                console.error("Authentication on PostgreSQL failed: " + err);
                reject();
            });
        });
    }

    export function read(type: ResourceType, file: string, user: string | undefined, response: any, lang?: string) {
        switch (type) {
        case ResourceType.MAP:
            let map: IMap = gameData.maps.get("maps")
                ["get"](file)
                .value();
            if (map === undefined) {
                console.log("Map \"" + file + "\" not found, returning default");
                map = DataDefaults.getMap();
                map.id = file;
            }
            response.json(map);
            break;
        case ResourceType.TREE:
            let tree = gameData.trees.get("trees")
                ["get"](file)
                .value();
            if (tree === undefined) {
                console.log("Tree \"" + file + "\" not found, returning default");
                tree = DataDefaults.getTree();
                tree.id = file
            }
            response.json(tree);
            break;
        case ResourceType.TILESET:
            let tile: ITileset = gameData.tilesets.get("tilesets")
                ["find"]({image: file})
                .value();
            if (tile === undefined) {
                console.log("Tileset \""+ file + "\" not found, returning default");
                tile = DataDefaults.getTileset();
                tile.image = file;
            }
            response.json(tile);
            break;
        case ResourceType.STRING:
            if(lang === undefined || !gameData.langs.has(lang)) {
                lang = LanguageEnum.EN;
            }
            let langMap = gameData.langs.get(lang)!;
            if(langMap.has(file).value()) {
                response.send(langMap.get(file).value());
            } else {
                // Fallback on default language
                langMap = gameData.langs.get(LanguageEnum.EN)!;
                if(langMap.has(file).value()) {
                    response.send(langMap.get(file).value());
                } else {
                    response.status(HttpStatus.NOT_FOUND)
                        .send(DataDefaults.getString());
                }
            }
            break;
        case ResourceType.DIALOG:
            if(!Utils.isNumeric(file)) {
                console.warn("Cannot read not-numeric dialog id: " + file);
                response.status(HttpStatus.BAD_REQUEST)
                    .send("");
            }
            let dialogId = parseInt(file);
            let nodes: IDialogNode[] = [];
            let edges: IDialogEdge[] = [];
            traverseDialogDatabase(dialogId, DataDefaults.DIALOG_FIRST_ELEM_ID, nodes, edges);
            if(nodes.length > 0) {
                response.send({
                    nodes: nodes,
                    edges: edges
                });
            } else {
                response.status(HttpStatus.NOT_FOUND)
                    .send("");
            }
            break;
        case ResourceType.SAVE:
            if (!utils.isEmpty(user)) {
                models.usr_save.findOne({
                    where : {
                        user : user,
                        id : file
                    },
                    attributes : [ "save" ]
                }).then(
                    function(result: any) {
                        if (!utils.isEmpty(result)) {
                            response.send(result.dataValues.save);
                        } else {
                            response.send(DataDefaults.getSave());
                        }
                    },
                    function(error: any) {
                        console.log(error);
                        response.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .send(DataDefaults.getSave());
                    });
            } else {
                response.status(HttpStatus.OK).send(DataDefaults.getSave());
            }
            break;
        default:
            console.error("database.read - Unexpected case: " + type);
            response.status(HttpStatus.NOT_FOUND).send(DataDefaults.getString());
        };
    }

    export function write(type: string, file: string, data: string, user: string, response: any) {
        switch (type) {
        case ResourceType.MAP:
            let newMap: IMap = JSON.parse(data);
            gameData.maps.get("maps")
                ["set"](file, newMap)
                ["write"]();
            response.status(HttpStatus.OK).send("");
            break;
        case ResourceType.TREE:
            let newTree: IMap = JSON.parse(data)[0];
            gameData.trees.get("trees")
                ["set"](file, newTree)
                ["write"]();
            response.status(HttpStatus.OK).send("");
            break;
        case ResourceType.TILESET:
            let oldTileset = gameData.tilesets.get("tilesets")
                ["find"]({image: file})
            let newTileset: IMap = JSON.parse(data);
            if (oldTileset.value() !== undefined) {
                oldTileset.assign(newTileset).write();
            } else {
                gameData.maps.get("tilesets")
                    ["push"]({
                        id: file,
                        value: newTileset
                    })
            }
            response.status(HttpStatus.OK).send("");
            break;
        case ResourceType.STRING:
            let strings = <string[]> JSON.parse(data);
            for(let lang in strings) {
                if(gameData.langs.has(lang)) {
                    gameData.langs.get(lang)!["push"]({
                        id: Number.parseInt(file),
                        value: strings[lang]
                    }).write();
                } else {
                    console.warn("Language not found: " + lang);
                }
            }
            response.status(HttpStatus.OK).send("");
            break;
        case ResourceType.DIALOG:
            // Extract a list of nodes and edges from the dialog tree, and save them to DB
            let dialogNode: IDialogNode = JSON.parse(data);
            let nodesList: IDialogNode[] = [];
            let edgesList: IDialogEdge[] = [];

            let dialogId = file;
            if(dialogId === DataDefaults.DEFAULT_ID_STR) {
                // Assign an incremental id to this dialog
                let maxId = DataDefaults.DEFAULT_ID;
                for(let id of gameData.dialogs.keys().value()) {
                    if(Utils.isNumeric(id) && parseInt(id) > maxId) {
                        maxId = parseInt(id);
                    }
                }
                dialogId = (maxId + 1) + "";
            }

            traverseDialogTree(nodesList, edgesList, dialogNode);

            gameData.dialogs.get(dialogId)["set"]("dialogs", nodesList)["write"]();
            gameData.dialogs.get(dialogId)["set"]("edges", edgesList)["write"]();
            response.status(HttpStatus.OK).send(dialogId);
            break;
        case ResourceType.SAVE:
            models.usr_save.upsert({
                user: user,
                id : file,
                date: new Date(),
                name: null,
                save : JSON.parse(data)
            }).then(function(result: any) {
                response.status(HttpStatus.OK).send("");
            }, function(error: any) {
                manageQueryError(response, error);
            });
            break;
        default:
            console.error("Unexpected case: " + type);
            response.status(HttpStatus.NOT_FOUND).send(DataDefaults.getString());
        }
    }

    export function logUserSessionAccess(user: string) {
        logAccess(user)
    }

    export function logUser(mail: string, request: any, response: any) {
        models.usr_list.findOne({
            where: {
                mail: mail
            }
        }).then(function(user_record: any) {
            if(user_record == null) {
                // First access, create the user
                models.usr_list.upsert({
                    mail: mail,
                }).then(function(updated: any) {
                    // Get the new user record
                    models.usr_list.findOne({
                        where: {
                            mail: mail
                        }
                    }).then(function(user_new_record: any) {
                        if(user_record == null) {                        
                            // Add user id to session
                            request.session.user = user_new_record.user;
                            request.session.save();
                            
                            // Send welcome event to the new user
                            models.usr_event.upsert({
                                user: user_new_record.user,
                                event: constants.event.WELCOME,
                                date: new Date()
                            }).then(function(res: any) {
                            }, function(error: any) {
                                console.log(error);
                            });
                            
                            // Log first access for the new user user
                            models.log_access.upsert({
                                user: user_new_record.user,
                                first_seen: new Date(),
                                last_seen: new Date(),
                                access_counter: 1
                            }).then(function(res: any) {
                            }, function(error: any) {
                                console.log(error);
                            });
                        } else {
                            console.error("Registration failed for: " + mail);
                        }
                    }, function(error: any) {
                        console.log(error);
                        response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
                    });
                }, function(error: any) {
                    console.log(error);
                    response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
                });
            } else {
                // Add user id to session
                request.session.user = user_record.user;
                request.session.save();
                
                // Log this access
                logAccess(user_record.user);
            }
        }, function(error: any) {
            console.log(error);
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
        });
    }

    export function getNews(user: string, response: any) {
        if (utils.isEmpty(user)) {
            response.json({});
        } else {
            models.usr_event.findAll({
                where : {
                    user : user
                },
                attributes : [ "event" ],
            }).then(function(events: any) {
                if (!utils.isEmpty(events)) {
                    var eventsArray = new Array;
                    for (var i = 0; i < events.length; i++) {
                        eventsArray.push(events[i].event);
                    }
                    models.lst_event.findAll({
                        where : {
                            event : eventsArray
                        }
                    }).then(function(datas: any) {
                        response.json(datas);
                    });
                } else {
                    response.json({});
                }
            })
        }
    }

    function traverseDialogTree(nodesList: IDialogNode[], edgesList: IDialogEdge[], dialogNode?: IDialogNode) {
        if(dialogNode !== undefined) {
            if(dialogNode.edges !== undefined) {
                for(let edge of dialogNode.edges) {
                    traverseDialogTree(nodesList, edgesList, edge.node);
                    edgesList.push(utils.pruneObject(edge));
                }
            }
            nodesList.push(utils.pruneObject(dialogNode));
        }
    }

    function traverseDialogDatabase(dialogId: number, nodeId: number, nodes: IDialogNode[], edges: IDialogEdge[], parentEdgeId?: number): void {
        let node: IDialogNode = gameData.dialogs.get(dialogId).get("nodes")
            ["find"]({id: nodeId})
            .value();
        if(node !== undefined) {
            nodes.push(node);
            if(node.edgeIds !== undefined) {
                for(let edgeId of node.edgeIds) {
                    let edge: IDialogEdge = gameData.dialogs.get(dialogId).get("edges")
                        ["find"]({id: edgeId})
                        .value();
                    if(edge !== undefined) {
                        edges.push(edge);
                        if(edge.nodeId !== undefined) {
                            traverseDialogDatabase(dialogId, edge.nodeId, nodes, edges, edgeId);
                        }                    
                    } else {
                        console.error("node " + node.id + "reference not-existing edge: " + edgeId);
                    }
                }
            }
        } else {
            if(parentEdgeId === undefined) {
                console.error("not-existing node: " + nodeId);
            } else {
                console.error("edge " + parentEdgeId + "reference not-existing node: " + nodeId);
            }
        }
    }
}
