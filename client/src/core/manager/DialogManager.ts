import { LanguageEnum, } from "../../../../common/src/model/Commons";
import { DialogInputTypeEnum, IDialogEdge, IDialogNode, IGenericMessage, IGenericMessageValue } from "../../../../common/src/model/Dialog";
import { IEvent } from "../../../../common/src/model/Event";
import { ResourceType } from "../../../../common/src/Constants";
import { DynamicScene } from "../../game/DynamicScene";
import { Condition } from "../events/Conditions";
import { IBooleanCallback, IEmptyCallback } from "../util/Commons";
import { Input } from "../util/Input";
import { Resource } from "../util/Resource";
import { Utils } from "../util/Utils";
import { IConfig } from "../../../../common/src/model/Save";
import { getRandomString } from "../../../../common/src/Utils";

/**
 * Helper class for managing dialogs and alfanumeric input/output
 */
export namespace DialogManager {

    const DIALOG_FRAME_ID = "dialog1";
    const DIALOG_FACE_ID = "dialogFace";
    const DIALOG_NAME_ID = "dialogName";
    const DIALOG_AREA_ID = "dialogArea";
    const DIALOG_EDGE_AREA_ID = "dialogEdgeArea";
    const DIALOG_USER_INPUT_ID = "userInput";

    const MIN_TIME_BEFORE_MANAL_CLOSE = 500;

    let genericMessages: Map<number, IGenericMessage>;

    let onDialogClose: IEmptyCallback | undefined;

    /**
     * Method called when the dialog is to be closed
     */
    export function closeDialog(stopIt: boolean = false) {
        let dlgFrame: HTMLElement | null = document.getElementById(DIALOG_FRAME_ID); 
        if(dlgFrame === null) {
            console.error("Element not foud: " + DIALOG_FRAME_ID);
            return;
        }
        dlgFrame.classList.remove("visibleFadeIn");
        dlgFrame.classList.add("hiddenFadeOut");
        if(onDialogClose !== undefined && !stopIt) {
            onDialogClose();
        }
    };

    /**
     * Defines how the dialog will be closed
     */
    function defineClosingCondition(closingTimeout?: number): void {
        if(closingTimeout !== undefined) {
            // Close on timeout
            setTimeout(function() {
                closeDialog();
            }, closingTimeout);
        } else {
            // Close on user action, not less than "MIN_TIME_BEFORE_MANAL_CLOSE" ms after showing it
            setTimeout(function() {
                Input.addActionCallback(function() {
                    closeDialog();
                })
            }, MIN_TIME_BEFORE_MANAL_CLOSE);
        }
    }

    export function loadString(stringId: number, language: LanguageEnum, callback: (str?: string) => void): void {
        if(isNaN(stringId)) {
            callback();
            return;    
        }
        Resource.load(stringId + "", ResourceType.STRING, function(resourceText: any) {
            if (Utils.isEmpty(resourceText) || typeof resourceText !== "string") {
                console.error("Error while loading string: " + stringId);
                callback();
            } else {
                callback(resourceText);
            }
        }, language);
    }

    export function saveString(id: number, strings: string[], callback: (nmb?: number) => void) {
        let value : string = JSON.stringify(strings);
        Resource.save(id + "", value, ResourceType.STRING, function(stringId?: string, result?: boolean) {
            if(stringId !== undefined) {
                let id = parseInt(stringId);
                if (isNaN(id!)) {
                    console.error("Error while saving string");
                    callback();
                    return;
                }
            }
            callback(id);
        });
    }

    export function loadDialog(dialogId: number, language: LanguageEnum, callback: (dlg?: IDialogNode) => void): void {
        if(isNaN(dialogId)) {
            callback();
            return;    
        }
        Resource.load(dialogId + "", ResourceType.DIALOG, function(resourceText) {
            if (Utils.isEmpty(resourceText) || typeof resourceText !== "string") {
                console.error("Error while loading dialog: " + dialogId);
                callback();
            } else {
                let dialog: IDialogNode = <IDialogNode> JSON.parse(resourceText);
                if(dialog.face === "H") {
                    dialog.face = "fart.png"; //TODO get from current hero faceset
                }
                callback(dialog);
            }
        });
    }

