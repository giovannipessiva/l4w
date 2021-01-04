import { AbstractScript } from "../AbstractScript"
import { emptyFz } from "../../../util/Commons"

export class Script1 extends AbstractScript {
    
    public static tooltip: string = "Script for tests";    

    public testAction() {
        this.showSimpleDialog("2", emptyFz);
    }
    
    public giantTest() {
        this.showSimpleDialog("4", emptyFz);
        let script = this;
        this.wait(1000).then(function(){
            script.stepFromTarget(script.hero);
        });
        this.incrementStateVar();
    }
    
    public giantTest2() {
        this.showSimpleDialog("5", emptyFz);
        let script = this;
        this.wait(1000).then(function(){
            script.stepFromTarget(script.hero);
        });
        this.incrementStateVar();
    }
            
    public giantTest3() {
        this.showSimpleDialog("6", emptyFz);
        let giant = this;
        this.moveToTarget({ i: 2, j: 4 }, function() {
            giant.setStateVar(0);
        });
    }
    
    public move3ToRight() {
        this.moveToTarget({
            i: this.event.i + 3,
            j: this.event.j
        });
    }
}