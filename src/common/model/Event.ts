import { ICell, IPoint, DirectionEnum, PathfinderEnum, ICellCallback } from "../Commons"
import { ICharacter } from "./Character"

/**
 * IEvent is used to define an interactive cell on the map (mostly NPC & interactive objects) 
 */
export interface IEvent extends ICell {
    // Persistent data
    id: number; // ID of this event (unique in its map)
    name: string; // String assigned to name field in editor
    states: IEventState[]; // Array of states of this Event
    script: string; // Script Class which contains the methods used by this event
    memory: {}; // Map of generic key -> value pairs
    sentientBeingData?: ISentientBeingData; // Additional data available for events which represent a sentient being

    // Transient data
    currentState: number; // Index of current valid state
    position?: IPoint; // Exact coordinate in pixels (derived from event.i, event.j)
    movementStartTime?: number; // ms since last step started
    movementDirection?: DirectionEnum; // Direction of current step
    target?: ICell; // Current destination coordinates
    onTargetReached?: ICellCallback; // Function to call when target will be reached
    newTarget?: ICell; // New destination coordinates
    newOnTargetReached?: ICellCallback; // Function to call when newTarget will be reached
    path?: DirectionEnum[]; // Path computed for current target
}

export interface IEventState extends ICharacter {
    condition: string; // Name of function that returns true if this state can be active (see Conditions.ts)
    trigger?: number; // Type of interaction which will start the action
    action?: string; // Method of the script that will be invoked by the trigger
    dialog?: number; // Id of the dialog for this state
    movement?: IMovement; // Details of a predetermined movement associated to this event state
}

export interface ISentientBeingData {
    faceset?: string;
    stats?: any; //TODO (characted stats, skills, temporary status)
    inventory?: any; //TODO (objects, clothes, weapons, money)
}

export interface IMovement {
    strategy: "target" | "event" | "random"; // Target: will reach a fixed point. Event: will follow an event.

    // strategy="target"
    target?: ICell; // Target fixed coordinated to follow
    
    // strategy="event"
    eventId?: number; // ID of the event to follow
    pathfinder?: PathfinderEnum; // Pathfinding algo

    // strategy="random"
    pause?: number; // ms of pauses between steps
}