import { IEvent } from "../../../common/model/Event"
import { EVENT_STATE_VAR } from "../../../common/Constants";

export namespace Condition {

    export function always(event: IEvent): boolean {
        return true;
    }

    export function isStateVar0(event: IEvent): boolean {
        return chechStateVar(event, 0);
    }
    
    export function isStateVar1(event: IEvent): boolean {
        return chechStateVar(event, 1);
    }
    
    export function isStateVar2(event: IEvent): boolean {
        return chechStateVar(event, 2);
    }
    
    export function isStateVar3(event: IEvent): boolean {
        return chechStateVar(event, 3);
    }
    
    export function isStateVar4(event: IEvent): boolean {
        return chechStateVar(event, 4);
    }
    
    export function isStateVar5(event: IEvent): boolean {
        return chechStateVar(event, 5);
    }
    
    export function isStateVar6(event: IEvent): boolean {
        return chechStateVar(event, 6);
    }
    
    export function isStateVar7(event: IEvent): boolean {
        return chechStateVar(event, 7);
    }
    
    export function isStateVar8(event: IEvent): boolean {
        return chechStateVar(event, 8);
    }
    
    export function isStateVar9(event: IEvent): boolean {
        return chechStateVar(event, 9);
    }

    function chechStateVar(event: IEvent, val: number): boolean {
        let stateVar: string = event.memory[EVENT_STATE_VAR];
        let stateVarNum: number = Number.parseInt(stateVar);
        if (!Number.isNaN(stateVarNum)) {
            return stateVarNum === val;
        }
        return false;
    }
}