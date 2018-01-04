/// <reference path="script/test/Script1.ts" />

namespace Script {

    export function launchAction(event: IEvent, scene: DynamicScene, hero: IEvent, state: number, parameters?): boolean {
        let script = event.script;
        let scriptClass = new Script[script](event, hero, scene);
        if (Utils.isEmpty(scriptClass)) {
            console.error("Script \"" + script + "\" not found (event: " + event.name + ")");
            return false;
        }
        let action = event.states[state].action;
        if (!(action in scriptClass)) {
            console.error("Action \"" + action + "\" not found in script \"" + script + "\" (event: " + event.name + ")");
            return false;
        }
        // On click action, the hero should face the event
        if (event.states[state].trigger === ActionTriggerEnum.CLICK) {
            let heroDirection = Utils.getDirection(event, hero);
            let eventDirection = Utils.getOpposedDirections(heroDirection);
            EventManager.getState(hero).direction = heroDirection;
            EventManager.getState(event).direction = eventDirection;

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
    };
}