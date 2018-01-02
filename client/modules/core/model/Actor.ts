/// <reference path="Commons.ts" />

//Actor core model (only persistent data)
interface IActorData extends ICell {
    name: string; //String assigned to name field in editor
    visible?: boolean; //Whether Actor should be rendered
    opacity?: number; //Actor rendering opacity
    rotation?: RotationEnum; //Define Actor rotation //TODO render rotation
    speed?: ScaleEnum; //Movement speed
    frequency?: ScaleEnum; //Animation change speed
    onTop?: number; //Integer > 0 if this Actor should be rendered on top
    block?: boolean; // False if Actor does not block movement (you can walk through it)
    charaset?: string; //Name of the charaset (alternative to GID)
    gid?: number; //GID from a Tilemap (alternative to charaset)
}

//Actor extended model (include transient data)
interface IActor extends IActorData {
    position?: IPoint; //exact coordinate in pixels
    mSpeed?: number; //Speed (as pixels/milliseconds)
    frequencyVal?: number; //Animation change speed (frame/milliseconds)
    movementStartTime?: number; //ms since last step started
    movementDirection?: DirectionEnum; //Direction of current step
    target?: IPoint; //Current destination in pixels
    newTarget?: IPoint; //New destination in pixels
    direction?: DirectionEnum; //Current direction
    animationStartTime?: number; //ms since last animation change
    path?: DirectionEnum[]; //Path computed for current target
}