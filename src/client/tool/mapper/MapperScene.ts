import { AbstractStaticScene } from "../AbstractStaticScene"
import { StaticGrid } from "../StaticGrid"
import { Constant } from "../../core/util/Constant"
import { IRectangle, ICell } from "../../../common/model/Commons"
import { IEvent } from "../../../common/model/Event"
import { IMap } from "../../../common/model/Map"
import { Utils } from "../../core/util/Utils"
import { EventManager } from "../../core/manager/EventManager"
import { MapManager } from "../../core/manager/MapManager"
import { MapperPage } from "./MapperPage"
import { TilePickerScene } from "./TilePickerScene"
import { AbstractScene } from "../../core/AbstractScene"

/**
 * Scene implementation for managing Mapper logics
 */
export class MapperScene extends AbstractStaticScene {

    public static LOWER_LEVEL_OPACITY: number = 0.8;
    public static UPPER_LEVEL_OPACITY: number = 0.4;

    private activeLayer: Constant.MapLayer;
    private editMode: Constant.EditMode;

    private tilePicker: TilePickerScene;

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
        if(pickerArea === undefined) {

        }
        let changedCell: number = i_apply + j_apply * this.map.width;
        if (Utils.isEmpty(this.map.layers[this.activeLayer].data)) {
            this.map.layers[this.activeLayer].data = [];
        }
        switch (this.editMode) {
            case Constant.EditMode.APPLY:
                if (pickerArea === undefined) {
                    return false;
                }
                let tileColumns: number = Math.floor(this.map.tileset.imageWidth! / this.grid.cellW); //TODO questa non cambia mai, ottimizzabile
                let appliedTile: number = pickerArea.x + pickerArea.y * tileColumns;
                for (let j = 0; j <= pickerArea.h; j++) {
                    for (let i = 0; i <= pickerArea.w; i++) {
                        if (i_apply + i < this.map.width) {
                            let appliedTileOffset: number = i + j * tileColumns;
                            let changedCellOffset: number = i + j * this.map.width;
                            if (this.map.layers[this.activeLayer].data![changedCell + changedCellOffset] !== appliedTile + appliedTileOffset) {
                                changed = true;
                                this.map.layers[this.activeLayer].data![changedCell + changedCellOffset] = appliedTile + appliedTileOffset;
                            }
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
                            if (this.map.layers[this.activeLayer].data![changedCell + changedCellOffset] !== undefined) {
                                changed = true;
                                this.map.layers[this.activeLayer].data![changedCell + changedCellOffset] = undefined;
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
        //TODO gestisci trascinamento del picker
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
            event = EventManager.getNewEvent();
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

    resizeMap(rows: number, columns: number) {
        MapManager.resizeMap(this.map, rows, columns);
        (<StaticGrid> this.grid).updateSize(rows, columns);
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
            mapperScene.resizeMap(map.height, map.width);
            MapperScene.onMapSizeChange(mapperScene);
        });
        return true;   
    }

    static onMapSizeChange(scene: MapperScene) {
        let inputRange: HTMLInputElement = <HTMLInputElement>document.getElementById("zoom");
        (<StaticGrid> scene.grid).selectScale(+inputRange.value);
        (<StaticGrid> scene.grid).refreshCanvasSize();
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