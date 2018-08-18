/// <reference path="../util/Constant.ts" />
/// <reference path="../../../../common/src/model/Map.ts" />
/// <reference path="../../../../common/src/model/Dialog.ts" />

/**
 * Helper class for managing dialogs and alfanumeric input/output
 */
namespace DialogManager {
    
    export const languages: string[] = [];
    languages[LanguageEnum.IT] = "Italiano 🇮🇹";
    languages[LanguageEnum.EN] = "English 🇬🇧";

    const DIALOG_FRAME_ID = "dialog1";
    const DIALOG_FACE_ID = "dialogFace";
    const DIALOG_NAME_ID = "dialogName";
    const DIALOG_AREA_ID = "dialogArea";
    const DIALOG_EDGE_AREA_ID = "dialogEdgeArea";
    const DIALOG_USER_INPUT_ID = "userInput";

    let genericMessages = new Map<number, IGenericMessage[]>();

    let onDialogClose: IEmptyCallback | undefined;

    /**
     * Method called when the dialog is to be closed
     */
    export function closeDialog() {
        let dlgFrame: HTMLElement | null = document.getElementById(DIALOG_FRAME_ID);      
        if(dlgFrame === null) {
            console.error("Element not foud: " + DIALOG_FRAME_ID);
            return;
        }
        dlgFrame.style.display = "none";
        if(onDialogClose !== undefined) {
            onDialogClose();
        }
    };

    export function loadString(stringId: number, language: LanguageEnum, callback: (str?: string) => void): void {
        if(isNaN(stringId)) {
            callback();
            return;    
        }
        Resource.load(stringId + "", Resource.TypeEnum.STRING, function(resourceText) {
            if (Utils.isEmpty(resourceText)) {
                console.error("Error while loading string: " + stringId);
                callback();
            } else if(typeof resourceText === "string") {
                callback(resourceText);
            }
        });
    }

    export function saveString(id: number, strings: string[], callback: (nmb?: number) => void) {
        let value : string = JSON.stringify(strings);
        Resource.save(id + "", value, Resource.TypeEnum.STRING, function(stringId: number) {
            if (Utils.isEmpty(stringId)) {
                console.error("Error while saving string");
                callback();
            } else {
                callback(stringId);
            }
        });
    }

    export function show(scene: DynamicScene, hero: IEvent, name: string, messageId: number, language: LanguageEnum, skin: string, callback: IEmptyCallback, faceset?: string) {
        //TODO non deve ricevere messageId, deve ricevere un dialogId
        loadString(messageId, language, function(str) {
            let dialog: IDialogNode = {
                id: 0,
                message: str
            };    
            //TODO load DialogNode
            showDialog(scene, hero, name, dialog, skin, callback, faceset);
        });
    }
    
    function showDialog(scene: DynamicScene, hero: IEvent, name: string, dialog: IDialogNode, skin: string, callback: IEmptyCallback, faceset?: string): void {     
        var dlgFrame: HTMLElement | null = document.getElementById(DIALOG_FRAME_ID);
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
        } else {
            // TODO il messaggio deve sparire solo quanto l'utente clicca
            setTimeout(function() {
                closeDialog();
            }, 3000);
        }

        dlgFrame.style.display = "block";
        dlgFrame.style.borderImageSource = "url('/assets/skin/" + skin + "')";
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

        function selectEdge(edge: IDialogEdge) {
            let input: HTMLElement | null = document.getElementById(DIALOG_USER_INPUT_ID);
            if(input !== null) {
                launchAction(edge, scene, hero, (<HTMLInputElement> input).value);                
            }
            if(edge.node !== undefined) {
                showDialog(scene, hero, name, edge.node, skin, callback, faceset);
            }
        }

        if(activeEdges.length > 0) {
            if(activeEdges.length === 1 && activeEdges[0].message === undefined) {
                if(activeEdges[0].inputType === undefined) {
                    // Nothing to show
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
                        div.innerText = edge.message!; 
                    }
                    div.onclick = function() {
                        selectEdge(edge);
                    }
                    dialogEdgeArea.appendChild(div);
                }
            }
        }
    }

    function isConditionActivable(condition: string): boolean {
        if(condition === undefined) {
            return true;
        }
        if(!(condition in Condition)) {
            console.error("Condition not found: \"" + condition + "\", on event.");
            return false;    
        }
        return Condition[condition]();
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
        if(generic !== undefined) {
            for(let i = generic.values.length - 1; i>= 0; i--) {
                if(isConditionActivable(generic.values[i].condition)) {
                    return generic.values[i].messageId;
                }
            }
        }
        return undefined;
    }

    function resolveStringVariables(message: string): string {
        //TODO check if message contains special chars for variables, and resolve them
        return message;
    }

    export function launchAction(edge: IDialogEdge, scene: DynamicScene, hero: IEvent, parameters?: any): boolean {
        let script = edge.script;
        if(script === undefined) {
            return false;
        }
        let scriptClass = new Script[script](event, hero, scene);
        if (Utils.isEmpty(scriptClass)) {
            console.error("Script \"" + script + "\" not found (dialog edge: " + edge.id + ")");
            return false;
        }
        let action = edge.action;
        if(action === undefined) {
            return false;
        }
        if (!(action in scriptClass)) {
            console.error("Action \"" + action + "\" not found in script \"" + script + "\" (dialog edge: " + edge.id + ")");
            return false;
        }
        try {
            if (Utils.isEmpty(parameters)) {
                return scriptClass[action]();
            } else {
                return scriptClass[action](parameters);
            }
         } catch(e) {
            console.error(e);
         }
        return false;
    };
};