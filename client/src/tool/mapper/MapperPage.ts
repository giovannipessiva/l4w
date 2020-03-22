import Vue from "vue"

import { Resource } from "../../core/util/Resource"
import { Compatibility } from "../../core/util/Compatibility"
import { IPropertiesCallback } from "../../core/util/Commons"
import { Constant } from "../../core/util/Constant"
import { Utils } from "../../core/util/Utils"
import { IEvent, IEventState } from "../../../../common/src/model/Event"
import { isNumeric, getRandomString } from "../../../../common/src/Utils"
import { ActionTriggerEnum, RotationEnum, DirectionEnum, ScaleEnum } from "../../../../common/src/model/Commons"
import { TilePicker } from "./TilePicker"
import { TilePickerScene } from "./TilePickerScene"
import { EventManager } from "../../core/manager/EventManager"
import { Mapper } from "./Mapper"
import { MapperScene } from "./MapperScene"
import { ResourceType, Tree } from "../../../../common/src/Constants";
import { IDialogNode, IDialogEdge } from "../../../../common/src/model/Dialog"
import { DialogManager } from "../../core/manager/DialogManager"
import { gameConfig } from "../../../../common/src/GameConfig"

export { Constant } from "../../core/util/Constant"
export { Mapper } from "./Mapper";

declare var base_path: string;

export namespace MapperPage {

    export const PAGE_TITLE = document.title;
    export const BUTTON_ID_MODE = "mode";
    export const BUTTON_ID_LAYER = "layer";

    let flagEventModified: boolean = false;
    let currentState: IEventState;
    let currentEvent: IEvent | undefined;

    const scaleOptions: string[] = [
        "Very low",
        "Low",
        "Medium-low",
        "Medium",
        "Medium-high",
        "High",
        "Very high"
    ];

    const JSTREE_ID_SEPARATOR = "_";

    export function start() {
        Compatibility.check();

        loadDialogEditor(0); //TODO test

        let jsTreeOptions: JSTreeStaticDefaults = {
            core: {
                animation: false,
                data: {
                    url: base_path + "data/" + ResourceType.TREE + "/" + Tree.MAPS,
                    dataType: "json"
                },
                check_callback: true,
                error: function() {
                    console.warn("jsTree error on dialogTree");
                },
                multiple: false
            },
            plugins: [
                "contextmenu", // Makes it possible to right click nodes and shows a list of configurable actions in a menu
                "dnd", // Makes it possible to drag and drop tree nodes and rearrange the tree
                "unique" // Enforces that no nodes with the same name can coexist as siblings
            ]
        }
        $("#mapPanel").jstree(jsTreeOptions);
        let canvas = <HTMLCanvasElement>document.getElementById("canvas1");

        $("#mapPanel").on("create_node.jstree ready.jstree rename_node.jstree delete_node.jstree changed.jstree", function(e, data) {
            switch (e.type) {
                case "ready":
                    // If no node is selected, select the first
                    let currentNode = getSelectedNode();
                    if(currentNode === undefined) {
                        let nodeList = $("#mapPanel").jstree(true).get_json("#", {
                            "flat": true,
                            "no_state": true,
                            "no_id": false,
                            "no_children": false,
                            "no_data": true
                        });
                        if(nodeList.length > 0) {
                            $("#mapPanel").jstree(true).select_node(nodeList[0]);
                        }
                    }
                    // Expand all
                    $("#mapPanel").jstree("open_all");
                    break;
                case "create_node":
                    // Remove the prefix from the id
                    let numericId = data.node.id.split(JSTREE_ID_SEPARATOR).pop();
                    if(isNaN(parseInt(numericId))) {
                        console.info("Cannot generate a sequential numeric id for node: " + data.node.id);
                        numericId = getRandomString();
                    }
                    $("#mapPanel").jstree(true).set_id(data.node, numericId);
                case "rename_node":
                case "delete_node":
                    // Disable every node, to avoid map changes before save
                    changeEditState(true);
                    break;
                case "changed":
                    switch (data.action) {
                        case "ready":
                            // Prevent double call at start
                            break;
                        case "delete_node":
                            // Select another node
                            let previousNode = $("#mapPanel").jstree(true).get_prev_dom(data.node);
                            $("#mapPanel").jstree(true).select_node(previousNode);
                            break;
                        case "model":
                        case "select_node":
                            $("#mapDetailPanel").show();
                            let node: JSTreeNode = getSelectedNode();
        
                            Mapper.start(canvas, node.id, function(mapperScene: MapperScene) {
                                if(mapperScene.map === undefined) {
                                    console.error("Map is undefined, for id: " + node.id);
                                    return;
                                }
                                // Update map size input fields
                                $("#mapSizeW").val(mapperScene.map.width + "");
                                $("#mapSizeH").val(mapperScene.map.height + "");
                                // Update the tile
                                if (mapperScene.map.tileset !== undefined
                                    && (<HTMLSelectElement> document.getElementById("tiles")).value !== mapperScene.map.tileset.image) {
                                    $("#tiles").val(mapperScene.map.tileset.image);
                                    TilePicker.loadTile(mapperScene.map.tileset.image, function(tilePicker: TilePickerScene) {
                                        mapperScene.setTilePicker(tilePicker);
                                        TilePicker.setMapper(mapperScene);
                                    });
                                }
                            });
                            break;
                        case "deselect_all":
                            // Nothing to do here.
                            break;
                        default:
                            console.error("Unexpected event \"changed\" action: " + data.action);
                            break;
                    }
                    break;
                default:
                    console.error("Unexpected event type: " + e.type);
            }
        });

        // Resize the panel to match the tileset
        let resizerCallback: IPropertiesCallback = function(props: Map<string, number>) {
            let width = +props.get("cellWidth")! * +props.get("tileColumns")! + 2;
            $("#toolsPanel").width(width);
        };
        Resource.loadProperties(resizerCallback);

        loadTiles();

        loadNews();
    }

