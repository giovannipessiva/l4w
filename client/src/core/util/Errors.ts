import { AbstractGrid } from "../AbstractGrid"

/**
 * Module for error handling methods
 */
export namespace Errors {
    
    //TODO Retrieve context by yourself?
    export function showError(context: CanvasRenderingContext2D | null, grid?: AbstractGrid) {
        if(context !== null) {
            if(grid !== undefined) {
                grid.clear(context);
            }
            context.fillStyle = "#000000";
            context.font = "bold 20px Arial";
            context.fillText("An error occurred :(", 60, 60);
        } else {
            console.error("Context is null");
        }
    };
    
}