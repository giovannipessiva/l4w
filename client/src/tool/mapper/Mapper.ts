import { DirectionEnum } from "../../../../common/src/model/Commons"
import { IMap } from "../../../../common/src/model/Map"
import { IEvent } from "../../../../common/src/model/Event"
import { Utils } from "../../core/util/Utils"
import { StaticGrid } from "../StaticGrid"
import { MapManager } from "../../core/manager/MapManager"
import { EventManager } from "../../core/manager/EventManager"
import { Constant } from "../../core/util/Constant"
import { Resource } from "../../core/util/Resource"
import { Input } from "../../core/util/Input"
import { emptyFz, IBooleanCallback, IEmptyCallback } from "../../core/util/Commons"
import { GridTypeEnum } from "../../core/AbstractGrid"
import { MapperPage } from "./MapperPage"
import { MapperScene } from "./MapperScene"
import { TilePickerScene } from "./TilePickerScene"
import { TilePicker } from "./TilePicker"

export namespace Mapper {

    export var mapper: MapperScene;

    export function start(canvas: HTMLCanvasElement, tilePicker: TilePickerScene, mapId: number) {
        if(!Utils.isEmpty(mapper)) {
            initMapperData(mapper, canvas, tilePicker, mapId, emptyFz);
        } else {
            new StaticGrid(canvas, function(grid: StaticGrid) {
                new MapperScene(grid, function(scene: MapperScene) {
                    mapper = scene;
                    initInput(canvas, scene, grid);
                    initWidgets(canvas, scene, grid);
                    initMapperData(scene, canvas, tilePicker, mapId, function() {
                        scene.start(canvas);    
                    });
                });
            }, GridTypeEnum.mapper);
        }
    }
    
    function initMapperData(scene: MapperScene, canvas: HTMLCanvasElement, tilePicker: TilePickerScene, mapId: number, callback: IEmptyCallback) {
        TilePicker.setMapper(scene);
        scene.setTilePicker(tilePicker);
        MapManager.loadMap(mapId, canvas, function(map?: IMap) {
            if(map === undefined) {
                console.error("Cannot init mapper, cannot load map: " + mapId);
                callback();
                return;
            }
            scene.changeMap(map, function() {
                setMode(Constant.EditMode.APPLY);
                callback();
            });
        });    
    }

    export function changeTile(tile: string, tilePicker: TilePickerScene) {
        mapper.togglePause(true);
        mapper.changeTile(tile, function(scene) {
            mapper.togglePause(false);
        });
        mapper.setTilePicker(tilePicker);
    }
    
    export function changeSize(rows: number, columns: number) {
        mapper.resizeMap(rows, columns);
    }
    
    export function reloadMap(callback: IBooleanCallback) {
        let mapId = MapperPage.getActiveMap();
        let canvas = <HTMLCanvasElement>document.getElementById("canvas1");
        MapManager.loadMap(mapId, canvas, function(map?: IMap) {
            if(map === undefined) {
                callback(false);
                return;
            }
            let result = mapper.changeMap(map, function() {
                MapperPage.changeEditState(false);
            });
            callback(result);
        });
    }

    export function saveMap(callback: IBooleanCallback): void {
        let mapId = MapperPage.getActiveMap();
        let mapJSON = JSON.stringify(mapper.getMap());
        Resource.save(mapId + "", mapJSON, Resource.TypeEnum.MAP, function(success: boolean) {
            if(callback !== null) {
                callback(success);
            }
        });
    }

