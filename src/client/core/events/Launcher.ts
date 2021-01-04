import { IEvent } from "../../../common/model/Event"
import { ActionTriggerEnum } from "../../../common/Commons"
import { ClientUtils } from "../util/ClientUtils"
import { EventManager } from "../manager/EventManager"
import * as ScriptsRegister from "./script/ScriptsRegister"
import { Utils } from "../../../common/Utils"
import { DialogManager } from "../manager/DialogManager"
import { emptyFz, IDialogScriptLauncher, IEventScriptLauncher } from "../util/Commons"
import { IDialogEdge } from "../../../common/model/Dialog"
import { DynamicScene } from "../../game/DynamicScene"

export let launchEventAction: IEventScriptLauncher = function(event: IEvent, scene: any, hero: IEvent, state: number, parameters?: any): void {
    let eventState = event.states[state];
    // On click  the hero should face the event
    if (eventState.trigger === ActionTriggerEnum.CLICK) {
        let heroDirection = ClientUtils.getDirection(event, hero);
        let heroState = EventManager.getState(hero);
        if(heroState !== undefined) {
            heroState.direction = heroDirection;
        } else {
            console.error("Hero state undefined");
        }
        let eventDirection = ClientUtils.getOpposedDirections(heroDirection);
        heroState = EventManager.getState(event);
        if(heroState !== undefined) {
            heroState.direction = eventDirection;
        } else {
            console.error("Event state undefined:" + event);
        }
    }

    // Try to launch the action for the script of this event
    let script = event.script;
    if(Utils.isEmpty(script)) {
        // No script associated to the event
    } else {
        let scriptClass = new ScriptsRegister[script](event, hero, scene);
        if (Utils.isEmpty(scriptClass)) {
            console.error("Script \"" + script + "\" not found (event: " + event.name + ")");
        }
        let action = eventState.action;
        if(Utils.isEmpty(action)) {
            // No action to perform
        } else if (!(action! in scriptClass)) {
            console.error("Action \"" + action + "\" not found in script \"" + script + "\" (event: " + event.name + ")");
        } else {
            try {
                if (Utils.isEmpty(parameters)) {
                    scriptClass[action]();
                } else {
                    scriptClass[action](parameters);
                }
            } catch(e) {
                console.error(e);
            }
        }
    }
    
    // Try to start the dialog of this event
    let dialog = eventState.dialog;
    if(dialog !== undefined) {
        DialogManager.showComplexDialog(event, scene, hero, dialog, scene.save.config, launchDialogAction, emptyFz);
    }
}

/**
 * Execute an action associated to an edge 
 */
export let launchDialogAction: IDialogScriptLauncher = function(event: IEvent, edge: IDialogEdge, scene: DynamicScene, hero: IEvent, parameter?: string): Promise<void> | void {
    let scriptClassName = edge.script;
    if(scriptClassName === undefined) {
        return;
    }
    let scriptClass = new ScriptsRegister[scriptClassName](event, hero, scene);
    if (Utils.isEmpty(scriptClass)) {
        console.error("Script \"" + scriptClassName + "\" not found (dialog edge: " + edge.id + ")");
        return;
    }
    let action = edge.action;
    if(action === undefined) {
        return;
    }
    if (!(action in scriptClass)) {
        console.error("Action \"" + action + "\" not found in script \"" + scriptClassName + "\" (dialog edge: " + edge.id + ")");
        return;
    }
    try {
        return scriptClass[action](parameter);
    } catch(e) {
        console.error(e);
    }
};