import { ClientUtils } from "../../../util/ClientUtils";
import { AbstractScript } from "../AbstractScript";

export class Ann extends AbstractScript {

    static readonly eventId = 2;
    public static tooltip: string = "Script for Ann, in the farm map";    

    public faceTheHero() {
        let ann = this.getEventById(Ann.eventId);
        if(ann === undefined) {
            console.error("Cannot find Ann! id:" + Ann.eventId);
            return;
        }
        ann.states[ann.currentState].direction = ClientUtils.getDirection(this.hero, ann);
    }
}
