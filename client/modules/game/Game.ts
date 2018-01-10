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
module Game {

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
                    scene.moveFocusToDirection();
                });

            });
        });
    }

    export function load() {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas1");
        loadSave(canvas, function(save: ISave) {
            scene.loadSave(save, function(success: boolean) {
                scene.moveFocusToDirection();
                if (success) {
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
        let currentState: ISave = SaveManager.getSave(scene.map, scene.hero);
        if (!Utils.isEmpty(currentState)) {
            saveId = currentState.id + "";
        }
        Resource.save(saveId, JSON.stringify(currentState), Resource.TypeEnum.SAVE, function(success: boolean) {
            if (success) {
                console.log("Game saved successfully");
            }
        });
    }

    function loadSave(canvas: HTMLCanvasElement, callback: (save: ISave) => void) {
        //TODO l'id del salvataggio va selezionato dal giocatore
        let saveId: string = "0";
        Resource.load(saveId, Resource.TypeEnum.SAVE, function(resourceText: string) {
            if (Utils.isEmpty(resourceText)) {
                callback(null);
            } else {
                try {
                    let save: ISave = JSON.parse(resourceText);;
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
    
    function moveToDirection(scene: DynamicScene, direction: DirectionEnum) {
        let startingCell: ICell = scene.hero;
        // If hero is currently moving
        let currentTargetPoint: IPoint = scene.hero.target;
        if(Utils.isEmpty(currentTargetPoint)) {
            currentTargetPoint = scene.hero.newTarget;
        }
        if(!Utils.isEmpty(currentTargetPoint)) {
            let distance = Utils.getPointDistance(scene.hero.position, scene.hero.target);
            if(distance <= Math.floor(scene.grid.cellH / 2)) {
                // If currentTarget is half-cell away, start new movement from target (not from hero's current position)
                startingCell = scene.grid.mapCanvasToCell(scene.hero.target);
            }
        }
        let target = Utils.getDirectionTarget(startingCell, direction);
        scene.startMovement(target.i, target.j);    
    }

    function initInput(canvas: HTMLCanvasElement, scene: DynamicScene, grid: DynamicGrid) {
        let inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();
        inputCallbackMap[Input.Keys.W] = function(e: KeyboardEvent) {
            moveToDirection(scene, DirectionEnum.UP);
        };
        inputCallbackMap[Input.Keys.S] = function(e: KeyboardEvent) {
            moveToDirection(scene, DirectionEnum.DOWN);
        };
        inputCallbackMap[Input.Keys.A] = function(e: KeyboardEvent) {
            moveToDirection(scene, DirectionEnum.LEFT);
        };
        inputCallbackMap[Input.Keys.D] = function(e: KeyboardEvent) {
            moveToDirection(scene, DirectionEnum.RIGHT);
        };

        inputCallbackMap[Input.Keys.F1] = function(e: KeyboardEvent) {
            scene.toggleFPS();
            e.preventDefault();
        };
        inputCallbackMap[Input.Keys.F2] = function(e: KeyboardEvent) {
            scene.toggleGridMode();
            e.preventDefault();
        };
        inputCallbackMap[Input.Keys.F3] = function(e: KeyboardEvent) {
            scene.toggleCellNumbering();
            e.preventDefault();
        };
        inputCallbackMap[Input.Keys.F4] = function(e: KeyboardEvent) {
            scene.toggleFocus();
            e.preventDefault();
        };
        inputCallbackMap[Input.Keys.F5] = function(e: KeyboardEvent) {
            scene.toggleBlocks();
            e.preventDefault(); // Avoid page reloading
        };
        inputCallbackMap[Input.Keys.F6] = function(e: KeyboardEvent) {
            scene.toggleAntialiasing();
            e.preventDefault(); // Avoid focusing URL bar
        };
        let actionCallback = function(i: number, j: number, x: number, y: number) {
            doAction(i, j);
        };

        Input.init(
            canvas,
            grid,
            inputCallbackMap,
            emptyFz,
            actionCallback,
            emptyFz,
            emptyFz,
            function(i, j) {
                //Ongoing
                scene.updatePointer(i, j);
            },
            function(i, j) {
                //Hover
                scene.updatePointer(i, j);
            },
            function() {
                console.log("pause");
                scene.togglePause(true);
            },
            function() {
                scene.togglePause(false);
                console.log("unpause");
            },
            function() {
                scene.togglePause(true);
                grid.refresh();
                scene.changeScale(canvas);
                scene.reapplyTranslation();
                scene.togglePause(false);
            },
            emptyFz,
            emptyFz,
            emptyFz
        );

        function doAction(i: number, j: number) {
            scene.registerAction(i, j);
            scene.startMovement(i, j);
        };
    };
}