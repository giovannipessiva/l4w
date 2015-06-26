/*
Input handling (keyboard, mouse, touch, visibility events)

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
    
    interface IPositionCallback { (x: number, y:number) : void };
    interface IKeyCallback { (key: number) : void };
    interface IEventCallback { () : void };
    
    export function handleInput(
        canvas: HTMLCanvasElement,
        actionCallback: IPositionCallback,
        swipeCallback: IPositionCallback,
        hoverCallback: IPositionCallback,
        inputCallbacks: {Keys : IKeyCallback},
        resetCallback: IEventCallback,
        pauseCallback: IEventCallback,
        unpauseCallback: IEventCallback) {
    	
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
        
        canvas.addEventListener("click", function(evt){
          var rect = canvas.getBoundingClientRect();
          var mouse_x = evt.clientX - rect.left;
          var mouse_y = evt.clientY - rect.top;
          action(mouse_x, mouse_y);
        }, false);
    	canvas.addEventListener("mousemove", function(evt){
          var rect = canvas.getBoundingClientRect();
          var mouse_x = evt.clientX - rect.left;
          var mouse_y = evt.clientY - rect.top;
          hover(mouse_x, mouse_y);
        }, false);
        //contextmenu -> tasto destro del mouse
        //dblclick -> doppio click
        //mousedown
        //mouseup
        
        //wheel
        
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
        //keypress, input: da testare
        
        //touchstart
        //touchcancel
        //touchend
        //touchmove
        
    	document.addEventListener("visibilitychange", function onVisibilityChange(){
    		if(document.hidden){
                pauseCallback();
                flagPause = true;
    		}else{
                unpauseCallback();
                flagPause = false;
    		} 
    	}, false);
        
        //orientationchange
        //resize
    	
    //	S.c2.addEventListener("touchstart", function(evt){
    //		usingMouse = false;
    //		evt.preventDefault();
    //		var rect = S.c2.getBoundingClientRect();
    //		touch_x = event.targetTouches[0].pageX - rect.left;
    //        touch_y = event.targetTouches[0].pageY - rect.top;
    //		var touch_i = Math.floor((touch_x - S.abs_x) / CELL_W);
    //		var touch_j = Math.floor((touch_y - S.abs_y) / CELL_H);
    //		clickOrTouch(touch_i,touch_j);
    //    }, false);
    //	S.c2.addEventListener("touchmove", function(evt){
    //		evt.preventDefault();
    //		var rect = S.c2.getBoundingClientRect();
    //		touch_x = event.targetTouches[0].pageX - rect.left;
    //        touch_y = event.targetTouches[0].pageY - rect.top;
    //		var touch_i = Math.floor((touch_x - S.abs_x) / CELL_W);
    //		var touch_j = Math.floor((touch_y - S.abs_y) / CELL_H);
    //		clickOrTouch(touch_i,touch_j);
    //	}, false);
        
    	function action(x,y) {
            actionCallback(x,y);  
        };
        function hover(x,y) {
            hoverCallback(x,y);
        };
        function swipe(x,y) {
            swipeCallback(x,y);
        };
    };
}
