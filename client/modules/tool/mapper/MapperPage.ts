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
                    $("#tiles").val(node.data.tile);
                    TilePicker.loadTile(node.data.tile, function(tilePicker: TilePickerScene) {
                        Mapper.start(canvas, tilePicker, parseInt(node.id));
                    });
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
        var node = $("#mapPanel").jstree(true).get_selected(true)[0];
        node.data.tile = $("#tiles").val();
        TilePicker.loadTile(node.data.tile, function(tilePicker: TilePickerScene) {
            Mapper.changeTile(node.data.tile, tilePicker);
        });
        changeEditState(true);
    }

    export function save() {
        if(!Utils.isEmpty(currentEvent)) {
            let confirmed: boolean = confirmCloseEventDetails();
            if(!confirmed) {
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
        Mapper.reloadMap();
        $("#mapPanel").jstree(true).refresh(false, false);
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
        eventModified();
        //TODO    
    }
    
    export function changeEventCharaset() {
        eventModified();
        //TODO    
    }
    
    export function deleteEvent() {
        Mapper.deleteEvent(currentEvent);
        loadEvent(undefined, false);
    }
    
    export function deleteEventState() {
        let currentEventState = (<HTMLInputElement> document.getElementById("state")).valueAsNumber;
        if((currentEventState > 1 || (currentEventState === 1 && currentEvent.states.length > 1))
          && currentEventState <= currentEvent.states.length) {
            currentEvent.states.splice(currentEventState - 1, 1);
            if(currentEventState > 1) {
                (<HTMLInputElement> document.getElementById("state")).valueAsNumber -= 1;
            }
            loadEventState(false);
        }
    }
    
    export function loadEventState(readPreviousState: boolean = true) {
        if(readPreviousState) {
            readEventStateDetails();
        }
        let currentEventState = (<HTMLInputElement> document.getElementById("state")).valueAsNumber;
        if(Utils.isEmpty(currentEvent.states)) {
            currentEvent.states = [];
        }
        if(currentEventState > currentEvent.states.length) {
            currentEvent.states[currentEventState - 1] = EventManager.getNewEventState();
        }
        let state: IEventState = currentEvent.states[currentEventState - 1];
        (<HTMLInputElement> document.getElementById("condition")).value = state.condition;
        let select: HTMLSelectElement = (<HTMLSelectElement> document.getElementById("trigger"));
        let options: HTMLCollection = select.options;
        options[ActionTriggerEnum.CLICK] = new Option("Click"); 
        options[ActionTriggerEnum.TOUCH] = new Option("Touch");
        options[ActionTriggerEnum.OVER] = new Option("Over");
        options[ActionTriggerEnum.AUTO] = new Option("(auto)");
        select.selectedIndex = state.trigger;        
        (<HTMLInputElement> document.getElementById("action")).value = state.action;
        // Update total states count
        (<HTMLElement> document.getElementById("tot")).innerText = currentEvent.states.length + "";
    }
    
    export function loadEvent(event?: IEvent, askConfirm: boolean = true): boolean {
        if(event !== undefined) {
            if(askConfirm) {
                let confirmed: boolean = confirmCloseEventDetails();
                if(!confirmed) {
                    return false;
                }
            }
        } else {
            event = EventManager.getNewEvent();
            MapperPage.eventModified(false);
        }
        currentEvent = event;
        (<HTMLInputElement> document.getElementById("name")).value = event.name;
        let select: HTMLSelectElement = (<HTMLSelectElement> document.getElementById("charasets"));
        let options: HTMLCollection = select.options;
        //TODO load from service
        options[0] = new Option(""); 
        options[1] = new Option("155-Animal05.png"); 
        options[2] = new Option("fart.png");
        options[3] = new Option("gigante.png");
        options[4] = new Option("ann.png");
        select.selectedIndex = 0; //TODO preselect from event
        (<HTMLInputElement> document.getElementById("eventi")).valueAsNumber = event.i;
        (<HTMLInputElement> document.getElementById("eventj")).valueAsNumber = event.j;
        (<HTMLInputElement> document.getElementById("script")).value = event.script;
        (<HTMLInputElement> document.getElementById("state")).valueAsNumber = 1;
        loadEventState(false);
        return true;
    }
    
    export function readEventDetails(): void {
        if(currentEvent !== undefined) {
            currentEvent.name = (<HTMLInputElement> document.getElementById("name")).value;
            currentEvent.charaset = (<HTMLSelectElement> document.getElementById("charasets")).value;
            currentEvent.i = (<HTMLInputElement> document.getElementById("eventi")).valueAsNumber;
            currentEvent.j = (<HTMLInputElement> document.getElementById("eventj")).valueAsNumber;
            currentEvent.script = (<HTMLInputElement> document.getElementById("script")).value;
            readEventStateDetails();
            Mapper.addEvent(currentEvent);
            MapperPage.eventModified(false);
        }
    }
    
    function readEventStateDetails(): void {
        let state: IEventState = {
            condition: (<HTMLInputElement> document.getElementById("condition")).value,
            trigger: (<HTMLSelectElement> document.getElementById("trigger")).selectedIndex,
            action: (<HTMLInputElement> document.getElementById("action")).value
        }
        let currentEventState = (<HTMLInputElement> document.getElementById("state")).valueAsNumber;
        currentEvent.states[currentEventState - 1] = state;
    }
    
    export function finishEventEditing(): boolean {
        let confirmed: boolean = confirmCloseEventDetails();
        if(!confirmed) {
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
        if(!flagEventModified) {
            return true;
        }
        return confirm("Event details not saved. If you continue, details of the currently selected event will be lost. Are you sure you want to continue?");
    }
    
    export function eventModified(modified: boolean = true) {
        flagEventModified = modified;
        (<HTMLButtonElement> document.getElementById("saveEvent")).disabled = !modified;
    }
}