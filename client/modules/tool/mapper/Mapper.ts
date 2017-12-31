/// <reference path="../../core/model/Commons.ts" />
/// <reference path="../../core/util/Utils.ts" />
/// <reference path="../../core/util/Constant.ts" />
/// <reference path="../../core/util/Errors.ts" />
/// <reference path="MapperPage.ts" />

namespace Mapper {

    export var mapper: MapperScene;

    export function start(canvas: HTMLCanvasElement, tilePicker: TilePickerScene, mapId: number) {
        if(!Utils.isEmpty(mapper)) {
            mapper.togglePause(true);
        }
        new StaticGrid(canvas, function(grid: StaticGrid) {
            new MapperScene(grid, function(scene: MapperScene) {
                initInput(canvas, scene, grid);
                initWidgets(canvas, scene, grid);
                TilePicker.setMapper(scene);
                scene.setTilePicker(tilePicker);
                mapper = scene;
                MapManager.loadMap(mapId, canvas, function(map: IMap) {
                    mapper.changeMap(map, function() {
                        mapper.start(canvas);
                    });
                });
            });
        }, GridTypeEnum.mapper);
    }

    export function changeTile(tile: string, tilePicker: TilePickerScene) {
        mapper.changeTile(tile, function(scene) { });
        mapper.setTilePicker(tilePicker);
    }
    
    export function changeSize(rows: number, columns: number) {
        mapper.resizeMap(rows, columns);
    }
    
    export function reloadMap() {
        let mapId = MapperPage.getActiveMap();
        let canvas = <HTMLCanvasElement>document.getElementById("canvas1");
        MapManager.loadMap(mapId, canvas, function(map: IMap) {
            mapper.changeMap(map, function() {
                MapperPage.changeEditState(false);
            });
        });
    }

    export function saveMap(callback: IBooleanCallback = null) {
        var mapId = MapperPage.getActiveMap();
        var mapJSON = JSON.stringify(this.mapper.getMap());
        Resource.save(mapId+"", mapJSON, Resource.TypeEnum.MAP, function(success: boolean) {
            if(callback !== null) {
                callback(success);
            }
        });
    }

    function initInput(canvas: HTMLCanvasElement, scene: MapperScene, grid: StaticGrid) {
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

        inputCallbackMap[Input.Keys.F2] = function(e) {
            scene.toggleEditorGrid();
        };
        inputCallbackMap[Input.Keys.F3] = function(e) {
            scene.toggleCellNumbering();
        };
        inputCallbackMap[Input.Keys.F4] = function(e) {
            scene.toggleFocus();
        };

        Input.init(
            canvas,
            grid,
            inputCallbackMap,
            function() { },
            function() { },
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
                    if(scene.apply(i, j)) {
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
            function() { },
            function() { },
            function() { },
            function(i, j) {
                //OnRightClick
                scene.cleanSelection();
            },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
        );
    };

    function initWidgets(canvas: HTMLCanvasElement, scene: MapperScene, grid: StaticGrid) {
        var inputRange: HTMLInputElement = <HTMLInputElement>document.getElementById("zoom");
        inputRange.onchange = function(e: Event) {
            grid.selectScale(+inputRange.value);
            grid.refresh();
            scene.changeScale(canvas);
            scene.resetTranslation();
        };
    };

    export function setMode(editMode: Constant.EditMode) {
        let isEditEvents = editMode === Constant.EditMode.EVENTS;
        if(isEditEvents) {
            let confirmed = MapperPage.loadEvent();
            if(!confirmed) {
                return;
            }
        } else {
            MapperPage.finishEventEditing();
        }
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_MODE + "0")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_MODE + "1")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_MODE + "2")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_MODE + editMode)).disabled = true;
        (<HTMLButtonElement>document.getElementById("layersPanel")).hidden = isEditEvents;
        (<HTMLButtonElement>document.getElementById("tilePanel")).hidden = isEditEvents;
        (<HTMLButtonElement>document.getElementById("eventPanel")).hidden = !isEditEvents;
        mapper.setEditMode(editMode);
    };

    export function setActiveLayer(layerIndex: Constant.MapLayer) {
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_LAYER + "0")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_LAYER + "1")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_LAYER + "2")).disabled = false;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_LAYER + layerIndex)).disabled = true;
        mapper.setActiveLayer(layerIndex);
    };
    
    export function deleteEvent(event: IEvent) {
        for(let i = 0; i < mapper.map.events.length; i++) {
            let e: IEvent = mapper.map.events[i];
            if(event === e) {
                mapper.map.events.splice(i, 1);
                break;
            }
        }
    };
    
    export function addEvent(event: IEvent) {
        for(let i = 0; i < mapper.map.events.length; i++) {
            let e: IEvent = mapper.map.events[i];
            if(event.i === e.i && event.j === e.j) {
                // Update event
                mapper.map.events[i] = event;
                MapperPage.changeEditState(true);
                return;
            }
        }
        // Create new event
        mapper.map.events.push(event);
        ActorManager.initTransientData(this.mapper.grid, event);
        MapperPage.changeEditState(true);
    };
}