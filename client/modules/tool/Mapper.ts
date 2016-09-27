/// <reference path="../core/util/Utils.ts" />
/// <reference path="../core/util/Constant.ts" />
/// <reference path="../core/util/Errors.ts" />
/// <reference path="EditPage.ts" />

namespace Mapper {

    export var mapper: MapperScene;

    export function start(canvas: HTMLCanvasElement, tilePicker: TilePickerScene, mapId: string) {
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
                MapEngine.loadMap(mapId, canvas, function(map: IMap) {
                    mapper.setMap(map, function() {
                        mapper.start(canvas);
                    });
                });
            });
        }, GridTypeEnum.mapper);
    }

    export function changeTile(tile: string, tilePicker: TilePickerScene) {
        mapper.setTile(tile, function(scene) { });
        mapper.setTilePicker(tilePicker);
    }
    
    export function changeSize(rows: number, columns: number) {
        mapper.resizeMap(rows, columns);
    }
    
    export function reloadMap() {
        var mapId = EditPage.getActiveMap();
        var canvas = <HTMLCanvasElement>document.getElementById("canvas1");
        
        MapEngine.loadMap(mapId, canvas, function(map: IMap) {
            mapper.setMap(map, function() {
                EditPage.changeEditState(false);
            });
        });
    }

    export function saveMap(callback: IBooleanCallback = null) {
        var mapId = EditPage.getActiveMap();
        var mapJSON = JSON.stringify(this.mapper.getMap());
        Resource.save(mapId, mapJSON, Resource.TypeEnum.MAP, function(success: boolean) {
            if(callback !== null) {
                callback(success);
            }
        });
    }

    function initInput(canvas: HTMLCanvasElement, scene: MapperScene, grid: StaticGrid) {
        var inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();
        inputCallbackMap[Input.Keys.W] = function(e) {
            scene.moveFocus(Constant.Direction.UP);
        };
        inputCallbackMap[Input.Keys.S] = function(e) {
            scene.moveFocus(Constant.Direction.DOWN);
        };
        inputCallbackMap[Input.Keys.A] = function(e) {
            scene.moveFocus(Constant.Direction.LEFT);
        };
        inputCallbackMap[Input.Keys.D] = function(e) {
            scene.moveFocus(Constant.Direction.RIGHT);
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
            function(x, y, mouseButton) {
                // Start action
                if (mouseButton === Input.MouseButtons.LEFT) {
                    if (scene.apply(x, y)) {
                        EditPage.changeEditState(true);
                    }
                } else {
                    scene.select(x, y);
                }
            },
            function(x, y, mouseButton) {
                // End action
                if (mouseButton === Input.MouseButtons.LEFT) {
                    scene.selectEnd(x, y);
                }
            },
            function(x, y, mouseButton) {
                // Ongoing action
                if (mouseButton === Input.MouseButtons.LEFT) {
                    if(scene.apply(x, y)) {
                        EditPage.changeEditState(true);
                    }
                } else {
                    scene.selectEnd(x, y);
                }
                scene.updatePointer(x, y);
            },
            function(x, y) {
                //Hover
                scene.updatePointer(x, y);
            },
            function() { },
            function() { },
            function() { },
            function(x, y) {
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
            scene.updateContext(canvas);
            scene.resetTranslation();
        };
    };

    export function setMode(editMode: Constant.EditMode) {
        (<HTMLButtonElement>document.getElementById(EditPage.BUTTON_ID_MODE + "0")).disabled = false;
        (<HTMLButtonElement>document.getElementById(EditPage.BUTTON_ID_MODE + "1")).disabled = false;
        (<HTMLButtonElement>document.getElementById(EditPage.BUTTON_ID_MODE + editMode)).disabled = true;
        mapper.setEditMode(editMode);
    };

    export function setActiveLayer(layerIndex: Constant.MapLayer) {
        (<HTMLButtonElement>document.getElementById(EditPage.BUTTON_ID_LAYER + "0")).disabled = false;
        (<HTMLButtonElement>document.getElementById(EditPage.BUTTON_ID_LAYER + "1")).disabled = false;
        (<HTMLButtonElement>document.getElementById(EditPage.BUTTON_ID_LAYER + "2")).disabled = false;
        (<HTMLButtonElement>document.getElementById(EditPage.BUTTON_ID_LAYER + "3")).disabled = false;
        (<HTMLButtonElement>document.getElementById(EditPage.BUTTON_ID_LAYER + layerIndex)).disabled = true;
        mapper.setActiveLayer(layerIndex);
    };
}