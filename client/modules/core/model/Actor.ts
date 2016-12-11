interface IActor {
    id: number; //Incremental id - unique across all Actors
    name: string; //String assigned to name field in editor
    i: number; //x coordinate in cells
    j: number; //y coordinate in cells
    x?: number; //exact x coordinate in pixels
    y?: number; //exact y coordinate in pixels
    visible?: boolean; //Whether Actor should be rendered
    opacity?: number; //Actor rendering opacity
    rotation?: number; //Angle in degrees clockwise
    onTop?: boolean; //True if this Actor should be rendered on top
    charaset?: string; //Name of the charaset (alternative to GID)
    width?: number; //Width in pixels. Ignored if using a gid.
    height?: number; //Height in pixels. Ignored if using a gid.
    gid?: number; //GID from a Tilemap (alternative to charaset)
}