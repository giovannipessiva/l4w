interface IEvent {
    id: number; //Incremental id - unique across all objects
    width: number; //Width in pixels. Ignored if using a gid.
    height: number; //Height in pixels. Ignored if using a gid.
    name: string; //String assigned to name field in editor
    type: string; //String assigned to type field in editor
    visible: boolean; //Whether object is shown in editor.
    x: number; //x coordinate in pixels
    y: number; //y coordinate in pixels
    rotation?: number; //Angle in degrees clockwise
    gid: number; //GID, only if object comes from a Tilemap
}