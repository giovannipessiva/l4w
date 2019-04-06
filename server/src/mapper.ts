import { database } from "./database";

//TODO is this module really necessary? remove it pls
export namespace mapper {
    export function updateMap(mapId: string | undefined, mapData: string, user: string, response: any) {
        database.write("map", mapId, mapData, user, response);
    }

    export function updateMaps(mapData: string, user: string, response: any) {
        updateMap(undefined, mapData, user, response);
    }
}
   