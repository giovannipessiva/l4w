/// <reference path="AbstractScript.ts" />

namespace Script {
    
    export const DEFAULT_MESSAGE = "msg";

    export class BaseScript extends AbstractScript {
        
        /**
         * Show a dialog, reading the text from event's mem.
         * Text is saved with a standard key:
         * > "mgs" + current state (eg: mgs1, msg2, msg3)
         * If the key does not exists, it tries using the default key:
         * > "msg"
         */
        public speak(): void {
            let message: string = this.loadMem(DEFAULT_MESSAGE + (this.event.currentState + 1));
            if(Utils.isEmpty(message)) {
                message = this.loadMem(DEFAULT_MESSAGE);
            }
            this.dialog(message);        
        };
    };
}
