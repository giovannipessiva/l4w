/// <reference path="../model/Tileset.ts" />

/**
 * Helper class for handling tilesets and autotile
 */
namespace TilesetManager {
   
     export function loadTileset(tilesetImage: string, context: CanvasRenderingContext2D, callback: (tileset: ITileset) => void) {
        Resource.load(tilesetImage+"", Resource.TypeEnum.TILESET, function(resourceText: string) {
            if (Utils.isEmpty(resourceText)) {
                console.error("Error while loading tileset: " + tilesetImage);
                callback(null);
            } else {
                try {
                    let tileset: ITileset = JSON.parse(resourceText);
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
                    callback(null);
                }
            }
        });
    }
    
    export function getNewTileset(name: string): ITileset {
        return {
            "firstgid": 1,
            "image": "002-Woods01.png",
            "imageheight": 800,
            "imagewidth": 256,
            "name": "Bosco",
            "blocks": [],
            "onTop": []
        };
    }
}