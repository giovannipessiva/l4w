/**
 * Module for time utils
 */
namespace Time {
    
    export function now() {
        return (new Date()).getTime();
    };

    export class Timer {

        private savedTime: number = 0;

        /**
         * Create a new timer, with an optional offset in the past
         */
        Timer(offset: number = 0) {
            this.savedTime = now() - offset;
        }

        /**
         * Update the time and return the difference
         */
        lapse() {
            var t = now();
            var diff = t - this.savedTime;
            this.savedTime = t;
            return diff;
        }
    }
}