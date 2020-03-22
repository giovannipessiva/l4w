import { Constant } from "../util/Constant"
import { RenderConfiguration } from "../util/Commons"
import { Utils } from "../util/Utils"
import { getRandomString } from "../../../../common/src/Utils"
import { Errors } from "../util/Errors"
import { Resource } from "../util/Resource"
import { IMap, IVertex } from "../../../../common/src/model/Map"
import { BlockDirection, DirectionEnum, ICell } from "../../../../common/src/model/Commons"
import { IEvent, IEventData } from "../../../../common/src/model/Event"
import { AbstractGrid } from "../AbstractGrid"
import { AbstractScene } from "../AbstractScene"
import { DynamicScene } from "../../game/DynamicScene"
import { EventManager } from "../manager/EventManager"
import { TilesetManager } from "../manager/TilesetManager"
import {  } from "../manager/CharacterManager"
import { ResourceType } from "../../../../common/src/Constants";

/**
 * Helper class for handling game maps
 */
export namespace MapManager {

    export enum PathfinderEnum {
        BASIC,
        D_STAR_LITE
    }

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
            ) || 
          onTop && !(
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
                    
                    if (Utils.isBlockDirectionBlocked(blockValue | dynamicBlockValue, BlockDirection.UP)) {
                        context.beginPath();
                        context.moveTo(i * grid.cellW, j * grid.cellH);
                        context.lineTo((i + 0.5) * grid.cellW, (j + 0.2) * grid.cellH);
                        context.lineTo((i + 1) * grid.cellW, j * grid.cellH);
                        context.fill();
                        context.stroke();
                    }
                    if (Utils.isBlockDirectionBlocked(blockValue | dynamicBlockValue, BlockDirection.DOWN)) {
                        context.beginPath();
                        context.moveTo(i * grid.cellW, (j + 1) * grid.cellH);
                        context.lineTo((i + 0.5) * grid.cellW, (j + 0.8) * grid.cellH);
                        context.lineTo((i + 1) * grid.cellW, (j + 1) * grid.cellH);
                        context.fill();
                        context.stroke();
                    }
                    if (Utils.isBlockDirectionBlocked(blockValue | dynamicBlockValue, BlockDirection.LEFT)) {
                        context.beginPath();
                        context.moveTo(i * grid.cellW, j * grid.cellH);
                        context.lineTo((i + 0.2) * grid.cellW, (j + 0.5) * grid.cellH);
                        context.lineTo(i * grid.cellW, (j + 1) * grid.cellH);
                        context.fill();
                        context.stroke();
                    }
                    if (Utils.isBlockDirectionBlocked(blockValue | dynamicBlockValue, BlockDirection.RIGHT)) {
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
                let gid = Utils.cellToGid({i: i, j:j},map.width);
                if(Utils.normalizeZIndex(map.tileset.onTop[gid]) > Constant.ZIndex.LV0) {
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

    export function resizeMap(map: IMap, rows: number, columns: number) {
        let oldWidth: number = map.width;
        let newWidth: number = columns;
        let oldHeight: number = map.height;
        let newHeight: number = rows;
        if ((oldWidth === newWidth && oldHeight === newHeight) || Utils.isEmpty(map)) {
            return;
        }
        let referenceIndex: number = Math.min(oldWidth, newWidth);
        let removedColumns: number | undefined;
        let newColumns: any;
        if (newWidth < oldWidth) {
            removedColumns = oldWidth - newWidth;
        } else {
            newColumns = [];
            for (let n = 0; n < newWidth - oldWidth; n++) {
                newColumns[n] = undefined;
            }
        }

        for (let i = 0; i < map.layers.length; i++) {
            let layer = map.layers[i];
            if (layer.data !== undefined) {
                // Correct existing rows
                if (oldWidth !== newWidth) {
                    for (let y = 0; y < oldHeight; y++) {
                        if (removedColumns !== undefined) {
                            layer.data.splice(referenceIndex + y * newWidth, removedColumns);
                        } else if (newColumns !== undefined) {
                            Array.prototype.splice.apply(layer.data, [referenceIndex + y * newWidth, 0].concat(newColumns));
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
    
    export function initTransientData(scene: AbstractScene) {
        let hero: IEvent | undefined = undefined;
        let map: IMap = scene.map;
        let grid: AbstractGrid = scene.grid;
        
        if(scene instanceof DynamicScene) {
            hero = scene.hero;    
        }
        
        loadBlocks(map);
        loadDynamicBlocks(hero, map);
        if(!Utils.isEmpty(map.events)) {
            for(let event of map.events) {
                EventManager.initTransientData(map, grid, <IEvent> event);    
            }
        } else {
            map.events = [];    
        }
        // Make sure these values are numeric
        map.width = parseInt(map.width + "");
        map.height = parseInt(map.height + "");
        TilesetManager.initTransientData(map.tileset);
    }
    
    export function updateDynamicData(hero: IEvent, map: IMap) {
        loadDynamicBlocks(hero, map);
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
                        let tileCell = layer.data[gid];
                        // Ignore invalid cells
                        if (Utils.isEmpty(tileCell) || tileCell! < 0 || tileCell! >= map.tileset.blocks.length) {   
                            continue;
                        }
                        // Ignore cells onTop
                        if(map.tileset.onTop !== undefined && Utils.normalizeZIndex(map.tileset.onTop[tileCell!]) > Constant.ZIndex.LV0) {
                            continue;  
                        }
                        let blockValue = map.tileset.blocks[tileCell!];
                        if(Utils.isEmpty(blockValue)) {
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
        let events = new Array<IEventData>();
        if(hero !== undefined) {
            events.push(hero);
        }
        if (map.events !== undefined) {
            events = events.concat(map.events);
        } 
        for (let e of events) {
            let state = EventManager.getState(<IEvent> e);
            if(state === undefined || Utils.isEmpty(state.block) || state.block) {
                let gid = Utils.cellToGid(e, map.width);
                map.dynamicBlocks[gid] = BlockDirection.ALL;
            }
        }
    }
    
    /** check if the movement is allowed, but consider the final target as without dynamic block */
    function isMovementTowardsTargetBlocked(map: IMap, i: number, j: number, direction: DirectionEnum, finalTarget: ICell): boolean {
        let target: ICell = Utils.getDirectionTarget({ i:i, j:j }, direction);
        let ignoreDynamicBlocks = false;
        if(Utils.getDirection(target, finalTarget) === DirectionEnum.NONE) {
            // Always consider the final target as walkable, if it is an event
            // Otherwise it would be difficult to compute a path to it
            ignoreDynamicBlocks = true;    
        }
        return Utils.isMovementBlocked(map, i, j, direction, ignoreDynamicBlocks);            
    }

    /** use an algorithm to decide the better step for Event to reach Target. Target is always considered as unblocked */
    export function pathFinder(map: IMap, event: IEvent, target: ICell, pathfinder: PathfinderEnum = PathfinderEnum.D_STAR_LITE): DirectionEnum {
        let startTime = Utils.now();
        let distI = target.i - event.i;
        let distJ = target.j - event.j;
        if (distI === 0 && distJ === 0) {
            // Stop
            return DirectionEnum.NONE;
        } else {
            let direction: DirectionEnum = DirectionEnum.NONE;
            switch (pathfinder) {
                case PathfinderEnum.BASIC:
                    // Basic pathfinder
                    {
                        // Find out the first direction to check (the longest)
                        if (Math.abs(distI) > Math.abs(distJ)) {
                            if (distI > 0) {
                                direction = DirectionEnum.RIGHT;
                            } else {
                                direction = DirectionEnum.LEFT;
                            }
                            // If first direction is blocked, try second
                            if (isMovementTowardsTargetBlocked(map, event.i, event.j, direction, target)) {
                                if (distJ > 0) {
                                    direction = DirectionEnum.DOWN;
                                } else {
                                    direction = DirectionEnum.UP;
                                }
                            }
                        } else {
                            if (distJ > 0) {
                                direction = DirectionEnum.DOWN;
                            } else {
                                direction = DirectionEnum.UP;
                            }
                            // If first direction is blocked, try second
                            if (isMovementTowardsTargetBlocked(map, event.i, event.j, direction, target)) {
                                if (distI > 0) {
                                    direction = DirectionEnum.RIGHT;
                                } else {
                                    direction = DirectionEnum.LEFT;
                                }
                            }
                        }
                        if (isMovementTowardsTargetBlocked(map, event.i, event.j, direction, target)) {
                            // If second direction is blocked too, you are fucked
                            direction = DirectionEnum.NONE;
                        }
                    }
                    break;

                case PathfinderEnum.D_STAR_LITE:
                    // Advanced pathfinder
                    {
                        // tslint:disable-next-line
                        var S: IVertex[]; // List of all vertices
                        // tslint:disable-next-line
                        var U: IVertex[]; // Priority queue of vertices, ordered by key value
                        var _g: number[]; // Estimate of the start distance of the vertices
                        var _rhs: number[];  // One step lookahead estimate of g

                        const MAX = Number.MAX_SAFE_INTEGER; // Approximation of infinity
                        var s_start: IVertex;// Start vertex
                        var s_goal: IVertex; // Target vertex
                        let km: number = 0; // Assuming constant edge costs, this will always be 0

                        var width = map.width;

                        s_start = {
                            cell: event
                        };
                        s_goal = {
                            cell: target
                        };

                        direction = main();
                        
                        //TODO detect loops, like in BASIC pathfinder

                        function calculateKey(s: IVertex): number[] {
                            return [Math.min(g(s), rhs(s)) + h(s_start, s) + km, Math.min(g(s), rhs(s))];
                        };

                        /** Initialize values and data structures */
                        function initialize() {
                            // Populate S with a complete list of vertex (even blocked)
                            S = [];
                            for (let j = 0; j < map.height; j++) {
                                for (let i = 0; i < map.width; i++) {
                                    let v: IVertex = {
                                        cell: {
                                            i: i,
                                            j: j
                                        }
                                    }
                                    S.push(v);
                                }
                            }
                            _g = [];
                            _rhs = [];
                            U = [];
                            km = 0;
                            // Initialize g(s) = rhs(s) = MAX for every vertex
                            for (let s of S) {
                                setG(s, MAX);
                                setRhs(s, MAX);
                            }
                            setRhs(s_goal, 0);
                            let vertex: IVertex = s_goal;
                            vertex.key = [h(s_start, s_goal), 0];
                            U.push(vertex);
                        };

                        function updateVertex(u: IVertex) {
                            if (g(u) !== rhs(u)) {
                                u.key = calculateKey(u);
                                queueUpdate(u);
                            } else if (queueContains(u)) {
                                queueRemove(u);
                            }
                        };

                        function computeShortestPath() {
                            while (compareKeys(queueTop().key!, calculateKey(s_start)) < 0 || rhs(s_start) > g(s_start)) {  //FIXME ciclo infinito
                                let uTop = queueTop();
                                let u = uTop;
                                let k_old = uTop.key;
                                let k_new = calculateKey(u);
                                if (compareKeys(k_old!, k_new) < 0) {
                                    u.key = k_new;
                                    queueUpdate(u);
                                } else if (g(u) > rhs(u)) {
                                    setG(u, rhs(u));
                                    queueRemove(u);
                                    for (let s of pred(u)) {
                                        if (!isVertexEqual(s, s_goal)) {
                                            setRhs(s, Math.min(rhs(s), c(s, u) + g(u)));
                                        }
                                        updateVertex(s);
                                    }
                                } else {
                                    let g_old = g(u);
                                    setG(u, MAX);
                                    let array: IVertex[] = pred(u);
                                    array.push(u);
                                    for (let s of array) {
                                        if (rhs(s) === c(s, u) + g_old || (rhs(s) === MAX && (c(s, u) === MAX || g_old === MAX))) {
                                            if (!isVertexEqual(s, s_goal)) {
                                                let min: number | undefined;
                                                for (let s1 of succ(s)) {
                                                    let tmpMin = c(s, s1) + g(s1);
                                                    if (tmpMin > MAX) {
                                                        tmpMin = MAX;
                                                    }
                                                    if (min === undefined || min > tmpMin) {
                                                        min = tmpMin;
                                                    }
                                                }
                                                setRhs(s, min!);
                                            }
                                        }
                                        updateVertex(s);
                                    }
                                }
                            }
                        };

                        function main(): DirectionEnum {
                            initialize();
                            computeShortestPath();

                            while (!isVertexEqual(s_start, s_goal)) {
                                // Find the successor vertex with lowes g value
                                // If (rhs(s_start) === MAX) then there is no known path */
                                let s_min: IVertex;
                                let s_min_c;
                                for (let s1 of succ(s_start)) {
                                    let tmp = c(s_start, s1) + g(s1);
                                    if (s_min_c === undefined || s_min_c > tmp) {
                                        s_min_c = tmp;
                                        s_min = s1;
                                    }
                                }
                                s_start = s_min!;

                                // Move to s_start
                                return Utils.getDirection(s_start.cell, event);

                                // Assuming constant edge costs, this part is not needed
                                /*
                                // Scan graph for changed edge costs
                                if( *** If any edge costs changed *** ) { 
                                    km = km + h(s_last,s_start);
                                    s_last = s_start;
                                    for( *** For all directed edges (u,v) with changed edge costs ***) {
                                        c_old = c(u,v);
                                        // Update the edge cost c(u,v);
                                        if(c_old > c(u,v)) {
                                            if(!isVertexEqual(u,s_goal)) {
                                                setRhs(u,Math.min(rhs(u),c(u,v) + g(v)));
                                            }
                                        } else if(rhs(u) === c_old + g(v)) {
                                            if(!isVertexEqual(u,s_goal)) {
                                                let min;
                                                for(let s1 of succ(u)) {
                                                    let tmp = c(u,s1) + g(s1);
                                                    if(min === undefined || tmp < min) {
                                                        min = tmp;
                                                    }
                                                }                                                
                                                setRhs(u,min);
                                            }
                                        }
                                        updateVertex(u);
                                    }
                                    computeShortestPath();
                                }
                                */
                            }
                            return DirectionEnum.NONE;
                        };

                        /** Set g(u) to val */
                        function setG(u: IVertex, val: number) {
                            if (val > MAX) {
                                val = MAX;
                            }
                            let uid = Utils.cellToGid(u.cell, width);
                            _g[uid] = val;
                        };

                        /** Set rhs(u) to val */
                        function setRhs(u: IVertex, val: number) {
                            if (val > MAX) {
                                val = MAX;
                            }
                            let uid = Utils.cellToGid(u.cell, width);
                            _rhs[uid] = val;
                        };

                        /** Returns an estimate of the start distance of the vertex u */
                        function g(u: IVertex): number {
                            let uid = Utils.cellToGid(u.cell, width);
                            return _g[uid];
                        };

                        /** Returns a one step lookahead value based on g(s) */
                        function rhs(u: IVertex): number {
                            let uid = Utils.cellToGid(u.cell, width);
                            return _rhs[uid];
                        };

                        /** 
                         * Returns a set of successors vertex of s
                         * Successors are vertex that can be reached from s
                         */
                        function succ(s: IVertex): IVertex[] {
                            let gid = Utils.cellToGid(s.cell, map.width);
                            let succ: IVertex[] = [];
                            if (s.cell.i !== 0) {
                                succ.push(S[gid - 1]);
                            }
                            if (s.cell.i < map.width - 1) {
                                succ.push(S[gid + 1]);
                            }
                            if (gid - map.width >= 0) {
                                succ.push(S[gid - map.width]);
                            }
                            if (gid + map.width < S.length) {
                                succ.push(S[gid + map.width]);
                            }
                            return succ;
                        };

                        /** 
                         * Returns a set of predecessors vertex of s
                         * Predecessors are vertex from which s can be reached
                         */
                        function pred(s: IVertex): IVertex[] {
                            let gid = Utils.cellToGid(s.cell, map.width);
                            let pred: IVertex[] = [];
                            if (s.cell.i !== 0) {
                                pred.push(S[gid - 1]);
                            }
                            if (s.cell.i < map.width - 1) {
                                pred.push(S[gid + 1]);
                            }
                            if (gid - map.width >= 0) {
                                pred.push(S[gid - map.width]);
                            }
                            if (gid + map.width < S.length) {
                                pred.push(S[gid + map.width]);
                            }
                            return pred;
                        };

                        /**
                         * Returns the cost of moving from vertex s1 to vertex s2
                         * s2 belongs to succ(s1)
                         */
                        function c(s1: IVertex, s2: IVertex): number {
                            let movementDirection: number = Utils.getDirection(s2.cell, s1.cell);
                            // if s2 is the final target, ignore dynamic blocks
                            let ignoreDynamicBlocks = (Utils.getDirection(s2.cell, s_goal.cell) === DirectionEnum.NONE);
                            // Check if movement to s2 is blocked
                            let isBlocked = Utils.isMovementBlocked(map,s1.cell.i, s1.cell.j, movementDirection, ignoreDynamicBlocks);
                            if(isBlocked) {
                                // If movement to s2 is blocked, cost is infinite
                                return MAX;
                            }
                            return 1;
                        };

                        /**
                         * Heuristic that approximate the goal distance of vertex s1 to s2
                         * On a square grid that allows 4 directions of movement, use Manhattan distance
                         */
                        function h(s1: IVertex, s2: IVertex): number {
                            let dx = Math.abs(s1.cell.i - s2.cell.i);
                            let dy = Math.abs(s1.cell.j - s2.cell.j);
                            // since D = 1, there is no need to multiply it
                            return dx + dy;
                        };

                        function compareKeys(k1: number[], k2: number[]): number {
                            if (k1[0] === k2[0] && k1[1] === k2[1]) {
                                return 0;
                            }
                            if (k1[0] > k2[0] || (k1[0] === k2[0] && k1[1] > k2[1])) {
                                return 1;
                            } else {
                                return -1;
                            }
                        };

                        /** Check if two vertex refers to the same cell */
                        function isVertexEqual(s1: IVertex, s2: IVertex): boolean {
                            return s1.cell.i === s2.cell.i && s1.cell.j === s2.cell.j;
                        }

                        /** Return true if the vertex (u) is in the queue (U) */
                        function queueContains(u: IVertex): boolean {
                            for (let u2 of U) {
                                if (isVertexEqual(u, u2)) {
                                    return true;
                                }
                            }
                            return false;
                        }

                        /** Insert or update a vertex in the queue */
                        function queueUpdate(u: IVertex) {
                            for (let u2 of U) {
                                if (isVertexEqual(u, u2)) {
                                    u2.key = u.key;
                                    return;
                                }
                            }
                            U.push(u);
                        }

                        /** Remove a vertex from the queue */
                        function queueRemove(u: IVertex) {
                            let newU: IVertex[] = [];
                            for (let u2 of U) {
                                if (!isVertexEqual(u, u2)) {
                                    newU.push(u2);
                                }
                            }
                            U = newU;
                        }

                        /** Returns a vertex with the smallest priority in the priority queue */
                        function queueTop(): IVertex {
                            let uMin: IVertex | undefined = undefined;
                            for (let u2 of U) {
                                if (uMin === undefined || compareKeys(u2.key!, uMin.key!) < 0) {
                                    uMin = u2;
                                }
                            }
                            if (uMin === undefined) {
                                // If U is empty, the TopKey is [ infinite, infinite ]
                                // no need to define a cell, this is a fake vertex
                                uMin = {
                                    cell: {
                                        i: -1,
                                        j: -1
                                    },
                                    key: [MAX, MAX]
                                };
                            }
                            return uMin;
                        }
                    }
            }
            // Detect loops
            if(direction !== DirectionEnum.NONE) {
                // Save direction in the path
                EventManager.addDirectionToPath(event, direction, 3);
                // Check if the pathfinder is in loop
                if(event.path === undefined) {
                    event.path = [];
                }
                if (event.path.length === 3 && event.path[0] === event.path[2] && Utils.isDirectionsOpposed(event.path[0], event.path[1])) {
                    // If a block is detected, stop
                    direction = DirectionEnum.NONE;
                }    
            }
            let time = Utils.now() - startTime;
            if(time > 10) {
                console.debug("Path found in: " + time);
            }
            return direction;
        }
    }

    export function getNewMap(name: string): IMap {
        return {
            id: getRandomString(),
            name: name,
            height: 20,
            width: 25,
            layers: [],
            events: [],
            nextobjectid: 2,
            tileset: TilesetManager.getNewTileset()
        };
    }
}