    function initInput(canvas: HTMLCanvasElement, scene: MapperScene, grid: StaticGrid): void {
        let inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();
        inputCallbackMap[Input.Keys.UP] = function(e: KeyboardEvent) {
            scene.moveFocusToDirection(DirectionEnum.UP);
            e.preventDefault();
        };
        inputCallbackMap[Input.Keys.DOWN] = function(e: KeyboardEvent) {
            scene.moveFocusToDirection(DirectionEnum.DOWN);
            e.preventDefault();
        };
        inputCallbackMap[Input.Keys.LEFT] = function(e: KeyboardEvent) {
            scene.moveFocusToDirection(DirectionEnum.LEFT);
            e.preventDefault();
        };
        inputCallbackMap[Input.Keys.RIGHT] = function(e: KeyboardEvent) {
            scene.moveFocusToDirection(DirectionEnum.RIGHT);
            e.preventDefault();
        };

        inputCallbackMap[Input.Keys.F2] = function(e: KeyboardEvent) {
            scene.toggleEditorGrid();
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

        Input.init(
            canvas,
            grid,
            inputCallbackMap,
            emptyFz,
            emptyFz,
            function(i, j, x, y, mouseButton) {
                // Start action
                if (mouseButton === Input.MouseButtons.LEFT) {
                    if (scene.apply(i, j)) {
                        MapperPage.changeEditState(true);
                    }
                } else {
                    scene.select(i, j);
                }
            },
            function(i, j, mouseButton) {
                // End action
                if (mouseButton === Input.MouseButtons.LEFT) {
                    scene.selectEnd(i, j);
                }
            },
            function(i, j, mouseButton) {
                // Ongoing action
                if (mouseButton === Input.MouseButtons.LEFT) {
                    if(scene.apply(i!, j!)) {
                        MapperPage.changeEditState(true);
                    }
                } else {
                    scene.selectEnd(i, j);
                }
                scene.updatePointer(i, j);
            },
            function(i, j) {
                //Hover
                scene.updatePointer(i, j);
            },
            emptyFz,
            emptyFz,
            emptyFz,
            function(i, j) {
                //OnRightClick
                scene.cleanSelection();
            },
            emptyFz,
            emptyFz
        );
    };

    function initWidgets(canvas: HTMLCanvasElement, scene: MapperScene, grid: StaticGrid) {
        let inputRange: HTMLInputElement = <HTMLInputElement>document.getElementById("zoom");
        inputRange.onchange = function(e: Event) {
            grid.selectScale(+inputRange.value);
            grid.refresh();
            scene.changeScale(canvas);
            scene.resetTranslation();
        };
    };

    export function setMode(editMode: Constant.EditMode) {
        mapper.setEditMode(editMode);
        let isEditEvents = editMode === Constant.EditMode.EVENTS;
        if(isEditEvents) {
            // Select cell (0,0)
            mapper.apply(0, 0);
        } else {
            MapperPage.finishEventEditing();
            mapper.setSelectedEventCell(undefined);
        }
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_MODE + "0")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_MODE + "1")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_MODE + "2")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_MODE + editMode)).disabled = true;
        (<HTMLButtonElement>document.getElementById("layersPanel")).hidden = isEditEvents;
        (<HTMLButtonElement>document.getElementById("tilePanel")).hidden = isEditEvents;
        (<HTMLButtonElement>document.getElementById("eventPanel")).hidden = !isEditEvents;
    };
    
    export function changeEventPosition(event: IEvent, i: number, j: number) {
        event.i = i;
        event.j = j;
        EventManager.initTransientData(mapper.map, mapper.grid, event);
        mapper.renderingConfiguration.selectEventCell = {
            i: i,
            j: j    
        }    
    }

    export function setActiveLayer(layerIndex: Constant.MapLayer) {
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_LAYER + "0")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_LAYER + "1")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_LAYER + "2")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_LAYER + layerIndex)).disabled = true;
        mapper.setActiveLayer(layerIndex);
    };
    
    export function deleteEvent(event: IEvent) {
        if(Utils.isEmpty(event.id)) {
            return;    
        }
        for(let i = 0; i < mapper.map.events.length; i++) {
            let e = <IEvent> mapper.map.events[i];
            if(event.id === e.id) {
                mapper.map.events.splice(i, 1);
                return;
            }
        }
    };
    
    export function addEvent(event: IEvent) {
        if(!Utils.isEmpty(event.id)) {
            // Event already updated
            MapperPage.changeEditState(true);
            return;    
        }
        // Create new event
        let newId = 0;
        if(!Utils.isEmpty(mapper.map.maxEventId)) {
            newId = mapper.map.maxEventId! + 1;
        }
        event.id = newId;
        mapper.map.maxEventId = newId;
        mapper.map.events.push(event);
        EventManager.initTransientData(mapper.map, mapper.grid, event);
        MapperPage.changeEditState(true);
    };
    
    /**
     * Check if changedEvent can be placed in (i,j)
     * Return false if another event is already in that position
     */
    export function isCellAvailable(changedEvent: IEvent, i: number, j: number): boolean {
        for(let e of mapper.map.events) {
            if(e.i === i && e.j === j && e !== changedEvent) {
                return false
            }
        }
        return true;
    }
}