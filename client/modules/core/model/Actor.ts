/// <reference path="Commons.ts" />

//Actor core model (only persistent data)
interface IActorData {
    id: number; //Incremental id - unique across all Actors
    name: string; //String assigned to name field in editor
    i: number; //x coordinate in cells
    j: number; //y coordinate in cells
    visible?: boolean; //Whether Actor should be rendered
    opacity?: number; //Actor rendering opacity
    rotation?: number; //Angle in degrees clockwise
    speed?: number; //Default speed (cells/seconds)
    onTop?: boolean; //True if this Actor should be rendered on top
    charaset?: string; //Name of the charaset (alternative to GID)
    width?: number; //Width in pixels. Ignored if using a gid.
    height?: number; //Height in pixels. Ignored if using a gid.
    gid?: number; //GID from a Tilemap (alternative to charaset)
}

//Actor extended model (include transient data)
interface IActor extends IActorData {
    position?: ICoordinates; //exact coordinate in pixels
    mSpeed?: number; //Speed (as pixels/milliseconds)
    movementStartTime?: number; //ms since last step started
    target?: ICoordinates; //Current destination in pixels
    newTarget?: ICoordinates; //New destination in pixels
    direction?: DirectionEnum; //Current direction
}