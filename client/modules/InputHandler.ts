/*
Input handling (keysboard, mouse, touch, visibility events)

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

class Keys {
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

interface IKeyCallback { (key: number) : void };
interface IEventCallback { () : void };

function initInputHandler(
    canvas : HTMLCanvasElement,
    inputCallbacks : {Keys : IKeyCallback},
    resetCallback : IEventCallback,
    pauseCallback : IEventCallback,
    unpauseCallback : IEventCallback) {
	
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
    
	document.addEventListener("visibilitychange", function onVisibilityChange(){
		if(document.hidden){
            pauseCallback();
            flagPause = true;
		}else{
            unpauseCallback();
            flagPause = false;
		} 
	}, false);
	
//	S.c2.addEventListener("mousemove", function(evt){
//		var rect = S.c2.getBoundingClientRect();
//        mouse_x = evt.clientX - rect.left;
//        mouse_y = evt.clientY - rect.top;
//    }, false);
//	S.c2.addEventListener("click", function(ect){
//		usingMouse = true;
//		var mouse_i = Math.floor((mouse_x - S.abs_x) / CELL_W);
//		var mouse_j = Math.floor((mouse_y - S.abs_y) / CELL_H);
//		clickOrTouch(mouse_i,mouse_j);
//	}, false);
//
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
//	
//	
//	
//	function clickOrTouch(i,j){
//		var eventSelected = false;
//		for(var id in E){
//			var active_page = E[id][ACTIVE];
//			var e = E[id][active_page];
//			
//			var e_i = Math.floor(e.current_x/CELL_W);
//			var e_j = Math.floor(e.current_y/CELL_H);
//			
//			if(e_i==i && e_j==j){
//				eventSelected = true;
//				if(e == H){
//					//TODO apri l'inventario
//					console.log("open inventory");
//				
//				}else{
//					//TODO valuta evento
//					H.moveTo(i,j,true,function(){});
//				}
//			}
//		}
//		if(eventSelected == false){
//			//Move hero to this coordinates
//			H.moveTo(i,j,true,function(){});
//		}
//	}
	
	
};
