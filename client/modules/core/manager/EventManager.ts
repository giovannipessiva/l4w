/// <reference path="../util/Commons.ts" />
/// <reference path="../util/Utils.ts" />
/// <reference path="../model/Event.ts" />
/// <reference path="../manager/MapManager.ts" />
/// <reference path="../../game/events/Conditions.ts" />

/**
 * Module to handle evetns
 */
namespace EventManager {
    
    export function update(event: IEvent, grid: AbstractGrid, hero: IActor, actionCell: ICell) {
        if(!Utils.isEmpty(event.states) && (Utils.isEmpty(event.currentState) || event.states.length > event.currentState + 1)) {
            // Check if there are activable states (where the states index > event.currentState)
            // The state with higher index wins, and get activated
            let activableState: number;
            for(let s = event.states.length - 1; s>=0 && (Utils.isEmpty(event.currentState) || s > event.currentState); s--) {
                
                // Check activation action and condition
                let condition = event.states[s].condition;
                if(!(condition in Condition)) {
                    console.error("Activator not found: \"" + condition + "\", on event: " + event.name);
                    continue;    
                }
                if(Condition[condition](event)) {
                    let isActivable = false;

                    switch(event.states[s].trigger) {
                        case ActionTriggerEnum.CLICK:
                            // If action is not on the event, break;
                            if(Utils.isEmpty(actionCell) || actionCell.i !== event.i || actionCell.j !== event.j) {
                                break;
                            }
                        case ActionTriggerEnum.TOUCH:
                            let i_diff = Math.abs(event.i - hero.i);
                            let j_diff = Math.abs(event.j - hero.j);
                            isActivable = (i_diff === 0 && j_diff <= 1) || (i_diff <= 1 && j_diff === 0);                
                            break;
                        case ActionTriggerEnum.OVER:
                             isActivable = (event.i === hero.i && event.j === hero.j);                     
                            break;
                        case ActionTriggerEnum.AUTO:
                            isActivable = true;
                            break;
                        default:
                            console.error("Unexpected case: " + event.states[s].trigger);
                    }
                    if(isActivable) {
                        activableState = s;
                        break;
                    }
                }
            }
            if(!Utils.isEmpty(activableState)) {
                Script.launchAction(event, grid, hero, activableState);
            } else {
                //TODO check if old active state need to be activated    
            }
        }
    }
}