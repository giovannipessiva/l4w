/// <reference path="script/test/Script1.ts" />

namespace Script {

    export function launchAction(event: IEvent, grid: AbstractGrid, hero: IActor, state: number, parameters?): boolean {
        let script = event.script;
        let scriptClass = new Script[script](event, hero, grid);
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
            hero.direction = Utils.getDirection(event,hero);
            event.direction = Utils.getOpposedDirections(hero.direction);
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