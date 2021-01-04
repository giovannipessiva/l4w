import { LanguageEnum, IBooleanCallback, IEmptyCallback } from "../../../common/Commons";
import { DialogInputTypeEnum, IDialogEdge, IDialogNode, IGenericMessage, IGenericMessageValue } from "../../../common/model/Dialog";
import { IEvent } from "../../../common/model/Event";
import { ResourceType } from "../../../common/Constants";
import { DynamicScene } from "../../game/DynamicScene";
import { Condition } from "../events/Conditions";
import { dialogScriptLauncherStub, IDialogScriptLauncher, INumberCallback } from "../util/Commons";
import { Input, registerNumericKeyListener } from "../util/Input";
import { Resource } from "../util/Resource";
import { ClientUtils } from "../util/ClientUtils";
import { IConfig } from "../../../common/model/Save";
import { DataDefaults } from "../../../common/DataDefaults";
import { Utils } from "../../../common/Utils";

/**
 * Helper class for managing dialogs and alfanumeric input/output
 */
export namespace DialogManager {

    const DIALOG_CONTAINER_ID = "dialogContainer";
    const DIALOG_FRAME_ID = "dialogFrame";
    const DIALOG_FACE_ID = "dialogFace";
    const DIALOG_NAME_ID = "dialogName";
    const DIALOG_AREA_ID = "dialogArea";
    const DIALOG_EDGE_AREA_ID = "dialogEdgeArea";
    const DIALOG_USER_INPUT_ID = "userInput";
    
    const FADING_TIME = 200;
    const MIN_TIME_BEFORE_MANUAL_CLOSE = 500;
    const EDGE_ACTIVATION_DELAY = 100;

    let genericMessages: Map<number, IGenericMessage>;

    let onDialogClose: IEmptyCallback | undefined;

    /**
     * Method called when the dialog is to be opened
     */
    export function openDialog() {
        let dlgContainer: HTMLElement | null = document.getElementById(DIALOG_CONTAINER_ID); 
        if(dlgContainer === null) {
            console.error("Element not foud: " + DIALOG_CONTAINER_ID);
            return;
        }
        dlgContainer.classList.replace("hiddenFadeOut", "visibleFadeIn");
        setTimeout(function() {
            dlgContainer!.style.display = "none";
        }, FADING_TIME);
        Input.disableActionEvents();
    };

