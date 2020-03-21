import { AbstractScript } from "../AbstractScript"

export class Transport extends AbstractScript {

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
            j: 16
        });
    };
};