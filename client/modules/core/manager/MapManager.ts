/// <reference path="../util/Constant.ts" />
/// <reference path="../model/Map.ts" />
/// <reference path="../AbstractGrid.ts" />

/**
 * Helper class for handling game maps
 */
namespace MapManager {
    
    export enum Pathfinder {
        BASIC
    }
    
    export function loadMap(mapId: number, canvas: HTMLCanvasElement, callback: (map: IMap) => void) {
        Resource.load(mapId+"", Resource.TypeEnum.MAP, function(resourceText: string) {
            if (Utils.isEmpty(resourceText)) {
                console.error("Error while loading map: " + mapId);
                callback(null);
            } else {
                try {
                    let map: IMap = JSON.parse(resourceText);
                    callback(map);
                } catch (exception) {
                    if (exception.name === "SyntaxError") {
                        console.error("Error while parsing map: " + mapId);
                    } else if (exception.name === "TypeError") {
                        console.error("Error while reading map: " + mapId);
                    } else {
                        console.error(exception);
                    }
                    Errors.showError(canvas.getContext("2d"));
                    callback(null);
                }
            }
        });
    }

    export function renderLayer(grid: AbstractGrid, map: IMap, layer: IMapLayer, tileImage: HTMLImageElement, context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        if(!Utils.isEmpty(layer.data)) {
            for (let y = minRow; y <= maxRow; y++) { //TODO verifica che non siano necessari controlli rispetto alla dimensione del layer
                for (let x = minColumn; x <= maxColumn; x++) {
                    let cellIndex = x + y * map.width;
                    if (layer.data.length < cellIndex) {
                        return;
                    }
                    let tileGID = layer.data[cellIndex];
                    if (tileGID === null) {
                        continue;
                    }
                    let tileCell: ICell = Utils.gIDToCell(tileGID, Math.floor(map.tileset.imagewidth / grid.cellW)); //TODO ottimizzabile, precalcola
                    context.drawImage(
                        tileImage,
                        Math.floor(tileCell.i * grid.cellW), Math.floor(tileCell.j * grid.cellH), grid.cellW, grid.cellH,
                        Math.floor(x * grid.cellW), Math.floor(y * grid.cellH), grid.cellW, grid.cellH);
                }
            }
        }
    }

