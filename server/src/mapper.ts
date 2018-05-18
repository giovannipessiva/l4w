import { database2 } from "./database";

export namespace mapper {
    export function updateMap(mapId: string | undefined, mapData: string, user: string, response: any) {
        database2.write("map", mapId, mapData, user, response);
    }

    export function updateMaps(mapData: string, user: string, response: any) {
        updateMap(undefined, mapData, user, response);
    }
}
   