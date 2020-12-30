import { IMap } from "../common/model/Map";

/**
 * This module manage sanitizer methods for models.
 * Should be used before writing model object to DB,
 * in order to clean up transient fields
 */
export function sanitizeMap(map: IMap) {
    delete map.blocks;
    delete map.dynamicBlocks;
    delete map.maxEventId;
    if(map.layers !== undefined) {
        for(let layer of map.layers) {
            delete layer.autotileData;
        }
    }
    if(map.autotilesets !== undefined) {
        for(let autotile of Object.entries(map.autotilesets)) {
            delete autotile[1].imageData;
            delete autotile[1].selected;
        }
    }
}