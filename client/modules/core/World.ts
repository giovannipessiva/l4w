/**
 * Module to handle game map
 */
module World {

    export class Map {

        rows: number;
        columns: number;
        
        private layers: MapLayer[];

        constructor() {
            //TODO
            this.rows=30;
            this.columns=30;
            this.layers = [];
        }
        
        render(events: Event, xFocus: number, yFocus: number) {
            for (var layer in this.layers) {
                layer.render(events, xFocus, yFocus);
            }
        }
        
        getLayers() {
           return this.layers.length; 
        }

    };

    class MapLayer {

        render(events: Event, xFocus: number, yFocus: number) {
            //TODO
        }

    }
    
    export class Options {
        showGrid: boolean = false;
        showFPS: boolean = false;
        showCellNumbers: boolean = false;
        
        fps: number = 0;
    }

}