    export function changeSize() {
        let w = parseInt($("#mapSizeW").val());
        let h = parseInt($("#mapSizeH").val());
        Mapper.changeSize(h, w);
        changeEditState(true);
    }

    function loadTiles() {
        $.getJSON(base_path + "assetlist/tile", function(data) {
            let sel = <HTMLSelectElement> document.getElementById("tiles");
            for (let i = 0; i < data.length; i++) {
                sel.options.add(new Option( data[i], data[i]));
            }
        });
    }

    export function loadNews() {
        $.getJSON(base_path + "news", function(data) {
            //let news = $("#news");
            //TODO manage json response
        });
    }

    export function changeTile() {
        let tile = $("#tiles").val();
        TilePicker.loadTile(tile, function(tilePicker: TilePickerScene) {
            Mapper.changeTile(tile, tilePicker);
        });
        changeEditState(true);
    }

    export function save() {
        if (!Utils.isEmpty(currentEvent)) {
            let confirmed: boolean = confirmCloseEventDetails();
            if (!confirmed) {
                return;
            }
        }
        TilePicker.saveData(function(result_tree: boolean, response?: string) {
            if (result_tree) {
                Mapper.saveMap(function(result_map: boolean) {
                    if (result_map) {
                        MapperPage.changeEditState(false);
                    } else {
                        console.error("Map save failed");
                    }
                });
            } else {
                console.error("Tilepicker save failed");
            }
        });
    }

    export function reload() {
        Mapper.reloadMap(function(result: boolean) {
            if (result) {
                $("#mapPanel").jstree(true).refresh(true, false);
            }
        });
    }

    export function getActiveMap(): string {
        return getSelectedNode().id;
    }

    function getSelectedNode(): JSTreeNode {
        return $("#mapPanel").jstree(true).get_selected(true)[0];
    }

