import { AbstractStaticScene } from "../AbstractStaticScene"
import { StaticGrid } from "../StaticGrid"
import { Constant } from "../../core/util/Constant"
import { IRectangle, ICell, ISize, CardinalDirections } from "../../../common/Commons"
import { IEvent } from "../../../common/model/Event"
import { IMap } from "../../../common/model/Map"
import { EventManager } from "../../core/manager/EventManager"
import { MapManager } from "../../core/manager/MapManager"
import { MapperPage } from "./MapperPage"
import { TilePickerScene } from "./TilePickerScene"
import { AbstractScene } from "../../core/AbstractScene"
import { Utils } from "../../../common/Utils"
import { DataDefaults } from "../../../common/DataDefaults"
import { ClientUtils } from "../../core/util/ClientUtils"
import { TilesetManager } from "../../core/manager/TilesetManager"

/**
 * Scene implementation for managing Mapper logics
 */
export class MapperScene extends AbstractStaticScene {

    public static LOWER_LEVEL_OPACITY: number = 0.8;
    public static UPPER_LEVEL_OPACITY: number = 0.4;

    private activeLayer: Constant.MapLayer;
    private editMode: Constant.EditMode;

    private tilePicker: TilePickerScene;
    autotileSelected?: string;

    constructor(grid: StaticGrid, callback: { (scene: MapperScene): void }) {
        super(grid);
        this.activeLayer = Constant.MapLayer.MID;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_LAYER + this.activeLayer)).disabled = true;
        callback(this);
    }

    protected renderPointer() {
        if (this.pointer !== undefined) {
            let selectionArea: IRectangle | undefined = this.getSelectionArea();
            if (selectionArea === undefined) {
                super.renderPointer();
            } else {
                // Pointer with selected tile cells
                this.context.save();
                this.context.globalAlpha = 0.4;
                this.context.fillStyle = Constant.Color.GREY;
                this.context.fillRect(
                    this.pointer.i * this.grid.cellW,
                    this.pointer.j * this.grid.cellH,
                    (selectionArea.w + 1) * this.grid.cellW,
                    (selectionArea.h + 1) * this.grid.cellH);
                this.context.restore();
            }
        }
    }

    protected mainGameLoop_pre() {
        if (!super.mainGameLoop_pre()) {
            return false;
        }
        return true;
    }

    protected getRedrawArea(redrawAll?: boolean): IRectangle {
        let selectionArea;
        if(this.tilePicker !== undefined) {
            selectionArea = this.tilePicker.getSelectionArea();
        }
        return super.getRedrawArea(redrawAll, selectionArea);
    }

    getSceneHeight() {
        return this.map.height;
    }

    getSceneWidth() {
        return this.map.width;
    }

    select(i: number, j: number) {
        super.select(i, j);
    }

    apply(i_apply: number, j_apply: number): boolean {
        let changed: boolean = false;
        let pickerArea: IRectangle | undefined = this.tilePicker.getSelectionArea();
        let changedCell: number = i_apply + j_apply * this.map.width;
        let layer = this.map.layers[this.activeLayer];
        if (Utils.isEmpty(layer.data)) {
            layer.data = [];
        }
        switch (this.editMode) {
            case Constant.EditMode.APPLY:
                let isAutotileChanged = false;
                let size: ISize = { w: this.map.width, h: this.map.height };
                if (pickerArea === undefined) {
                    // Check if autotile is selected
                    if(this.autotileSelected === undefined) {
                        return false;
                    } else {
                        // Apply autotileset
                        if(this.map.autotilesets === undefined) {
                            this.map.autotilesets = {};
                        }
                        let maxGID = this.map.tileset.maxGID;
                        let autotileGID: number | undefined;
                        // Check if autotile is registered, otherwise assing a GID, then apply it to the layer
                        for(let entry of Object.entries(this.map.autotilesets)) {
                            let tmp = parseInt(entry[0]);
                            if(entry[1].image === this.autotileSelected) {
                                autotileGID = tmp;
                                break;
                            }
                            if(tmp > maxGID) {
                                maxGID = tmp;
                            }
                        }
                        if(autotileGID === undefined) {
                            autotileGID = maxGID + 1;
                            let autotile = DataDefaults.getAutoTileset();
                            autotile.image = this.autotileSelected;
                            this.map.autotilesets[autotileGID + ""] = autotile;
                            // Load new autotile
                            TilesetManager.initTransientDataAutotiles([ autotile ]);
                        }
                        // Apply autotile GID to map
                        if (layer.data![changedCell] !== autotileGID) {
                            changed = true;
                            isAutotileChanged = true;
                            layer.data![changedCell] = autotileGID;
                            // Compute proximity value for rendering
                            if(layer.autotileData === undefined) {
                                layer.autotileData = [];
                            }
                            layer.autotileData[changedCell] = MapManager.getAutotileProximityValue(changedCell, size, autotileGID, layer);
                        }
                    }
                } else {
                    // Apply tileset
                    let tileColumns: number = Math.floor(this.map.tileset.imageWidth! / this.grid.cellW);
                    let appliedTile: number = pickerArea.x + pickerArea.y * tileColumns;
                    for (let j = 0; j <= pickerArea.h; j++) {
                        for (let i = 0; i <= pickerArea.w; i++) {
                            if (i_apply + i < this.map.width) {
                                let appliedTileOffset: number = i + j * tileColumns;
                                let changedCellOffset: number = i + j * this.map.width;
                                if (layer.data![changedCell + changedCellOffset] !== appliedTile + appliedTileOffset) {
                                    changed = true;
                                    if(MapManager.isThisAnAutotileCell(changedCell + changedCellOffset, layer, this.map)) {
                                        isAutotileChanged = true;
                                    }
                                    layer.data![changedCell + changedCellOffset] = appliedTile + appliedTileOffset;
                                }
                            }
                        }
                    }
                }
                if(isAutotileChanged) {
                    // Check and update proximity value for neighbours
                    for(let direction of CardinalDirections) {
                        let neighbourCell = ClientUtils.getTargetGID(changedCell, direction, size)
                        if(MapManager.isThisAnAutotileCell(neighbourCell, layer, this.map)) {
                            if(layer.autotileData === undefined) {
                                layer.autotileData = [];
                            }
                            layer.autotileData[neighbourCell!] = MapManager.getAutotileProximityValue(neighbourCell!, size, layer.data![neighbourCell!]!, layer);
                        }
                    }
                }
                break;
            case Constant.EditMode.ERASE:
                if (pickerArea === undefined) {
                    pickerArea = {
                        x: 0, y: 0, w: 0, h: 0
                    };
                }
                for (let j = 0; j <= pickerArea.h; j++) {
                    for (let i = 0; i <= pickerArea.w; i++) {
                        if (i_apply + i < this.map.width) {
                            let changedCellOffset: number = i + j * this.map.width;
                            if (layer.data![changedCell + changedCellOffset] !== undefined) {
                                changed = true;
                                layer.data![changedCell + changedCellOffset] = null;
                            }
                        }
                    }
                }
                break;
            case Constant.EditMode.EVENTS:
                let result: boolean = this.selectEvent(i_apply, j_apply);
                if(result) {
                    this.renderingConfiguration.selectEventCell = {
                        i: i_apply,
                        j: j_apply    
                    }
                }
                break;
            default:
                console.error("Unexpected case");
        }
        //TODO manage cursor dragging for selections > 1x1
        return changed;
    }

    selectEvent(i: number, j: number): boolean {
        let confirmed: boolean = MapperPage.confirmCloseEventDetails();
        if(!confirmed) {
            return false;
        }
        let event: IEvent | undefined;
        if(!Utils.isEmpty(this.map.events)) {
            for(let e of this.map.events) {
                if(e.i === i && e.j === j) {
                    event = <IEvent> e;
                    break;    
                }
            }
        }
        if(event === undefined) {
            event = DataDefaults.getEvent();
            event.i = i;
            event.j = j;  
        }
        MapperPage.loadEvent(event, false);
        return true;
    }

    getSelectionArea(): IRectangle | undefined {
        if (!Utils.isEmpty(this.tilePicker)) {
            return this.tilePicker.getSelectionArea();
        } else {
            return undefined;
        }
    }

    protected renderDynamicElements(minRow: number, maxRow: number, minColumn: number, maxColumn: number, i: number, j: number, onTop: boolean) {
        // Render events
        if (!Utils.isEmpty(this.map.events)) {
            for (let event of this.map.events) {
                try {
                    EventManager.render(this.grid, <IEvent> event, this.context, false);
                } catch(e) {
                    console.error(e);    
                }
            }
        }
    }

    protected applyLayerCustomizations(layerIndex: number) {
        // Layers below the currently selected layer will be partially transparent
        if (layerIndex > this.activeLayer) {
            this.context.globalAlpha = MapperScene.UPPER_LEVEL_OPACITY;
        } else if (layerIndex < this.activeLayer) {
            this.context.globalAlpha = MapperScene.LOWER_LEVEL_OPACITY;
        }
    };

    protected removeLayerCustomizations(layerIndex: number) {
        this.context.globalAlpha = 1;
    };

    resizeMap(columns: number, rows: number) {
        MapManager.resizeMap(this.map, columns, rows);
        (<StaticGrid> this.grid).updateSize(columns, rows);
        MapperScene.onMapSizeChange(this);
    }

    shiftMap(i: number, j: number): ISize {
        MapManager.shiftMap(this.map, i, j);
        (<StaticGrid> this.grid).updateSize(this.map.width, this.map.height);
        MapperScene.onMapSizeChange(this);
        return {
            w: this.map.width,
            h: this.map.height
        }
    }
    
    changeMap(map: IMap, callback: { (scene: AbstractScene): void }): boolean {
        // Check if changing map would discard changes
        if(this.editMode === Constant.EditMode.EVENTS) {
            if(!MapperPage.confirmCloseEventDetails()) { 
                return false;
            }
        }
        let mapperScene = this;
        super.changeMap(map, function(scene: AbstractScene) {
            callback(scene);
            mapperScene.resizeMap(map.width, map.height);
        });
        return true;   
    }

    static onMapSizeChange(scene: MapperScene) {
        let inputRange: HTMLInputElement = <HTMLInputElement>document.getElementById("zoom");
        (<StaticGrid> scene.grid).selectScale(+inputRange.value);
        scene.changeScale();
        scene.requestedNewFrame = true;
    }

    setTilePicker(tilePicker: TilePickerScene) {
        this.tilePicker = tilePicker;
    }

    setActiveLayer(activeLayer: Constant.MapLayer) {
        this.activeLayer = activeLayer;
        this.requestedNewFrame = true;
    }

    setSelectedEventCell(cell?: ICell) {
        this.renderingConfiguration.selectEventCell = cell;    
    }
    
    setEditMode(editMode: Constant.EditMode) {
        this.editMode = editMode;
        this.requestedNewFrame = true;
    }
    getMap(): IMap {
        return this.map;
    }
}