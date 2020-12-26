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

    public farmOutsideHouse(): void {
        this.goToMap("0", {
            i: 13,
            j: 16
        });
        this.hero.movementDirection = DirectionEnum.DOWN;
    };

    public house(): void {
        this.goToMap("3", {
            i: 13,
            j: 12
        });
        this.hero.movementDirection = DirectionEnum.DOWN;
    };
};