interface IActor {
    id: number; //Incremental id - unique across all objects
    name: string; //String assigned to name field in editor
    x: number; //x coordinate in pixels
    y: number; //y coordinate in pixels
    visible?: boolean; //Whether actor is shown
    opacity?: number; //Event opacity
    rotation?: number; //Angle in degrees clockwise
    width?: number; //Width in pixels. Ignored if using a gid.
    height?: number; //Height in pixels. Ignored if using a gid.
    gid?: number; //GID, only if object comes from a Tilemap
}