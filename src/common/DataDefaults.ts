import { IMap } from "../common/model/Map";
import { ITileset } from "../common/model/Tileset";
import { ISave, IConfig } from "../common/model/Save";
import { IEvent, IEventState } from "../common/model/Event";
import { ActionTriggerEnum } from "../common/model/Commons"
import { gameConfig } from "../common/GameConfig";
import { ICharacter } from "./model/Character";
import { IDialogNode, IDialogEdge } from "./model/Dialog";
import { Utils } from "./Utils";

export namespace DataDefaults {

    export const DEFAULT_ID = -1;
    export const DEFAULT_ID_STR = DEFAULT_ID + "";
    export const DIALOG_FIRST_NODE_ID = 0;

    export function getDialogNode(nodeId?: number): IDialogNode {
        return {
            id: nodeId !== undefined? nodeId : DEFAULT_ID
        };
    }

    export function getDialogEdge(edgeId?: number): IDialogEdge {
        return {
            id: edgeId !== undefined? edgeId : DEFAULT_ID
        };
    }

    export function getEmptyMap(name?: string) : IMap {
        let map = getMap(name);
        for(let layer of map.layers) {
            layer.data = undefined;
        }
        return map;
    }    

    export function getMap(name?: string) : IMap {
        return {
            id: Utils.getRandomString(),
            name: name !== undefined? name : "Map",
            height: 20,
            width: 25,
            layers: [
                {
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    type: "tilelayer",
                    x: 0,
                    y: 0
                },
                {
                    type: "tilelayer",
                    x: 0,
                    y: 0
                },
                {
                    type: "tilelayer",
                    x: 0,
                    y: 0
                },
                {
                    type: "tilelayer",
                    x: 0,
                    y: 0
                }],
            nextobjectid: 2,
            tileset: getTileset(),
            events: []
        };
    }
    
    export function getTileset() : ITileset {
        return  {
            firstgid: 1,
            image: "002-Woods01.png",
            blocks: [],
            onTop: []
        };
    }

    export function getSave(): ISave {
        return {
            id: Utils.getRandomString(),
            timestamp: Utils.now(),
            currentMap: gameConfig.maps.start.map,
            hero: getHero(),
            maps: [],
            config: getConfig()
        };
    }

    export function getConfig(): IConfig {
        return {
            lang: gameConfig.ui.lang,
            skin: gameConfig.ui.skin,
            flagAntialiasing: true,
            flagDouble: false,
            flagNatural: false
        };
    }

    export function getEvent(): IEvent {
        let event: IEvent = {
            id: -1, // The value -1 will be replaced with a incremental id upon saving
            name: "NPC",
            i: 0,
            j: 0,
            states: [{
               charaset: "",
               condition: "always",
               trigger: ActionTriggerEnum.CLICK,
               action: ""
            }],
            memory: {},
            script: "BaseScript",
            currentState: 0
        };
        return event;
    };
     
    export function getHero(): IEvent {
        let hero: IEvent = getEvent();
        hero.name = gameConfig.hero.name;
        hero.i = gameConfig.maps.start.i;
        hero.j = gameConfig.maps.start.j;
        hero.states = [];
        hero.states[0] = {
           charaset: gameConfig.hero.charaset,
           condition: "always",
           trigger: ActionTriggerEnum.CLICK,
           action: ""
        };
        return hero;
    }
    
    export function getEventState(): IEventState {
        return {
            condition: "always",
            trigger: ActionTriggerEnum.CLICK
        };
    };

    export function getString(): string {
        return "";
    }

    export function getTree() : any {
        return {};
    }

    export function getCharacter(): ICharacter {
        return {
           charaset: ""
        };
    };
};