/// <reference path="../../../../common/src/model/Commons.ts" />
/// <reference path="../../core/util/Utils.ts" />
/// <reference path="../../core/util/Constant.ts" />
/// <reference path="../../core/util/Errors.ts" />
/// <reference path="../../core/manager/MapManager.ts" />

namespace Tester {
    
    interface IPathfinderTestResult {
        cell: ICell,
    };

    export function testPathfinding(width: number, height: number, eventI: number, eventJ: number, targetI: number,targetJ: number,blocks: number[]): IPathfinderTestResult[] {  
        // Initialize map
        let map: IMap = MapManager.getNewMap("Test");
        map.width = width;
        map.height = height;
        map.blocks = blocks;
        // Initialize Event and target
        let event: IEvent = EventManager.getNewEvent();
        event.i = eventI;
        event.j = eventJ;
        let target: ICell = {
            i:targetI,
            j:targetJ
        };
        // Set pathfinding algorithm
        let pathfinder: MapManager.PathfinderEnum = MapManager.PathfinderEnum.BASIC;
        let alg: string = $("#alg").val();
        if(alg === "D* Lite") {
            pathfinder = MapManager.PathfinderEnum.D_STAR_LITE;
        }
        // Find path
        let result: IPathfinderTestResult[] = [];
        let direction: DirectionEnum;
        let guard = 0;
        while (direction !== DirectionEnum.NONE) {
            direction = MapManager.pathFinder(map, event, target, pathfinder);
            if(direction !== DirectionEnum.NONE) {
                event = <IEvent> Utils.moveToDirection(event, direction);
                result.push({
                    cell:{
                        i:event.i,
                        j:event.j
                    },
                });
            }
            // Check guard to avoid infite loop
            guard++;
            if(guard > width * height) {
                console.error("Pathfinder has failed :(");
                break;    
            }
        }
        return result;
    };
}