    export function loadGenericMessages(genericMessageId: number, language: LanguageEnum, callback: IBooleanCallback): void {
        if(isNaN(genericMessageId)) {
            callback(false);
            return;    
        }
        Resource.load(genericMessageId + "", ResourceType.GENERIC_MESSAGE, function(resourceText) {
            if (Utils.isEmpty(resourceText) || typeof resourceText !== "string") {
                console.error("Error while loading dialog: " + genericMessageId);
                callback(false);
            } else {
                genericMessages = <Map<number, IGenericMessage>> JSON.parse(resourceText);
                callback(true);
            }
        });
    }
    
    export function showComplexDialog(scene: DynamicScene, hero: IEvent, name: string, dialogId: number, cfg: IConfig, callback: IEmptyCallback) {
        loadDialog(dialogId, cfg.lang, function(dialog?: IDialogNode) {
            if(dialog === undefined) {
                console.error("Error while loading dialog: " + dialogId);
            } else {
                showDialog(scene, hero, name, dialog, cfg.skin, callback);
            }
        });
    }
    
    export function showSimpleDialog(scene: DynamicScene, hero: IEvent, name: string, messageId: number, cfg: IConfig, callback: IEmptyCallback) {
        loadString(messageId, cfg.lang, function(str) {
            let dialog = getNewDialogNode();
            dialog.message = str;
            showDialog(scene, hero, name, dialog, cfg.skin, callback);
        });
    }

    function showDialog(scene: DynamicScene, hero: IEvent, name: string, dialog: IDialogNode, skin: string, callback: IEmptyCallback): void {     
        let dlgFrame: HTMLElement | null = document.getElementById(DIALOG_FRAME_ID);
        let dlgFace: HTMLElement | null = document.getElementById(DIALOG_FACE_ID);
        let dlgName: HTMLElement | null = document.getElementById(DIALOG_NAME_ID);
        let dlgArea: HTMLElement | null = document.getElementById(DIALOG_AREA_ID);
        
        if(dlgFace === null) {
            console.error("Element not foud: " + DIALOG_FACE_ID);
            return;
        }
        if(dlgName === null) {
            console.error("Element not foud: " + DIALOG_NAME_ID);
            return;
        }
        if(dlgArea === null) {
            console.error("Element not foud: " + DIALOG_AREA_ID);
            return;
        }      
        if(dlgFrame === null) {
            console.error("Element not foud: " + DIALOG_FRAME_ID);
            return;
        }
    
        dlgFrame.classList.replace("hiddenFadeOut", "visibleFadeIn");
        if(Utils.isEmpty(skin)) {
            console.error("skin is not defined!");
        } else {
            dlgFrame.style.borderImageSource = "url('/assets/skin/" + skin + "')";
        }
        dlgFrame.style.visibility = "visible";

        let faceset: string | undefined = dialog.face;
        if(faceset !== undefined) {
            dlgFace.style.display = "block";
            dlgFace.style.backgroundImage = "url('/assets/faceset/" + faceset + "')";
        } else {
            dlgFace.style.display = "none";
        }
        dlgName.innerText = name;

        let dialogMessage = getMessage(dialog);
        if(dialogMessage !== undefined) {
            dlgArea.innerText = dialogMessage;
        } else {
            dlgArea.innerText = "";
        }
        let dialogEdgeArea: HTMLElement | null = document.getElementById(DIALOG_EDGE_AREA_ID);
        if(dialogEdgeArea === null) {
            console.error("Element not foud: " + DIALOG_EDGE_AREA_ID);
            return;
        }
        // Clean old values
        while (dialogEdgeArea.firstChild) {
            dialogEdgeArea.removeChild(dialogEdgeArea.firstChild);
        }
        onDialogClose = undefined;
        let activeEdges: IDialogEdge[] = [];
        if(dialog.edges !== undefined) {
            for(let edge of dialog.edges) {
                if(isConditionActivable(edge.condition)) {
                    activeEdges.push(edge);
                }
            }
        }
        
        /**
         * Follow a dialog edge
         */
        let selectEdge = function (edge: IDialogEdge) {
            if(edge.action !== undefined) {
                // Before following the edge to next node,
                // execute its action
                let parameter: string | undefined;
                let input: HTMLElement | null = document.getElementById(DIALOG_USER_INPUT_ID);
                if(input !== null) {
                    // Read user input, sanitize it and use it
                    parameter = (<HTMLInputElement> input).value;
                    parameter = parameter.trim();
                    parameter = Input.escapeText(parameter);
                } else {
                    // No input, block this action
                    console.warn("Input required");
                    return;
                }
                launchAction(edge, scene, hero, parameter);
            } else if(edge.node !== undefined) {
                // Follow the edge to next node
                showDialog(scene, hero, name, edge.node, skin, callback);
            } else {
                // Nothing to do here, close the dialog
                defineClosingCondition(0);
            }
        };

        if(activeEdges.length === 0) {
            // No edges to follow, the dialog will be closed
            defineClosingCondition(dialog.closingTimeout);
        } else {
            if(activeEdges.length === 1 && activeEdges[0].message === undefined) {
                if(activeEdges[0].inputType === undefined) {
                    // Nothing to show, will follow edge when the dialog is closed
                    onDialogClose = function() {
                        selectEdge(activeEdges[0]);
                    }
                } else {
                    // Request input
                    let input: HTMLInputElement = new HTMLInputElement();
                    switch(activeEdges[0].inputType) {
                        case DialogInputTypeEnum.INTEGER:
                            input.type = "number";
                            break;
                        case DialogInputTypeEnum.TEXT:
                            input.type = "text";
                            break;
                        default:
                            console.error("Unexpected DialogInputType for edge: " + activeEdges[0].id);
                    }
                    input.id = DIALOG_USER_INPUT_ID;
                    dialogEdgeArea.appendChild(input);   
                }
            } else {
                //Display active edges messages
                for(let edge of activeEdges) {
                    let div: HTMLDivElement = new HTMLDivElement();
                    if(edge.message !== undefined) {
                        div.innerText = edge.message; 
                    }
                    div.onclick = function() {
                        selectEdge(edge);
                    }
                    dialogEdgeArea.appendChild(div);
                }
            }
        }
    }

