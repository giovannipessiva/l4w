import { AbstractScript } from "../AbstractScript";
import { Utils } from "../../../util/Utils";
import { emptyFz } from "../../../util/Commons";
import { IEvent } from "../../../../../common/model/Event"
import { DynamicScene } from "../../../../game/DynamicScene"

export const DEFAULT_MESSAGE = "msg";
export const DEFAULT_DIALOG = "dlg";

export class BaseScript extends AbstractScript {

    public static tooltip: string = "Basic script with simple actions, mainly for generic NPCs";    

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
    public speak(): void {
        let message: string | undefined = this.loadMem(DEFAULT_MESSAGE + (this.event.currentState + 1));
        if(Utils.isEmpty(message)) {
            message = this.loadMem(DEFAULT_MESSAGE);
        }
        this.showSimpleDialog(message!, emptyFz);        
    };

    /**
     * Show a complex dialog, reading the dialog id from event's mem.
     * Dialog id is saved with a standard key:
     * > "dlg" + current state (eg: dlg1, dlg2, dlg3)
     * If the key does not exists, it tries using the default key:
     * > "dlg"
     */
    public dialog(): void {
        let dialog: string | undefined = this.loadMem(DEFAULT_DIALOG + (this.event.currentState + 1));
        if(Utils.isEmpty(dialog)) {
            dialog = this.loadMem(DEFAULT_DIALOG);
        }
        this.showComplexDialog(dialog!, emptyFz); 
    }
};