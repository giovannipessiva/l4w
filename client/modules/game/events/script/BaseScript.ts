/// <reference path="AbstractScript.ts" />

namespace Script {
    
    export const DEFAULT_MESSAGE = "msg";

    export class BaseScript extends AbstractScript {
        
        public speak(): void {
            let message: string = this.loadMem(DEFAULT_MESSAGE);
            this.dialog(message);        
        };
    };
}
