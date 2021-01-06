import { ICell, PathfinderEnum, DirectionEnum } from "../../../common/Commons";
import { IEvent } from "../../../common/model/Event";
import { IMap, IVertex } from "../../../common/model/Map";
import { Utils } from "../../../common/Utils";
import { ClientUtils } from "../util/ClientUtils";
import { EventManager } from "./EventManager";
import { MapManager } from "./MapManager";

/** 
 * Use an algorithm to decide the better step for Event to reach Target.
 */
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
                direction = basicPathfinding(map, event, target);
                break;

            case PathfinderEnum.D_STAR_LITE:
                // Advanced pathfinder
                direction = dStarLite(map, event, target);
        }
        // Detect loops
        if(direction !== DirectionEnum.NONE) {
            // Save direction in the path
            EventManager.addDirectionToPath(event, direction, 3);
            // Check if the pathfinder is in loop
            if(event.path === undefined) {
                event.path = [];
            }
            if (event.path.length === 3 && event.path[0] === event.path[2] && ClientUtils.isDirectionsOpposed(event.path[0], event.path[1])) {
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

function dStarLite(map: IMap, current: ICell, target: ICell): DirectionEnum {
    let S: IVertex[]; // List of all vertices
    let U: IVertex[]; // Priority queue of vertices, ordered by key value
    let _g: number[]; // Estimate of the start distance of the vertices
    let _rhs: number[];  // One step lookahead estimate of g

    const MAX = Number.MAX_SAFE_INTEGER; // Approximation of infinity
    let s_start: IVertex;// Start vertex
    let s_goal: IVertex; // Target vertex
    let km: number = 0; // Assuming constant edge costs, this will always be 0

    let width = map.width;

    s_start = {
        cell: current
    };
    s_goal = {
        cell: target
    };

    let direction = main();
    
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
            let s_min_c: number | undefined;
            for (let s1 of succ(s_start)) {
                let tmp = c(s_start, s1) + g(s1);
                if (s_min_c === undefined || s_min_c > tmp) {
                    s_min_c = tmp;
                    s_min = s1;
                }
            }
            s_start = s_min!;

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
            
            if(s_min_c! >= MAX) {
                // Destination is unreachable, use basic pathfinding to get closer
                return basicPathfinding(map, current, target);
            } else {
                // Move to s_start
                return ClientUtils.getDirection(s_start.cell, current);
            }
        }
        return DirectionEnum.NONE;
    };

    /** Set g(u) to val */
    function setG(u: IVertex, val: number) {
        if (val > MAX) {
            val = MAX;
        }
        let uid = ClientUtils.cellToGid(u.cell, width);
        _g[uid] = val;
    };

    /** Set rhs(u) to val */
    function setRhs(u: IVertex, val: number) {
        if (val > MAX) {
            val = MAX;
        }
        let uid = ClientUtils.cellToGid(u.cell, width);
        _rhs[uid] = val;
    };

    /** Returns an estimate of the start distance of the vertex u */
    function g(u: IVertex): number {
        let uid = ClientUtils.cellToGid(u.cell, width);
        return _g[uid];
    };

    /** Returns a one step lookahead value based on g(s) */
    function rhs(u: IVertex): number {
        let uid = ClientUtils.cellToGid(u.cell, width);
        return _rhs[uid];
    };

    /** 
     * Returns a set of successors vertex of s
     * Successors are vertex that can be reached from s
     */
    function succ(s: IVertex): IVertex[] {
        let gid = ClientUtils.cellToGid(s.cell, map.width);
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
        let gid = ClientUtils.cellToGid(s.cell, map.width);
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
        let movementDirection: DirectionEnum = ClientUtils.getDirection(s2.cell, s1.cell);
        // if s2 is the final target, ignore dynamic blocks
        let ignoreDynamicBlocks = (ClientUtils.getDirection(s2.cell, s_goal.cell) === DirectionEnum.NONE);
        // Check if movement to s2 is blocked
        let isBlocked = ClientUtils.isMovementBlocked(map,s1.cell.i, s1.cell.j, movementDirection, ignoreDynamicBlocks);
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

    return direction;
}

/**
 * Decide next step considering only the path from current to target as the crow flies.
 * Will not try to sidestep blocks, because it would result in a less predictable
 * movement for the user; it's better to fail in a consistent way
 */
function basicPathfinding(map: IMap, current: ICell, target: ICell): DirectionEnum {
    let distI = target.i - current.i;
    let distJ = target.j - current.j;
    let direction = DirectionEnum.NONE;
    // Find out the first direction to check (the longest)
    if (Math.abs(distI) > Math.abs(distJ)) {
        if (distI > 0) {
            direction = DirectionEnum.RIGHT;
        } else if(distI < 0) {
            direction = DirectionEnum.LEFT;
        } else {
            // Will not try to sidestep
        }
        // If first direction is blocked, try second
        if (MapManager.isMovementTowardsTargetBlocked(map, current.i, current.j, direction, target)) {
            if (distJ > 0) {
                direction = DirectionEnum.DOWN;
            } else if(distJ < 0) {
                direction = DirectionEnum.UP;
            } else {
                // Will not try to sidestep
            }
        }
    } else {
        if (distJ > 0) {
            direction = DirectionEnum.DOWN;
        } else if(distJ < 0) {
            direction = DirectionEnum.UP;
        } else {
            // Will not try to sidestep
        }
        // If first direction is blocked, try second
        if (MapManager.isMovementTowardsTargetBlocked(map, current.i, current.j, direction, target)) {
            if (distI > 0) {
                direction = DirectionEnum.RIGHT;
            } else if(distI < 0) {
                direction = DirectionEnum.LEFT;
            } else {
                // Will not try to sidestep
            }
        }
    }
    if (MapManager.isMovementTowardsTargetBlocked(map, current.i, current.j, direction, target)) {
        // If second direction is blocked too, you are fucked
        direction = DirectionEnum.NONE;
    }
    return direction;
}