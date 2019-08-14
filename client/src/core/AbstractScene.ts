import { TilesetManager } from "./manager/TilesetManager"
import { MapManager } from "./manager/MapManager"
import {  } from "./AbstractGrid"
import { IMap } from "../../../common/src/model/Map"
import { IPoint, ICell, DirectionEnum, IRectangle } from "../../../common/src/model/Commons"
import { ITileset } from "../../../common/src/model/Tileset"
import { Constant } from "./util/Constant"
import { RenderConfiguration } from "./util/Commons"
import { Utils } from "./util/Utils"
import { Resource } from "./util/Resource"
import { AbstractGrid } from "./AbstractGrid"
import { ResourceType } from "../../../common/src/Constants";

var _requestAnimationFrame =
    window.requestAnimationFrame ||
    function(callback): number {
        window.setTimeout(callback, 40);
        return Math.floor(Math.random() * 100);
    };

var _cancelAnimationFrame = window.cancelAnimationFrame

/**
 * Abstract class for handling rendering operations
 */
export abstract class AbstractScene {

    map: IMap;

    focus: IPoint;

    pointer?: ICell;

    renderingConfiguration: RenderConfiguration;
    layers: number;

    context: CanvasRenderingContext2D;
    grid: AbstractGrid;

    paused: boolean;
    pauseStartTime: number | undefined;
    pauseDuration: number | undefined;

    redrawArea: IRectangle;

    constructor(grid: AbstractGrid) {
        this.renderingConfiguration = new RenderConfiguration();
        this.grid = grid;
        this.context = grid.getContext();
        this.paused = false;

        this.focus = this.grid.mapCellToCanvas({
            i: 0, j: 0
        });
        this.pointer = {
            i: 0, j: 0
        };
    }

    start(canvas: HTMLCanvasElement) {
        this.changeScale();
        let scene = this;
        let frameId = _requestAnimationFrame(function() {
            scene.mainGameLoop(frameId);
        });
    }

    mainGameLoop(frameId: number): void {
        let scene = this;
        let nextFrameID = _requestAnimationFrame(function() {
            scene.mainGameLoop(nextFrameID);
        });
        
        if (this.paused || !this.mainGameLoop_pre()) {
            _cancelAnimationFrame(frameId);
            return;
        }

        this.render(this.map, this.context);

        this.mainGameLoop_post();
    }

    protected abstract getRedrawArea(redrawAll?: boolean): IRectangle;

    protected mainGameLoop_pre(): boolean {
        return true;
    }

    protected mainGameLoop_post() {
    }

    protected renderPointer(): void {
        if (this.pointer !== undefined) {
            let mappedPointer: IPoint = this.grid.mapCellToCanvas(this.pointer);
            this.context.save();
            this.context.beginPath();
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.scale(2, 1);
            this.context.arc(
                Math.floor((mappedPointer.x + this.grid.cellW / 2) / 2),
                mappedPointer.y + this.grid.cellH - 4,
                8,
                0,
                Constant.DOUBLE_PI);
            this.context.closePath();
            this.context.globalAlpha = 0.4;
            this.context.fill();
            this.context.restore();
        }
    }

    protected renderFocus() {
        if (this.focus.x != null && this.focus.y != null && this.renderingConfiguration.showFocus) {
            this.context.save();
            this.context.beginPath();
            this.context.fillStyle = Constant.Color.BLACK;
            this.context.arc(
                this.focus.x + Math.floor(this.grid.cellW / 2),
                this.focus.y + Math.floor(this.grid.cellH / 2),
                15,
                0,
                Constant.DOUBLE_PI);
            this.context.closePath();
            this.context.fill();
            this.context.restore();
        }
    }

