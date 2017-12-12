/// <reference path="../AbstractScript.ts" />

namespace Script {

    export class Script1 extends AbstractScript {

        public testAction(): boolean {
            this.dialog("Oink oink");
            return true;
        }
        
        public giantTest(): boolean {
            let context = this;
            this.dialog("Leave me alone!");
            this.wait(1, true).then(function() {
                context.stepFromTarget(context.hero);
            });
            return true;
        }
    }
}