/// <reference path="../core/AbstractScene.ts" />
/// <reference path="../core/manager/EventManager.ts" />
/*
 * Scene implementation for managing dynamic rendering
 */
class DynamicScene extends AbstractScene {

    FPS = 20;
    refreshInterval = 1000 / this.FPS;

    autoFPS = true;
    secondFPS = 0;
    countFPS = 0;
    lastFPS = 0;
    fpsPerformance = [22, 21, 20];

    hero: IEvent;
    events: IEvent[];

    constructor(grid: DynamicGrid) {
        super(grid);
    }

    protected mainGameLoop_pre() {
        if (!super.mainGameLoop_pre()) {
            return false;
        }

        var time = Time.getTime();
        EventManager.update(this.hero, time);
        if (!Utils.isEmpty(this.events)) {
            for (var event of this.events) {
                EventManager.update(event, time);
            }
        }

        return true;
    }

    protected mainGameLoop_post(boundariesX: IRange, boundariesY: IRange) {
        super.mainGameLoop_post(boundariesX, boundariesY);

        //TODO rimuovere a regime
        this.context.fillStyle = "#000000";
        this.context.font = "bold 40px Arial";
        this.context.fillText("(it's not ready yet)", 160, 260);

        this.renderFPS(boundariesX, boundariesY);
    }

    toggleFPS(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showFPS = enable;
        } else {
            this.renderingConfiguration.showFPS = !this.renderingConfiguration.showFPS;
        }
    }

    private renderFPS(boundariesX: IRange, boundariesY: IRange) {
        var seconds = Math.floor(Time.getTime() / 1000);
        if (seconds === this.secondFPS) {
            this.countFPS++;
        } else {
            this.lastFPS = this.countFPS;
            this.countFPS = 1;
            this.secondFPS = seconds;
            if (this.autoFPS === true) {
                this.fpsPerformance.shift();
                this.fpsPerformance[2] = this.lastFPS;
                var avg: number = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;
                this.FPS = Math.ceil(avg) + 2;
            }
        }

        if (this.renderingConfiguration.showFPS) {
            this.context.fillStyle = Constant.Color.RED;
            this.context.font = "bold 18px Arial";
            this.context.fillText("" + this.lastFPS, boundariesX.min + 10, boundariesY.min + 20);
        }
    }

    protected renderInterLayerElements(layerIndex: number, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
    }

    protected renderTopLayerElements(minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        this.mapEngine.renderUI(this.context, this.renderingConfiguration, minRow, maxRow, minColumn, maxColumn);
    }

    public loadSave(save: ISave, callback) {
        if (Utils.isEmpty(save)) {
            this.setMap(MapEngine.getNewMap("stub"), function() {
                callback();
            });
        } else {
            var scene = this;
            MapEngine.loadMap(save.map, this.context.canvas, function(map: IMap) {
                scene.setMap(map, function() {
                    callback();
                });
            });
        }
    }
}