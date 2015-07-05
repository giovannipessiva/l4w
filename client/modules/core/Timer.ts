/**
 * Module for time utils
 */
module Time {
    export function getTime() {
        var d = new Date();
        return d.getTime();
    };

    export class Timer {

        private startTime: number = 0;

        start() {
            this.startTime = getTime();
        }

        getDiff(currentTime: number) {
            return currentTime - this.startTime;
        }

        update() {
            var t = getTime();
            var diff = t - this.startTime;
            this.startTime = t;
            return diff;
        }

        isActive() {
            return this.startTime != 0;
        }

        stop() {
            this.startTime = 0;
        }
    }
}