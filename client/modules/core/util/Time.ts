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
        constructor(offset: number = 0) {
            this.savedTime = now() - offset;
        }

        /**
         * Return the difference
         */
        lapse() {
            return now() - this.savedTime;
        }
    }
}
