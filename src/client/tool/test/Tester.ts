import { ICell, DirectionEnum } from "../../../common/model/Commons"
import { IEvent } from "../../../common/model/Event"
import { ClientUtils } from "../../core/util/Utils"
import { MapManager } from "../../core/manager/MapManager"
import { DataDefaults } from "../../../common/DataDefaults"

export namespace Tester {
    
    interface IPathfinderTestResult {
        cell: ICell,
    };

    export function testPathfinding(width: number, height: number, eventI: number, eventJ: number, targetI: number,targetJ: number,blocks: number[]): IPathfinderTestResult[] {  
        // Initialize map
        let map = DataDefaults.getMap("Test");
        map.width = width;
        map.height = height;
        map.blocks = blocks;
        // Initialize Event and target
        let event: IEvent = DataDefaults.getEvent();
        event.i = eventI;
        event.j = eventJ;
        let target: ICell = {
            i:targetI,
            j:targetJ
        };
        // Set pathfinding algorithm
        let pathfinder: MapManager.PathfinderEnum;
        let alg: string = (<HTMLSelectElement> document.getElementById("alg")).value;
        switch(alg) {
            case "Basic":
                pathfinder = MapManager.PathfinderEnum.BASIC;
                break;
            case "D* Lite":
                pathfinder = MapManager.PathfinderEnum.D_STAR_LITE;
                break;
            default:
                console.error("Unexpected pathfinding algo: " + alg);
                pathfinder = MapManager.PathfinderEnum.BASIC;
        }
        // Find path
        let result: IPathfinderTestResult[] = [];
        let direction: DirectionEnum;
        let guard = 0;
        do {
            direction = MapManager.pathFinder(map, event, target, pathfinder);
            if(direction !== DirectionEnum.NONE) {
                event = <IEvent> ClientUtils.moveToDirection(event, direction);
                result.push({
                    cell:{
                        i:event.i,
                        j:event.j
                    },
                });
            }
            // Check guard to avoid infite loop
            guard ++;
            if(guard > width * height) {
                console.error("Pathfinder has failed :(");
                break;    
            }
        } while(direction !== DirectionEnum.NONE);
        return result;
    };
}