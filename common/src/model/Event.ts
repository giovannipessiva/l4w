import { ICell, IPoint, DirectionEnum } from "./Commons"
import { ICharacter } from "./Character"

// Event core model (only persistent data)
export interface IEventData extends ICell {
    id: number; // ID of this event (unique in its map)
    name: string; // String assigned to name field in editor
    states: IEventState[]; // Array of states of this Event
    memory: {}; // Map of generic key -> value pairs
    script: string; // Script Class which contains the methods used by this event
}

// Event extended model (include transient data)
export interface IEvent extends IEventData  {
    currentState: number; // Index of current valid state
    position?: IPoint; // Exact coordinate in pixels (derived from event.i, event.j)
    movementStartTime?: number; // ms since last step started
    movementDirection?: DirectionEnum; // Direction of current step
    target?: IPoint; // Current destination in pixels
    newTarget?: IPoint; // New destination in pixels
    path?: DirectionEnum[]; // Path computed for current target
}

export interface IEventState extends ICharacter {
    condition: string; // Name of function that returns true if this state can be active (see Conditions.ts)
    trigger?: number; // Type of interaction which will start the action
    action?: string; // Method of the script that will be invoked by the trigger
}