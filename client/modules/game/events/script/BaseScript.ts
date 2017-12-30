/// <reference path="AbstractScript.ts" />

namespace Script {
    
    export const DEFAULT_MESSAGE = "msg";

    export class BaseScript extends AbstractScript {
        
        /**
         * Show a dialog, reading the text from event's mem.
         * Text is saved with a standard key:
         * > "mgs" + current state (eg: mgs1, msg2, msg3)
         */
        public speak(): void {
            let message: string = this.loadMem(DEFAULT_MESSAGE + this.event.currentState);
            this.dialog(message);        
        };
    };
}
