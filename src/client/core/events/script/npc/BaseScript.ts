import { AbstractScript } from "../AbstractScript";
import { emptyFz } from "../../../util/Commons";
import { IEvent } from "../../../../../common/model/Event"
import { DynamicScene } from "../../../../game/DynamicScene"
import { Utils } from "../../../../../common/Utils";
import { ICell } from "../../../../../common/Commons";

export const DEFAULT_MESSAGE = "msg";
export const DEFAULT_DIALOG = "dlg";

export class BaseScript extends AbstractScript {

    public static tooltip: string = "Basic script with simple actions";    

    public constructor(event: IEvent, hero: IEvent, scene: DynamicScene) {
        super(event, hero, scene);
    }
    /**
     * Show a simple dialog, reading the string id from event's mem.
     * String id is saved with a standard key:
     * > "mgs" + current state (eg: mgs1, msg2, msg3)
     * If the key does not exists, it tries using the default key:
     * > "msg"
     */
    public speak() {
        let message: string | undefined = this.loadMem(DEFAULT_MESSAGE + (this.event.currentState + 1));
        if(Utils.isEmpty(message)) {
            message = this.loadMem(DEFAULT_MESSAGE);
        }
        this.showSimpleDialog(message!, emptyFz);        
    };

    /**
     * Show a complex dialog, if the event state contains one
     */
    public dialog() {
        let currentEventState = this.event.states[this.event.currentState];
        if(currentEventState.dialog !== undefined) {
            this.showComplexDialog(currentEventState.dialog, emptyFz);
        }
    }

    public flee(): Promise<ICell> {
        let _this = this;
        return new Promise<ICell>(function(resolve, reject) {
            _this.stepFromTarget(_this.hero, _this.event, resolve);
        });
    }
};