    function isConditionActivable(condition: string | undefined, conditionParams?: string): boolean {
        if(condition === undefined) {
            return true;
        }
        if(!(condition in Condition)) {
            console.error("Condition not found: \"" + condition + "\", on event.");
            return false;    
        }
        return Condition[condition](conditionParams);
    }

    function getMessage(dialog: IDialogNode): string | undefined {
        let message: string | undefined;
        if(dialog.genericMessage !== undefined) {
            message = resolveGenericMessage(dialog.genericMessage);
        }
        if(message === undefined) {
            message = dialog.message;
        }
        if(message !== undefined) {
            message = resolveStringVariables(message);
        }
        return message;
    }

    function resolveGenericMessage(genericMessage: number): string | undefined {
        let generic = genericMessages.get(genericMessage);
        if(generic !== undefined && !Utils.isEmpty(generic.values)) {
            let activeValues: IGenericMessageValue[];
            if(generic.condition === undefined) {
                // No condition defined, therefore all the values are valid
                activeValues = generic.values;
            } else {
                // Check the conditions for every value, discard invalid values
                activeValues = generic.values.filter(function(val: IGenericMessageValue) {
                    return isConditionActivable(generic!.condition, val.conditionParams);
                });
            }
            let selectedVal;
            if(activeValues.length === 0) {
                return undefined;    
            } else if(activeValues.length === 1) {
                selectedVal = 0; 
            } else {
                // Select a random value
                selectedVal = Utils.getRandomInteger(0, activeValues.length - 1);
            }
            return activeValues[selectedVal].message;
        }
        return undefined;
    }

    function resolveStringVariables(message: string): string {
        //TODO check if message contains special chars for variables, and resolve them
        return message;
    }

    /**
     * Execute an action associated to an edge 
     */
    export function launchAction(edge: IDialogEdge, scene: DynamicScene, hero: IEvent, parameter?: string): boolean {
        let scriptClassName = edge.script;
        if(scriptClassName === undefined) {
            return false;
        }
        let scriptClass = new scriptClassName[scriptClassName](event, hero, scene);
        if (Utils.isEmpty(scriptClass)) {
            console.error("Script \"" + scriptClassName + "\" not found (dialog edge: " + edge.id + ")");
            return false;
        }
        let action = edge.action;
        if(action === undefined) {
            return false;
        }
        if (!(action in scriptClass)) {
            console.error("Action \"" + action + "\" not found in script \"" + scriptClassName + "\" (dialog edge: " + edge.id + ")");
            return false;
        }
        try {
            return scriptClass[action](parameter);
        } catch(e) {
            console.error(e);
        }
        return false;
    };

    export function getNewDialogNode(): IDialogNode {
        return {
            id: getRandomString()
        };
    }

    export function getNewDialogEdge(): IDialogEdge {
        return {
            id: getRandomString()
        };
    }
};