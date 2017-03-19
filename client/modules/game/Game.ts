/// <reference path="../core/model/Commons.ts" />
/// <reference path="../core/util/Input.ts" />
/// <reference path="../core/util/Compatibility.ts" />
/// <reference path="../core/util/Workers.ts" />
/// <reference path="../core/model/Save.ts" />
/// <reference path="../core/AbstractGrid.ts" />
/// <reference path="../core/AbstractScene.ts" />
/// <reference path="DynamicScene.ts" />
/// <reference path="DynamicGrid.ts" />

/**
 * Module for initializing and launching a game
 */
namespace Game {

    var scene: DynamicScene;
    
    export function start(canvas: HTMLCanvasElement) {
        Compatibility.check();
        Workers.registerServiceWorker();
        
        new DynamicGrid(canvas, function(grid: DynamicGrid) {
            scene = new DynamicScene(grid, canvas);
            initInput(canvas, scene, grid);
            loadSave(canvas, function(save: ISave) {
                scene.loadSave(save, function(success: boolean) {
                    scene.start(canvas);
                    scene.moveFocus();
                });

            });
        });
    }

    export function load() {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas1");
        loadSave(canvas, function(save: ISave) {
            scene.loadSave(save, function(success: boolean) {
                scene.moveFocus();
                if(success) {
                    console.log("Save loaded successfully");
                } else {
                    console.log("Save not found");    
                }
            });

        });
    }

    export function save() {
        //TODO l'id del salvataggio va selezionato dal giocatore
        let saveId: string = "0";
        let currentState: ISave = scene.getSave();
        if(!Utils.isEmpty(currentState)) {
            saveId = currentState.id + "";
        }
        Resource.save(saveId, JSON.stringify(currentState), Resource.TypeEnum.SAVE, function(success: boolean) {
            if (success) {
                console.log("Save saved successfully");
            }
        });
    }

    function loadSave(canvas: HTMLCanvasElement, callback: (save: ISave) => void) {
        //TODO l'id del salvataggio va selezionato dal giocatore
        let saveId: string = "0";
        let currentState: ISave = scene.getSave();
        if(!Utils.isEmpty(currentState)) {
            saveId = currentState.id + "";
        }
        Resource.load(saveId, Resource.TypeEnum.SAVE, function(resourceText: any) {
            if (Utils.isEmpty(resourceText)) {
                callback(null);
            } else {
                try {
                    let obj: Object = JSON.parse(<string>resourceText);  
                    let save: ISave = <ISave>obj;
                    callback(save); 
                } catch (exception) {
                    if (exception.name === "SyntaxError") {
                        console.error("Error while parsing save");
                    } else if (exception.name === "TypeError") {
                        console.error("Error while reading save");
                    } else {
                        console.error(exception);
                    }
                    Errors.showError(canvas.getContext("2d"));
                    callback(null);
                }
            }
        });
    }

    function initInput(canvas: HTMLCanvasElement, scene: DynamicScene, grid: DynamicGrid) {
        var inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();
        inputCallbackMap[Input.Keys.W] = function(e) {
            scene.moveFocus(DirectionEnum.UP);
        };
        inputCallbackMap[Input.Keys.S] = function(e) {
            scene.moveFocus(DirectionEnum.DOWN);
        };
        inputCallbackMap[Input.Keys.A] = function(e) {
            scene.moveFocus(DirectionEnum.LEFT);
        };
        inputCallbackMap[Input.Keys.D] = function(e) {
            scene.moveFocus(DirectionEnum.RIGHT);
        };

        inputCallbackMap[Input.Keys.F1] = function(e) {
            scene.toggleFPS();
        };
        inputCallbackMap[Input.Keys.F2] = function(e) {
            scene.toggleGridMode();
        };
        inputCallbackMap[Input.Keys.F3] = function(e) {
            scene.toggleCellNumbering();
        };
        inputCallbackMap[Input.Keys.F4] = function(e) {
            scene.toggleFocus();
        };
        inputCallbackMap[Input.Keys.F5] = function(e: KeyboardEvent) {
            scene.toggleBlocks();
            e.preventDefault(); // Avoid page reloading
        };
        var actionCallback = function(x: number, y: number) {
            //TODO distingui da celle evento e celle vuote dove spostarsi
            moveHero(x,y);
        };

        Input.init(
            canvas,
            grid,
            inputCallbackMap,
            function() { },
            actionCallback,
            function() { },
            function() { },
            function(x, y) {
                //Ongoing
                scene.updatePointer(x, y);
            },
            function(x, y) {
                //Hover
                scene.updatePointer(x, y);
            },
            function() {
                console.log("pause");
                scene.togglePause(true);
            },
            function() {
                console.log("unpause");
                scene.togglePause(false);
            },
            function() {
                grid.refresh();
                scene.changeScale(canvas);
                scene.resetTranslation();
            },
            function() { console.log("rightClick"); },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
        );
        
        function moveHero(i: number, j: number) {
            scene.startMovement(i, j);
        };
    };
}