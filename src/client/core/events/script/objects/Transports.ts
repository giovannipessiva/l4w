import { DirectionEnum } from "../../../../../common/Commons";
import { AbstractScript } from "../AbstractScript"

export class Transports extends AbstractScript {

    public static tooltip: string = "Provide transportation from one map to another";

    public forest() {
        this.goToMap("1", {
            i: 21,
            j: 1
        });
    };
    
    public farm() {
        this.goToMap("0", {
            i: 15,
            j: 21
        });
        this.hero.movementDirection = DirectionEnum.UP;
    };

    public farmOutsideHouse() {
        this.goToMap("0", {
            i: 13,
            j: 16
        });
        this.hero.movementDirection = DirectionEnum.DOWN;
    };

    public house() {
        this.goToMap("3", {
            i: 13,
            j: 12
        });
        this.hero.movementDirection = DirectionEnum.DOWN;
    };
};