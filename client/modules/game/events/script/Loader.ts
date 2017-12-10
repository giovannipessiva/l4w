namespace Script {

    export function launchAction(event: IEvent, hero: IActor, state: number, parameters?): boolean {
        let result = launch(event, event.states[state].script, event.states[state].action, parameters);
        event.currentState = state;
        // On click action, turn to the hero
        if (result && event.states[state].activationAction === ActivationActionEnum.CLICK) {
            event.direction = Utils.getOpposedDirections(hero.direction);
        }
        return result;
    }

    function launch(event: IEvent, script: string, action: string, parameters?): boolean {
        let scriptClass = new Script[script](event);
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