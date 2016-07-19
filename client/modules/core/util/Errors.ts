/**
 * Module for error handling methods
 */
namespace Errors {
    
    export function showError(context: CanvasRenderingContext2D) {
        if(!Utils.isEmpty(this.context) && !Utils.isEmpty(this.grid)) {
            this.grid.clear(this.context);
        }
        context.fillStyle = "#000000";
        context.font = "bold 40px Arial";
        context.fillText("An error occurred :(", 160, 260);
    };
    
}