    export function renderGlobalEffects(grid: AbstractGrid, context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {

    }

    export function renderUI(map: IMap, grid: AbstractGrid, context: CanvasRenderingContext2D, renderingConfiguration: RenderConfiguration, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        for (let i = minColumn; i <= maxColumn; i++) {
            for (let j = minRow; j <= maxRow; j++) {
                if (!Utils.isEmpty(renderingConfiguration)) {
                    if (renderingConfiguration.showBlocks && !Utils.isEmpty(map) && !Utils.isEmpty(map.blocks)) {
                        context.save();
                        context.globalAlpha = 0.9;
                        context.fillStyle = Constant.Color.YELLOW;
                        let blockMarkSize = 6;
                        let blockMarkHalfSize = Math.floor(blockMarkSize / 2);
                        let blockValue: number = map.blocks[j * map.width + i];
                        
                        if (blockValue > 0) {
                            if(Utils.isBlocked(blockValue, BlockDirection.UP)) {
                                context.fillRect(
                                    (i + 0.5) * grid.cellW - blockMarkHalfSize,
                                    j * grid.cellH,
                                    blockMarkSize,
                                    blockMarkSize
                                );   
                            }
                            if(Utils.isBlocked(blockValue, BlockDirection.DOWN)) {
                                context.fillRect(
                                    (i + 0.5) * grid.cellW - blockMarkHalfSize,
                                    (j + 1) * grid.cellH - blockMarkSize,
                                    blockMarkSize,
                                    blockMarkSize
                                );
                            }
                            if(Utils.isBlocked(blockValue, BlockDirection.LEFT)) {
                                context.fillRect(
                                    i * grid.cellW,
                                    (j + 0.5) * grid.cellH - blockMarkHalfSize,
                                    blockMarkSize,
                                    blockMarkSize
                                );
                            }
                            if(Utils.isBlocked(blockValue, BlockDirection.RIGHT)) {
                                context.fillRect(
                                    (i + 1) * grid.cellW - blockMarkSize,
                                    (j + 0.5) * grid.cellH - blockMarkHalfSize,
                                    blockMarkSize,
                                    blockMarkSize
                                );
                            }
                        }
                        context.restore();
                    }
                    if (renderingConfiguration.showGrid) {
                        context.strokeStyle = Constant.Color.RED;
                        context.strokeRect(
                            i * grid.cellW,
                            j * grid.cellH,
                            grid.cellW,
                            grid.cellH);
                    }
                    if (renderingConfiguration.showEditorGrid) {
                        context.save();
                        context.globalAlpha = 0.4;
                        context.strokeStyle = Constant.Color.GREY;
                        context.strokeRect(
                            i * grid.cellW,
                            j * grid.cellH,
                            grid.cellW,
                            grid.cellH);
                        context.restore();
                    }
                    if (renderingConfiguration.showCellNumbers) {
                        context.fillStyle = Constant.Color.RED;
                        context.font = "bold 10px Arial";
                        context.fillText(
                            i + "," + j,
                            i * grid.cellW + 1,
                            j * grid.cellH + 10);
                    }
                }
            }
        }
    }

    export function renderGlobalUI(grid: AbstractGrid, context: CanvasRenderingContext2D, renderingConfiguration: RenderConfiguration) {
        if (!Utils.isEmpty(renderingConfiguration)) {
            if (renderingConfiguration.enableSelection && !Utils.isEmpty(renderingConfiguration.selectPointStart)) {
                let x = renderingConfiguration.selectPointStart.x * grid.cellW;
                let y = renderingConfiguration.selectPointStart.y * grid.cellH;
                let w;
                let h;
                if (Utils.isEmpty(renderingConfiguration.selectPointEnd)) {
                    h = grid.cellH;
                    w = grid.cellW;
                } else {
                    let x2 = renderingConfiguration.selectPointEnd.x * grid.cellW;
                    let y2 = renderingConfiguration.selectPointEnd.y * grid.cellH;
                    if (x > x2) {
                        w = x - x2;
                        x = x2;
                    } else {
                        w = x2 - x;
                    }
                    if (y > y2) {
                        h = y - y2;
                        y = y2;
                    } else {
                        h = y2 - y;
                    }
                    w += grid.cellW;
                    h += grid.cellH;
                }
                context.save();
                context.strokeStyle = Constant.Color.RED;
                context.lineWidth = 3;
                context.strokeRect(x, y, w, h);
                context.restore();

            }
        }
    }

    export function resizeMap(map: IMap, rows: number, columns: number) {
        let oldWidth: number = map.width;
        let newWidth: number = columns;
        let oldHeight: number = map.height;
        let newHeight: number = rows;
        if ((oldWidth === newWidth && oldHeight === newHeight) || Utils.isEmpty(map)) {
            return;
        }
        let referenceIndex: number = Math.min(oldWidth, newWidth);
        if (newWidth < oldWidth) {
            var removedColumns: number = oldWidth - newWidth;
        } else {
            var newColumns = [];
            for (let n = 0; n < newWidth - oldWidth; n++) {
                newColumns[n] = null;
            }
        }

        for (let i = 0; i < map.layers.length; i++) {
            let layer = map.layers[i];
            if (!Utils.isEmpty(layer.data)) {
                // Correct existing rows
                if (oldWidth !== newWidth) {
                    for (let y = 0; y < oldHeight; y++) {
                        if(!Utils.isEmpty(removedColumns)) {
                            layer.data.splice(referenceIndex + y * newWidth, removedColumns);
                        } else {
                            Array.prototype.splice.apply(layer.data, [referenceIndex + y * newWidth, 0].concat(newColumns));
                        }
                    }
                }
                // Delete excessive rows
                if (oldHeight > newHeight) {
                    layer.data.length=newWidth*newHeight;
                }
                // Add more rows
                if (oldHeight < newHeight) {
                    let newData: number[] = [];
                    for (let n = 0; n < newWidth - oldWidth; n++) {
                        newData[n]=null;    
                    }
                    for (let i = oldWidth; i < newWidth; i++) {
                        layer.data.concat(newData);
                    }
                }
            }
        }

        map.height = rows;
        map.width = columns;
    }
    
    export function getActors(map: IMap) {
        let actors: IActor[] = [];
        if(!Utils.isEmpty(map.layers)) {
            for (let i = 0; i < map.layers.length; i++) {
                let layer = map.layers[i];
                if (!Utils.isEmpty(layer.objects)) {
                    actors = actors.concat(layer.objects);
                }
            }
        }
        return actors;   
    }
    
    /**
     * Read the block in every map layer, and save them in the map.block array
     */
    export function loadBlocks(map: IMap) {
        if(!Utils.isEmpty(map.layers) && !Utils.isEmpty(map.tileset.blocks)) {
            map.blocks = [];
            for (let j = 0; j < map.height * map.width; j++) {
                map.blocks[j] = 0;
            }
            for (let i = 0; i < map.layers.length; i++) {
                let layer = map.layers[i];
                if (!Utils.isEmpty(layer.data)) {
                    for (let j = 0; j < layer.data.length; j++) {
                        let tileCell = layer.data[j];
                        let blockValue = 0;
                        if(tileCell !== null && tileCell < map.tileset.blocks.length) {
                           blockValue = map.tileset.blocks[tileCell];
                        }
                        map.blocks[j] |= blockValue;
                    }
                }
            }
        }
    }
    
    export function isDirectionBlocked(map: IMap, i: number, j: number, direction: DirectionEnum): boolean {
        switch (direction) {
            case DirectionEnum.UP:
                return Utils.isBlocked(map.blocks[j * map.width + i], BlockDirection.UP) || Utils.isBlocked(map.blocks[(j - 1) * map.width + i], BlockDirection.DOWN);
            case DirectionEnum.DOWN:
                return Utils.isBlocked(map.blocks[j * map.width + i], BlockDirection.DOWN) || Utils.isBlocked(map.blocks[(j + 1) * map.width + i], BlockDirection.UP);
            case DirectionEnum.LEFT:
                return Utils.isBlocked(map.blocks[j * map.width + i], BlockDirection.LEFT) || Utils.isBlocked(map.blocks[j * map.width + i - 1], BlockDirection.RIGHT);
            case DirectionEnum.RIGHT:
                return Utils.isBlocked(map.blocks[j * map.width + i], BlockDirection.RIGHT) || Utils.isBlocked(map.blocks[j * map.width + i + 1], BlockDirection.LEFT);
        };
        return false;
    }
    
    export function pathFinder(map: IMap, start: ICell, target: ICell, pathfinder: Pathfinder = Pathfinder.BASIC): DirectionEnum {
        let distI = target.i - start.i;
        let distJ = target.j - start.j;
        if (distI === 0 && distJ === 0) {
            // Stop
            return DirectionEnum.NONE;
        } else {
            let direction: DirectionEnum;
            //TODO more advanced pathfinding algorithms
            switch (pathfinder) {
                case Pathfinder.BASIC:
                    // Basic pathfinder, stop when it collides with blocks
                    {
                        // Find out the first direction to check (the longest)
                        if (Math.abs(distI) > Math.abs(distJ)) {
                            if (distI > 0) {
                                direction = DirectionEnum.RIGHT;
                            } else {
                                direction = DirectionEnum.LEFT;
                            }
                            // If first direction is blocked, try second
                            if (MapManager.isDirectionBlocked(map, start.i, start.j, direction)) {
                                if (distJ > 0) {
                                    direction = DirectionEnum.DOWN;
                                } else {
                                    direction = DirectionEnum.UP;
                                }
                            } else {
                                return direction;
                            }
                        } else {
                            if (distJ > 0) {
                                direction = DirectionEnum.DOWN;
                            } else {
                                direction = DirectionEnum.UP;
                            }
                            // If first direction is blocked, try second
                            if (MapManager.isDirectionBlocked(map, start.i, start.j, direction)) {
                                if (distI > 0) {
                                    direction = DirectionEnum.RIGHT;
                                } else {
                                    direction = DirectionEnum.LEFT;
                                }
                            } else {
                                return direction;
                            }
                        }
                        // If second direction is blocked too, you are fucked
                        if (MapManager.isDirectionBlocked(map, start.i, start.j, direction)) {
                            direction = DirectionEnum.NONE;
                        }
                    }
                    break;
            }
            return direction;
        }
    }

    export function getNewMap(name: string): IMap {
        return {
            "id": null,
            "name": name,
            "height": 20,
            "width": 25,
            "layers": [
                {
                    "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    "type": "tilelayer",
                    "x": 0,
                    "y": 0
                },
                {
                    "type": "tilelayer",
                    "x": 0,
                    "y": 0
                },
                {
                    "type": "tilelayer",
                    "x": 0,
                    "y": 0
                },
                {
                    "type": "tilelayer",
                    "x": 0,
                    "y": 0
                },
                {
                    "objects": [
                        {
                            "gid": 6,
                            "height": 32,
                            "id": 1,
                            "name": "signor evento",
                            "rotation": 0,
                            "visible": true,
                            "width": 32,
                            "i": 4,
                            "j": 2
                        }],
                    "opacity": 1,
                    "type": "objectgroup",
                    "x": 0,
                    "y": 0
                }],
            "nextobjectid": 2,
            "tile": "002-Woods01.png"
        };
    }
}