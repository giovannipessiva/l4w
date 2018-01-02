/// <reference path="Commons.ts" />

// Event core model (only persistent data)
interface IEventData extends IActorData {
    currentState?: number; // Index of current valid state
    states: IEventState[]; //Array of states of this Event
    memory: {}; // Map of generic key -> value pairs
    script: string; // Script Class which contains the methods used by this event
}

// Event extended model (include transient data)
interface IEvent extends IEventData, IActor {

}

//TODO IEventState should extends IACtorData, while IEvent should not.
interface IEventState {
    condition: string; // Name of function that returns true if this state can be active (see Activators.ts)
    trigger: number; // Type of interaction which will start the action
    action: string; // Method of the script that will be invoked by the trigger
}