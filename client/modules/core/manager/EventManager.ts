/// <reference path="../util/Commons.ts" />
/// <reference path="../util/Utils.ts" />
/// <reference path="../model/Event.ts" />
/// <reference path="../manager/MapManager.ts" />

/**
 * Module to handle evetns
 */
namespace EventManager {
    
    export function update(event: IEvent, time: number, hero: IActor, actionCell: ICell) {
        if(!Utils.isEmpty(event.states) && (Utils.isEmpty(event.currentState) || event.states.length > event.currentState + 1)) {
            // Check if there are activable states (where the states index > event.currentState)
            // The state with higher index wins, and get activated
            let activableState: number;
            for(let s = event.states.length - 1; s > event.currentState; s--) {
                
                // Check activation action and condition
                if(event.states[s].activationCondition(event)) {
                    let isActivable = false;

                    switch(event.states[s].activationAction) {
                        case ActivationActionEnum.CLICK:
                            // If action is not on the event, break;
                            if(actionCell.i !== event.i || actionCell.j !== event.j) {
                                break;
                            }
                        case ActivationActionEnum.TOUCH:
                            let i_diff = Math.abs(event.i - hero.i);
                            let j_diff = Math.abs(event.j - hero.j);
                            isActivable = (i_diff === 0 && j_diff === 1) || (i_diff === 1 && j_diff === 0);                
                            break;
                        case ActivationActionEnum.OVER:
                             isActivable = (event.i === hero.i && event.j === hero.j);                     
                            break;
                        case ActivationActionEnum.AUTO:
                            isActivable = true;
                            break;
                        default:
                            console.error("Unexpected case");
                    }
                    if(isActivable) {
                        activableState = s;
                        break;
                    }
                }
            }
            if(Utils.isEmpty(activableState)) {
                return;
            }
            //TODO activare the state 
            Script.launchAction(event, hero, activableState);
        }
    }
}