    export function changeEditState(edited: boolean) {
        // TODO change to statefull, in order to avoid useless operations
        // when the state is still the same
        if (edited) {
            document.title = PAGE_TITLE + "*";
        } else {
            document.title = PAGE_TITLE;
        }
        (<HTMLButtonElement>$("#saveButton")[0]).disabled = !edited;
        (<HTMLButtonElement>$("#reloadButton")[0]).disabled = !edited;

        let jsTree = $("#mapPanel").jstree(true);
        // Disable maps selection
        let nodeList = jsTree.get_json("#", {
            "flat": true,
            "no_state": true,
            "no_id": false,
            "no_children": false,
            "no_data": true
        });
        $.each(nodeList, function(key: string, node: JSTreeNode) {
            if (edited) {
                jsTree.disable_node(node.id);
            } else {
                jsTree.enable_node(node.id);
            }
        });
    }

    export function changeEventPosition() {
        if(currentEvent === undefined) {
            console.error("Current event undefined, cannot change its position");
            return;
        }
        let i = (<HTMLInputElement>document.getElementById("eventi")).valueAsNumber;
        let j = (<HTMLInputElement>document.getElementById("eventj")).valueAsNumber;
        if (Mapper.isCellAvailable(currentEvent, i, j)) {
            eventModified();
            Mapper.changeEventPosition(currentEvent, i, j);
            (<HTMLInputElement>document.getElementById("eventi")).style.removeProperty("color");
            (<HTMLInputElement>document.getElementById("eventj")).style.removeProperty("color");
        } else {
            eventModified(false);
            (<HTMLInputElement>document.getElementById("eventi")).style.color = Constant.Color.RED;
            (<HTMLInputElement>document.getElementById("eventj")).style.color = Constant.Color.RED;
        }
    }

    export function changeEventScript() {
        eventModified();
        loadActions();
    }

    export function deleteEvent() {
        if(currentEvent === undefined) {
            console.error("Current event undefined, cannot delete it");
            return;
        }
        Mapper.deleteEvent(currentEvent);
        eventModified();
        loadEvent(undefined, false);
    }

    export function deleteEventState() {
        if(currentEvent === undefined) {
            console.error("Current event undefined, cannot delete its state");
            return;
        }
        let currentEventState = (<HTMLInputElement>document.getElementById("state")).valueAsNumber;
        if ((currentEventState > 1 || (currentEventState === 1 && currentEvent.states.length > 1))
            && currentEventState <= currentEvent.states.length) {
            currentEvent.states.splice(currentEventState - 1, 1);
            if (currentEventState > 1) {
                (<HTMLInputElement>document.getElementById("state")).valueAsNumber -= 1;
            }
            eventModified();
            loadEventState(false);
        }
    }

    export function loadEventState(readPreviousState: boolean = true) {
        if(currentEvent === undefined) {
            console.error("Current event undefined, cannot load its state");
            return;
        }
        if (readPreviousState) {
            readEventStateDetails();
        }
        let currentEventStateNum = (<HTMLInputElement>document.getElementById("state")).valueAsNumber;
        if (Utils.isEmpty(currentEvent.states)) {
            currentEvent.states = [];
        }
        if (currentEventStateNum > currentEvent.states.length) {
            currentEvent.states[currentEventStateNum - 1] = EventManager.getNewEventState();
        }
        let state: IEventState = currentEvent.states[currentEventStateNum - 1];
        currentState = state;
        loadConditions(state);
        let select: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("trigger"));
        let options: HTMLOptionsCollection = select.options;
        if(options.length === 0) {
            options[ActionTriggerEnum.CLICK] = new Option("Click");
            options[ActionTriggerEnum.TOUCH] = new Option("Touch");
            options[ActionTriggerEnum.OVER] = new Option("Over");
            options[ActionTriggerEnum.AUTO] = new Option("(auto)");
        }
        if(state.trigger !== undefined && isNumeric(state.trigger)) {
            select.selectedIndex = state.trigger;
        } else {
            // Default value
            select.selectedIndex = ActionTriggerEnum.CLICK;
        }
        
        loadActions();
        
