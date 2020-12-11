import { IMap } from "../common/model/Map";

/**
 * This module manage sanitizer methods for models.
 * Should be used before writing model object to DB,
 * in order to remove invalid or transient fields
 */
export function sanitizeMap(map: IMap) {
    map.blocks = undefined;
    map.dynamicBlocks = undefined;
    map.maxEventId = undefined;
    for(let l of map.layers) {
        if(l.data !== undefined) {
            for(let i=0; i<l.data.length; i++) {
                let n = l.data[i];
                if(n !== undefined && (isNaN(n) || Array.isArray(n))) {
                    l.data[i] = undefined;
                }
            }
        }
    }
}