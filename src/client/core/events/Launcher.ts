import { IEvent } from "../../../common/model/Event"
import { ActionTriggerEnum } from "../../../common/model/Commons"
import { ClientUtils } from "../util/Utils"
import { EventManager } from "../manager/EventManager"
import { DynamicScene } from "../../game/DynamicScene"
import * as Script from "../events/script/ScriptsRoot"
import { Utils } from "../../../common/Utils"

export namespace Launcher {

    export function launchAction(event: IEvent, scene: DynamicScene, hero: IEvent, state: number, parameters?: any): boolean {
        let script = event.script;
        let scriptClass = new Script[script](event, hero, scene);
        if (Utils.isEmpty(scriptClass)) {
            console.error("Script \"" + script + "\" not found (event: " + event.name + ")");
            return false;
        }
        let action = event.states[state].action;
        if(action === undefined) {
            // No action to perform
            return false;
        }
        if (!(action in scriptClass)) {
            console.error("Action \"" + action + "\" not found in script \"" + script + "\" (event: " + event.name + ")");
            return false;
        }
        // On click action, the hero should face the event
        if (event.states[state].trigger === ActionTriggerEnum.CLICK) {
            let heroDirection = ClientUtils.getDirection(event, hero);
            let state = EventManager.getState(hero);
            if(state !== undefined) {
                state.direction = heroDirection;
            } else {
                console.error("Hero state undefined");
            }
            let eventDirection = ClientUtils.getOpposedDirections(heroDirection);
            state = EventManager.getState(event);
            if(state !== undefined) {
                state.direction = eventDirection;
            } else {
                console.error("Event state undefined:" + event);
            }
        }
        try {
            if (Utils.isEmpty(parameters)) {
                return scriptClass[action]();
            } else {
                return scriptClass[action](parameters);
            }
        } catch(e) {
            console.error(e);
        }
        return false;
    };
}