import { AbstractScript } from "../AbstractScript"
import { emptyFz } from "../../../util/Commons"

export class Script1 extends AbstractScript {
    
    public static tooltip: string = "Script for tests";    

    public testAction(): boolean {
        this.showSimpleDialog(2, emptyFz);
        return true;
    }
    
    public giantTest(): boolean {
        this.showSimpleDialog(4, emptyFz);
        let script = this;
        this.wait(1000).then(function(){
            script.stepFromTarget(script.hero);
        });
        this.incrementStateVar();
        return true;
    }
    
    public giantTest2(): boolean {
        this.showSimpleDialog(5, emptyFz);
        let script = this;
        this.wait(1000).then(function(){
            script.stepFromTarget(script.hero);
        });
        this.incrementStateVar();
        return true;
    }
            
    public giantTest3(): boolean {
        this.showSimpleDialog(6, emptyFz);
        this.moveToTarget({ i: 0, j: 0 });
        this.setStateVar(0);
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