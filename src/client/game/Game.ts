import Vue from "vue"

// @ts-ignore https://github.com/vuejs/vue-cli/issues/1198
import LoginComponent from "../components/Login.vue"

import { DirectionEnum, ICell, IPoint, LanguageEnum } from "../../common/model/Commons";
import { ISave } from "../../common/model/Save";
import { Launcher } from "../core/events/Launcher";
import { DialogManager } from "../core/manager/DialogManager";
import { SaveManager } from "../core/manager/SaveManager";
import { emptyFz } from "../core/util/Commons";
import { Compatibility } from "../core/util/Compatibility";
import { Errors } from "../core/util/Errors";
import { Input } from "../core/util/Input";
import { Resource } from "../core/util/Resource";
import { ClientUtils } from "../core/util/Utils";
import { Workers } from "../core/util/Workers";
import { DynamicGrid } from "./DynamicGrid";
import { DynamicScene } from "./DynamicScene";
import { ResourceType, ScreenSize } from "../../common/Constants";
import { Utils } from "../../common/Utils";
import { CLI } from "../core/util/CLI";
import { DataDefaults } from "../../common/DataDefaults";

/**
 * Module for initializing and launching a game
 */
export namespace Game {

    let scene: DynamicScene;

    export function start(canvas: HTMLCanvasElement) {
        Compatibility.check();
        Workers.registerServiceWorker();
        CLI.start();

        new Vue({
            el: "#loginVue",
            components: {
                "login": LoginComponent,
            }
        });

        new DynamicGrid(canvas, function(grid) {
            scene = new DynamicScene(<DynamicGrid> grid, Launcher.launchAction);
            initInput(canvas, scene, <DynamicGrid> grid);
            loadSave(canvas, function(save?: ISave) {                
                scene.loadSave(save, function(success: boolean) {
                    scene.start(canvas);
                    scene.moveFocusToDirection();

                    // Load saved config
                    let languageCombo = <HTMLSelectElement> document.getElementById("comboLang");
                    if(save !== undefined && save.config !== undefined) {
                        if(save.config.lang !== undefined) {
                             languageCombo.value = save.config.lang;
                            changeLanguage();
                        }
                        if(save.config.flagAntialiasing !== undefined) {
                            (<HTMLInputElement> document.getElementById("checkAntialiasing")).checked = save.config.flagAntialiasing;
                            changeAntialiasing();
                        }
                        if(save.config.flagNatural !== undefined && save.config.flagDouble !== undefined) {
                            (<HTMLSelectElement> document.getElementById("comboScreen")).value = save.config.flagNatural? (save.config.flagDouble? ScreenSize.NATURAL_X2 : ScreenSize.NATURAL) : ScreenSize.ADAPTIVE;
                            changeScreen();
                        }
                    }

                    // Load languages combobox
                    //TODO dynamic loading of supported languages
                    languageCombo.options.add(new Option("English 🇬🇧", LanguageEnum.EN));
                    languageCombo.options.add(new Option("Italiano 🇮🇹", LanguageEnum.IT));
                    languageCombo.value = scene.save.config.lang;

                    // Last graphic changes
                    updateCanvasCentering();
                    canvas.classList.add("l4wCanvas");
                    document.getElementById("footer")!.style.visibility = "visible";
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
        DialogManager.closeDialog(true);
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
        //TODO should manage more than one save, maybe with a custom name
        let saveId: number = DataDefaults.FIRST_ELEM_ID;
        let currentState: ISave | undefined = SaveManager.getSave(scene.map, scene.hero);
        if (currentState !== undefined && Utils.isNumeric(currentState.id)) {
            saveId = currentState.id;
        }
        // Set config preferences
        currentState.config.lang = <LanguageEnum> (<HTMLSelectElement> document.getElementById("comboLang")).value;
        currentState.config.flagAntialiasing = (<HTMLInputElement> document.getElementById("checkAntialiasing")).checked;
        currentState.config.flagNatural = (<HTMLSelectElement> document.getElementById("comboScreen")).value !== ScreenSize.ADAPTIVE;
        currentState.config.flagDouble = (<HTMLSelectElement> document.getElementById("comboScreen")).value === ScreenSize.NATURAL_X2;

        Resource.save(saveId + "", JSON.stringify(currentState), ResourceType.SAVE, function(response?: string, success?: boolean) {
            if (success) {
                console.log("Game saved successfully");
            }
        });
    }

    function loadSave(canvas: HTMLCanvasElement, callback: (save?: ISave) => void) {
        //TODO l'id del salvataggio va selezionato dal giocatore
        let saveId: string = "0";
        Resource.load(saveId, ResourceType.SAVE, function(resourceText) {
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
            let distance = ClientUtils.getPointDistance(scene.hero.position!, currentTargetPoint);
            if(distance <= Math.floor(scene.grid.cellH / 2)) {
                // If currentTarget is half-cell away, start new movement from target (not from hero's current position)
                startingCell = scene.grid.mapCanvasToCell(currentTargetPoint);
            }
        }
        let target = ClientUtils.getDirectionTarget(startingCell, direction);
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
                scene.togglePause(true);
            },
            function() {
                scene.togglePause(false);
            },
            function() {
                scene.togglePause(true);
                grid.refreshCanvasSize();
                scene.changeScale();
                scene.reapplyTranslation();
                scene.togglePause(false);
                updateCanvasCentering();
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

    /**
     * Change the screen size strategy
     */
    export function changeScreen() {
        let comboScreen = <HTMLInputElement> document.getElementById("comboScreen");
        switch(comboScreen.value) {
            case ScreenSize.ADAPTIVE:
                scene.toggleNaturalScale(false);
                break;
            case ScreenSize.NATURAL:
                scene.toggleNaturalScale(true, false);
                break;
            case ScreenSize.NATURAL_X2:
                scene.toggleNaturalScale(true, true);
                break;
            default:
                console.error("Unexpected comboScreen value:" + comboScreen.value);
        }
        updateCanvasCentering();
    };

    function updateCanvasCentering() {
        let canvasElement = <HTMLDivElement> document.getElementById("canvas1");
        let margin = Math.round((window.innerHeight - canvasElement.clientHeight) / 2) + "px"
        canvasElement.style.marginTop = margin;
        canvasElement.style.marginBottom = margin;
    }

    /**
     * Change the fullscreen option
     */
    export function changeFullscreen() {
        let checkFullscreen = <HTMLInputElement> document.getElementById("checkFullscreen");
        if(checkFullscreen.checked) {
            openFullscreen();
        } else {
            closeFullscreen();
        }
        updateCanvasCentering();
    };

    /**
     * Change the antialiasing option
     */
    export function changeAntialiasing() {
        let checkAntialiasing = <HTMLInputElement> document.getElementById("checkAntialiasing");
        scene.toggleAntialiasing(checkAntialiasing.checked);
    };

    /**
     * Open fullscreen mode (only on user interaction)
     */
    export function openFullscreen() {
        if(document.fullscreenElement === null) {
            let elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem["mozRequestFullScreen"]) { /* Firefox */
                elem["mozRequestFullScreen"]();
            } else if (elem["webkitRequestFullscreen"]) { /* Chrome, Safari and Opera */
                elem["webkitRequestFullscreen"]();
            } else if (elem["msRequestFullscreen"]) { /* IE/Edge */
                elem["msRequestFullscreen("];
            } else {
                console.error("Cannot request FullScreen");
                return;
            }
        }
    }
    
    /**
     * Close fullscreen
     */
    export function closeFullscreen() {
        if(document.fullscreenElement !== null) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document["mozCancelFullScreen"]) { /* Firefox */
                document["mozCancelFullScreen"]();
            } else if (document["webkitExitFullscreen"]) { /* Chrome, Safari and Opera */
                document["webkitExitFullscreen"]();
            } else if (document["msExitFullscreen"]) { /* IE/Edge */
                document["msExitFullscreen"]();
            } else {
                console.error("Cannot request FullScreen");
                return;
            }
        }
    }
}