    /**
     * Method called when the dialog is to be closed
     */
    export function closeDialog(stopIt: boolean = false) {
        Input.enableActionEvents();
        let dlgContainer: HTMLElement | null = document.getElementById(DIALOG_CONTAINER_ID); 
        if(dlgContainer === null) {
            console.error("Element not foud: " + DIALOG_CONTAINER_ID);
            return;
        }
        dlgContainer.classList.remove("visibleFadeIn");
        dlgContainer.classList.add("hiddenFadeOut");
        setTimeout(function() {
            dlgContainer!.style.display = "none";
        }, FADING_TIME);
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
            // Close on user action, not less than "MIN_TIME_BEFORE_MANUAL_CLOSE" ms after showing it
            setTimeout(function() {
                Input.addActionCallback(function() {
                    closeDialog();
                })
            }, MIN_TIME_BEFORE_MANUAL_CLOSE);
        }
    }

    export function loadString(stringId: string, language: LanguageEnum, callback: (str?: string) => void): void {
        Resource.load(stringId, ResourceType.STRING, function(resourceText: any) {
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

    export function loadDialog(dialogId: number, language: LanguageEnum, callback: (dialogNode?: IDialogNode) => void): void {
        if(dialogId === DataDefaults.DEFAULT_ID) {
            // Since it has not a valid id, this is a new dialog: therefore, return a new root node for it
            callback(DataDefaults.getDialogNode(DataDefaults.FIRST_ELEM_ID));
            return;
        }
        Resource.load(dialogId + "", ResourceType.DIALOG, function(resourceText) {
            if (Utils.isEmpty(resourceText) || typeof resourceText !== "string") {
                console.error("Error while loading dialog: " + dialogId);
                callback(DataDefaults.getDialogNode(DataDefaults.FIRST_ELEM_ID));
            } else {
                let data: {
                    nodes: IDialogNode[],
                    edges: IDialogEdge[]
                } = JSON.parse(resourceText);
                let dialogRootNode: IDialogNode = reconstructDialogTree(DataDefaults.FIRST_ELEM_ID, data.nodes, data.edges);
                callback(dialogRootNode);
            }
        }, language);
    }

    export function saveDialog(dialogId: number, root: IDialogNode, callback: INumberCallback): void {
        let nodes: Map<number, IDialogNode> = new Map<number, IDialogNode>();
        let edges: Map<number, IDialogEdge> = new Map<number, IDialogEdge>();
        deconstructDialogTree(root, nodes, edges, true);
        let request = {
            nodes: Array.from(nodes.values()),
            edges: Array.from(edges.values()),
        };
        Resource.save(dialogId + "", JSON.stringify(request), ResourceType.DIALOG, function(response?: string, success?: boolean) {
            if (success) {
                if(Utils.isNumeric(response)) {
                    dialogId = parseInt(response!);
                }
                // Caller should manage the case of updated dialog id
                callback(dialogId);
            } else {
                callback();
            }
        });
    }

    function reconstructDialogTree(startingDialogNodeId: number, nodes: IDialogNode[], edges: IDialogEdge[]): IDialogNode {
        let nMap = new Map<number,IDialogNode>();
        let eMap = new Map<number,IDialogNode>();
        for(let n of nodes) {
            nMap.set(n.id, n);
        }
        for(let e of edges) {
            eMap.set(e.id, e);
        }
        if(!nMap.has(startingDialogNodeId)) {
            console.error("Cannot reconstruct dialog tree from node: " + startingDialogNodeId);
            return DataDefaults.getDialogNode();
        } else {
            let root = nMap.get(startingDialogNodeId)!;
            populateDialogTreeFromNode(root, nMap, eMap);
            return root;
        }
    }

    function populateDialogTreeFromNode(node: IDialogNode, nMap: Map<number,IDialogNode>, eMap: Map<number,IDialogEdge>) {
        node.referenced = true;
        if(!Utils.isEmpty(node.edgeIds)) {
            for(let eId of node.edgeIds!) {
                if(!eMap.has(eId)) {
                    console.error("Cannot reconstruct dialog tree from node: " + node.id + ", edge not found: " + eId);
                } else {
                    let e = eMap.get(eId)!;
                    if(node.edges === undefined) {
                        node.edges = [];
                    }
                    node.edges.push(e);
                    if(e.nodeId !== undefined) {
                        if(!nMap.has(e.nodeId)) {
                            console.error("Cannot reconstruct dialog tree from edge: " + e.id + ", node not found: " + e.nodeId);
                        } else {
                            let n = nMap.get(e.nodeId)!;
                            e.node = n;
                            if(n.referenced) {
                                e.nodeReferenced = true;
                            }
                            // Recursive call on this node
                            populateDialogTreeFromNode(n, nMap, eMap);
                        }
                    }
                }
            }
        }
    }

    export function deconstructDialogTree(node: IDialogNode, nodes: Map<number, IDialogNode>, edges: Map<number, IDialogNode>, flagClearTransientData?: boolean): void {
        if(nodes.has(node.id)) {
            return;
        }
        // Save node in the output map
        nodes.set(node.id, node);
        let eArray = node.edges;
        if(!Utils.isEmpty(eArray)) {
            if(flagClearTransientData) {
                // Clean transient data 
                delete node.edges;
            }
            for(let e of eArray!) {
                if(edges.has(e.id)) {
                    continue;
                }
                // Save edge in the output map
                edges.set(e.id, e);
                let n = e.node;
                if(n !== undefined) {
                    if(flagClearTransientData) {
                        // Clean transient data 
                        delete e.node;
                    }
                    // Recursive call on this node
                    deconstructDialogTree(n, nodes, edges);
                }
            }
        }
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
    
    export function showComplexDialog(event: IEvent, scene: DynamicScene, hero: IEvent, dialogId: number, cfg: IConfig, dialogScriptLauncher: IDialogScriptLauncher, callback: IEmptyCallback) {
        loadDialog(dialogId, cfg.lang, function(dialog?: IDialogNode) {
            if(dialog === undefined) {
                console.error("Error while loading dialog: " + dialogId);
            } else {
                showDialog(event, scene, hero, dialog, cfg.skin, dialogScriptLauncher, callback);
            }
        });
    }
    
    export function showSimpleDialog(event: IEvent, scene: DynamicScene, hero: IEvent, messageId: string, cfg: IConfig, callback: IEmptyCallback) {
        loadString(messageId, cfg.lang, function(str) {
            let dialog = DataDefaults.getDialogNode();
            dialog.message = str;
            showDialog(event, scene, hero, dialog, cfg.skin, dialogScriptLauncherStub, callback);
        });
    }

    function showDialog(event: IEvent, scene: DynamicScene, hero: IEvent, dialog: IDialogNode, skin: string, dialogScriptLauncher: IDialogScriptLauncher, callback: IEmptyCallback): void {     
        let dlgFrame: HTMLElement | null = document.getElementById(DIALOG_FRAME_ID);
        let dlgFace: HTMLElement | null = document.getElementById(DIALOG_FACE_ID);
        let dlgName: HTMLElement | null = document.getElementById(DIALOG_NAME_ID);
        let dlgArea: HTMLElement | null = document.getElementById(DIALOG_AREA_ID);
        
        if(dlgFace === null) {
            console.error("Element not foud: " + DIALOG_FACE_ID);
            return;
        }
        if(dlgName === null || dlgName.firstChild === null) {
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
        openDialog();
        if(Utils.isEmpty(skin)) {
            console.error("skin is not defined!");
        } else {
            dlgFrame.style.borderImageSource = "url('/assets/skin/" + skin + "')";
        }

        let faceset: string | undefined = dialog.face;
        if(faceset !== undefined) {
            dlgFace.style.display = "block";
            dlgFace.style.backgroundImage = "url('/assets/faceset/" + faceset + "')";
        } else {
            dlgFace.style.display = "none";
        }
        if(dialog.name !== undefined) {
            dlgName.firstChild.textContent = dialog.name;
            dlgName.style.visibility = "block";
        } else {
            dlgName.style.visibility = "hidden";
        }

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
            let actionPromise;
            if(edge.action !== undefined) {
                // Before following the edge to next node, execute its action
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
                actionPromise = dialogScriptLauncher(event, edge, scene, hero, parameter);
            }
            if(edge.node !== undefined) {
                // Follow the edge to next node
                if(actionPromise === undefined) {
                    showDialog(event, scene, hero, edge.node, skin, dialogScriptLauncher, callback);
                } else {
                    actionPromise.then(() => {
                        showDialog(event, scene, hero, edge.node!, skin, dialogScriptLauncher, callback);
                    });
                }
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
                    defineClosingCondition(dialog.closingTimeout);
                } else {
                    // Request input
                    let input = document.createElement("input");
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
                // Display active edges messages
                let i = 1;
                for(let edge of activeEdges) {
                    let div = document.createElement("div");
                    div.classList.add("l4wDialogEdge");
                    dialogEdgeArea.appendChild(div);
                    if(edge.message !== undefined) {
                        div.innerText = edge.message; 
                    }
                    let selectionCallbacK = function(e: Event) {
                        div.classList.add("l4wDialogEdgeSelected");
                        setTimeout(() => { selectEdge(edge); }, EDGE_ACTIVATION_DELAY);
                    }
                    div.onclick = selectionCallbacK;
                    registerNumericKeyListener(i, selectionCallbacK);
                    i++;
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
                selectedVal = ClientUtils.getRandomInteger(0, activeValues.length - 1);
            }
            return activeValues[selectedVal].message;
        }
        return undefined;
    }

    function resolveStringVariables(message: string): string {
        //TODO check if message contains special chars for variables, and resolve them
        /*
        Variables:
        - Player name
        - Game time or timer
        - Generic ariable value
        - Hero's golds
         */
        return message;
    }

    export function search(root: IDialogNode, targetId: number, isTargetEdge?: boolean) {
        return treeSearch(root, targetId, (isTargetEdge !== undefined? isTargetEdge : false), new Map<number, IDialogNode>(), new Map<number, IDialogNode>());
    }

    function treeSearch(node: IDialogNode, targetId: number, isTargetEdge: boolean, nodes: Map<number, IDialogNode>, edges: Map<number, IDialogNode>): IDialogNode | IDialogEdge | undefined {
        if(!nodes.has(node.id)) {
            if(!isTargetEdge && node.id === targetId) {
                return node;
            }
            // Save node in the output array
            nodes.set(node.id, node);
            let eArray = node.edges;
            if(!Utils.isEmpty(eArray)) {
                for(let e of eArray!) {
                    if(!edges.has(e.id)) {
                        if(isTargetEdge && e.id === targetId) {
                            return e;
                        }
                        // Save edge in the output array
                        edges.set(e.id, e);
                        let n = e.node;
                        if(n !== undefined) {
                            // Recursive call on this node
                            let result = treeSearch(n, targetId, isTargetEdge, nodes, edges);
                            if(result !== undefined) {
                                return result
                            }
                        }
                    }
                }
            }
        }
        return;
    }
};