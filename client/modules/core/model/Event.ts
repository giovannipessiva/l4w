/// <reference path="Commons.ts" />

// Event core model (only persistent data)
interface IEventData extends IActorData {
    currentState: number; // Index of current valid state
    states: IEventState[]; //Array of states of this Event
    memory: Map<string,string>; // Map of generic key -> value pairs
}

// Event extended model (include transient data)
interface IEvent extends IEventData, IActor {

}

interface IEventState {
    activationAction: ActivationActionEnum,
    activationCondition: (event: IEvent) => boolean;
    script: string,
    action: string
}