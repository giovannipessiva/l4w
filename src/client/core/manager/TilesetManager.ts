import { ITileset } from "../../../common/model/Tileset"
import { Resource } from "../util/Resource"
import { Errors } from "../util/Errors"
import { ResourceType } from "../../../common/Constants";
import { Utils } from "../../../common/Utils";

/**
 * Helper class for handling tilesets and autotile
 */
export namespace TilesetManager {
   
     export function loadTileset(tilesetImage: string, context: CanvasRenderingContext2D, callback: (tileset?: ITileset) => void) {
        Resource.load(tilesetImage+"", ResourceType.TILESET, function(resourceText) {
            if (Utils.isEmpty(resourceText)) {
                console.error("Error while loading tileset: " + tilesetImage);
                callback();
            } else {
                try {
                    let tileset: ITileset = JSON.parse(<string> resourceText);
                    callback(tileset);
                } catch (exception) {
                    if (exception.name === "SyntaxError") {
                        console.error("Error while parsing tileset: " + tilesetImage);
                    } else if (exception.name === "TypeError") {
                        console.error("Error while reading tileset: " + tilesetImage);
                    } else {
                        console.error(exception);
                    }
                    Errors.showError(context);
                    callback();
                }
            }
        });
    }
    
    export function initTransientData(tileset: ITileset) {
        if(tileset.imageData !== undefined) {
            tileset.imageWidth = tileset.imageData.width;
            tileset.imageHeight = tileset.imageData.height;
        }
    }
}