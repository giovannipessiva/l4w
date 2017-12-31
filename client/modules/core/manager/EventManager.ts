/// <reference path="../util/Commons.ts" />
/// <reference path="../util/Utils.ts" />
/// <reference path="../model/Event.ts" />
/// <reference path="../manager/MapManager.ts" />
/// <reference path="../../game/events/Conditions.ts" />

/**
 * Module to handle events
 */
namespace EventManager {
    
    export function update(event: IEvent, grid: AbstractGrid, hero: IActor, actionCell: ICell) {
        if(!Utils.isEmpty(event.states)) {
            // Check if there are activable states (where the states index > event.currentState)
            // The state with higher index wins, and get activated
            if(Utils.isEmpty(event.currentState) || event.states.length > event.currentState + 1) { 
                for(let s = event.states.length - 1; s>=0 && (Utils.isEmpty(event.currentState) || s > event.currentState); s--) {
                    
                    // Check activation action and condition
                    if(isStateActivable(event, s)) {
                        event.currentState = s;
                        break;
                    }
                }
            }
            if(isActionTriggered(event, event.currentState, hero, actionCell)) {
                // Check if this trigger an action
                Script.launchAction(event, grid, hero, event.currentState);
            }
        }
    }
    
    function isStateActivable(event: IEvent, s: number): boolean {
        let condition = event.states[s].condition;
        if(!(condition in Condition)) {
            console.error("Condition not found: \"" + condition + "\", on event: " + event.name);
            return false;    
        }
        return Condition[condition](event);
    }
    
    function isActionTriggered(event: IEvent, s: number, hero: IActor, actionCell: ICell) {
        switch(event.states[s].trigger) {
            case ActionTriggerEnum.CLICK:
                // If action is not on the event, break;
                if(Utils.isEmpty(actionCell) || actionCell.i !== event.i || actionCell.j !== event.j) {
                    break;
                }
            case ActionTriggerEnum.TOUCH:
                let i_diff = Math.abs(event.i - hero.i);
                let j_diff = Math.abs(event.j - hero.j);
                return (i_diff === 0 && j_diff <= 1) || (i_diff <= 1 && j_diff === 0);
            case ActionTriggerEnum.OVER:
                return event.i === hero.i && event.j === hero.j;                     
            case ActionTriggerEnum.AUTO:
                return true;
            default:
                console.error("Unexpected case: " + event.states[s].trigger);
                return false;
        }
    }
    
    export function getNewEvent(): IEvent {
        let event: IEvent = {
            id: 0,
            name: "NPC",
            i: 0,
            j: 0,
            states: [],
            memory: new Map<string,string>(),
            script: "BaseScript"
        };
        return event;
    };
    
    export function getNewEventState(): IEventState {
        let eventState: IEventState = {
            condition: "always",
            trigger: ActionTriggerEnum.CLICK,
            action: "speak"
        };
        return eventState;
    };
    
    export function saveMem(event: IEvent, key: string, value: string): void {
        if(Utils.isEmpty(event.memory)) {
            event.memory = new Map<string,string>();
        }
        event.memory.set(key, value);    
    };
    
    export function loadMem(event: IEvent, key: string): string {
        if(Utils.isEmpty(event.memory)) {
            return undefined;
        }
        return event.memory.get(key);    
    };
        
    export function deleteMem(event: IEvent, key: string): void {
        if(!Utils.isEmpty(event.memory)) {
            event.memory.delete(key);
        }  
    };
}