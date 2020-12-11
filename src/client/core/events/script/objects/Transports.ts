import { DirectionEnum } from "../../../../../common/Commons";
import { AbstractScript } from "../AbstractScript"

export class Transports extends AbstractScript {

    public static tooltip: string = "Provide transportation from one map to another";

    public forest(): void {
        this.goToMap("1", {
            i: 15,
            j: 1
        });
    };
    
    public farm(): void {
        this.goToMap("0", {
            i: 15,
            j: 17
        });
        this.hero.movementDirection = DirectionEnum.UP;
    };
};