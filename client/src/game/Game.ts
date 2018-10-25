import { DirectionEnum, ICell, IPoint, LanguageEnum } from "../../../common/src/model/Commons";
import { ISave } from "../../../common/src/model/Save";
import { Launcher } from "../core/events/Launcher";
import { SaveManager } from "../core/manager/SaveManager";
import { emptyFz } from "../core/util/Commons";
import { Compatibility } from "../core/util/Compatibility";
import { Errors } from "../core/util/Errors";
import { Input } from "../core/util/Input";
import { Resource } from "../core/util/Resource";
import { Utils } from "../core/util/Utils";
import { Workers } from "../core/util/Workers";
import { DynamicGrid } from "./DynamicGrid";
import { DynamicScene } from "./DynamicScene";

/**
 * Module for initializing and launching a game
 */
export namespace Game {

    let scene: DynamicScene;

    export function start(canvas: HTMLCanvasElement) {
        Compatibility.check();
        Workers.registerServiceWorker();

        new DynamicGrid(canvas, function(grid) {
            scene = new DynamicScene(<DynamicGrid> grid, canvas, Launcher.launchAction);
            initInput(canvas, scene, <DynamicGrid> grid);
            loadSave(canvas, function(save?: ISave) {
                scene.loadSave(save, function(success: boolean) {
                    scene.start(canvas);
                    scene.moveFocusToDirection();
 
                    // Load languages combobox
                    let combo: HTMLElement | null = document.getElementById("comboLang");
                    if(combo !== null && combo instanceof HTMLSelectElement) {
                        combo.options.add(new Option("English 🇬🇧", LanguageEnum.EN, true));
                        combo.options.add(new Option("Italiano 🇮🇹", LanguageEnum.IT));
                        scene.setLanguage(LanguageEnum.EN);
                    } else {
                        console.error("Element \"comboLang\" undefined as select element");
                    }
                });

            });
        });
    }

    export function changeLanguage() {
        let combo: HTMLElement | null = document.getElementById("comboLang");
        if(combo !== null && combo instanceof HTMLSelectElement) {
            let option = combo.selectedOptions.item(0);
            if(option !== null) {
                let lang = LanguageEnum[option.value];
                if(lang !== undefined) {
                    scene.setLanguage(LanguageEnum[option.value]);
                }
            }
        }
    }

    export function load() {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas1");
        loadSave(canvas, function(save?: ISave) {
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
        let currentState: ISave | undefined = SaveManager.getSave(scene.map, scene.hero);
        if (currentState !== undefined) {
            saveId = currentState.id + "";
        }
        Resource.save(saveId, JSON.stringify(currentState), Resource.TypeEnum.SAVE, function(response?: string, success?: boolean) {
            if (success) {
                console.log("Game saved successfully");
            }
        });
    }

    function loadSave(canvas: HTMLCanvasElement, callback: (save?: ISave) => void) {
        //TODO l'id del salvataggio va selezionato dal giocatore
        let saveId: string = "0";
        Resource.load(saveId, Resource.TypeEnum.SAVE, function(resourceText) {
            if (Utils.isEmpty(resourceText)) {
                callback();
            } else {
                try {
                    let save: ISave = JSON.parse(<string> resourceText);;
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
                    callback();
                }
            }
        });
    }
    
    function moveToDirection(scene: DynamicScene, direction: DirectionEnum) {
        let startingCell: ICell = scene.hero;
        // If hero is currently moving
        let currentTargetPoint: IPoint | undefined = scene.hero.target;
        if(currentTargetPoint === undefined) {
            currentTargetPoint = scene.hero.newTarget;
        }
        if(currentTargetPoint !== undefined) {
            let distance = Utils.getPointDistance(scene.hero.position!, currentTargetPoint);
            if(distance <= Math.floor(scene.grid.cellH / 2)) {
                // If currentTarget is half-cell away, start new movement from target (not from hero's current position)
                startingCell = scene.grid.mapCanvasToCell(currentTargetPoint);
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
            function(i?, j?) {
                //Ongoing
                scene.updatePointer(i, j);
            },
            function(i?, j?) {
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