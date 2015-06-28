/// <reference path="Display.ts" />

/**
Module for input handling:
- keyboard
- mouse
- touch
- visibility change
- screen resize and rotation change

Usage example:

    var inputCallbackMap = {};
    inputCallbackMap[Keys.UP] = function(key){ alert("Up"); };
    inputCallbackMap[Keys.DOWN] = function(key){ alert("Down"); };
    inputCallbackMap[Keys.LEFT] = function(key){ alert("Left"); };
    inputCallbackMap[Keys.RIGHT] = function(key){ alert("Right"); };
    
    initInputHandler(
        inputCallbackMap,
        function() { console.log("Reset"); },
        function() { console.log("Paused"); },
        function() { console.log("Unpaused"); }
    );
*/
module Input {

    export class Keys {
        static UP : string = "38";
        static DOWN : string = "40";
        static LEFT : string = "37";
        static RIGHT : string = "39";
        static CTRL : string = "17";
        static ALT : string = "18";
        static ENTER : string = "13";
        static SPACE : string = "32";
        static CAPS : string = "20";
        static SHIFT : string = "16";
        static W : string = "87";
        static A : string = "65";
        static D : string = "68";
        static S : string = "83";
        static J : string = "74";
        static K : string = "75";
    }
    
    export interface IPositionCallback { (x: number, y:number) : void };
    export interface IEventCallback { () : void };
    
    export function init(
        canvas: HTMLCanvasElement,
        inputCallbacks: {[key: string] : IEventCallback},
        resetCallback: IEventCallback,
        actionCallback: IPositionCallback,
        startActionCallback: IPositionCallback,
        ongoingActionCallback: IPositionCallback,
        endActionCallback: IPositionCallback,
        hoverCallback: IPositionCallback,
        pauseCallback: IEventCallback,
        unpauseCallback: IEventCallback,
        resizeCallback: IEventCallback,
        rightClickCallback: IPositionCallback,
        doubleClickCallback: IPositionCallback,
        wheelCallback: IPositionCallback) {
    	
    	var actionOngoing : boolean = false;
        var lastKey : number;
        var flagPause : boolean = false;
        
        // Always use SPACE for pause
        inputCallbacks[Keys.SPACE] = function() {
           if(flagPause) {
               unpauseCallback();
               flagPause = false;
           } else {
               pauseCallback();
               flagPause = true;
           }
        };
        
        // Mouse events 
        canvas.addEventListener("click", function(e){
          var rect = canvas.getBoundingClientRect();
          var mouse_x = e.clientX - rect.left;
          var mouse_y = e.clientY - rect.top;
          actionCallback(mouse_x, mouse_y);
        });
    	canvas.addEventListener("mousemove", function(e){
          var rect = canvas.getBoundingClientRect();
          var mouse_x = e.clientX - rect.left;
          var mouse_y = e.clientY - rect.top;
          hoverCallback(mouse_x, mouse_y);
        });
        canvas.addEventListener("mousedown", function(e){
            canvas.removeEventListener("mouseover", hover);
            var position = mapEvent(e);
            startActionCallback(position.x,position.y);
            canvas.addEventListener("mouseover", ongoingAction);
        });
        canvas.addEventListener("mouseup", function(e){
            canvas.removeEventListener("mouseover", ongoingAction); 
            var position = mapEvent(e);
            endActionCallback(position.x,position.y);
            canvas.addEventListener("mouseover", hover);
        });
        function ongoingAction(e: PointerEvent){
            var position = mapEvent(e);
            ongoingActionCallback(position.x,position.y);
        }
        function hover(e: PointerEvent){
            console.log(e.which);
            var position = mapEvent(e);
            hoverCallback(position.x,position.y);
        }
        canvas.addEventListener("mouseover", hover);
        canvas.addEventListener("contextmenu", function(e){
            e.preventDefault();
            var position = mapEvent(e);
            rightClickCallback(position.x,position.y);
        });
        canvas.addEventListener("dblclick", function(e){
            e.preventDefault();
            var position = mapEvent(e);
            doubleClickCallback(position.x,position.y);
        });
        canvas.addEventListener("wheel", function(e){
            e.preventDefault();
            var position = mapEvent(e);
            wheelCallback(position.x,position.y);
        });
        
        // Touch events
        canvas.addEventListener("touchstart", function(e){
            e.preventDefault();
            var position = mapEvent(e);
            startActionCallback(position.x,position.y);
        });
        canvas.addEventListener("touchend", function(e){
            e.preventDefault();
            var position = mapEvent(e);
            endActionCallback(position.x,position.y);
        });
        canvas.addEventListener("touchcancel", function(e){
            var position = mapEvent(e);
            endActionCallback(position.x,position.y);
        });
        canvas.addEventListener("touchmove", function(e){
            var position = mapEvent(e);
            ongoingActionCallback(position.x,position.y);
        });
        
        // Keyboard events
        document.addEventListener("keydown", function(e) {
            var callback = inputCallbacks[String(e.keyCode)];
            if(callback !== undefined) {
                callback();
            }
            lastKey = e.keyCode;
        });
        document.addEventListener("keyup", function(e){
            if(e.keyCode === lastKey) {
                resetCallback();
            }
        });
        //keypress, input -> tasto premuto
        
        // Visibility events
    	document.addEventListener("visibilitychange", function(){
    		if(document.hidden){
                pauseCallback();
                flagPause = true;
    		}else{
                unpauseCallback();
                flagPause = false;
    		} 
    	});
        
        // Screen change events
        window.addEventListener('resize', function(event){
            pauseCallback();
            flagPause = true;
            resizeCallback();
        });
        document.addEventListener("orientationchange", function(){
            resizeCallback();
        });
 
        function mapEvent(e) {
            return Display.mapPosition(e.clientX,e.clientY);
        }
        
    };
}
