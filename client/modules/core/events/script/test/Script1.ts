/// <reference path="../AbstractScript.ts" />

namespace Script {

    export class Script1 extends AbstractScript {
        
        public static tooltip: string = "Script for tests";    

        public testAction(): boolean {
            this.dialog("Oink oink");
            return true;
        }
        
        public giantTest(): boolean {
            let context = this;
            this.dialog("Leave me alone, little one");
            let script = this;
            this.wait(1000).then(function(){
                script.stepFromTarget(script.hero);
            });
            return true;
        }
        
        public move3ToRight(): boolean {
            this.moveToTarget({
                i: this.event.i + 3,
                j: this.event.j
            });
            return true;    
        }
    }
}