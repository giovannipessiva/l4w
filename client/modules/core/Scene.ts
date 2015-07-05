/// <reference path="Actor.ts" />
/// <reference path="World.ts" />

/**
 * Module to handle rendering operations
 */
module Scene {
    
    interface Point {
        x: number;
        y: number; 
    };
    
    var FPS = 20;
    var refreshInterval = 1000 / FPS;
    
    var paused = false;
    
    var hero: Actor.Event;
    var events: [ Actor.Event ];
    var map: World.Map;

    var focus: Point;
    var pointer: Point;
    
    var renderingOtions = new World.Options();
    
    export function start(canvas: HTMLCanvasElement) {
        
        mainGameLoop();
        
        var nextAnimationFrame = window.requestAnimationFrame ||
            //window.mozRequestAnimationFrame ||
            //window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback, canvas) {
                window.setTimeout(mainGameLoop, refreshInterval);
            }; 

        function mainGameLoop(){
            nextAnimationFrame(mainGameLoop, canvas);
            if(paused) {
                return;
            }
            
            var context: CanvasRenderingContext2D = canvas.getContext("2d");
            
            var time = Time.getTime();
            hero.update(events,map,time);
            for(var event in events){
                event.update(events,map,time);
            }
        
            translate();
            
            var layers = map.getLayers();
            var minRow = Display.getMinY(focus.y);
            var maxRow = Display.getMaxY(focus.y, map.columns);
            for(var y=minRow; y<=maxRow; y++){
                
                for(var layer=0; layer<layers; layer++) {
                   renderRow(y,layer); 
                }

                renderEventRow(y);
            }
            
            renderPointer(context);
        }
         
    }
    
    function renderRow(row: number, layer: number) {
        
    }
    
    function renderEventRow(row: number) {
        
    }
    
    function renderPointer(context: CanvasRenderingContext2D) {
        context.save();
        context.beginPath();
        context.fillStyle='yellow';
        context.arc(Display.getPointerX(pointer.x),Display.getPointerY(pointer.y), 12, 0, Math.PI*2, true);
        context.closePath();
        context.globalAlpha = 0.4;
        context.fill();
        context.restore();
    }
    
    function translate() {
       //TODO calculate display offset by focus coordinates
    }
    
    export function toggleGrid(enable?: boolean) {
        if(enable != null) {
            renderingOtions.showGrid = enable; 
        } else {
           renderingOtions.showGrid = !renderingOtions.showGrid; 
        }
        
    }
    
    export function toggleFPS(enable?: boolean) {
        if(enable != null) {
            renderingOtions.showFPS = enable; 
        } else {
           renderingOtions.showFPS = !renderingOtions.showFPS; 
        }
        
    }
    
    export function toggleCellNumbering(enable?: boolean) {
        if(enable != null) {
            renderingOtions.showCellNumbers = enable; 
        } else {
           renderingOtions.showCellNumbers = !renderingOtions.showCellNumbers; 
        }
        
    }
    
    export function togglePause(pause?: boolean) {
        if(pause != null) {
           paused = pause;
        } else {
            paused = !paused;
        }
    }
    
    export function updatePointer(x:number, y:number) {
        pointer.x=x;
        pointer.y=y; 
    }
}