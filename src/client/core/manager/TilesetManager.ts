import { IAutoTileset, ITileset } from "../../../common/model/Tileset"
import { Resource } from "../util/Resource"
import { Errors } from "../util/Errors"
import { ResourceType } from "../../../common/Constants";
import { Utils } from "../../../common/Utils";
import { AbstractGrid } from "../AbstractGrid";
import { ScaleEnum } from "../../../common/Commons";
import { Constant } from "../util/Constant";

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
    
    export function initTransientData(tileset: ITileset, grid: AbstractGrid) {
        if(tileset.imageData !== undefined) {
            tileset.imageWidth = tileset.imageData.width;
            tileset.imageHeight = tileset.imageData.height;
            let cell = grid.mapCanvasToCell({
                x: tileset.imageWidth,
                y: tileset.imageHeight
            })
            tileset.maxGID = (cell.i * cell.j) - 1;
        }
    }

    export async function initTransientDataAutotiles(autotiles: IAutoTileset[]) {
        // Load autotile metadata
        await new Promise((resolve) => {
            let promiseResolve = resolve;
            Resource.load("autotilesets", ResourceType.AUTOTILESET, (response) => {
                if(response === undefined || typeof response !== "string") {
                    console.warn("Non parsable autotileset data: " + response);
                    return;
                }
                let autotilesetsData: IAutoTileset[] = JSON.parse(response);
                for(let autotile of autotiles) {
                    // Load autotiles persistend data
                    for(let autotilesetData of autotilesetsData) {
                        if(autotilesetData.image === autotile.image) {
                            autotile.blocked = autotilesetData.blocked;
                            autotile.frequency = autotilesetData.frequency;
                            break;
                        }
                    }
                    // Init autotile transient data
                    if(autotile.imageData === undefined) {
                        Resource.load(autotile.image, ResourceType.AUTOTILE, (image) => {
                            autotile.imageData = <HTMLImageElement> image;
                            initAutotileAnimation(autotile);
                            promiseResolve(undefined);
                        });
                    } else {
                        initAutotileAnimation(autotile);
                        promiseResolve(undefined);
                    }
                }
            });
        });
    }

    function initAutotileAnimation(autotile: IAutoTileset) {
        if(autotile.imageData !== undefined && autotile.imageData.width > autotile.imageData.height) {
            autotile.frames = Math.floor(autotile.imageData.width / ((autotile.imageData.height / 4) * 3));
            if(autotile.frequency === undefined) {
                autotile.frequency = ScaleEnum.MEDIUM;
            }
            switch (autotile.frequency) {
                case ScaleEnum.VERY_LOW:
                    autotile.frequencyVal = Constant.VERY_LOW_FREQUENCY;
                    break;
                case ScaleEnum.LOW:
                    autotile.frequencyVal = Constant.LOW_FREQUENCY;
                    break;
                case ScaleEnum.MEDIUM_LOW:
                    autotile.frequencyVal = Constant.MEDIUM_LOW_FREQUENCY;
                    break;
                case ScaleEnum.MEDIUM:
                    autotile.frequencyVal = Constant.MEDIUM_FREQUENCY;
                    break;
                case ScaleEnum.MEDIUM_HIGH:
                    autotile.frequencyVal = Constant.MEDIUM_HIGH_FREQUENCY;
                    break;
                case ScaleEnum.HIGH:
                    autotile.frequencyVal = Constant.HIGH_FREQUENCY;
                    break;
                case ScaleEnum.VERY_HIGH:
                    autotile.frequencyVal = Constant.VERY_HIGH_FREQUENCY;
                    break;
                default: autotile.frequencyVal = Constant.MEDIUM_FREQUENCY;
            }
        }
    }

    /**
     * 
     * Return the horizontal offset (in cells) required
     * for animating this autotileset
     */
    export function getAnimatedAutotileFrame(autotile: IAutoTileset): number {
        if(autotile.frequencyVal === undefined || autotile.frames === undefined) {
            return 0;
        }
        if (autotile.animationStartTime === undefined) {
            autotile.animationStartTime = Utils.now();
        }
        let animationTime = Utils.now() - autotile.animationStartTime!;
        return Math.floor((animationTime * autotile.frequencyVal) % autotile.frames) * 3;
    }
}