    toggleGrid(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showGrid = enable;
        } else {
            this.renderingConfiguration.showGrid = !this.renderingConfiguration.showGrid;
        }

    }

    toggleGridMode() {
        if (!this.renderingConfiguration.showGrid) {
            this.toggleGrid();
        } else if (!this.renderingConfiguration.showBlocks) {
            this.toggleBlocks();
        } else {
            this.toggleGrid();
            this.toggleBlocks();
        }
    }

    toggleCellNumbering(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showCellNumbers = enable;
        } else {
            this.renderingConfiguration.showCellNumbers = !this.renderingConfiguration.showCellNumbers;
        }
    }

    toggleFocus(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showFocus = enable;
        } else {
            this.renderingConfiguration.showFocus = !this.renderingConfiguration.showFocus;
        }
    }

    toggleBlocks(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showBlocks = enable;
        } else {
            this.renderingConfiguration.showBlocks = !this.renderingConfiguration.showBlocks;
        }
    }
    
    toggleOnTops(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showOnTops = enable;
        } else {
            this.renderingConfiguration.showOnTops = !this.renderingConfiguration.showOnTops;
        }
    }

    toggleAntialiasing(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.enableAntialiasing = enable;
        } else {
            this.renderingConfiguration.enableAntialiasing = !this.renderingConfiguration.enableAntialiasing;
        }
        if ("webkitImageSmoothingEnabled" in this.context) {
            //@ts-ignore Retrocompatibility
            this.context["webkitImageSmoothingEnabled"] = this.renderingConfiguration.enableAntialiasing;
        }
        if ("msImageSmoothingEnabled" in this.context) {
            //@ts-ignore Retrocompatibility
            this.context["msImageSmoothingEnabled"] = this.renderingConfiguration.enableAntialiasing;
        }
        if ("imageSmoothingEnabled" in this.context) {
            this.context["imageSmoothingEnabled"] = this.renderingConfiguration.enableAntialiasing;
        }
    }

    updatePointer(i?: number, j?: number) {
        if(i === undefined || j === undefined) {
            this.pointer = undefined;
        } else {
            this.pointer = {
                i: i,
                j: j
            };
        }
    }

    moveFocusToDirection(direction?: DirectionEnum) {
        if (direction !== undefined) {
            switch (direction) {
                case DirectionEnum.UP: this.focus.y -= +this.grid.cellH; break;
                case DirectionEnum.DOWN: this.focus.y += +this.grid.cellH; break;
                case DirectionEnum.LEFT: this.focus.x -= +this.grid.cellW; break;
                case DirectionEnum.RIGHT: this.focus.x += +this.grid.cellW; break;
                case DirectionEnum.NONE: break;
                default: console.error("Unexpected case: " + direction);
            }
        }
        this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
    }
    
    moveFocusToTarget(target: ICell) {
        this.focus = this.grid.mapCellToCanvas(target);
        this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
    }

    resetTranslation() {
        this.grid.resetTranslation();
    }
    
    reapplyTranslation() {
        this.grid.reappyTranslation();    
    }

    changeScale() {
        // Reset and reapply scale
        try {
            this.context.setTransform(1,0,0,1,0,0);
            this.context.scale(this.grid.scaleX, this.grid.scaleY);
        } catch(e) {
            // This can occur on Firefox for a canvas of abnormal size
            console.error(e);
        }
    }
        
    togglePause(pause?: boolean) {
        if (pause != null) {
            this.paused = pause;
        } else {
            this.paused = !this.paused;
        }
        if (this.paused) {
            // Save the pause start time
            this.pauseStartTime = Utils.now();
        } else {
            // Save the pause total duration
            if(this.pauseStartTime === undefined) {
                this.pauseStartTime = 0;
            }
            this.pauseDuration = Utils.now() - this.pauseStartTime;
            this.pauseStartTime = undefined;
        }
    }

    changeMap(map: IMap, callback: { (scene: AbstractScene): void }) {
        // Pause rendering
        this.togglePause(true);
        let scene: AbstractScene = this;
        if (Utils.isEmpty(map)) {
            console.error("Uninitialized map");
            console.trace();
        }
        scene.map = map;
        scene.changeTile(map.tileset.image, function(scene) {
            setTimeout(function() {
                MapManager.initTransientData(scene);
                // Resume rendering
                scene.togglePause(false);
            });
            callback(scene);
        });
    }

    changeTile(tile: string, callback: { (scene: AbstractScene): void }) {
        let scene: AbstractScene = this;
        TilesetManager.loadTileset(tile, this.context, function(tileset?: ITileset) {
            if(tileset === undefined) {
                console.error("Cannot change tile, tileset not found: " + tile);
                callback(scene);
                return;
            }
            scene.map.tileset = tileset;
            Resource.load(tileset.image, ResourceType.TILE, function(image) {
                tileset.imageData = <HTMLImageElement> image;
                callback(scene);
            });
        });
    }

    getSceneHeight() {
        return this.map.height;
    }

    getSceneWidth() {
        return this.map.width;
    }

    protected render(map: IMap, context: CanvasRenderingContext2D, renderOnTop: boolean = true) {
        let minRow = this.redrawArea.y;
        let maxRow = this.redrawArea.y + this.redrawArea.h;
        let minColumn = this.redrawArea.x;
        let maxColumn = this.redrawArea.x + this.redrawArea.w;

        if (!Utils.isEmpty(map)) {
            // Render base cells and events
            for (let j = minRow; j <= maxRow; j++) {
                for (let i = minColumn; i <= maxColumn; i++) {
                    
                    let cellIndex = Utils.cellToGid({i:i,j:j},map.width);
                    
                    for (let layerIndex = Constant.MapLayer.LOW; layerIndex <= Constant.MapLayer.TOP; layerIndex++) { 

                        let layer = this.map.layers[layerIndex];
                        if (layer === undefined || layer.data === undefined || layer.data.length < cellIndex) {
                            continue;
                        }
                        let tileGID = layer.data[cellIndex];
                        if (Utils.isEmpty(tileGID)) {
                            continue;
                        }
                        // Check if it is the right time to render cell(i,j_real) (based on its z-index)
                        let zindex = Constant.ZIndex.LV0;
                        if(map.tileset.onTop !== undefined) {
                            zindex = Utils.normalizeZIndex(map.tileset.onTop[tileGID!]);
                        }
                        if(zindex === Constant.ZIndex.LV0 || !renderOnTop) {
                            this.applyLayerCustomizations(layerIndex);
                            if (!Utils.isEmpty(layer.opacity)) {
                                context.globalAlpha = layer.opacity!;
                            }
                            this.renderCell(context, map.tileset, tileGID!, i, j);
                            context.globalAlpha = 1;
                            this.removeLayerCustomizations(layerIndex);
                        }
                    }
                    // Render UI base
                    MapManager.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, i, j, false);        
                }
            }
            
            this.renderPointer();
            
            // render onTop elements
            for (let j = minRow; j <= maxRow; j++) {
                for (let i = minColumn; i <= maxColumn && renderOnTop; i++) {
                    // j_real (where j_real <= j) is used to finds cells(i,j_real) that
                    // require to be rendered at the same time of cells(i,j) because of their zindex
                    for (let j_real = minRow; j_real <= j; j_real++) {
                        let cellIndex = Utils.cellToGid({i:i,j:j_real},map.width);
                        
                        for (let layerIndex = Constant.MapLayer.LOW; layerIndex <= Constant.MapLayer.TOP; layerIndex++) {
                            
                            let layer = this.map.layers[layerIndex];
                            if (layer === undefined || layer.data === undefined || layer.data.length < cellIndex) {
                                continue;
                            }
                            let tileGID = layer.data[cellIndex];
                            if (Utils.isEmpty(tileGID)) {
                                continue;
                            }
                            
                            // Check if it is the right time to render cell(i,j_real) (based on its z-index)
                            let zindex = Constant.ZIndex.LV0;
                            if(map.tileset.onTop !== undefined) {
                                zindex = Utils.normalizeZIndex(map.tileset.onTop[tileGID!]);
                            }
                            if(zindex > 0 && j_real + zindex === j) {
                                this.applyLayerCustomizations(layerIndex);
                                if (!Utils.isEmpty(layer.opacity)) {
                                    context.globalAlpha = layer.opacity!;
                                }
                                this.renderCell(context, map.tileset, tileGID!, i, j_real);
                                context.globalAlpha = 1;
                                this.removeLayerCustomizations(layerIndex);
                            }
                        }
                    }
                }
                // Render Characters
                for (let i = minColumn; i <= maxColumn; i++) {
                    this.renderDynamicElements(minRow, maxRow, minColumn, maxColumn, i, j, false);
                }
            }
                        
            for (let j = minRow; j <= maxRow; j++) {
                for (let i = minColumn; i <= maxColumn; i++) {
                    // Render onTop events
                    this.renderDynamicElements(minRow, maxRow, minColumn, maxColumn, i, j, true);
                    
                    // Render UI global
                    MapManager.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, i, j, true);
                }
            }
        }
        MapManager.renderGlobalUI(this.grid, this.context, this.renderingConfiguration);
        this.renderFocus();
    }
    
    private renderCell(context: CanvasRenderingContext2D, tileset: ITileset, tileGID: number, i: number, j: number) {  
        let tileCell = Utils.gidToCell(tileGID, Math.floor(tileset.imageWidth! / this.grid.cellW)); //TODO precalculate
        context.drawImage(
            tileset.imageData!,
            Math.floor(tileCell.i * this.grid.cellW), Math.floor(tileCell.j * this.grid.cellH), this.grid.cellW, this.grid.cellH,
            Math.floor(i * this.grid.cellW), Math.floor(j * this.grid.cellH), this.grid.cellW, this.grid.cellH);
    }
    
    protected abstract renderDynamicElements(minRow: number, maxRow: number, minColumn: number, maxColumn: number, i: number, j: number, onTop: boolean): void;

    protected applyLayerCustomizations(layerIndex: number) {
    }
    
    protected removeLayerCustomizations(layerIndex: number) {
    }

    protected onFocusCellChange() {
    }

    protected onFocusPixelChange(x: number, y: number) {
    }
}