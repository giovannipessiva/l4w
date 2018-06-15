/**
 * Module for error handling methods
 */
namespace Errors {
    
    //TODO fargli recuperare da solo il contesto??
    export function showError(context: CanvasRenderingContext2D, grid: AbstractGrid) {
        if(!Utils.isEmpty(context) && !Utils.isEmpty(grid)) {
            grid.clear(context);
        }
        context.fillStyle = "#000000";
        context.font = "bold 20px Arial";
        context.fillText("An error occurred :(", 60, 60);
    };
    
}