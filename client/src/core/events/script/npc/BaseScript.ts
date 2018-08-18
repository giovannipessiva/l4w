/// <reference path="../AbstractScript.ts" />

namespace Script {
    
    export const DEFAULT_MESSAGE = "msg";
    export const DEFAULT_DIALOG = "dlg";

    export class BaseScript extends AbstractScript {

        public static tooltip: string = "Basic script with simple actions, mainly for generic NPCs";    

        /**
         * Show a simple dialog, reading the string id from event's mem.
         * String id is saved with a standard key:
         * > "mgs" + current state (eg: mgs1, msg2, msg3)
         * If the key does not exists, it tries using the default key:
         * > "msg"
         */
        public speak(): void {
            let message: string = this.loadMem(DEFAULT_MESSAGE + (this.event.currentState + 1));
            if(Utils.isEmpty(message)) {
                message = this.loadMem(DEFAULT_MESSAGE);
            }
            let messageId: number = parseInt(message);
            if(Utils.isEmpty(messageId) || isNaN(messageId)) {
                return;    
            }
            this.showSimpleDialog(messageId, emptyFz);        
        };

        /**
         * Show a complex dialog, reading the dialog id from event's mem.
         * Dialog id is saved with a standard key:
         * > "dlg" + current state (eg: dlg1, dlg2, dlg3)
         * If the key does not exists, it tries using the default key:
         * > "dlg"
         */
        public dialog(): void {
            let dialog: string = this.loadMem(DEFAULT_DIALOG + (this.event.currentState + 1));
            if(Utils.isEmpty(dialog)) {
                dialog = this.loadMem(DEFAULT_DIALOG);
            }
            let dialogId: number = parseInt(dialog);
            if(Utils.isEmpty(dialogId) || isNaN(dialogId)) {
                return;    
            }
            this.showComplexDialog(dialogId, emptyFz); 
        }
    };
}