        // Update total states count
        (<HTMLElement>document.getElementById("tot")).innerText = currentEvent.states.length + "";
        loadCharacterProperties();
    }

    function loadConditions(state: IEventState) {
        let conditions: string[] = Resource.listEventStateConditions();
        let selectConditions = (<HTMLSelectElement>document.getElementById("condition"));
        Utils.resetSelect(selectConditions);
        let conditionOptions: HTMLOptionsCollection = selectConditions.options;
        let i = 0;
        for (let a of conditions) {
            conditionOptions[i] = new Option(a);
            if (a === state.condition) {
                selectConditions.selectedIndex = i;
            }
            i++;
        }
    }

    function loadActions() {
        let scriptClass = (<HTMLSelectElement>document.getElementById("script")).value;
        let actions: string[] = Resource.listScriptActions(scriptClass);
        let selectActions = (<HTMLSelectElement>document.getElementById("action"));
        let actionOptions: HTMLOptionsCollection = selectActions.options;
        let i = 0;
        Utils.resetSelect(selectActions);
        selectActions.selectedIndex = -1;
        for (let a of actions) {
            actionOptions[i] = new Option(a);
            if (a === currentState.action) {
                selectActions.selectedIndex = i;
            }
            i++;
        }
    }

    function loadCharacterProperties() {
        let selectCharasets: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("charasets"));
        Resource.listResources(ResourceType.CHAR, function(list?: string[]) {
            Utils.resetSelect(selectCharasets);
            let options: HTMLOptionsCollection = selectCharasets.options;
            options[0] = new Option("");
            if(list !== undefined) {
                for (let i = 0; i < list.length; i++) {
                    options[i + 1] = new Option(list[i]);
                    if (list[i] === currentState.charaset) {
                        selectCharasets.selectedIndex = i + 1;
                    }
                }
            }
        });

        let visible: boolean | undefined = currentState.visible;
        if (visible === undefined) {
            visible = true;
        }
        (<HTMLInputElement>document.getElementById("visible")).checked = visible;

        let opacity: number = Number.parseInt(currentState.opacity + "");
        if (Utils.isEmpty(opacity) || Number.isNaN(opacity) || opacity < 0 || opacity > 100) {
            opacity = 100;
        }
        (<HTMLInputElement>document.getElementById("opacity")).valueAsNumber = opacity;

        let directionSelect = <HTMLSelectElement>document.getElementById("direction");
        if(directionSelect.length === 0) {
            let directionOptions: HTMLOptionsCollection = directionSelect.options;
            directionOptions[DirectionEnum.UP] = new Option("Up");
            directionOptions[DirectionEnum.RIGHT] = new Option("Right");
            directionOptions[DirectionEnum.DOWN] = new Option("Down");
            directionOptions[DirectionEnum.LEFT] = new Option("Left");
        }
        let direction: number = Number.parseInt(currentState.direction + "");
        if (Utils.isEmpty(direction) || Number.isNaN(direction) || direction < DirectionEnum.UP || direction > DirectionEnum.NONE) {
            direction = DirectionEnum.DOWN;
        }
        (<HTMLSelectElement>document.getElementById("direction")).selectedIndex = direction;

        let i = 0;
        let speedOptions: HTMLOptionsCollection = (<HTMLSelectElement>document.getElementById("speed")).options;
        let frequencyOptions: HTMLOptionsCollection = (<HTMLSelectElement>document.getElementById("frequency")).options;
        if(speedOptions.length === 0 || frequencyOptions.length === 0) {
            for (let s of scaleOptions) {
                speedOptions[i] = new Option(s);
                frequencyOptions[i] = new Option(s);
                i++;
            }
        }
        let speed: number = Number.parseInt(currentState.speed + "");
        if (Utils.isEmpty(speed) || Number.isNaN(speed) || speed < ScaleEnum.VERY_LOW || speed > ScaleEnum.VERY_HIGH) {
            speed = ScaleEnum.MEDIUM;
        }
        (<HTMLSelectElement>document.getElementById("speed")).selectedIndex = speed;
        let frequency: number = Number.parseInt(currentState.frequency + "");
        if (Utils.isEmpty(frequency) || Number.isNaN(frequency) || frequency < ScaleEnum.VERY_LOW || frequency > ScaleEnum.VERY_HIGH) {
            frequency = ScaleEnum.MEDIUM;
        }
        (<HTMLSelectElement>document.getElementById("frequency")).selectedIndex = frequency;

        let rotationOptions: HTMLOptionsCollection = (<HTMLSelectElement>document.getElementById("rotation")).options;
        if(rotationOptions.length === 0) {
            rotationOptions[RotationEnum.OFF] = new Option("Off");
            rotationOptions[RotationEnum.CLOCKWISE] = new Option("Clockwise");
            rotationOptions[RotationEnum.COUNTERCLOCKWISE] = new Option("Counterclockwise");
        }
        let rotation: number = Number.parseInt(currentState.rotation + "");
        if (Utils.isEmpty(rotation) || Number.isNaN(rotation) || rotation < RotationEnum.OFF || rotation > RotationEnum.COUNTERCLOCKWISE) {
            rotation = RotationEnum.OFF;
        }
        (<HTMLSelectElement>document.getElementById("rotation")).selectedIndex = rotation;

        let ontopOptions: HTMLOptionsCollection = (<HTMLSelectElement>document.getElementById("ontop")).options;
        if(ontopOptions.length === 0) {
            ontopOptions[Constant.ZIndex.LV0] = new Option("Off");
            ontopOptions[Constant.ZIndex.LV1] = new Option("Liv. 1");
            ontopOptions[Constant.ZIndex.LV2] = new Option("Liv. 2");
            ontopOptions[Constant.ZIndex.LV3] = new Option("Liv. 3");
            ontopOptions[Constant.ZIndex.LV4] = new Option("Liv. 4");
        }
        let ontop: number = Number.parseInt(currentState.onTop + "");
        if (Utils.isEmpty(ontop) || Number.isNaN(ontop) || ontop < Constant.ZIndex.LV0 || ontop > Constant.ZIndex.LV4) {
            ontop = Constant.ZIndex.LV0;
        }
        (<HTMLSelectElement>document.getElementById("ontop")).selectedIndex = ontop;

        let block: boolean | undefined = currentState.block;
        if (block === undefined) {
            block = true;
        }
        (<HTMLInputElement>document.getElementById("block")).checked = block;
    }

    function readEventStateDetails(): void {
        currentState.condition = (<HTMLInputElement>document.getElementById("condition")).value;
        currentState.trigger = (<HTMLSelectElement>document.getElementById("trigger")).selectedIndex;
        currentState.action = (<HTMLInputElement>document.getElementById("action")).value;
        currentState.charaset = (<HTMLSelectElement>document.getElementById("charasets")).value;

        let visible: boolean | undefined = (<HTMLInputElement>document.getElementById("visible")).checked;
        if (visible) {
            visible = undefined;
        }
        currentState.visible = visible;

        let opacity: number | undefined = (<HTMLInputElement>document.getElementById("opacity")).valueAsNumber;
        if (Utils.isEmpty(opacity) || Number.isNaN(opacity) || opacity < 0 || opacity >= 100) {
            opacity = undefined;
        }
        currentState.opacity = opacity;

        let direction: number | undefined = (<HTMLSelectElement>document.getElementById("direction")).selectedIndex;
        if (Utils.isEmpty(direction) || direction < DirectionEnum.UP || direction > DirectionEnum.LEFT) {
            direction = undefined;
        }
        currentState.direction = direction;

        let speed: number | undefined = (<HTMLSelectElement>document.getElementById("speed")).selectedIndex;
        let frequency: number | undefined = (<HTMLSelectElement>document.getElementById("frequency")).selectedIndex;
        if (Utils.isEmpty(speed) || speed < ScaleEnum.VERY_LOW || speed > ScaleEnum.VERY_HIGH || speed === ScaleEnum.MEDIUM) {
            speed = undefined;
        }
        if (Utils.isEmpty(frequency) || frequency < ScaleEnum.VERY_LOW || frequency > ScaleEnum.VERY_HIGH || frequency === ScaleEnum.MEDIUM) {
            frequency = undefined;
        }
        currentState.speed = speed;
        currentState.frequency = frequency;

        let rotation: number | undefined = (<HTMLSelectElement>document.getElementById("rotation")).selectedIndex;
        if (Utils.isEmpty(rotation) || rotation <= RotationEnum.OFF || rotation > RotationEnum.COUNTERCLOCKWISE) {
            rotation = undefined;
        }
        currentState.rotation = rotation;

        let ontop: number | undefined = (<HTMLSelectElement>document.getElementById("ontop")).selectedIndex;
        if (Utils.isEmpty(ontop) || ontop <= Constant.ZIndex.LV0 || ontop > Constant.ZIndex.LV4) {
            ontop = undefined;
        }
        currentState.onTop = ontop;

        let block: boolean | undefined = (<HTMLInputElement>document.getElementById("block")).checked;
        if (block) {
            block = undefined;
        }
        currentState.block = block;
    }

    export function loadEvent(event?: IEvent, askConfirm: boolean = true): boolean {
        if (event !== undefined) {
            if (askConfirm) {
                let confirmed: boolean = confirmCloseEventDetails();
                if (!confirmed) {
                    return false;
                }
            }
            event.currentState = 0;
        } else {
            event = EventManager.getNewEvent();
        }
        currentEvent = event;
        (<HTMLInputElement>document.getElementById("eventi")).style.removeProperty("color");
        (<HTMLInputElement>document.getElementById("eventj")).style.removeProperty("color");
        eventModified(false);

        (<HTMLInputElement>document.getElementById("name")).value = event.name;
        (<HTMLInputElement>document.getElementById("eventi")).valueAsNumber = event.i;
        (<HTMLInputElement>document.getElementById("eventj")).valueAsNumber = event.j;
        let selectScript = (<HTMLSelectElement>document.getElementById("script"));
        Utils.resetSelect(selectScript);
        let classes: Map<string, string> = Resource.listScriptClasses();
        let options: HTMLOptionsCollection = selectScript.options;
        let i = 0;
        for (let c of classes) {
            options[i] = new Option(c[0]);
            options[i].title = c[1];
            if (c[0] === currentEvent.script) {
                selectScript.selectedIndex = i;
            }
            i++;
        }
        (<HTMLInputElement>document.getElementById("state")).valueAsNumber = 1;
        loadEventState(false);

        resetMemory();
        if (!Utils.isEmpty(currentEvent.memory)) {
            for (let key in currentEvent.memory) {
                addRowToMemory(key, currentEvent.memory[key]);
            }
        }
        return true;
    }

    export function readEventDetails(): void {
        if (currentEvent !== undefined) {
            currentEvent.name = (<HTMLInputElement>document.getElementById("name")).value;
            currentEvent.i = (<HTMLInputElement>document.getElementById("eventi")).valueAsNumber;
            currentEvent.j = (<HTMLInputElement>document.getElementById("eventj")).valueAsNumber;
            currentEvent.script = (<HTMLInputElement>document.getElementById("script")).value;
            readEventStateDetails();
            Mapper.addEvent(currentEvent);
            MapperPage.eventModified(false);
        }
    }

    export function finishEventEditing(): boolean {
        let confirmed: boolean = confirmCloseEventDetails();
        if (!confirmed) {
            return false;
        }
        currentEvent = undefined;
        eventModified(false);
        return true;
    }

    /**
     * If the event details has been modified, show a popup asking for confirm
     */
    export function confirmCloseEventDetails(): boolean {
        if (!flagEventModified || currentEvent === undefined) {
            return true;
        }
        return confirm("Event details not saved. If you continue, details of the currently selected event will be lost. Are you sure you want to continue?");
    }

    export function eventModified(modified: boolean = true) {
        flagEventModified = modified;
        (<HTMLButtonElement>document.getElementById("saveEvent")).disabled = !modified;
    }

    export function addMemory() {
        if(currentEvent === undefined) {
            console.error("Current event undefined, cannot add to its memory");
            return;
        }
        let key = (<HTMLInputElement>document.getElementById("key")).value
        let value = (<HTMLInputElement>document.getElementById("val")).value
        if (!Utils.isEmpty(key) && !Utils.isEmpty(value)) {
            eventModified();
            EventManager.saveMem(currentEvent, key, value);
            addRowToMemory(key, value);
            (<HTMLInputElement>document.getElementById("key")).value = "";
            (<HTMLInputElement>document.getElementById("val")).value = "";
        }
    }

    function resetMemory() {
        (<HTMLInputElement>document.getElementById("key")).value = "";
        (<HTMLInputElement>document.getElementById("val")).value = "";
        let table: HTMLTableElement = (<HTMLTableElement>document.getElementById("memory"));
        while (table.hasChildNodes()) {
            table.removeChild(table.lastChild!);
        }
    }

    /**
     * Add a row to the Memory table; if key already exists, update that row instead
     */
    function addRowToMemory(key: string, value: string) {
        // If key already exists, update its value
        let table = (<HTMLTableElement>document.getElementById("memory"));
        let list = table.rows;
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === key) {
                // Update thew value of this existing row
                let row: HTMLTableRowElement = <HTMLTableRowElement>table.rows[i];
                let cell: HTMLTableCellElement = <HTMLTableCellElement>row.cells[1];
                let inputVal: HTMLInputElement = <HTMLInputElement>cell.childNodes[0];
                inputVal.value = value;
                return;
            }
        }
        // If key does not exists, create new row        
        let totRows: number = (<HTMLTableElement>document.getElementById("memory")).rows.length;
        let row: HTMLTableRowElement = (<HTMLTableElement>document.getElementById("memory")).insertRow(totRows);
        row.id = key;
        let td: HTMLTableCellElement;
        let input: HTMLInputElement;
        let button: HTMLButtonElement;

        td = row.insertCell();
        input = document.createElement("input");
        input.type = "text";
        input.style.width = "5em";
        input.disabled = true;
        input.value = key;
        td.appendChild(input);

        td = row.insertCell();
        input = document.createElement("input");
        input.type = "text";
        input.style.width = "8em";
        input.disabled = true;
        input.value = value;
        td.appendChild(input);

        td = row.insertCell();
        button = document.createElement("button");
        button.onclick = function() {
            let table = (<HTMLTableElement>document.getElementById("memory"));
            let list = table.rows;
            for (let i = 0; i < list.length; i++) {
                if (list[i].id === key) {
                    table.deleteRow(i);
                    break;
                }
            }
            if(currentEvent === undefined) {
                console.error("Current event undefined, cannot delete memory");
                return;
            } else {
                EventManager.deleteMem(currentEvent, key);
            }
        };
        button.innerText = "-";
        td.appendChild(button);
    }

    function loadDialog(dialogId: number) {
        DialogManager.loadDialog(dialogId, gameConfig.ui.lang, function() {
            //TODO 
        });
    }

    export function createNode(): IDialogNode {
        return DialogManager.getNewDialogNode();
    }

    export function createEdge(): IDialogEdge {
        return DialogManager.getNewDialogEdge();
    }

    // tslint:disable-next-line
    const Component = Vue.extend({
        // type inference enabled 
    })

    function loadDialogEditor(dialogId: number) {
        // Disable every node, to avoid map changes before save
        //changeEditState(true);
        loadDialog(dialogId);

        var app = new Vue({
            el: "#app",
            data: {
              message: "Hello Vue!"
            }
        });

        console.log(Component + "" + app); //TODO test Vue

    }
}