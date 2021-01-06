import { AbstractScript } from "../AbstractScript";

export class Asgan extends AbstractScript {

    public static tooltip: string = "Script for Asgan, in the woods map";    

    public triggerQuest() {
        this.setStateVar(1);
    }
}
