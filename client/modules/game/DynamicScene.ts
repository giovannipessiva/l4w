/// <reference path="../core/AbstractScene.ts" />

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
    FPSPerformance = [22, 21, 20];

    paused = false;

    hero: Actor.Event;
    events: Actor.Event[];

    constructor(display: DynamicDisplay) {
        super(display);        
        this.hero = new Actor.Event();
    }

    protected mainGameLoop_pre() {
        if (this.paused) {
            return false;
        }
        if (!super.mainGameLoop_pre()) {
            return false;
        }

        //TODO rimuovere a regime
        this.context.fillStyle = '#000000';
        this.context.font = 'bold 40px Arial';
        this.context.fillText("(it's not ready yet)", 160, 260);

        var time = Time.getTime();
        this.hero.update(this.events, this.map, time);
        for (var event in this.events) {
            event.update(this.events, this.map, time);
        }

        return true;
    }

    protected mainGameLoop_post() {
        super.mainGameLoop_post();
        this.renderFPS();
    }

    togglePause(pause?: boolean) {
        if (pause != null) {
            this.paused = pause;
        } else {
            this.paused = !this.paused;
        }
    }

    toggleFPS(enable?: boolean) {
        if (enable != null) {
            this.renderingOptions.showFPS = enable;
        } else {
            this.renderingOptions.showFPS = !this.renderingOptions.showFPS;
        }
    }

    private renderFPS() {
        var seconds = Math.floor(Time.getTime() / 1000);
        if (seconds == this.secondFPS) {
            this.countFPS++;
        } else {
            this.lastFPS = this.countFPS;
            this.countFPS = 1;
            this.secondFPS = seconds;
            if (this.autoFPS == true) {
                this.FPSPerformance.shift();
                this.FPSPerformance[2] = this.lastFPS;
                var avg: number = (this.FPSPerformance[0] + this.FPSPerformance[1] + this.FPSPerformance[2]) / 3;
                this.FPS = Math.ceil(avg) + 2;
            }
        }

        if (this.renderingOptions.showFPS) {
            this.context.fillStyle = Constant.Color.RED;
            this.context.font = "bold 18px Arial";
            this.context.fillText("" + this.lastFPS, 10, 20);
        }
    }
}