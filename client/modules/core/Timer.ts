/**
 * Module for time utils
 */
module Time {
    export function getTime() {
        var d = new Date();
        return d.getTime();
    };

    export class Timer {

        startTime;

        start() {
            this.startTime = getTime();
        }

        getDiff(currentTime) {
            return currentTime - this.startTime;
        }

        update() {
            var t = getTime();
            var diff = t - this.startTime;
            this.startTime = t;
            return diff;
        }

        isActive() {
            if (this.startTime != 0)
                return true;
            else
                return false;
        }

        stop() {
            this.startTime = 0;
        }
    }
}