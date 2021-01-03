import { IDialogEdge, IDialogNode } from "../common/model/Dialog";
import { IMap } from "../common/model/Map";

/**
 * This module manage sanitizer methods for models.
 * Should be used before writing model object to DB,
 * in order to clean up transient fields and remove
 * any invalid or useless data
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

export function sanitizeDialog(nodesList: IDialogNode[], edgesList: IDialogEdge[]) {
    for(let node of nodesList) {
        delete node.message;
        delete node.edges;
        delete node.referenced;
        // Remove unexisting edges
        if(node.edgeIds !== undefined) {
            node.edgeIds = node.edgeIds.filter((referencesEdge) => {
                if(edgesList === undefined) {
                    return false;
                }
                for(let edge of edgesList) {
                    if(referencesEdge === edge.id) {
                        return true;
                    }
                }
                return false;
            });
        }
    }
    for(let edge of edgesList) {
        delete edge.message;
        delete edge.node;
        delete edge.nodeReferenced;
        delete edge.actions;
    }
}
