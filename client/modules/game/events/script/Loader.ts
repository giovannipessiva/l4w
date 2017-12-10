namespace Script {

    export function launchAction(event: IEvent, state: number): boolean {
        let result = launch(event, event.states[state].script, event.states[state].action);
        event.currentState = state;
        return result;
    }
    
    function launch(event: IEvent, script: string, action: string, parameters?): boolean {
        let scriptClass = new Script[script](event);
        if(scriptClass === undefined) {
            console.error("Script \"" + script + "\" not found (event: " + event + ")");
            return false;  
        }
        if(!(action in scriptClass)) {
            console.error("Action \"" + action + "\" not found in Script \"" + scriptClass + "\" (event: " + event + ")");
            return false;  
        }
        if (parameters === undefined) {
            scriptClass[action]();
        } else {
            scriptClass[action](parameters);
        }
        return true;
    };
}