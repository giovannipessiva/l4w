/// <reference path="../core/AbstractScene.ts" />
/// <reference path="../core/manager/ActorManager.ts" />
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

    hero: IActor;
    events: IActor[];

    constructor(grid: DynamicGrid, canvas: HTMLCanvasElement) {
        super(grid);
        this.context = <CanvasRenderingContext2D> canvas.getContext("2d");
    }

    protected mainGameLoop_pre() {
        if (!super.mainGameLoop_pre()) {
            return false;
        }

        var time = Time.now();
        ActorManager.update(this.hero, time);
        if (!Utils.isEmpty(this.events)) {
            for (var event of this.events) {
                ActorManager.update(event, time);
            }
        }

        return true;
    }

    protected mainGameLoop_post(boundariesX: IRange, boundariesY: IRange) {
        super.mainGameLoop_post(boundariesX, boundariesY);

        //TODO rimuovere a regime
        this.context.fillStyle = "#000000";
        this.context.font = "bold 40px Arial";
        this.context.fillText("(it's not ready yet)", this.grid.getCurrentTranslation().x + 160, this.grid.getCurrentTranslation().y + 260);

        this.renderFPS();
    }

    toggleFPS(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showFPS = enable;
        } else {
            this.renderingConfiguration.showFPS = !this.renderingConfiguration.showFPS;
        }
    }

    private renderFPS() {
        var seconds = Math.floor(Time.now() / 1000);
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
            this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20);
        }
    }

    protected renderInterLayerElements(layerIndex: number, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
    }

    protected renderTopLayerElements(minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        MapManager.renderUI(this.grid, this.context, this.renderingConfiguration, minRow, maxRow, minColumn, maxColumn);
    }

    public loadSave(save: ISave, callback: IBooleanCallback) {
        var scene = this;
        if (Utils.isEmpty(save)) {
            // Nothing to load
            if (Utils.isEmpty(this.map)) {
                // Load a stub map
                this.setMap(MapManager.getNewMap("stub"), function() {
                    scene.resetTranslation();
                    scene.focus.x = 0;
                    scene.focus.y = 0;
                    callback(false);
                });
            } else {
                // Leave current map
                callback(false);
            }
        } else {
            var scene = this;
            this.hero = save.hero;
			MapManager.loadMap(save.map, this.context.canvas, function(map: IMap) {  
                scene.setMap(map, function() {
                    scene.resetTranslation();
                    scene.focus.x = save.hero.x;
                    scene.focus.y = save.hero.y;
                    callback(true);
                });
            });
        }
    }

    public getSave(): ISave {
        if (Utils.isEmpty(this.map) || Utils.isEmpty(this.focus)) {
            return null;
        } else {
            return {
                id: 0,
                map: this.map.id,
                hero: this.hero
            };
        }
    }
}