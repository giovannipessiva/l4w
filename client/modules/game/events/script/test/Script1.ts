/// <reference path="../AbstractScript.ts" />

namespace Script {

    export class Script1 extends AbstractScript {

        public testAction(): boolean {
            return this.dialog("Test test teeest"); 
        }
    }
}