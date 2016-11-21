/**
 * Module for time utils
 */
namespace Time {
    
    export function getTime() {
        var d = new Date();
        return d.getTime();
    };

    export class Timer {

        private startTime: number = 0;

        /**
         * Create a new timer, with an optional offset in the past
         */
        Timer(offset: number = 0) {
            this.startTime = getTime() - offset;
        }

        getDiff(currentTime: number) {
            return currentTime - this.startTime;
        }
        
        lapse() {
            var t = getTime();
            var diff = t - this.startTime;
            return diff;
        }

        update() {
            var t = getTime();
            var diff = t - this.startTime;
            this.startTime = t;
            return diff;
        }
        
        isActive() {
            return this.startTime !== 0;
        }

        stop() {
            this.startTime = 0;
        }
    }
}