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
}