/// <reference path="../util/Constant.ts" />
/// <reference path="../model/Map.ts" />
/// <reference path="../AbstractGrid.ts" />
/// <reference path="../manager/ActorManager.ts" />

/**
 * Helper class for handling game maps
 */
namespace MapManager {
    
    export enum PathfinderEnum {
        BASIC,
        D_STAR_LITE
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
                    let tileCell: ICell = Utils.gidToCell(tileGID, Math.floor(map.tileset.imagewidth / grid.cellW)); //TODO ottimizzabile, precalcola
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
    
    export function pathFinder(map: IMap, actor: IActor, target: ICell, pathfinder: PathfinderEnum = PathfinderEnum.D_STAR_LITE): DirectionEnum {
        let distI = target.i - actor.i;
        let distJ = target.j - actor.j;
        if (distI === 0 && distJ === 0) {
            // Stop
            return DirectionEnum.NONE;
        } else {
            let direction: DirectionEnum;
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
                            if (MapManager.isDirectionBlocked(map, actor.i, actor.j, direction)) {
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
                            if (MapManager.isDirectionBlocked(map, actor.i, actor.j, direction)) {
                                if (distI > 0) {
                                    direction = DirectionEnum.RIGHT;
                                } else {
                                    direction = DirectionEnum.LEFT;
                                }
                            }
                        }
                        if (MapManager.isDirectionBlocked(map, actor.i, actor.j, direction)) {
                            // If second direction is blocked too, you are fucked
                            direction = DirectionEnum.NONE;
                        } else {
                            // Save direction in the path
                            ActorManager.addDirectionToPath(actor, direction, 3);
                            // Check if the pathfinder is in loop
                            if(actor.path.length === 3 && actor.path[0] === actor.path[2] && Utils.isDirectionsOpposed(actor.path[0],actor.path[1])) {
                                // If a block is detected, stop
                                direction = DirectionEnum.NONE;
                            }
                        }
                    }
                    break;
                    
                case PathfinderEnum.D_STAR_LITE:
                    // Advanced pathfinder
                    {
                        var S: IVertex[]; // List of all vertices
                        var U: IVertex[]; // Priority queue of vertices, ordered by key value
                        var _g: number[]; // Estimate of the start distance of the vertices
                        var _rhs: number[];  // One step lookahead estimate of g
                        
                        const MAX = 9999; // Approximation of infinity
                        var s_start: IVertex;// Start vertex
                        var s_goal: IVertex; // Target vertex
                        var s_last: IVertex;
                        let km; // Assuming constant edge costs, this will always be 0

                        var width = map.width;

                        s_start = {
                            cell: actor
                        };
                        s_goal = {
                            cell: target
                        };
                        
                        // If the target has changed, flush cached data
                        if (!Utils.isEmpty(map.dstarlitecache) && !isVertexEqual(map.dstarlitecache.s_goal, s_goal)) {
                            map.dstarlitecache = undefined;
                        }

                        direction = main();
                        
                        // Cache data
                        map.dstarlitecache = {
                            S: S,
                            U: U,
                            s_goal: s_goal,
                            g: _g,
                            rhs: _rhs
                        };
                        
                        function calculateKey(s: IVertex): number[] {
                            return [ Math.min(g(s),rhs(s)) + h(s_start,s) + km , Math.min(g(s),rhs(s))];
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
                            for(let s of S) {
                                setG(s,MAX);
                                setRhs(s,MAX);
                            }
                            setRhs(s_goal,0);
                            let vertex: IVertex = s_goal;
                            vertex.key = [h(s_start,s_goal), 0];
                            U.push(vertex);
                        };
                        
                        function updateVertex(u: IVertex) {
                            if(g(u) !== rhs(u)) {
                                u.key = calculateKey(u);
                                queueUpdate(u);
                            } else if(queueContains(u)) {    
                                queueRemove(u); 
                            }
                        };
                        
                        function computeShortestPath() {
                            while(compareKeys(queueTop().key,calculateKey(s_start)) < 0 || rhs(s_start) > g(s_start)) {  //FIXME ciclo infinito
                                let uTop = queueTop();
                                let u = uTop;
                                let k_old = uTop.key;
                                let k_new = calculateKey(u);
                                if(compareKeys(k_old, k_new) < 0) {
                                    u.key = k_new;
                                    queueUpdate(u);
                                } else if(g(u) > rhs(u)) {
                                    setG(u,rhs(u));
                                    queueRemove(u);
                                    for(let s of pred(u)) {
                                        if(!isVertexEqual(s,s_goal)) {
                                            setRhs(s,Math.min(rhs(s),c(s,u)+g(u)));
                                        }
                                        updateVertex(s);
                                    }
                                } else {
                                    let g_old = g(u);
                                    setG(u, MAX);
                                    let array: IVertex[] = pred(u);
                                    array.push(u);
                                    for(let s of array) {
                                        if(rhs(s) === c(s,u) + g_old  || (rhs(s) === MAX && (c(s,u) === MAX || g_old === MAX))) {
                                            if(!isVertexEqual(s,s_goal)) {
                                                let min;
                                                for(let s1 of succ(s)) {
                                                    let tmpMin = c(s,s1)+g(s1);
                                                    if(tmpMin > MAX){
                                                        tmpMin = MAX; 
                                                    }
                                                    if(min === undefined || min>tmpMin) {
                                                        min = tmpMin;
                                                    }
                                                }
                                                setRhs(s,min);  
                                            }
                                        }
                                        updateVertex(s);
                                    }
                                } 
                            }
                        };
                        
                        function main(): DirectionEnum {
                            // Check if initial data has already been computed and cached
                            if (!Utils.isEmpty(map.dstarlitecache) && false ) { //TODO disable cache for testing
                                S = map.dstarlitecache.S;
                                U = map.dstarlitecache.U;
                                _g = map.dstarlitecache.g;
                                _rhs = map.dstarlitecache.rhs;
                            } else {
                                s_last = s_start;
                                initialize();
                                computeShortestPath();
                            }
                            
                            while(!isVertexEqual(s_start, s_goal)) {
                                // Find the successor vetex with lowes g value
                                // If (rhs(s_start) === MAX) then there is no known path */
                                let s_min;
                                let s_min_c;
                                for (let s1 of succ(s_start)) {
                                    let tmp = c(s_start, s1) + g(s1);
                                    if (s_min_c === undefined || s_min_c > tmp) {
                                        s_min_c = tmp;
                                        s_min = s1;
                                    }
                                }
                                s_start = s_min;
        
                                // Move to s_start
                                return Utils.getDirection(s_start.cell, actor);
                                
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
                        };
                      
                        /** Set g(u) to val */
                        function setG(u: IVertex, val: number) {
                            if(val > MAX) {
                                val = MAX;    
                            }
                            let uid = Utils.cellToGid(u.cell, width);
                            _g[uid] = val; 
                        };
                        
                        /** Set rhs(u) to val */
                        function setRhs(u: IVertex, val: number) {
                            if(val > MAX) {
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
                            let gid = Utils.cellToGid(s.cell,map.width);
                            let succ: IVertex[] = [];
                            if(s.cell.i !== 0) {
                                succ.push(S[gid-1]);
                            }
                            if(s.cell.i < map.width-1) {
                                succ.push(S[gid+1]);
                            }
                            if(gid-map.width >= 0) {
                                succ.push(S[gid-map.width]);
                            }
                            if(gid+map.width < S.length) {
                                succ.push(S[gid+map.width]);
                            }
                            return succ;
                        };
                        
                        /** 
                         * Returns a set of predecessors vertex of s
                         * Predecessors are vertex from which s can be reached
                         */
                        function pred(s: IVertex): IVertex[] {
                            let gid = Utils.cellToGid(s.cell,map.width);
                            let pred: IVertex[] = [];
                            if(s.cell.i !== 0) {
                                pred.push(S[gid-1]);
                            }
                            if(s.cell.i < map.width-1) {
                                pred.push(S[gid+1]);
                            }
                            if(gid-map.width >= 0) {
                                pred.push(S[gid-map.width]);
                            }
                            if(gid+map.width < S.length) {
                                pred.push(S[gid+map.width]);
                            }
                            return pred;
                        };
                        
                        /**
                         * Returns the cost of moving from vertex s1 to vertex s2
                         * s2 belongs to succ(s1)
                         */
                        function c(s1: IVertex, s2: IVertex): number {
                            // Check if movement to s2 is blocked
                            let block = map.blocks[s2.cell.i + s2.cell.j*map.width];
                            if(block !== 0) {
                                let movementDirection: number;
                                if(s1.cell.i > s2.cell.i) {
                                    movementDirection = BlockDirection.RIGHT;
                                } else if (s1.cell.i < s2.cell.i) {
                                    movementDirection = BlockDirection.LEFT;
                                } else if (s1.cell.j > s2.cell.j) {
                                    movementDirection = BlockDirection.DOWN;
                                } else {
                                    movementDirection = BlockDirection.UP;
                                }
                                if(Utils.isBlocked(block, movementDirection)) {
                                    // If movement to s2 is blocked, cost is infinite
                                    return MAX;
                                }
                            }
                            // Check if movement from s1 is blocked
                            block = map.blocks[s1.cell.i + s1.cell.j*map.width];
                            if(block !== 0) {
                                let movementDirection: number;
                                if(s1.cell.i > s2.cell.i) {
                                    movementDirection = BlockDirection.LEFT;
                                } else if (s1.cell.i < s2.cell.i) {
                                    movementDirection = BlockDirection.RIGHT;
                                } else if (s1.cell.j > s2.cell.j) {
                                    movementDirection = BlockDirection.UP;
                                } else {
                                    movementDirection = BlockDirection.DOWN;
                                }
                                if(Utils.isBlocked(block, movementDirection)) {
                                    // If movement from s1 is blocked, cost is infinite
                                    return MAX;
                                }
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
                        
                        function compareKeys(k1: number [], k2: number []): number {
                            if(k1[0] === k2[0] && k1[1] === k2[1]) {
                                return 0;    
                            }
                            if(k1[0] > k2[0] || (k1[0] === k2[0] && k1[1] > k2[1])) {
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
                            for(let u2 of U) {
                                if(isVertexEqual(u, u2)) {
                                    return true;
                                }    
                            }
                            return false;
                        }
                        
                        /** Insert or update a vertex in the queue */
                        function queueUpdate(u: IVertex) {
                            for(let u2 of U) {
                                if(isVertexEqual(u, u2)) {
                                    u2.key = u.key;
                                    return;
                                }    
                            }
                            U.push(u);
                        }
                        
                        /** Remove a vertex from the queue */
                        function queueRemove(u: IVertex) {
                            let newU: IVertex[] = [];
                            for(let u2 of U) {
                                if(!isVertexEqual(u, u2)) {
                                    newU.push(u2);
                                }    
                            }
                            U = newU;
                        }
                        
                        /** Returns a vertex with the smallest priority in the priority queue */
                        function queueTop(): IVertex {
                            let uMin: IVertex;
                            for(let u2 of U) {
                                if(uMin === undefined || compareKeys(u2.key, uMin.key) < 0) {
                                    uMin = u2;
                                }    
                            }
                            if(uMin === undefined) {
                                // If U is empty, the TopKey is [ infinite, infinite ]
                                // no need to define a cell, this is a fake vertex
                                uMin = {
                                    cell: undefined,
                                    key: [ MAX, MAX ]        
                                };
                            }
                            return uMin;
                        }
                    }
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