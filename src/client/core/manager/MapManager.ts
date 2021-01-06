import { Constant } from "../util/Constant"
import { RenderConfiguration } from "../util/Commons"
import { ClientUtils } from "../util/ClientUtils"
import { Errors } from "../util/Errors"
import { Resource } from "../util/Resource"
import { IMap, IMapLayer } from "../../../common/model/Map"
import { BlockDirection, CardinalDirection, CardinalDirections, DirectionEnum, ICell, IEmptyCallback, ISize } from "../../../common/Commons"
import { IEvent } from "../../../common/model/Event"
import { AbstractGrid } from "../AbstractGrid"
import { AbstractScene } from "../AbstractScene"
import { DynamicScene } from "../../game/DynamicScene"
import { EventManager } from "../manager/EventManager"
import { TilesetManager } from "../manager/TilesetManager"
import { ResourceType } from "../../../common/Constants";
import { Utils } from "../../../common/Utils"

/**
 * Helper class for handling game maps
 */
export namespace MapManager {

    export function loadMap(mapId: string, canvas: HTMLCanvasElement, callback: (map?: IMap) => void) {
        Resource.load(mapId + "", ResourceType.MAP, function(resourceText: any) {
            if (Utils.isEmpty(resourceText)) {
                console.error("Error while loading map: " + mapId);
                callback();
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
                    console.error(resourceText);
                    Errors.showError(canvas.getContext("2d"));
                    callback();
                }
            }
        });
    }
    
    export function renderUI(map: IMap, grid: AbstractGrid, context: CanvasRenderingContext2D, renderingConfiguration: RenderConfiguration, i: number, j: number, onTop: boolean) { 
        if(!onTop && !(
            renderingConfiguration.showGrid ||
            renderingConfiguration.showEditorGrid ||
            renderingConfiguration.showFocus ||
            renderingConfiguration.showBlocks ||
            renderingConfiguration.showOnTops
        )
            || onTop && !(
                renderingConfiguration.showFPS ||
                renderingConfiguration.showCellNumbers ||
                renderingConfiguration.showFocus
            )) {
            // If there is no need to render UI, exit 
            return;
        }

        if (!Utils.isEmpty(renderingConfiguration)) {
            if (!onTop && renderingConfiguration.showBlocks && !Utils.isEmpty(map) && (!Utils.isEmpty(map.blocks) || !Utils.isEmpty(map.dynamicBlocks))) {
                context.save();
                context.globalAlpha = 0.5;
                context.fillStyle = Constant.Color.YELLOW;
                context.strokeStyle = Constant.Color.BLACK;
                context.lineWidth = 2;
                let blockValue: number = Utils.isEmpty(map.blocks)? BlockDirection.NONE : map.blocks![j * map.width + i];
                let dynamicBlockValue: number = Utils.isEmpty(map.dynamicBlocks)? BlockDirection.NONE : map.dynamicBlocks![j * map.width + i];

                if (blockValue > BlockDirection.NONE || dynamicBlockValue > BlockDirection.NONE) {
                    if(dynamicBlockValue > BlockDirection.NONE) {
                        // Use different color for dynamic blocks
                        context.fillStyle = Constant.Color.GREEN;
                    }
                    
                    if (ClientUtils.isBlockDirectionBlocked(blockValue | dynamicBlockValue, BlockDirection.UP)) {
                        context.beginPath();
                        context.moveTo(i * grid.cellW, j * grid.cellH);
                        context.lineTo((i + 0.5) * grid.cellW, (j + 0.2) * grid.cellH);
                        context.lineTo((i + 1) * grid.cellW, j * grid.cellH);
                        context.fill();
                        context.stroke();
                    }
                    if (ClientUtils.isBlockDirectionBlocked(blockValue | dynamicBlockValue, BlockDirection.DOWN)) {
                        context.beginPath();
                        context.moveTo(i * grid.cellW, (j + 1) * grid.cellH);
                        context.lineTo((i + 0.5) * grid.cellW, (j + 0.8) * grid.cellH);
                        context.lineTo((i + 1) * grid.cellW, (j + 1) * grid.cellH);
                        context.fill();
                        context.stroke();
                    }
                    if (ClientUtils.isBlockDirectionBlocked(blockValue | dynamicBlockValue, BlockDirection.LEFT)) {
                        context.beginPath();
                        context.moveTo(i * grid.cellW, j * grid.cellH);
                        context.lineTo((i + 0.2) * grid.cellW, (j + 0.5) * grid.cellH);
                        context.lineTo(i * grid.cellW, (j + 1) * grid.cellH);
                        context.fill();
                        context.stroke();
                    }
                    if (ClientUtils.isBlockDirectionBlocked(blockValue | dynamicBlockValue, BlockDirection.RIGHT)) {
                        context.beginPath();
                        context.moveTo((i + 1) * grid.cellW, j * grid.cellH);
                        context.lineTo((i + 0.8) * grid.cellW, (j + 0.5) * grid.cellH);
                        context.lineTo((i + 1) * grid.cellW, (j + 1) * grid.cellH);
                        context.fill();
                        context.stroke();
                    }
                }
                context.restore();
            }
            if (!onTop && renderingConfiguration.showOnTops && !Utils.isEmpty(map) && !Utils.isEmpty(map.tileset.onTop)) {
                let gid = ClientUtils.cellToGid({i: i, j:j},map.width);
                if(ClientUtils.normalizeZIndex(map.tileset.onTop[gid]) > Constant.ZIndex.LV0) {
                    context.save();
                    context.globalAlpha = 0.6;
                    context.beginPath();
                    context.fillStyle = Constant.Color.AQUA;
                    context.arc(
                        Math.floor((i + 0.5) * grid.cellW),
                        Math.floor((j + 0.5) * grid.cellH),
                        10,
                        0,
                        Constant.DOUBLE_PI);
                    context.closePath();
                    context.fill();
                    
                    context.fillStyle = Constant.Color.DARKBLUE;
                    context.font = "bold 14px Arial";
                    context.fillText(
                        "" + map.tileset.onTop[gid],
                        (i + 0.35) * grid.cellW,
                        (j + 0.65) * grid.cellH);
                    
                    context.restore();
                }
            }
            if (!onTop && renderingConfiguration.showGrid) {
                context.strokeStyle = Constant.Color.RED;
                context.strokeRect(
                    i * grid.cellW,
                    j * grid.cellH,
                    grid.cellW,
                    grid.cellH);
            }
            if (!onTop && renderingConfiguration.showEditorGrid) {
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
            if (!onTop && renderingConfiguration.showCellNumbers) {
                context.fillStyle = Constant.Color.RED;
                context.font = "bold 10px Arial";
                context.fillText(
                    i + "," + j,
                    i * grid.cellW + 1,
                    j * grid.cellH + 10);
            }
        }
    }

    export function renderGlobalUI(grid: AbstractGrid, context: CanvasRenderingContext2D, renderingConfiguration: RenderConfiguration) {
        if (renderingConfiguration.enableSelection) {
            if (renderingConfiguration.selectCellStart !== undefined || renderingConfiguration.selectEventCell  !== undefined) {
                context.save();
                let x;
                let y;
                let w = grid.cellW;
                let h = grid.cellH;

                if(renderingConfiguration.selectCellStart !== undefined) {
                    x = renderingConfiguration.selectCellStart.i * grid.cellW;
                    y = renderingConfiguration.selectCellStart.j * grid.cellH;
                    if (renderingConfiguration.selectCellEnd !== undefined) {
                        let x2 = renderingConfiguration.selectCellEnd.i * grid.cellW;
                        let y2 = renderingConfiguration.selectCellEnd.j * grid.cellH;
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
                    context.strokeStyle = Constant.Color.RED;
                    context.lineWidth = 3;
                } else {
                    x = renderingConfiguration.selectEventCell!.i * grid.cellW;
                    y = renderingConfiguration.selectEventCell!.j * grid.cellH;
                    context.strokeStyle = Constant.Color.LIME;
                    context.lineWidth = 2;
                }
                context.strokeRect(x, y, w, h);   
                context.restore();
            }
        }
    }

    /**
     * Update the input map object and all its layes in order to reflect new size.
     * This will add/remove rows/columns without breaking the map 
     */
    export function resizeMap(map: IMap, columns: number, rows: number) {
        let oldWidth: number = map.width;
        let newWidth: number = columns;
        let oldHeight: number = map.height;
        let newHeight: number = rows;
        if ((oldWidth === newWidth && oldHeight === newHeight) || Utils.isEmpty(map)) {
            return;
        }
        let referenceIndex: number = Math.min(oldWidth, newWidth);
        let removedColumns: number | undefined;
        let newColumns: null[] | undefined;
        if (newWidth < oldWidth) {
            removedColumns = oldWidth - newWidth;
        } else {
            newColumns = [];
            for (let n = 0; n < newWidth - oldWidth; n++) {
                newColumns[n] = null;
            }
        }

        for (let l = 0; l < map.layers.length; l++) {
            let layer = map.layers[l];
            if (layer.data !== undefined) {
                // Correct existing rows
                if (oldWidth !== newWidth) {
                    for (let y = 0; y < oldHeight; y++) {
                        if (removedColumns !== undefined) {
                            layer.data.splice(referenceIndex + y * newWidth, removedColumns);
                        } else if (newColumns !== undefined) {
                            layer.data.splice(referenceIndex + y * newWidth, 0, ...newColumns);
                        } else {
                            console.error("Unexpected case");
                        }
                    }
                }
                // Delete excessive rows
                if (oldHeight > newHeight) {
                    layer.data.length = newWidth * newHeight;
                }
                // Add more rows
                if (oldHeight < newHeight) {
                    let newData: any = [];
                    for (let n = 0; n < newWidth - oldWidth; n++) {
                        newData[n] = undefined;
                    }
                    for (let i = oldWidth; i < newWidth; i++) {
                        layer.data!.concat(newData);
                    }
                }
            }
        }

        map.height = rows;
        map.width = columns;
    }

    /**
     * Update the input map object and all its layes in order to reflect the shift of the map.
     * This will add/remove rows/columns without breaking the map.
     */
    export function shiftMap(map: IMap, i: number, j: number) {
        // Limit negative shift to a 1x1 map
        if(i < -map.width) {
            i = -map.width + 1;
        }
        if(j < -map.height) {
            j = -map.height + 1;
        }
        // Update map size
        let oldMapHeight = map.height;
        map.width += i;
        map.height += j;

        let newColumns = [];
        if(i > 0) {
            for (let n = 0; n < i; n++) {
                newColumns[n] = null;
            }
        }
        let emptyRow = [];
        if(j > 0) {
            for (let n = 0; n < map.width; n++) {
                emptyRow[n] = null;
            }
        }
        for (let l = 0; l < map.layers.length; l++) {
            let layer = map.layers[l];
            if (layer.data !== undefined) {
                if(i > 0) {
                    // Add columns on left side
                    for (let y = 0; y < oldMapHeight; y++) {
                        layer.data.splice(y * map.width, 0, ...newColumns);
                    }
                } else if(i < 0) {
                    // Remove columns on left side
                    for (let y = 0; y < oldMapHeight; y++) {
                        layer.data.splice(y * map.width, -i);
                    }
                }
                if(j > 0) {
                    // Add rows on top
                    for (let n = 0; n < j; n++) {
                        layer.data.splice(0, 0, ...emptyRow);
                    }
                } else if(j < 0) {
                    // Remove rows on top
                    layer.data.splice(0, -j * map.width);
                }
            }
        }
        // Shift events
        for(let e of map.events) {
            e.i += i;
            e.j += j;
        }
    }
    
    /**
     * Will compute the value of every transient field in the Map object
     */
    export function initTransientData(scene: AbstractScene, callback: IEmptyCallback) {
        let hero: IEvent | undefined = undefined;
        let map: IMap = scene.map;
        let grid: AbstractGrid = scene.grid;
        
        if(scene instanceof DynamicScene) {
            hero = scene.hero;    
        }

        TilesetManager.initTransientData(map.tileset, grid);
        
        loadAutotiles(map, () => {
            loadBlocks(map);
            loadDynamicBlocks(hero, map);

            if(!Utils.isEmpty(map.events)) {
                map.maxEventId = 0;
                for(let event of map.events) {
                    if(event.id > map.maxEventId) {
                        map.maxEventId = event.id;
                    }
                    EventManager.initTransientData(map, grid, <IEvent> event);
                }
            } else {
                map.events = [];
            }
            // Make sure these values are numeric
            map.width = parseInt(map.width + "");
            map.height = parseInt(map.height + "");

            callback();
        }); 
    }
    
    export function updateDynamicData(hero: IEvent, map: IMap) {
        loadDynamicBlocks(hero, map);
    }

    function loadAutotiles(map: IMap, callback: IEmptyCallback) {
        if(!Utils.isEmpty(map.autotilesets)) {
            TilesetManager.initTransientDataAutotiles(Object.values(map.autotilesets!)).then(() => {
                // For every autotile cell, compute the value used for rendering
                // and based on proximity to other cells of the same autotile
                for (let l = 0; l < map.layers.length; l++) {
                    let layer = map.layers[l];
                    if (layer.data !== undefined) {
                        layer.autotileData = [];
                        for (let gid = 0; gid < layer.data!.length; gid++) {
                            if(MapManager.isThisAnAutotileCell(gid, layer, map)) {
                                let proximityValue = getAutotileProximityValue(gid, { w: map.width, h: map.height }, layer.data[gid]!, layer);
                                layer.autotileData.push(proximityValue);
                            } else {
                                layer.autotileData.push(null);
                            }
                        }
                    }
                }
                callback();
            });
        } else {
            callback();
        }
    }

    /**
     * Given a map cell, return a CardinalDirection value representing
     * which proximal cells contains the same autotile
     */
    export function getAutotileProximityValue(gid: number, size: ISize, autotile: number, layer: IMapLayer): number {
        let proximityValue = CardinalDirection.NONE;
        for(let direction of CardinalDirections) {
            let targetGID = ClientUtils.getTargetGID(gid, direction, size);
            if(targetGID === undefined || layer.data![targetGID] === autotile) {
                proximityValue |= direction;
            }
        }
        return proximityValue;
    }

    /**
     * Read the block in every map layer, and save them in the map.block array
     */
    function loadBlocks(map: IMap) {
        map.blocks = [];
        if (!Utils.isEmpty(map.layers) && !Utils.isEmpty(map.tileset.blocks)) {
            for (let j = 0; j < map.height * map.width; j++) {
                map.blocks[j] = 0;
            }
            for (let l = 0; l < map.layers.length; l++) {
                let layer = map.layers[l];
                if (layer.data !== undefined) {
                    for (let gid = 0; gid < layer.data!.length; gid++) { 
                        let blockValue;
                        if(isThisAnAutotileCell(gid, layer, map)) {
                            let autotileId = layer.data[gid]!;
                            if(map.autotilesets === undefined || map.autotilesets[autotileId] === undefined) {
                                console.warn("Autotile: " +  + " undefined for gid:" + gid + " in map: " + map.id);
                            } else {
                                blockValue = map.autotilesets[autotileId].blocked? BlockDirection.ALL : BlockDirection.NONE;
                            }
                        } else {
                            // Check tile block
                            let tileCell = layer.data[gid];
                            // Ignore invalid cells
                            if (tileCell === null || tileCell! < 0 || tileCell! >= map.tileset.blocks.length) {   
                                continue;
                            }
                            // Ignore cells onTop
                            if(map.tileset.onTop !== undefined && ClientUtils.normalizeZIndex(map.tileset.onTop[tileCell!]) > Constant.ZIndex.LV0) {
                                continue;
                            }
                            blockValue = map.tileset.blocks[tileCell!];
                        }
                        if(blockValue === undefined) {
                            blockValue = BlockDirection.NONE;
                        }
                        // This will override a block if there's something over it that you can walk on
                        // (the higher walkable cell wins)
                        map.blocks[gid] = blockValue;
                    }
                }
            }
        }
    }
    
    /**
     * Read the block in every event, and save them in the map.dynamicBlock array
     */
    function loadDynamicBlocks(hero: IEvent | undefined, map: IMap) {
        map.dynamicBlocks = [];
        for (let j = 0; j < map.height * map.width; j++) {
            map.dynamicBlocks[j] = 0;
        }
        let events = new Array<IEvent>();
        if(hero !== undefined) {
            events.push(hero);
        }
        if (map.events !== undefined) {
            events = events.concat(map.events);
        } 
        for (let e of events) {
            let state = EventManager.getState(<IEvent> e);
            if(state === undefined || Utils.isEmpty(state.block) || state.block) {
                let gid = ClientUtils.cellToGid(e, map.width);
                map.dynamicBlocks[gid] = BlockDirection.ALL;
            }
        }
    }
    
    /** 
     * Check if the movement is allowed, but consider the final target as without dynamic block
     */
    export function isMovementTowardsTargetBlocked(map: IMap, i: number, j: number, direction: DirectionEnum, finalTarget?: ICell): boolean {
        let target: ICell = ClientUtils.getDirectionTarget({ i:i, j:j }, direction);
        let ignoreDynamicBlocks = false;
        if(finalTarget !== undefined && ClientUtils.getDirection(target, finalTarget) === DirectionEnum.NONE) {
            // Always consider the final target as walkable, if it is an event
            // Otherwise it would be difficult to compute a path to it
            ignoreDynamicBlocks = true;    
        }
        return ClientUtils.isMovementBlocked(map, i, j, direction, ignoreDynamicBlocks);            
    }

    /**
     * Return whether the cell contains an autotile value
     */
    export function isThisAnAutotileCell(gid: number | undefined, layer: IMapLayer, map: IMap): boolean {
        if(gid !== undefined && gid >= 0 && gid < map.width * map.height) {
            return layer.data![gid]! > map.tileset.maxGID;
        } else {
            return false;
        }
    }
}