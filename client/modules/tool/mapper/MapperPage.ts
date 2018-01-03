/// <reference path="../../interfaces/jstree.d.ts" />
/// <reference path="../../interfaces/jstree.d.extended.ts" />
/// <reference path="../../core/util/Resource.ts" />
/// <reference path="../../core/util/Commons.ts" />

declare var base_path: string;

namespace MapperPage {

    export const PAGE_TITLE = document.title;
    export const BUTTON_ID_MODE = "mode";
    export const BUTTON_ID_LAYER = "layer";

    let flagFirstLoad: boolean = true;
    let flagEdited: boolean = false;
    let flagEventModified: boolean = false;
    let currentEvent: IEvent;

    const scaleOptions: string[] = [
        "Very low",
        "Low",
        "Medium-low",
        "Medium",
        "Medium-high",
        "High",
        "Very high"
    ];

    export function start() {
        Compatibility.check();

        $("#mapPanel").jstree({
            "core": {
                "animation": 0,
                "data": {
                    "url": base_path + "data/map",
                    "dataType": "json"
                },
                "check_callback": true,
            },
            "multiple": false,
            "plugins": ["dnd", "contextmenu"],
            "themes": {
                "dots": false
            }
        });

        var canvas = <HTMLCanvasElement>document.getElementById("canvas1");

        $("#mapPanel").on("create_node.jstree rename_node.jstree delete_node.jstree", function(e, data) {
            switch (e.type) {
                case "create_node":
                    if (flagEdited) {
                        $("#mapPanel").jstree(true).disable_node(data.node);
                    }
                case "rename_node":
                case "delete_node":
                    changeEditState(true, false);
                    break;
                default:
                    console.log("Type: " + e.type);
            }
        });

        $("#mapPanel").on("changed.jstree", function(e, data) {
            switch (data.action) {
                case "ready":
                    // Prevent double call at start
                    return;
                case "delete_node":
                    // Select another node
                    let previousNode = $("#mapPanel").jstree(true).get_prev_dom(data.node);
                    $("#mapPanel").jstree(true).select_node(previousNode);
                    return;
                case "model":
                case "select_node":
                    if (flagFirstLoad) {
                        flagFirstLoad = false;
                    }
                    $("#mapDetailPanel").show();
                    var node: JSTreeNode = getSelectedNode();
                    if (Utils.isEmpty(node.data)) {
                        //TODO l'inizilizzazione va fatta da un'altra parte
                        node.data = {
                            w: 25,
                            h: 20,
                            tile: "002-Woods01.png"
                        };
                    }
                    $("#mapSizeW").val(node.data.w + "");
                    $("#mapSizeH").val(node.data.h + "");
                    if ((<HTMLSelectElement>document.getElementById("tiles")).value !== node.data.tile) {
                        $("#tiles").val(node.data.tile);
                        TilePicker.loadTile(node.data.tile, function(tilePicker: TilePickerScene) {
                            Mapper.start(canvas, tilePicker, parseInt(node.id));
                        });
                    }
                    break;
                default:
                    console.log("Action: " + data.action);
                    break;
            }
        });

        // Resize the panel to match the tileset
        var resizerCallback: IPropertiesCallback = function(props: Map<string, number>) {
            var width = +props.get("cellWidth") * +props.get("tileColumns") + 2;
            $("#toolsPanel").width(width);
        };
        Resource.loadProperties(resizerCallback);

        loadTiles();

        loadNews();
    }

    export function changeSize() {
        var node = getSelectedNode();
        node.data.w = parseInt($("#mapSizeW").val());
        node.data.h = parseInt($("#mapSizeH").val());
        Mapper.changeSize(node.data.h, node.data.w);
        changeEditState(true);
    }

    function loadTiles() {
        $.getJSON(base_path + "data/resources/tiles.json", function(data) {
            var sel = $("#tiles");
            for (var i = 0; i < data.length; i++) {
                sel.append("<option value='" + data[i].name + "'>" + data[i].desc
                    + "</option>");
            }
        });
    }

