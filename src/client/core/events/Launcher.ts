import { IEvent } from "../../../common/model/Event"
import { ActionTriggerEnum } from "../../../common/model/Commons"
import { ClientUtils } from "../util/Utils"
import { EventManager } from "../manager/EventManager"
import { DynamicScene } from "../../game/DynamicScene"
import * as Script from "../events/script/ScriptsRoot"
import { Utils } from "../../../common/Utils"
import { DialogManager } from "../manager/DialogManager"
import { emptyFz } from "../util/Commons"

export namespace Launcher {

    export function launchAction(event: IEvent, scene: DynamicScene, hero: IEvent, state: number, parameters?: any): boolean {
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

        // Try yo launch the action for the script of this event
        {
            let script = event.script;
            if(Utils.isEmpty(script)) {
                // No script associated to the event
            } else {
                let scriptClass = new Script[script](event, hero, scene);
                if (Utils.isEmpty(scriptClass)) {
                    console.error("Script \"" + script + "\" not found (event: " + event.name + ")");
                    return false;
                }
                let action = eventState.action;
                if(Utils.isEmpty(action)) {
                    // No action to perform
                } else if (!(action! in scriptClass)) {
                    console.error("Action \"" + action + "\" not found in script \"" + script + "\" (event: " + event.name + ")");
                } else {
                    try {
                        if (Utils.isEmpty(parameters)) {
                            return scriptClass[action]();
                        } else {
                            return scriptClass[action](parameters);
                        }
                    } catch(e) {
                        console.error(e);
                    }
                }
            }
        }

        // Try to start the dialog of this event
        {
            let dialog = eventState.dialog;
            if(dialog !== undefined) {
                DialogManager.showComplexDialog(scene, hero, event.name, dialog, scene.save.config, emptyFz);
            }
        }        
        return false;
    };
}