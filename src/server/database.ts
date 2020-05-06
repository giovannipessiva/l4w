import * as SequelizeModule from "sequelize"
const sequelize = SequelizeModule["default"];
import * as LowdbModule from "lowdb";
import * as FileSyncModule from "lowdb/adapters/FileSync"
const lowdb: LowdbModule.lowdb = LowdbModule["default"];
const fileSync: LowdbModule.AdapterSync<any> = FileSyncModule["default"];
import { Request, Response } from "express"

import { LanguageEnum } from "../common/model/Commons"
import { HttpStatus, ResourceType } from "../common/Constants"
import { models } from "./models/index"
import * as utils from "./utils"
import { constants } from "./constants"
import { DataDefaults } from "../common/DataDefaults"
import { gameConfig } from "../common/GameConfig"
import { IDialogNode, IDialogEdge, IGenericMessage } from "../common/model/Dialog";
import { IMap } from "../common/model/Map";
import { ITileset } from "../common/model/Tileset";
import { Utils } from "../common/Utils";
import { GLOBAL_GROUP_ID } from "../common/StringsConstants";
import { security } from "./security";

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

    let flagPostgresUnavailable = false;
    
    export function logAccess(user?: string) {
        if(flagPostgresUnavailable || user === undefined) {
            return;
        }
        // User already known, log this access
        models.log_access.update({
            last_seen : new Date(),
            access_counter : sequelize.literal("access_counter + 1")
        }, {
            where : {
                user : user,
            }
        }).then(function(r: any) {
            // Nothing to do
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
                // Database ready
                resolve();
            }, function(err: any) {
                if(security.isDevEnv()) {
                    console.info("PostgreSQL database not available, functionalities will be limitated");
                    flagPostgresUnavailable = true;
                    reject();
                } else {
                    console.error("Authentication on PostgreSQL failed: " + err);
                    process.exit();
                }
            });
        });
    }

    export function read(type: ResourceType, file: string, user: string | undefined, response: any, lang?: string) {
        let langVal = lang !== undefined? LanguageEnum[lang] : lang;
        switch (type) {
        case ResourceType.MAP:
            let map: IMap = gameData.maps.get(["maps", file]).value();
            if (map === undefined) {
                console.log("Map \"" + file + "\" not found, returning default");
                map = DataDefaults.getMap();
                map.id = file;
            }
            response.json(map);
            break;
        case ResourceType.TREE:
            let tree = gameData.trees.get(["trees", file]).value();
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
            let value = getString(langVal, GLOBAL_GROUP_ID, file);
            if(value !== undefined) {
                response.send(value);
            } else {
                response.status(HttpStatus.NOT_FOUND)
                    .send(DataDefaults.getString());
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
            traverseDialogDatabase(dialogId, DataDefaults.FIRST_ELEM_ID, nodes, edges);
            if(nodes.length > 0) {
                populateDialogMessages(dialogId, nodes, edges, langVal);
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
            if (!utils.isEmpty(user) && !flagPostgresUnavailable) {
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
            gameData.maps.set(["maps", file], newMap).write();
            response.status(HttpStatus.OK).send("");
            break;
        case ResourceType.TREE:
            let newTree: IMap = JSON.parse(data)[0];
            gameData.trees.set(["trees", file], newTree).write();
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
            let id = setString(GLOBAL_GROUP_ID, file, data);
            response.status(HttpStatus.OK).send(id + "");
            break;
        case ResourceType.DIALOG:
            // Extract a list of nodes and edges from the dialog tree, and save them to DB
            let dialogData: {
                nodes: IDialogNode[];
                edges: IDialogEdge[];
            } = JSON.parse(data);
            let nodesList = dialogData.nodes;
            let edgesList = dialogData.edges;

            if(!Utils.isNumeric(file)) {
                response.status(HttpStatus.BAD_REQUEST).send("DialogId should be numeric: " + file);
                return;
            }
            let dialogId = parseInt(file);
            if(dialogId === DataDefaults.DEFAULT_ID) {
                // Assign an incremental id to this dialog
                let maxId = DataDefaults.DEFAULT_ID;
                for(let id of gameData.dialogs.keys().value()) {
                    if(Utils.isNumeric(id) && parseInt(id) > maxId) {
                        maxId = parseInt(id);
                    }
                }
                dialogId = (maxId + 1);
            }

            // Save dialog strings
            let groupdId = getDialogGroupId(dialogId);
            clearStrings(groupdId);
            for(let node of nodesList) {
                if(node.message !== undefined) {
                    setString(groupdId, getNodeMessageStringId(node), node.message);
                    node.message = undefined;
                }
                utils.cleanDialogNode(node);
            }
            for(let edge of edgesList) {
                if(edge.message !== undefined) {
                    setString(groupdId, getEdgeMessageStringId(edge), edge.message);
                    edge.message = undefined;
                }
                utils.cleanDialogEdge(edge);
            }

            gameData.dialogs.unset(dialogId).write();
            gameData.dialogs.set([dialogId, "nodes"], nodesList).write();
            gameData.dialogs.set([dialogId, "edges"], edgesList).write();
            response.status(HttpStatus.OK).send(dialogId + "");
            break;
        case ResourceType.SAVE:
            if(flagPostgresUnavailable) {
                response.status(HttpStatus.OK).send("");
            }
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
            response.status(HttpStatus.NOT_FOUND).send("");
        }
    }

    export function doUserLogin(mail: string, request: Request, response: Response) {
        if(flagPostgresUnavailable) {
            response.status(HttpStatus.NOT_IMPLEMENTED).send("");
        }
        security
        .computeUnsafeHash(mail)
        .catch((reason: any) => {
            console.error(reason);
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
        })
        .then((hashedMail) => {
            if(hashedMail === undefined) {
                console.log("Hash not available");
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
            }
            models.usr_list.findOne({
                where: {
                    mail: hashedMail
                }
            }).then(function(user_record: any) {
                if(user_record == null) {
                    // First access, create the user
                    models.usr_list.upsert({
                        mail: hashedMail,
                    }).then(function(updated: any) {
                        // Get the new user record
                        models.usr_list.findOne({
                            where: {
                                mail: hashedMail
                            }
                        }).then(function(user_new_record: any) {
                            if(user_record == null) {                        
                                // Add user id to session
                                request.session!.user = user_new_record.user;
                                request.session!.save(function(err) {
                                    if(!Utils.isEmpty(err)) {
                                        console.error("Error while saving session: %s", err);
                                    }
                                });
                                
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
                                console.error("Registration failed for: " + hashedMail);
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
                    request.session!.user = user_record.user;
                    request.session!.save(function(err) {
                        if(!Utils.isEmpty(err)) {
                            console.error("Error while saving session: %s", err);
                        }
                    });
                    
                    // Log this access
                    logAccess(user_record.user);
                }
            }, function(error: any) {
                console.log(error);
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
            });
        });
    }

    export function getNews(user: string, response: any) {
        if (utils.isEmpty(user) || flagPostgresUnavailable) {
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

    function traverseDialogDatabase(dialogId: number, nodeId: number, nodes: IDialogNode[], edges: IDialogEdge[], parentEdgeId?: number): void {
        let node: IDialogNode = gameData.dialogs.get([dialogId, "nodes"])
            ["find"]({id: nodeId})
            .value();
        if(node !== undefined) {
            nodes.push(node);
            if(node.edgeIds !== undefined) {
                for(let edgeId of node.edgeIds) {
                    let edge: IDialogEdge = gameData.dialogs.get([dialogId, "edges"])
                        ["find"]({id: edgeId})
                        .value();
                    if(edge !== undefined) {
                        edges.push(edge);
                        if(edge.nodeId !== undefined) {
                            traverseDialogDatabase(dialogId, edge.nodeId, nodes, edges, edgeId);
                        }                    
                    } else {
                        console.error("node " + node.id + " reference not-existing edge: " + edgeId);
                    }
                }
            }
        } else {
            if(parentEdgeId === undefined) {
                console.error("not-existing node: " + nodeId);
            } else {
                console.error("edge " + parentEdgeId + " reference not-existing node: " + nodeId);
            }
        }
    }

    function getString(lang: LanguageEnum | undefined, groupId: string, id: string): string | undefined {
        if(lang === undefined || !gameData.langs.has(lang)) {
            lang = gameConfig.ui.lang;
        }
        let langMap = gameData.langs.get(lang);
        if(langMap === undefined) {
            console.error("Cannot load language: " + lang);
        } else {
            if(langMap.has([groupId, id]).value()) {
                return langMap.get([groupId, id]).value();
            }
            if(lang !== gameConfig.ui.lang) {
                // Fallback on default language
                langMap = gameData.langs.get(gameConfig.ui.lang)!;
                if(langMap === undefined) {
                    console.error("Cannot load default language: " + lang);
                } else if(langMap.has([groupId, id]).value()) {
                    return langMap.get([groupId, id]).value();
                } 
            }
        }
        return;
    }

    function clearStrings(groupId: string) {
        let langMap = gameData!.langs.get(gameConfig.ui.lang);
        if(langMap === undefined) {
            console.error("Cannot load default language: " + langMap);
        } else {
            langMap.unset(groupId).write();
        }
    }

    function setString(groupId: string, id: string | undefined, value: string): string | undefined {
        if(Utils.isEmpty(value) || value.trim().length === 0) {
            return;
        }
        let langMap = gameData!.langs.get(gameConfig.ui.lang);
        if(langMap === undefined) {
            console.error("Cannot load default language: " + langMap);
        } else {
            if(id === undefined) {
                let idNum;
                if(!langMap.has(groupId).value()) {
                    idNum = DataDefaults.FIRST_ELEM_ID;
                } else {
                    // Assign an incremental id
                    let maxId = DataDefaults.DEFAULT_ID;
                    for(let id of langMap.get(groupId).keys().value()) {
                        if(Utils.isNumeric(id) && parseInt(id) > maxId) {
                            maxId = parseInt(id);
                        }
                    }
                    idNum = (maxId + 1);
                }
                id = idNum + "";
            }
            langMap.set([groupId, id], value.trim()).write();
            return id;
        }
        return;
    }

    function populateDialogMessages(dialogId: number, nodes: IDialogNode[], edges: IDialogEdge[], lang?: LanguageEnum) {
        for(let node of nodes) {
            node.message = getString(lang, getDialogGroupId(dialogId), getNodeMessageStringId(node));
        }
        for(let edge of edges) {
            edge.message = getString(lang, getDialogGroupId(dialogId), getEdgeMessageStringId(edge));
        }
    }

    function getDialogGroupId(dialogId: number) {
        return "D" + dialogId;
    }

    function getNodeMessageStringId(node: IDialogNode) {
        return "N" + node.id + "M";
    }

    function getEdgeMessageStringId(edge: IDialogEdge) {
        return "E" + edge.id + "M";
    }
}
