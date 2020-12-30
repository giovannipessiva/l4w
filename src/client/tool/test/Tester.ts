import { ICell, DirectionEnum, PathfinderEnum } from "../../../common/Commons"
import { IEvent } from "../../../common/model/Event"
import { ClientUtils } from "../../core/util/ClientUtils"
import { MapManager } from "../../core/manager/MapManager"
import { DataDefaults } from "../../../common/DataDefaults"

import Vue from "vue"
// @ts-ignore https://github.com/vuejs/vue-cli/issues/1198
import LoginComponent from "../../components/Login.vue"
import BugReportingComponent from "../../components/BugReporting.vue"

export namespace Tester {

    export function loadVueComponents() {
        new Vue({
            el: "#loginVue",
            components: {
                "login": LoginComponent,
            }
        });

        new Vue({
            el: "#bugReportingVue",
            components: {
                "bug-reporting": BugReportingComponent,
            }
        });
    }
    
    interface IPathfinderTestResult {
        cell: ICell
    };

    export function testPathfinding(width: number, height: number, eventI: number, eventJ: number, targetI: number,targetJ: number,blocks: number[]): IPathfinderTestResult[] {  
        // Initialize map
        let map = DataDefaults.getEmptyMap();
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
        let pathfinder: PathfinderEnum;
        let alg: string = (<HTMLSelectElement> document.getElementById("alg")).value;
        switch(alg) {
            case "Basic":
                pathfinder = PathfinderEnum.BASIC;
                break;
            case "D* Lite":
                pathfinder = PathfinderEnum.D_STAR_LITE;
                break;
            default:
                console.error("Unexpected pathfinding algo: " + alg);
                pathfinder = PathfinderEnum.BASIC;
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

    var stopMovement: boolean;
    var blocks: number[];
    const BLOCK = 15;
    const NO_BLOCK = 0;

    export function drawMap() {
        let eventX = parseInt((<HTMLInputElement> document.getElementById("eventX")).value);
        let eventY = parseInt((<HTMLInputElement> document.getElementById("eventY")).value);
        let targetX = parseInt((<HTMLInputElement> document.getElementById("targetX")).value);
        let targetY = parseInt((<HTMLInputElement> document.getElementById("targetY")).value);
        let tableWidth = parseInt((<HTMLInputElement> document.getElementById("width")).value);
        let tableHeight = parseInt((<HTMLInputElement> document.getElementById("height")).value);
        
        if(blocks === undefined || blocks.length !== tableWidth * tableHeight) {
            blocks = new Array(tableWidth * tableHeight).fill(0);
        }
        
        if(eventX >= tableWidth) {
            eventX = tableWidth - 1;
            (<HTMLInputElement> document.getElementById("eventX")).value = eventX + "";
        }
        if(targetX >= tableWidth) {
            targetX = tableWidth - 1;
            (<HTMLInputElement> document.getElementById("targetX")).value = targetX + "";
        }
        if(eventY >= tableHeight) {
            eventY = tableHeight - 1;
            (<HTMLInputElement> document.getElementById("eventY")).value = eventY + "";
        }
        if(targetY >= tableHeight) {
            targetY = tableHeight - 1;
            (<HTMLInputElement> document.getElementById("targetY")).value = targetY + "";
        }
        
        let map = "";
        for(let y=0; y<tableHeight; y++) {
            for(let x=0; x<tableWidth; x++) {
                let classes = "cell";
                let gid = x + y * tableWidth;
                if(targetX===x && targetY===y) {
                    classes += " target";
                }
                if(blocks[gid] === BLOCK) {
                    classes += " blocked";
                }
                if(eventX===x && eventY===y) {
                    classes += " event";
                }
                map += "<div id='g"+ gid + "' class='"+classes+"' onclick='L4W_tester.Tester.toggleBlock(" + gid + ")'></div>";
            }
            map += "<br style='clear:both;'/>";
        }
        document.getElementById("map")!.innerHTML = map;
    };

    export function pathfinding(){
        let eventX = parseInt((<HTMLInputElement> document.getElementById("eventX")).value);
        let eventY = parseInt((<HTMLInputElement> document.getElementById("eventY")).value);
        let targetX = parseInt((<HTMLInputElement> document.getElementById("targetX")).value);
        let targetY = parseInt((<HTMLInputElement> document.getElementById("targetY")).value);
        let tableWidth = parseInt((<HTMLInputElement> document.getElementById("width")).value);
        let tableHeight = parseInt((<HTMLInputElement> document.getElementById("height")).value);
        
        let path = testPathfinding(tableWidth,tableHeight,eventX,eventY,targetX,targetY,blocks);

        // Disable all input fields
        (<HTMLInputElement> document.getElementById("eventX")).disabled=true;
        (<HTMLInputElement> document.getElementById("eventY")).disabled=true;
        (<HTMLInputElement> document.getElementById("targetX")).disabled=true;
        (<HTMLInputElement> document.getElementById("targetY")).disabled=true;
        (<HTMLInputElement> document.getElementById("width")).disabled=true;
        (<HTMLInputElement> document.getElementById("height")).disabled=true;
        (<HTMLInputElement> document.getElementById("find")).disabled=true;
        (<HTMLInputElement> document.getElementById("stop")).disabled=false;
        stopMovement = false;
        
        // Recursive function to simulate event movement along the path towards Target
        function moveEvent(path: IPathfinderTestResult[], step: number) {
            if(step < path.length && !stopMovement) {
                // Move event by one step
                (<HTMLInputElement> document.getElementById("eventX")).value = path[step].cell.i + "";
                (<HTMLInputElement> document.getElementById("eventY")).value = path[step].cell.j + "";
                
                drawMap();
                setTimeout(function() {
                    moveEvent(path, step + 1);
                },100);
            } else {
                // End of the path!
                // Enable all input fields
                (<HTMLInputElement> document.getElementById("eventX")).disabled=false;
                (<HTMLInputElement> document.getElementById("eventY")).disabled=false;
                (<HTMLInputElement> document.getElementById("targetX")).disabled=false;
                (<HTMLInputElement> document.getElementById("targetY")).disabled=false;
                (<HTMLInputElement> document.getElementById("width")).disabled=false;
                (<HTMLInputElement> document.getElementById("height")).disabled=false;
                (<HTMLInputElement> document.getElementById("find")).disabled=false;
                (<HTMLInputElement> document.getElementById("stop")).disabled=true;
            }
        }
        
        document.getElementById("log")!.innerHTML = "";
        moveEvent(path, 0);	
    };

    export function stop(){
        stopMovement=true;
    };

    export function toggleBlock(gid: number) {
        if(blocks[gid] === BLOCK) {
            blocks[gid] = NO_BLOCK;
        } else {
            blocks[gid] = BLOCK;
        }
        drawMap();
    };
}