    export function loadNews() {
        $.getJSON(base_path + "news", function(data) {
            var news = $("#news");
            //TODO manage json response
        });
    }

    export function changeTile() {
        let node = $("#mapPanel").jstree(true).get_selected(true)[0];
        node.data.tile = $("#tiles").val();
        TilePicker.loadTile(node.data.tile, function(tilePicker: TilePickerScene) {
            Mapper.changeTile(node.data.tile, tilePicker);
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
        Mapper.saveMap(function(result1) {
            if (result1) {
                MapperPage.changeEditState(false);
                TilePicker.saveData(function(result2) {
                    if (!result2) {
                        console.error("Salvataggio fallito");
                    }
                });
            } else {
                console.error("Salvataggio fallito");
            }
        });
    }

    export function reload() {
        Mapper.reloadMap(function(result: boolean) {
            if (result) {
                $("#mapPanel").jstree(true).refresh(false, false);
            }
        });
    }

    export function getActiveMap(): number {
        return parseInt(getSelectedNode().id);
    }

    function getSelectedNode(): JSTreeNode {
        return $("#mapPanel").jstree(true).get_selected(true)[0];
    }

    export function changeEditState(edited: boolean, mapChanged: boolean = true) {
        flagEdited = edited;
        if (edited) {
            document.title = PAGE_TITLE + "*";
        } else {
            document.title = PAGE_TITLE;
        }
        (<HTMLButtonElement>$("#saveButton")[0]).disabled = !edited;
        (<HTMLButtonElement>$("#reloadButton")[0]).disabled = !edited;

        if (mapChanged) {
            // Disable maps selection
            let test = $("#mapPanel").jstree(true).get_json("#", {
                "flat": true,
                "no_state": false,
                "no_id": false,
                "no_children": false,
                "no_data": false
            });
            $.each(test, function(key: string, node: JSTreeNode) {
                if (edited) {
                    $("#mapPanel").jstree("disable_node", node.id);
                } else {
                    $("#mapPanel").jstree("enable_node", node.id);
                }
            });
        }
    }

    export function changeEventPosition() {
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
        let state = (<HTMLInputElement>document.getElementById("state")).valueAsNumber;
        loadActions(currentEvent.states[state - 1]);
    }

    export function deleteEvent() {
        Mapper.deleteEvent(currentEvent);
        eventModified();
        loadEvent(undefined, false);
    }

    export function deleteEventState() {
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
        if (readPreviousState) {
            readEventStateDetails();
        }
        let currentEventState = (<HTMLInputElement>document.getElementById("state")).valueAsNumber;
        if (Utils.isEmpty(currentEvent.states)) {
            currentEvent.states = [];
        }
        if (currentEventState > currentEvent.states.length) {
            currentEvent.states[currentEventState - 1] = EventManager.getNewEventState();
        }
        let state: IEventState = currentEvent.states[currentEventState - 1];
        loadConditions(state);
        let select: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("trigger"));
        let options: HTMLCollection = select.options;
        options[ActionTriggerEnum.CLICK] = new Option("Click");
        options[ActionTriggerEnum.TOUCH] = new Option("Touch");
        options[ActionTriggerEnum.OVER] = new Option("Over");
        options[ActionTriggerEnum.AUTO] = new Option("(auto)");
        select.selectedIndex = state.trigger;
        loadActions(state);
        // Update total states count
        (<HTMLElement>document.getElementById("tot")).innerText = currentEvent.states.length + "";
        loadCharacterProperties(state);
    }

    function loadConditions(state: IEventState) {
        let conditions: string[] = Resource.listEventStateConditions();
        let selectConditions = (<HTMLSelectElement>document.getElementById("condition"));
        let conditionOptions: HTMLCollection = selectConditions.options; // Why?? Shouldn't this return an HTMLOptionsCollection?
        let i = 0;
        for (let a of conditions) {
            conditionOptions[i] = new Option(a);
            if (a === state.condition) {
                selectConditions.selectedIndex = i;
            }
            i++;
        }
    }

    function loadActions(state: IEventState) {
        let scriptClass = (<HTMLSelectElement>document.getElementById("script")).value;
        let actions: string[] = Resource.listScriptActions(scriptClass);
        let selectActions = (<HTMLSelectElement>document.getElementById("action"));
        let actionOptions: HTMLCollection = selectActions.options; // Why?? Shouldn't this return an HTMLOptionsCollection?
        let i = 0;
        for (let a of actions) {
            actionOptions[i] = new Option(a);
            if (a === state.action) {
                selectActions.selectedIndex = i;
            }
            i++;
        }
    }

    function loadCharacterProperties(currentState: IEventState) {
        let selectCharasets: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("charasets"));
        Resource.listResources(Resource.TypeEnum.CHAR, function(list: string[]) {
            let options: HTMLCollection = selectCharasets.options;
            options[0] = new Option("");
            for (let i = 0; i < list.length; i++) {
                options[i + 1] = new Option(list[i]);
                if (list[i] === currentState.charaset) {
                    selectCharasets.selectedIndex = i + 1;
                }
            }
        });

        let visible: boolean = currentState.visible;
        if (Utils.isEmpty(visible)) {
            visible = true;
        }
        (<HTMLInputElement>document.getElementById("visible")).checked = visible;

        let opacity: number = Number.parseInt(currentState.opacity + "");
        if (Utils.isEmpty(opacity) || Number.isNaN(opacity) || opacity < 0 || opacity > 100) {
            opacity = 100;
        }
        (<HTMLInputElement>document.getElementById("opacity")).valueAsNumber = opacity;

        let directionOptions = (<HTMLSelectElement>document.getElementById("direction")).options;
        directionOptions[DirectionEnum.UP] = new Option("Up");
        directionOptions[DirectionEnum.RIGHT] = new Option("Right");
        directionOptions[DirectionEnum.DOWN] = new Option("Down");
        directionOptions[DirectionEnum.LEFT] = new Option("Left");
        let direction: number = Number.parseInt(currentState.direction + "");
        if (Utils.isEmpty(direction) || Number.isNaN(direction) || direction < DirectionEnum.UP || direction > DirectionEnum.NONE) {
            direction = DirectionEnum.DOWN;
        }
        (<HTMLSelectElement>document.getElementById("direction")).selectedIndex = direction;

        let i = 0;
        let speedOptions: HTMLCollection = (<HTMLSelectElement>document.getElementById("speed")).options;
        let frequencyOptions: HTMLCollection = (<HTMLSelectElement>document.getElementById("frequency")).options;
        for (let s of scaleOptions) {
            speedOptions[i] = new Option(s);
            frequencyOptions[i] = new Option(s);
            i++;
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

        let rotationOptions = (<HTMLSelectElement>document.getElementById("rotation")).options;
        rotationOptions[RotationEnum.OFF] = new Option("Off");
        rotationOptions[RotationEnum.CLOCKWISE] = new Option("Clockwise");
        rotationOptions[RotationEnum.COUNTERCLOCKWISE] = new Option("Counterclockwise");
        let rotation: number = Number.parseInt(currentState.rotation + "");
        if (Utils.isEmpty(rotation) || Number.isNaN(rotation) || rotation < RotationEnum.OFF || rotation > RotationEnum.COUNTERCLOCKWISE) {
            rotation = RotationEnum.OFF;
        }
        (<HTMLSelectElement>document.getElementById("rotation")).selectedIndex = rotation;

        let ontopOptions = (<HTMLSelectElement>document.getElementById("ontop")).options;
        ontopOptions[Constant.ZIndex.LV0] = new Option("Off");
        ontopOptions[Constant.ZIndex.LV1] = new Option("Liv. 1");
        ontopOptions[Constant.ZIndex.LV2] = new Option("Liv. 2");
        ontopOptions[Constant.ZIndex.LV3] = new Option("Liv. 3");
        ontopOptions[Constant.ZIndex.LV4] = new Option("Liv. 4");
        let ontop: number = Number.parseInt(currentState.onTop + "");
        if (Utils.isEmpty(ontop) || Number.isNaN(ontop) || ontop < Constant.ZIndex.LV0 || ontop > Constant.ZIndex.LV4) {
            ontop = Constant.ZIndex.LV0;
        }
        (<HTMLSelectElement>document.getElementById("ontop")).selectedIndex = ontop;

        let block: boolean = currentState.block;
        if (Utils.isEmpty(block)) {
            block = true;
        }
        (<HTMLInputElement>document.getElementById("block")).checked = block;
    }

    function readEventStateDetails(): void {
        let currentState: IEventState = {
            condition: (<HTMLInputElement>document.getElementById("condition")).value,
            trigger: (<HTMLSelectElement>document.getElementById("trigger")).selectedIndex,
            action: (<HTMLInputElement>document.getElementById("action")).value,
            charaset: (<HTMLSelectElement>document.getElementById("charasets")).value
        }

        let visible: boolean = (<HTMLInputElement>document.getElementById("visible")).checked;
        if (visible) {
            visible = undefined;
        }
        currentState.visible = visible;

        let opacity: number = (<HTMLInputElement>document.getElementById("opacity")).valueAsNumber;
        if (Utils.isEmpty(opacity) || Number.isNaN(opacity) || opacity < 0 || opacity >= 100) {
            opacity = undefined;
        }
        currentState.opacity = opacity;

        let direction: number = (<HTMLSelectElement>document.getElementById("direction")).selectedIndex;
        if (Utils.isEmpty(direction) || direction < DirectionEnum.UP || direction > DirectionEnum.LEFT) {
            direction = undefined;
        }
        currentState.direction = direction;

        let speed: number = (<HTMLSelectElement>document.getElementById("speed")).selectedIndex;
        let frequency: number = (<HTMLSelectElement>document.getElementById("frequency")).selectedIndex;
        if (Utils.isEmpty(speed) || speed < ScaleEnum.VERY_LOW || speed > ScaleEnum.VERY_HIGH || speed === ScaleEnum.MEDIUM) {
            speed = undefined;
        }
        if (Utils.isEmpty(frequency) || frequency < ScaleEnum.VERY_LOW || frequency > ScaleEnum.VERY_HIGH || frequency === ScaleEnum.MEDIUM) {
            frequency = undefined;
        }
        currentState.speed = speed;
        currentState.frequency = frequency;

        let rotation: number = (<HTMLSelectElement>document.getElementById("rotation")).selectedIndex;
        if (Utils.isEmpty(rotation) || rotation <= RotationEnum.OFF || rotation > RotationEnum.COUNTERCLOCKWISE) {
            rotation = undefined;
        }
        currentState.rotation = rotation;

        let ontop: number = (<HTMLSelectElement>document.getElementById("ontop")).selectedIndex;
        if (Utils.isEmpty(ontop) || ontop <= Constant.ZIndex.LV0 || ontop > Constant.ZIndex.LV4) {
            ontop = undefined;
        }
        currentState.onTop = ontop;

        let block: boolean = (<HTMLInputElement>document.getElementById("block")).checked;
        if (block) {
            block = undefined;
        }
        currentState.block = block;

        let state = (<HTMLInputElement>document.getElementById("state")).valueAsNumber;
        currentEvent.states[state - 1] = currentState;
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
        let scriptClasses: Map<string, string> = Resource.listScriptClasses();
        let selectScript = (<HTMLSelectElement>document.getElementById("script"));
        let classes: Map<string, string> = Resource.listScriptClasses();
        let options: HTMLCollection = selectScript.options; // Why?? Shouldn't this return an HTMLOptionsCollection?
        let i = 0;
        for (let c of classes) {
            options[i] = new Option(c[0]);
            options[i]["title"] = c[1];
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
            table.removeChild(table.lastChild);
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
            EventManager.deleteMem(currentEvent, key);
        };
        button.innerText = "-";
        td.appendChild(button);
    }
}