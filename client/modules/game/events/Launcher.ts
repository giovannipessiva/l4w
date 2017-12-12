/// <reference path="script/test/Script1.ts" />

namespace Script {

    export function launchAction(event: IEvent, grid: AbstractGrid, hero: IActor, state: number, parameters?): boolean {
        let result: boolean = launch(event, grid, event.script, event.states[state].action, parameters);
        // On click action, the hero should face the event
        if (result && event.states[state].trigger === ActionTriggerEnum.CLICK) {
            hero.direction = Utils.getDirection(event,hero);
            event.direction = Utils.getOpposedDirections(hero.direction);
        }
        return result;
    }

    function launch(event: IEvent, grid: AbstractGrid, script: string, action: string, parameters?): boolean {
        let scriptClass = new Script[script](event, grid);
        if (scriptClass === undefined) {
            console.error("Script \"" + script + "\" not found (event: " + event + ")");
            return false;
        }
        if (!(action in scriptClass)) {
            console.error("Action \"" + action + "\" not found in Script \"" + scriptClass + "\" (event: " + event + ")");
            return false;
        }
        if (parameters === undefined) {
            return scriptClass[action]();
        } else {
            return scriptClass[action](parameters);
        }
    };
}