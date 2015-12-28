module Mapper {

    export var mapper: MapperScene;

    export function start(canvas: HTMLCanvasElement) {
        new StaticGrid(canvas, function(grid: StaticGrid) {
            var mapper = new MapperScene(grid);
            initInput(canvas, mapper, grid);
            initWidgets(canvas, mapper, grid);
            injectScenes(mapper);
            mapper.start(canvas);
        }, GridTypeEnum.mapper);
    }
    
    export function changeTile(tile: string) {
        //controlla se il tile è diverso da quello attuale
        //se lo è, cambialo e ridisegna la mappa
    }
    
    export function loadMap(mapNode: JSTreeNode) {
        Resource.load(mapNode.id, Resource.ResurceTypeEnum.MAP, function(element: JQuery) {
            //TODO disegna la mappa caricata
        });
    }

    function injectScenes(mapper) {
        TilePicker.injectReference(function(tilePicker: TilePickerScene) {
            mapper.setTilePicker(tilePicker);
            tilePicker.setMapper(mapper);
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
                if (Utils.isUndefined(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    scene.select(x, y);
                }
            },
            function(x, y, mouseButton) {
                //End action
                if (Utils.isUndefined(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    scene.selectEnd(x, y);
                }
            },
            function(x, y, mouseButton) {
                //Ongoing
                if (Utils.isUndefined(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
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