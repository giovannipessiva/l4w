module Mapper {

    export var mapper: MapperScene;
    var tmpMap: IMap;

    export function start(canvas: HTMLCanvasElement) {
        new StaticGrid(canvas, function(grid: StaticGrid) {
            new MapperScene(grid, function(mapper: MapperScene) {
                initInput(canvas, mapper, grid);
                initWidgets(canvas, mapper, grid);
                injectScenes(mapper);
                if (!Utils.isEmpty(tmpMap)) {
                    mapper.setMap(tmpMap, function() {
                        mapper.start(canvas);
                    });
                } else {
                    mapper.start(canvas);
                }
            });
        }, GridTypeEnum.mapper);
    }

    export function changeTile(tile: string) {
        mapper.setTile(tile,function(scene){});
    }

    export function loadMap(mapNode: JSTreeNode) {
        Resource.load(mapNode.id, Resource.TypeEnum.MAP, function(resourceText: string) {
            if (Utils.isEmpty(resourceText)) {
                console.error("Error while loading map: " + mapNode.id);
            } else {
                try {
                    var map: IMap = JSON.parse(resourceText);
                    injectMap(map);
                } catch (exception) {
                    if (exception.name === "SyntaxError") {
                        console.error("Error while parsing map: " + mapNode.id);
                        console.error(exception.message);
                    } else {
                        console.error(exception);
                    }
                }
            }
        });
    }

    function injectScenes(mapper) {
        TilePicker.injectReference(function(tilePicker: TilePickerScene) {
            mapper.setTilePicker(tilePicker);
            tilePicker.setMapper(mapper);
        });
    }

    function injectMap(map: IMap) {
        tmpMap = map;
        if (!Utils.isEmpty(mapper)) {
            mapper.setMap(map, function(){});
        }
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
                    scene.apply(x, y);
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
                    scene.apply(x, y);
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

    function initWidgets(canvas: HTMLCanvasElement, scene: StaticScene, grid: StaticGrid) {
        var inputRange: HTMLInputElement = <HTMLInputElement> document.getElementById("zoom");
        inputRange.onchange = function(e: Event) {
            grid.selectScale(+inputRange.value);
            grid.refresh();
            scene.updateContext(canvas);
        };
    };

}