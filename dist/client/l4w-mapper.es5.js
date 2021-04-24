"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e74) { throw _e74; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e75) { didErr = true; err = _e75; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! For license information please see l4w-mapper.js.LICENSE.txt */
var L4W_mapper;

(function () {
  var e = {
    24: function _(e, t, n) {
      var i = n(15),
          o = n(645)(i);
      o.push([e.id, "\n.container[data-v-582c06ce] {\n    overflow: auto;\n}\n.autotile[data-v-582c06ce] {\n    width: 32px;\n    height: 32px;\n    overflow: hidden;\n    float:left;\n    background-color: yellow;\n    border:1px solid gray;\n}\n.autotile img[data-v-582c06ce] {\n    margin: 0 0 0 -64px;\n}\n.autotile img[data-v-582c06ce]:hover {\n    opacity: 0.5;\n}\n.selected[data-v-582c06ce] {\n    border-color: red !important;\n}\n", "", {
        version: 3,
        sources: ["webpack://./src/client/components/AutotilePicker.vue"],
        names: [],
        mappings: ";AAgEA;IACA,cAAA;AACA;AACA;IACA,WAAA;IACA,YAAA;IACA,gBAAA;IACA,UAAA;IACA,wBAAA;IACA,qBAAA;AACA;AACA;IACA,mBAAA;AACA;AACA;IACA,YAAA;AACA;AACA;IACA,4BAAA;AACA",
        sourcesContent: ['<template>\n    <div class="container">\n        <div v-bind:class="{ selected: autotile.selected, autotile: true }" v-for="autotile in autotiles" v-bind:key="autotile.image" v-on:click="select(autotile)">\n            <img :src="\'../assets/autotile/\' + autotile.image" />\n        </div>\n    </div>\n</template>\n<script lang="ts">\nimport Vue from "vue"\n\nimport { IAutoTileset } from "../../common/model/Tileset";\nimport { DataDefaults } from "../../common/DataDefaults";\nimport { Resource } from "../core/util/Resource";\nimport { ResourceType } from "../../common/Constants";\nimport { TilePicker } from "../tool/mapper/TilePicker";\nimport { Mapper } from "../tool/mapper/Mapper";\n\nexport default Vue.extend({\n    name: "autotile-picker",\n    data: function(): {\n        autotiles: IAutoTileset[]\n    } {\n        return {\n            autotiles: [ DataDefaults.getAutoTileset() ]\n        };\n    },\n    mounted: function() {\n        // Register custom event listener\n        this.$root.$on("cancel-selection", this.cancelSelection)\n\n        // Load autotiles\n        Resource.listResources(ResourceType.AUTOTILE, (autotileImages) => {\n            if(autotileImages !== undefined && autotileImages.length > 0) {\n                // Initialize IAutotiles array\n                Vue.set(this, "autotiles",  new Array());\n                for(let autotileImage of autotileImages) {\n                    this.autotiles.push({\n                        blocked: false,\n                        image: autotileImage\n                    });\n                }\n            }\n        });\n    },\n    methods: {\n        select(autotile: IAutoTileset) {\n            TilePicker.cancelSelection();\n            for(let at of this.autotiles) {\n                let selected = at.image === autotile.image;\n                Vue.set(at, "selected", selected);\n            }\n            Mapper.onAutotileSelection(autotile.image);\n        },\n        cancelSelection() {\n            TilePicker.cancelSelection();\n            for(let at of this.autotiles) {\n                Vue.set(at, "selected", false);\n            }\n            Mapper.onAutotileSelection(undefined);\n        }\n    }\n});\n<\/script>\n<style scoped>\n.container {\n    overflow: auto;\n}\n.autotile {\n    width: 32px;\n    height: 32px;\n    overflow: hidden;\n    float:left;\n    background-color: yellow;\n    border:1px solid gray;\n}\n.autotile img {\n    margin: 0 0 0 -64px;\n}\n.autotile img:hover {\n    opacity: 0.5;\n}\n.selected {\n    border-color: red !important;\n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = o;
    },
    98: function _(e, t, n) {
      var i = n(15),
          o = n(645)(i);
      o.push([e.id, "\n.dialogNodeDetails[data-v-73ccf623]{\n    text-align: left;\n    padding: 0.5em;\n}\n.dialogEdgeDetails[data-v-73ccf623]{\n    text-align: left;\n\tborder: 1px dotted black;\n    margin: 0.5em;\n    padding: 0.5em;\n}\n.elementId[data-v-73ccf623] {\n    float: right;\n    font-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSelectionDetails[data-v-73ccf623]{\n\tborder: 1px dotted black;\n\tmargin: 0.5em;\n}\n.dialogMessage[data-v-73ccf623]{\n\tfloat: left;\n\tborder: 10px solid black;\n\tmargin: 0.5em;\n}\n.message[data-v-73ccf623]{\n    width: 21em;\n    height: 3em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.nodeClosingTimeout[data-v-73ccf623]{\n    width: 6em;\n}\n", "", {
        version: 3,
        sources: ["webpack://./src/client/components/DialogEditor.vue"],
        names: [],
        mappings: ";AAmTA;IACA,gBAAA;IACA,cAAA;AACA;AACA;IACA,gBAAA;CACA,wBAAA;IACA,aAAA;IACA,cAAA;AACA;AACA;IACA,YAAA;IACA,kBAAA;CACA,sBAAA;AACA;AACA;CACA,wBAAA;CACA,aAAA;AACA;AACA;CACA,WAAA;CACA,wBAAA;CACA,aAAA;AACA;AACA;IACA,WAAA;IACA,WAAA;IACA,qEAAA;IACA,kBAAA;IACA,iBAAA;IACA,gBAAA;AACA;AACA;IACA,UAAA;AACA",
        sourcesContent: ['<template>\n    <div>\n        <div>\n            \x3c!-- Dialog node editor --\x3e\n            <div class="dialogNodeDetails">\n                <div class="elementId">N{{ node.id }}</div>\n                <textarea ref="dialogNodeMessage" class="message" type="text" placeholder="<message>" v-model="node.message"/><br>\n                \x3c!-- TODO Generic message: <select id="genericMessage"></select><br/> --\x3e\n                Face: <select ref="nodes" v-model="node.face" v-on:change="onFaceChange($event, node)">\n                    <option selected value="">&nbsp;</option>\n                    <option v-for="option in faces" v-bind:key="option" v-bind:value="option">\n                        {{ option }}\n                    </option>\n                </select>\n                Name: <input v-model="node.name" /><br />\n                Autoclose in <input ref="nodeClosingTimeout" type="number" min="0" max="10000" step="1" v-model="node.closingTimeout"/> msec<br>\n                <br>\n                <div style="float:none"/>\n                \x3c!-- Disabled edges selection, until it is needed bad enough to justify fixing the render stack overflow problem --\x3e\n                \x3c!--\n                Connect to <select ref="edges" v-on:change="onEdgeChange($event)">\n                    <option selected disabled value="">&nbsp;</option>\n                    <option v-for="option in edgeIds" v-bind:key="option" v-bind:value="option">\n                        {{ option }}\n                    </option>\n                </select> or \n                --\x3e\n                <button v-on:click="addEdge()">Create new edge</button>\n                <br>\n            </div>\n            \n            \x3c!-- Dialog edge editor --\x3e\n            <div class="dialogEdgeDetails" v-for="edge in node.edges" v-bind:key="edge.id">\n                <div class="elementId">E{{ edge.id }}</div>\n                <textarea ref="dialogEdgeMessage" class="message" type="text" placeholder="<message>" v-model="edge.message"/><br>\n\n                Condition <select ref="edgeCondition" v-model="edge.condition">\n                    <option v-for="option in edgeConditions" v-bind:key="option" v-bind:value="option">\n                        {{ option }}\n                    </option>\n                </select><br>\n                <div v-if="edge.condition">Cond. param: <input class="edgeConditionParameters" type="text" v-model="edge.conditionParams"/><br></div>\n\n                Script <select ref="edgeScript" v-model="edge.script" v-on:change="onScriptChange($event, edge)">\n                    <option v-for="option in edgeScripts" v-bind:key="option[0]" v-bind:value="option[0]">\n                        {{  option[0] + " (" + option[1] + ")" }}\n                    </option>\n                </select><br>\n                <div v-if="edge.script !== undefined">\n                    Action <select ref="edgeAction" v-model="edge.action">\n                        <option v-for="option in edge.actions" v-bind:key="option" v-bind:value="option">\n                            {{  option }}\n                        </option>\n                    </select>\n                </div>\n                \n                <div style="float:none"/>\n                <button style="color:red;float:right" title="Remove this edge (if disconnected, will be deleted when saving)" v-on:click="deleteEdge(edge)">Remove</button>\n                <br>\n                <br>\n                Connect to <select ref="nodes" v-model="edge.nodeId" v-on:change="onNodeChange($event, edge)">\n                    <option selected disabled value="">&nbsp;</option>\n                    <option v-for="option in nodeIds" v-bind:key="option" v-bind:value="option">\n                        {{ option }}\n                    </option>\n                </select>\n                <span v-if="edge.nodeId === undefined"> or <button v-on:click="addNode(edge)">Create new node</button></span>\n                <span v-else> or <button style="color:red" title="Remove this node (if disconnected, will be deleted when saving)" v-on:click="deleteNode(edge)">Remove node</button></span>            \n            </div>\n        </div>\n\n        \x3c!-- TODO --\x3e\n        \x3c!--\n        <div id="genericMessageArea" style="display:block">\n            <div class="dialogMessage">\n                Message &amp; GenericMessage editor\n\n                // A message that can be resolved to different strings, based on some conditions\n                IGenericMessage\n                    id: number; // ID of the generic string\n                    description: string; // Description of the generic string\n                    condition?: string; // Name of function that returns true if this state can be active (see Conditions.ts)\n                    values: IGenericMessageValue[]; // Array of possible values for this generic message\n                    \n                // Single value that could be used for a generic message\n                IGenericMessageValue\n                    message: string; // String of the message\n                    conditionParams: string; // Parameters to be used for evaluating the condition\n            </div>\n        </div>\n        --\x3e\n\t</div>\n</template>\n\n<script lang="ts">\nimport Vue, { PropType } from "vue"\nimport { Resource } from "../core/util/Resource";\nimport { DataDefaults } from "../../common/DataDefaults";\nimport { ResourceType } from "../../common/Constants";\nimport { Utils } from "../../common/Utils";\nimport { IDialogNode, IDialogEdge } from "../../common/model/Dialog";\nimport { DialogManager } from "../core/manager/DialogManager";\nimport { MapperPage } from "../tool/mapper/MapperPage";\n\nexport default Vue.extend({\n    name: "dialog-editor",\n    props: {\n        node: {\n            type: Object as PropType<IDialogNode>,\n            required: true\n        },\n        dialog: {\n            type: Object as PropType<IDialogNode>,\n            required: true\n        },\n        disconnectedNodes: {\n            type: Array as () => Array<IDialogNode>,\n            required: true\n        },\n        nodeIds: {\n            type: Array as () => Array<number>,\n            required: true\n        },\n        edgeIds: {\n            type: Array as () => Array<number>,\n            required: true\n        },\n        edgeConditions: {\n            type: Array as () => Array<string>,\n            default: function() {\n                return [];\n            }\n        },\n        edgeScripts: {\n            type: Map,\n            default: function() {\n                return new Map<string,string>();\n            }\n        },\n        edgeActions: {\n            type: Array as () => Array<string>,\n            default: function() {\n                return [];\n            }\n        },\n        faces: {\n            type: Array as () => Array<string>,\n            default: function() {\n                return [];\n            }\n        }\n    },\n    mounted: function() {\n        // Register custom event listener\n        this.$root.$on("update-focus", this.updateFocus);\n\n        // Populate static comboboxes\n        for(let condition of Resource.listEventStateConditions()) {\n            this.edgeConditions.push(condition);\n        }\n        for(let script of Resource.listScriptClasses()) {\n            this.edgeScripts.set(script[0], script[1]);\n        }\n        if(this.node.edges !== undefined) {\n            for(let edge of this.node.edges) {\n                // Reload edge actions\n                loadEdgeScriptActions(edge);\n            }\n        }\n        let moduleContext = this;\n        Resource.listResources(ResourceType.FACE, function(list?: string[]) {\n            if(list !== undefined) {\n                for(let face of list) {\n                    moduleContext.faces.push(face);\n                }\n            }\n        });\n    },\n    methods: {\n        addEdge() {\n            if(this.node.edgeIds === undefined) {\n                Vue.set(this.node, "edgeIds", []);\n            }\n            if(this.node.edges === undefined) {\n                Vue.set(this.node, "edges", []);\n            }\n            let edgeId = getNextId(this.edgeIds);\n            this.node.edgeIds!.push(edgeId);\n            this.node.edges!.push(DataDefaults.getDialogEdge(edgeId));\n            this.edgeIds.push(edgeId);\n            // Focus last edge\n            this.$nextTick(() => {\n                if(this.$refs.dialogEdgeMessage !== undefined && this.node.edges![this.node.edges!.length - 1].message === undefined) {\n                    this.$refs.dialogEdgeMessage[this.node.edges!.length - 1].focus();\n                }\n            });\n        },\n        deleteEdge(edge: IDialogEdge) {\n            this.node.edgeIds!.splice(this.node.edgeIds!.indexOf(edge.id), 1);\n            this.node.edges!.splice(this.node.edges!.indexOf(edge), 1);\n        },\n        addNode(edge: IDialogEdge) {\n            let nodeId = getNextId(this.nodeIds);\n            Vue.set(edge, "nodeId", nodeId);\n            Vue.set(edge, "node", DataDefaults.getDialogNode(nodeId));\n            this.nodeIds.push(nodeId);\n            // When creating a new node, immediately select it\n            MapperPage.loadDialogEditor(nodeId);\n        },\n        deleteNode(edge: IDialogEdge) {\n            // Back it up, so that it can be selected\n            // even if it it disconnected from the tree\n            this.disconnectedNodes.push(edge.node!);\n            Vue.set(edge, "nodeId", undefined);\n            Vue.set(edge, "node", undefined);\n        },\n        onEdgeChange(event: Event) {\n            let edgeId = parseInt((<HTMLSelectElement> event.target).selectedOptions.item(0)!.value);\n            if(this.node.edgeIds === undefined) {\n                Vue.set(this.node, "edgeIds", []);\n            } else if(this.node.edgeIds.includes(edgeId)) {\n                // Edge already connected, cannot duplicate it\n                return;\n            }\n            if(this.node.edges === undefined) {\n                Vue.set(this.node, "edges", []);\n            }\n            let edge = DialogManager.search(this.dialog, edgeId, true);\n            if(edge !== undefined) {\n                this.node.edgeIds!.push(edgeId);\n                this.node.edges!.push(<IDialogEdge> edge);\n            }\n        },\n        onNodeChange(event: Event, edge: IDialogEdge) {\n            let isNodeReferenced = true;\n            let nodeId = parseInt((<HTMLSelectElement> event.target).selectedOptions.item(0)!.value);\n            // Search it in the dialog tree\n            let node = DialogManager.search(this.dialog, nodeId, false);\n            if(node === undefined) {\n                // Search it in the disconnected nodes\n                for(let disconnectedNode of this.disconnectedNodes) {\n                    if(disconnectedNode.id === nodeId) {\n                        node = disconnectedNode;\n                        isNodeReferenced = false;\n                        break;\n                    }\n                }\n            }\n            if(node !== undefined) {\n                Vue.set(edge, "nodeReferenced", isNodeReferenced);\n                Vue.set(edge, "nodeId", nodeId);\n                Vue.set(edge, "node", node);\n            }\n        },\n        onScriptChange(event: Event, edge: IDialogEdge) {\n            loadEdgeScriptActions(edge);\n        },\n        onFaceChange(event: Event, node: IDialogNode) {\n            if(node.name === undefined && !Utils.isEmpty(node.face)) {\n                // Initialize the name for this dialog node with the selected faceset file name\n                node.name = node.face!.replace(".png","").replace(".jpg","");\n            }\n        },\n        updateFocus() {\n            let edges = <HTMLSelectElement[]> this.$refs.edges;\n            if(edges !== undefined && edges[0].options !== undefined) {\n                // Reset at the first option (the empty one)\n                edges[0].options[0].selected = true;\n            }\n            let nodes = <HTMLSelectElement[]> this.$refs.nodes;\n            if(nodes !== undefined && edges !== undefined) {\n                for(let edge of edges) {\n                    // Reset at the first option (the empty one)\n                    if(edge.options !== undefined) {\n                        edge.options[0].selected = true;\n                    }\n                }\n            }\n            // Focus node message\n            if(this.node !== undefined && this.$refs.dialogNodeMessage != undefined) {\n                (<HTMLElement> this.$refs.dialogNodeMessage).focus();\n            }\n        }\n    }\n});\n\nfunction getNextId(ids: number[]): number {\n    let maxId = DataDefaults.DEFAULT_ID;\n    for(let id of ids) {\n        if(id > maxId) {\n            maxId = id;\n        }\n    }\n    return maxId + 1;\n}\n\nfunction loadEdgeScriptActions(edge: IDialogEdge): void {\n    if(edge.script !== undefined) {\n        Vue.set(edge, "actions", []);\n        for(let action of Resource.listScriptActions(edge.script)) {\n            edge.actions!.push(action);\n        }\n    }\n}\n<\/script>\n\n<style scoped>\n.dialogNodeDetails{\n    text-align: left;\n    padding: 0.5em;\n}\n.dialogEdgeDetails{\n    text-align: left;\n\tborder: 1px dotted black;\n    margin: 0.5em;\n    padding: 0.5em;\n}\n.elementId {\n    float: right;\n    font-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSelectionDetails{\n\tborder: 1px dotted black;\n\tmargin: 0.5em;\n}\n.dialogMessage{\n\tfloat: left;\n\tborder: 10px solid black;\n\tmargin: 0.5em;\n}\n.message{\n    width: 21em;\n    height: 3em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.nodeClosingTimeout{\n    width: 6em;\n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = o;
    },
    489: function _(e, t, n) {
      var i = n(15),
          o = n(645)(i);
      o.push([e.id, '\nul[data-v-06f2eb40] {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.dialogSummaryRow[data-v-06f2eb40] {\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\n\t-moz-user-select: none;     /* Firefox all */\n\t-ms-user-select: none;      /* IE 10+ */\n\tuser-select: none;          /* Likely future */  \n\tborder: 1px solid transparent;\n    cursor: pointer;\n    display: inline-block; /* Avoid newLine after list custom symbol */\n}\n.dialogSummaryRow[data-v-06f2eb40]:hover {\n\tborder: 1px dotted blue;\n}\n.edge[data-v-06f2eb40] {\n    font-style: italic;\n    display: inline-block;\n}\n.edge[data-v-06f2eb40]:before {\n    content: ">"; /* Insert content as new list symbol */\n    margin-right: 6px;\n    font-style: italic;\n}\n.elementId[data-v-06f2eb40] {\n    display: inline-block;\n\tfont-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSummarySubnode[data-v-06f2eb40] {\n    margin-left: 2em;\n}\n.endElement[data-v-06f2eb40] {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px solid black;\n}\n.jumpElement[data-v-06f2eb40] {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px dashed black;\n}\n.selectedNode[data-v-06f2eb40] {\n    background: lightyellow;\n}\n.unselectedNode[data-v-06f2eb40] {\n    background: white;\n}\n', "", {
        version: 3,
        sources: ["webpack://./src/client/components/DialogSummary.vue"],
        names: [],
        mappings: ";AAgEA;IACA,gBAAA;IACA,UAAA;IACA,SAAA;AACA;AACA;CACA,yBAAA,GAAA,4BAAA;CACA,sBAAA,MAAA,gBAAA;CACA,qBAAA,OAAA,WAAA;CACA,iBAAA,WAAA,kBAAA;CACA,6BAAA;IACA,eAAA;IACA,qBAAA,EAAA,2CAAA;AACA;AACA;CACA,uBAAA;AACA;AACA;IACA,kBAAA;IACA,qBAAA;AACA;AACA;IACA,YAAA,EAAA,sCAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;IACA,qBAAA;CACA,kBAAA;CACA,sBAAA;AACA;AACA;IACA,gBAAA;AACA;AACA;IACA,WAAA;IACA,aAAA;IACA,0BAAA;AACA;AACA;IACA,WAAA;IACA,aAAA;IACA,2BAAA;AACA;AACA;IACA,uBAAA;AACA;AACA;IACA,iBAAA;AACA",
        sourcesContent: ['<template>\n    <div :class="[ selectedNodeId.id === node.id ? \'selectedNode\' : \'unselectedNode\' ]">\n        <div class="dialogSummaryRow" v-bind:onclick="\'L4W_mapper.MapperPage.loadDialogEditor(\' + node.id + \')\'">\n            <a v-bind:name="node.id" />\n            {{ node.message | str_limit() }} <div class="elementId">N{{ node.id }}</div>\n        </div>\n        <ul>\n            <li v-for="edge in node.edges" v-bind:key="edge.id">\n                <div class="dialogSummaryRow" v-bind:onclick="\'L4W_mapper.MapperPage.loadDialogEditor(\' + node.id + \')\'">\n                    <div class="edge">{{ edge.message | str_limit() }}</div> <div class="elementId">E{{ edge.id }}</div>\n                </div>\n                <div v-if="edge.node !== undefined" class="dialogSummarySubnode">\n                    <div v-if="!edge.nodeReferenced">\n                        \x3c!-- Recursive template render --\x3e\n                        <dialog-summary :node="edge.node" :selected-node-id="selectedNodeId" />\n                    </div>\n                    <div v-else>\n                        \x3c!-- To avoid repetition, only include message --\x3e\n                        <div class="dialogSummaryRow unselectedNode" v-bind:onclick="\'L4W_mapper.MapperPage.loadDialogEditor(\' + edge.node.id + \')\'">\n                            {{ edge.node.message | str_limit() }} <div class="elementId"><a v-bind:href="\'#\' + edge.node.id">(N{{ edge.node.id }})</a></div>\n                        </div>\n                        <div class="jumpElement" />\n                    </div>\n                </div>\n            </li>\n        </ul>\n        <div class="endElement" />\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue, { PropType } from "vue"\nimport { IDialogNode } from "../../common/model/Dialog";\n\nexport default Vue.extend({\n    name: "dialog-summary",\n    props: {\n        node: {\n            type: Object as PropType<IDialogNode>,\n            required: true\n        },\n        selectedNodeId: {\n            type: Object as PropType<{ id: number }>,\n            required: true\n        }\n    }\n})\n\nVue.filter("str_limit", function (value: string, size?: number) {\n    if (value === undefined) {\n        return "";\n    } \n    value = value.toString();\n    if(size === undefined) {\n        size = 45;\n    }\n    if (value.length <= size) {\n        return value;\n    }\n    return value.substr(0, size) + "...";\n});\n<\/script>\n\n<style scoped>\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.dialogSummaryRow {\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\n\t-moz-user-select: none;     /* Firefox all */\n\t-ms-user-select: none;      /* IE 10+ */\n\tuser-select: none;          /* Likely future */  \n\tborder: 1px solid transparent;\n    cursor: pointer;\n    display: inline-block; /* Avoid newLine after list custom symbol */\n}\n.dialogSummaryRow:hover {\n\tborder: 1px dotted blue;\n}\n.edge {\n    font-style: italic;\n    display: inline-block;\n}\n.edge:before {\n    content: ">"; /* Insert content as new list symbol */\n    margin-right: 6px;\n    font-style: italic;\n}\n.elementId {\n    display: inline-block;\n\tfont-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSummarySubnode {\n    margin-left: 2em;\n}\n.endElement {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px solid black;\n}\n.jumpElement {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px dashed black;\n}\n.selectedNode {\n    background: lightyellow;\n}\n.unselectedNode {\n    background: white;\n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = o;
    },
    201: function _(e, t, n) {
      var i = n(15),
          o = n(645)(i);
      o.push([e.id, "\n.root[data-v-08ab550b] {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div[data-v-08ab550b] {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon[data-v-08ab550b] {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading[data-v-08ab550b] {\n    width: 2em;\n    height: 2em;\n}\n", "", {
        version: 3,
        sources: ["webpack://./src/client/components/Login.vue"],
        names: [],
        mappings: ";AAyMA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;AACA;AACA;IACA,YAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;AACA;AACA;IACA,iBAAA;IACA,mBAAA;IACA,mBAAA;IACA,4BAAA;AACA;AACA;IACA,iBAAA;IACA,oBAAA;IACA,kBAAA;IACA,2BAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA",
        sourcesContent: ['<template>\n    <div class="root">\n        <script type="application/javascript" async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"><\/script>\n        <script type="application/javascript" async defer src="https://apis.google.com/js/platform.js?onload=gAsyncInit"><\/script>\n        <div v-show="!loginStatus">\n            \x3c!-- <img class="statusIcon unloggedIcon" src="/style/ui/unlogged.png" alt="Unlogged icon" title="You are not currently logged in"> --\x3e\n            \x3c!-- Google login --\x3e\n            <div class="g-signin2" data-onsuccess="gLoginCallback" data-theme="dark"></div>\n            \x3c!-- Facebook login --\x3e\n            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false"\n                data-use-continue-as="false" data-width="" data-scope="email" ></div>\n            <br>\n            <slot name="unlogged"></slot>\n        </div>\n        <div v-if="loginStatus">\n            <img class="statusIcon loggedIcon" src="/style/ui/logged.png" alt="Logged icon" title="You are currently logged in!">\n            <br>\n            <div v-if="flagLoggingOut">\n                <img class="loading" src="/style/ui/spinner.gif" alt="logging out..." />\n            </div>\n            <div v-else>\n                <button v-on:click="logout">Logout</button>\n                <br><br>\n                <slot name="logged"></slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue from "vue"\nimport { Resource } from "../core/util/Resource"\nimport { AuthService, IAuthRequest, IAuthResponse } from "../../common/ServerAPI"\nimport { Utils } from "../../common/Utils";\n\ndeclare let FB: any; // Loaded from Facebook script\ndeclare let gapi: any; // Loaded from Google script\n\ninterface FBLoginResponse {\n    status: "connected" | "not_authorized" | "unknown",\n    authResponse?: {\n        accessToken: string,\n        expiresIn: any,\n        signedRequest: any,\n        userID: string\n    }\n}\n\nexport default Vue.extend({\n    name: "login",\n    props: {\n        showIcons: {\n            type: Boolean,\n            required: false,\n            default: true\n        }\n    },\n    data: function (): {\n        loginStatus: boolean,\n        loginService?: AuthService,\n        fbToken?: string,\n        flagLoggingOut: boolean\n    } {\n        return {\n            loginStatus: false,\n            loginService: undefined,\n            fbToken: undefined,\n            flagLoggingOut: false\n       }\n    },\n    created: function() {\n        // Add Google login meta tags\n        let meta = document.createElement("meta");\n        meta.name = "google-signin-scope";\n        meta.content = "profile email";\n        document.head.appendChild(meta);\n\n        meta = document.createElement("meta");\n        meta.name = "google-signin-client_id";\n        meta.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com";\n        document.head.appendChild(meta);\n\n        // Init Facebook login\n        let vueScope = this;\n        window["fbAsyncInit"] = function() {\n            FB.init({\n                appId: "1885551381575204",\n                autoLogAppEvents: false,\n                cookie: true,\n                xfbml: false,\n                version : "v6.0"\n            });\n            FB.Event.subscribe("auth.statusChange", function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n            FB.getLoginStatus(function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n        };\n\n        // Init Google login\n        window["gAsyncInit"] = function() {\n            gapi.load("auth2", function() {\n                const authInstance = gapi.auth2.getAuthInstance();\n                if(authInstance.isSignedIn.get()) {\n                    Vue.set(vueScope, "loginStatus", true);\n                    Vue.set(vueScope, "loginService", "google");\n                }\n            });\n        };\n        window["gLoginCallback"] = this.gLoginCallback;\n    },\n    methods: {\n        logoutCallback: function() {\n            Vue.set(this, "loginStatus", false);\n            Vue.set(this, "loginService", undefined);\n            Vue.set(this, "flagLoggingOut", false);\n        },\n        logout: function logout() {\n            // Check which service is used, only logout from that service\n            if(this.loginStatus) {\n                switch(this.loginService) {\n                case "facebook":\n                    // Facebook logout\n                    if(this.fbToken !== undefined) {\n                        // Since Facebook logout is slow, display an animation and hide the buttons\n                        Vue.set(this, "flagLoggingOut", true);\n                        let vueScope = this;\n                        // Remove permission, so that the user is asked to authenticate the app again\n                        // (seems like FB.logout() isn\'t enough, if you refresh the page you are still logged)\n                        FB.api("/me/permissions", "delete", {\n                            access_token: vueScope.fbToken\n                        }, function(response: any) {\n                            if(response.success !== true) {\n                                console.error("Facebook permission revoking failed: ", response);\n                            }\n                            FB.logout(function(response: FBLoginResponse)  {\n                                vueScope.logoutCallback();\n                            });\n                        });\n                        this.fbToken = undefined;\n                    }\n                    break;\n                case "google":\n                    // Google logout\n                    let auth2 = gapi.auth2.getAuthInstance();\n                    auth2.signOut().then(this.logoutCallback());\n                    break;\n                default:\n                    console.error("Unexpected loginService: " + this.loginService);\n                }\n                Resource.sendGETRequest("logout", function(response?: string) {\n                    // Nothing to do\n                });\n            } else {\n                console.error("Cannot logout, user is not currently logged in")\n            }\n        },\n        fbLoginStatusChangeCallback: function(response: FBLoginResponse) {\n            if(response.status === "connected") {\n                this.fbToken = response.authResponse!.accessToken;\n                let request: IAuthRequest = {\n                    service: "facebook",\n                    token: response.authResponse!.accessToken,\n                    userId: response.authResponse!.userID\n                };\n                this.doLogin(request);\n            }\n        },\n        gLoginCallback: function(googleUser: any) {\n            let request: IAuthRequest = {\n                service: "google",\n                token: googleUser.getAuthResponse().id_token\n            };\n            this.doLogin(request);\n        },\n        doLogin(request: IAuthRequest) {\n            let vueScope = this;\n            Resource.sendPOSTRequest("/auth", JSON.stringify(request), function(response?: string) {\n                if(!Utils.isEmpty(response)) {\n                    try {\n                        let authResponse: IAuthResponse = JSON.parse(response!);\n                        if(authResponse.result) {\n                            Vue.set(vueScope, "loginStatus", true);\n                            Vue.set(vueScope, "loginService", request.service);\n                            return;\n                        }\n                    } catch(e) {\n                        console.error(e);\n                    }\n                }\n                Vue.set(vueScope, "loginStatus", false);\n                Vue.set(vueScope, "loginService", undefined);\n                console.warn("Login with " + request.service + " failed");\n            });\n        }\n    }\n});\n<\/script>\n\n<style scoped>\n.root {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading {\n    width: 2em;\n    height: 2em;   \n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = o;
    },
    645: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map(function (t) {
            var n = e(t);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }, t.i = function (e, n, i) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (i) for (var r = 0; r < this.length; r++) {
            var a = this[r][0];
            null != a && (o[a] = !0);
          }

          for (var s = 0; s < e.length; s++) {
            var l = [].concat(e[s]);
            i && o[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l));
          }
        }, t;
      };
    },
    15: function _(e) {
      "use strict";

      function t(e, t) {
        (null == t || t > e.length) && (t = e.length);

        for (var n = 0, i = new Array(t); n < t; n++) {
          i[n] = e[n];
        }

        return i;
      }

      e.exports = function (e) {
        var n,
            i,
            o = (i = 4, function (e) {
          if (Array.isArray(e)) return e;
        }(n = e) || function (e, t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
                i = !0,
                o = !1,
                r = void 0;

            try {
              for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0) {
                ;
              }
            } catch (e) {
              o = !0, r = e;
            } finally {
              try {
                i || null == s["return"] || s["return"]();
              } finally {
                if (o) throw r;
              }
            }

            return n;
          }
        }(n, i) || function (e, n) {
          if (e) {
            if ("string" == typeof e) return t(e, n);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? t(e, n) : void 0;
          }
        }(n, i) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()),
            r = o[1],
            a = o[3];

        if ("function" == typeof btoa) {
          var s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),
              c = "/*# ".concat(l, " */"),
              d = a.sources.map(function (e) {
            return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */");
          });
          return [r].concat(d).concat([c]).join("\n");
        }

        return [r].join("\n");
      };
    },
    101: function _(e, t, n) {
      var i = n(24);
      i.__esModule && (i = i["default"]), "string" == typeof i && (i = [[e.id, i, ""]]), i.locals && (e.exports = i.locals), (0, n(346).Z)("3ab28cab", i, !1, {});
    },
    40: function _(e, t, n) {
      var i = n(98);
      i.__esModule && (i = i["default"]), "string" == typeof i && (i = [[e.id, i, ""]]), i.locals && (e.exports = i.locals), (0, n(346).Z)("4369edce", i, !1, {});
    },
    657: function _(e, t, n) {
      var i = n(489);
      i.__esModule && (i = i["default"]), "string" == typeof i && (i = [[e.id, i, ""]]), i.locals && (e.exports = i.locals), (0, n(346).Z)("3e8ba50c", i, !1, {});
    },
    564: function _(e, t, n) {
      var i = n(201);
      i.__esModule && (i = i["default"]), "string" == typeof i && (i = [[e.id, i, ""]]), i.locals && (e.exports = i.locals), (0, n(346).Z)("56feccaa", i, !1, {});
    },
    346: function _(e, t, n) {
      "use strict";

      function i(e, t) {
        for (var n = [], i = {}, o = 0; o < t.length; o++) {
          var r = t[o],
              a = r[0],
              s = {
            id: e + ":" + o,
            css: r[1],
            media: r[2],
            sourceMap: r[3]
          };
          i[a] ? i[a].parts.push(s) : n.push(i[a] = {
            id: a,
            parts: [s]
          });
        }

        return n;
      }

      n.d(t, {
        Z: function Z() {
          return h;
        }
      });
      var o = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

      var r = {},
          a = o && (document.head || document.getElementsByTagName("head")[0]),
          s = null,
          l = 0,
          c = !1,
          d = function d() {},
          u = null,
          f = "data-vue-ssr-id",
          p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

      function h(e, t, n, o) {
        c = n, u = o || {};
        var a = i(e, t);
        return g(a), function (t) {
          for (var n = [], o = 0; o < a.length; o++) {
            var s = a[o];
            (l = r[s.id]).refs--, n.push(l);
          }

          for (t ? g(a = i(e, t)) : a = [], o = 0; o < n.length; o++) {
            var l;

            if (0 === (l = n[o]).refs) {
              for (var c = 0; c < l.parts.length; c++) {
                l.parts[c]();
              }

              delete r[l.id];
            }
          }
        };
      }

      function g(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
              i = r[n.id];

          if (i) {
            i.refs++;

            for (var o = 0; o < i.parts.length; o++) {
              i.parts[o](n.parts[o]);
            }

            for (; o < n.parts.length; o++) {
              i.parts.push(v(n.parts[o]));
            }

            i.parts.length > n.parts.length && (i.parts.length = n.parts.length);
          } else {
            var a = [];

            for (o = 0; o < n.parts.length; o++) {
              a.push(v(n.parts[o]));
            }

            r[n.id] = {
              id: n.id,
              refs: 1,
              parts: a
            };
          }
        }
      }

      function m() {
        var e = document.createElement("style");
        return e.type = "text/css", a.appendChild(e), e;
      }

      function v(e) {
        var t,
            n,
            i = document.querySelector("style[" + f + '~="' + e.id + '"]');

        if (i) {
          if (c) return d;
          i.parentNode.removeChild(i);
        }

        if (p) {
          var o = l++;
          i = s || (s = m()), t = A.bind(null, i, o, !1), n = A.bind(null, i, o, !0);
        } else i = m(), t = b.bind(null, i), n = function n() {
          i.parentNode.removeChild(i);
        };

        return t(e), function (i) {
          if (i) {
            if (i.css === e.css && i.media === e.media && i.sourceMap === e.sourceMap) return;
            t(e = i);
          } else n();
        };
      }

      var y,
          E = (y = [], function (e, t) {
        return y[e] = t, y.filter(Boolean).join("\n");
      });

      function A(e, t, n, i) {
        var o = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = E(t, o);else {
          var r = document.createTextNode(o),
              a = e.childNodes;
          a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r);
        }
      }

      function b(e, t) {
        var n = t.css,
            i = t.media,
            o = t.sourceMap;
        if (i && e.setAttribute("media", i), u.ssrId && e.setAttribute(f, t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      }
    }
  },
      t = {};

  function n(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var r = t[i] = {
      id: i,
      exports: {}
    };
    return e[i](r, r.exports, n), r.exports;
  }

  n.d = function (e, t) {
    for (var i in t) {
      n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
        enumerable: !0,
        get: t[i]
      });
    }
  }, n.g = function () {
    if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;

    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
    }
  }(), n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var i = {};
  (function () {
    "use strict";

    n.r(i), n.d(i, {
      Constant: function Constant() {
        return Us;
      },
      Mapper: function Mapper() {
        return kl;
      },
      MapperPage: function MapperPage() {
        return Pl;
      }
    });
    var e = {};
    n.r(e), n.d(e, {
      Ann: function Ann() {
        return rl;
      },
      Asgan: function Asgan() {
        return al;
      },
      BaseScript: function BaseScript() {
        return ol;
      },
      DEFAULT_DIALOG: function DEFAULT_DIALOG() {
        return il;
      },
      DEFAULT_MESSAGE: function DEFAULT_MESSAGE() {
        return nl;
      },
      Script1: function Script1() {
        return ll;
      },
      Transports: function Transports() {
        return sl;
      }
    });
    var t = Object.freeze({});

    function o(e) {
      return null == e;
    }

    function r(e) {
      return null != e;
    }

    function a(e) {
      return !0 === e;
    }

    function s(e) {
      return "string" == typeof e || "number" == typeof e || "symbol" == _typeof(e) || "boolean" == typeof e;
    }

    function l(e) {
      return null !== e && "object" == _typeof(e);
    }

    var c = Object.prototype.toString;

    function d(e) {
      return "[object Object]" === c.call(e);
    }

    function u(e) {
      var t = parseFloat(String(e));
      return t >= 0 && Math.floor(t) === t && isFinite(e);
    }

    function f(e) {
      return r(e) && "function" == typeof e.then && "function" == typeof e["catch"];
    }

    function p(e) {
      return null == e ? "" : Array.isArray(e) || d(e) && e.toString === c ? JSON.stringify(e, null, 2) : String(e);
    }

    function h(e) {
      var t = parseFloat(e);
      return isNaN(t) ? e : t;
    }

    function g(e, t) {
      for (var n = Object.create(null), i = e.split(","), o = 0; o < i.length; o++) {
        n[i[o]] = !0;
      }

      return t ? function (e) {
        return n[e.toLowerCase()];
      } : function (e) {
        return n[e];
      };
    }

    var m = g("slot,component", !0),
        v = g("key,ref,slot,slot-scope,is");

    function y(e, t) {
      if (e.length) {
        var n = e.indexOf(t);
        if (n > -1) return e.splice(n, 1);
      }
    }

    var E = Object.prototype.hasOwnProperty;

    function A(e, t) {
      return E.call(e, t);
    }

    function b(e) {
      var t = Object.create(null);
      return function (n) {
        return t[n] || (t[n] = e(n));
      };
    }

    var _ = /-(\w)/g,
        S = b(function (e) {
      return e.replace(_, function (e, t) {
        return t ? t.toUpperCase() : "";
      });
    }),
        w = b(function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }),
        C = /\B([A-Z])/g,
        I = b(function (e) {
      return e.replace(C, "-$1").toLowerCase();
    }),
        k = Function.prototype.bind ? function (e, t) {
      return e.bind(t);
    } : function (e, t) {
      function n(n) {
        var i = arguments.length;
        return i ? i > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
      }

      return n._length = e.length, n;
    };

    function T(e, t) {
      t = t || 0;

      for (var n = e.length - t, i = new Array(n); n--;) {
        i[n] = e[n + t];
      }

      return i;
    }

    function N(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }

      return e;
    }

    function x(e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        e[n] && N(t, e[n]);
      }

      return t;
    }

    function M(e, t, n) {}

    var D = function D(e, t, n) {
      return !1;
    },
        O = function O(e) {
      return e;
    };

    function L(e, t) {
      if (e === t) return !0;
      var n = l(e),
          i = l(t);
      if (!n || !i) return !n && !i && String(e) === String(t);

      try {
        var o = Array.isArray(e),
            r = Array.isArray(t);
        if (o && r) return e.length === t.length && e.every(function (e, n) {
          return L(e, t[n]);
        });
        if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
        if (o || r) return !1;
        var a = Object.keys(e),
            s = Object.keys(t);
        return a.length === s.length && a.every(function (n) {
          return L(e[n], t[n]);
        });
      } catch (e) {
        return !1;
      }
    }

    function R(e, t) {
      for (var n = 0; n < e.length; n++) {
        if (L(e[n], t)) return n;
      }

      return -1;
    }

    function W(e) {
      var t = !1;
      return function () {
        t || (t = !0, e.apply(this, arguments));
      };
    }

    var P = "data-server-rendered",
        B = ["component", "directive", "filter"],
        j = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
        F = {
      optionMergeStrategies: Object.create(null),
      silent: !1,
      productionTip: !1,
      devtools: !1,
      performance: !1,
      errorHandler: null,
      warnHandler: null,
      ignoredElements: [],
      keyCodes: Object.create(null),
      isReservedTag: D,
      isReservedAttr: D,
      isUnknownElement: D,
      getTagNamespace: M,
      parsePlatformTagName: O,
      mustUseProp: D,
      async: !0,
      _lifecycleHooks: j
    },
        U = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

    function H(e) {
      var t = (e + "").charCodeAt(0);
      return 36 === t || 95 === t;
    }

    function V(e, t, n, i) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: !!i,
        writable: !0,
        configurable: !0
      });
    }

    var G,
        q = new RegExp("[^" + U.source + ".$_\\d]"),
        z = ("__proto__" in {}),
        Y = "undefined" != typeof window,
        K = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        Q = K && WXEnvironment.platform.toLowerCase(),
        J = Y && window.navigator.userAgent.toLowerCase(),
        X = J && /msie|trident/.test(J),
        Z = J && J.indexOf("msie 9.0") > 0,
        ee = J && J.indexOf("edge/") > 0,
        te = (J && J.indexOf("android"), J && /iphone|ipad|ipod|ios/.test(J) || "ios" === Q),
        ne = (J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J), J && J.match(/firefox\/(\d+)/)),
        ie = {}.watch,
        oe = !1;
    if (Y) try {
      var re = {};
      Object.defineProperty(re, "passive", {
        get: function get() {
          oe = !0;
        }
      }), window.addEventListener("test-passive", null, re);
    } catch (e) {}

    var ae = function ae() {
      return void 0 === G && (G = !Y && !K && void 0 !== n.g && n.g.process && "server" === n.g.process.env.VUE_ENV), G;
    },
        se = Y && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    function le(e) {
      return "function" == typeof e && /native code/.test(e.toString());
    }

    var ce,
        de = "undefined" != typeof Symbol && le(Symbol) && "undefined" != typeof Reflect && le(Reflect.ownKeys);
    ce = "undefined" != typeof Set && le(Set) ? Set : function () {
      function e() {
        this.set = Object.create(null);
      }

      return e.prototype.has = function (e) {
        return !0 === this.set[e];
      }, e.prototype.add = function (e) {
        this.set[e] = !0;
      }, e.prototype.clear = function () {
        this.set = Object.create(null);
      }, e;
    }();

    var ue = M,
        fe = 0,
        pe = function pe() {
      this.id = fe++, this.subs = [];
    };

    pe.prototype.addSub = function (e) {
      this.subs.push(e);
    }, pe.prototype.removeSub = function (e) {
      y(this.subs, e);
    }, pe.prototype.depend = function () {
      pe.target && pe.target.addDep(this);
    }, pe.prototype.notify = function () {
      for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) {
        e[t].update();
      }
    }, pe.target = null;
    var he = [];

    function ge(e) {
      he.push(e), pe.target = e;
    }

    function me() {
      he.pop(), pe.target = he[he.length - 1];
    }

    var ve = function ve(e, t, n, i, o, r, a, s) {
      this.tag = e, this.data = t, this.children = n, this.text = i, this.elm = o, this.ns = void 0, this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    },
        ye = {
      child: {
        configurable: !0
      }
    };

    ye.child.get = function () {
      return this.componentInstance;
    }, Object.defineProperties(ve.prototype, ye);

    var Ee = function Ee(e) {
      void 0 === e && (e = "");
      var t = new ve();
      return t.text = e, t.isComment = !0, t;
    };

    function Ae(e) {
      return new ve(void 0, void 0, void 0, String(e));
    }

    function be(e) {
      var t = new ve(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
      return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
    }

    var _e = Array.prototype,
        Se = Object.create(_e);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
      var t = _e[e];
      V(Se, e, function () {
        for (var n = [], i = arguments.length; i--;) {
          n[i] = arguments[i];
        }

        var o,
            r = t.apply(this, n),
            a = this.__ob__;

        switch (e) {
          case "push":
          case "unshift":
            o = n;
            break;

          case "splice":
            o = n.slice(2);
        }

        return o && a.observeArray(o), a.dep.notify(), r;
      });
    });
    var we = Object.getOwnPropertyNames(Se),
        Ce = !0;

    function Ie(e) {
      Ce = e;
    }

    var ke = function ke(e) {
      this.value = e, this.dep = new pe(), this.vmCount = 0, V(e, "__ob__", this), Array.isArray(e) ? (z ? function (e, t) {
        e.__proto__ = t;
      }(e, Se) : function (e, t, n) {
        for (var i = 0, o = n.length; i < o; i++) {
          var r = n[i];
          V(e, r, t[r]);
        }
      }(e, Se, we), this.observeArray(e)) : this.walk(e);
    };

    function Te(e, t) {
      var n;
      if (l(e) && !(e instanceof ve)) return A(e, "__ob__") && e.__ob__ instanceof ke ? n = e.__ob__ : Ce && !ae() && (Array.isArray(e) || d(e)) && Object.isExtensible(e) && !e._isVue && (n = new ke(e)), t && n && n.vmCount++, n;
    }

    function Ne(e, t, n, i, o) {
      var r = new pe(),
          a = Object.getOwnPropertyDescriptor(e, t);

      if (!a || !1 !== a.configurable) {
        var s = a && a.get,
            l = a && a.set;
        s && !l || 2 !== arguments.length || (n = e[t]);
        var c = !o && Te(n);
        Object.defineProperty(e, t, {
          enumerable: !0,
          configurable: !0,
          get: function get() {
            var t = s ? s.call(e) : n;
            return pe.target && (r.depend(), c && (c.dep.depend(), Array.isArray(t) && De(t))), t;
          },
          set: function set(t) {
            var i = s ? s.call(e) : n;
            t === i || t != t && i != i || s && !l || (l ? l.call(e, t) : n = t, c = !o && Te(t), r.notify());
          }
        });
      }
    }

    function xe(e, t, n) {
      if (Array.isArray(e) && u(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
      if (t in e && !(t in Object.prototype)) return e[t] = n, n;
      var i = e.__ob__;
      return e._isVue || i && i.vmCount ? n : i ? (Ne(i.value, t, n), i.dep.notify(), n) : (e[t] = n, n);
    }

    function Me(e, t) {
      if (Array.isArray(e) && u(t)) e.splice(t, 1);else {
        var n = e.__ob__;
        e._isVue || n && n.vmCount || A(e, t) && (delete e[t], n && n.dep.notify());
      }
    }

    function De(e) {
      for (var t = void 0, n = 0, i = e.length; n < i; n++) {
        (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && De(t);
      }
    }

    ke.prototype.walk = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) {
        Ne(e, t[n]);
      }
    }, ke.prototype.observeArray = function (e) {
      for (var t = 0, n = e.length; t < n; t++) {
        Te(e[t]);
      }
    };
    var Oe = F.optionMergeStrategies;

    function Le(e, t) {
      if (!t) return e;

      for (var n, i, o, r = de ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < r.length; a++) {
        "__ob__" !== (n = r[a]) && (i = e[n], o = t[n], A(e, n) ? i !== o && d(i) && d(o) && Le(i, o) : xe(e, n, o));
      }

      return e;
    }

    function $e(e, t, n) {
      return n ? function () {
        var i = "function" == typeof t ? t.call(n, n) : t,
            o = "function" == typeof e ? e.call(n, n) : e;
        return i ? Le(i, o) : o;
      } : t ? e ? function () {
        return Le("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
      } : t : e;
    }

    function Re(e, t) {
      var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
      return n ? function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        }

        return t;
      }(n) : n;
    }

    function We(e, t, n, i) {
      var o = Object.create(e || null);
      return t ? N(o, t) : o;
    }

    Oe.data = function (e, t, n) {
      return n ? $e(e, t, n) : t && "function" != typeof t ? e : $e(e, t);
    }, j.forEach(function (e) {
      Oe[e] = Re;
    }), B.forEach(function (e) {
      Oe[e + "s"] = We;
    }), Oe.watch = function (e, t, n, i) {
      if (e === ie && (e = void 0), t === ie && (t = void 0), !t) return Object.create(e || null);
      if (!e) return t;
      var o = {};

      for (var r in N(o, e), t) {
        var a = o[r],
            s = t[r];
        a && !Array.isArray(a) && (a = [a]), o[r] = a ? a.concat(s) : Array.isArray(s) ? s : [s];
      }

      return o;
    }, Oe.props = Oe.methods = Oe.inject = Oe.computed = function (e, t, n, i) {
      if (!e) return t;
      var o = Object.create(null);
      return N(o, e), t && N(o, t), o;
    }, Oe.provide = $e;

    var Pe = function Pe(e, t) {
      return void 0 === t ? e : t;
    };

    function Be(e, t, n) {
      if ("function" == typeof t && (t = t.options), function (e, t) {
        var n = e.props;

        if (n) {
          var i,
              o,
              r = {};
          if (Array.isArray(n)) for (i = n.length; i--;) {
            "string" == typeof (o = n[i]) && (r[S(o)] = {
              type: null
            });
          } else if (d(n)) for (var a in n) {
            o = n[a], r[S(a)] = d(o) ? o : {
              type: o
            };
          }
          e.props = r;
        }
      }(t), function (e, t) {
        var n = e.inject;

        if (n) {
          var i = e.inject = {};
          if (Array.isArray(n)) for (var o = 0; o < n.length; o++) {
            i[n[o]] = {
              from: n[o]
            };
          } else if (d(n)) for (var r in n) {
            var a = n[r];
            i[r] = d(a) ? N({
              from: r
            }, a) : {
              from: a
            };
          }
        }
      }(t), function (e) {
        var t = e.directives;
        if (t) for (var n in t) {
          var i = t[n];
          "function" == typeof i && (t[n] = {
            bind: i,
            update: i
          });
        }
      }(t), !t._base && (t["extends"] && (e = Be(e, t["extends"], n)), t.mixins)) for (var i = 0, o = t.mixins.length; i < o; i++) {
        e = Be(e, t.mixins[i], n);
      }
      var r,
          a = {};

      for (r in e) {
        s(r);
      }

      for (r in t) {
        A(e, r) || s(r);
      }

      function s(i) {
        var o = Oe[i] || Pe;
        a[i] = o(e[i], t[i], n, i);
      }

      return a;
    }

    function je(e, t, n, i) {
      if ("string" == typeof n) {
        var o = e[t];
        if (A(o, n)) return o[n];
        var r = S(n);
        if (A(o, r)) return o[r];
        var a = w(r);
        return A(o, a) ? o[a] : o[n] || o[r] || o[a];
      }
    }

    function Fe(e, t, n, i) {
      var o = t[e],
          r = !A(n, e),
          a = n[e],
          s = Ve(Boolean, o.type);
      if (s > -1) if (r && !A(o, "default")) a = !1;else if ("" === a || a === I(e)) {
        var l = Ve(String, o.type);
        (l < 0 || s < l) && (a = !0);
      }

      if (void 0 === a) {
        a = function (e, t, n) {
          if (A(t, "default")) {
            var i = t["default"];
            return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof i && "Function" !== Ue(t.type) ? i.call(e) : i;
          }
        }(i, o, e);

        var c = Ce;
        Ie(!0), Te(a), Ie(c);
      }

      return a;
    }

    function Ue(e) {
      var t = e && e.toString().match(/^\s*function (\w+)/);
      return t ? t[1] : "";
    }

    function He(e, t) {
      return Ue(e) === Ue(t);
    }

    function Ve(e, t) {
      if (!Array.isArray(t)) return He(t, e) ? 0 : -1;

      for (var n = 0, i = t.length; n < i; n++) {
        if (He(t[n], e)) return n;
      }

      return -1;
    }

    function Ge(e, t, n) {
      ge();

      try {
        if (t) for (var i = t; i = i.$parent;) {
          var o = i.$options.errorCaptured;
          if (o) for (var r = 0; r < o.length; r++) {
            try {
              if (!1 === o[r].call(i, e, t, n)) return;
            } catch (e) {
              ze(e, i, "errorCaptured hook");
            }
          }
        }
        ze(e, t, n);
      } finally {
        me();
      }
    }

    function qe(e, t, n, i, o) {
      var r;

      try {
        (r = n ? e.apply(t, n) : e.call(t)) && !r._isVue && f(r) && !r._handled && (r["catch"](function (e) {
          return Ge(e, i, o + " (Promise/async)");
        }), r._handled = !0);
      } catch (e) {
        Ge(e, i, o);
      }

      return r;
    }

    function ze(e, t, n) {
      if (F.errorHandler) try {
        return F.errorHandler.call(null, e, t, n);
      } catch (t) {
        t !== e && Ye(t);
      }
      Ye(e);
    }

    function Ye(e, t, n) {
      if (!Y && !K || "undefined" == typeof console) throw e;
      console.error(e);
    }

    var Ke,
        Qe = !1,
        Je = [],
        Xe = !1;

    function Ze() {
      Xe = !1;
      var e = Je.slice(0);
      Je.length = 0;

      for (var t = 0; t < e.length; t++) {
        e[t]();
      }
    }

    if ("undefined" != typeof Promise && le(Promise)) {
      var et = Promise.resolve();
      Ke = function Ke() {
        et.then(Ze), te && setTimeout(M);
      }, Qe = !0;
    } else if (X || "undefined" == typeof MutationObserver || !le(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Ke = "undefined" != typeof setImmediate && le(setImmediate) ? function () {
      setImmediate(Ze);
    } : function () {
      setTimeout(Ze, 0);
    };else {
      var tt = 1,
          nt = new MutationObserver(Ze),
          it = document.createTextNode(String(tt));
      nt.observe(it, {
        characterData: !0
      }), Ke = function Ke() {
        tt = (tt + 1) % 2, it.data = String(tt);
      }, Qe = !0;
    }

    function ot(e, t) {
      var n;
      if (Je.push(function () {
        if (e) try {
          e.call(t);
        } catch (e) {
          Ge(e, t, "nextTick");
        } else n && n(t);
      }), Xe || (Xe = !0, Ke()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
        n = e;
      });
    }

    var rt = new ce();

    function at(e) {
      st(e, rt), rt.clear();
    }

    function st(e, t) {
      var n,
          i,
          o = Array.isArray(e);

      if (!(!o && !l(e) || Object.isFrozen(e) || e instanceof ve)) {
        if (e.__ob__) {
          var r = e.__ob__.dep.id;
          if (t.has(r)) return;
          t.add(r);
        }

        if (o) for (n = e.length; n--;) {
          st(e[n], t);
        } else for (n = (i = Object.keys(e)).length; n--;) {
          st(e[i[n]], t);
        }
      }
    }

    var lt = b(function (e) {
      var t = "&" === e.charAt(0),
          n = "~" === (e = t ? e.slice(1) : e).charAt(0),
          i = "!" === (e = n ? e.slice(1) : e).charAt(0);
      return {
        name: e = i ? e.slice(1) : e,
        once: n,
        capture: i,
        passive: t
      };
    });

    function ct(e, t) {
      function n() {
        var e = arguments,
            i = n.fns;
        if (!Array.isArray(i)) return qe(i, null, arguments, t, "v-on handler");

        for (var o = i.slice(), r = 0; r < o.length; r++) {
          qe(o[r], null, e, t, "v-on handler");
        }
      }

      return n.fns = e, n;
    }

    function dt(e, t, n, i, r, s) {
      var l, c, d, u;

      for (l in e) {
        c = e[l], d = t[l], u = lt(l), o(c) || (o(d) ? (o(c.fns) && (c = e[l] = ct(c, s)), a(u.once) && (c = e[l] = r(u.name, c, u.capture)), n(u.name, c, u.capture, u.passive, u.params)) : c !== d && (d.fns = c, e[l] = d));
      }

      for (l in t) {
        o(e[l]) && i((u = lt(l)).name, t[l], u.capture);
      }
    }

    function ut(e, t, n) {
      var i;
      e instanceof ve && (e = e.data.hook || (e.data.hook = {}));
      var s = e[t];

      function l() {
        n.apply(this, arguments), y(i.fns, l);
      }

      o(s) ? i = ct([l]) : r(s.fns) && a(s.merged) ? (i = s).fns.push(l) : i = ct([s, l]), i.merged = !0, e[t] = i;
    }

    function ft(e, t, n, i, o) {
      if (r(t)) {
        if (A(t, n)) return e[n] = t[n], o || delete t[n], !0;
        if (A(t, i)) return e[n] = t[i], o || delete t[i], !0;
      }

      return !1;
    }

    function pt(e) {
      return s(e) ? [Ae(e)] : Array.isArray(e) ? gt(e) : void 0;
    }

    function ht(e) {
      return r(e) && r(e.text) && !1 === e.isComment;
    }

    function gt(e, t) {
      var n,
          i,
          l,
          c,
          d = [];

      for (n = 0; n < e.length; n++) {
        o(i = e[n]) || "boolean" == typeof i || (c = d[l = d.length - 1], Array.isArray(i) ? i.length > 0 && (ht((i = gt(i, (t || "") + "_" + n))[0]) && ht(c) && (d[l] = Ae(c.text + i[0].text), i.shift()), d.push.apply(d, i)) : s(i) ? ht(c) ? d[l] = Ae(c.text + i) : "" !== i && d.push(Ae(i)) : ht(i) && ht(c) ? d[l] = Ae(c.text + i.text) : (a(e._isVList) && r(i.tag) && o(i.key) && r(t) && (i.key = "__vlist" + t + "_" + n + "__"), d.push(i)));
      }

      return d;
    }

    function mt(e, t) {
      if (e) {
        for (var n = Object.create(null), i = de ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < i.length; o++) {
          var r = i[o];

          if ("__ob__" !== r) {
            for (var a = e[r].from, s = t; s;) {
              if (s._provided && A(s._provided, a)) {
                n[r] = s._provided[a];
                break;
              }

              s = s.$parent;
            }

            if (!s && "default" in e[r]) {
              var l = e[r]["default"];
              n[r] = "function" == typeof l ? l.call(t) : l;
            }
          }
        }

        return n;
      }
    }

    function vt(e, t) {
      if (!e || !e.length) return {};

      for (var n = {}, i = 0, o = e.length; i < o; i++) {
        var r = e[i],
            a = r.data;
        if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, r.context !== t && r.fnContext !== t || !a || null == a.slot) (n["default"] || (n["default"] = [])).push(r);else {
          var s = a.slot,
              l = n[s] || (n[s] = []);
          "template" === r.tag ? l.push.apply(l, r.children || []) : l.push(r);
        }
      }

      for (var c in n) {
        n[c].every(yt) && delete n[c];
      }

      return n;
    }

    function yt(e) {
      return e.isComment && !e.asyncFactory || " " === e.text;
    }

    function Et(e, n, i) {
      var o,
          r = Object.keys(n).length > 0,
          a = e ? !!e.$stable : !r,
          s = e && e.$key;

      if (e) {
        if (e._normalized) return e._normalized;
        if (a && i && i !== t && s === i.$key && !r && !i.$hasNormal) return i;

        for (var l in o = {}, e) {
          e[l] && "$" !== l[0] && (o[l] = At(n, l, e[l]));
        }
      } else o = {};

      for (var c in n) {
        c in o || (o[c] = bt(n, c));
      }

      return e && Object.isExtensible(e) && (e._normalized = o), V(o, "$stable", a), V(o, "$key", s), V(o, "$hasNormal", r), o;
    }

    function At(e, t, n) {
      var i = function i() {
        var e = arguments.length ? n.apply(null, arguments) : n({});
        return (e = e && "object" == _typeof(e) && !Array.isArray(e) ? [e] : pt(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
      };

      return n.proxy && Object.defineProperty(e, t, {
        get: i,
        enumerable: !0,
        configurable: !0
      }), i;
    }

    function bt(e, t) {
      return function () {
        return e[t];
      };
    }

    function _t(e, t) {
      var n, i, o, a, s;
      if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), i = 0, o = e.length; i < o; i++) {
        n[i] = t(e[i], i);
      } else if ("number" == typeof e) for (n = new Array(e), i = 0; i < e; i++) {
        n[i] = t(i + 1, i);
      } else if (l(e)) if (de && e[Symbol.iterator]) {
        n = [];

        for (var c = e[Symbol.iterator](), d = c.next(); !d.done;) {
          n.push(t(d.value, n.length)), d = c.next();
        }
      } else for (a = Object.keys(e), n = new Array(a.length), i = 0, o = a.length; i < o; i++) {
        s = a[i], n[i] = t(e[s], s, i);
      }
      return r(n) || (n = []), n._isVList = !0, n;
    }

    function St(e, t, n, i) {
      var o,
          r = this.$scopedSlots[e];
      r ? (n = n || {}, i && (n = N(N({}, i), n)), o = r(n) || t) : o = this.$slots[e] || t;
      var a = n && n.slot;
      return a ? this.$createElement("template", {
        slot: a
      }, o) : o;
    }

    function wt(e) {
      return je(this.$options, "filters", e) || O;
    }

    function Ct(e, t) {
      return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
    }

    function It(e, t, n, i, o) {
      var r = F.keyCodes[t] || n;
      return o && i && !F.keyCodes[t] ? Ct(o, i) : r ? Ct(r, e) : i ? I(i) !== t : void 0;
    }

    function kt(e, t, n, i, o) {
      if (n && l(n)) {
        var r;
        Array.isArray(n) && (n = x(n));

        var a = function a(_a2) {
          if ("class" === _a2 || "style" === _a2 || v(_a2)) r = e;else {
            var s = e.attrs && e.attrs.type;
            r = i || F.mustUseProp(t, s, _a2) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
          }
          var l = S(_a2),
              c = I(_a2);
          l in r || c in r || (r[_a2] = n[_a2], o && ((e.on || (e.on = {}))["update:" + _a2] = function (e) {
            n[_a2] = e;
          }));
        };

        for (var s in n) {
          a(s);
        }
      }

      return e;
    }

    function Tt(e, t) {
      var n = this._staticTrees || (this._staticTrees = []),
          i = n[e];
      return i && !t || xt(i = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), i;
    }

    function Nt(e, t, n) {
      return xt(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
    }

    function xt(e, t, n) {
      if (Array.isArray(e)) for (var i = 0; i < e.length; i++) {
        e[i] && "string" != typeof e[i] && Mt(e[i], t + "_" + i, n);
      } else Mt(e, t, n);
    }

    function Mt(e, t, n) {
      e.isStatic = !0, e.key = t, e.isOnce = n;
    }

    function Dt(e, t) {
      if (t && d(t)) {
        var n = e.on = e.on ? N({}, e.on) : {};

        for (var i in t) {
          var o = n[i],
              r = t[i];
          n[i] = o ? [].concat(o, r) : r;
        }
      }

      return e;
    }

    function Ot(e, t, n, i) {
      t = t || {
        $stable: !n
      };

      for (var o = 0; o < e.length; o++) {
        var r = e[o];
        Array.isArray(r) ? Ot(r, t, n) : r && (r.proxy && (r.fn.proxy = !0), t[r.key] = r.fn);
      }

      return i && (t.$key = i), t;
    }

    function Lt(e, t) {
      for (var n = 0; n < t.length; n += 2) {
        var i = t[n];
        "string" == typeof i && i && (e[t[n]] = t[n + 1]);
      }

      return e;
    }

    function $t(e, t) {
      return "string" == typeof e ? t + e : e;
    }

    function Rt(e) {
      e._o = Nt, e._n = h, e._s = p, e._l = _t, e._t = St, e._q = L, e._i = R, e._m = Tt, e._f = wt, e._k = It, e._b = kt, e._v = Ae, e._e = Ee, e._u = Ot, e._g = Dt, e._d = Lt, e._p = $t;
    }

    function Wt(e, n, i, o, r) {
      var s,
          l = this,
          c = r.options;
      A(o, "_uid") ? (s = Object.create(o))._original = o : (s = o, o = o._original);
      var d = a(c._compiled),
          u = !d;
      this.data = e, this.props = n, this.children = i, this.parent = o, this.listeners = e.on || t, this.injections = mt(c.inject, o), this.slots = function () {
        return l.$slots || Et(e.scopedSlots, l.$slots = vt(i, o)), l.$slots;
      }, Object.defineProperty(this, "scopedSlots", {
        enumerable: !0,
        get: function get() {
          return Et(e.scopedSlots, this.slots());
        }
      }), d && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = Et(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function (e, t, n, i) {
        var r = Vt(s, e, t, n, i, u);
        return r && !Array.isArray(r) && (r.fnScopeId = c._scopeId, r.fnContext = o), r;
      } : this._c = function (e, t, n, i) {
        return Vt(s, e, t, n, i, u);
      };
    }

    function Pt(e, t, n, i, o) {
      var r = be(e);
      return r.fnContext = n, r.fnOptions = i, t.slot && ((r.data || (r.data = {})).slot = t.slot), r;
    }

    function Bt(e, t) {
      for (var n in t) {
        e[S(n)] = t[n];
      }
    }

    Rt(Wt.prototype);
    var jt = {
      init: function init(e, t) {
        if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
          var n = e;
          jt.prepatch(n, n);
        } else (e.componentInstance = function (e, t) {
          var n = {
            _isComponent: !0,
            _parentVnode: e,
            parent: t
          },
              i = e.data.inlineTemplate;
          return r(i) && (n.render = i.render, n.staticRenderFns = i.staticRenderFns), new e.componentOptions.Ctor(n);
        }(e, tn)).$mount(t ? e.elm : void 0, t);
      },
      prepatch: function prepatch(e, n) {
        var i = n.componentOptions;
        !function (e, n, i, o, r) {
          var a = o.data.scopedSlots,
              s = e.$scopedSlots,
              l = !!(a && !a.$stable || s !== t && !s.$stable || a && e.$scopedSlots.$key !== a.$key),
              c = !!(r || e.$options._renderChildren || l);

          if (e.$options._parentVnode = o, e.$vnode = o, e._vnode && (e._vnode.parent = o), e.$options._renderChildren = r, e.$attrs = o.data.attrs || t, e.$listeners = i || t, n && e.$options.props) {
            Ie(!1);

            for (var d = e._props, u = e.$options._propKeys || [], f = 0; f < u.length; f++) {
              var p = u[f],
                  h = e.$options.props;
              d[p] = Fe(p, h, n, e);
            }

            Ie(!0), e.$options.propsData = n;
          }

          i = i || t;
          var g = e.$options._parentListeners;
          e.$options._parentListeners = i, en(e, i, g), c && (e.$slots = vt(r, o.context), e.$forceUpdate());
        }(n.componentInstance = e.componentInstance, i.propsData, i.listeners, n, i.children);
      },
      insert: function insert(e) {
        var t,
            n = e.context,
            i = e.componentInstance;
        i._isMounted || (i._isMounted = !0, sn(i, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = i)._inactive = !1, cn.push(t)) : rn(i, !0));
      },
      destroy: function destroy(e) {
        var t = e.componentInstance;
        t._isDestroyed || (e.data.keepAlive ? an(t, !0) : t.$destroy());
      }
    },
        Ft = Object.keys(jt);

    function Ut(e, n, i, s, c) {
      if (!o(e)) {
        var d = i.$options._base;

        if (l(e) && (e = d.extend(e)), "function" == typeof e) {
          var u;
          if (o(e.cid) && void 0 === (e = function (e, t) {
            if (a(e.error) && r(e.errorComp)) return e.errorComp;
            if (r(e.resolved)) return e.resolved;
            var n = zt;
            if (n && r(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), a(e.loading) && r(e.loadingComp)) return e.loadingComp;

            if (n && !r(e.owners)) {
              var i = e.owners = [n],
                  s = !0,
                  c = null,
                  d = null;
              n.$on("hook:destroyed", function () {
                return y(i, n);
              });

              var u = function u(e) {
                for (var t = 0, n = i.length; t < n; t++) {
                  i[t].$forceUpdate();
                }

                e && (i.length = 0, null !== c && (clearTimeout(c), c = null), null !== d && (clearTimeout(d), d = null));
              },
                  p = W(function (n) {
                e.resolved = Yt(n, t), s ? i.length = 0 : u(!0);
              }),
                  h = W(function (t) {
                r(e.errorComp) && (e.error = !0, u(!0));
              }),
                  g = e(p, h);

              return l(g) && (f(g) ? o(e.resolved) && g.then(p, h) : f(g.component) && (g.component.then(p, h), r(g.error) && (e.errorComp = Yt(g.error, t)), r(g.loading) && (e.loadingComp = Yt(g.loading, t), 0 === g.delay ? e.loading = !0 : c = setTimeout(function () {
                c = null, o(e.resolved) && o(e.error) && (e.loading = !0, u(!1));
              }, g.delay || 200)), r(g.timeout) && (d = setTimeout(function () {
                d = null, o(e.resolved) && h(null);
              }, g.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved;
            }
          }(u = e, d))) return function (e, t, n, i, o) {
            var r = Ee();
            return r.asyncFactory = e, r.asyncMeta = {
              data: t,
              context: n,
              children: i,
              tag: o
            }, r;
          }(u, n, i, s, c);
          n = n || {}, Tn(e), r(n.model) && function (e, t) {
            var n = e.model && e.model.prop || "value",
                i = e.model && e.model.event || "input";
            (t.attrs || (t.attrs = {}))[n] = t.model.value;
            var o = t.on || (t.on = {}),
                a = o[i],
                s = t.model.callback;
            r(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[i] = [s].concat(a)) : o[i] = s;
          }(e.options, n);

          var p = function (e, t, n) {
            var i = t.options.props;

            if (!o(i)) {
              var a = {},
                  s = e.attrs,
                  l = e.props;
              if (r(s) || r(l)) for (var c in i) {
                var d = I(c);
                ft(a, l, c, d, !0) || ft(a, s, c, d, !1);
              }
              return a;
            }
          }(n, e);

          if (a(e.options.functional)) return function (e, n, i, o, a) {
            var s = e.options,
                l = {},
                c = s.props;
            if (r(c)) for (var d in c) {
              l[d] = Fe(d, c, n || t);
            } else r(i.attrs) && Bt(l, i.attrs), r(i.props) && Bt(l, i.props);
            var u = new Wt(i, l, a, o, e),
                f = s.render.call(null, u._c, u);
            if (f instanceof ve) return Pt(f, i, u.parent, s);

            if (Array.isArray(f)) {
              for (var p = pt(f) || [], h = new Array(p.length), g = 0; g < p.length; g++) {
                h[g] = Pt(p[g], i, u.parent, s);
              }

              return h;
            }
          }(e, p, n, i, s);
          var h = n.on;

          if (n.on = n.nativeOn, a(e.options["abstract"])) {
            var g = n.slot;
            n = {}, g && (n.slot = g);
          }

          !function (e) {
            for (var t = e.hook || (e.hook = {}), n = 0; n < Ft.length; n++) {
              var i = Ft[n],
                  o = t[i],
                  r = jt[i];
              o === r || o && o._merged || (t[i] = o ? Ht(r, o) : r);
            }
          }(n);
          var m = e.options.name || c;
          return new ve("vue-component-" + e.cid + (m ? "-" + m : ""), n, void 0, void 0, void 0, i, {
            Ctor: e,
            propsData: p,
            listeners: h,
            tag: c,
            children: s
          }, u);
        }
      }
    }

    function Ht(e, t) {
      var n = function n(_n2, i) {
        e(_n2, i), t(_n2, i);
      };

      return n._merged = !0, n;
    }

    function Vt(e, t, n, i, o, c) {
      return (Array.isArray(n) || s(n)) && (o = i, i = n, n = void 0), a(c) && (o = 2), function (e, t, n, i, o) {
        if (r(n) && r(n.__ob__)) return Ee();
        if (r(n) && r(n.is) && (t = n.is), !t) return Ee();
        var a, s, c;
        (Array.isArray(i) && "function" == typeof i[0] && ((n = n || {}).scopedSlots = {
          "default": i[0]
        }, i.length = 0), 2 === o ? i = pt(i) : 1 === o && (i = function (e) {
          for (var t = 0; t < e.length; t++) {
            if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
          }

          return e;
        }(i)), "string" == typeof t) ? (s = e.$vnode && e.$vnode.ns || F.getTagNamespace(t), a = F.isReservedTag(t) ? new ve(F.parsePlatformTagName(t), n, i, void 0, void 0, e) : n && n.pre || !r(c = je(e.$options, "components", t)) ? new ve(t, n, i, void 0, void 0, e) : Ut(c, n, e, i, t)) : a = Ut(t, n, e, i);
        return Array.isArray(a) ? a : r(a) ? (r(s) && Gt(a, s), r(n) && function (e) {
          l(e.style) && at(e.style), l(e["class"]) && at(e["class"]);
        }(n), a) : Ee();
      }(e, t, n, i, o);
    }

    function Gt(e, t, n) {
      if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), r(e.children)) for (var i = 0, s = e.children.length; i < s; i++) {
        var l = e.children[i];
        r(l.tag) && (o(l.ns) || a(n) && "svg" !== l.tag) && Gt(l, t, n);
      }
    }

    var qt,
        zt = null;

    function Yt(e, t) {
      return (e.__esModule || de && "Module" === e[Symbol.toStringTag]) && (e = e["default"]), l(e) ? t.extend(e) : e;
    }

    function Kt(e) {
      return e.isComment && e.asyncFactory;
    }

    function Qt(e) {
      if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if (r(n) && (r(n.componentOptions) || Kt(n))) return n;
      }
    }

    function Jt(e, t) {
      qt.$on(e, t);
    }

    function Xt(e, t) {
      qt.$off(e, t);
    }

    function Zt(e, t) {
      var n = qt;
      return function i() {
        var o = t.apply(null, arguments);
        null !== o && n.$off(e, i);
      };
    }

    function en(e, t, n) {
      qt = e, dt(t, n || {}, Jt, Xt, Zt, e), qt = void 0;
    }

    var tn = null;

    function nn(e) {
      var t = tn;
      return tn = e, function () {
        tn = t;
      };
    }

    function on(e) {
      for (; e && (e = e.$parent);) {
        if (e._inactive) return !0;
      }

      return !1;
    }

    function rn(e, t) {
      if (t) {
        if (e._directInactive = !1, on(e)) return;
      } else if (e._directInactive) return;

      if (e._inactive || null === e._inactive) {
        e._inactive = !1;

        for (var n = 0; n < e.$children.length; n++) {
          rn(e.$children[n]);
        }

        sn(e, "activated");
      }
    }

    function an(e, t) {
      if (!(t && (e._directInactive = !0, on(e)) || e._inactive)) {
        e._inactive = !0;

        for (var n = 0; n < e.$children.length; n++) {
          an(e.$children[n]);
        }

        sn(e, "deactivated");
      }
    }

    function sn(e, t) {
      ge();
      var n = e.$options[t],
          i = t + " hook";
      if (n) for (var o = 0, r = n.length; o < r; o++) {
        qe(n[o], e, null, e, i);
      }
      e._hasHookEvent && e.$emit("hook:" + t), me();
    }

    var ln = [],
        cn = [],
        dn = {},
        un = !1,
        fn = !1,
        pn = 0,
        hn = 0,
        gn = Date.now;

    if (Y && !X) {
      var mn = window.performance;
      mn && "function" == typeof mn.now && gn() > document.createEvent("Event").timeStamp && (gn = function gn() {
        return mn.now();
      });
    }

    function vn() {
      var e, t;

      for (hn = gn(), fn = !0, ln.sort(function (e, t) {
        return e.id - t.id;
      }), pn = 0; pn < ln.length; pn++) {
        (e = ln[pn]).before && e.before(), t = e.id, dn[t] = null, e.run();
      }

      var n = cn.slice(),
          i = ln.slice();
      pn = ln.length = cn.length = 0, dn = {}, un = fn = !1, function (e) {
        for (var t = 0; t < e.length; t++) {
          e[t]._inactive = !0, rn(e[t], !0);
        }
      }(n), function (e) {
        for (var t = e.length; t--;) {
          var n = e[t],
              i = n.vm;
          i._watcher === n && i._isMounted && !i._isDestroyed && sn(i, "updated");
        }
      }(i), se && F.devtools && se.emit("flush");
    }

    var yn = 0,
        En = function En(e, t, n, i, o) {
      this.vm = e, o && (e._watcher = this), e._watchers.push(this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, this.sync = !!i.sync, this.before = i.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++yn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ce(), this.newDepIds = new ce(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
        if (!q.test(e)) {
          var t = e.split(".");
          return function (e) {
            for (var n = 0; n < t.length; n++) {
              if (!e) return;
              e = e[t[n]];
            }

            return e;
          };
        }
      }(t), this.getter || (this.getter = M)), this.value = this.lazy ? void 0 : this.get();
    };

    En.prototype.get = function () {
      var e;
      ge(this);
      var t = this.vm;

      try {
        e = this.getter.call(t, t);
      } catch (e) {
        if (!this.user) throw e;
        Ge(e, t, 'getter for watcher "' + this.expression + '"');
      } finally {
        this.deep && at(e), me(), this.cleanupDeps();
      }

      return e;
    }, En.prototype.addDep = function (e) {
      var t = e.id;
      this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
    }, En.prototype.cleanupDeps = function () {
      for (var e = this.deps.length; e--;) {
        var t = this.deps[e];
        this.newDepIds.has(t.id) || t.removeSub(this);
      }

      var n = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
    }, En.prototype.update = function () {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
        var t = e.id;

        if (null == dn[t]) {
          if (dn[t] = !0, fn) {
            for (var n = ln.length - 1; n > pn && ln[n].id > e.id;) {
              n--;
            }

            ln.splice(n + 1, 0, e);
          } else ln.push(e);

          un || (un = !0, ot(vn));
        }
      }(this);
    }, En.prototype.run = function () {
      if (this.active) {
        var e = this.get();

        if (e !== this.value || l(e) || this.deep) {
          var t = this.value;
          if (this.value = e, this.user) try {
            this.cb.call(this.vm, e, t);
          } catch (e) {
            Ge(e, this.vm, 'callback for watcher "' + this.expression + '"');
          } else this.cb.call(this.vm, e, t);
        }
      }
    }, En.prototype.evaluate = function () {
      this.value = this.get(), this.dirty = !1;
    }, En.prototype.depend = function () {
      for (var e = this.deps.length; e--;) {
        this.deps[e].depend();
      }
    }, En.prototype.teardown = function () {
      if (this.active) {
        this.vm._isBeingDestroyed || y(this.vm._watchers, this);

        for (var e = this.deps.length; e--;) {
          this.deps[e].removeSub(this);
        }

        this.active = !1;
      }
    };
    var An = {
      enumerable: !0,
      configurable: !0,
      get: M,
      set: M
    };

    function bn(e, t, n) {
      An.get = function () {
        return this[t][n];
      }, An.set = function (e) {
        this[t][n] = e;
      }, Object.defineProperty(e, n, An);
    }

    var _n = {
      lazy: !0
    };

    function Sn(e, t, n) {
      var i = !ae();
      "function" == typeof n ? (An.get = i ? wn(t) : Cn(n), An.set = M) : (An.get = n.get ? i && !1 !== n.cache ? wn(t) : Cn(n.get) : M, An.set = n.set || M), Object.defineProperty(e, t, An);
    }

    function wn(e) {
      return function () {
        var t = this._computedWatchers && this._computedWatchers[e];
        if (t) return t.dirty && t.evaluate(), pe.target && t.depend(), t.value;
      };
    }

    function Cn(e) {
      return function () {
        return e.call(this, this);
      };
    }

    function In(e, t, n, i) {
      return d(n) && (i = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, i);
    }

    var kn = 0;

    function Tn(e) {
      var t = e.options;

      if (e["super"]) {
        var n = Tn(e["super"]);

        if (n !== e.superOptions) {
          e.superOptions = n;

          var i = function (e) {
            var t,
                n = e.options,
                i = e.sealedOptions;

            for (var o in n) {
              n[o] !== i[o] && (t || (t = {}), t[o] = n[o]);
            }

            return t;
          }(e);

          i && N(e.extendOptions, i), (t = e.options = Be(n, e.extendOptions)).name && (t.components[t.name] = e);
        }
      }

      return t;
    }

    function Nn(e) {
      this._init(e);
    }

    function xn(e) {
      return e && (e.Ctor.options.name || e.tag);
    }

    function Mn(e, t) {
      return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, !("[object RegExp]" !== c.call(n)) && e.test(t));
      var n;
    }

    function Dn(e, t) {
      var n = e.cache,
          i = e.keys,
          o = e._vnode;

      for (var r in n) {
        var a = n[r];

        if (a) {
          var s = xn(a.componentOptions);
          s && !t(s) && On(n, r, i, o);
        }
      }
    }

    function On(e, t, n, i) {
      var o = e[t];
      !o || i && o.tag === i.tag || o.componentInstance.$destroy(), e[t] = null, y(n, t);
    }

    !function (e) {
      e.prototype._init = function (e) {
        var n = this;
        n._uid = kn++, n._isVue = !0, e && e._isComponent ? function (e, t) {
          var n = e.$options = Object.create(e.constructor.options),
              i = t._parentVnode;
          n.parent = t.parent, n._parentVnode = i;
          var o = i.componentOptions;
          n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
        }(n, e) : n.$options = Be(Tn(n.constructor), e || {}, n), n._renderProxy = n, n._self = n, function (e) {
          var t = e.$options,
              n = t.parent;

          if (n && !t["abstract"]) {
            for (; n.$options["abstract"] && n.$parent;) {
              n = n.$parent;
            }

            n.$children.push(e);
          }

          e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
        }(n), function (e) {
          e._events = Object.create(null), e._hasHookEvent = !1;
          var t = e.$options._parentListeners;
          t && en(e, t);
        }(n), function (e) {
          e._vnode = null, e._staticTrees = null;
          var n = e.$options,
              i = e.$vnode = n._parentVnode,
              o = i && i.context;
          e.$slots = vt(n._renderChildren, o), e.$scopedSlots = t, e._c = function (t, n, i, o) {
            return Vt(e, t, n, i, o, !1);
          }, e.$createElement = function (t, n, i, o) {
            return Vt(e, t, n, i, o, !0);
          };
          var r = i && i.data;
          Ne(e, "$attrs", r && r.attrs || t, null, !0), Ne(e, "$listeners", n._parentListeners || t, null, !0);
        }(n), sn(n, "beforeCreate"), function (e) {
          var t = mt(e.$options.inject, e);
          t && (Ie(!1), Object.keys(t).forEach(function (n) {
            Ne(e, n, t[n]);
          }), Ie(!0));
        }(n), function (e) {
          e._watchers = [];
          var t = e.$options;
          t.props && function (e, t) {
            var n = e.$options.propsData || {},
                i = e._props = {},
                o = e.$options._propKeys = [];
            e.$parent && Ie(!1);

            var r = function r(_r2) {
              o.push(_r2);
              var a = Fe(_r2, t, n, e);
              Ne(i, _r2, a), _r2 in e || bn(e, "_props", _r2);
            };

            for (var a in t) {
              r(a);
            }

            Ie(!0);
          }(e, t.props), t.methods && function (e, t) {
            for (var n in e.$options.props, t) {
              e[n] = "function" != typeof t[n] ? M : k(t[n], e);
            }
          }(e, t.methods), t.data ? function (e) {
            var t = e.$options.data;
            d(t = e._data = "function" == typeof t ? function (e, t) {
              ge();

              try {
                return e.call(t, t);
              } catch (e) {
                return Ge(e, t, "data()"), {};
              } finally {
                me();
              }
            }(t, e) : t || {}) || (t = {});

            for (var n = Object.keys(t), i = e.$options.props, o = (e.$options.methods, n.length); o--;) {
              var r = n[o];
              i && A(i, r) || H(r) || bn(e, "_data", r);
            }

            Te(t, !0);
          }(e) : Te(e._data = {}, !0), t.computed && function (e, t) {
            var n = e._computedWatchers = Object.create(null),
                i = ae();

            for (var o in t) {
              var r = t[o],
                  a = "function" == typeof r ? r : r.get;
              i || (n[o] = new En(e, a || M, M, _n)), o in e || Sn(e, o, r);
            }
          }(e, t.computed), t.watch && t.watch !== ie && function (e, t) {
            for (var n in t) {
              var i = t[n];
              if (Array.isArray(i)) for (var o = 0; o < i.length; o++) {
                In(e, n, i[o]);
              } else In(e, n, i);
            }
          }(e, t.watch);
        }(n), function (e) {
          var t = e.$options.provide;
          t && (e._provided = "function" == typeof t ? t.call(e) : t);
        }(n), sn(n, "created"), n.$options.el && n.$mount(n.$options.el);
      };
    }(Nn), function (e) {
      Object.defineProperty(e.prototype, "$data", {
        get: function get() {
          return this._data;
        }
      }), Object.defineProperty(e.prototype, "$props", {
        get: function get() {
          return this._props;
        }
      }), e.prototype.$set = xe, e.prototype.$delete = Me, e.prototype.$watch = function (e, t, n) {
        var i = this;
        if (d(t)) return In(i, e, t, n);
        (n = n || {}).user = !0;
        var o = new En(i, e, t, n);
        if (n.immediate) try {
          t.call(i, o.value);
        } catch (e) {
          Ge(e, i, 'callback for immediate watcher "' + o.expression + '"');
        }
        return function () {
          o.teardown();
        };
      };
    }(Nn), function (e) {
      var t = /^hook:/;
      e.prototype.$on = function (e, n) {
        var i = this;
        if (Array.isArray(e)) for (var o = 0, r = e.length; o < r; o++) {
          i.$on(e[o], n);
        } else (i._events[e] || (i._events[e] = [])).push(n), t.test(e) && (i._hasHookEvent = !0);
        return i;
      }, e.prototype.$once = function (e, t) {
        var n = this;

        function i() {
          n.$off(e, i), t.apply(n, arguments);
        }

        return i.fn = t, n.$on(e, i), n;
      }, e.prototype.$off = function (e, t) {
        var n = this;
        if (!arguments.length) return n._events = Object.create(null), n;

        if (Array.isArray(e)) {
          for (var i = 0, o = e.length; i < o; i++) {
            n.$off(e[i], t);
          }

          return n;
        }

        var r,
            a = n._events[e];
        if (!a) return n;
        if (!t) return n._events[e] = null, n;

        for (var s = a.length; s--;) {
          if ((r = a[s]) === t || r.fn === t) {
            a.splice(s, 1);
            break;
          }
        }

        return n;
      }, e.prototype.$emit = function (e) {
        var t = this,
            n = t._events[e];

        if (n) {
          n = n.length > 1 ? T(n) : n;

          for (var i = T(arguments, 1), o = 'event handler for "' + e + '"', r = 0, a = n.length; r < a; r++) {
            qe(n[r], t, i, t, o);
          }
        }

        return t;
      };
    }(Nn), function (e) {
      e.prototype._update = function (e, t) {
        var n = this,
            i = n.$el,
            o = n._vnode,
            r = nn(n);
        n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), r(), i && (i.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
      }, e.prototype.$forceUpdate = function () {
        this._watcher && this._watcher.update();
      }, e.prototype.$destroy = function () {
        var e = this;

        if (!e._isBeingDestroyed) {
          sn(e, "beforeDestroy"), e._isBeingDestroyed = !0;
          var t = e.$parent;
          !t || t._isBeingDestroyed || e.$options["abstract"] || y(t.$children, e), e._watcher && e._watcher.teardown();

          for (var n = e._watchers.length; n--;) {
            e._watchers[n].teardown();
          }

          e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), sn(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
        }
      };
    }(Nn), function (e) {
      Rt(e.prototype), e.prototype.$nextTick = function (e) {
        return ot(e, this);
      }, e.prototype._render = function () {
        var e,
            t = this,
            n = t.$options,
            i = n.render,
            o = n._parentVnode;
        o && (t.$scopedSlots = Et(o.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = o;

        try {
          zt = t, e = i.call(t._renderProxy, t.$createElement);
        } catch (n) {
          Ge(n, t, "render"), e = t._vnode;
        } finally {
          zt = null;
        }

        return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ve || (e = Ee()), e.parent = o, e;
      };
    }(Nn);
    var Ln = [String, RegExp, Array],
        $n = {
      KeepAlive: {
        name: "keep-alive",
        "abstract": !0,
        props: {
          include: Ln,
          exclude: Ln,
          max: [String, Number]
        },
        created: function created() {
          this.cache = Object.create(null), this.keys = [];
        },
        destroyed: function destroyed() {
          for (var e in this.cache) {
            On(this.cache, e, this.keys);
          }
        },
        mounted: function mounted() {
          var e = this;
          this.$watch("include", function (t) {
            Dn(e, function (e) {
              return Mn(t, e);
            });
          }), this.$watch("exclude", function (t) {
            Dn(e, function (e) {
              return !Mn(t, e);
            });
          });
        },
        render: function render() {
          var e = this.$slots["default"],
              t = Qt(e),
              n = t && t.componentOptions;

          if (n) {
            var i = xn(n),
                o = this.include,
                r = this.exclude;
            if (o && (!i || !Mn(o, i)) || r && i && Mn(r, i)) return t;
            var a = this.cache,
                s = this.keys,
                l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
            a[l] ? (t.componentInstance = a[l].componentInstance, y(s, l), s.push(l)) : (a[l] = t, s.push(l), this.max && s.length > parseInt(this.max) && On(a, s[0], s, this._vnode)), t.data.keepAlive = !0;
          }

          return t || e && e[0];
        }
      }
    };
    !function (e) {
      var t = {
        get: function get() {
          return F;
        }
      };
      Object.defineProperty(e, "config", t), e.util = {
        warn: ue,
        extend: N,
        mergeOptions: Be,
        defineReactive: Ne
      }, e.set = xe, e["delete"] = Me, e.nextTick = ot, e.observable = function (e) {
        return Te(e), e;
      }, e.options = Object.create(null), B.forEach(function (t) {
        e.options[t + "s"] = Object.create(null);
      }), e.options._base = e, N(e.options.components, $n), function (e) {
        e.use = function (e) {
          var t = this._installedPlugins || (this._installedPlugins = []);
          if (t.indexOf(e) > -1) return this;
          var n = T(arguments, 1);
          return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this;
        };
      }(e), function (e) {
        e.mixin = function (e) {
          return this.options = Be(this.options, e), this;
        };
      }(e), function (e) {
        e.cid = 0;
        var t = 1;

        e.extend = function (e) {
          e = e || {};
          var n = this,
              i = n.cid,
              o = e._Ctor || (e._Ctor = {});
          if (o[i]) return o[i];

          var r = e.name || n.options.name,
              a = function a(e) {
            this._init(e);
          };

          return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = Be(n.options, e), a["super"] = n, a.options.props && function (e) {
            var t = e.options.props;

            for (var n in t) {
              bn(e.prototype, "_props", n);
            }
          }(a), a.options.computed && function (e) {
            var t = e.options.computed;

            for (var n in t) {
              Sn(e.prototype, n, t[n]);
            }
          }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, B.forEach(function (e) {
            a[e] = n[e];
          }), r && (a.options.components[r] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = N({}, a.options), o[i] = a, a;
        };
      }(e), function (e) {
        B.forEach(function (t) {
          e[t] = function (e, n) {
            return n ? ("component" === t && d(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
              bind: n,
              update: n
            }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
          };
        });
      }(e);
    }(Nn), Object.defineProperty(Nn.prototype, "$isServer", {
      get: ae
    }), Object.defineProperty(Nn.prototype, "$ssrContext", {
      get: function get() {
        return this.$vnode && this.$vnode.ssrContext;
      }
    }), Object.defineProperty(Nn, "FunctionalRenderContext", {
      value: Wt
    }), Nn.version = "2.6.12";

    var Rn = g("style,class"),
        Wn = g("input,textarea,option,select,progress"),
        Pn = function Pn(e, t, n) {
      return "value" === n && Wn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
    },
        Bn = g("contenteditable,draggable,spellcheck"),
        jn = g("events,caret,typing,plaintext-only"),
        Fn = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        Un = "http://www.w3.org/1999/xlink",
        Hn = function Hn(e) {
      return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
    },
        Vn = function Vn(e) {
      return Hn(e) ? e.slice(6, e.length) : "";
    },
        Gn = function Gn(e) {
      return null == e || !1 === e;
    };

    function qn(e, t) {
      return {
        staticClass: zn(e.staticClass, t.staticClass),
        "class": r(e["class"]) ? [e["class"], t["class"]] : t["class"]
      };
    }

    function zn(e, t) {
      return e ? t ? e + " " + t : e : t || "";
    }

    function Yn(e) {
      return Array.isArray(e) ? function (e) {
        for (var t, n = "", i = 0, o = e.length; i < o; i++) {
          r(t = Yn(e[i])) && "" !== t && (n && (n += " "), n += t);
        }

        return n;
      }(e) : l(e) ? function (e) {
        var t = "";

        for (var n in e) {
          e[n] && (t && (t += " "), t += n);
        }

        return t;
      }(e) : "string" == typeof e ? e : "";
    }

    var Kn = {
      svg: "http://www.w3.org/2000/svg",
      math: "http://www.w3.org/1998/Math/MathML"
    },
        Qn = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        Jn = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        Xn = function Xn(e) {
      return Qn(e) || Jn(e);
    };

    function Zn(e) {
      return Jn(e) ? "svg" : "math" === e ? "math" : void 0;
    }

    var ei = Object.create(null),
        ti = g("text,number,password,search,email,tel,url");

    function ni(e) {
      return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e;
    }

    var ii = Object.freeze({
      createElement: function createElement(e, t) {
        var n = document.createElement(e);
        return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
      },
      createElementNS: function createElementNS(e, t) {
        return document.createElementNS(Kn[e], t);
      },
      createTextNode: function createTextNode(e) {
        return document.createTextNode(e);
      },
      createComment: function createComment(e) {
        return document.createComment(e);
      },
      insertBefore: function insertBefore(e, t, n) {
        e.insertBefore(t, n);
      },
      removeChild: function removeChild(e, t) {
        e.removeChild(t);
      },
      appendChild: function appendChild(e, t) {
        e.appendChild(t);
      },
      parentNode: function parentNode(e) {
        return e.parentNode;
      },
      nextSibling: function nextSibling(e) {
        return e.nextSibling;
      },
      tagName: function tagName(e) {
        return e.tagName;
      },
      setTextContent: function setTextContent(e, t) {
        e.textContent = t;
      },
      setStyleScope: function setStyleScope(e, t) {
        e.setAttribute(t, "");
      }
    }),
        oi = {
      create: function create(e, t) {
        ri(t);
      },
      update: function update(e, t) {
        e.data.ref !== t.data.ref && (ri(e, !0), ri(t));
      },
      destroy: function destroy(e) {
        ri(e, !0);
      }
    };

    function ri(e, t) {
      var n = e.data.ref;

      if (r(n)) {
        var i = e.context,
            o = e.componentInstance || e.elm,
            a = i.$refs;
        t ? Array.isArray(a[n]) ? y(a[n], o) : a[n] === o && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(o) < 0 && a[n].push(o) : a[n] = [o] : a[n] = o;
      }
    }

    var ai = new ve("", {}, []),
        si = ["create", "activate", "update", "remove", "destroy"];

    function li(e, t) {
      return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && r(e.data) === r(t.data) && function (e, t) {
        if ("input" !== e.tag) return !0;
        var n,
            i = r(n = e.data) && r(n = n.attrs) && n.type,
            o = r(n = t.data) && r(n = n.attrs) && n.type;
        return i === o || ti(i) && ti(o);
      }(e, t) || a(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && o(t.asyncFactory.error));
    }

    function ci(e, t, n) {
      var i,
          o,
          a = {};

      for (i = t; i <= n; ++i) {
        r(o = e[i].key) && (a[o] = i);
      }

      return a;
    }

    var di = {
      create: ui,
      update: ui,
      destroy: function destroy(e) {
        ui(e, ai);
      }
    };

    function ui(e, t) {
      (e.data.directives || t.data.directives) && function (e, t) {
        var n,
            i,
            o,
            r = e === ai,
            a = t === ai,
            s = pi(e.data.directives, e.context),
            l = pi(t.data.directives, t.context),
            c = [],
            d = [];

        for (n in l) {
          i = s[n], o = l[n], i ? (o.oldValue = i.value, o.oldArg = i.arg, gi(o, "update", t, e), o.def && o.def.componentUpdated && d.push(o)) : (gi(o, "bind", t, e), o.def && o.def.inserted && c.push(o));
        }

        if (c.length) {
          var u = function u() {
            for (var n = 0; n < c.length; n++) {
              gi(c[n], "inserted", t, e);
            }
          };

          r ? ut(t, "insert", u) : u();
        }

        if (d.length && ut(t, "postpatch", function () {
          for (var n = 0; n < d.length; n++) {
            gi(d[n], "componentUpdated", t, e);
          }
        }), !r) for (n in s) {
          l[n] || gi(s[n], "unbind", e, e, a);
        }
      }(e, t);
    }

    var fi = Object.create(null);

    function pi(e, t) {
      var n,
          i,
          o = Object.create(null);
      if (!e) return o;

      for (n = 0; n < e.length; n++) {
        (i = e[n]).modifiers || (i.modifiers = fi), o[hi(i)] = i, i.def = je(t.$options, "directives", i.name);
      }

      return o;
    }

    function hi(e) {
      return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
    }

    function gi(e, t, n, i, o) {
      var r = e.def && e.def[t];
      if (r) try {
        r(n.elm, e, n, i, o);
      } catch (i) {
        Ge(i, n.context, "directive " + e.name + " " + t + " hook");
      }
    }

    var mi = [oi, di];

    function vi(e, t) {
      var n = t.componentOptions;

      if (!(r(n) && !1 === n.Ctor.options.inheritAttrs || o(e.data.attrs) && o(t.data.attrs))) {
        var i,
            a,
            s = t.elm,
            l = e.data.attrs || {},
            c = t.data.attrs || {};

        for (i in r(c.__ob__) && (c = t.data.attrs = N({}, c)), c) {
          a = c[i], l[i] !== a && yi(s, i, a);
        }

        for (i in (X || ee) && c.value !== l.value && yi(s, "value", c.value), l) {
          o(c[i]) && (Hn(i) ? s.removeAttributeNS(Un, Vn(i)) : Bn(i) || s.removeAttribute(i));
        }
      }
    }

    function yi(e, t, n) {
      e.tagName.indexOf("-") > -1 ? Ei(e, t, n) : Fn(t) ? Gn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Bn(t) ? e.setAttribute(t, function (e, t) {
        return Gn(t) || "false" === t ? "false" : "contenteditable" === e && jn(t) ? t : "true";
      }(t, n)) : Hn(t) ? Gn(n) ? e.removeAttributeNS(Un, Vn(t)) : e.setAttributeNS(Un, t, n) : Ei(e, t, n);
    }

    function Ei(e, t, n) {
      if (Gn(n)) e.removeAttribute(t);else {
        if (X && !Z && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
          var i = function i(t) {
            t.stopImmediatePropagation(), e.removeEventListener("input", i);
          };

          e.addEventListener("input", i), e.__ieph = !0;
        }

        e.setAttribute(t, n);
      }
    }

    var Ai = {
      create: vi,
      update: vi
    };

    function bi(e, t) {
      var n = t.elm,
          i = t.data,
          a = e.data;

      if (!(o(i.staticClass) && o(i["class"]) && (o(a) || o(a.staticClass) && o(a["class"])))) {
        var s = function (e) {
          for (var t = e.data, n = e, i = e; r(i.componentInstance);) {
            (i = i.componentInstance._vnode) && i.data && (t = qn(i.data, t));
          }

          for (; r(n = n.parent);) {
            n && n.data && (t = qn(t, n.data));
          }

          return o = t.staticClass, a = t["class"], r(o) || r(a) ? zn(o, Yn(a)) : "";
          var o, a;
        }(t),
            l = n._transitionClasses;

        r(l) && (s = zn(s, Yn(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s);
      }
    }

    var _i,
        Si,
        wi,
        Ci,
        Ii,
        ki,
        Ti = {
      create: bi,
      update: bi
    },
        Ni = /[\w).+\-_$\]]/;

    function xi(e) {
      var t,
          n,
          i,
          o,
          r,
          a = !1,
          s = !1,
          l = !1,
          c = !1,
          d = 0,
          u = 0,
          f = 0,
          p = 0;

      for (i = 0; i < e.length; i++) {
        if (n = t, t = e.charCodeAt(i), a) 39 === t && 92 !== n && (a = !1);else if (s) 34 === t && 92 !== n && (s = !1);else if (l) 96 === t && 92 !== n && (l = !1);else if (c) 47 === t && 92 !== n && (c = !1);else if (124 !== t || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || d || u || f) {
          switch (t) {
            case 34:
              s = !0;
              break;

            case 39:
              a = !0;
              break;

            case 96:
              l = !0;
              break;

            case 40:
              f++;
              break;

            case 41:
              f--;
              break;

            case 91:
              u++;
              break;

            case 93:
              u--;
              break;

            case 123:
              d++;
              break;

            case 125:
              d--;
          }

          if (47 === t) {
            for (var h = i - 1, g = void 0; h >= 0 && " " === (g = e.charAt(h)); h--) {
              ;
            }

            g && Ni.test(g) || (c = !0);
          }
        } else void 0 === o ? (p = i + 1, o = e.slice(0, i).trim()) : m();
      }

      function m() {
        (r || (r = [])).push(e.slice(p, i).trim()), p = i + 1;
      }

      if (void 0 === o ? o = e.slice(0, i).trim() : 0 !== p && m(), r) for (i = 0; i < r.length; i++) {
        o = Mi(o, r[i]);
      }
      return o;
    }

    function Mi(e, t) {
      var n = t.indexOf("(");
      if (n < 0) return '_f("' + t + '")(' + e + ")";
      var i = t.slice(0, n),
          o = t.slice(n + 1);
      return '_f("' + i + '")(' + e + (")" !== o ? "," + o : o);
    }

    function Di(e, t) {
      console.error("[Vue compiler]: " + e);
    }

    function Oi(e, t) {
      return e ? e.map(function (e) {
        return e[t];
      }).filter(function (e) {
        return e;
      }) : [];
    }

    function Li(e, t, n, i, o) {
      (e.props || (e.props = [])).push(Hi({
        name: t,
        value: n,
        dynamic: o
      }, i)), e.plain = !1;
    }

    function $i(e, t, n, i, o) {
      (o ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Hi({
        name: t,
        value: n,
        dynamic: o
      }, i)), e.plain = !1;
    }

    function Ri(e, t, n, i) {
      e.attrsMap[t] = n, e.attrsList.push(Hi({
        name: t,
        value: n
      }, i));
    }

    function Wi(e, t, n, i, o, r, a, s) {
      (e.directives || (e.directives = [])).push(Hi({
        name: t,
        rawName: n,
        value: i,
        arg: o,
        isDynamicArg: r,
        modifiers: a
      }, s)), e.plain = !1;
    }

    function Pi(e, t, n) {
      return n ? "_p(" + t + ',"' + e + '")' : e + t;
    }

    function Bi(e, n, i, o, r, a, s, l) {
      var c;
      (o = o || t).right ? l ? n = "(" + n + ")==='click'?'contextmenu':(" + n + ")" : "click" === n && (n = "contextmenu", delete o.right) : o.middle && (l ? n = "(" + n + ")==='click'?'mouseup':(" + n + ")" : "click" === n && (n = "mouseup")), o.capture && (delete o.capture, n = Pi("!", n, l)), o.once && (delete o.once, n = Pi("~", n, l)), o.passive && (delete o.passive, n = Pi("&", n, l)), o["native"] ? (delete o["native"], c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
      var d = Hi({
        value: i.trim(),
        dynamic: l
      }, s);
      o !== t && (d.modifiers = o);
      var u = c[n];
      Array.isArray(u) ? r ? u.unshift(d) : u.push(d) : c[n] = u ? r ? [d, u] : [u, d] : d, e.plain = !1;
    }

    function ji(e, t, n) {
      var i = Fi(e, ":" + t) || Fi(e, "v-bind:" + t);
      if (null != i) return xi(i);

      if (!1 !== n) {
        var o = Fi(e, t);
        if (null != o) return JSON.stringify(o);
      }
    }

    function Fi(e, t, n) {
      var i;
      if (null != (i = e.attrsMap[t])) for (var o = e.attrsList, r = 0, a = o.length; r < a; r++) {
        if (o[r].name === t) {
          o.splice(r, 1);
          break;
        }
      }
      return n && delete e.attrsMap[t], i;
    }

    function Ui(e, t) {
      for (var n = e.attrsList, i = 0, o = n.length; i < o; i++) {
        var r = n[i];
        if (t.test(r.name)) return n.splice(i, 1), r;
      }
    }

    function Hi(e, t) {
      return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
    }

    function Vi(e, t, n) {
      var i = n || {},
          o = i.number,
          r = "$$v";
      i.trim && (r = "(typeof $$v === 'string'? $$v.trim(): $$v)"), o && (r = "_n(" + r + ")");
      var a = Gi(t, r);
      e.model = {
        value: "(" + t + ")",
        expression: JSON.stringify(t),
        callback: "function ($$v) {" + a + "}"
      };
    }

    function Gi(e, t) {
      var n = function (e) {
        if (e = e.trim(), _i = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < _i - 1) return (Ci = e.lastIndexOf(".")) > -1 ? {
          exp: e.slice(0, Ci),
          key: '"' + e.slice(Ci + 1) + '"'
        } : {
          exp: e,
          key: null
        };

        for (Si = e, Ci = Ii = ki = 0; !zi();) {
          Yi(wi = qi()) ? Qi(wi) : 91 === wi && Ki(wi);
        }

        return {
          exp: e.slice(0, Ii),
          key: e.slice(Ii + 1, ki)
        };
      }(e);

      return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")";
    }

    function qi() {
      return Si.charCodeAt(++Ci);
    }

    function zi() {
      return Ci >= _i;
    }

    function Yi(e) {
      return 34 === e || 39 === e;
    }

    function Ki(e) {
      var t = 1;

      for (Ii = Ci; !zi();) {
        if (Yi(e = qi())) Qi(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
          ki = Ci;
          break;
        }
      }
    }

    function Qi(e) {
      for (var t = e; !zi() && (e = qi()) !== t;) {
        ;
      }
    }

    var Ji;

    function Xi(e, t, n) {
      var i = Ji;
      return function o() {
        var r = t.apply(null, arguments);
        null !== r && to(e, o, n, i);
      };
    }

    var Zi = Qe && !(ne && Number(ne[1]) <= 53);

    function eo(e, t, n, i) {
      if (Zi) {
        var o = hn,
            r = t;

        t = r._wrapper = function (e) {
          if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document) return r.apply(this, arguments);
        };
      }

      Ji.addEventListener(e, t, oe ? {
        capture: n,
        passive: i
      } : n);
    }

    function to(e, t, n, i) {
      (i || Ji).removeEventListener(e, t._wrapper || t, n);
    }

    function no(e, t) {
      if (!o(e.data.on) || !o(t.data.on)) {
        var n = t.data.on || {},
            i = e.data.on || {};
        Ji = t.elm, function (e) {
          if (r(e.__r)) {
            var t = X ? "change" : "input";
            e[t] = [].concat(e.__r, e[t] || []), delete e.__r;
          }

          r(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c);
        }(n), dt(n, i, eo, to, Xi, t.context), Ji = void 0;
      }
    }

    var io,
        oo = {
      create: no,
      update: no
    };

    function ro(e, t) {
      if (!o(e.data.domProps) || !o(t.data.domProps)) {
        var n,
            i,
            a = t.elm,
            s = e.data.domProps || {},
            l = t.data.domProps || {};

        for (n in r(l.__ob__) && (l = t.data.domProps = N({}, l)), s) {
          n in l || (a[n] = "");
        }

        for (n in l) {
          if (i = l[n], "textContent" === n || "innerHTML" === n) {
            if (t.children && (t.children.length = 0), i === s[n]) continue;
            1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
          }

          if ("value" === n && "PROGRESS" !== a.tagName) {
            a._value = i;
            var c = o(i) ? "" : String(i);
            ao(a, c) && (a.value = c);
          } else if ("innerHTML" === n && Jn(a.tagName) && o(a.innerHTML)) {
            (io = io || document.createElement("div")).innerHTML = "<svg>" + i + "</svg>";

            for (var d = io.firstChild; a.firstChild;) {
              a.removeChild(a.firstChild);
            }

            for (; d.firstChild;) {
              a.appendChild(d.firstChild);
            }
          } else if (i !== s[n]) try {
            a[n] = i;
          } catch (e) {}
        }
      }
    }

    function ao(e, t) {
      return !e.composing && ("OPTION" === e.tagName || function (e, t) {
        var n = !0;

        try {
          n = document.activeElement !== e;
        } catch (e) {}

        return n && e.value !== t;
      }(e, t) || function (e, t) {
        var n = e.value,
            i = e._vModifiers;

        if (r(i)) {
          if (i.number) return h(n) !== h(t);
          if (i.trim) return n.trim() !== t.trim();
        }

        return n !== t;
      }(e, t));
    }

    var so = {
      create: ro,
      update: ro
    },
        lo = b(function (e) {
      var t = {},
          n = /:(.+)/;
      return e.split(/;(?![^(]*\))/g).forEach(function (e) {
        if (e) {
          var i = e.split(n);
          i.length > 1 && (t[i[0].trim()] = i[1].trim());
        }
      }), t;
    });

    function co(e) {
      var t = uo(e.style);
      return e.staticStyle ? N(e.staticStyle, t) : t;
    }

    function uo(e) {
      return Array.isArray(e) ? x(e) : "string" == typeof e ? lo(e) : e;
    }

    var fo,
        po = /^--/,
        ho = /\s*!important$/,
        go = function go(e, t, n) {
      if (po.test(t)) e.style.setProperty(t, n);else if (ho.test(n)) e.style.setProperty(I(t), n.replace(ho, ""), "important");else {
        var i = vo(t);
        if (Array.isArray(n)) for (var o = 0, r = n.length; o < r; o++) {
          e.style[i] = n[o];
        } else e.style[i] = n;
      }
    },
        mo = ["Webkit", "Moz", "ms"],
        vo = b(function (e) {
      if (fo = fo || document.createElement("div").style, "filter" !== (e = S(e)) && e in fo) return e;

      for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < mo.length; n++) {
        var i = mo[n] + t;
        if (i in fo) return i;
      }
    });

    function yo(e, t) {
      var n = t.data,
          i = e.data;

      if (!(o(n.staticStyle) && o(n.style) && o(i.staticStyle) && o(i.style))) {
        var a,
            s,
            l = t.elm,
            c = i.staticStyle,
            d = i.normalizedStyle || i.style || {},
            u = c || d,
            f = uo(t.data.style) || {};
        t.data.normalizedStyle = r(f.__ob__) ? N({}, f) : f;

        var p = function (e, t) {
          for (var n, i = {}, o = e; o.componentInstance;) {
            (o = o.componentInstance._vnode) && o.data && (n = co(o.data)) && N(i, n);
          }

          (n = co(e.data)) && N(i, n);

          for (var r = e; r = r.parent;) {
            r.data && (n = co(r.data)) && N(i, n);
          }

          return i;
        }(t);

        for (s in u) {
          o(p[s]) && go(l, s, "");
        }

        for (s in p) {
          (a = p[s]) !== u[s] && go(l, s, null == a ? "" : a);
        }
      }
    }

    var Eo = {
      create: yo,
      update: yo
    },
        Ao = /\s+/;

    function bo(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Ao).forEach(function (t) {
        return e.classList.add(t);
      }) : e.classList.add(t);else {
        var n = " " + (e.getAttribute("class") || "") + " ";
        n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
      }
    }

    function _o(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Ao).forEach(function (t) {
        return e.classList.remove(t);
      }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
        for (var n = " " + (e.getAttribute("class") || "") + " ", i = " " + t + " "; n.indexOf(i) >= 0;) {
          n = n.replace(i, " ");
        }

        (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
      }
    }

    function So(e) {
      if (e) {
        if ("object" == _typeof(e)) {
          var t = {};
          return !1 !== e.css && N(t, wo(e.name || "v")), N(t, e), t;
        }

        return "string" == typeof e ? wo(e) : void 0;
      }
    }

    var wo = b(function (e) {
      return {
        enterClass: e + "-enter",
        enterToClass: e + "-enter-to",
        enterActiveClass: e + "-enter-active",
        leaveClass: e + "-leave",
        leaveToClass: e + "-leave-to",
        leaveActiveClass: e + "-leave-active"
      };
    }),
        Co = Y && !Z,
        Io = "transition",
        ko = "animation",
        To = "transition",
        No = "transitionend",
        xo = "animation",
        Mo = "animationend";
    Co && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (To = "WebkitTransition", No = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (xo = "WebkitAnimation", Mo = "webkitAnimationEnd"));
    var Do = Y ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
      return e();
    };

    function Oo(e) {
      Do(function () {
        Do(e);
      });
    }

    function Lo(e, t) {
      var n = e._transitionClasses || (e._transitionClasses = []);
      n.indexOf(t) < 0 && (n.push(t), bo(e, t));
    }

    function $o(e, t) {
      e._transitionClasses && y(e._transitionClasses, t), _o(e, t);
    }

    function Ro(e, t, n) {
      var i = Po(e, t),
          o = i.type,
          r = i.timeout,
          a = i.propCount;
      if (!o) return n();

      var s = o === Io ? No : Mo,
          l = 0,
          c = function c() {
        e.removeEventListener(s, d), n();
      },
          d = function d(t) {
        t.target === e && ++l >= a && c();
      };

      setTimeout(function () {
        l < a && c();
      }, r + 1), e.addEventListener(s, d);
    }

    var Wo = /\b(transform|all)(,|$)/;

    function Po(e, t) {
      var n,
          i = window.getComputedStyle(e),
          o = (i[To + "Delay"] || "").split(", "),
          r = (i[To + "Duration"] || "").split(", "),
          a = Bo(o, r),
          s = (i[xo + "Delay"] || "").split(", "),
          l = (i[xo + "Duration"] || "").split(", "),
          c = Bo(s, l),
          d = 0,
          u = 0;
      return t === Io ? a > 0 && (n = Io, d = a, u = r.length) : t === ko ? c > 0 && (n = ko, d = c, u = l.length) : u = (n = (d = Math.max(a, c)) > 0 ? a > c ? Io : ko : null) ? n === Io ? r.length : l.length : 0, {
        type: n,
        timeout: d,
        propCount: u,
        hasTransform: n === Io && Wo.test(i[To + "Property"])
      };
    }

    function Bo(e, t) {
      for (; e.length < t.length;) {
        e = e.concat(e);
      }

      return Math.max.apply(null, t.map(function (t, n) {
        return jo(t) + jo(e[n]);
      }));
    }

    function jo(e) {
      return 1e3 * Number(e.slice(0, -1).replace(",", "."));
    }

    function Fo(e, t) {
      var n = e.elm;
      r(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
      var i = So(e.data.transition);

      if (!o(i) && !r(n._enterCb) && 1 === n.nodeType) {
        for (var a = i.css, s = i.type, c = i.enterClass, d = i.enterToClass, u = i.enterActiveClass, f = i.appearClass, p = i.appearToClass, g = i.appearActiveClass, m = i.beforeEnter, v = i.enter, y = i.afterEnter, E = i.enterCancelled, A = i.beforeAppear, b = i.appear, _ = i.afterAppear, S = i.appearCancelled, w = i.duration, C = tn, I = tn.$vnode; I && I.parent;) {
          C = I.context, I = I.parent;
        }

        var k = !C._isMounted || !e.isRootInsert;

        if (!k || b || "" === b) {
          var T = k && f ? f : c,
              N = k && g ? g : u,
              x = k && p ? p : d,
              M = k && A || m,
              D = k && "function" == typeof b ? b : v,
              O = k && _ || y,
              L = k && S || E,
              $ = h(l(w) ? w.enter : w),
              R = !1 !== a && !Z,
              P = Vo(D),
              B = n._enterCb = W(function () {
            R && ($o(n, x), $o(n, N)), B.cancelled ? (R && $o(n, T), L && L(n)) : O && O(n), n._enterCb = null;
          });
          e.data.show || ut(e, "insert", function () {
            var t = n.parentNode,
                i = t && t._pending && t._pending[e.key];
            i && i.tag === e.tag && i.elm._leaveCb && i.elm._leaveCb(), D && D(n, B);
          }), M && M(n), R && (Lo(n, T), Lo(n, N), Oo(function () {
            $o(n, T), B.cancelled || (Lo(n, x), P || (Ho($) ? setTimeout(B, $) : Ro(n, s, B)));
          })), e.data.show && (t && t(), D && D(n, B)), R || P || B();
        }
      }
    }

    function Uo(e, t) {
      var n = e.elm;
      r(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
      var i = So(e.data.transition);
      if (o(i) || 1 !== n.nodeType) return t();

      if (!r(n._leaveCb)) {
        var a = i.css,
            s = i.type,
            c = i.leaveClass,
            d = i.leaveToClass,
            u = i.leaveActiveClass,
            f = i.beforeLeave,
            p = i.leave,
            g = i.afterLeave,
            m = i.leaveCancelled,
            v = i.delayLeave,
            y = i.duration,
            E = !1 !== a && !Z,
            A = Vo(p),
            b = h(l(y) ? y.leave : y),
            _ = n._leaveCb = W(function () {
          n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), E && ($o(n, d), $o(n, u)), _.cancelled ? (E && $o(n, c), m && m(n)) : (t(), g && g(n)), n._leaveCb = null;
        });

        v ? v(S) : S();
      }

      function S() {
        _.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), f && f(n), E && (Lo(n, c), Lo(n, u), Oo(function () {
          $o(n, c), _.cancelled || (Lo(n, d), A || (Ho(b) ? setTimeout(_, b) : Ro(n, s, _)));
        })), p && p(n, _), E || A || _());
      }
    }

    function Ho(e) {
      return "number" == typeof e && !isNaN(e);
    }

    function Vo(e) {
      if (o(e)) return !1;
      var t = e.fns;
      return r(t) ? Vo(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
    }

    function Go(e, t) {
      !0 !== t.data.show && Fo(t);
    }

    var qo = function (e) {
      var t,
          n,
          i = {},
          l = e.modules,
          c = e.nodeOps;

      for (t = 0; t < si.length; ++t) {
        for (i[si[t]] = [], n = 0; n < l.length; ++n) {
          r(l[n][si[t]]) && i[si[t]].push(l[n][si[t]]);
        }
      }

      function d(e) {
        var t = c.parentNode(e);
        r(t) && c.removeChild(t, e);
      }

      function u(e, t, n, o, s, l, d) {
        if (r(e.elm) && r(l) && (e = l[d] = be(e)), e.isRootInsert = !s, !function (e, t, n, o) {
          var s = e.data;

          if (r(s)) {
            var l = r(e.componentInstance) && s.keepAlive;
            if (r(s = s.hook) && r(s = s.init) && s(e, !1), r(e.componentInstance)) return f(e, t), p(n, e.elm, o), a(l) && function (e, t, n, o) {
              for (var a, s = e; s.componentInstance;) {
                if (r(a = (s = s.componentInstance._vnode).data) && r(a = a.transition)) {
                  for (a = 0; a < i.activate.length; ++a) {
                    i.activate[a](ai, s);
                  }

                  t.push(s);
                  break;
                }
              }

              p(n, e.elm, o);
            }(e, t, n, o), !0;
          }
        }(e, t, n, o)) {
          var u = e.data,
              g = e.children,
              m = e.tag;
          r(m) ? (e.elm = e.ns ? c.createElementNS(e.ns, m) : c.createElement(m, e), y(e), h(e, g, t), r(u) && v(e, t), p(n, e.elm, o)) : a(e.isComment) ? (e.elm = c.createComment(e.text), p(n, e.elm, o)) : (e.elm = c.createTextNode(e.text), p(n, e.elm, o));
        }
      }

      function f(e, t) {
        r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, m(e) ? (v(e, t), y(e)) : (ri(e), t.push(e));
      }

      function p(e, t, n) {
        r(e) && (r(n) ? c.parentNode(n) === e && c.insertBefore(e, t, n) : c.appendChild(e, t));
      }

      function h(e, t, n) {
        if (Array.isArray(t)) for (var i = 0; i < t.length; ++i) {
          u(t[i], n, e.elm, null, !0, t, i);
        } else s(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)));
      }

      function m(e) {
        for (; e.componentInstance;) {
          e = e.componentInstance._vnode;
        }

        return r(e.tag);
      }

      function v(e, n) {
        for (var o = 0; o < i.create.length; ++o) {
          i.create[o](ai, e);
        }

        r(t = e.data.hook) && (r(t.create) && t.create(ai, e), r(t.insert) && n.push(e));
      }

      function y(e) {
        var t;
        if (r(t = e.fnScopeId)) c.setStyleScope(e.elm, t);else for (var n = e; n;) {
          r(t = n.context) && r(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent;
        }
        r(t = tn) && t !== e.context && t !== e.fnContext && r(t = t.$options._scopeId) && c.setStyleScope(e.elm, t);
      }

      function E(e, t, n, i, o, r) {
        for (; i <= o; ++i) {
          u(n[i], r, e, t, !1, n, i);
        }
      }

      function A(e) {
        var t,
            n,
            o = e.data;
        if (r(o)) for (r(t = o.hook) && r(t = t.destroy) && t(e), t = 0; t < i.destroy.length; ++t) {
          i.destroy[t](e);
        }
        if (r(t = e.children)) for (n = 0; n < e.children.length; ++n) {
          A(e.children[n]);
        }
      }

      function b(e, t, n) {
        for (; t <= n; ++t) {
          var i = e[t];
          r(i) && (r(i.tag) ? (_(i), A(i)) : d(i.elm));
        }
      }

      function _(e, t) {
        if (r(t) || r(e.data)) {
          var n,
              o = i.remove.length + 1;

          for (r(t) ? t.listeners += o : t = function (e, t) {
            function n() {
              0 == --n.listeners && d(e);
            }

            return n.listeners = t, n;
          }(e.elm, o), r(n = e.componentInstance) && r(n = n._vnode) && r(n.data) && _(n, t), n = 0; n < i.remove.length; ++n) {
            i.remove[n](e, t);
          }

          r(n = e.data.hook) && r(n = n.remove) ? n(e, t) : t();
        } else d(e.elm);
      }

      function S(e, t, n, i) {
        for (var o = n; o < i; o++) {
          var a = t[o];
          if (r(a) && li(e, a)) return o;
        }
      }

      function w(e, t, n, s, l, d) {
        if (e !== t) {
          r(t.elm) && r(s) && (t = s[l] = be(t));
          var f = t.elm = e.elm;
          if (a(e.isAsyncPlaceholder)) r(t.asyncFactory.resolved) ? k(e.elm, t, n) : t.isAsyncPlaceholder = !0;else if (a(t.isStatic) && a(e.isStatic) && t.key === e.key && (a(t.isCloned) || a(t.isOnce))) t.componentInstance = e.componentInstance;else {
            var p,
                h = t.data;
            r(h) && r(p = h.hook) && r(p = p.prepatch) && p(e, t);
            var g = e.children,
                v = t.children;

            if (r(h) && m(t)) {
              for (p = 0; p < i.update.length; ++p) {
                i.update[p](e, t);
              }

              r(p = h.hook) && r(p = p.update) && p(e, t);
            }

            o(t.text) ? r(g) && r(v) ? g !== v && function (e, t, n, i, a) {
              for (var s, l, d, f = 0, p = 0, h = t.length - 1, g = t[0], m = t[h], v = n.length - 1, y = n[0], A = n[v], _ = !a; f <= h && p <= v;) {
                o(g) ? g = t[++f] : o(m) ? m = t[--h] : li(g, y) ? (w(g, y, i, n, p), g = t[++f], y = n[++p]) : li(m, A) ? (w(m, A, i, n, v), m = t[--h], A = n[--v]) : li(g, A) ? (w(g, A, i, n, v), _ && c.insertBefore(e, g.elm, c.nextSibling(m.elm)), g = t[++f], A = n[--v]) : li(m, y) ? (w(m, y, i, n, p), _ && c.insertBefore(e, m.elm, g.elm), m = t[--h], y = n[++p]) : (o(s) && (s = ci(t, f, h)), o(l = r(y.key) ? s[y.key] : S(y, t, f, h)) ? u(y, i, e, g.elm, !1, n, p) : li(d = t[l], y) ? (w(d, y, i, n, p), t[l] = void 0, _ && c.insertBefore(e, d.elm, g.elm)) : u(y, i, e, g.elm, !1, n, p), y = n[++p]);
              }

              f > h ? E(e, o(n[v + 1]) ? null : n[v + 1].elm, n, p, v, i) : p > v && b(t, f, h);
            }(f, g, v, n, d) : r(v) ? (r(e.text) && c.setTextContent(f, ""), E(f, null, v, 0, v.length - 1, n)) : r(g) ? b(g, 0, g.length - 1) : r(e.text) && c.setTextContent(f, "") : e.text !== t.text && c.setTextContent(f, t.text), r(h) && r(p = h.hook) && r(p = p.postpatch) && p(e, t);
          }
        }
      }

      function C(e, t, n) {
        if (a(n) && r(e.parent)) e.parent.data.pendingInsert = t;else for (var i = 0; i < t.length; ++i) {
          t[i].data.hook.insert(t[i]);
        }
      }

      var I = g("attrs,class,staticClass,staticStyle,key");

      function k(e, t, n, i) {
        var o,
            s = t.tag,
            l = t.data,
            c = t.children;
        if (i = i || l && l.pre, t.elm = e, a(t.isComment) && r(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
        if (r(l) && (r(o = l.hook) && r(o = o.init) && o(t, !0), r(o = t.componentInstance))) return f(t, n), !0;

        if (r(s)) {
          if (r(c)) if (e.hasChildNodes()) {
            if (r(o = l) && r(o = o.domProps) && r(o = o.innerHTML)) {
              if (o !== e.innerHTML) return !1;
            } else {
              for (var d = !0, u = e.firstChild, p = 0; p < c.length; p++) {
                if (!u || !k(u, c[p], n, i)) {
                  d = !1;
                  break;
                }

                u = u.nextSibling;
              }

              if (!d || u) return !1;
            }
          } else h(t, c, n);

          if (r(l)) {
            var g = !1;

            for (var m in l) {
              if (!I(m)) {
                g = !0, v(t, n);
                break;
              }
            }

            !g && l["class"] && at(l["class"]);
          }
        } else e.data !== t.text && (e.data = t.text);

        return !0;
      }

      return function (e, t, n, s) {
        if (!o(t)) {
          var l,
              d = !1,
              f = [];
          if (o(e)) d = !0, u(t, f);else {
            var p = r(e.nodeType);
            if (!p && li(e, t)) w(e, t, f, null, null, s);else {
              if (p) {
                if (1 === e.nodeType && e.hasAttribute(P) && (e.removeAttribute(P), n = !0), a(n) && k(e, t, f)) return C(t, f, !0), e;
                l = e, e = new ve(c.tagName(l).toLowerCase(), {}, [], void 0, l);
              }

              var h = e.elm,
                  g = c.parentNode(h);
              if (u(t, f, h._leaveCb ? null : g, c.nextSibling(h)), r(t.parent)) for (var v = t.parent, y = m(t); v;) {
                for (var E = 0; E < i.destroy.length; ++E) {
                  i.destroy[E](v);
                }

                if (v.elm = t.elm, y) {
                  for (var _ = 0; _ < i.create.length; ++_) {
                    i.create[_](ai, v);
                  }

                  var S = v.data.hook.insert;
                  if (S.merged) for (var I = 1; I < S.fns.length; I++) {
                    S.fns[I]();
                  }
                } else ri(v);

                v = v.parent;
              }
              r(g) ? b([e], 0, 0) : r(e.tag) && A(e);
            }
          }
          return C(t, f, d), t.elm;
        }

        r(e) && A(e);
      };
    }({
      nodeOps: ii,
      modules: [Ai, Ti, oo, so, Eo, Y ? {
        create: Go,
        activate: Go,
        remove: function remove(e, t) {
          !0 !== e.data.show ? Uo(e, t) : t();
        }
      } : {}].concat(mi)
    });

    Z && document.addEventListener("selectionchange", function () {
      var e = document.activeElement;
      e && e.vmodel && er(e, "input");
    });
    var zo = {
      inserted: function inserted(e, t, n, i) {
        "select" === n.tag ? (i.elm && !i.elm._vOptions ? ut(n, "postpatch", function () {
          zo.componentUpdated(e, t, n);
        }) : Yo(e, t, n.context), e._vOptions = [].map.call(e.options, Jo)) : ("textarea" === n.tag || ti(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Xo), e.addEventListener("compositionend", Zo), e.addEventListener("change", Zo), Z && (e.vmodel = !0)));
      },
      componentUpdated: function componentUpdated(e, t, n) {
        if ("select" === n.tag) {
          Yo(e, t, n.context);
          var i = e._vOptions,
              o = e._vOptions = [].map.call(e.options, Jo);
          o.some(function (e, t) {
            return !L(e, i[t]);
          }) && (e.multiple ? t.value.some(function (e) {
            return Qo(e, o);
          }) : t.value !== t.oldValue && Qo(t.value, o)) && er(e, "change");
        }
      }
    };

    function Yo(e, t, n) {
      Ko(e, t), (X || ee) && setTimeout(function () {
        Ko(e, t);
      }, 0);
    }

    function Ko(e, t, n) {
      var i = t.value,
          o = e.multiple;

      if (!o || Array.isArray(i)) {
        for (var r, a, s = 0, l = e.options.length; s < l; s++) {
          if (a = e.options[s], o) r = R(i, Jo(a)) > -1, a.selected !== r && (a.selected = r);else if (L(Jo(a), i)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
        }

        o || (e.selectedIndex = -1);
      }
    }

    function Qo(e, t) {
      return t.every(function (t) {
        return !L(t, e);
      });
    }

    function Jo(e) {
      return "_value" in e ? e._value : e.value;
    }

    function Xo(e) {
      e.target.composing = !0;
    }

    function Zo(e) {
      e.target.composing && (e.target.composing = !1, er(e.target, "input"));
    }

    function er(e, t) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(t, !0, !0), e.dispatchEvent(n);
    }

    function tr(e) {
      return !e.componentInstance || e.data && e.data.transition ? e : tr(e.componentInstance._vnode);
    }

    var nr = {
      model: zo,
      show: {
        bind: function bind(e, t, n) {
          var i = t.value,
              o = (n = tr(n)).data && n.data.transition,
              r = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
          i && o ? (n.data.show = !0, Fo(n, function () {
            e.style.display = r;
          })) : e.style.display = i ? r : "none";
        },
        update: function update(e, t, n) {
          var i = t.value;
          !i != !t.oldValue && ((n = tr(n)).data && n.data.transition ? (n.data.show = !0, i ? Fo(n, function () {
            e.style.display = e.__vOriginalDisplay;
          }) : Uo(n, function () {
            e.style.display = "none";
          })) : e.style.display = i ? e.__vOriginalDisplay : "none");
        },
        unbind: function unbind(e, t, n, i, o) {
          o || (e.style.display = e.__vOriginalDisplay);
        }
      }
    },
        ir = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object]
    };

    function or(e) {
      var t = e && e.componentOptions;
      return t && t.Ctor.options["abstract"] ? or(Qt(t.children)) : e;
    }

    function rr(e) {
      var t = {},
          n = e.$options;

      for (var i in n.propsData) {
        t[i] = e[i];
      }

      var o = n._parentListeners;

      for (var r in o) {
        t[S(r)] = o[r];
      }

      return t;
    }

    function ar(e, t) {
      if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
        props: t.componentOptions.propsData
      });
    }

    var sr = function sr(e) {
      return e.tag || Kt(e);
    },
        lr = function lr(e) {
      return "show" === e.name;
    },
        cr = {
      name: "transition",
      props: ir,
      "abstract": !0,
      render: function render(e) {
        var t = this,
            n = this.$slots["default"];

        if (n && (n = n.filter(sr)).length) {
          var i = this.mode,
              o = n[0];
          if (function (e) {
            for (; e = e.parent;) {
              if (e.data.transition) return !0;
            }
          }(this.$vnode)) return o;
          var r = or(o);
          if (!r) return o;
          if (this._leaving) return ar(e, o);
          var a = "__transition-" + this._uid + "-";
          r.key = null == r.key ? r.isComment ? a + "comment" : a + r.tag : s(r.key) ? 0 === String(r.key).indexOf(a) ? r.key : a + r.key : r.key;
          var l = (r.data || (r.data = {})).transition = rr(this),
              c = this._vnode,
              d = or(c);

          if (r.data.directives && r.data.directives.some(lr) && (r.data.show = !0), d && d.data && !function (e, t) {
            return t.key === e.key && t.tag === e.tag;
          }(r, d) && !Kt(d) && (!d.componentInstance || !d.componentInstance._vnode.isComment)) {
            var u = d.data.transition = N({}, l);
            if ("out-in" === i) return this._leaving = !0, ut(u, "afterLeave", function () {
              t._leaving = !1, t.$forceUpdate();
            }), ar(e, o);

            if ("in-out" === i) {
              if (Kt(r)) return c;

              var f,
                  p = function p() {
                f();
              };

              ut(l, "afterEnter", p), ut(l, "enterCancelled", p), ut(u, "delayLeave", function (e) {
                f = e;
              });
            }
          }

          return o;
        }
      }
    },
        dr = N({
      tag: String,
      moveClass: String
    }, ir);

    function ur(e) {
      e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
    }

    function fr(e) {
      e.data.newPos = e.elm.getBoundingClientRect();
    }

    function pr(e) {
      var t = e.data.pos,
          n = e.data.newPos,
          i = t.left - n.left,
          o = t.top - n.top;

      if (i || o) {
        e.data.moved = !0;
        var r = e.elm.style;
        r.transform = r.WebkitTransform = "translate(" + i + "px," + o + "px)", r.transitionDuration = "0s";
      }
    }

    delete dr.mode;
    var hr = {
      Transition: cr,
      TransitionGroup: {
        props: dr,
        beforeMount: function beforeMount() {
          var e = this,
              t = this._update;

          this._update = function (n, i) {
            var o = nn(e);
            e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, o(), t.call(e, n, i);
          };
        },
        render: function render(e) {
          for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, o = this.$slots["default"] || [], r = this.children = [], a = rr(this), s = 0; s < o.length; s++) {
            var l = o[s];
            l.tag && null != l.key && 0 !== String(l.key).indexOf("__vlist") && (r.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = a);
          }

          if (i) {
            for (var c = [], d = [], u = 0; u < i.length; u++) {
              var f = i[u];
              f.data.transition = a, f.data.pos = f.elm.getBoundingClientRect(), n[f.key] ? c.push(f) : d.push(f);
            }

            this.kept = e(t, null, c), this.removed = d;
          }

          return e(t, null, r);
        },
        updated: function updated() {
          var e = this.prevChildren,
              t = this.moveClass || (this.name || "v") + "-move";
          e.length && this.hasMove(e[0].elm, t) && (e.forEach(ur), e.forEach(fr), e.forEach(pr), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
            if (e.data.moved) {
              var n = e.elm,
                  i = n.style;
              Lo(n, t), i.transform = i.WebkitTransform = i.transitionDuration = "", n.addEventListener(No, n._moveCb = function e(i) {
                i && i.target !== n || i && !/transform$/.test(i.propertyName) || (n.removeEventListener(No, e), n._moveCb = null, $o(n, t));
              });
            }
          }));
        },
        methods: {
          hasMove: function hasMove(e, t) {
            if (!Co) return !1;
            if (this._hasMove) return this._hasMove;
            var n = e.cloneNode();
            e._transitionClasses && e._transitionClasses.forEach(function (e) {
              _o(n, e);
            }), bo(n, t), n.style.display = "none", this.$el.appendChild(n);
            var i = Po(n);
            return this.$el.removeChild(n), this._hasMove = i.hasTransform;
          }
        }
      }
    };
    Nn.config.mustUseProp = Pn, Nn.config.isReservedTag = Xn, Nn.config.isReservedAttr = Rn, Nn.config.getTagNamespace = Zn, Nn.config.isUnknownElement = function (e) {
      if (!Y) return !0;
      if (Xn(e)) return !1;
      if (e = e.toLowerCase(), null != ei[e]) return ei[e];
      var t = document.createElement(e);
      return e.indexOf("-") > -1 ? ei[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : ei[e] = /HTMLUnknownElement/.test(t.toString());
    }, N(Nn.options.directives, nr), N(Nn.options.components, hr), Nn.prototype.__patch__ = Y ? qo : M, Nn.prototype.$mount = function (e, t) {
      return function (e, t, n) {
        var i;
        return e.$el = t, e.$options.render || (e.$options.render = Ee), sn(e, "beforeMount"), i = function i() {
          e._update(e._render(), n);
        }, new En(e, i, M, {
          before: function before() {
            e._isMounted && !e._isDestroyed && sn(e, "beforeUpdate");
          }
        }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, sn(e, "mounted")), e;
      }(this, e = e && Y ? ni(e) : void 0, t);
    }, Y && setTimeout(function () {
      F.devtools && se && se.emit("init", Nn);
    }, 0);

    var gr,
        mr = /\{\{((?:.|\r?\n)+?)\}\}/g,
        vr = /[-.*+?^${}()|[\]\/\\]/g,
        yr = b(function (e) {
      var t = e[0].replace(vr, "\\$&"),
          n = e[1].replace(vr, "\\$&");
      return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
    }),
        Er = {
      staticKeys: ["staticClass"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = Fi(e, "class");
        n && (e.staticClass = JSON.stringify(n));
        var i = ji(e, "class", !1);
        i && (e.classBinding = i);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
      }
    },
        Ar = {
      staticKeys: ["staticStyle"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = Fi(e, "style");
        n && (e.staticStyle = JSON.stringify(lo(n)));
        var i = ji(e, "style", !1);
        i && (e.styleBinding = i);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
      }
    },
        br = g("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        _r = g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        Sr = g("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        wr = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Cr = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Ir = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + U.source + "]*",
        kr = "((?:" + Ir + "\\:)?" + Ir + ")",
        Tr = new RegExp("^<" + kr),
        Nr = /^\s*(\/?)>/,
        xr = new RegExp("^<\\/" + kr + "[^>]*>"),
        Mr = /^<!DOCTYPE [^>]+>/i,
        Dr = /^<!\--/,
        Or = /^<!\[/,
        Lr = g("script,style,textarea", !0),
        $r = {},
        Rr = {
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&amp;": "&",
      "&#10;": "\n",
      "&#9;": "\t",
      "&#39;": "'"
    },
        Wr = /&(?:lt|gt|quot|amp|#39);/g,
        Pr = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        Br = g("pre,textarea", !0),
        jr = function jr(e, t) {
      return e && Br(e) && "\n" === t[0];
    };

    function Fr(e, t) {
      var n = t ? Pr : Wr;
      return e.replace(n, function (e) {
        return Rr[e];
      });
    }

    var Ur,
        Hr,
        Vr,
        Gr,
        qr,
        zr,
        Yr,
        Kr,
        Qr = /^@|^v-on:/,
        Jr = /^v-|^@|^:|^#/,
        Xr = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        Zr = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        ea = /^\(|\)$/g,
        ta = /^\[.*\]$/,
        na = /:(.*)$/,
        ia = /^:|^\.|^v-bind:/,
        oa = /\.[^.\]]+(?=[^\]]*$)/g,
        ra = /^v-slot(:|$)|^#/,
        aa = /[\r\n]/,
        sa = /\s+/g,
        la = b(function (e) {
      return (gr = gr || document.createElement("div")).innerHTML = e, gr.textContent;
    }),
        ca = "_empty_";

    function da(e, t, n) {
      return {
        type: 1,
        tag: e,
        attrsList: t,
        attrsMap: ma(t),
        rawAttrsMap: {},
        parent: n,
        children: []
      };
    }

    function ua(e, t) {
      var n;
      !function (e) {
        var t = ji(e, "key");
        t && (e.key = t);
      }(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
        var t = ji(e, "ref");
        t && (e.ref = t, e.refInFor = function (e) {
          for (var t = e; t;) {
            if (void 0 !== t["for"]) return !0;
            t = t.parent;
          }

          return !1;
        }(e));
      }(e), function (e) {
        var t;
        "template" === e.tag ? (t = Fi(e, "scope"), e.slotScope = t || Fi(e, "slot-scope")) : (t = Fi(e, "slot-scope")) && (e.slotScope = t);
        var n = ji(e, "slot");

        if (n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || $i(e, "slot", n, function (e, t) {
          return e.rawAttrsMap[":slot"] || e.rawAttrsMap["v-bind:slot"] || e.rawAttrsMap.slot;
        }(e))), "template" === e.tag) {
          var i = Ui(e, ra);

          if (i) {
            var o = ha(i),
                r = o.name,
                a = o.dynamic;
            e.slotTarget = r, e.slotTargetDynamic = a, e.slotScope = i.value || ca;
          }
        } else {
          var s = Ui(e, ra);

          if (s) {
            var l = e.scopedSlots || (e.scopedSlots = {}),
                c = ha(s),
                d = c.name,
                u = c.dynamic,
                f = l[d] = da("template", [], e);
            f.slotTarget = d, f.slotTargetDynamic = u, f.children = e.children.filter(function (e) {
              if (!e.slotScope) return e.parent = f, !0;
            }), f.slotScope = s.value || ca, e.children = [], e.plain = !1;
          }
        }
      }(e), "slot" === (n = e).tag && (n.slotName = ji(n, "name")), function (e) {
        var t;
        (t = ji(e, "is")) && (e.component = t), null != Fi(e, "inline-template") && (e.inlineTemplate = !0);
      }(e);

      for (var i = 0; i < Vr.length; i++) {
        e = Vr[i](e, t) || e;
      }

      return function (e) {
        var t,
            n,
            i,
            o,
            r,
            a,
            s,
            l,
            c = e.attrsList;

        for (t = 0, n = c.length; t < n; t++) {
          if (i = o = c[t].name, r = c[t].value, Jr.test(i)) {
            if (e.hasBindings = !0, (a = ga(i.replace(Jr, ""))) && (i = i.replace(oa, "")), ia.test(i)) i = i.replace(ia, ""), r = xi(r), (l = ta.test(i)) && (i = i.slice(1, -1)), a && (a.prop && !l && "innerHtml" === (i = S(i)) && (i = "innerHTML"), a.camel && !l && (i = S(i)), a.sync && (s = Gi(r, "$event"), l ? Bi(e, '"update:"+(' + i + ")", s, null, !1, 0, c[t], !0) : (Bi(e, "update:" + S(i), s, null, !1, 0, c[t]), I(i) !== S(i) && Bi(e, "update:" + I(i), s, null, !1, 0, c[t])))), a && a.prop || !e.component && Yr(e.tag, e.attrsMap.type, i) ? Li(e, i, r, c[t], l) : $i(e, i, r, c[t], l);else if (Qr.test(i)) i = i.replace(Qr, ""), (l = ta.test(i)) && (i = i.slice(1, -1)), Bi(e, i, r, a, !1, 0, c[t], l);else {
              var d = (i = i.replace(Jr, "")).match(na),
                  u = d && d[1];
              l = !1, u && (i = i.slice(0, -(u.length + 1)), ta.test(u) && (u = u.slice(1, -1), l = !0)), Wi(e, i, o, r, u, l, a, c[t]);
            }
          } else $i(e, i, JSON.stringify(r), c[t]), !e.component && "muted" === i && Yr(e.tag, e.attrsMap.type, i) && Li(e, i, "true", c[t]);
        }
      }(e), e;
    }

    function fa(e) {
      var t;

      if (t = Fi(e, "v-for")) {
        var n = function (e) {
          var t = e.match(Xr);

          if (t) {
            var n = {};
            n["for"] = t[2].trim();
            var i = t[1].trim().replace(ea, ""),
                o = i.match(Zr);
            return o ? (n.alias = i.replace(Zr, "").trim(), n.iterator1 = o[1].trim(), o[2] && (n.iterator2 = o[2].trim())) : n.alias = i, n;
          }
        }(t);

        n && N(e, n);
      }
    }

    function pa(e, t) {
      e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
    }

    function ha(e) {
      var t = e.name.replace(ra, "");
      return t || "#" !== e.name[0] && (t = "default"), ta.test(t) ? {
        name: t.slice(1, -1),
        dynamic: !0
      } : {
        name: '"' + t + '"',
        dynamic: !1
      };
    }

    function ga(e) {
      var t = e.match(oa);

      if (t) {
        var n = {};
        return t.forEach(function (e) {
          n[e.slice(1)] = !0;
        }), n;
      }
    }

    function ma(e) {
      for (var t = {}, n = 0, i = e.length; n < i; n++) {
        t[e[n].name] = e[n].value;
      }

      return t;
    }

    var va = /^xmlns:NS\d+/,
        ya = /^NS\d+:/;

    function Ea(e) {
      return da(e.tag, e.attrsList.slice(), e.parent);
    }

    var Aa,
        ba,
        _a,
        Sa = [Er, Ar, {
      preTransformNode: function preTransformNode(e, t) {
        if ("input" === e.tag) {
          var n,
              i = e.attrsMap;
          if (!i["v-model"]) return;

          if ((i[":type"] || i["v-bind:type"]) && (n = ji(e, "type")), i.type || n || !i["v-bind"] || (n = "(" + i["v-bind"] + ").type"), n) {
            var o = Fi(e, "v-if", !0),
                r = o ? "&&(" + o + ")" : "",
                a = null != Fi(e, "v-else", !0),
                s = Fi(e, "v-else-if", !0),
                l = Ea(e);
            fa(l), Ri(l, "type", "checkbox"), ua(l, t), l.processed = !0, l["if"] = "(" + n + ")==='checkbox'" + r, pa(l, {
              exp: l["if"],
              block: l
            });
            var c = Ea(e);
            Fi(c, "v-for", !0), Ri(c, "type", "radio"), ua(c, t), pa(l, {
              exp: "(" + n + ")==='radio'" + r,
              block: c
            });
            var d = Ea(e);
            return Fi(d, "v-for", !0), Ri(d, ":type", n), ua(d, t), pa(l, {
              exp: o,
              block: d
            }), a ? l["else"] = !0 : s && (l.elseif = s), l;
          }
        }
      }
    }],
        wa = {
      expectHTML: !0,
      modules: Sa,
      directives: {
        model: function model(e, t, n) {
          var i = t.value,
              o = t.modifiers,
              r = e.tag,
              a = e.attrsMap.type;
          if (e.component) return Vi(e, i, o), !1;
          if ("select" === r) !function (e, t, n) {
            var i = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
            Bi(e, "change", i = i + " " + Gi(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0);
          }(e, i, o);else if ("input" === r && "checkbox" === a) !function (e, t, n) {
            var i = n && n.number,
                o = ji(e, "value") || "null",
                r = ji(e, "true-value") || "true",
                a = ji(e, "false-value") || "false";
            Li(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + o + ")>-1" + ("true" === r ? ":(" + t + ")" : ":_q(" + t + "," + r + ")")), Bi(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + r + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (i ? "_n(" + o + ")" : o) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Gi(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Gi(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Gi(t, "$$c") + "}", null, !0);
          }(e, i, o);else if ("input" === r && "radio" === a) !function (e, t, n) {
            var i = n && n.number,
                o = ji(e, "value") || "null";
            Li(e, "checked", "_q(" + t + "," + (o = i ? "_n(" + o + ")" : o) + ")"), Bi(e, "change", Gi(t, o), null, !0);
          }(e, i, o);else if ("input" === r || "textarea" === r) !function (e, t, n) {
            var i = e.attrsMap.type,
                o = n || {},
                r = o.lazy,
                a = o.number,
                s = o.trim,
                l = !r && "range" !== i,
                c = r ? "change" : "range" === i ? "__r" : "input",
                d = "$event.target.value";
            s && (d = "$event.target.value.trim()"), a && (d = "_n(" + d + ")");
            var u = Gi(t, d);
            l && (u = "if($event.target.composing)return;" + u), Li(e, "value", "(" + t + ")"), Bi(e, c, u, null, !0), (s || a) && Bi(e, "blur", "$forceUpdate()");
          }(e, i, o);else if (!F.isReservedTag(r)) return Vi(e, i, o), !1;
          return !0;
        },
        text: function text(e, t) {
          t.value && Li(e, "textContent", "_s(" + t.value + ")", t);
        },
        html: function html(e, t) {
          t.value && Li(e, "innerHTML", "_s(" + t.value + ")", t);
        }
      },
      isPreTag: function isPreTag(e) {
        return "pre" === e;
      },
      isUnaryTag: br,
      mustUseProp: Pn,
      canBeLeftOpenTag: _r,
      isReservedTag: Xn,
      getTagNamespace: Zn,
      staticKeys: (_a = Sa, _a.reduce(function (e, t) {
        return e.concat(t.staticKeys || []);
      }, []).join(","))
    },
        Ca = b(function (e) {
      return g("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""));
    });

    function Ia(e, t) {
      e && (Aa = Ca(t.staticKeys || ""), ba = t.isReservedTag || D, ka(e), Ta(e, !1));
    }

    function ka(e) {
      if (e["static"] = function (e) {
        return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e["if"] || e["for"] || m(e.tag) || !ba(e.tag) || function (e) {
          for (; e.parent;) {
            if ("template" !== (e = e.parent).tag) return !1;
            if (e["for"]) return !0;
          }

          return !1;
        }(e) || !Object.keys(e).every(Aa))));
      }(e), 1 === e.type) {
        if (!ba(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;

        for (var t = 0, n = e.children.length; t < n; t++) {
          var i = e.children[t];
          ka(i), i["static"] || (e["static"] = !1);
        }

        if (e.ifConditions) for (var o = 1, r = e.ifConditions.length; o < r; o++) {
          var a = e.ifConditions[o].block;
          ka(a), a["static"] || (e["static"] = !1);
        }
      }
    }

    function Ta(e, t) {
      if (1 === e.type) {
        if ((e["static"] || e.once) && (e.staticInFor = t), e["static"] && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);
        if (e.staticRoot = !1, e.children) for (var n = 0, i = e.children.length; n < i; n++) {
          Ta(e.children[n], t || !!e["for"]);
        }
        if (e.ifConditions) for (var o = 1, r = e.ifConditions.length; o < r; o++) {
          Ta(e.ifConditions[o].block, t);
        }
      }
    }

    var Na = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        xa = /\([^)]*?\);*$/,
        Ma = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        Da = {
      esc: 27,
      tab: 9,
      enter: 13,
      space: 32,
      up: 38,
      left: 37,
      right: 39,
      down: 40,
      "delete": [8, 46]
    },
        Oa = {
      esc: ["Esc", "Escape"],
      tab: "Tab",
      enter: "Enter",
      space: [" ", "Spacebar"],
      up: ["Up", "ArrowUp"],
      left: ["Left", "ArrowLeft"],
      right: ["Right", "ArrowRight"],
      down: ["Down", "ArrowDown"],
      "delete": ["Backspace", "Delete", "Del"]
    },
        La = function La(e) {
      return "if(" + e + ")return null;";
    },
        $a = {
      stop: "$event.stopPropagation();",
      prevent: "$event.preventDefault();",
      self: La("$event.target !== $event.currentTarget"),
      ctrl: La("!$event.ctrlKey"),
      shift: La("!$event.shiftKey"),
      alt: La("!$event.altKey"),
      meta: La("!$event.metaKey"),
      left: La("'button' in $event && $event.button !== 0"),
      middle: La("'button' in $event && $event.button !== 1"),
      right: La("'button' in $event && $event.button !== 2")
    };

    function Ra(e, t) {
      var n = t ? "nativeOn:" : "on:",
          i = "",
          o = "";

      for (var r in e) {
        var a = Wa(e[r]);
        e[r] && e[r].dynamic ? o += r + "," + a + "," : i += '"' + r + '":' + a + ",";
      }

      return i = "{" + i.slice(0, -1) + "}", o ? n + "_d(" + i + ",[" + o.slice(0, -1) + "])" : n + i;
    }

    function Wa(e) {
      if (!e) return "function(){}";
      if (Array.isArray(e)) return "[" + e.map(function (e) {
        return Wa(e);
      }).join(",") + "]";
      var t = Ma.test(e.value),
          n = Na.test(e.value),
          i = Ma.test(e.value.replace(xa, ""));

      if (e.modifiers) {
        var o = "",
            r = "",
            a = [];

        for (var s in e.modifiers) {
          if ($a[s]) r += $a[s], Da[s] && a.push(s);else if ("exact" === s) {
            var l = e.modifiers;
            r += La(["ctrl", "shift", "alt", "meta"].filter(function (e) {
              return !l[e];
            }).map(function (e) {
              return "$event." + e + "Key";
            }).join("||"));
          } else a.push(s);
        }

        return a.length && (o += function (e) {
          return "if(!$event.type.indexOf('key')&&" + e.map(Pa).join("&&") + ")return null;";
        }(a)), r && (o += r), "function($event){" + o + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : i ? "return " + e.value : e.value) + "}";
      }

      return t || n ? e.value : "function($event){" + (i ? "return " + e.value : e.value) + "}";
    }

    function Pa(e) {
      var t = parseInt(e, 10);
      if (t) return "$event.keyCode!==" + t;
      var n = Da[e],
          i = Oa[e];
      return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(i) + ")";
    }

    var Ba = {
      on: function on(e, t) {
        e.wrapListeners = function (e) {
          return "_g(" + e + "," + t.value + ")";
        };
      },
      bind: function bind(e, t) {
        e.wrapData = function (n) {
          return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")";
        };
      },
      cloak: M
    },
        ja = function ja(e) {
      this.options = e, this.warn = e.warn || Di, this.transforms = Oi(e.modules, "transformCode"), this.dataGenFns = Oi(e.modules, "genData"), this.directives = N(N({}, Ba), e.directives);
      var t = e.isReservedTag || D;
      this.maybeComponent = function (e) {
        return !!e.component || !t(e.tag);
      }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
    };

    function Fa(e, t) {
      var n = new ja(t);
      return {
        render: "with(this){return " + (e ? Ua(e, n) : '_c("div")') + "}",
        staticRenderFns: n.staticRenderFns
      };
    }

    function Ua(e, t) {
      if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Ha(e, t);
      if (e.once && !e.onceProcessed) return Va(e, t);
      if (e["for"] && !e.forProcessed) return za(e, t);
      if (e["if"] && !e.ifProcessed) return Ga(e, t);

      if ("template" !== e.tag || e.slotTarget || t.pre) {
        if ("slot" === e.tag) return function (e, t) {
          var n = e.slotName || '"default"',
              i = Ja(e, t),
              o = "_t(" + n + (i ? "," + i : ""),
              r = e.attrs || e.dynamicAttrs ? es((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
            return {
              name: S(e.name),
              value: e.value,
              dynamic: e.dynamic
            };
          })) : null,
              a = e.attrsMap["v-bind"];
          return !r && !a || i || (o += ",null"), r && (o += "," + r), a && (o += (r ? "" : ",null") + "," + a), o + ")";
        }(e, t);
        var n;
        if (e.component) n = function (e, t, n) {
          var i = t.inlineTemplate ? null : Ja(t, n, !0);
          return "_c(" + e + "," + Ya(t, n) + (i ? "," + i : "") + ")";
        }(e.component, e, t);else {
          var i;
          (!e.plain || e.pre && t.maybeComponent(e)) && (i = Ya(e, t));
          var o = e.inlineTemplate ? null : Ja(e, t, !0);
          n = "_c('" + e.tag + "'" + (i ? "," + i : "") + (o ? "," + o : "") + ")";
        }

        for (var r = 0; r < t.transforms.length; r++) {
          n = t.transforms[r](e, n);
        }

        return n;
      }

      return Ja(e, t) || "void 0";
    }

    function Ha(e, t) {
      e.staticProcessed = !0;
      var n = t.pre;
      return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Ua(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
    }

    function Va(e, t) {
      if (e.onceProcessed = !0, e["if"] && !e.ifProcessed) return Ga(e, t);

      if (e.staticInFor) {
        for (var n = "", i = e.parent; i;) {
          if (i["for"]) {
            n = i.key;
            break;
          }

          i = i.parent;
        }

        return n ? "_o(" + Ua(e, t) + "," + t.onceId++ + "," + n + ")" : Ua(e, t);
      }

      return Ha(e, t);
    }

    function Ga(e, t, n, i) {
      return e.ifProcessed = !0, qa(e.ifConditions.slice(), t, n, i);
    }

    function qa(e, t, n, i) {
      if (!e.length) return i || "_e()";
      var o = e.shift();
      return o.exp ? "(" + o.exp + ")?" + r(o.block) + ":" + qa(e, t, n, i) : "" + r(o.block);

      function r(e) {
        return n ? n(e, t) : e.once ? Va(e, t) : Ua(e, t);
      }
    }

    function za(e, t, n, i) {
      var o = e["for"],
          r = e.alias,
          a = e.iterator1 ? "," + e.iterator1 : "",
          s = e.iterator2 ? "," + e.iterator2 : "";
      return e.forProcessed = !0, (i || "_l") + "((" + o + "),function(" + r + a + s + "){return " + (n || Ua)(e, t) + "})";
    }

    function Ya(e, t) {
      var n = "{",
          i = function (e, t) {
        var n = e.directives;

        if (n) {
          var i,
              o,
              r,
              a,
              s = "directives:[",
              l = !1;

          for (i = 0, o = n.length; i < o; i++) {
            r = n[i], a = !0;
            var c = t.directives[r.name];
            c && (a = !!c(e, r, t.warn)), a && (l = !0, s += '{name:"' + r.name + '",rawName:"' + r.rawName + '"' + (r.value ? ",value:(" + r.value + "),expression:" + JSON.stringify(r.value) : "") + (r.arg ? ",arg:" + (r.isDynamicArg ? r.arg : '"' + r.arg + '"') : "") + (r.modifiers ? ",modifiers:" + JSON.stringify(r.modifiers) : "") + "},");
          }

          return l ? s.slice(0, -1) + "]" : void 0;
        }
      }(e, t);

      i && (n += i + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');

      for (var o = 0; o < t.dataGenFns.length; o++) {
        n += t.dataGenFns[o](e);
      }

      if (e.attrs && (n += "attrs:" + es(e.attrs) + ","), e.props && (n += "domProps:" + es(e.props) + ","), e.events && (n += Ra(e.events, !1) + ","), e.nativeEvents && (n += Ra(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
        var i = e["for"] || Object.keys(t).some(function (e) {
          var n = t[e];
          return n.slotTargetDynamic || n["if"] || n["for"] || Ka(n);
        }),
            o = !!e["if"];
        if (!i) for (var r = e.parent; r;) {
          if (r.slotScope && r.slotScope !== ca || r["for"]) {
            i = !0;
            break;
          }

          r["if"] && (o = !0), r = r.parent;
        }
        var a = Object.keys(t).map(function (e) {
          return Qa(t[e], n);
        }).join(",");
        return "scopedSlots:_u([" + a + "]" + (i ? ",null,true" : "") + (!i && o ? ",null,false," + function (e) {
          for (var t = 5381, n = e.length; n;) {
            t = 33 * t ^ e.charCodeAt(--n);
          }

          return t >>> 0;
        }(a) : "") + ")";
      }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
        var r = function (e, t) {
          var n = e.children[0];

          if (n && 1 === n.type) {
            var i = Fa(n, t.options);
            return "inlineTemplate:{render:function(){" + i.render + "},staticRenderFns:[" + i.staticRenderFns.map(function (e) {
              return "function(){" + e + "}";
            }).join(",") + "]}";
          }
        }(e, t);

        r && (n += r + ",");
      }

      return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + es(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
    }

    function Ka(e) {
      return 1 === e.type && ("slot" === e.tag || e.children.some(Ka));
    }

    function Qa(e, t) {
      var n = e.attrsMap["slot-scope"];
      if (e["if"] && !e.ifProcessed && !n) return Ga(e, t, Qa, "null");
      if (e["for"] && !e.forProcessed) return za(e, t, Qa);
      var i = e.slotScope === ca ? "" : String(e.slotScope),
          o = "function(" + i + "){return " + ("template" === e.tag ? e["if"] && n ? "(" + e["if"] + ")?" + (Ja(e, t) || "undefined") + ":undefined" : Ja(e, t) || "undefined" : Ua(e, t)) + "}",
          r = i ? "" : ",proxy:true";
      return "{key:" + (e.slotTarget || '"default"') + ",fn:" + o + r + "}";
    }

    function Ja(e, t, n, i, o) {
      var r = e.children;

      if (r.length) {
        var a = r[0];

        if (1 === r.length && a["for"] && "template" !== a.tag && "slot" !== a.tag) {
          var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
          return "" + (i || Ua)(a, t) + s;
        }

        var l = n ? function (e, t) {
          for (var n = 0, i = 0; i < e.length; i++) {
            var o = e[i];

            if (1 === o.type) {
              if (Xa(o) || o.ifConditions && o.ifConditions.some(function (e) {
                return Xa(e.block);
              })) {
                n = 2;
                break;
              }

              (t(o) || o.ifConditions && o.ifConditions.some(function (e) {
                return t(e.block);
              })) && (n = 1);
            }
          }

          return n;
        }(r, t.maybeComponent) : 0,
            c = o || Za;
        return "[" + r.map(function (e) {
          return c(e, t);
        }).join(",") + "]" + (l ? "," + l : "");
      }
    }

    function Xa(e) {
      return void 0 !== e["for"] || "template" === e.tag || "slot" === e.tag;
    }

    function Za(e, t) {
      return 1 === e.type ? Ua(e, t) : 3 === e.type && e.isComment ? function (e) {
        return "_e(" + JSON.stringify(e.text) + ")";
      }(e) : "_v(" + (2 === (n = e).type ? n.expression : ts(JSON.stringify(n.text))) + ")";
      var n;
    }

    function es(e) {
      for (var t = "", n = "", i = 0; i < e.length; i++) {
        var o = e[i],
            r = ts(o.value);
        o.dynamic ? n += o.name + "," + r + "," : t += '"' + o.name + '":' + r + ",";
      }

      return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t;
    }

    function ts(e) {
      return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }

    function ns(e, t) {
      try {
        return new Function(e);
      } catch (n) {
        return t.push({
          err: n,
          code: e
        }), M;
      }
    }

    function is(e) {
      var t = Object.create(null);
      return function (n, i, o) {
        (i = N({}, i)).warn, delete i.warn;
        var r = i.delimiters ? String(i.delimiters) + n : n;
        if (t[r]) return t[r];
        var a = e(n, i),
            s = {},
            l = [];
        return s.render = ns(a.render, l), s.staticRenderFns = a.staticRenderFns.map(function (e) {
          return ns(e, l);
        }), t[r] = s;
      };
    }

    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
    var os,
        rs,
        as = (os = function os(e, t) {
      var n = function (e, t) {
        Ur = t.warn || Di, zr = t.isPreTag || D, Yr = t.mustUseProp || D, Kr = t.getTagNamespace || D, t.isReservedTag, Vr = Oi(t.modules, "transformNode"), Gr = Oi(t.modules, "preTransformNode"), qr = Oi(t.modules, "postTransformNode"), Hr = t.delimiters;
        var n,
            i,
            o = [],
            r = !1 !== t.preserveWhitespace,
            a = t.whitespace,
            s = !1,
            l = !1;

        function c(e) {
          if (d(e), s || e.processed || (e = ua(e, t)), o.length || e === n || n["if"] && (e.elseif || e["else"]) && pa(n, {
            exp: e.elseif,
            block: e
          }), i && !e.forbidden) if (e.elseif || e["else"]) a = e, (c = function (e) {
            for (var t = e.length; t--;) {
              if (1 === e[t].type) return e[t];
              e.pop();
            }
          }(i.children)) && c["if"] && pa(c, {
            exp: a.elseif,
            block: a
          });else {
            if (e.slotScope) {
              var r = e.slotTarget || '"default"';
              (i.scopedSlots || (i.scopedSlots = {}))[r] = e;
            }

            i.children.push(e), e.parent = i;
          }
          var a, c;
          e.children = e.children.filter(function (e) {
            return !e.slotScope;
          }), d(e), e.pre && (s = !1), zr(e.tag) && (l = !1);

          for (var u = 0; u < qr.length; u++) {
            qr[u](e, t);
          }
        }

        function d(e) {
          if (!l) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) {
            e.children.pop();
          }
        }

        return function (e, t) {
          for (var n, i, o = [], r = t.expectHTML, a = t.isUnaryTag || D, s = t.canBeLeftOpenTag || D, l = 0; e;) {
            if (n = e, i && Lr(i)) {
              var c = 0,
                  d = i.toLowerCase(),
                  u = $r[d] || ($r[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
                  f = e.replace(u, function (e, n, i) {
                return c = i.length, Lr(d) || "noscript" === d || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), jr(d, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
              });
              l += e.length - f.length, e = f, I(d, l - c, l);
            } else {
              var p = e.indexOf("<");

              if (0 === p) {
                if (Dr.test(e)) {
                  var h = e.indexOf("--\x3e");

                  if (h >= 0) {
                    t.shouldKeepComment && t.comment(e.substring(4, h), l, l + h + 3), S(h + 3);
                    continue;
                  }
                }

                if (Or.test(e)) {
                  var g = e.indexOf("]>");

                  if (g >= 0) {
                    S(g + 2);
                    continue;
                  }
                }

                var m = e.match(Mr);

                if (m) {
                  S(m[0].length);
                  continue;
                }

                var v = e.match(xr);

                if (v) {
                  var y = l;
                  S(v[0].length), I(v[1], y, l);
                  continue;
                }

                var E = w();

                if (E) {
                  C(E), jr(E.tagName, e) && S(1);
                  continue;
                }
              }

              var A = void 0,
                  b = void 0,
                  _ = void 0;

              if (p >= 0) {
                for (b = e.slice(p); !(xr.test(b) || Tr.test(b) || Dr.test(b) || Or.test(b) || (_ = b.indexOf("<", 1)) < 0);) {
                  p += _, b = e.slice(p);
                }

                A = e.substring(0, p);
              }

              p < 0 && (A = e), A && S(A.length), t.chars && A && t.chars(A, l - A.length, l);
            }

            if (e === n) {
              t.chars && t.chars(e);
              break;
            }
          }

          function S(t) {
            l += t, e = e.substring(t);
          }

          function w() {
            var t = e.match(Tr);

            if (t) {
              var n,
                  i,
                  o = {
                tagName: t[1],
                attrs: [],
                start: l
              };

              for (S(t[0].length); !(n = e.match(Nr)) && (i = e.match(Cr) || e.match(wr));) {
                i.start = l, S(i[0].length), i.end = l, o.attrs.push(i);
              }

              if (n) return o.unarySlash = n[1], S(n[0].length), o.end = l, o;
            }
          }

          function C(e) {
            var n = e.tagName,
                l = e.unarySlash;
            r && ("p" === i && Sr(n) && I(i), s(n) && i === n && I(n));

            for (var c = a(n) || !!l, d = e.attrs.length, u = new Array(d), f = 0; f < d; f++) {
              var p = e.attrs[f],
                  h = p[3] || p[4] || p[5] || "",
                  g = "a" === n && "href" === p[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
              u[f] = {
                name: p[1],
                value: Fr(h, g)
              };
            }

            c || (o.push({
              tag: n,
              lowerCasedTag: n.toLowerCase(),
              attrs: u,
              start: e.start,
              end: e.end
            }), i = n), t.start && t.start(n, u, c, e.start, e.end);
          }

          function I(e, n, r) {
            var a, s;
            if (null == n && (n = l), null == r && (r = l), e) for (s = e.toLowerCase(), a = o.length - 1; a >= 0 && o[a].lowerCasedTag !== s; a--) {
              ;
            } else a = 0;

            if (a >= 0) {
              for (var c = o.length - 1; c >= a; c--) {
                t.end && t.end(o[c].tag, n, r);
              }

              o.length = a, i = a && o[a - 1].tag;
            } else "br" === s ? t.start && t.start(e, [], !0, n, r) : "p" === s && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r));
          }

          I();
        }(e, {
          warn: Ur,
          expectHTML: t.expectHTML,
          isUnaryTag: t.isUnaryTag,
          canBeLeftOpenTag: t.canBeLeftOpenTag,
          shouldDecodeNewlines: t.shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
          shouldKeepComment: t.comments,
          outputSourceRange: t.outputSourceRange,
          start: function start(e, r, a, d, u) {
            var f = i && i.ns || Kr(e);
            X && "svg" === f && (r = function (e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var i = e[n];
                va.test(i.name) || (i.name = i.name.replace(ya, ""), t.push(i));
              }

              return t;
            }(r));
            var p,
                h = da(e, r, i);
            f && (h.ns = f), "style" !== (p = h).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || ae() || (h.forbidden = !0);

            for (var g = 0; g < Gr.length; g++) {
              h = Gr[g](h, t) || h;
            }

            s || (function (e) {
              null != Fi(e, "v-pre") && (e.pre = !0);
            }(h), h.pre && (s = !0)), zr(h.tag) && (l = !0), s ? function (e) {
              var t = e.attrsList,
                  n = t.length;
              if (n) for (var i = e.attrs = new Array(n), o = 0; o < n; o++) {
                i[o] = {
                  name: t[o].name,
                  value: JSON.stringify(t[o].value)
                }, null != t[o].start && (i[o].start = t[o].start, i[o].end = t[o].end);
              } else e.pre || (e.plain = !0);
            }(h) : h.processed || (fa(h), function (e) {
              var t = Fi(e, "v-if");
              if (t) e["if"] = t, pa(e, {
                exp: t,
                block: e
              });else {
                null != Fi(e, "v-else") && (e["else"] = !0);
                var n = Fi(e, "v-else-if");
                n && (e.elseif = n);
              }
            }(h), function (e) {
              null != Fi(e, "v-once") && (e.once = !0);
            }(h)), n || (n = h), a ? c(h) : (i = h, o.push(h));
          },
          end: function end(e, t, n) {
            var r = o[o.length - 1];
            o.length -= 1, i = o[o.length - 1], c(r);
          },
          chars: function chars(e, t, n) {
            if (i && (!X || "textarea" !== i.tag || i.attrsMap.placeholder !== e)) {
              var o,
                  c,
                  d,
                  u = i.children;
              (e = l || e.trim() ? "script" === (o = i).tag || "style" === o.tag ? e : la(e) : u.length ? a ? "condense" === a && aa.test(e) ? "" : " " : r ? " " : "" : "") && (l || "condense" !== a || (e = e.replace(sa, " ")), !s && " " !== e && (c = function (e, t) {
                var n = t ? yr(t) : mr;

                if (n.test(e)) {
                  for (var i, o, r, a = [], s = [], l = n.lastIndex = 0; i = n.exec(e);) {
                    (o = i.index) > l && (s.push(r = e.slice(l, o)), a.push(JSON.stringify(r)));
                    var c = xi(i[1].trim());
                    a.push("_s(" + c + ")"), s.push({
                      "@binding": c
                    }), l = o + i[0].length;
                  }

                  return l < e.length && (s.push(r = e.slice(l)), a.push(JSON.stringify(r))), {
                    expression: a.join("+"),
                    tokens: s
                  };
                }
              }(e, Hr)) ? d = {
                type: 2,
                expression: c.expression,
                tokens: c.tokens,
                text: e
              } : " " === e && u.length && " " === u[u.length - 1].text || (d = {
                type: 3,
                text: e
              }), d && u.push(d));
            }
          },
          comment: function comment(e, t, n) {
            if (i) {
              var o = {
                type: 3,
                text: e,
                isComment: !0
              };
              i.children.push(o);
            }
          }
        }), n;
      }(e.trim(), t);

      !1 !== t.optimize && Ia(n, t);
      var i = Fa(n, t);
      return {
        ast: n,
        render: i.render,
        staticRenderFns: i.staticRenderFns
      };
    }, function (e) {
      function t(t, n) {
        var i = Object.create(e),
            o = [],
            r = [];
        if (n) for (var a in n.modules && (i.modules = (e.modules || []).concat(n.modules)), n.directives && (i.directives = N(Object.create(e.directives || null), n.directives)), n) {
          "modules" !== a && "directives" !== a && (i[a] = n[a]);
        }

        i.warn = function (e, t, n) {
          (n ? r : o).push(e);
        };

        var s = os(t.trim(), i);
        return s.errors = o, s.tips = r, s;
      }

      return {
        compile: t,
        compileToFunctions: is(t)
      };
    })(wa),
        ss = (as.compile, as.compileToFunctions);

    function ls(e) {
      return (rs = rs || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', rs.innerHTML.indexOf("&#10;") > 0;
    }

    var cs = !!Y && ls(!1),
        ds = !!Y && ls(!0),
        us = b(function (e) {
      var t = ni(e);
      return t && t.innerHTML;
    }),
        fs = Nn.prototype.$mount;
    Nn.prototype.$mount = function (e, t) {
      if ((e = e && ni(e)) === document.body || e === document.documentElement) return this;
      var n = this.$options;

      if (!n.render) {
        var i = n.template;
        if (i) {
          if ("string" == typeof i) "#" === i.charAt(0) && (i = us(i));else {
            if (!i.nodeType) return this;
            i = i.innerHTML;
          }
        } else e && (i = function (e) {
          if (e.outerHTML) return e.outerHTML;
          var t = document.createElement("div");
          return t.appendChild(e.cloneNode(!0)), t.innerHTML;
        }(e));

        if (i) {
          var o = ss(i, {
            outputSourceRange: !1,
            shouldDecodeNewlines: cs,
            shouldDecodeNewlinesForHref: ds,
            delimiters: n.delimiters,
            comments: n.comments
          }, this),
              r = o.render,
              a = o.staticRenderFns;
          n.render = r, n.staticRenderFns = a;
        }
      }

      return fs.call(this, e, t);
    }, Nn.compile = ss;
    var ps = Nn;

    var hs = function hs() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("div", {
        "class": [e.selectedNodeId.id === e.node.id ? "selectedNode" : "unselectedNode"]
      }, [n("div", {
        staticClass: "dialogSummaryRow",
        attrs: {
          onclick: "L4W_mapper.MapperPage.loadDialogEditor(" + e.node.id + ")"
        }
      }, [n("a", {
        attrs: {
          name: e.node.id
        }
      }), e._v("\n        " + e._s(e._f("str_limit")(e.node.message)) + " "), n("div", {
        staticClass: "elementId"
      }, [e._v("N" + e._s(e.node.id))])]), e._v(" "), n("ul", e._l(e.node.edges, function (t) {
        return n("li", {
          key: t.id
        }, [n("div", {
          staticClass: "dialogSummaryRow",
          attrs: {
            onclick: "L4W_mapper.MapperPage.loadDialogEditor(" + e.node.id + ")"
          }
        }, [n("div", {
          staticClass: "edge"
        }, [e._v(e._s(e._f("str_limit")(t.message)))]), e._v(" "), n("div", {
          staticClass: "elementId"
        }, [e._v("E" + e._s(t.id))])]), e._v(" "), void 0 !== t.node ? n("div", {
          staticClass: "dialogSummarySubnode"
        }, [t.nodeReferenced ? n("div", [n("div", {
          staticClass: "dialogSummaryRow unselectedNode",
          attrs: {
            onclick: "L4W_mapper.MapperPage.loadDialogEditor(" + t.node.id + ")"
          }
        }, [e._v("\n                        " + e._s(e._f("str_limit")(t.node.message)) + " "), n("div", {
          staticClass: "elementId"
        }, [n("a", {
          attrs: {
            href: "#" + t.node.id
          }
        }, [e._v("(N" + e._s(t.node.id) + ")")])])]), e._v(" "), n("div", {
          staticClass: "jumpElement"
        })]) : n("div", [n("dialog-summary", {
          attrs: {
            node: t.node,
            "selected-node-id": e.selectedNodeId
          }
        })], 1)]) : e._e()]);
      }), 0), e._v(" "), n("div", {
        staticClass: "endElement"
      })]);
    };

    hs._withStripped = !0;
    var gs = ps.extend({
      name: "dialog-summary",
      props: {
        node: {
          type: Object,
          required: !0
        },
        selectedNodeId: {
          type: Object,
          required: !0
        }
      }
    });
    ps.filter("str_limit", function (e, t) {
      return void 0 === e ? "" : (void 0 === t && (t = 45), (e = e.toString()).length <= t ? e : e.substr(0, t) + "...");
    });
    var ms = gs;

    function vs(e, t, n, i, o, r, a, s) {
      var l,
          c = "function" == typeof e ? e.options : e;
      if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), i && (c.functional = !0), r && (c._scopeId = "data-v-" + r), a ? (l = function l(e) {
        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a);
      }, c._ssrRegister = l) : o && (l = s ? function () {
        o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
      } : o), l) if (c.functional) {
        c._injectStyles = l;
        var d = c.render;

        c.render = function (e, t) {
          return l.call(t), d(e, t);
        };
      } else {
        var u = c.beforeCreate;
        c.beforeCreate = u ? [].concat(u, l) : [l];
      }
      return {
        exports: e,
        options: c
      };
    }

    n(657);
    var ys = vs(ms, hs, [], !1, null, "06f2eb40", null);
    ys.options.__file = "src/client/components/DialogSummary.vue";
    var Es = ys.exports;

    var As = function As() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("div", [n("div", [n("div", {
        staticClass: "dialogNodeDetails"
      }, [n("div", {
        staticClass: "elementId"
      }, [e._v("N" + e._s(e.node.id))]), e._v(" "), n("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.node.message,
          expression: "node.message"
        }],
        ref: "dialogNodeMessage",
        staticClass: "message",
        attrs: {
          type: "text",
          placeholder: "<message>"
        },
        domProps: {
          value: e.node.message
        },
        on: {
          input: function input(t) {
            t.target.composing || e.$set(e.node, "message", t.target.value);
          }
        }
      }), n("br"), e._v(" "), e._v("\n                Face: "), n("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.node.face,
          expression: "node.face"
        }],
        ref: "nodes",
        on: {
          change: [function (t) {
            var n = Array.prototype.filter.call(t.target.options, function (e) {
              return e.selected;
            }).map(function (e) {
              return "_value" in e ? e._value : e.value;
            });
            e.$set(e.node, "face", t.target.multiple ? n : n[0]);
          }, function (t) {
            return e.onFaceChange(t, e.node);
          }]
        }
      }, [n("option", {
        attrs: {
          selected: "",
          value: ""
        }
      }, [e._v(" ")]), e._v(" "), e._l(e.faces, function (t) {
        return n("option", {
          key: t,
          domProps: {
            value: t
          }
        }, [e._v("\n                        " + e._s(t) + "\n                    ")]);
      })], 2), e._v("\n                Name: "), n("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.node.name,
          expression: "node.name"
        }],
        domProps: {
          value: e.node.name
        },
        on: {
          input: function input(t) {
            t.target.composing || e.$set(e.node, "name", t.target.value);
          }
        }
      }), n("br"), e._v("\n                Autoclose in "), n("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.node.closingTimeout,
          expression: "node.closingTimeout"
        }],
        ref: "nodeClosingTimeout",
        attrs: {
          type: "number",
          min: "0",
          max: "10000",
          step: "1"
        },
        domProps: {
          value: e.node.closingTimeout
        },
        on: {
          input: function input(t) {
            t.target.composing || e.$set(e.node, "closingTimeout", t.target.value);
          }
        }
      }), e._v(" msec"), n("br"), e._v(" "), n("br"), e._v(" "), n("div", {
        staticStyle: {
          "float": "none"
        }
      }), e._v(" "), n("button", {
        on: {
          click: function click(t) {
            return e.addEdge();
          }
        }
      }, [e._v("Create new edge")]), e._v(" "), n("br")]), e._v(" "), e._l(e.node.edges, function (t) {
        return n("div", {
          key: t.id,
          staticClass: "dialogEdgeDetails"
        }, [n("div", {
          staticClass: "elementId"
        }, [e._v("E" + e._s(t.id))]), e._v(" "), n("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.message,
            expression: "edge.message"
          }],
          ref: "dialogEdgeMessage",
          refInFor: !0,
          staticClass: "message",
          attrs: {
            type: "text",
            placeholder: "<message>"
          },
          domProps: {
            value: t.message
          },
          on: {
            input: function input(n) {
              n.target.composing || e.$set(t, "message", n.target.value);
            }
          }
        }), n("br"), e._v("\n\n                Condition "), n("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.condition,
            expression: "edge.condition"
          }],
          ref: "edgeCondition",
          refInFor: !0,
          on: {
            change: function change(n) {
              var i = Array.prototype.filter.call(n.target.options, function (e) {
                return e.selected;
              }).map(function (e) {
                return "_value" in e ? e._value : e.value;
              });
              e.$set(t, "condition", n.target.multiple ? i : i[0]);
            }
          }
        }, e._l(e.edgeConditions, function (t) {
          return n("option", {
            key: t,
            domProps: {
              value: t
            }
          }, [e._v("\n                        " + e._s(t) + "\n                    ")]);
        }), 0), n("br"), e._v(" "), t.condition ? n("div", [e._v("Cond. param: "), n("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.conditionParams,
            expression: "edge.conditionParams"
          }],
          staticClass: "edgeConditionParameters",
          attrs: {
            type: "text"
          },
          domProps: {
            value: t.conditionParams
          },
          on: {
            input: function input(n) {
              n.target.composing || e.$set(t, "conditionParams", n.target.value);
            }
          }
        }), n("br")]) : e._e(), e._v("\n\n                Script "), n("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.script,
            expression: "edge.script"
          }],
          ref: "edgeScript",
          refInFor: !0,
          on: {
            change: [function (n) {
              var i = Array.prototype.filter.call(n.target.options, function (e) {
                return e.selected;
              }).map(function (e) {
                return "_value" in e ? e._value : e.value;
              });
              e.$set(t, "script", n.target.multiple ? i : i[0]);
            }, function (n) {
              return e.onScriptChange(n, t);
            }]
          }
        }, e._l(e.edgeScripts, function (t) {
          return n("option", {
            key: t[0],
            domProps: {
              value: t[0]
            }
          }, [e._v("\n                        " + e._s(t[0] + " (" + t[1] + ")") + "\n                    ")]);
        }), 0), n("br"), e._v(" "), void 0 !== t.script ? n("div", [e._v("\n                    Action "), n("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.action,
            expression: "edge.action"
          }],
          ref: "edgeAction",
          refInFor: !0,
          on: {
            change: function change(n) {
              var i = Array.prototype.filter.call(n.target.options, function (e) {
                return e.selected;
              }).map(function (e) {
                return "_value" in e ? e._value : e.value;
              });
              e.$set(t, "action", n.target.multiple ? i : i[0]);
            }
          }
        }, e._l(t.actions, function (t) {
          return n("option", {
            key: t,
            domProps: {
              value: t
            }
          }, [e._v("\n                            " + e._s(t) + "\n                        ")]);
        }), 0)]) : e._e(), e._v(" "), n("div", {
          staticStyle: {
            "float": "none"
          }
        }), e._v(" "), n("button", {
          staticStyle: {
            color: "red",
            "float": "right"
          },
          attrs: {
            title: "Remove this edge (if disconnected, will be deleted when saving)"
          },
          on: {
            click: function click(n) {
              return e.deleteEdge(t);
            }
          }
        }, [e._v("Remove")]), e._v(" "), n("br"), e._v(" "), n("br"), e._v("\n                Connect to "), n("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.nodeId,
            expression: "edge.nodeId"
          }],
          ref: "nodes",
          refInFor: !0,
          on: {
            change: [function (n) {
              var i = Array.prototype.filter.call(n.target.options, function (e) {
                return e.selected;
              }).map(function (e) {
                return "_value" in e ? e._value : e.value;
              });
              e.$set(t, "nodeId", n.target.multiple ? i : i[0]);
            }, function (n) {
              return e.onNodeChange(n, t);
            }]
          }
        }, [n("option", {
          attrs: {
            selected: "",
            disabled: "",
            value: ""
          }
        }, [e._v(" ")]), e._v(" "), e._l(e.nodeIds, function (t) {
          return n("option", {
            key: t,
            domProps: {
              value: t
            }
          }, [e._v("\n                        " + e._s(t) + "\n                    ")]);
        })], 2), e._v(" "), void 0 === t.nodeId ? n("span", [e._v(" or "), n("button", {
          on: {
            click: function click(n) {
              return e.addNode(t);
            }
          }
        }, [e._v("Create new node")])]) : n("span", [e._v(" or "), n("button", {
          staticStyle: {
            color: "red"
          },
          attrs: {
            title: "Remove this node (if disconnected, will be deleted when saving)"
          },
          on: {
            click: function click(n) {
              return e.deleteNode(t);
            }
          }
        }, [e._v("Remove node")])])]);
      })], 2)]);
    };

    As._withStripped = !0;
    var bs = "state";

    var _s, Ss, ws, Cs;

    !function (e) {
      e[e.OK = 200] = "OK", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED";
    }(_s || (_s = {})), function (e) {
      e.LOCATION = "Location";
    }(Ss || (Ss = {})), function (e) {
      e.AUTOTILE = "autotile", e.CHAR = "charset", e.FACE = "faceset", e.FAVICON = "favicon", e.SKIN = "skin", e.TILE = "tile", e.PICTURE = "picture", e.POINTER = "pointer", e.AUTOTILESET = "autotileset", e.MAP = "map", e.TREE = "tree", e.STRING = "string", e.TILESET = "tileset", e.DIALOG = "dialog", e.GENERIC_MESSAGE = "generic-message", e.CONFIGURATION = "configuration", e.SAVE = "save";
    }(ws || (ws = {})), function (e) {
      function t(e, t) {
        var n = e.memory.state,
            i = Number.parseInt(n);
        return !Number.isNaN(i) && i === t;
      }

      e.always = function (e) {
        return !0;
      }, e.isStateVar0 = function (e) {
        return t(e, 0);
      }, e.isStateVar1 = function (e) {
        return t(e, 1);
      }, e.isStateVar2 = function (e) {
        return t(e, 2);
      }, e.isStateVar3 = function (e) {
        return t(e, 3);
      }, e.isStateVar4 = function (e) {
        return t(e, 4);
      }, e.isStateVar5 = function (e) {
        return t(e, 5);
      }, e.isStateVar6 = function (e) {
        return t(e, 6);
      }, e.isStateVar7 = function (e) {
        return t(e, 7);
      }, e.isStateVar8 = function (e) {
        return t(e, 8);
      }, e.isStateVar9 = function (e) {
        return t(e, 9);
      };
    }(Cs || (Cs = {}));

    var Is = function Is() {
      _classCallCheck(this, Is);

      this.showGrid = !1, this.showEditorGrid = !1, this.showFPS = !1, this.showCellNumbers = !1, this.showFocus = !1, this.enableSelection = !1, this.showBlocks = !1, this.showOnTops = !1, this.enableAntialiasing = !0, this.fps = 0;
    };

    function ks() {}

    var Ts = function Ts(e, t, n, i, o) {};

    var Ns;
    !function (e) {
      var t = !1,
          n = [];

      var i = function i() {
        _classCallCheck(this, i);
      };

      i.UP = "ArrowUp", i.DOWN = "ArrowDown", i.LEFT = "ArrowLeft", i.RIGHT = "ArrowRight", i.CTRL = "Control", i.ALT = "Alt", i.ENTER = "Enter", i.SPACEBAR = " ", i.CAPS = "CapsLock", i.SHIFT = "Shift", i.W = "w", i.A = "a", i.D = "d", i.S = "s", i.P = "p", i.E = "e", i.F1 = "F1", i.F2 = "F2", i.F3 = "F3", i.F4 = "F4", i.F5 = "F5", i.F6 = "F6", i.N_0 = "0", i.N_1 = "1", i.N_2 = "2", i.N_3 = "3", i.N_4 = "4", i.N_5 = "5", i.N_6 = "6", i.N_7 = "7", i.N_8 = "8", i.N_9 = "9", e.Keys = i;

      var o = function o() {
        _classCallCheck(this, o);
      };

      function r() {
        var _iterator = _createForOfIteratorHelper(n),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _e2 = _step.value;

            try {
              _e2();
            } catch (e) {
              console.error("Error executing onAction callback:"), console.error(e);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        n = [];
      }

      o.LEFT = 1, o.RIGHT = 2, o.MIDDLE = 4, e.MouseButtons = o, e.init = function (e, n, o, a, s, l, c, d, u, f, p, h, g, m, v) {
        var y,
            E = !1;

        o[i.P] = function (e) {
          E ? (p(), E = !1) : (f(), E = !0);
        };

        var A = !1;

        function b(e) {
          var t = {
            x: e.clientX,
            y: e.clientY
          };
          return n.mapPositionToGrid(t);
        }

        e.addEventListener("click", function (e) {
          var n = b(e);
          t || s(n.i, n.j, n.x, n.y), r();
        }), e.addEventListener("mousemove", function (e) {
          var t = b(e);
          A ? d(t.i, t.j, e.buttons) : u(t.i, t.j);
        }), e.addEventListener("mousedown", function (e) {
          A = !0;
          var t = b(e);
          l(t.i, t.j, t.x, t.y, e.buttons), r();
        }), e.addEventListener("mouseup", function (e) {
          A = !1;
          var t = b(e);
          c(t.i, t.j, e.buttons);
        }), e.addEventListener("mouseout", function (e) {
          A ? d(void 0, void 0, e.buttons) : u(void 0, void 0);
        }), e.addEventListener("contextmenu", function (e) {
          e.preventDefault();
          var t = b(e);
          g(t.i, t.j);
        }), e.addEventListener("dblclick", function (e) {
          var t = b(e);
          m(t.i, t.j);
        }), e.addEventListener("wheel", function (e) {
          var t = b(e);
          v(t.i, t.j);
        }, {
          passive: !0
        }), e.addEventListener("touchstart", function (e) {
          var t = b(e);
          l(t.i, t.j, t.x, t.y), r();
        }, {
          passive: !0
        }), e.addEventListener("touchend", function (e) {
          var t = b(e);
          d(void 0, void 0), c(t.i, t.j);
        }, {
          passive: !0
        }), e.addEventListener("touchcancel", function (e) {
          var t = b(e);
          d(void 0, void 0), c(t.i, t.j);
        }, {
          passive: !0
        }), e.addEventListener("touchmove", function (e) {
          var t = b(e);
          d(t.i, t.j);
        }, {
          passive: !0
        }), document.addEventListener("keydown", function (e) {
          var t = o[e.key];
          void 0 !== t && t(e), y = e.key;
        }), document.addEventListener("keyup", function (e) {
          e.key === y && a();
        }), document.addEventListener("visibilitychange", function () {
          document.hidden ? (f(), E = !0) : (p(), E = !1);
        }), window.addEventListener("resize", function (e) {
          h();
        }), document.addEventListener("orientationchange", function () {
          h();
        });
      }, e.escapeText = function (e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      }, e.addActionCallback = function (e) {
        n.push(e);
      }, e.executeActionCallback = r, e.disableActionEvents = function () {
        t = !0;
      }, e.enableActionEvents = function () {
        t = !1;
      };
    }(Ns || (Ns = {}));
    var xs = [];

    function Ms(e, t) {
      var n;

      switch (e) {
        case 0:
          n = Ns.Keys.N_0;
          break;

        case 1:
          n = Ns.Keys.N_1;
          break;

        case 2:
          n = Ns.Keys.N_2;
          break;

        case 3:
          n = Ns.Keys.N_3;
          break;

        case 4:
          n = Ns.Keys.N_4;
          break;

        case 5:
          n = Ns.Keys.N_5;
          break;

        case 6:
          n = Ns.Keys.N_6;
          break;

        case 7:
          n = Ns.Keys.N_7;
          break;

        case 8:
          n = Ns.Keys.N_8;
          break;

        case 9:
          n = Ns.Keys.N_9;
          break;

        default:
          return void console.error("Unexpected numericKey: " + e);
      }

      var i = function i(e) {
        e.key === n && (t(e), function () {
          var _iterator2 = _createForOfIteratorHelper(xs),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _e3 = _step2.value;
              document.removeEventListener("keydown", _e3);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          xs = [];
        }());
      };

      xs.push(i), document.addEventListener("keydown", i);
    }

    var Ds = function Ds() {
      _classCallCheck(this, Ds);
    };

    Ds.NONE = 0, Ds.UP = Math.pow(2, 0), Ds.DOWN = Math.pow(2, 1), Ds.LEFT = Math.pow(2, 2), Ds.RIGHT = Math.pow(2, 3), Ds.ALL = Ds.UP + Ds.DOWN + Ds.LEFT + Ds.RIGHT;

    var Os = function Os() {
      _classCallCheck(this, Os);
    };

    Os.NONE = 0, Os.N = Math.pow(2, 0), Os.S = Math.pow(2, 1), Os.W = Math.pow(2, 2), Os.E = Math.pow(2, 3), Os.NE = Math.pow(2, 4), Os.SE = Math.pow(2, 5), Os.SW = Math.pow(2, 6), Os.NW = Math.pow(2, 7), Os.ALL = Math.pow(2, 8) - 1;
    var Ls = [Os.N, Os.NE, Os.E, Os.SE, Os.S, Os.SW, Os.W, Os.NW];
    var $s, Rs, Ws, Ps;
    !function (e) {
      e.IT = "it", e.EN = "en";
    }($s || ($s = {})), function (e) {
      e[e.BASIC = 0] = "BASIC", e[e.D_STAR_LITE = 1] = "D_STAR_LITE";
    }(Rs || (Rs = {})), function (e) {
      function t(e) {
        return null == e || void 0 === e || ("string" == typeof e ? "" === e : "object" == _typeof(e) && "size" in e ? 0 === e.size : e.constructor === Array || e.constructor === String ? 0 === e.length : e.constructor === Object && 0 === Object.keys(e).length);
      }

      e.isEmpty = t, e.unitTestIsEmpty = function () {
        var e = new Map();
        console.assert(t(e), "empty ES6 map"), e.set("a", "a"), console.assert(!t(e), "not empty ES6 map"), e["delete"]("a"), console.assert(t(e), "empty ES6 map (deleted key)"), e = [], console.assert(t(e), "empty array"), e[0] = 1, console.assert(!t(e), "not empty array"), e = new Array(), console.assert(t(e), "empty Array"), e = e.push("1"), console.assert(!t(e), "not empty Array"), e = "", console.assert(t(e), "empty string"), e = "a", console.assert(!t(e), "not empty string"), e = new Object(), console.assert(t(e), "empty Object"), e.a = 1, console.assert(!t(e), "not empty Object"), delete e.a, console.assert(t(e), "empty Object (deleted property)"), e = {}, console.assert(t(e), "empty {}"), e.a = 1, console.assert(!t(e), "not empty {}"), delete e.a, console.assert(t(e), "empty {} (deleted property)"), console.assert(!t(!0), "not empty boolean (true)"), console.assert(!t(!1), "not empty boolean (false)"), console.assert(!t(0), "not empty number"), console.assert(!t(0), "not empty float");
      }, e.mergeMaps = function (e, t) {
        var n = new Map();

        function i(e, t, i) {
          n.set(t, e);
        }

        return t.forEach(i), e.forEach(i), n;
      }, e.isNumeric = function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      }, e.convertStringToEnum = function (e, t) {
        return e[Object.keys(e).filter(function (n) {
          return e[n] === t;
        })[0]];
      };
      var n = "abcdefghijklmnopqrstuvwxyz0123456789";
      e.getRandomString = function (e) {
        return void 0 === e && (e = 8), _toConsumableArray(Array(e)).map(function (e) {
          return n[~~(Math.random() * n.length)];
        }).join("");
      }, e.now = function () {
        return new Date().getTime();
      };
    }(Ws || (Ws = {})), function (e) {
      function t(e, t) {
        return e.i + e.j * t;
      }

      function n(e, t) {
        var n = {
          i: e.i,
          j: e.j
        };

        switch (t) {
          case 0:
            n.j -= 1;
            break;

          case 2:
            n.j += 1;
            break;

          case 3:
            n.i -= 1;
            break;

          case 1:
            n.i += 1;
            break;

          case 4:
            break;

          default:
            console.error("Unexpected case: " + t);
        }

        return n;
      }

      function i(e, t) {
        return (e & t) === t && t !== Ds.NONE;
      }

      function o(e, t) {
        var n = Ds.NONE;

        switch (t) {
          case 0:
            n = Ds.UP;
            break;

          case 2:
            n = Ds.DOWN;
            break;

          case 3:
            n = Ds.LEFT;
            break;

          case 1:
            n = Ds.RIGHT;
        }

        return i(e, n);
      }

      function r(e, t, n, i) {
        var o = Ds.NONE;
        return n && void 0 !== e.blocks && t < e.blocks.length && (o |= e.blocks[t]), i && void 0 !== e.dynamicBlocks && t < e.dynamicBlocks.length && (o |= e.dynamicBlocks[t]), o;
      }

      function a(e) {
        switch (e) {
          case 0:
            return 2;

          case 2:
            return 0;

          case 3:
            return 1;

          case 1:
            return 3;

          default:
            return 4;
        }
      }

      function s(e) {
        switch (e) {
          case 0:
            return "˄ up";

          case 2:
            return "˅ down";

          case 3:
            return "˂ left";

          case 1:
            return "˃ right";

          default:
            return "  none";
        }
      }

      e.mergeRectangles = function (e, t) {
        if (void 0 === e) return t;
        if (void 0 === t) return e;
        var n, i, o, r;
        return n = e.x < t.x ? e.x : t.x, i = e.y < t.y ? e.y : t.y, r = e.x + e.w > t.x + t.w ? e.x + e.w - n : t.x + t.w - n, o = e.y + e.h > t.y + t.h ? e.y + e.h - i : t.y + t.h - i, {
          x: n,
          y: i,
          w: r,
          h: o
        };
      }, e.resetSelect = function (e) {
        for (var _t2 = e.length - 1; _t2 >= 0; _t2--) {
          e.remove(_t2);
        }
      }, e.gidToCell = function (e, t) {
        return {
          i: e % t,
          j: Math.floor(e / t)
        };
      }, e.cellToGid = t, e.getDirectionTarget = n, e.isBlockDirectionBlocked = i, e.isDirectionEnumBlocked = o, e.isMovementBlocked = function (i, r, s, l) {
        var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
        var d;
        d = t({
          i: r,
          j: s
        }, i.width);
        var u,
            f = e.getMapStaticBlock(i, d),
            p = t(n({
          i: r,
          j: s
        }, l), i.width);
        return u = c ? e.getMapStaticBlock(i, p) : e.getMapBlocks(i, p), o(f, l) || o(u, a(l));
      }, e.getBlock = function (e, t, n, i) {
        var o = 0;
        return o |= e ? Ds.UP : 0, o |= t ? Ds.DOWN : 0, o |= n ? Ds.LEFT : 0, o |= i ? Ds.RIGHT : 0, o;
      }, e.getMapBlocks = function (e, t) {
        return r(e, t, !0, !0);
      }, e.getMapStaticBlock = function (e, t) {
        return r(e, t, !0, !1);
      }, e.getMapDynamicBlock = function (e, t) {
        return r(e, t, !1, !0);
      }, e.isDirectionsOpposed = function (e, t) {
        return a(e) === t;
      }, e.getOpposedDirections = a, e.getNextAbsoluteDirection = function (e, t) {
        if (0 === t || 4 === e) return e;
        var n = [0, 1, 2, 3],
            i = 0;

        for (var _i2 = 0, _n3 = n; _i2 < _n3.length; _i2++) {
          var _t3 = _n3[_i2];
          if (e === _t3) break;
          i++;
        }

        switch (t) {
          case 3:
            i--;
            break;

          case 1:
            i++;
            break;

          case 2:
            i += 2;
        }

        return i < 0 ? i = n.length - 1 : i >= n.length && (i -= n.length), n[i];
      }, e.getDirection = function (e, t) {
        var n,
            i = e.i - t.i,
            o = e.j - t.j;
        return n = Math.abs(i) > Math.abs(o) ? i > 0 ? 1 : 3 : o > 0 ? 2 : o < 0 ? 0 : 4, n;
      }, e.moveToDirection = function (e, t) {
        var n = {
          i: e.i,
          j: e.j
        };

        switch (t) {
          case 0:
            n.j -= 1;
            break;

          case 2:
            n.j += 1;
            break;

          case 3:
            n.i -= 1;
            break;

          case 1:
            n.i += 1;
        }

        return n;
      }, e.getCellDistance = function (e, t) {
        return Math.abs(e.i - t.i) + Math.abs(e.j - t.j);
      }, e.getPointDistance = function (e, t) {
        return Math.abs(e.x - t.x) + Math.abs(e.y - t.y);
      }, e.getRandomInteger = function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
      }, e.normalizeZIndex = function (e) {
        return !Ws.isEmpty(e) && !Number.isNaN(e) && e >= 0 && e <= 4 ? e : 0;
      }, e.getDirectionName = s, e.getBlockName = function (e) {
        var t = "free";
        return i(e, Ds.UP) && (t = s(0)), i(e, Ds.DOWN) && (t += s(2)), i(e, Ds.LEFT) && (t += s(3)), i(e, Ds.RIGHT) && (t += s(1)), t;
      }, e.getSelectionAreaName = function (e) {
        switch (e) {
          case 0:
            return "⬒ up";

          case 1:
            return "⬓ down";

          case 2:
            return "◧ left";

          case 3:
            return "◨ right";

          case 4:
            return "▣ center";

          default:
            return "  none";
        }
      }, e.getTargetGID = function (e, t, n) {
        switch (t) {
          case Os.W:
          case Os.SW:
          case Os.NW:
            if (e % n.w == 0) return;
            break;

          case Os.E:
          case Os.NE:
          case Os.SE:
            if (e % n.w == n.w - 1) return;
        }

        var i = e;

        switch (t) {
          case Os.N:
            i -= n.w;
            break;

          case Os.S:
            i += n.w;
            break;

          case Os.W:
            i -= 1;
            break;

          case Os.E:
            i += 1;
            break;

          case Os.NE:
            i -= n.w - 1;
            break;

          case Os.SE:
            i += n.w + 1;
            break;

          case Os.SW:
            i += n.w - 1;
            break;

          case Os.NW:
            i -= n.w + 1;
            break;

          default:
            console.error("Unexpected case: " + t);
        }

        return i >= 0 && i < n.w * n.h ? i : void 0;
      };
    }(Ps || (Ps = {}));
    var Bs = {
      maps: {
        start: {
          map: "0",
          i: 2,
          j: 4
        }
      },
      hero: {
        name: "Fart",
        charaset: "fart.png"
      },
      ui: {
        lang: $s.EN,
        skin: "ld3-webskin1.png",
        enableCLI: !0
      },
      services: {
        facebook: {
          url: "https://graph.facebook.com",
          applicationId: "1885551381575204"
        },
        google: {
          oauth: {
            url: "https://www.googleapis.com",
            applicationId: "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com"
          },
          recaptcha: {
            url: "www.google.com"
          }
        },
        github: {
          url: "api.github.com"
        }
      }
    };
    var js, Fs, Us, Hs, Vs, Gs;
    !function (e) {
      function t() {
        return {
          id: Ws.getRandomString(),
          height: 20,
          width: 25,
          layers: [{
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            type: "tilelayer",
            x: 0,
            y: 0
          }, {
            type: "tilelayer",
            x: 0,
            y: 0
          }, {
            type: "tilelayer",
            x: 0,
            y: 0
          }, {
            type: "tilelayer",
            x: 0,
            y: 0
          }],
          tileset: {
            image: "002-Woods01.png",
            blocks: [],
            onTop: [],
            maxGID: 199
          },
          events: []
        };
      }

      function n() {
        return {
          lang: Bs.ui.lang,
          skin: Bs.ui.skin,
          flagAntialiasing: !1,
          flagDouble: !1,
          flagNatural: !1
        };
      }

      function i() {
        return {
          id: -1,
          name: "NPC",
          i: 0,
          j: 0,
          states: [{
            direction: 2,
            condition: "always",
            trigger: 0
          }],
          memory: {},
          script: "",
          currentState: 0
        };
      }

      function o() {
        var e = {
          id: -1,
          name: "NPC",
          i: 0,
          j: 0,
          states: [{
            direction: 2,
            condition: "always",
            trigger: 0
          }],
          memory: {},
          script: "",
          currentState: 0
        };
        return e.name = Bs.hero.name, e.i = Bs.maps.start.i, e.j = Bs.maps.start.j, e.states = [], e.states[0] = {
          direction: 2,
          condition: "always",
          trigger: 0
        }, e.states[0].charaset = Bs.hero.charaset, e;
      }

      function r() {
        return {
          direction: 2,
          condition: "always",
          trigger: 0
        };
      }

      e.DEFAULT_ID = -1, e.DEFAULT_ID_STR = e.DEFAULT_ID + "", e.FIRST_ELEM_ID = 0, e.DEFAULT_STR = "", e.getDialogNode = function (t) {
        return {
          id: void 0 !== t ? t : e.DEFAULT_ID
        };
      }, e.getDialogEdge = function (t) {
        return {
          id: void 0 !== t ? t : e.DEFAULT_ID
        };
      }, e.getEmptyMap = function () {
        var e = t();

        var _iterator3 = _createForOfIteratorHelper(e.layers),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _t4 = _step3.value;
            _t4.data = void 0;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return e;
      }, e.getMap = t, e.getTileset = function () {
        return {
          image: "002-Woods01.png",
          blocks: [],
          onTop: [],
          maxGID: 199
        };
      }, e.getAutoTileset = function () {
        return {
          image: "001-G_Water01.png",
          blocked: !1,
          selected: !1,
          frequency: 3
        };
      }, e.getSave = function () {
        return {
          id: e.FIRST_ELEM_ID,
          timestamp: Ws.now(),
          currentMap: Bs.maps.start.map,
          hero: o(),
          maps: [],
          config: n(),
          variables: {}
        };
      }, e.getConfig = n, e.getEvent = i, e.getHero = o, e.getEventState = r, e.getString = function () {
        return "";
      }, e.getTree = function () {
        return {};
      }, e.getCharacter = function () {
        return {
          direction: 2
        };
      };
    }(js || (js = {})), function (e) {
      var t = "dialogContainer";
      var n;

      function i() {
        var e = document.getElementById(t);
        null !== e ? (e.classList.replace("hiddenFadeOut", "visibleFadeIn"), setTimeout(function () {
          e.style.display = "none";
        }, 200), Ns.disableActionEvents()) : console.error("Element not foud: dialogContainer");
      }

      function o() {
        Ns.enableActionEvents();
        var e = document.getElementById(t);
        null !== e ? (e.classList.remove("visibleFadeIn"), e.classList.add("hiddenFadeOut"), setTimeout(function () {
          e.style.display = "none";
        }, 200)) : console.error("Element not foud: dialogContainer");
      }

      function r(e) {
        return new Promise(function (t) {
          void 0 !== e ? setTimeout(function () {
            t();
          }, e) : setTimeout(function () {
            var e = document.getElementById("dialogFrame");
            if (null === e) return void console.error("element undefined: dialogFrame");

            var n = function n() {
              t(), e.onclick = null, e.style.removeProperty("cursor");
            };

            Ns.addActionCallback(n), e.onclick = n, e.style.cursor = "pointer";
          }, 500);
        });
      }

      function a(e, t, n) {
        cl.load(e, ws.STRING, function (t) {
          Ws.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading string: " + e), n()) : n(t);
        }, t);
      }

      function s(e, t, n) {
        e !== js.DEFAULT_ID ? cl.load(e + "", ws.DIALOG, function (t) {
          if (Ws.isEmpty(t) || "string" != typeof t) console.error("Error while loading dialog: " + e), n(js.getDialogNode(js.FIRST_ELEM_ID));else {
            var _e4 = JSON.parse(t),
                _i3 = function (e, t, n) {
              var i = new Map(),
                  o = new Map();

              var _iterator4 = _createForOfIteratorHelper(t),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _e5 = _step4.value;
                  i.set(_e5.id, _e5);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              var _iterator5 = _createForOfIteratorHelper(n),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _e6 = _step5.value;
                  o.set(_e6.id, _e6);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              if (i.has(e)) {
                var _t5 = i.get(e);

                return l(_t5, i, o), _t5;
              }

              return console.error("Cannot reconstruct dialog tree from node: " + e), js.getDialogNode();
            }(js.FIRST_ELEM_ID, _e4.nodes, _e4.edges);

            n(_i3);
          }
        }, t) : n(js.getDialogNode(js.FIRST_ELEM_ID));
      }

      function l(e, t, n) {
        if (e.referenced = !0, !Ws.isEmpty(e.edgeIds)) {
          var _iterator6 = _createForOfIteratorHelper(e.edgeIds),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _i4 = _step6.value;

              if (n.has(_i4)) {
                var _o2 = n.get(_i4);

                if (void 0 === e.edges && (e.edges = []), e.edges.push(_o2), void 0 !== _o2.nodeId) if (t.has(_o2.nodeId)) {
                  var _e7 = t.get(_o2.nodeId);

                  _o2.node = _e7, _e7.referenced && (_o2.nodeReferenced = !0), l(_e7, t, n);
                } else console.error("Cannot reconstruct dialog tree from edge: " + _o2.id + ", node not found: " + _o2.nodeId);
              } else console.error("Cannot reconstruct dialog tree from node: " + e.id + ", edge not found: " + _i4);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      }

      function c(e, t, n, i) {
        if (t.has(e.id)) return;
        t.set(e.id, e);
        var o = e.edges;

        if (!Ws.isEmpty(o)) {
          i && delete e.edges;

          var _iterator7 = _createForOfIteratorHelper(o),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _e8 = _step7.value;
              if (n.has(_e8.id)) continue;
              n.set(_e8.id, _e8);
              var _o3 = _e8.node;
              void 0 !== _o3 && (i && delete _e8.node, c(_o3, t, n));
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      }

      function d(e, t, a, s, l, c, f) {
        var p = document.getElementById("dialogFrame"),
            h = document.getElementById("dialogFace"),
            g = document.getElementById("dialogName"),
            m = document.getElementById("dialogArea");
        if (null === h) return void console.error("Element not foud: dialogFace");
        if (null === g || null === g.firstChild) return void console.error("Element not foud: dialogName");
        if (null === m) return void console.error("Element not foud: dialogArea");
        if (null === p) return void console.error("Element not foud: dialogFrame");
        i(), Ws.isEmpty(l) ? console.error("skin is not defined!") : p.style.borderImageSource = "url('/assets/skin/" + l + "')";
        var v = s.face;
        void 0 !== v ? (h.style.display = "block", h.style.backgroundImage = "url('/assets/faceset/" + v + "')") : h.style.display = "none", void 0 !== s.name ? (g.firstChild.textContent = s.name, g.style.visibility = "block") : g.style.visibility = "hidden";

        var y = function (e) {
          var t;
          return void 0 !== e.genericMessage && (t = function (e) {
            var t = n.get(e);

            if (void 0 !== t && !Ws.isEmpty(t.values)) {
              var _e9, _n4;

              if (_e9 = void 0 === t.condition ? t.values : t.values.filter(function (e) {
                return u(t.condition, e.conditionParams);
              }), 0 === _e9.length) return;
              return _n4 = 1 === _e9.length ? 0 : Ps.getRandomInteger(0, _e9.length - 1), _e9[_n4].message;
            }
          }(e.genericMessage)), void 0 === t && (t = e.message), void 0 !== t && (t = t), t;
        }(s);

        m.innerText = void 0 !== y ? y : "";
        var E = document.getElementById("dialogEdgeArea");
        if (null === E) return void console.error("Element not foud: dialogEdgeArea");

        for (; E.firstChild;) {
          E.removeChild(E.firstChild);
        }

        var A = [];

        if (void 0 !== s.edges) {
          var _iterator8 = _createForOfIteratorHelper(s.edges),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _e10 = _step8.value;
              u(_e10.condition) && A.push(_e10);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }

        var b = function b(n) {
          var i;

          if (void 0 !== n.action) {
            var _o4,
                _r3 = document.getElementById("userInput");

            if (null === _r3) return void console.warn("Input required");
            _o4 = _r3.value, _o4 = _o4.trim(), _o4 = Ns.escapeText(_o4), i = c(e, n, t, a, _o4);
          }

          void 0 !== n.node ? void 0 === i ? d(e, t, a, n.node, l, c, f) : i.then(function () {
            d(e, t, a, n.node, l, c, f);
          }) : r(0).then(o);
        };

        if (0 === A.length) r(s.closingTimeout).then(o);else if (1 === A.length && void 0 === A[0].message) {
          if (void 0 === A[0].inputType) r(s.closingTimeout).then(function () {
            b(A[0]);
          });else {
            var _e11 = document.getElementById("inputArea"),
                _t6 = document.getElementById("input");

            if (null === _e11 || null === _t6) return void console.error("Cannot find input elements");

            switch (A[0].inputType) {
              case 1:
                _t6.type = "number";
                break;

              case 0:
                _t6.type = "text";
                break;

              default:
                console.error("Unexpected DialogInputType for edge: " + A[0].id);
            }

            _e11.style.display = "block";
          }
        } else {
          var _e12 = 1;

          var _iterator9 = _createForOfIteratorHelper(A),
              _step9;

          try {
            var _loop = function _loop() {
              var t = _step9.value;
              var n = document.createElement("div");
              n.classList.add("l4wDialogEdge"), E.appendChild(n), void 0 !== t.message && (n.innerText = t.message);

              var i = function i(e) {
                n.classList.add("l4wDialogEdgeSelected"), setTimeout(function () {
                  b(t);
                }, 100);
              };

              n.onclick = i, Ms(_e12, i), _e12++;
            };

            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
      }

      function u(e, t) {
        return void 0 === e || (e in Cs ? Cs[e](t) : (console.error('Condition not found: "' + e + '", on event.'), !1));
      }

      function f(e, t, n, i, o) {
        if (!i.has(e.id)) {
          if (!n && e.id === t) return e;
          i.set(e.id, e);
          var _r4 = e.edges;

          if (!Ws.isEmpty(_r4)) {
            var _iterator10 = _createForOfIteratorHelper(_r4),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _e13 = _step10.value;

                if (!o.has(_e13.id)) {
                  if (n && _e13.id === t) return _e13;
                  o.set(_e13.id, _e13);
                  var _r5 = _e13.node;

                  if (void 0 !== _r5) {
                    var _e14 = f(_r5, t, n, i, o);

                    if (void 0 !== _e14) return _e14;
                  }
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }
        }
      }

      e.openDialog = i, e.closeDialog = o, e.loadString = a, e.saveString = function (e, t, n) {
        var i = JSON.stringify(t);
        cl.save(e + "", i, ws.STRING, function (t, i) {
          if (void 0 !== t) {
            var _e15 = parseInt(t);

            if (isNaN(_e15)) return console.error("Error while saving string"), void n();
          }

          n(e);
        });
      }, e.loadDialog = s, e.saveDialog = function (e, t, n) {
        var i = new Map(),
            o = new Map();
        c(t, i, o, !0);
        var r = {
          nodes: Array.from(i.values()),
          edges: Array.from(o.values())
        };
        cl.save(e + "", JSON.stringify(r), ws.DIALOG, function (t, i) {
          i ? (Ws.isNumeric(t) && (e = parseInt(t)), n(e)) : n();
        });
      }, e.deconstructDialogTree = c, e.loadGenericMessages = function (e, t, i) {
        isNaN(e) ? i(!1) : cl.load(e + "", ws.GENERIC_MESSAGE, function (t) {
          Ws.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading dialog: " + e), i(!1)) : (n = JSON.parse(t), i(!0));
        });
      }, e.showComplexDialog = function (e, t, n, i, o, r, a) {
        s(i, o.lang, function (s) {
          void 0 === s ? console.error("Error while loading dialog: " + i) : d(e, t, n, s, o.skin, r, a);
        });
      }, e.showSimpleDialog = function (e, t, n, i, o, r) {
        a(i, o.lang, function (i) {
          var a = js.getDialogNode();
          a.message = i, d(e, t, n, a, o.skin, Ts, r);
        });
      }, e.search = function (e, t, n) {
        return f(e, t, void 0 !== n && n, new Map(), new Map());
      };
    }(Fs || (Fs = {})), function (e) {
      e.DOUBLE_PI = 2 * Math.PI;

      var t = function t() {
        _classCallCheck(this, t);
      };

      t.YELLOW = "yellow", t.RED = "red", t.WHITE = "white", t.GREY = "grey", t.BLACK = "black", t.AQUA = "aqua", t.DARKBLUE = "darkblue", t.GREEN = "green", t.LIME = "lime", e.Color = t;

      var n = function n() {
        _classCallCheck(this, n);
      };

      n.GET = "GET", n.POST = "POST", e.RequestType = n;

      var i = function i() {
        _classCallCheck(this, i);
      };

      var o, r, a;
      i.JSON = "application/json", e.MimeType = i, e.MEDIUM_MSPEED = .128, e.VERY_LOW_MSPEED = e.MEDIUM_MSPEED * (1 - .9), e.LOW_MSPEED = .5 * e.MEDIUM_MSPEED, e.MEDIUM_LOW_MSPEED = .8 * e.MEDIUM_MSPEED, e.MEDIUM_HIGH_MSPEED = 1.2 * e.MEDIUM_MSPEED, e.HIGH_MSPEED = 1.5 * e.MEDIUM_MSPEED, e.VERY_HIGH_MSPEED = 1.9 * e.MEDIUM_MSPEED, e.MEDIUM_FREQUENCY = .006, e.VERY_LOW_FREQUENCY = e.MEDIUM_FREQUENCY * (1 - .9), e.LOW_FREQUENCY = .5 * e.MEDIUM_FREQUENCY, e.MEDIUM_LOW_FREQUENCY = .8 * e.MEDIUM_FREQUENCY, e.MEDIUM_HIGH_FREQUENCY = 1.2 * e.MEDIUM_FREQUENCY, e.HIGH_FREQUENCY = 1.5 * e.MEDIUM_FREQUENCY, e.VERY_HIGH_FREQUENCY = 1.9 * e.MEDIUM_FREQUENCY, function (e) {
        e[e.LOW = 0] = "LOW", e[e.MID = 1] = "MID", e[e.TOP = 2] = "TOP", e[e.EVENTS = 3] = "EVENTS";
      }(o = e.MapLayer || (e.MapLayer = {})), function (e) {
        e[e.APPLY = 0] = "APPLY", e[e.ERASE = 1] = "ERASE", e[e.EVENTS = 2] = "EVENTS";
      }(r = e.EditMode || (e.EditMode = {})), function (e) {
        e[e.BLOCKS = 0] = "BLOCKS", e[e.ONTOP = 1] = "ONTOP";
      }(a = e.TileEditMode || (e.TileEditMode = {}));
    }(Us || (Us = {})), function (e) {
      function t(e, t) {
        switch (parseInt(t + "")) {
          case 0:
            e.frequencyVal = Us.VERY_LOW_FREQUENCY;
            break;

          case 1:
            e.frequencyVal = Us.LOW_FREQUENCY;
            break;

          case 2:
            e.frequencyVal = Us.MEDIUM_LOW_FREQUENCY;
            break;

          case 3:
            e.frequencyVal = Us.MEDIUM_FREQUENCY;
            break;

          case 4:
            e.frequencyVal = Us.MEDIUM_HIGH_FREQUENCY;
            break;

          case 5:
            e.frequencyVal = Us.HIGH_FREQUENCY;
            break;

          case 6:
            e.frequencyVal = Us.VERY_HIGH_FREQUENCY;
            break;

          default:
            e.frequencyVal = Us.MEDIUM_FREQUENCY;
        }
      }

      function n(e, t) {
        switch (parseInt(t + "")) {
          case 0:
            e.mSpeed = Us.VERY_LOW_MSPEED;
            break;

          case 1:
            e.mSpeed = Us.LOW_MSPEED;
            break;

          case 2:
            e.mSpeed = Us.MEDIUM_LOW_MSPEED;
            break;

          case 3:
            e.mSpeed = Us.MEDIUM_MSPEED;
            break;

          case 4:
            e.mSpeed = Us.MEDIUM_HIGH_MSPEED;
            break;

          case 5:
            e.mSpeed = Us.HIGH_MSPEED;
            break;

          case 6:
            e.mSpeed = Us.VERY_HIGH_MSPEED;
            break;

          default:
            e.mSpeed = Us.MEDIUM_MSPEED;
        }
      }

      e.setFrequency = t, e.setSpeed = n, e.isVisible = function (e, t) {
        return !(void 0 === e || t !== (0 !== Ps.normalizeZIndex(e.onTop)) || !Ws.isEmpty(e.visible) && !e.visible || !Ws.isEmpty(e.opacity) && 0 === e.opacity || Ws.isEmpty(e.charaset));
      }, e.initTransientData = function (e, i) {
        return void 0 === i && (i = js.getCharacter()), n(i, i.speed), t(i, i.frequency), i;
      };
    }(Hs || (Hs = {})), function (e) {
      e.showError = function (e, t) {
        null !== e ? (void 0 !== t && t.clear(e), e.fillStyle = "#000000", e.font = "bold 20px Oldenburg", e.fillText("An error occurred :(", 60, 60)) : console.error("Context is null");
      };
    }(Vs || (Vs = {})), function (e) {
      function t(e) {
        if (void 0 !== e.imageData && e.imageData.width > e.imageData.height) switch (e.frames = Math.floor(e.imageData.width / (e.imageData.height / 4 * 3)), void 0 === e.frequency && (e.frequency = 3), e.frequency) {
          case 0:
            e.frequencyVal = Us.VERY_LOW_FREQUENCY;
            break;

          case 1:
            e.frequencyVal = Us.LOW_FREQUENCY;
            break;

          case 2:
            e.frequencyVal = Us.MEDIUM_LOW_FREQUENCY;
            break;

          case 3:
            e.frequencyVal = Us.MEDIUM_FREQUENCY;
            break;

          case 4:
            e.frequencyVal = Us.MEDIUM_HIGH_FREQUENCY;
            break;

          case 5:
            e.frequencyVal = Us.HIGH_FREQUENCY;
            break;

          case 6:
            e.frequencyVal = Us.VERY_HIGH_FREQUENCY;
            break;

          default:
            e.frequencyVal = Us.MEDIUM_FREQUENCY;
        }
      }

      e.loadTileset = function (e, t, n) {
        cl.load(e + "", ws.TILESET, function (i) {
          if (Ws.isEmpty(i)) console.error("Error while loading tileset: " + e), n();else try {
            var _e16 = JSON.parse(i);

            n(_e16);
          } catch (i) {
            "SyntaxError" === i.name ? console.error("Error while parsing tileset: " + e) : "TypeError" === i.name ? console.error("Error while reading tileset: " + e) : console.error(i), Vs.showError(t), n();
          }
        });
      }, e.initTransientData = function (e, t) {
        if (void 0 !== e.imageData) {
          e.imageWidth = e.imageData.width, e.imageHeight = e.imageData.height;

          var _n5 = t.mapCanvasToCell({
            x: e.imageWidth,
            y: e.imageHeight
          });

          e.maxGID = _n5.i * _n5.j - 1;
        }
      }, e.initTransientDataAutotiles = function (e) {
        return new Promise(function (n) {
          var i = n;
          cl.load("autotilesets", ws.AUTOTILESET, function (n) {
            if (void 0 === n || "string" != typeof n) return void console.warn("Non parsable autotileset data: " + n);
            var o = JSON.parse(n);

            var _iterator11 = _createForOfIteratorHelper(e),
                _step11;

            try {
              var _loop2 = function _loop2() {
                var n = _step11.value;

                var _iterator12 = _createForOfIteratorHelper(o),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var _e17 = _step12.value;

                    if (_e17.image === n.image) {
                      n.blocked = _e17.blocked, n.frequency = _e17.frequency;
                      break;
                    }
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }

                void 0 === n.imageData ? cl.load(n.image, ws.AUTOTILE, function (e) {
                  n.imageData = e, t(n), i(void 0);
                }) : (t(n), i(void 0));
              };

              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          });
        });
      }, e.getAnimatedAutotileFrame = function (e) {
        if (void 0 === e.frequencyVal || void 0 === e.frames) return 0;
        void 0 === e.animationStartTime && (e.animationStartTime = Ws.now());
        var t = Ws.now() - e.animationStartTime;
        return 3 * Math.floor(t * e.frequencyVal % e.frames);
      };
    }(Gs || (Gs = {}));

    var qs,
        zs,
        Ys,
        Ks = window.requestAnimationFrame || function (e) {
      return window.setTimeout(e, 40), Math.floor(100 * Math.random());
    },
        Qs = window.cancelAnimationFrame;

    var Js = /*#__PURE__*/function () {
      function Js(e) {
        _classCallCheck(this, Js);

        this.renderingConfiguration = new Is(), this.grid = e, this.context = e.getContext(), this.paused = !1, this.focus = this.grid.mapCellToCanvas({
          i: 0,
          j: 0
        }), this.pointer = {
          i: 0,
          j: 0
        };
      }

      _createClass(Js, [{
        key: "start",
        value: function start(e) {
          this.changeScale();
          var t = this,
              n = Ks(function () {
            t.mainGameLoop(n);
          });
        }
      }, {
        key: "mainGameLoop",
        value: function mainGameLoop(e) {
          var t = this,
              n = Ks(function () {
            t.mainGameLoop(n);
          });
          !this.paused && this.mainGameLoop_pre() ? (this.render(this.map, this.context), this.mainGameLoop_post()) : Qs(e);
        }
      }, {
        key: "mainGameLoop_pre",
        value: function mainGameLoop_pre() {
          return !0;
        }
      }, {
        key: "mainGameLoop_post",
        value: function mainGameLoop_post() {}
      }, {
        key: "renderFocus",
        value: function renderFocus() {
          null != this.focus.x && null != this.focus.y && this.renderingConfiguration.showFocus && (this.context.save(), this.context.beginPath(), this.context.fillStyle = Us.Color.BLACK, this.context.arc(this.focus.x + Math.floor(this.grid.cellW / 2), this.focus.y + Math.floor(this.grid.cellH / 2), 15, 0, Us.DOUBLE_PI), this.context.closePath(), this.context.fill(), this.context.restore());
        }
      }, {
        key: "toggleGrid",
        value: function toggleGrid(e) {
          this.renderingConfiguration.showGrid = null != e ? e : !this.renderingConfiguration.showGrid;
        }
      }, {
        key: "toggleGridMode",
        value: function toggleGridMode() {
          this.renderingConfiguration.showGrid ? this.renderingConfiguration.showBlocks ? (this.toggleGrid(), this.toggleBlocks()) : this.toggleBlocks() : this.toggleGrid();
        }
      }, {
        key: "toggleCellNumbering",
        value: function toggleCellNumbering(e) {
          this.renderingConfiguration.showCellNumbers = null != e ? e : !this.renderingConfiguration.showCellNumbers;
        }
      }, {
        key: "toggleFocus",
        value: function toggleFocus(e) {
          this.renderingConfiguration.showFocus = null != e ? e : !this.renderingConfiguration.showFocus;
        }
      }, {
        key: "toggleBlocks",
        value: function toggleBlocks(e) {
          this.renderingConfiguration.showBlocks = null != e ? e : !this.renderingConfiguration.showBlocks;
        }
      }, {
        key: "toggleOnTops",
        value: function toggleOnTops(e) {
          this.renderingConfiguration.showOnTops = null != e ? e : !this.renderingConfiguration.showOnTops;
        }
      }, {
        key: "toggleAntialiasing",
        value: function toggleAntialiasing(e) {
          this.renderingConfiguration.enableAntialiasing = null != e ? e : !this.renderingConfiguration.enableAntialiasing, "webkitImageSmoothingEnabled" in this.context && (this.context.webkitImageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing), "msImageSmoothingEnabled" in this.context && (this.context.msImageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing), void 0 !== this.context.imageSmoothingEnabled && (this.context.imageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing);
        }
      }, {
        key: "updatePointer",
        value: function updatePointer(e, t) {
          this.pointer = void 0 === e || void 0 === t ? void 0 : {
            i: e,
            j: t
          };
        }
      }, {
        key: "moveFocusToDirection",
        value: function moveFocusToDirection(e) {
          if (void 0 !== e) switch (e) {
            case 0:
              this.focus.y -= +this.grid.cellH;
              break;

            case 2:
              this.focus.y += +this.grid.cellH;
              break;

            case 3:
              this.focus.x -= +this.grid.cellW;
              break;

            case 1:
              this.focus.x += +this.grid.cellW;
              break;

            case 4:
              break;

            default:
              console.error("Unexpected case: " + e);
          }
          this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
        }
      }, {
        key: "moveFocusToTarget",
        value: function moveFocusToTarget(e) {
          this.focus = this.grid.mapCellToCanvas(e), this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
        }
      }, {
        key: "resetTranslation",
        value: function resetTranslation() {
          this.grid.resetTranslation();
        }
      }, {
        key: "reapplyTranslation",
        value: function reapplyTranslation() {
          this.grid.reappyTranslation();
        }
      }, {
        key: "changeScale",
        value: function changeScale() {
          try {
            this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.scale(this.grid.scaleX, this.grid.scaleY);
          } catch (e) {
            console.error(e);
          }
        }
      }, {
        key: "togglePause",
        value: function togglePause(e) {
          this.paused = null != e ? e : !this.paused, this.paused ? this.pauseStartTime = Ws.now() : (void 0 === this.pauseStartTime && (this.pauseStartTime = 0), this.pauseDuration = Ws.now() - this.pauseStartTime, this.pauseStartTime = void 0);
        }
      }, {
        key: "changeMap",
        value: function changeMap(e, t) {
          this.togglePause(!0);
          var n = this;
          Ws.isEmpty(e) && (console.error("Uninitialized map"), console.trace()), n.map = e, n.changeTile(e.tileset.image, function (e) {
            zs.initTransientData(n, function () {
              n.togglePause(!1), t(n);
            });
          });
        }
      }, {
        key: "changeTile",
        value: function changeTile(e, t) {
          var n = this;
          Gs.loadTileset(e, this.context, function (i) {
            if (void 0 === i) return console.error("Cannot change tile, tileset not found: " + e), void t(n);
            n.map.tileset = i, cl.load(i.image, ws.TILE, function (e) {
              n.map.tileset.imageData = e, t(n);
            });
          });
        }
      }, {
        key: "getSceneHeight",
        value: function getSceneHeight() {
          return this.map.height;
        }
      }, {
        key: "getSceneWidth",
        value: function getSceneWidth() {
          return this.map.width;
        }
      }, {
        key: "render",
        value: function render(e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          var i = this.redrawArea.y,
              o = this.redrawArea.y + this.redrawArea.h,
              r = this.redrawArea.x,
              a = this.redrawArea.x + this.redrawArea.w;

          if (!Ws.isEmpty(e) && void 0 !== e.tileset.imageData) {
            for (var _s2 = i; _s2 <= o; _s2++) {
              for (var _i5 = r; _i5 <= a; _i5++) {
                var _o5 = Ps.cellToGid({
                  i: _i5,
                  j: _s2
                }, e.width);

                for (var _r6 = Us.MapLayer.LOW; _r6 <= Us.MapLayer.TOP; _r6++) {
                  var _a3 = this.map.layers[_r6];
                  if (void 0 === _a3 || void 0 === _a3.data || _a3.data.length < _o5) continue;
                  var _l2 = _a3.data[_o5];
                  if (null != _l2) if (zs.isThisAnAutotileCell(_o5, _a3, e)) {
                    var _n6 = void 0;

                    if (void 0 !== e.autotilesets && (_n6 = e.autotilesets[_l2]), void 0 === _n6) {
                      console.warn("Autotile gid not set in map: " + _l2);
                      continue;
                    }

                    if (void 0 !== _n6.imageData) {
                      var _e18 = Os.ALL;
                      void 0 !== _a3.autotileData && null !== _a3.autotileData[_o5] && (_e18 = _a3.autotileData[_o5]), this.applyLayerCustomizations(_r6), Ws.isEmpty(_a3.opacity) || (t.globalAlpha = _a3.opacity), this.renderAutotile(t, _n6, _l2, _e18, {
                        i: _i5,
                        j: _s2
                      }), t.globalAlpha = 1, this.removeLayerCustomizations(_r6);
                    }
                  } else {
                    var _o6 = 0;
                    void 0 !== e.tileset.onTop && (_o6 = Ps.normalizeZIndex(e.tileset.onTop[_l2])), 0 !== _o6 && n || (this.applyLayerCustomizations(_r6), Ws.isEmpty(_a3.opacity) || (t.globalAlpha = _a3.opacity), this.renderCell(t, e.tileset, _l2, _i5, _s2), t.globalAlpha = 1, this.removeLayerCustomizations(_r6));
                  }
                }

                zs.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _i5, _s2, !1);
              }
            }

            this.renderPointer();

            for (var _s3 = i; _s3 <= o; _s3++) {
              for (var _o7 = r; _o7 <= a && n; _o7++) {
                for (var _n7 = i; _n7 <= _s3; _n7++) {
                  var _i6 = Ps.cellToGid({
                    i: _o7,
                    j: _n7
                  }, e.width);

                  for (var _r7 = Us.MapLayer.LOW; _r7 <= Us.MapLayer.TOP; _r7++) {
                    var _a4 = this.map.layers[_r7];
                    if (void 0 === _a4 || void 0 === _a4.data || _a4.data.length < _i6) continue;
                    var _l3 = _a4.data[_i6];
                    if (Ws.isEmpty(_l3)) continue;
                    var _c = 0;
                    void 0 !== e.tileset.onTop && (_c = Ps.normalizeZIndex(e.tileset.onTop[_l3])), _c > 0 && _n7 + _c === _s3 && (this.applyLayerCustomizations(_r7), Ws.isEmpty(_a4.opacity) || (t.globalAlpha = _a4.opacity), this.renderCell(t, e.tileset, _l3, _o7, _n7), t.globalAlpha = 1, this.removeLayerCustomizations(_r7));
                  }
                }
              }

              for (var _e19 = r; _e19 <= a; _e19++) {
                this.renderDynamicElements(i, o, r, a, _e19, _s3, !1);
              }
            }

            for (var _e20 = i; _e20 <= o; _e20++) {
              for (var _t7 = r; _t7 <= a; _t7++) {
                this.renderDynamicElements(i, o, r, a, _t7, _e20, !0), zs.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _t7, _e20, !0);
              }
            }
          }

          zs.renderGlobalUI(this.grid, this.context, this.renderingConfiguration), this.renderFocus();
        }
      }, {
        key: "renderCell",
        value: function renderCell(e, t, n, i, o) {
          var r = Ps.gidToCell(n, Math.floor(t.imageWidth / this.grid.cellW));
          e.drawImage(t.imageData, Math.floor(r.i * this.grid.cellW), Math.floor(r.j * this.grid.cellH), this.grid.cellW, this.grid.cellH, Math.floor(i * this.grid.cellW), Math.floor(o * this.grid.cellH), this.grid.cellW, this.grid.cellH);
        }
      }, {
        key: "renderAutotile",
        value: function renderAutotile(e, t, n, i, o) {
          var r,
              a,
              s = t.imageData,
              l = !1,
              c = !1,
              d = !1;

          switch (i) {
            case Os.N | Os.E | Os.S | Os.W:
              r = 2, a = 0;
              break;

            case Os.E | Os.S:
            case Os.E | Os.S | Os.NE:
            case Os.E | Os.S | Os.SW:
            case Os.E | Os.S | Os.NE | Os.SW:
            case Os.E | Os.S | Os.NW:
            case Os.E | Os.S | Os.NW | Os.NE:
            case Os.E | Os.S | Os.NW | Os.SW:
            case Os.E | Os.S | Os.NW | Os.NE | Os.SW:
              l = !0;

            case Os.E | Os.SE | Os.S:
            case Os.E | Os.SE | Os.S | Os.NE:
            case Os.E | Os.SE | Os.S | Os.SW:
            case Os.E | Os.SE | Os.S | Os.NE | Os.SW:
            case Os.E | Os.SE | Os.S | Os.NW:
            case Os.E | Os.SE | Os.S | Os.NW | Os.NE:
            case Os.E | Os.SE | Os.S | Os.NW | Os.SW:
            case Os.E | Os.SE | Os.S | Os.NW | Os.NE | Os.SW:
              r = 0, a = 1;
              break;

            case Os.W | Os.SW | Os.S | Os.SE | Os.E:
            case Os.W | Os.SW | Os.S | Os.SE | Os.E | Os.NW:
            case Os.W | Os.SW | Os.S | Os.SE | Os.E | Os.NE:
            case Os.W | Os.SW | Os.S | Os.SE | Os.E | Os.NW | Os.NE:
              r = 1, a = 1;
              break;

            case Os.W | Os.S:
            case Os.W | Os.S | Os.NW:
            case Os.W | Os.S | Os.SE:
            case Os.W | Os.S | Os.NW | Os.SE:
            case Os.W | Os.S | Os.NE:
            case Os.W | Os.S | Os.NE | Os.NW:
            case Os.W | Os.S | Os.NE | Os.SE:
            case Os.W | Os.S | Os.NE | Os.NW | Os.SE:
              l = !0;

            case Os.W | Os.SW | Os.S:
            case Os.W | Os.SW | Os.S | Os.NW:
            case Os.W | Os.SW | Os.S | Os.SE:
            case Os.W | Os.SW | Os.S | Os.NW | Os.SE:
            case Os.W | Os.SW | Os.S | Os.NE:
            case Os.W | Os.SW | Os.S | Os.NE | Os.NW:
            case Os.W | Os.SW | Os.S | Os.NE | Os.SE:
            case Os.W | Os.SW | Os.S | Os.NE | Os.NW | Os.SE:
              r = 2, a = 1;
              break;

            case Os.N | Os.NE | Os.E | Os.SE | Os.S:
            case Os.N | Os.NE | Os.E | Os.SE | Os.S | Os.NW:
            case Os.N | Os.NE | Os.E | Os.SE | Os.S | Os.SW:
            case Os.N | Os.NE | Os.E | Os.SE | Os.S | Os.NW | Os.SW:
              r = 0, a = 2;
              break;

            case Os.ALL:
              r = 1, a = 2;
              break;

            case Os.N | Os.NW | Os.W | Os.SW | Os.S:
            case Os.N | Os.NW | Os.W | Os.SW | Os.S | Os.NE:
            case Os.N | Os.NW | Os.W | Os.SW | Os.S | Os.SE:
            case Os.N | Os.NW | Os.W | Os.SW | Os.S | Os.NE | Os.SE:
              r = 2, a = 2;
              break;

            case Os.N | Os.E:
            case Os.N | Os.E | Os.NW:
            case Os.N | Os.E | Os.SE:
            case Os.N | Os.E | Os.NW | Os.SE:
            case Os.N | Os.E | Os.SW:
            case Os.N | Os.E | Os.SW | Os.NW:
            case Os.N | Os.E | Os.SW | Os.SE:
            case Os.N | Os.E | Os.SW | Os.NW | Os.SE:
              l = !0;

            case Os.N | Os.NE | Os.E:
            case Os.N | Os.NE | Os.E | Os.NW:
            case Os.N | Os.NE | Os.E | Os.SE:
            case Os.N | Os.NE | Os.E | Os.NW | Os.SE:
            case Os.N | Os.NE | Os.E | Os.SW:
            case Os.N | Os.NE | Os.E | Os.SW | Os.NW:
            case Os.N | Os.NE | Os.E | Os.SW | Os.SE:
            case Os.N | Os.NE | Os.E | Os.SW | Os.NW | Os.SE:
              r = 0, a = 3;
              break;

            case Os.W | Os.NW | Os.N | Os.NE | Os.E:
            case Os.W | Os.NW | Os.N | Os.NE | Os.E | Os.SW:
            case Os.W | Os.NW | Os.N | Os.NE | Os.E | Os.SE:
            case Os.W | Os.NW | Os.N | Os.NE | Os.E | Os.SW | Os.SE:
              r = 1, a = 3;
              break;

            case Os.W | Os.N:
            case Os.W | Os.N | Os.SW:
            case Os.W | Os.N | Os.NE:
            case Os.W | Os.N | Os.SW | Os.NE:
            case Os.W | Os.N | Os.SE:
            case Os.W | Os.N | Os.SE | Os.SW:
            case Os.W | Os.N | Os.SE | Os.NE:
            case Os.W | Os.N | Os.SE | Os.SW | Os.NE:
              l = !0;

            case Os.W | Os.NW | Os.N:
            case Os.W | Os.NW | Os.N | Os.SW:
            case Os.W | Os.NW | Os.N | Os.NE:
            case Os.W | Os.NW | Os.N | Os.SW | Os.NE:
            case Os.W | Os.NW | Os.N | Os.SE:
            case Os.W | Os.NW | Os.N | Os.SE | Os.SW:
            case Os.W | Os.NW | Os.N | Os.SE | Os.NE:
            case Os.W | Os.NW | Os.N | Os.SE | Os.SW | Os.NE:
              r = 2, a = 3;
              break;

            default:
              if (0 == (i & (Os.N | Os.E | Os.S | Os.W))) {
                r = 0, a = 0;
                break;
              }

              r = 1, a = 2, (i & (Os.N | Os.E)) != (Os.N | Os.E) && (i & (Os.S | Os.E)) != (Os.S | Os.E) && (i & (Os.S | Os.W)) != (Os.S | Os.W) && (i & (Os.N | Os.W)) != (Os.N | Os.W) || (l = !0), (i & (Os.N | Os.S)) > 0 && (0 == (i & Os.W) || 0 == (i & Os.E)) ? c = !0 : (i & (Os.W | Os.E)) > 0 && (0 == (i & Os.N) || 0 == (i & Os.S)) && (d = !0);
          }

          var u = Gs.getAnimatedAutotileFrame(t);

          if (e.drawImage(s, (r + u) * this.grid.cellW, a * this.grid.cellH, this.grid.cellW, this.grid.cellH, o.i * this.grid.cellW, o.j * this.grid.cellH, this.grid.cellW, this.grid.cellH), l) {
            var _t8, _n8;

            r = 2, a = 0;

            var _l4 = Math.floor(this.grid.cellW / 2),
                _c2 = Math.floor(this.grid.cellH / 2);

            0 == (i & Os.NW) && (i & (Os.N | Os.W)) == (Os.N | Os.W) && (_t8 = 0, _n8 = 0, this.drawAngle(e, s, r + u, a, _l4, _c2, o, _t8, _n8)), 0 == (i & Os.NE) && (i & (Os.N | Os.E)) == (Os.N | Os.E) && (_t8 = _l4, _n8 = 0, this.drawAngle(e, s, r + u, a, _l4, _c2, o, _t8, _n8)), 0 == (i & Os.SW) && (i & (Os.S | Os.W)) == (Os.S | Os.W) && (_t8 = 0, _n8 = _c2, this.drawAngle(e, s, r + u, a, _l4, _c2, o, _t8, _n8)), 0 == (i & Os.SE) && (i & (Os.S | Os.E)) == (Os.S | Os.E) && (_t8 = _l4, _n8 = _c2, this.drawAngle(e, s, r + u, a, _l4, _c2, o, _t8, _n8));
          }

          if (c) {
            var _t9,
                _n9 = {
              w: Math.floor(this.grid.cellW / 2),
              h: this.grid.cellH
            };

            a = 2;
            var _l5 = 0;
            0 == (i & Os.W) && (r = 0, _t9 = 0, this.drawBottleneck(e, s, r + u, a, o, _t9, _l5, _n9)), 0 == (i & Os.E) && (r = 2, _t9 = Math.floor(this.grid.cellW / 2), this.drawBottleneck(e, s, r + u, a, o, _t9, _l5, _n9)), 0 == (i & Os.N) ? (r = 0, a = 0, _t9 = 0, _l5 = 0, _n9 = {
              w: this.grid.cellW,
              h: Math.floor(this.grid.cellH / 2)
            }, this.drawBottleneck(e, s, r + u, a, o, _t9, _l5, _n9)) : 0 == (i & Os.S) && (r = 0, a = 0, _t9 = 0, _l5 = Math.floor(this.grid.cellH / 2), _n9 = {
              w: this.grid.cellW,
              h: Math.floor(this.grid.cellH / 2)
            }, this.drawBottleneck(e, s, r + u, a, o, _t9, _l5, _n9));
          } else if (d) {
            var _t10 = {
              w: this.grid.cellW,
              h: Math.floor(this.grid.cellH / 2)
            };
            r = 1;

            var _n10,
                _l6 = 0;

            0 == (i & Os.N) && (a = 1, _n10 = 0, this.drawBottleneck(e, s, r + u, a, o, _l6, _n10, _t10)), 0 == (i & Os.S) && (a = 3, _n10 = Math.floor(this.grid.cellH / 2), this.drawBottleneck(e, s, r + u, a, o, _l6, _n10, _t10)), 0 == (i & Os.E) ? (r = 0, a = 0, _l6 = Math.floor(this.grid.cellW / 2), _n10 = 0, _t10 = {
              w: Math.floor(this.grid.cellW / 2),
              h: this.grid.cellH
            }, this.drawBottleneck(e, s, r + u, a, o, _l6, _n10, _t10)) : 0 == (i & Os.W) && (r = 0, a = 0, _l6 = 0, _n10 = 0, _t10 = {
              w: Math.floor(this.grid.cellW / 2),
              h: this.grid.cellH
            }, this.drawBottleneck(e, s, r + u, a, o, _l6, _n10, _t10));
          }
        }
      }, {
        key: "drawBottleneck",
        value: function drawBottleneck(e, t, n, i, o, r, a, s) {
          e.drawImage(t, n * this.grid.cellW + r, i * this.grid.cellH + a, s.w, s.h, o.i * this.grid.cellW + r, o.j * this.grid.cellH + a, s.w, s.h);
        }
      }, {
        key: "drawAngle",
        value: function drawAngle(e, t, n, i, o, r, a, s, l) {
          e.drawImage(t, n * this.grid.cellW + s, i * this.grid.cellH + l, o, r, a.i * this.grid.cellW + s, a.j * this.grid.cellH + l, o, r);
        }
      }, {
        key: "applyLayerCustomizations",
        value: function applyLayerCustomizations(e) {}
      }, {
        key: "removeLayerCustomizations",
        value: function removeLayerCustomizations(e) {}
      }, {
        key: "onFocusCellChange",
        value: function onFocusCellChange() {}
      }, {
        key: "onFocusPixelChange",
        value: function onFocusPixelChange(e, t) {}
      }, {
        key: "getMap",
        value: function getMap() {
          return this.map;
        }
      }]);

      return Js;
    }();

    !function (e) {
      function t(e) {
        return {
          id: e.id,
          memory: e.memory
        };
      }

      e.getSave = function (e, n) {
        if (Ws.isEmpty(e) || Ws.isEmpty(n)) return js.getSave();
        var i = new Array();

        if (!Ws.isEmpty(e.events)) {
          var _iterator13 = _createForOfIteratorHelper(e.events),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var _n11 = _step13.value;
              i.push(t(_n11));
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        }

        var o = js.getSave();
        return o.currentMap = e.id, o.hero = n, o.maps[e.id] = {
          events: i
        }, o;
      }, e.loadMapSave = function (e, t, n, i) {
        zs.loadMap(t, e.context.canvas, function (t) {
          var o = t;
          !function (e, t) {
            if (Ws.isEmpty(e) || Ws.isEmpty(t.events) || Ws.isEmpty(e.maps[t.id])) return;
            var n = e.maps[t.id].events;

            if (!Ws.isEmpty(n)) {
              var _iterator14 = _createForOfIteratorHelper(n),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _e21 = _step14.value;

                  var _iterator15 = _createForOfIteratorHelper(t.events),
                      _step15;

                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                      var _n12 = _step15.value;
                      _e21.id === _n12.id && (_n12.memory = _e21.memory);
                    }
                  } catch (err) {
                    _iterator15.e(err);
                  } finally {
                    _iterator15.f();
                  }
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }
          }(e.save, o), e.changeMap(o, function () {
            if (e.resetTranslation(), e.hero.i = n.i, e.hero.j = n.j, Ys.initTransientData(o, e.grid, e.hero), e.focus = e.grid.mapCellToCanvas(n), !Ws.isEmpty(e.map.events)) for (var _t11 = 0; _t11 < e.map.events.length; _t11++) {
              var _n13 = Ys.initTransientData(e.map, e.grid, e.map.events[_t11]);

              void 0 !== _n13 && (e.map.events[_t11] = _n13);
            }
            i(!0);
          });
        });
      };
    }(qs || (qs = {}));

    var Xs = /*#__PURE__*/function (_Js) {
      _inherits(Xs, _Js);

      var _super = _createSuper(Xs);

      function Xs(e, t, n) {
        var _this;

        _classCallCheck(this, Xs);

        _this = _super.call(this, e), _this.FPS = 20, _this.refreshInterval = 1e3 / _this.FPS, _this.autoFPS = !0, _this.secondFPS = 0, _this.countFPS = 0, _this.lastFPS = 0, _this.fpsPerformance = [22, 21, 20], _this.eventScriptLauncher = t, _this.dialogScriptLauncher = n;
        return _this;
      }

      _createClass(Xs, [{
        key: "mainGameLoop_pre",
        value: function mainGameLoop_pre() {
          if (!_get(_getPrototypeOf(Xs.prototype), "mainGameLoop_pre", this).call(this)) return !1;
          var e = !1,
              t = this,
              n = Ws.now();

          if (!Ws.isEmpty(this.hero)) {
            var _i7 = Ys.update(this.hero, this, this.hero, this.action, n, this.pauseDuration);

            void 0 !== _i7 && this.eventScriptLauncher(this.hero, this, this.hero, _i7), e = Ys.manageMovements(this.map, this.grid, this.hero, function (e, n) {
              t.grid.changeTranslation(t.focus.x + e, t.focus.y + n, t.map.width, t.map.height);
            }, function (e, n) {
              t.focus.x += e, t.focus.y += n;
            });
          }

          if (!Ws.isEmpty(this.map.events)) {
            var _iterator16 = _createForOfIteratorHelper(this.map.events),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _t12 = _step16.value;

                var _i8 = Ys.update(_t12, this, this.hero, this.action, n, this.pauseDuration);

                void 0 !== _i8 && this.eventScriptLauncher(_t12, this, this.hero, _i8), e = e || Ys.manageMovements(this.map, this.grid, _t12, ks, ks);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            this.action = void 0;
          }

          return e && zs.updateDynamicData(t.hero, this.map), this.paused || (this.pauseDuration = void 0), this.redrawArea = this.getRedrawArea(), !0;
        }
      }, {
        key: "mainGameLoop_post",
        value: function mainGameLoop_post() {
          _get(_getPrototypeOf(Xs.prototype), "mainGameLoop_post", this).call(this), this.renderFPS();
        }
      }, {
        key: "getRedrawArea",
        value: function getRedrawArea(e) {
          var t = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth()),
              n = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight());
          return {
            x: t.min,
            y: n.min,
            h: n.max - n.min,
            w: t.max - t.min
          };
        }
      }, {
        key: "toggleFPS",
        value: function toggleFPS(e) {
          this.renderingConfiguration.showFPS = null != e ? e : !this.renderingConfiguration.showFPS;
        }
      }, {
        key: "renderFPS",
        value: function renderFPS() {
          var e = Math.floor(Ws.now() / 1e3);
          if (e === this.secondFPS) this.countFPS++;else if (this.lastFPS = this.countFPS, this.countFPS = 1, this.secondFPS = e, !0 === this.autoFPS) {
            this.fpsPerformance.shift(), this.fpsPerformance[2] = this.lastFPS;

            var _e22 = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;

            this.FPS = Math.ceil(_e22) + 2;
          }
          this.renderingConfiguration.showFPS && (this.context.fillStyle = Us.Color.RED, this.context.font = "bold 18px Oldenburg", this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20));
        }
      }, {
        key: "renderDynamicElements",
        value: function renderDynamicElements(e, t, n, i, o, r, a) {
          try {
            Ys.isVisible(this.hero, e, t, n, i, o, r, a) && Ys.render(this.grid, this.hero, this.context, !0);
          } catch (e) {
            console.error(e);
          }

          if (!Ws.isEmpty(this.map.events)) {
            var _iterator17 = _createForOfIteratorHelper(this.map.events),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _s4 = _step17.value;

                try {
                  Ys.isVisible(_s4, e, t, n, i, o, r, a) && Ys.render(this.grid, _s4, this.context, !0, this.pointer);
                } catch (e) {
                  console.error(e);
                }
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }
        }
      }, {
        key: "loadSave",
        value: function loadSave(e, t) {
          var n, i;

          if (void 0 === e) {
            if (!Ws.isEmpty(this.map)) return void t(!1);
            n = Bs.maps.start.map, i = js.getHero();
          } else this.save = e, n = e.currentMap, i = e.hero;

          var o = Ys.initTransientData(this.map, this.grid, i);
          void 0 === o ? console.error("Cannot initialize hero event") : this.hero = o, qs.loadMapSave(this, n, i, t);
        }
      }, {
        key: "registerAction",
        value: function registerAction(e, t) {
          this.action = {
            i: e,
            j: t
          };
        }
      }, {
        key: "startHeroMovement",
        value: function startHeroMovement(e, t) {
          if (e < 0 || e >= this.map.width || t < 0 || t >= this.map.height) return !1;
          var n = this;
          return Ys.startMovement(this.hero, e, t, function (e) {
            n.registerAction(e.i, e.j);
          });
        }
      }, {
        key: "isDialogOpen",
        value: function isDialogOpen() {
          return void 0 !== this.dialogName && void 0 !== this.dialogSkin;
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(e) {
          void 0 === this.save && (this.save = js.getSave()), this.save.config.lang = e;
        }
      }, {
        key: "toggleNaturalScale",
        value: function toggleNaturalScale(e, t) {
          this.grid.toggleNaturalScale(e, t), this.grid.refreshCanvasSize(), this.changeScale(), this.reapplyTranslation();
        }
      }, {
        key: "renderPointer",
        value: function renderPointer() {}
      }]);

      return Xs;
    }(Js);

    function Zs(e, t, n) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Rs.D_STAR_LITE;
      var o = Ws.now(),
          r = n.i - t.i,
          a = n.j - t.j;
      if (0 === r && 0 === a) return 4;
      {
        var _r8 = 4;

        switch (i) {
          case Rs.BASIC:
            _r8 = el(e, t, n);
            break;

          case Rs.D_STAR_LITE:
            _r8 = function (e, t, n) {
              var i, o, r, a;
              var s = Number.MAX_SAFE_INTEGER;
              var l,
                  c,
                  d = 0,
                  u = e.width;

              function f(e) {
                return [Math.min(m(e), v(e)) + b(l, e) + d, Math.min(m(e), v(e))];
              }

              function p(e) {
                m(e) !== v(e) ? (e.key = f(e), w(e)) : function (e) {
                  var _iterator18 = _createForOfIteratorHelper(o),
                      _step18;

                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var _t13 = _step18.value;
                      if (S(e, _t13)) return !0;
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }

                  return !1;
                }(e) && C(e);
              }

              function h(e, t) {
                t > s && (t = s);
                var n = Ps.cellToGid(e.cell, u);
                r[n] = t;
              }

              function g(e, t) {
                t > s && (t = s);
                var n = Ps.cellToGid(e.cell, u);
                a[n] = t;
              }

              function m(e) {
                var t = Ps.cellToGid(e.cell, u);
                return r[t];
              }

              function v(e) {
                var t = Ps.cellToGid(e.cell, u);
                return a[t];
              }

              function y(t) {
                var n = Ps.cellToGid(t.cell, e.width),
                    o = [];
                return 0 !== t.cell.i && o.push(i[n - 1]), t.cell.i < e.width - 1 && o.push(i[n + 1]), n - e.width >= 0 && o.push(i[n - e.width]), n + e.width < i.length && o.push(i[n + e.width]), o;
              }

              function E(t) {
                var n = Ps.cellToGid(t.cell, e.width),
                    o = [];
                return 0 !== t.cell.i && o.push(i[n - 1]), t.cell.i < e.width - 1 && o.push(i[n + 1]), n - e.width >= 0 && o.push(i[n - e.width]), n + e.width < i.length && o.push(i[n + e.width]), o;
              }

              function A(t, n) {
                var i = Ps.getDirection(n.cell, t.cell),
                    o = 4 === Ps.getDirection(n.cell, c.cell);
                return Ps.isMovementBlocked(e, t.cell.i, t.cell.j, i, o) ? s : 1;
              }

              function b(e, t) {
                return Math.abs(e.cell.i - t.cell.i) + Math.abs(e.cell.j - t.cell.j);
              }

              function _(e, t) {
                return e[0] === t[0] && e[1] === t[1] ? 0 : e[0] > t[0] || e[0] === t[0] && e[1] > t[1] ? 1 : -1;
              }

              function S(e, t) {
                return e.cell.i === t.cell.i && e.cell.j === t.cell.j;
              }

              function w(e) {
                var _iterator19 = _createForOfIteratorHelper(o),
                    _step19;

                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var _t14 = _step19.value;
                    if (S(e, _t14)) return void (_t14.key = e.key);
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }

                o.push(e);
              }

              function C(e) {
                var t = [];

                var _iterator20 = _createForOfIteratorHelper(o),
                    _step20;

                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var _n14 = _step20.value;
                    S(e, _n14) || t.push(_n14);
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }

                o = t;
              }

              function I() {
                var e;

                var _iterator21 = _createForOfIteratorHelper(o),
                    _step21;

                try {
                  for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                    var _t15 = _step21.value;
                    (void 0 === e || _(_t15.key, e.key) < 0) && (e = _t15);
                  }
                } catch (err) {
                  _iterator21.e(err);
                } finally {
                  _iterator21.f();
                }

                return void 0 === e && (e = {
                  cell: {
                    i: -1,
                    j: -1
                  },
                  key: [s, s]
                }), e;
              }

              return l = {
                cell: t
              }, c = {
                cell: n
              }, function () {
                for (function () {
                  i = [];

                  for (var _t16 = 0; _t16 < e.height; _t16++) {
                    for (var _n15 = 0; _n15 < e.width; _n15++) {
                      var _e23 = {
                        cell: {
                          i: _n15,
                          j: _t16
                        }
                      };
                      i.push(_e23);
                    }
                  }

                  r = [], a = [], o = [], d = 0;

                  var _iterator22 = _createForOfIteratorHelper(i),
                      _step22;

                  try {
                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                      var _e24 = _step22.value;
                      h(_e24, s), g(_e24, s);
                    }
                  } catch (err) {
                    _iterator22.e(err);
                  } finally {
                    _iterator22.f();
                  }

                  g(c, 0);
                  var t = c;
                  t.key = [b(l, c), 0], o.push(t);
                }(), function () {
                  for (; _(I().key, f(l)) < 0 || v(l) > m(l);) {
                    var _e25 = I(),
                        _t17 = _e25,
                        _n16 = _e25.key,
                        _i10 = f(_t17);

                    if (_(_n16, _i10) < 0) _t17.key = _i10, w(_t17);else if (m(_t17) > v(_t17)) {
                      h(_t17, v(_t17)), C(_t17);

                      var _iterator23 = _createForOfIteratorHelper(E(_t17)),
                          _step23;

                      try {
                        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                          var _e26 = _step23.value;
                          S(_e26, c) || g(_e26, Math.min(v(_e26), A(_e26, _t17) + m(_t17))), p(_e26);
                        }
                      } catch (err) {
                        _iterator23.e(err);
                      } finally {
                        _iterator23.f();
                      }
                    } else {
                      var _e27 = m(_t17);

                      h(_t17, s);

                      var _n17 = E(_t17);

                      _n17.push(_t17);

                      var _iterator24 = _createForOfIteratorHelper(_n17),
                          _step24;

                      try {
                        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                          var _i11 = _step24.value;

                          if ((v(_i11) === A(_i11, _t17) + _e27 || v(_i11) === s && (A(_i11, _t17) === s || _e27 === s)) && !S(_i11, c)) {
                            var _e28 = void 0;

                            var _iterator25 = _createForOfIteratorHelper(y(_i11)),
                                _step25;

                            try {
                              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                                var _t18 = _step25.value;

                                var _n18 = A(_i11, _t18) + m(_t18);

                                _n18 > s && (_n18 = s), (void 0 === _e28 || _e28 > _n18) && (_e28 = _n18);
                              }
                            } catch (err) {
                              _iterator25.e(err);
                            } finally {
                              _iterator25.f();
                            }

                            g(_i11, _e28);
                          }

                          p(_i11);
                        }
                      } catch (err) {
                        _iterator24.e(err);
                      } finally {
                        _iterator24.f();
                      }
                    }
                  }
                }(); !S(l, c);) {
                  var _i9 = void 0,
                      _o8 = void 0;

                  var _iterator26 = _createForOfIteratorHelper(y(l)),
                      _step26;

                  try {
                    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                      var _e29 = _step26.value;

                      var _t19 = A(l, _e29) + m(_e29);

                      (void 0 === _o8 || _o8 > _t19) && (_o8 = _t19, _i9 = _e29);
                    }
                  } catch (err) {
                    _iterator26.e(err);
                  } finally {
                    _iterator26.f();
                  }

                  return l = _i9, _o8 >= s ? el(e, t, n) : Ps.getDirection(l.cell, t);
                }

                return 4;
              }();
            }(e, t, n);

        }

        4 !== _r8 && (Ys.addDirectionToPath(t, _r8, 3), void 0 === t.path && (t.path = []), 3 === t.path.length && t.path[0] === t.path[2] && Ps.isDirectionsOpposed(t.path[0], t.path[1]) && (_r8 = 4));

        var _a5 = Ws.now() - o;

        return _a5 > 10 && console.debug("Path found in: " + _a5), _r8;
      }
    }

    function el(e, t, n) {
      var i = n.i - t.i,
          o = n.j - t.j,
          r = 4;
      return Math.abs(i) > Math.abs(o) ? (i > 0 ? r = 1 : i < 0 && (r = 3), zs.isMovementTowardsTargetBlocked(e, t.i, t.j, r, n) && (o > 0 ? r = 2 : o < 0 && (r = 0))) : (o > 0 ? r = 2 : o < 0 && (r = 0), zs.isMovementTowardsTargetBlocked(e, t.i, t.j, r, n) && (i > 0 ? r = 1 : i < 0 && (r = 3))), zs.isMovementTowardsTargetBlocked(e, t.i, t.j, r, n) && (r = 4), r;
    }

    !function (e) {
      function t(e, t, n, i) {
        var o = Os.NONE;

        var _iterator27 = _createForOfIteratorHelper(Ls),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _r9 = _step27.value;

            var _a6 = Ps.getTargetGID(e, _r9, t);

            void 0 !== _a6 && i.data[_a6] !== n || (o |= _r9);
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }

        return o;
      }

      function n(e, t) {
        t.dynamicBlocks = [];

        for (var _e30 = 0; _e30 < t.height * t.width; _e30++) {
          t.dynamicBlocks[_e30] = 0;
        }

        var n = new Array();
        void 0 !== e && n.push(e), void 0 !== t.events && (n = n.concat(t.events));

        var _iterator28 = _createForOfIteratorHelper(n),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _e31 = _step28.value;

            var _n19 = Ys.getState(_e31);

            if (void 0 === _n19 || Ws.isEmpty(_n19.block) || _n19.block) {
              var _n20 = Ps.cellToGid(_e31, t.width);

              t.dynamicBlocks[_n20] = Ds.ALL;
            }
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }

      function i(e, t, n) {
        return void 0 !== e && e >= 0 && e < n.width * n.height && t.data[e] > n.tileset.maxGID;
      }

      e.loadMap = function (e, t, n) {
        cl.load(e + "", ws.MAP, function (i) {
          if (Ws.isEmpty(i)) console.error("Error while loading map: " + e), n();else try {
            var _e32 = JSON.parse(i);

            n(_e32);
          } catch (o) {
            "SyntaxError" === o.name ? console.error("Error while parsing map: " + e) : "TypeError" === o.name ? console.error("Error while reading map: " + e) : console.error(o), console.error(i), Vs.showError(t.getContext("2d")), n();
          }
        });
      }, e.renderUI = function (e, t, n, i, o, r, a) {
        if ((a || i.showGrid || i.showEditorGrid || i.showFocus || i.showBlocks || i.showOnTops) && (!a || i.showFPS || i.showCellNumbers || i.showFocus) && !Ws.isEmpty(i)) {
          if (!a && i.showBlocks && !Ws.isEmpty(e) && (!Ws.isEmpty(e.blocks) || !Ws.isEmpty(e.dynamicBlocks))) {
            n.save(), n.globalAlpha = .5, n.fillStyle = Us.Color.YELLOW, n.strokeStyle = Us.Color.BLACK, n.lineWidth = 2;

            var _i12 = Ws.isEmpty(e.blocks) ? Ds.NONE : e.blocks[r * e.width + o],
                _a7 = Ws.isEmpty(e.dynamicBlocks) ? Ds.NONE : e.dynamicBlocks[r * e.width + o];

            (_i12 > Ds.NONE || _a7 > Ds.NONE) && (_a7 > Ds.NONE && (n.fillStyle = Us.Color.GREEN), Ps.isBlockDirectionBlocked(_i12 | _a7, Ds.UP) && (n.beginPath(), n.moveTo(o * t.cellW, r * t.cellH), n.lineTo((o + .5) * t.cellW, (r + .2) * t.cellH), n.lineTo((o + 1) * t.cellW, r * t.cellH), n.fill(), n.stroke()), Ps.isBlockDirectionBlocked(_i12 | _a7, Ds.DOWN) && (n.beginPath(), n.moveTo(o * t.cellW, (r + 1) * t.cellH), n.lineTo((o + .5) * t.cellW, (r + .8) * t.cellH), n.lineTo((o + 1) * t.cellW, (r + 1) * t.cellH), n.fill(), n.stroke()), Ps.isBlockDirectionBlocked(_i12 | _a7, Ds.LEFT) && (n.beginPath(), n.moveTo(o * t.cellW, r * t.cellH), n.lineTo((o + .2) * t.cellW, (r + .5) * t.cellH), n.lineTo(o * t.cellW, (r + 1) * t.cellH), n.fill(), n.stroke()), Ps.isBlockDirectionBlocked(_i12 | _a7, Ds.RIGHT) && (n.beginPath(), n.moveTo((o + 1) * t.cellW, r * t.cellH), n.lineTo((o + .8) * t.cellW, (r + .5) * t.cellH), n.lineTo((o + 1) * t.cellW, (r + 1) * t.cellH), n.fill(), n.stroke())), n.restore();
          }

          if (!a && i.showOnTops && !Ws.isEmpty(e) && !Ws.isEmpty(e.tileset.onTop)) {
            var _i13 = Ps.cellToGid({
              i: o,
              j: r
            }, e.width);

            Ps.normalizeZIndex(e.tileset.onTop[_i13]) > 0 && (n.save(), n.globalAlpha = .6, n.beginPath(), n.fillStyle = Us.Color.AQUA, n.arc(Math.floor((o + .5) * t.cellW), Math.floor((r + .5) * t.cellH), 10, 0, Us.DOUBLE_PI), n.closePath(), n.fill(), n.fillStyle = Us.Color.DARKBLUE, n.font = "bold 14px Arial", n.fillText("" + e.tileset.onTop[_i13], (o + .35) * t.cellW, (r + .65) * t.cellH), n.restore());
          }

          !a && i.showGrid && (n.strokeStyle = Us.Color.RED, n.strokeRect(o * t.cellW, r * t.cellH, t.cellW, t.cellH)), !a && i.showEditorGrid && (n.save(), n.globalAlpha = .4, n.strokeStyle = Us.Color.GREY, n.strokeRect(o * t.cellW, r * t.cellH, t.cellW, t.cellH), n.restore()), !a && i.showCellNumbers && (n.fillStyle = Us.Color.RED, n.font = "bold 10px Arial", n.fillText(o + "," + r, o * t.cellW + 1, r * t.cellH + 10));
        }
      }, e.renderGlobalUI = function (e, t, n) {
        if (n.enableSelection && (void 0 !== n.selectCellStart || void 0 !== n.selectEventCell)) {
          var _i14, _o9;

          t.save();
          var _r10 = e.cellW,
              _a8 = e.cellH;

          if (void 0 !== n.selectCellStart) {
            if (_i14 = n.selectCellStart.i * e.cellW, _o9 = n.selectCellStart.j * e.cellH, void 0 !== n.selectCellEnd) {
              var _t20 = n.selectCellEnd.i * e.cellW,
                  _s5 = n.selectCellEnd.j * e.cellH;

              _i14 > _t20 ? (_r10 = _i14 - _t20, _i14 = _t20) : _r10 = _t20 - _i14, _o9 > _s5 ? (_a8 = _o9 - _s5, _o9 = _s5) : _a8 = _s5 - _o9, _r10 += e.cellW, _a8 += e.cellH;
            }

            t.strokeStyle = Us.Color.RED, t.lineWidth = 3;
          } else _i14 = n.selectEventCell.i * e.cellW, _o9 = n.selectEventCell.j * e.cellH, t.strokeStyle = Us.Color.LIME, t.lineWidth = 2;

          t.strokeRect(_i14, _o9, _r10, _a8), t.restore();
        }
      }, e.resizeMap = function (e, t, n) {
        var i = e.width,
            o = t,
            r = e.height,
            a = n;
        if (i === o && r === a || Ws.isEmpty(e)) return;
        var s,
            l,
            c = Math.min(i, o);
        if (o < i) s = i - o;else {
          l = [];

          for (var _e33 = 0; _e33 < o - i; _e33++) {
            l[_e33] = null;
          }
        }

        for (var _t21 = 0; _t21 < e.layers.length; _t21++) {
          var _n21 = e.layers[_t21];

          if (void 0 !== _n21.data) {
            if (i !== o) for (var _e34 = 0; _e34 < r; _e34++) {
              var _n21$data;

              void 0 !== s ? _n21.data.splice(c + _e34 * o, s) : void 0 !== l ? (_n21$data = _n21.data).splice.apply(_n21$data, [c + _e34 * o, 0].concat(_toConsumableArray(l))) : console.error("Unexpected case");
            }

            if (r > a && (_n21.data.length = o * a), r < a) {
              var _e35 = [];

              for (var _t22 = 0; _t22 < o - i; _t22++) {
                _e35[_t22] = void 0;
              }

              for (var _t23 = i; _t23 < o; _t23++) {
                _n21.data.concat(_e35);
              }
            }
          }
        }

        e.height = n, e.width = t;
      }, e.shiftMap = function (e, t, n) {
        t < -e.width && (t = 1 - e.width), n < -e.height && (n = 1 - e.height);
        var i = e.height;
        e.width += t, e.height += n;
        var o = [];
        if (t > 0) for (var _e36 = 0; _e36 < t; _e36++) {
          o[_e36] = null;
        }
        var r = [];
        if (n > 0) for (var _t24 = 0; _t24 < e.width; _t24++) {
          r[_t24] = null;
        }

        for (var _a9 = 0; _a9 < e.layers.length; _a9++) {
          var _s6 = e.layers[_a9];

          if (void 0 !== _s6.data) {
            if (t > 0) for (var _t25 = 0; _t25 < i; _t25++) {
              var _s6$data;

              (_s6$data = _s6.data).splice.apply(_s6$data, [_t25 * e.width, 0].concat(o));
            } else if (t < 0) for (var _n22 = 0; _n22 < i; _n22++) {
              _s6.data.splice(_n22 * e.width, -t);
            }
            if (n > 0) for (var _e37 = 0; _e37 < n; _e37++) {
              var _s6$data2;

              (_s6$data2 = _s6.data).splice.apply(_s6$data2, [0, 0].concat(r));
            } else n < 0 && _s6.data.splice(0, -n * e.width);
          }
        }

        var _iterator29 = _createForOfIteratorHelper(e.events),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _i15 = _step29.value;
            _i15.i += t, _i15.j += n;
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }, e.initTransientData = function (o, r) {
        var a,
            s = o.map,
            l = o.grid;
        o instanceof Xs && (a = o.hero), Gs.initTransientData(s.tileset, l), function (n, i) {
          Ws.isEmpty(n.autotilesets) ? i() : Gs.initTransientDataAutotiles(Object.values(n.autotilesets)).then(function () {
            for (var _i16 = 0; _i16 < n.layers.length; _i16++) {
              var _o10 = n.layers[_i16];

              if (void 0 !== _o10.data) {
                _o10.autotileData = [];

                for (var _i17 = 0; _i17 < _o10.data.length; _i17++) {
                  if (e.isThisAnAutotileCell(_i17, _o10, n)) {
                    var _e38 = t(_i17, {
                      w: n.width,
                      h: n.height
                    }, _o10.data[_i17], _o10);

                    _o10.autotileData.push(_e38);
                  } else _o10.autotileData.push(null);
                }
              }
            }

            i();
          });
        }(s, function () {
          if (function (e) {
            if (e.blocks = [], !Ws.isEmpty(e.layers) && !Ws.isEmpty(e.tileset.blocks)) {
              for (var _t26 = 0; _t26 < e.height * e.width; _t26++) {
                e.blocks[_t26] = 0;
              }

              for (var _t27 = 0; _t27 < e.layers.length; _t27++) {
                var _n23 = e.layers[_t27];
                if (void 0 !== _n23.data) for (var _t28 = 0; _t28 < _n23.data.length; _t28++) {
                  var _o11 = void 0;

                  if (i(_t28, _n23, e)) {
                    var _i18 = _n23.data[_t28];
                    void 0 === e.autotilesets || void 0 === e.autotilesets[_i18] ? console.warn("Autotile: NaN" + _t28 + " in map: " + e.id) : _o11 = e.autotilesets[_i18].blocked ? Ds.ALL : Ds.NONE;
                  } else {
                    var _i19 = _n23.data[_t28];
                    if (null === _i19 || _i19 < 0 || _i19 >= e.tileset.blocks.length) continue;
                    if (void 0 !== e.tileset.onTop && Ps.normalizeZIndex(e.tileset.onTop[_i19]) > 0) continue;
                    _o11 = e.tileset.blocks[_i19];
                  }

                  void 0 === _o11 && (_o11 = Ds.NONE), e.blocks[_t28] = _o11;
                }
              }
            }
          }(s), n(a, s), Ws.isEmpty(s.events)) s.events = [];else {
            s.maxEventId = 0;

            var _iterator30 = _createForOfIteratorHelper(s.events),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var _e39 = _step30.value;
                _e39.id > s.maxEventId && (s.maxEventId = _e39.id), Ys.initTransientData(s, l, _e39);
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }
          }
          s.width = parseInt(s.width + ""), s.height = parseInt(s.height + ""), r();
        });
      }, e.updateDynamicData = function (e, t) {
        n(e, t);
      }, e.getAutotileProximityValue = t, e.isMovementTowardsTargetBlocked = function (e, t, n, i, o) {
        var r = Ps.getDirectionTarget({
          i: t,
          j: n
        }, i),
            a = !1;
        return void 0 !== o && 4 === Ps.getDirection(r, o) && (a = !0), Ps.isMovementBlocked(e, t, n, i, a);
      }, e.isThisAnAutotileCell = i;
    }(zs || (zs = {})), function (e) {
      function t(e, t) {
        var n = e.states[t].condition;
        return n in Cs ? Cs[n](e) : (console.error('Condition not found: "' + n + '", on event: ' + e.name), !1);
      }

      function n(e, t, n, i) {
        return e.newTarget = {
          i: t,
          j: n
        }, e.newOnTargetReached = i, !0;
      }

      function i(e) {
        e.path = void 0, e.movementStartTime = void 0, e.movementDirection = void 0, e.target = void 0;
      }

      function o(e) {
        var t = r(e);

        if (void 0 !== t) {
          var _e40 = t.mSpeed;
          if (!Ws.isEmpty(_e40)) return _e40;
        }

        return Us.MEDIUM_MSPEED;
      }

      function r(e) {
        if (void 0 !== e && void 0 !== e.currentState && void 0 !== e.states) return e.states[e.currentState];
      }

      function a(e, t) {
        var n = t.states[t.currentState].direction;
        void 0 === n && (n = 4);
        var i = Ps.getNextAbsoluteDirection(n, 0),
            o = zs.isMovementTowardsTargetBlocked(e, t.i, t.j, i) ? 0 : 3,
            r = zs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
            a = zs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
            s = o + r + a + (zs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 1),
            l = 4;

        if (s > 0) {
          var _e41 = Ps.getRandomInteger(1, s);

          _e41 -= o, _e41 <= 0 ? l = i : (_e41 -= r, _e41 <= 0 || (_e41 -= a), l = 4);
        }

        return Ps.getDirectionTarget(t, l);
      }

      e.update = function (e, i, o, r, s) {
        var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        if (Ws.isEmpty(e.movementStartTime) || (e.movementStartTime += l), !Ws.isEmpty(e.states)) {
          var _s7 = -1;

          for (var _n24 = e.states.length - 1; _n24 >= 0; _n24--) {
            if (t(e, _n24)) {
              _s7 = _n24;
              break;
            }
          }

          if (e.currentState = _s7, e === o) return;
          if (-1 !== e.currentState && void 0 !== e.states[e.currentState].movement && void 0 === e.movementStartTime && function (e, t) {
            var i,
                _o13,
                r = t.states[t.currentState].movement;

            switch (r.strategy) {
              case "target":
                void 0 === r.target && (console.warn("event: " + t.id + " has strategy=target, but target is undefined. Will fallback to random"), r.target = a(e, t)), i = r.target;
                break;

              case "event":
                var _s8;

                var _iterator31 = _createForOfIteratorHelper(e.events),
                    _step31;

                try {
                  for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                    var _t29 = _step31.value;
                    _t29.id === r.eventId && (_s8 = _t29);
                  }
                } catch (err) {
                  _iterator31.e(err);
                } finally {
                  _iterator31.f();
                }

                if (void 0 === _s8) return void console.error("Cannot find event: " + r.eventId);

                var _l7 = Zs(e, t, _s8, r.pathfinder);

                i = Ps.getDirectionTarget(t, _l7), _o13 = function o(i) {
                  var a = Zs(e, t, _s8, r.pathfinder);

                  if (4 !== a) {
                    var _e42 = Ps.getDirectionTarget(t, a);

                    n(t, _e42.i, _e42.j, _o13);
                  } else setTimeout(function () {
                    _o13(i);
                  }, 1e3);
                };
                break;

              case "random":
                i = a(e, t), _o13 = function _o12() {
                  setTimeout(function () {
                    var i = a(e, t);
                    n(t, i.i, i.j, _o13);
                  }, r.pause);
                };
                break;

              default:
                return void console.error("Unexpected movement strategy: " + r.strategy + " for event: " + t.id);
            }

            void 0 !== i && n(t, i.i, i.j, _o13);
          }(i.getMap(), e), function (e, t, n, i) {
            var o;

            switch (e.states[t].trigger) {
              case 0:
                if (void 0 === i || i.i !== e.i || i.j !== e.j) {
                  o = !1;
                  break;
                }

              case 1:
                var _r11 = Math.abs(e.i - n.i),
                    _a10 = Math.abs(e.j - n.j);

                o = 0 === _r11 && _a10 <= 1 || _r11 <= 1 && 0 === _a10;
                break;

              case 2:
                o = e.i === n.i && e.j === n.j;
                break;

              case 3:
                o = !0;
                break;

              default:
                console.error("Unexpected case: " + e.states[t].trigger), o = !1;
            }

            return o = function (e, t) {
              return 1 !== e.trigger && 2 !== e.trigger || (t ? e.alreadyTriggered ? t = !1 : e.alreadyTriggered = !0 : e.alreadyTriggered = !1), t;
            }(e.states[t], o), o;
          }(e, e.currentState, o, r)) return e.currentState;
        }
      }, e.startMovement = n, e.stopMovement = i, e.manageMovements = function e(t, n, r, a, s) {
        var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var c = !1;

        if (!Ws.isEmpty(r.movementStartTime)) {
          if (0 === l && (l = Ws.now() - r.movementStartTime), void 0 === r.target) return console.error("No target set for movement"), !0;

          var _e43,
              _d = r.target,
              _u = function (e, t, n) {
            var i = 4,
                o = Ps.cellToGid(n, e.width),
                r = Ps.getMapStaticBlock(e, o),
                a = Ps.getMapDynamicBlock(e, o);
            if (Ps.isBlockDirectionBlocked(r, Ds.ALL) && !Ps.isBlockDirectionBlocked(a, Ds.ALL) || o < 0 || o >= e.width * e.height) i = 4;else if (Ws.isEmpty(t.movementDirection) || 4 !== t.movementDirection) {
              try {
                i = Zs(e, t, n);
              } catch (t) {
                console.error(t);
              }

              var _r12 = Ps.getDirectionTarget(t, i),
                  _a11 = Ps.cellToGid(_r12, e.width),
                  _s9 = Ps.getMapDynamicBlock(e, _a11);

              Ps.isDirectionEnumBlocked(_s9, Ps.getOpposedDirections(i)) && (i = 4, _a11 === o && void 0 !== t.onTargetReached && t.onTargetReached(n));
            } else i = t.movementDirection;
            return i;
          }(t, r, _d),
              _f = 0,
              _p = 0;

          switch (_u) {
            case 3:
              _f = Math.min(n.cellW, Math.floor(o(r) * l)), _e43 = _f, _f *= -1;
              break;

            case 1:
              _f = Math.min(n.cellW, Math.floor(o(r) * l)), _e43 = _f;
              break;

            case 0:
              _p = Math.min(n.cellH, Math.floor(o(r) * l)), _e43 = _p, _p *= -1;
              break;

            case 2:
              _p = Math.min(n.cellH, Math.floor(o(r) * l)), _e43 = _p;
              break;

            case 4:
              i(r), void 0 !== r.onTargetReached && r.onTargetReached(_d);
          }

          if (4 !== _u && (void 0 !== r.states[r.currentState] && (r.states[r.currentState].direction = _u), r.movementDirection = _u, r.position = {
            x: r.i * n.cellW + _f,
            y: r.j * n.cellH + _p
          }, a(_f, _p), _e43 === n.cellW)) {
            c = !0, r.movementDirection = void 0, r.movementStartTime = Ws.now(), l -= Math.floor(_e43 / o(r));

            var _t30 = n.mapCanvasToCell(r.position);

            r.i = _t30.i, r.j = _t30.j, s(_f, _p);

            var _a12 = n.mapCellToCanvas(r.target);

            (!Ws.isEmpty(r.newTarget) || r.position.x === _a12.x && r.position.y === _a12.y) && i(r);
          }
        }

        return !Ws.isEmpty(r.newTarget) && Ws.isEmpty(r.movementStartTime) && (r.target = r.newTarget, r.onTargetReached = r.newOnTargetReached, r.newTarget = void 0, r.newOnTargetReached = void 0, r.movementStartTime = Ws.now(), c = c || e(t, n, r, a, s, l)), c;
      }, e.addDirectionToPath = function (e, t, n) {
        void 0 === e.path && (e.path = []), e.path[e.path.length - 1] !== t && e.path.push(t), !Ws.isEmpty(n) && e.path.length > n && e.path.shift();
      }, e.render = function (e, t, n, i, o) {
        var a,
            s = r(t);
        if (void 0 !== s) if (Ws.isEmpty(s.charaset) ? Ws.isEmpty(s.gid) || console.warn("Not implemented") : a = cl.loadImageFromCache(s.charaset, ws.CHAR), void 0 !== t.position) {
          if (i || (n.save(), n.strokeStyle = Us.Color.GREEN, n.lineWidth = 2, n.strokeRect(t.position.x, t.position.y, e.cellW, e.cellH)), void 0 !== a) {
            var _r13 = Math.floor(a.width / 4),
                _l8 = Math.floor(a.height / 4),
                _c3 = _r13,
                _d2 = _l8;

            i || (_l8 > _r13 ? (_c3 = Math.floor(_r13 * e.cellH / _l8), _d2 = e.cellH) : (_d2 = Math.floor(_l8 * e.cellW / _r13), _c3 = e.cellW));

            var _u2,
                _f2 = 0;

            if (_u2 = Ws.isEmpty(s.frequencyVal) ? Us.MEDIUM_FREQUENCY : s.frequencyVal, Ws.isEmpty(t.target)) {
              if (1 === s.rotation || 2 === s.rotation) {
                Ws.isEmpty(s.animationStartTime) && (s.animationStartTime = Ws.now());

                var _e44 = Ws.now() - s.animationStartTime;

                _u2 /= 4;

                var _t31 = Math.floor(_e44 * _u2 % 4);

                2 === s.rotation && (3 === _t31 ? _t31 = 1 : 1 === _t31 && (_t31 = 3)), s.direction = _t31;
              } else s.animationStartTime = void 0;
            } else {
              Ws.isEmpty(s.animationStartTime) && (s.animationStartTime = Ws.now());

              var _e45 = Ws.now() - s.animationStartTime;

              _f2 = _r13 * Math.floor(_e45 * _u2 % 4);
            }
            var _p2 = 0;

            switch (s.direction) {
              case 3:
                _p2 = _l8;
                break;

              case 1:
                _p2 = 2 * _l8;
                break;

              case 0:
                _p2 = 3 * _l8;
            }

            var _h = t.position.x + Math.floor((e.cellW - _c3) / 2),
                _g = t.position.y + Math.floor(-_d2 + e.cellH);

            if (n.save(), Ws.isEmpty(s.opacity) || 100 === s.opacity || (n.globalAlpha = s.opacity / 100), void 0 !== o && o.i === t.i && o.j === t.j) {
              var _t32 = e.mapCellToCanvas(o);

              n.save(), n.beginPath(), n.fillStyle = Us.Color.YELLOW, n.scale(2, 1), n.arc(Math.floor((_t32.x + e.cellW / 2) / 2), _t32.y + e.cellH - 4, 8, 0, Us.DOUBLE_PI), n.closePath(), n.globalAlpha = .4, n.fill(), n.restore(), n.shadowColor = Us.Color.YELLOW, n.shadowBlur = 8;
            }

            n.drawImage(a, _f2, _p2, _r13, _l8, _h, _g, _c3, _d2), n.restore();
          }
        } else console.error("Event position undefined: " + t);
      }, e.isVisible = function (e, t, n, i, o, a, s, l) {
        return e.i === a && e.j === s && !!Hs.isVisible(r(e), l) && e.i >= i && e.i <= o && e.j >= t && e.j <= n;
      }, e.saveMem = function (e, t, n) {
        Ws.isEmpty(e.memory) && (e.memory = {}), e.memory[t] = n;
      }, e.loadMem = function (e, t) {
        if (!Ws.isEmpty(e.memory)) return e.memory[t];
      }, e.deleteMem = function (e, t) {
        Ws.isEmpty(e.memory) || delete e.memory[t];
      }, e.initTransientData = function (t, n, o) {
        if (Hs.initTransientData(n, e.getState(o)), void 0 !== o) return i(o), o.position = {
          x: o.i * n.cellW,
          y: o.j * n.cellH
        }, o;
      }, e.getState = r;
    }(Ys || (Ys = {}));

    var tl = /*#__PURE__*/function () {
      function tl(e, t, n) {
        _classCallCheck(this, tl);

        this.event = e, this.hero = t, this.scene = n;
      }

      _createClass(tl, [{
        key: "getConfig",
        value: function getConfig() {
          return void 0 !== this.scene.save && void 0 !== this.scene.save.config ? this.scene.save.config : js.getConfig();
        }
      }, {
        key: "showSimpleDialog",
        value: function showSimpleDialog(e, t) {
          var n = this.getConfig();
          return Fs.showSimpleDialog(this.event, this.scene, this.hero, e, n, t), !0;
        }
      }, {
        key: "showComplexDialog",
        value: function showComplexDialog(e, t) {
          var n = this.getConfig();
          return Fs.showComplexDialog(this.event, this.scene, this.hero, e, n, this.scene.dialogScriptLauncher, t), !0;
        }
      }, {
        key: "moveToTarget",
        value: function moveToTarget(e, t, n) {
          Ys.startMovement(e, t.i, t.j, n);
        }
      }, {
        key: "stepToTarget",
        value: function stepToTarget(e, t, n) {
          var i = Ps.getDirection(t, this.event);
          this.stepToDirection(e, i, n);
        }
      }, {
        key: "stepToDirection",
        value: function stepToDirection(e, t, n) {
          var i = Ps.moveToDirection(e, t);
          this.moveToTarget(e, i, n);
        }
      }, {
        key: "stepFromTarget",
        value: function stepFromTarget(e, t, n) {
          var i = Ps.getDirection(t, e);
          i = Ps.getOpposedDirections(i), this.stepToDirection(e, i, n);
        }
      }, {
        key: "getEventById",
        value: function getEventById(e) {
          return this.scene.map.events.find(function (t, n, i) {
            return t.id === e;
          });
        }
      }, {
        key: "wait",
        value: function wait(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

          var n = function n(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            return new Promise(e <= 0 ? function (e, t) {
              e(!0);
            } : t ? function (t, i) {
              n(e - 100, !0).then(function () {
                setTimeout(function () {
                  console.log("TIMER: " + e), t(!0);
                }, 97);
              });
            } : function (t, n) {
              setTimeout(function () {
                t(!0);
              }, e);
            });
          };

          return n(e, t);
        }
      }, {
        key: "saveMem",
        value: function saveMem(e, t) {
          Ys.saveMem(this.event, e, t);
        }
      }, {
        key: "loadMem",
        value: function loadMem(e) {
          return Ys.loadMem(this.event, e);
        }
      }, {
        key: "incrementStateVar",
        value: function incrementStateVar() {
          var e = this.loadMem(bs),
              t = 0;
          return void 0 !== e && (t = Number.parseInt(e), Number.isNaN(t) && (t = 0)), t++, this.saveMem(bs, t + ""), t;
        }
      }, {
        key: "setStateVar",
        value: function setStateVar(e) {
          this.saveMem(bs, e + "");
        }
      }, {
        key: "goToMap",
        value: function goToMap(e, t) {
          var n = this.scene;
          qs.loadMapSave(n, e, t, function () {
            n.moveFocusToTarget(t), Ys.stopMovement(n.hero);
          });
        }
      }, {
        key: "changeSkin",
        value: function changeSkin(e) {
          this.scene.save.config.skin = e;
        }
      }]);

      return tl;
    }();

    tl.tooltip = "no description provided";
    var nl = "msg",
        il = "dlg";

    var ol = /*#__PURE__*/function (_tl) {
      _inherits(ol, _tl);

      var _super2 = _createSuper(ol);

      function ol(e, t, n) {
        _classCallCheck(this, ol);

        return _super2.call(this, e, t, n);
      }

      _createClass(ol, [{
        key: "speak",
        value: function speak() {
          var e = this.loadMem(nl + (this.event.currentState + 1));
          Ws.isEmpty(e) && (e = this.loadMem(nl)), this.showSimpleDialog(e, ks);
        }
      }, {
        key: "dialog",
        value: function dialog() {
          var e = this.event.states[this.event.currentState];
          void 0 !== e.dialog && this.showComplexDialog(e.dialog, ks);
        }
      }, {
        key: "flee",
        value: function flee() {
          var e = this;
          return new Promise(function (t, n) {
            e.stepFromTarget(e.hero, e.event, t);
          });
        }
      }]);

      return ol;
    }(tl);

    ol.tooltip = "Basic script with simple actions";

    var rl = /*#__PURE__*/function (_tl2) {
      _inherits(rl, _tl2);

      var _super3 = _createSuper(rl);

      function rl() {
        _classCallCheck(this, rl);

        return _super3.apply(this, arguments);
      }

      _createClass(rl, [{
        key: "faceTheHero",
        value: function faceTheHero() {
          var e = this.getEventById(rl.eventId);
          void 0 !== e ? e.states[e.currentState].direction = Ps.getDirection(this.hero, e) : console.error("Cannot find Ann! id:" + rl.eventId);
        }
      }]);

      return rl;
    }(tl);

    rl.eventId = 2, rl.tooltip = "Script for Ann, in the farm map";

    var al = /*#__PURE__*/function (_tl3) {
      _inherits(al, _tl3);

      var _super4 = _createSuper(al);

      function al() {
        _classCallCheck(this, al);

        return _super4.apply(this, arguments);
      }

      _createClass(al, [{
        key: "triggerQuest",
        value: function triggerQuest() {
          this.setStateVar(1);
        }
      }]);

      return al;
    }(tl);

    al.tooltip = "Script for Asgan, in the woods map";

    var sl = /*#__PURE__*/function (_tl4) {
      _inherits(sl, _tl4);

      var _super5 = _createSuper(sl);

      function sl() {
        _classCallCheck(this, sl);

        return _super5.apply(this, arguments);
      }

      _createClass(sl, [{
        key: "forest",
        value: function forest() {
          this.goToMap("1", {
            i: 21,
            j: 1
          });
        }
      }, {
        key: "farm",
        value: function farm() {
          this.goToMap("0", {
            i: 15,
            j: 21
          }), this.hero.movementDirection = 0;
        }
      }, {
        key: "farmOutsideHouse",
        value: function farmOutsideHouse() {
          this.goToMap("0", {
            i: 13,
            j: 16
          }), this.hero.movementDirection = 2;
        }
      }, {
        key: "house",
        value: function house() {
          this.goToMap("3", {
            i: 13,
            j: 12
          }), this.hero.movementDirection = 2;
        }
      }]);

      return sl;
    }(tl);

    sl.tooltip = "Provide transportation from one map to another";

    var ll = /*#__PURE__*/function (_tl5) {
      _inherits(ll, _tl5);

      var _super6 = _createSuper(ll);

      function ll() {
        _classCallCheck(this, ll);

        return _super6.apply(this, arguments);
      }

      _createClass(ll, [{
        key: "testAction",
        value: function testAction() {
          this.showSimpleDialog("2", ks);
        }
      }, {
        key: "giantTest",
        value: function giantTest() {
          this.showSimpleDialog("4", ks);
          var e = this;
          this.wait(1e3).then(function () {
            e.stepFromTarget(e.event, e.hero);
          }), this.incrementStateVar();
        }
      }, {
        key: "giantTest2",
        value: function giantTest2() {
          this.showSimpleDialog("5", ks);
          var e = this;
          this.wait(1e3).then(function () {
            e.stepFromTarget(e.event, e.hero);
          }), this.incrementStateVar();
        }
      }, {
        key: "giantTest3",
        value: function giantTest3() {
          this.showSimpleDialog("6", ks);
          var e = this;
          this.moveToTarget(e.event, {
            i: 2,
            j: 4
          }, function () {
            e.setStateVar(0);
          });
        }
      }, {
        key: "move3ToRight",
        value: function move3ToRight() {
          this.moveToTarget(this.event, {
            i: this.event.i + 3,
            j: this.event.j
          });
        }
      }]);

      return ll;
    }(tl);

    var cl;

    function dl(e) {
      var t = js.DEFAULT_ID;

      var _iterator32 = _createForOfIteratorHelper(e),
          _step32;

      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var _n25 = _step32.value;
          _n25 > t && (t = _n25);
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }

      return t + 1;
    }

    function ul(e) {
      if (void 0 !== e.script) {
        ps.set(e, "actions", []);

        var _iterator33 = _createForOfIteratorHelper(cl.listScriptActions(e.script)),
            _step33;

        try {
          for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
            var _t33 = _step33.value;
            e.actions.push(_t33);
          }
        } catch (err) {
          _iterator33.e(err);
        } finally {
          _iterator33.f();
        }
      }
    }

    ll.tooltip = "Script for tests", function (t) {
      var n = base_path + "data/",
          i = base_path + "assets/",
          o = base_path + "assetlist/",
          r = base_path + "edit/",
          a = "@";
      var s = new Map();
      var l,
          c = new Map(),
          d = new Map();

      function u(e, t, n) {
        p(Us.RequestType.GET, void 0, e, t, n);
      }

      function f(e, t, n) {
        p(Us.RequestType.POST, t, e, n);
      }

      function p(e, t, n, i, o) {
        var r = new XMLHttpRequest();
        r.onload = function (e) {
          i(this.responseText);
        }, r.onerror = function (e) {
          console.error("Error for request to: " + n), console.error(e), i();
        }, r.ontimeout = function () {
          console.error("Timeout for request to: " + n), i();
        }, r.open(e, n, !0);

        try {
          void 0 !== o && r.setRequestHeader("lang", o), Ws.isEmpty(t) || e !== Us.RequestType.POST ? r.send() : r.send(t);
        } catch (e) {
          "NetworkError" === e.name ? console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files") : (console.error(e), console.trace()), i();
        }
      }

      function h(e, t, o, r) {
        Ws.isEmpty(e) && console.error("Trying to load empty file!");

        var l = function (e, t) {
          var o;

          switch (t) {
            case ws.CHAR:
            case ws.FACE:
            case ws.SKIN:
            case ws.PICTURE:
            case ws.TILE:
            case ws.AUTOTILE:
              o = i;
              break;

            case ws.MAP:
            case ws.SAVE:
            case ws.STRING:
            case ws.DIALOG:
            case ws.GENERIC_MESSAGE:
            case ws.TILESET:
            case ws.AUTOTILESET:
              o = n;
              break;

            default:
              console.error("Unexpected resource type"), console.trace();
          }

          return o + t + "/" + e;
        }(e, t);

        if (void 0 === l) return console.error("Error while loading file: " + e + "/" + t), void o();

        switch (t) {
          case ws.AUTOTILE:
          case ws.CHAR:
          case ws.FACE:
          case ws.SKIN:
          case ws.TILE:
          case ws.PICTURE:
            var _n26 = s.get(t + a + e);

            void 0 !== _n26 ? o(_n26) : (_n26 = new Image(), _n26.onload = function () {
              s.set(t + a + e, _n26), o(_n26);
            }, _n26.src = l);
            break;

          case ws.AUTOTILESET:
          case ws.MAP:
          case ws.SAVE:
          case ws.STRING:
          case ws.DIALOG:
          case ws.GENERIC_MESSAGE:
          case ws.TILESET:
            u(l, o, r);
            break;

          default:
            console.error("Unexpected resource type"), console.trace(), o(void 0);
        }
      }

      function g(e, t) {
        var n = s.get(t + a + e);
        return void 0 === n && h(e, t, function (n) {
          void 0 === n || "string" == typeof n ? console.error("Error while reading image: " + e) : s.set(t + a + e, n);
        }), n;
      }

      t.loadProperties = function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "l4w";
        c.has(t) ? e(c.get(t)) : u(n + ws.CONFIGURATION + "/" + t + ".properties", function (n) {
          var i;
          void 0 !== n ? (i = function (e) {
            var t = new Map(),
                n = e.split("\n");

            for (var i = 0; i < n.length; i++) {
              var _e46 = n[i].trim();

              if ("" !== _e46 && 0 !== _e46.indexOf("#")) {
                var _n27 = _e46.split("="),
                    _o14 = +_n27[1];

                isNaN(_o14) ? t.has(_n27[1]) ? t.set(_n27[0], t.get(_n27[1])) : console.error("Error parsing properties file at line " + i + ": " + _o14) : t.set(_n27[0], _o14);
              }
            }

            return t;
          }(n), c.set(t, i)) : i = new Map(), e(i);
        });
      }, t.sendGETRequest = u, t.sendPOSTRequest = f, t.load = h, t.loadImageFromCache = g, t.loadDefaultImage = function (e) {
        return g("404.png", e);
      }, t.save = function (e, t, n, i) {
        var o = function (e, t) {
          return r + t + "/" + e;
        }(e, n);

        f(o, t, function (e) {
          void 0 !== e ? n === ws.STRING || n === ws.DIALOG || n === ws.GENERIC_MESSAGE ? i(e, !0) : i(void 0, !0) : (console.error("Empty response for: " + o), i(void 0, !1));
        });
      }, t.listResources = function (e, t) {
        u(o + e, function (e) {
          if (void 0 !== e) {
            var _n28 = JSON.parse(e);

            if (void 0 !== _n28) return void t(_n28);
          }

          console.error("Empty response from " + o), t([]);
        });
      }, t.listScriptClasses = function () {
        if (void 0 !== l) return l;
        var t = Object.keys(e).filter(function (t) {
          try {
            return e[t].prototype instanceof tl;
          } catch (e) {
            return !1;
          }
        }),
            n = new Map();

        var _iterator34 = _createForOfIteratorHelper(t),
            _step34;

        try {
          for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
            var _i20 = _step34.value;
            n.set(_i20, e[_i20].tooltip);
          }
        } catch (err) {
          _iterator34.e(err);
        } finally {
          _iterator34.f();
        }

        return l = n, n;
      }, t.listScriptActions = function (t) {
        if (d.has(t)) return d.get(t);
        var n = new e[t](void 0, void 0, void 0),
            i = Object.getOwnPropertyNames(Object.getPrototypeOf(n)).filter(function (e) {
          try {
            return "constructor" !== e && !Ws.isEmpty(e) && "function" == typeof n[e];
          } catch (e) {
            return !1;
          }
        });
        return d.set(t, i), i;
      }, t.listEventStateConditions = function () {
        return Object.keys(Cs);
      };
    }(cl || (cl = {}));
    var fl = ps.extend({
      name: "dialog-editor",
      props: {
        node: {
          type: Object,
          required: !0
        },
        dialog: {
          type: Object,
          required: !0
        },
        disconnectedNodes: {
          type: Array,
          required: !0
        },
        nodeIds: {
          type: Array,
          required: !0
        },
        edgeIds: {
          type: Array,
          required: !0
        },
        edgeConditions: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        edgeScripts: {
          type: Map,
          "default": function _default() {
            return new Map();
          }
        },
        edgeActions: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        faces: {
          type: Array,
          "default": function _default() {
            return [];
          }
        }
      },
      mounted: function mounted() {
        this.$root.$on("update-focus", this.updateFocus);

        var _iterator35 = _createForOfIteratorHelper(cl.listEventStateConditions()),
            _step35;

        try {
          for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
            var _e48 = _step35.value;
            this.edgeConditions.push(_e48);
          }
        } catch (err) {
          _iterator35.e(err);
        } finally {
          _iterator35.f();
        }

        var _iterator36 = _createForOfIteratorHelper(cl.listScriptClasses()),
            _step36;

        try {
          for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
            var _e49 = _step36.value;
            this.edgeScripts.set(_e49[0], _e49[1]);
          }
        } catch (err) {
          _iterator36.e(err);
        } finally {
          _iterator36.f();
        }

        if (void 0 !== this.node.edges) {
          var _iterator37 = _createForOfIteratorHelper(this.node.edges),
              _step37;

          try {
            for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
              var _e47 = _step37.value;
              ul(_e47);
            }
          } catch (err) {
            _iterator37.e(err);
          } finally {
            _iterator37.f();
          }
        }

        var e = this;
        cl.listResources(ws.FACE, function (t) {
          if (void 0 !== t) {
            var _iterator38 = _createForOfIteratorHelper(t),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var _n29 = _step38.value;
                e.faces.push(_n29);
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
          }
        });
      },
      methods: {
        addEdge: function addEdge() {
          var _this2 = this;

          void 0 === this.node.edgeIds && ps.set(this.node, "edgeIds", []), void 0 === this.node.edges && ps.set(this.node, "edges", []);
          var e = dl(this.edgeIds);
          this.node.edgeIds.push(e), this.node.edges.push(js.getDialogEdge(e)), this.edgeIds.push(e), this.$nextTick(function () {
            void 0 !== _this2.$refs.dialogEdgeMessage && void 0 === _this2.node.edges[_this2.node.edges.length - 1].message && _this2.$refs.dialogEdgeMessage[_this2.node.edges.length - 1].focus();
          });
        },
        deleteEdge: function deleteEdge(e) {
          this.node.edgeIds.splice(this.node.edgeIds.indexOf(e.id), 1), this.node.edges.splice(this.node.edges.indexOf(e), 1);
        },
        addNode: function addNode(e) {
          var t = dl(this.nodeIds);
          ps.set(e, "nodeId", t), ps.set(e, "node", js.getDialogNode(t)), this.nodeIds.push(t), Pl.loadDialogEditor(t);
        },
        deleteNode: function deleteNode(e) {
          this.disconnectedNodes.push(e.node), ps.set(e, "nodeId", void 0), ps.set(e, "node", void 0);
        },
        onEdgeChange: function onEdgeChange(e) {
          var t = parseInt(e.target.selectedOptions.item(0).value);
          if (void 0 === this.node.edgeIds) ps.set(this.node, "edgeIds", []);else if (this.node.edgeIds.includes(t)) return;
          void 0 === this.node.edges && ps.set(this.node, "edges", []);
          var n = Fs.search(this.dialog, t, !0);
          void 0 !== n && (this.node.edgeIds.push(t), this.node.edges.push(n));
        },
        onNodeChange: function onNodeChange(e, t) {
          var n = !0,
              i = parseInt(e.target.selectedOptions.item(0).value),
              o = Fs.search(this.dialog, i, !1);

          if (void 0 === o) {
            var _iterator39 = _createForOfIteratorHelper(this.disconnectedNodes),
                _step39;

            try {
              for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                var _e50 = _step39.value;

                if (_e50.id === i) {
                  o = _e50, n = !1;
                  break;
                }
              }
            } catch (err) {
              _iterator39.e(err);
            } finally {
              _iterator39.f();
            }
          }

          void 0 !== o && (ps.set(t, "nodeReferenced", n), ps.set(t, "nodeId", i), ps.set(t, "node", o));
        },
        onScriptChange: function onScriptChange(e, t) {
          ul(t);
        },
        onFaceChange: function onFaceChange(e, t) {
          void 0 !== t.name || Ws.isEmpty(t.face) || (t.name = t.face.replace(".png", "").replace(".jpg", ""));
        },
        updateFocus: function updateFocus() {
          var e = this.$refs.edges;

          if (void 0 !== e && void 0 !== e[0].options && (e[0].options[0].selected = !0), void 0 !== this.$refs.nodes && void 0 !== e) {
            var _iterator40 = _createForOfIteratorHelper(e),
                _step40;

            try {
              for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                var _t34 = _step40.value;
                void 0 !== _t34.options && (_t34.options[0].selected = !0);
              }
            } catch (err) {
              _iterator40.e(err);
            } finally {
              _iterator40.f();
            }
          }

          void 0 !== this.node && null != this.$refs.dialogNodeMessage && this.$refs.dialogNodeMessage.focus();
        }
      }
    });
    n(40);
    var pl = vs(fl, As, [], !1, null, "73ccf623", null);
    pl.options.__file = "src/client/components/DialogEditor.vue";
    var hl = pl.exports;

    var gl = function gl() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("div", {
        staticClass: "root"
      }, [n("script", {
        attrs: {
          type: "application/javascript",
          async: "",
          defer: "",
          crossorigin: "anonymous",
          src: "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"
        }
      }), e._v(" "), n("script", {
        attrs: {
          type: "application/javascript",
          async: "",
          defer: "",
          src: "https://apis.google.com/js/platform.js?onload=gAsyncInit"
        }
      }), e._v(" "), n("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.loginStatus,
          expression: "!loginStatus"
        }]
      }, [n("div", {
        staticClass: "g-signin2",
        attrs: {
          "data-onsuccess": "gLoginCallback",
          "data-theme": "dark"
        }
      }), e._v(" "), n("div", {
        staticClass: "fb-login-button",
        attrs: {
          "data-size": "large",
          "data-button-type": "login_with",
          "data-layout": "default",
          "data-auto-logout-link": "false",
          "data-use-continue-as": "false",
          "data-width": "",
          "data-scope": "email"
        }
      }), e._v(" "), n("br"), e._v(" "), e._t("unlogged")], 2), e._v(" "), e.loginStatus ? n("div", [n("img", {
        staticClass: "statusIcon loggedIcon",
        attrs: {
          src: "/style/ui/logged.png",
          alt: "Logged icon",
          title: "You are currently logged in!"
        }
      }), e._v(" "), n("br"), e._v(" "), e.flagLoggingOut ? n("div", [n("img", {
        staticClass: "loading",
        attrs: {
          src: "/style/ui/spinner.gif",
          alt: "logging out..."
        }
      })]) : n("div", [n("button", {
        on: {
          click: e.logout
        }
      }, [e._v("Logout")]), e._v(" "), n("br"), n("br"), e._v(" "), e._t("logged")], 2)]) : e._e()]);
    };

    gl._withStripped = !0;
    var ml = ps.extend({
      name: "login",
      props: {
        showIcons: {
          type: Boolean,
          required: !1,
          "default": !0
        }
      },
      data: function data() {
        return {
          loginStatus: !1,
          loginService: void 0,
          fbToken: void 0,
          flagLoggingOut: !1
        };
      },
      created: function created() {
        var e = document.createElement("meta");
        e.name = "google-signin-scope", e.content = "profile email", document.head.appendChild(e), e = document.createElement("meta"), e.name = "google-signin-client_id", e.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com", document.head.appendChild(e);
        var t = this;
        window.fbAsyncInit = function () {
          FB.init({
            appId: "1885551381575204",
            autoLogAppEvents: !1,
            cookie: !0,
            xfbml: !1,
            version: "v6.0"
          }), FB.Event.subscribe("auth.statusChange", function (e) {
            t.fbLoginStatusChangeCallback(e);
          }), FB.getLoginStatus(function (e) {
            t.fbLoginStatusChangeCallback(e);
          });
        }, window.gAsyncInit = function () {
          gapi.load("auth2", function () {
            gapi.auth2.getAuthInstance().isSignedIn.get() && (ps.set(t, "loginStatus", !0), ps.set(t, "loginService", "google"));
          });
        }, window.gLoginCallback = this.gLoginCallback;
      },
      methods: {
        logoutCallback: function logoutCallback() {
          ps.set(this, "loginStatus", !1), ps.set(this, "loginService", void 0), ps.set(this, "flagLoggingOut", !1);
        },
        logout: function logout() {
          if (this.loginStatus) {
            switch (this.loginService) {
              case "facebook":
                if (void 0 !== this.fbToken) {
                  ps.set(this, "flagLoggingOut", !0);

                  var _e51 = this;

                  FB.api("/me/permissions", "delete", {
                    access_token: _e51.fbToken
                  }, function (t) {
                    !0 !== t.success && console.error("Facebook permission revoking failed: ", t), FB.logout(function (t) {
                      _e51.logoutCallback();
                    });
                  }), this.fbToken = void 0;
                }

                break;

              case "google":
                gapi.auth2.getAuthInstance().signOut().then(this.logoutCallback());
                break;

              default:
                console.error("Unexpected loginService: " + this.loginService);
            }

            cl.sendGETRequest("logout", function (e) {});
          } else console.error("Cannot logout, user is not currently logged in");
        },
        fbLoginStatusChangeCallback: function fbLoginStatusChangeCallback(e) {
          if ("connected" === e.status) {
            this.fbToken = e.authResponse.accessToken;
            var _t35 = {
              service: "facebook",
              token: e.authResponse.accessToken,
              userId: e.authResponse.userID
            };
            this.doLogin(_t35);
          }
        },
        gLoginCallback: function gLoginCallback(e) {
          var t = {
            service: "google",
            token: e.getAuthResponse().id_token
          };
          this.doLogin(t);
        },
        doLogin: function doLogin(e) {
          var t = this;
          cl.sendPOSTRequest("/auth", JSON.stringify(e), function (n) {
            if (!Ws.isEmpty(n)) try {
              if (JSON.parse(n).result) return ps.set(t, "loginStatus", !0), void ps.set(t, "loginService", e.service);
            } catch (e) {
              console.error(e);
            }
            ps.set(t, "loginStatus", !1), ps.set(t, "loginService", void 0), console.warn("Login with " + e.service + " failed");
          });
        }
      }
    });
    n(564);
    var vl = vs(ml, gl, [], !1, null, "08ab550b", null);
    vl.options.__file = "src/client/components/Login.vue";
    var yl = vl.exports;

    var El = function El() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("div", {
        staticStyle: {
          border: "1px solid black",
          position: "relative"
        },
        attrs: {
          id: "eventPanel"
        }
      }, [e._m(0), e._v(" "), n("div", {
        staticStyle: {
          "font-style": "italic"
        },
        attrs: {
          id: "scriptTooltip"
        }
      }), e._v(" "), n("br"), e._v(" "), e._m(1), e._v(" "), n("event-state-editor"), e._v(" "), n("table", {
        staticStyle: {
          width: "100%"
        }
      }), e._v("\n\t\tMemory"), n("br"), e._v(" "), n("input", {
        staticStyle: {
          width: "5em"
        },
        attrs: {
          id: "key",
          type: "text",
          placeholder: "Key",
          title: 'Standard keys:\nmsg1: message displayed by "speak" Action (the number represent the state number)\nstate: variable used by Conditions "isStateVar0", "isStateVar1", ...\n'
        }
      }), e._v(" "), n("input", {
        staticStyle: {
          width: "8em"
        },
        attrs: {
          id: "val",
          type: "text",
          placeholder: "Value"
        }
      }), e._v(" "), n("button", {
        attrs: {
          onclick: "L4W_mapper.MapperPage.addMemory();"
        }
      }, [e._v("+")]), e._v(" "), n("table", {
        staticStyle: {
          border: "1px solid black",
          position: "relative",
          "margin-left": "10px"
        },
        attrs: {
          id: "memory"
        }
      }), e._v(" "), n("br"), e._v(" "), n("button", {
        attrs: {
          id: "saveEvent",
          onclick: "L4W_mapper.MapperPage.saveEvent()",
          title: "This will confirm the event details"
        }
      }, [e._v("Save event")]), e._v(" "), n("button", {
        staticStyle: {
          color: "red"
        },
        attrs: {
          id: "deleteEvent",
          onclick: "L4W_mapper.MapperPage.deleteEvent()",
          title: "This will delete the currently selected event"
        }
      }, [e._v("Delete event ☠")])], 1);
    };

    El._withStripped = !0;

    var Al = function Al() {
      var e = this;
      e.$createElement;
      return e._self._c, e._m(0);
    };

    Al._withStripped = !0;
    var bl = vs(ps.extend({
      name: "event-state-editor",
      props: {}
    }), Al, [function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("table", {
        staticStyle: {
          border: "1px solid black",
          position: "relative",
          "margin-left": "10px",
          "background-color": "#ffffd0",
          width: "90%"
        },
        attrs: {
          id: "eventState"
        }
      }, [n("tbody", {
        attrs: {
          onchange: "L4W_mapper.MapperPage.eventModified()"
        }
      }, [n("tr", [n("td", [e._v("Condition")]), e._v(" "), n("td", [n("select", {
        attrs: {
          id: "condition"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Trigger")]), e._v(" "), n("td", [n("select", {
        attrs: {
          id: "trigger"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Action")]), e._v(" "), n("td", [n("select", {
        staticStyle: {
          "background-color": "#d0ffd0"
        },
        attrs: {
          id: "action"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Dialog")]), e._v(" "), n("td", [n("input", {
        attrs: {
          id: "dialogEditorCheckbox",
          type: "checkbox",
          onclick: "L4W_mapper.MapperPage.toggleDialogEditor()"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v(" ")]), e._v(" "), n("td")]), e._v(" "), n("tr", [n("td", [e._v("Charaset")]), e._v(" "), n("td", [n("select", {
        attrs: {
          id: "charasets"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Visible")]), e._v(" "), n("td", [n("input", {
        attrs: {
          id: "visible",
          type: "checkbox",
          checked: ""
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Opacity")]), e._v(" "), n("td", [n("input", {
        staticStyle: {
          width: "3em"
        },
        attrs: {
          id: "opacity",
          type: "number",
          min: "0",
          max: "100",
          step: "1",
          value: "100"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Direction")]), e._v(" "), n("td", [n("select", {
        attrs: {
          id: "direction"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Speed")]), e._v(" "), n("td", [n("select", {
        attrs: {
          id: "speed"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Frequency")]), e._v(" "), n("td", [n("select", {
        attrs: {
          id: "frequency"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Rotation")]), e._v(" "), n("td", [n("select", {
        attrs: {
          id: "rotation"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("On top")]), e._v(" "), n("td", [n("select", {
        attrs: {
          id: "ontop"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Blocking")]), e._v(" "), n("td", [n("input", {
        attrs: {
          id: "block",
          type: "checkbox",
          checked: ""
        }
      })])])]), e._v(" "), n("tfoot", [n("tr", [n("td"), e._v(" "), n("td", [n("button", {
        staticStyle: {
          color: "red"
        },
        attrs: {
          onclick: "L4W_mapper.MapperPage.deleteEventState()",
          title: "This will delete the currently selected state"
        }
      }, [e._v("Delete state ☠")])])])])]);
    }], !1, null, "3f31e932", null);
    bl.options.__file = "src/client/components/EventStateEditor.vue";
    var _l = bl.exports;
    var Sl = vs(ps.extend({
      components: {
        EventStateEditor: _l
      },
      name: "event-editor",
      props: {}
    }), El, [function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("table", {
        staticStyle: {
          width: "100%"
        }
      }, [n("tr", [n("td", [e._v("Name")]), e._v(" "), n("td", [n("input", {
        attrs: {
          id: "name",
          type: "text",
          placeholder: "Event name",
          onchange: "L4W_mapper.MapperPage.eventModified();"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Position")]), e._v(" "), n("td", {
        attrs: {
          onchange: "L4W_mapper.MapperPage.changeEventPosition()"
        }
      }, [n("input", {
        staticStyle: {
          width: "3em"
        },
        attrs: {
          id: "eventi",
          type: "number",
          min: "0",
          max: "999",
          step: "1"
        }
      }), e._v(" "), n("input", {
        staticStyle: {
          width: "3em"
        },
        attrs: {
          id: "eventj",
          type: "number",
          min: "0",
          max: "999",
          step: "1"
        }
      })])]), e._v(" "), n("tr", [n("td", [e._v("Script")]), e._v(" "), n("td", [n("select", {
        staticStyle: {
          "background-color": "#d0ffd0"
        },
        attrs: {
          id: "script",
          title: "To use a new script, add it to ScriptsRegister.ts",
          onchange: "L4W_mapper.MapperPage.changeEventScript();"
        }
      })])])]);
    }, function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("table", {
        staticStyle: {
          width: "100%"
        }
      }, [n("tr", [n("td", [e._v("State")]), e._v(" "), n("td", [n("input", {
        staticStyle: {
          "background-color": "#ffffd0"
        },
        attrs: {
          id: "state",
          type: "number",
          min: "1",
          max: "99",
          value: "1",
          onchange: "L4W_mapper.MapperPage.loadEventState();"
        }
      })]), e._v(" "), n("td", [e._v("of")]), e._v(" "), n("td", {
        attrs: {
          id: "tot"
        }
      }, [e._v("1")])])]);
    }], !1, null, "575aebc9", null);
    Sl.options.__file = "src/client/components/EventEditor.vue";
    var wl = Sl.exports;

    var Cl,
        Il,
        kl,
        Tl = function Tl() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("div", {
        staticClass: "container"
      }, e._l(e.autotiles, function (t) {
        return n("div", {
          key: t.image,
          "class": {
            selected: t.selected,
            autotile: !0
          },
          on: {
            click: function click(n) {
              return e.select(t);
            }
          }
        }, [n("img", {
          attrs: {
            src: "../assets/autotile/" + t.image
          }
        })]);
      }), 0);
    };

    Tl._withStripped = !0;

    var Nl = /*#__PURE__*/function (_Js2) {
      _inherits(Nl, _Js2);

      var _super7 = _createSuper(Nl);

      function Nl(e) {
        var _this3;

        _classCallCheck(this, Nl);

        _this3 = _super7.call(this, e), _this3.renderingConfiguration.showEditorGrid = !0, _this3.renderingConfiguration.enableSelection = !0, _this3.renderingConfiguration.enableAntialiasing = !1, _this3.requestedNewFrame = !0;
        return _this3;
      }

      _createClass(Nl, [{
        key: "mainGameLoop_pre",
        value: function mainGameLoop_pre() {
          if (!_get(_getPrototypeOf(Nl.prototype), "mainGameLoop_pre", this).call(this)) return !1;
          if (void 0 === this.pointer && !this.requestedNewFrame) return !1;
          var e = void 0 === this.oldDrawArea || this.requestedNewFrame;
          return this.requestedNewFrame && (this.requestedNewFrame = !1), this.newDrawArea = this.getRedrawArea(e), this.redrawArea = Ps.mergeRectangles(this.oldDrawArea, this.newDrawArea), this.grid.clear(this.context, this.redrawArea), !0;
        }
      }, {
        key: "mainGameLoop_post",
        value: function mainGameLoop_post() {
          _get(_getPrototypeOf(Nl.prototype), "mainGameLoop_post", this).call(this), this.oldDrawArea = this.newDrawArea;
        }
      }, {
        key: "render",
        value: function render(e, t) {
          _get(_getPrototypeOf(Nl.prototype), "render", this).call(this, e, t, !1);
        }
      }, {
        key: "getRedrawArea",
        value: function getRedrawArea(e, t) {
          var n;
          n = e ? void 0 : this.pointer;
          var i = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth(), n, t),
              o = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight(), n, t);
          return {
            x: i.min,
            y: o.min,
            h: o.max - o.min,
            w: i.max - i.min
          };
        }
      }, {
        key: "toggleEditorGrid",
        value: function toggleEditorGrid(e) {
          this.renderingConfiguration.showEditorGrid = null != e ? e : !this.renderingConfiguration.showEditorGrid, this.requestedNewFrame = !0;
        }
      }, {
        key: "renderPointer",
        value: function renderPointer() {
          void 0 !== this.pointer && (this.context.save(), this.context.globalAlpha = .4, this.context.fillStyle = Us.Color.YELLOW, this.context.fillRect(this.pointer.i * this.grid.cellW, this.pointer.j * this.grid.cellH, this.grid.cellW, this.grid.cellH), this.context.restore());
        }
      }, {
        key: "select",
        value: function select(e, t) {
          void 0 !== e && void 0 !== t && (this.renderingConfiguration.selectCellStart = {
            i: e,
            j: t
          }, this.renderingConfiguration.selectCellEnd = void 0);
        }
      }, {
        key: "selectEnd",
        value: function selectEnd(e, t) {
          void 0 !== e && void 0 !== t && (this.renderingConfiguration.selectCellEnd = {
            i: e,
            j: t
          });
        }
      }, {
        key: "cleanSelection",
        value: function cleanSelection() {
          this.renderingConfiguration.selectCellStart = void 0, this.renderingConfiguration.selectCellEnd = void 0, this.requestedNewFrame = !0;
        }
      }, {
        key: "getSelectionArea",
        value: function getSelectionArea() {
          if (void 0 === this.renderingConfiguration.selectCellStart) return;
          var e,
              t,
              n = this.renderingConfiguration.selectCellStart.i,
              i = this.renderingConfiguration.selectCellStart.j;

          if (void 0 !== this.renderingConfiguration.selectCellEnd) {
            if (e = this.renderingConfiguration.selectCellEnd.i, t = this.renderingConfiguration.selectCellEnd.j, n > e) {
              var _t36 = n;
              n = e, e = _t36;
            }

            if (i > t) {
              var _e52 = i;
              i = t, t = _e52;
            }
          } else e = this.renderingConfiguration.selectCellStart.i, t = this.renderingConfiguration.selectCellStart.j;

          return {
            x: n,
            y: i,
            w: e - n,
            h: t - i
          };
        }
      }, {
        key: "renderDynamicElements",
        value: function renderDynamicElements(e, t, n, i, o, r, a) {}
      }, {
        key: "drawBottleneck",
        value: function drawBottleneck(e, t, n, i, o, r, a, s) {
          e.clearRect(o.i * this.grid.cellW + r, o.j * this.grid.cellH + a, s.w, s.h), _get(_getPrototypeOf(Nl.prototype), "drawBottleneck", this).call(this, e, t, n, i, o, r, a, s);
        }
      }, {
        key: "drawAngle",
        value: function drawAngle(e, t, n, i, o, r, a, s, l) {
          e.clearRect(a.i * this.grid.cellW + s, a.j * this.grid.cellH + l, o, r), _get(_getPrototypeOf(Nl.prototype), "drawAngle", this).call(this, e, t, n, i, o, r, a, s, l);
        }
      }]);

      return Nl;
    }(Js);

    var xl = /*#__PURE__*/function (_Nl) {
      _inherits(xl, _Nl);

      var _super8 = _createSuper(xl);

      function xl() {
        _classCallCheck(this, xl);

        return _super8.apply(this, arguments);
      }

      _createClass(xl, [{
        key: "updateSize",
        value: function updateSize(e, t) {
          this.map.tileset.imageWidth = e, this.map.tileset.imageHeight = t, this.map.width = Math.floor(e / this.grid.cellW), this.map.height = Math.floor(t / this.grid.cellH), this.grid.updateSize(this.map.width, this.map.height), this.requestedNewFrame = !0;
        }
      }, {
        key: "getRedrawArea",
        value: function getRedrawArea(e) {
          var t = this.getSelectionArea();
          return _get(_getPrototypeOf(xl.prototype), "getRedrawArea", this).call(this, e, t);
        }
      }, {
        key: "select",
        value: function select(e, t) {
          _get(_getPrototypeOf(xl.prototype), "select", this).call(this, e, t), this.requestedNewFrame = !0;
        }
      }]);

      return xl;
    }(Nl);

    var Ml = /*#__PURE__*/function (_xl) {
      _inherits(Ml, _xl);

      var _super9 = _createSuper(Ml);

      function Ml(e, t) {
        var _this4;

        _classCallCheck(this, Ml);

        _this4 = _super9.call(this, e), _this4.map = js.getEmptyMap(), t(_assertThisInitialized(_this4));
        return _this4;
      }

      _createClass(Ml, [{
        key: "setMapper",
        value: function setMapper(e) {
          this.mapper = e;
        }
      }, {
        key: "select",
        value: function select(e, t) {
          Ws.isEmpty(this.mapper) || this.mapper.cleanSelection(), _get(_getPrototypeOf(Ml.prototype), "select", this).call(this, e, t);
        }
      }]);

      return Ml;
    }(xl);

    !function (e) {
      e[e.game = 0] = "game", e[e.mapper = 1] = "mapper", e[e.tilePicker = 2] = "tilePicker";
    }(Cl || (Cl = {}));

    var Dl = /*#__PURE__*/function (_ref) {
      _inherits(Dl, _ref);

      var _super10 = _createSuper(Dl);

      function Dl(e, t, n, i) {
        var _this5;

        _classCallCheck(this, Dl);

        _this5 = _super10.call(this, e, t, n), _this5.overriddenProps = void 0 !== i ? i : new Map();
        return _this5;
      }

      _createClass(Dl, [{
        key: "deferredInit",
        value: function deferredInit(e) {
          switch (Ws.isEmpty(this.overriddenProps) || (e = Ws.mergeMaps(this.overriddenProps, e)), _get(_getPrototypeOf(Dl.prototype), "deferredInit", this).call(this, e), this.gridType) {
            case Cl.mapper:
              this.canvasScales = [], this.canvasScales.push(e.get("canvasScaleD")), this.canvasScales.push(e.get("canvasScaleC")), this.canvasScales.push(e.get("canvasScaleB")), this.canvasScales.push(e.get("canvasScaleA"));
              var _t37 = this.canvasScales.length;
              this.rowsList = new Array(_t37), this.columnsList = new Array(_t37);

              var _n30 = _t37 - 1;

              for (var _e53 = 0; _e53 < _t37; _e53++) {
                this.rowsList[_e53] = Math.floor(this.rows / this.canvasScales[_e53]), this.columnsList[_e53] = Math.floor(this.columns / this.canvasScales[_e53]);
              }

              this.selectScale(_n30);
              break;

            case Cl.tilePicker:
              this.scaleX = 1, this.scaleY = 1;
              break;

            default:
              console.error("Unexpected gridType case: " + this.gridType);
          }
        }
      }, {
        key: "selectScale",
        value: function selectScale(e) {
          this.scaleX = this.canvasScales[e], this.scaleY = this.canvasScales[e], this.refreshCanvasSize();
        }
      }, {
        key: "updateSize",
        value: function updateSize(e, t) {
          this.rows = t, this.columns = e, this.updateSizingDerivates();
        }
      }, {
        key: "getBoundariesX",
        value: function getBoundariesX(e, t, n, i) {
          return void 0 !== n ? void 0 !== i ? {
            min: n.i,
            max: n.i + i.w
          } : {
            min: n.i,
            max: n.i
          } : {
            min: 0,
            max: this.columns
          };
        }
      }, {
        key: "getBoundariesY",
        value: function getBoundariesY(e, t, n, i) {
          return void 0 !== n ? void 0 !== i ? {
            min: n.j,
            max: n.j + i.h
          } : {
            min: n.j,
            max: n.j
          } : {
            min: 0,
            max: this.rows
          };
        }
      }, {
        key: "getVisibleRectangle",
        value: function getVisibleRectangle(e, t, n) {
          var i = this.checkBoundariesLimit(e.x, e.x + e.w, t, !0),
              o = this.checkBoundariesLimit(e.y, e.y + e.h, n, !0);
          return {
            x: i.min,
            y: o.min,
            w: i.max - i.min,
            h: o.max - o.min
          };
        }
      }]);

      return Dl;
    }( /*#__PURE__*/function () {
      function _class(e, t, n) {
        _classCallCheck(this, _class);

        var i;
        this.canvas = e, this.currentTranslation = {
          x: 0,
          y: 0
        }, this.gridType = n, i = this, cl.loadProperties(function (e) {
          i.deferredInit(e), i.updateSizingDerivates(), i.refreshCanvasSize(), t(i);
        });
      }

      _createClass(_class, [{
        key: "deferredInit",
        value: function deferredInit(e) {
          this.cellH = e.get("cellHeight"), this.cellW = e.get("cellWidth"), this.rows = e.get(Cl[this.gridType] + "Rows"), this.columns = e.get(Cl[this.gridType] + "Columns");
        }
      }, {
        key: "updateSizingDerivates",
        value: function updateSizingDerivates() {
          this.baseH = this.cellH * this.rows, this.baseW = this.cellW * this.columns, this.halfRows = Math.floor(this.rows / 2), this.halfColumns = Math.floor(this.columns / 2), this.refreshCanvasSize();
        }
      }, {
        key: "refreshCanvasSize",
        value: function refreshCanvasSize() {
          this.canvas.width = Math.floor(this.baseW * this.scaleX), this.canvas.height = Math.floor(this.baseH * this.scaleY);
        }
      }, {
        key: "clear",
        value: function clear(e, t) {
          void 0 === t ? e.clearRect(this.currentTranslation.x, this.currentTranslation.y, this.baseW, this.baseH) : e.clearRect(this.currentTranslation.x + t.x * this.cellW, this.currentTranslation.y + t.y * this.cellH, (t.w + 1) * this.cellW, (t.h + 1) * this.cellH);
        }
      }, {
        key: "mapPositionToGrid",
        value: function mapPositionToGrid(e) {
          var t = this.canvas.getBoundingClientRect(),
              n = Math.floor((e.x - t.left) / this.scaleX + this.currentTranslation.x),
              i = Math.floor((e.y - t.top) / this.scaleY + this.currentTranslation.y);
          return {
            i: Math.floor((e.x - t.left) / (this.cellW * this.scaleX) + this.currentTranslation.x / this.cellW),
            j: Math.floor((e.y - t.top) / (this.cellH * this.scaleY) + this.currentTranslation.y / this.cellH),
            x: n,
            y: i
          };
        }
      }, {
        key: "mapCellToCanvas",
        value: function mapCellToCanvas(e) {
          return {
            x: e.i * this.cellW,
            y: e.j * this.cellH
          };
        }
      }, {
        key: "mapCanvasToCell",
        value: function mapCanvasToCell(e) {
          return {
            i: Math.floor(e.x / this.cellW),
            j: Math.floor(e.y / this.cellH)
          };
        }
      }, {
        key: "changeTranslation",
        value: function changeTranslation(e, t, n, i) {
          var o = e - this.halfColumns * this.cellW;
          if (o < 0) o = 0;else {
            var _e54 = (n - this.columns) * this.cellW;

            o > _e54 && (o = _e54);
          }
          var r = t - this.halfRows * this.cellH;
          if (r < 0) r = 0;else {
            var _e55 = (i - this.rows) * this.cellH;

            r > _e55 && (r = _e55);
          }
          return this.applyTranslate(o, r);
        }
      }, {
        key: "reappyTranslation",
        value: function reappyTranslation() {
          var e = this.currentTranslation.x,
              t = this.currentTranslation.y;
          this.currentTranslation.x = 0, this.currentTranslation.y = 0, this.applyTranslate(e, t);
        }
      }, {
        key: "applyTranslate",
        value: function applyTranslate(e, t) {
          return this.getContext().translate(this.currentTranslation.x - e, this.currentTranslation.y - t), this.currentTranslation = {
            x: e,
            y: t
          }, this.currentTranslation;
        }
      }, {
        key: "getCurrentTranslation",
        value: function getCurrentTranslation() {
          return this.currentTranslation;
        }
      }, {
        key: "resetTranslation",
        value: function resetTranslation() {
          this.getContext().translate(this.currentTranslation.x, this.currentTranslation.y), this.currentTranslation = {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "getBoundariesX",
        value: function getBoundariesX(e, t) {
          var n = Math.floor(e / this.cellW),
              i = n - this.halfColumns - 1,
              o = n + this.halfColumns + 1;
          return this.checkBoundariesLimit(i, o, t);
        }
      }, {
        key: "getBoundariesY",
        value: function getBoundariesY(e, t) {
          var n = Math.floor(e / this.cellH),
              i = n - this.halfRows - 1,
              o = n + this.halfRows + 1;
          return this.checkBoundariesLimit(i, o, t);
        }
      }, {
        key: "checkBoundariesLimit",
        value: function checkBoundariesLimit(e, t, n, i) {
          return e < 0 && (void 0 !== i && i || (t -= e), e = 0), t >= n && (void 0 !== i && i || (e -= t - n + 1), t = n - 1), {
            min: e,
            max: t
          };
        }
      }, {
        key: "getContext",
        value: function getContext() {
          return this.canvas.getContext("2d");
        }
      }]);

      return _class;
    }());

    !function (e) {
      var t;
      e.start = function (e, n) {
        void 0 !== t ? n(t) : new Dl(e, function (i) {
          new Ml(i, function (o) {
            t = o, function (e, n) {
              var i = new Map();
              Ns.init(e, n, i, ks, ks, function (e, n, i, o, r) {
                Pl.onCancelAutotileSelection(), (Ws.isEmpty(r) || r === Ns.MouseButtons.LEFT) && t.select(e, n);
              }, function (e, n, i) {
                (Ws.isEmpty(i) || i === Ns.MouseButtons.LEFT) && t.selectEnd(e, n);
              }, function (e, n, i) {
                t.requestedNewFrame = !0, (Ws.isEmpty(i) || i === Ns.MouseButtons.LEFT) && t.selectEnd(e, n), t.updatePointer(e, n);
              }, function (e, n) {
                t.updatePointer(e, n);
              }, ks, ks, ks, function (e, n) {
                t.cleanSelection();
              }, ks, ks);
            }(e, i), t.start(e), n(t);
          });
        }, Cl.tilePicker);
      }, e.loadTile = function (t, n) {
        var i = document.getElementById("canvasTile"),
            o = i.getContext("2d"),
            r = document.getElementById("canvasSelector");
        o.clearRect(0, 0, i.width, i.height), cl.load(t, ws.TILE, function (t) {
          var a = new Image();
          a.src = t.src, i.width = a.naturalWidth, i.height = a.naturalHeight, document.getElementById("tilePanel").style.height = a.naturalHeight + "px", o.drawImage(t, 0, 0), e.start(r, function (e) {
            e.map.tileset.imageData = a, r.width = a.naturalWidth, r.height = a.naturalHeight, e.updateSize(a.naturalWidth, a.naturalHeight), n(e);
          });
        });
      }, e.saveData = function (e) {
        var t = $("#mapPanel").jstree(!0).get_json("#", {
          flat: !1,
          no_state: !0,
          no_id: !1,
          no_children: !1,
          no_data: !1
        });
        cl.sendPOSTRequest("/edit/" + ws.TREE + "/maps", JSON.stringify(t), function (t) {
          e(void 0 !== t, t);
        });
      }, e.setMapper = function (e) {
        t.setMapper(e);
      }, e.cancelSelection = function () {
        t.cleanSelection(), t.pointer = void 0;
      };
    }(Il || (Il = {}));

    var Ol = /*#__PURE__*/function (_Nl2) {
      _inherits(Ol, _Nl2);

      var _super11 = _createSuper(Ol);

      function Ol(e, t) {
        var _this6;

        _classCallCheck(this, Ol);

        _this6 = _super11.call(this, e), _this6.activeLayer = Us.MapLayer.MID, document.getElementById(Pl.BUTTON_ID_LAYER + _this6.activeLayer).disabled = !0, t(_assertThisInitialized(_this6));
        return _this6;
      }

      _createClass(Ol, [{
        key: "renderPointer",
        value: function renderPointer() {
          if (void 0 !== this.pointer) {
            var _e56 = this.getSelectionArea();

            void 0 === _e56 ? _get(_getPrototypeOf(Ol.prototype), "renderPointer", this).call(this) : (this.context.save(), this.context.globalAlpha = .4, this.context.fillStyle = Us.Color.GREY, this.context.fillRect(this.pointer.i * this.grid.cellW, this.pointer.j * this.grid.cellH, (_e56.w + 1) * this.grid.cellW, (_e56.h + 1) * this.grid.cellH), this.context.restore());
          }
        }
      }, {
        key: "mainGameLoop_pre",
        value: function mainGameLoop_pre() {
          return !!_get(_getPrototypeOf(Ol.prototype), "mainGameLoop_pre", this).call(this);
        }
      }, {
        key: "getRedrawArea",
        value: function getRedrawArea(e) {
          var t;
          return void 0 !== this.tilePicker && (t = this.tilePicker.getSelectionArea()), _get(_getPrototypeOf(Ol.prototype), "getRedrawArea", this).call(this, e, t);
        }
      }, {
        key: "getSceneHeight",
        value: function getSceneHeight() {
          return this.map.height;
        }
      }, {
        key: "getSceneWidth",
        value: function getSceneWidth() {
          return this.map.width;
        }
      }, {
        key: "select",
        value: function select(e, t) {
          _get(_getPrototypeOf(Ol.prototype), "select", this).call(this, e, t);
        }
      }, {
        key: "apply",
        value: function apply(e, t) {
          var n = !1,
              i = this.tilePicker.getSelectionArea(),
              o = e + t * this.map.width,
              r = this.map.layers[this.activeLayer];

          switch (Ws.isEmpty(r.data) && (r.data = []), this.editMode) {
            case Us.EditMode.APPLY:
              var _a13 = !1,
                  _s10 = {
                w: this.map.width,
                h: this.map.height
              };

              if (void 0 === i) {
                if (void 0 === this.autotileSelected) return !1;
                {
                  void 0 === this.map.autotilesets && (this.map.autotilesets = {});

                  var _e57,
                      _t38 = this.map.tileset.maxGID;

                  for (var _i21 = 0, _Object$entries = Object.entries(this.map.autotilesets); _i21 < _Object$entries.length; _i21++) {
                    var _n31 = _Object$entries[_i21];

                    var _i22 = parseInt(_n31[0]);

                    if (_n31[1].image === this.autotileSelected) {
                      _e57 = _i22;
                      break;
                    }

                    _i22 > _t38 && (_t38 = _i22);
                  }

                  if (void 0 === _e57) {
                    _e57 = _t38 + 1;

                    var _n32 = js.getAutoTileset();

                    _n32.image = this.autotileSelected, this.map.autotilesets[_e57 + ""] = _n32, Gs.initTransientDataAutotiles([_n32]);
                  }

                  r.data[o] !== _e57 && (n = !0, _a13 = !0, r.data[o] = _e57, void 0 === r.autotileData && (r.autotileData = []), r.autotileData[o] = zs.getAutotileProximityValue(o, _s10, _e57, r));
                }
              } else {
                var _t39 = Math.floor(this.map.tileset.imageWidth / this.grid.cellW),
                    _s11 = i.x + i.y * _t39;

                for (var _l9 = 0; _l9 <= i.h; _l9++) {
                  for (var _c4 = 0; _c4 <= i.w; _c4++) {
                    if (e + _c4 < this.map.width) {
                      var _e58 = _c4 + _l9 * _t39,
                          _i23 = _c4 + _l9 * this.map.width;

                      r.data[o + _i23] !== _s11 + _e58 && (n = !0, zs.isThisAnAutotileCell(o + _i23, r, this.map) && (_a13 = !0), r.data[o + _i23] = _s11 + _e58);
                    }
                  }
                }
              }

              if (_a13) {
                var _iterator41 = _createForOfIteratorHelper(Ls),
                    _step41;

                try {
                  for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                    var _e59 = _step41.value;

                    var _t40 = Ps.getTargetGID(o, _e59, _s10);

                    zs.isThisAnAutotileCell(_t40, r, this.map) && (void 0 === r.autotileData && (r.autotileData = []), r.autotileData[_t40] = zs.getAutotileProximityValue(_t40, _s10, r.data[_t40], r));
                  }
                } catch (err) {
                  _iterator41.e(err);
                } finally {
                  _iterator41.f();
                }
              }

              break;

            case Us.EditMode.ERASE:
              void 0 === i && (i = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
              });

              for (var _t41 = 0; _t41 <= i.h; _t41++) {
                for (var _a14 = 0; _a14 <= i.w; _a14++) {
                  if (e + _a14 < this.map.width) {
                    var _e60 = _a14 + _t41 * this.map.width;

                    void 0 !== r.data[o + _e60] && (n = !0, r.data[o + _e60] = null);
                  }
                }
              }

              break;

            case Us.EditMode.EVENTS:
              this.selectEvent(e, t) && (this.renderingConfiguration.selectEventCell = {
                i: e,
                j: t
              });
              break;

            default:
              console.error("Unexpected case");
          }

          return n;
        }
      }, {
        key: "selectEvent",
        value: function selectEvent(e, t) {
          var n;
          if (!Pl.confirmCloseEventDetails()) return !1;

          if (!Ws.isEmpty(this.map.events)) {
            var _iterator42 = _createForOfIteratorHelper(this.map.events),
                _step42;

            try {
              for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                var _i24 = _step42.value;

                if (_i24.i === e && _i24.j === t) {
                  n = _i24;
                  break;
                }
              }
            } catch (err) {
              _iterator42.e(err);
            } finally {
              _iterator42.f();
            }
          }

          return void 0 === n && (n = js.getEvent(), n.i = e, n.j = t), Pl.loadEvent(n, !1), !0;
        }
      }, {
        key: "getSelectionArea",
        value: function getSelectionArea() {
          return Ws.isEmpty(this.tilePicker) ? void 0 : this.tilePicker.getSelectionArea();
        }
      }, {
        key: "renderDynamicElements",
        value: function renderDynamicElements(e, t, n, i, o, r, a) {
          if (!Ws.isEmpty(this.map.events)) {
            var _iterator43 = _createForOfIteratorHelper(this.map.events),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var _e61 = _step43.value;

                try {
                  Ys.render(this.grid, _e61, this.context, !1);
                } catch (e) {
                  console.error(e);
                }
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }
          }
        }
      }, {
        key: "applyLayerCustomizations",
        value: function applyLayerCustomizations(e) {
          e > this.activeLayer ? this.context.globalAlpha = Ol.UPPER_LEVEL_OPACITY : e < this.activeLayer && (this.context.globalAlpha = Ol.LOWER_LEVEL_OPACITY);
        }
      }, {
        key: "removeLayerCustomizations",
        value: function removeLayerCustomizations(e) {
          this.context.globalAlpha = 1;
        }
      }, {
        key: "resizeMap",
        value: function resizeMap(e, t) {
          zs.resizeMap(this.map, e, t), this.grid.updateSize(e, t), Ol.onMapSizeChange(this);
        }
      }, {
        key: "shiftMap",
        value: function shiftMap(e, t) {
          return zs.shiftMap(this.map, e, t), this.grid.updateSize(this.map.width, this.map.height), Ol.onMapSizeChange(this), {
            w: this.map.width,
            h: this.map.height
          };
        }
      }, {
        key: "changeMap",
        value: function changeMap(e, t) {
          if (this.editMode === Us.EditMode.EVENTS && !Pl.confirmCloseEventDetails()) return !1;
          var n = this;
          return _get(_getPrototypeOf(Ol.prototype), "changeMap", this).call(this, e, function (i) {
            t(i), n.resizeMap(e.width, e.height);
          }), !0;
        }
      }, {
        key: "setTilePicker",
        value: function setTilePicker(e) {
          this.tilePicker = e;
        }
      }, {
        key: "setActiveLayer",
        value: function setActiveLayer(e) {
          this.activeLayer = e, this.requestedNewFrame = !0;
        }
      }, {
        key: "setSelectedEventCell",
        value: function setSelectedEventCell(e) {
          this.renderingConfiguration.selectEventCell = e;
        }
      }, {
        key: "setEditMode",
        value: function setEditMode(e) {
          this.editMode = e, this.requestedNewFrame = !0;
        }
      }, {
        key: "getMap",
        value: function getMap() {
          return this.map;
        }
      }], [{
        key: "onMapSizeChange",
        value: function onMapSizeChange(e) {
          var t = document.getElementById("zoom");
          e.grid.selectScale(+t.value), e.changeScale(), e.requestedNewFrame = !0;
        }
      }]);

      return Ol;
    }(Nl);

    Ol.LOWER_LEVEL_OPACITY = .8, Ol.UPPER_LEVEL_OPACITY = .4, function (e) {
      function t(e, t, i, o) {
        zs.loadMap(i, t, function (t) {
          if (void 0 === t) return console.error("Cannot init mapper, cannot load map: " + i), void o(e);
          e.changeMap(t, function () {
            n(Us.EditMode.APPLY), o(e);
          });
        });
      }

      function n(t) {
        e.mapper.setEditMode(t);
        var n = t === Us.EditMode.EVENTS;
        n ? e.mapper.apply(0, 0) : (Pl.finishEventEditing(), e.mapper.setSelectedEventCell(void 0)), document.getElementById(Pl.BUTTON_ID_MODE + "0").disabled = !1, document.getElementById(Pl.BUTTON_ID_MODE + "1").disabled = !1, document.getElementById(Pl.BUTTON_ID_MODE + "2").disabled = !1, document.getElementById(Pl.BUTTON_ID_MODE + t).disabled = !0, document.getElementById("layersPanel").hidden = n, document.getElementById("tilePanel").hidden = n, document.getElementById("autotilePickerVue").hidden = n, document.getElementById("eventPanel").hidden = !n, n || (document.getElementById("dialogPanel").style.display = "none");
      }

      e.start = function (n, i, o) {
        Ws.isEmpty(e.mapper) ? new Dl(n, function (r) {
          new Ol(r, function (a) {
            e.mapper = a, function (e, t, n) {
              var i = new Map();
              i[Ns.Keys.F2] = function (e) {
                t.toggleEditorGrid(), e.preventDefault();
              }, i[Ns.Keys.F3] = function (e) {
                t.toggleCellNumbering(), e.preventDefault();
              }, i[Ns.Keys.F4] = function (e) {
                t.toggleFocus(), e.preventDefault();
              }, Ns.init(e, n, i, ks, ks, function (e, n, i, o, r) {
                r === Ns.MouseButtons.LEFT ? t.apply(e, n) && Pl.changeEditState(!0) : t.select(e, n);
              }, function (e, n, i) {
                i === Ns.MouseButtons.LEFT && t.selectEnd(e, n);
              }, function (e, n, i) {
                i === Ns.MouseButtons.LEFT ? t.apply(e, n) && Pl.changeEditState(!0) : (t.selectEnd(e, n), t.requestedNewFrame = !0), t.updatePointer(e, n);
              }, function (e, n) {
                t.updatePointer(e, n);
              }, ks, ks, ks, function (e, n) {
                t.cleanSelection();
              }, ks, ks);
            }(n, a, r), function (e, t, n) {
              document.getElementById("zoom").onchange = function (e) {
                Ol.onMapSizeChange(t);
              };
            }(0, a), t(a, n, i, function (e, t) {
              o(a), a.start(n);
            });
          });
        }, Cl.mapper) : t(e.mapper, n, i, o);
      }, e.changeTile = function (t, n) {
        e.mapper.togglePause(!0), e.mapper.changeTile(t, function (t) {
          e.mapper.togglePause(!1), e.mapper.requestedNewFrame = !0;
        }), e.mapper.setTilePicker(n);
      }, e.changeSize = function (t, n) {
        e.mapper.resizeMap(t, n);
      }, e.shift = function (t, n) {
        return e.mapper.shiftMap(t, n);
      }, e.reloadMap = function (t) {
        var n = Pl.getActiveMap(),
            i = document.getElementById("canvas1");
        zs.loadMap(n, i, function (n) {
          if (void 0 === n) return void t(!1);
          var i = e.mapper.changeMap(n, function () {
            t(i), Pl.changeEditState(!1);
          });
        });
      }, e.saveMap = function (t) {
        var n = Pl.getActiveMap(),
            i = JSON.stringify(e.mapper.getMap());
        cl.save(n + "", i, ws.MAP, function (e, n) {
          void 0 !== n ? t(n) : (console.error("Undefined save result"), t(!1));
        });
      }, e.setMode = n, e.changeEventPosition = function (t, n, i) {
        t.i = n, t.j = i, Ys.initTransientData(e.mapper.map, e.mapper.grid, t), e.mapper.renderingConfiguration.selectEventCell = {
          i: n,
          j: i
        };
      }, e.setActiveLayer = function (t) {
        document.getElementById(Pl.BUTTON_ID_LAYER + "0").disabled = !1, document.getElementById(Pl.BUTTON_ID_LAYER + "1").disabled = !1, document.getElementById(Pl.BUTTON_ID_LAYER + "2").disabled = !1, document.getElementById(Pl.BUTTON_ID_LAYER + t).disabled = !0, e.mapper.setActiveLayer(t);
      }, e.deleteEvent = function (t) {
        if (!Ws.isEmpty(t.id)) for (var _n33 = 0; _n33 < e.mapper.map.events.length; _n33++) {
          var _i25 = e.mapper.map.events[_n33];
          if (t.id === _i25.id) return void e.mapper.map.events.splice(_n33, 1);
        }
      }, e.addEvent = function (t) {
        if (Ws.isEmpty(t.id) || t.id === js.DEFAULT_ID) {
          var _n34 = 0;
          void 0 !== e.mapper.map.maxEventId && (_n34 = e.mapper.map.maxEventId + 1), t.id = _n34, e.mapper.map.maxEventId = _n34, e.mapper.map.events.push(t), Ys.initTransientData(e.mapper.map, e.mapper.grid, t);
        }

        Pl.changeEditState(!0);
      }, e.isCellAvailable = function (t, n, i) {
        var _iterator44 = _createForOfIteratorHelper(e.mapper.map.events),
            _step44;

        try {
          for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
            var _o15 = _step44.value;
            if (_o15.i === n && _o15.j === i && _o15 !== t) return !1;
          }
        } catch (err) {
          _iterator44.e(err);
        } finally {
          _iterator44.f();
        }

        return !0;
      }, e.onAutotileSelection = function (t) {
        e.mapper.autotileSelected = t;
      };
    }(kl || (kl = {}));
    var Ll = ps.extend({
      name: "autotile-picker",
      data: function data() {
        return {
          autotiles: [js.getAutoTileset()]
        };
      },
      mounted: function mounted() {
        var _this7 = this;

        this.$root.$on("cancel-selection", this.cancelSelection), cl.listResources(ws.AUTOTILE, function (e) {
          if (void 0 !== e && e.length > 0) {
            ps.set(_this7, "autotiles", new Array());

            var _iterator45 = _createForOfIteratorHelper(e),
                _step45;

            try {
              for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                var _t42 = _step45.value;

                _this7.autotiles.push({
                  blocked: !1,
                  image: _t42
                });
              }
            } catch (err) {
              _iterator45.e(err);
            } finally {
              _iterator45.f();
            }
          }
        });
      },
      methods: {
        select: function select(e) {
          Il.cancelSelection();

          var _iterator46 = _createForOfIteratorHelper(this.autotiles),
              _step46;

          try {
            for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
              var _t43 = _step46.value;

              var _n35 = _t43.image === e.image;

              ps.set(_t43, "selected", _n35);
            }
          } catch (err) {
            _iterator46.e(err);
          } finally {
            _iterator46.f();
          }

          kl.onAutotileSelection(e.image);
        },
        cancelSelection: function cancelSelection() {
          Il.cancelSelection();

          var _iterator47 = _createForOfIteratorHelper(this.autotiles),
              _step47;

          try {
            for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
              var _e62 = _step47.value;
              ps.set(_e62, "selected", !1);
            }
          } catch (err) {
            _iterator47.e(err);
          } finally {
            _iterator47.f();
          }

          kl.onAutotileSelection(void 0);
        }
      }
    });
    n(101);
    var $l = vs(Ll, Tl, [], !1, null, "582c06ce", null);
    $l.options.__file = "src/client/components/AutotilePicker.vue";
    var Rl = $l.exports;
    var Wl, Pl;
    !function (e) {
      e.check = function () {
        !function () {
          var e = document.createElement("canvas");
          if (!e.getContext || !e.getContext("2d")) console.error("HTML5 canvas is not supported");
        }();
      }, e.serviceWorker = function () {
        return void 0 === navigator.serviceWorker ? (console.warn("Service Workers are not supported"), !1) : "localhost" !== location.hostname && "https" !== location.protocol || (console.warn("Service Workers won't work when using local self-signed certificates. This could be fixed by trusting them, or using browser flags."), !1);
      }, e.webWorker = function () {
        return void 0 !== window.Worker || (console.warn("Web Workers are not supported"), !1);
      }, e.webSpeech = function () {
        return void 0 !== window.SpeechSynthesisUtterance || (console.warn("Web Speech API are not supported"), !1);
      };
    }(Wl || (Wl = {})), function (e) {
      e.PAGE_TITLE = document.title, e.BUTTON_ID_MODE = "mode", e.BUTTON_ID_LAYER = "layer";
      var t,
          n,
          i,
          o,
          r,
          a,
          s,
          l = !1;
      var c = ["Very low", "Low", "Medium-low", "Medium", "Medium-high", "High", "Very high"];

      function d() {
        return $("#mapPanel").jstree(!0).get_selected(!0)[0];
      }

      function u(t) {
        document.title = t ? e.PAGE_TITLE + "*" : e.PAGE_TITLE;
        var n = $("#saveButton")[0];
        void 0 !== n && (n.disabled = !t);
        var i = $("#reloadButton")[0];
        void 0 !== i && (i.disabled = !t);
        var o = $("#mapPanel").jstree(!0),
            r = o.get_json("#", {
          flat: !0,
          no_state: !0,
          no_id: !1,
          no_children: !1,
          no_data: !0
        });
        $.each(r, function (e, n) {
          t ? o.disable_node(n.id) : o.enable_node(n.id);
        });
      }

      function f() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        if (void 0 === n) return void console.error("Current event undefined, cannot load its state");
        e && h();
        var i = document.getElementById("state").valueAsNumber;
        Ws.isEmpty(n.states) && (n.states = []), i > n.states.length && (n.states[i - 1] = js.getEventState());
        var o = n.states[i - 1];
        t = o, function (e) {
          var t = cl.listEventStateConditions(),
              n = document.getElementById("condition");
          Ps.resetSelect(n);
          var i = n.options,
              o = 0;

          var _iterator48 = _createForOfIteratorHelper(t),
              _step48;

          try {
            for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
              var _r14 = _step48.value;
              i[o] = new Option(_r14), _r14 === e.condition && (n.selectedIndex = o), o++;
            }
          } catch (err) {
            _iterator48.e(err);
          } finally {
            _iterator48.f();
          }
        }(o);
        var r = document.getElementById("trigger"),
            a = r.options;
        0 === a.length && (a[0] = new Option("Click"), a[1] = new Option("Touch"), a[2] = new Option("Over"), a[3] = new Option("(auto)")), void 0 !== o.trigger && Ws.isNumeric(o.trigger) ? r.selectedIndex = o.trigger : r.selectedIndex = 0, p(), document.getElementById("dialogEditorCheckbox").checked = void 0 !== o.dialog, E(), document.getElementById("tot").innerText = n.states.length + "", function () {
          var e = document.getElementById("charasets");
          cl.listResources(ws.CHAR, function (n) {
            Ps.resetSelect(e);
            var i = e.options;
            if (i[0] = new Option(""), void 0 !== n) for (var _o16 = 0; _o16 < n.length; _o16++) {
              i[_o16 + 1] = new Option(n[_o16]), n[_o16] === t.charaset && (e.selectedIndex = _o16 + 1);
            }
          });
          var n = t.visible;
          void 0 === n && (n = !0), document.getElementById("visible").checked = n;
          var i = Number.parseInt(t.opacity + "");
          (Ws.isEmpty(i) || Number.isNaN(i) || i < 0 || i > 100) && (i = 100), document.getElementById("opacity").valueAsNumber = i;
          var o = document.getElementById("direction");

          if (0 === o.length) {
            var _e63 = o.options;
            _e63[0] = new Option("Up"), _e63[1] = new Option("Right"), _e63[2] = new Option("Down"), _e63[3] = new Option("Left");
          }

          var r = Number.parseInt(t.direction + "");
          (Ws.isEmpty(r) || Number.isNaN(r) || r < 0 || r > 4) && (r = 2), document.getElementById("direction").selectedIndex = r;
          var a = 0,
              s = document.getElementById("speed").options,
              l = document.getElementById("frequency").options;

          if (0 === s.length || 0 === l.length) {
            var _iterator49 = _createForOfIteratorHelper(c),
                _step49;

            try {
              for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
                var _e64 = _step49.value;
                s[a] = new Option(_e64), l[a] = new Option(_e64), a++;
              }
            } catch (err) {
              _iterator49.e(err);
            } finally {
              _iterator49.f();
            }
          }

          var d = Number.parseInt(t.speed + "");
          (Ws.isEmpty(d) || Number.isNaN(d) || d < 0 || d > 6) && (d = 3), document.getElementById("speed").selectedIndex = d;
          var u = Number.parseInt(t.frequency + "");
          (Ws.isEmpty(u) || Number.isNaN(u) || u < 0 || u > 6) && (u = 3), document.getElementById("frequency").selectedIndex = u;
          var f = document.getElementById("rotation").options;
          0 === f.length && (f[0] = new Option("Off"), f[1] = new Option("Clockwise"), f[2] = new Option("Counterclockwise"));
          var p = Number.parseInt(t.rotation + "");
          (Ws.isEmpty(p) || Number.isNaN(p) || p < 0 || p > 2) && (p = 0), document.getElementById("rotation").selectedIndex = p;
          var h = document.getElementById("ontop").options;
          0 === h.length && (h[0] = new Option("Off"), h[1] = new Option("Liv. 1"), h[2] = new Option("Liv. 2"), h[3] = new Option("Liv. 3"), h[4] = new Option("Liv. 4"));
          var g = Number.parseInt(t.onTop + "");
          (Ws.isEmpty(g) || Number.isNaN(g) || g < 0 || g > 4) && (g = 0), document.getElementById("ontop").selectedIndex = g;
          var m = t.block;
          void 0 === m && (m = !0), document.getElementById("block").checked = m;
        }();
      }

      function p() {
        var e = document.getElementById("script").value,
            n = document.getElementById("action");

        if (Ps.resetSelect(n), !Ws.isEmpty(e)) {
          var _i26 = cl.listScriptActions(e);

          _i26.push("");

          var _o17 = n.options,
              _r15 = 0;
          n.selectedIndex = -1;

          var _iterator50 = _createForOfIteratorHelper(_i26),
              _step50;

          try {
            for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
              var _e65 = _step50.value;
              _o17[_r15] = new Option(_e65), (_e65 === t.action || "" === _e65 && void 0 === t.action) && (n.selectedIndex = _r15), _r15++;
            }
          } catch (err) {
            _iterator50.e(err);
          } finally {
            _iterator50.f();
          }
        }
      }

      function h() {
        t.condition = document.getElementById("condition").value, t.trigger = document.getElementById("trigger").selectedIndex, t.action = document.getElementById("action").value, t.charaset = document.getElementById("charasets").value;
        var e = document.getElementById("visible").checked;
        e && (e = void 0), t.visible = e;
        var n = document.getElementById("opacity").valueAsNumber;
        (Ws.isEmpty(n) || Number.isNaN(n) || n < 0 || n >= 100) && (n = void 0), t.opacity = n;
        var i = document.getElementById("direction").selectedIndex;
        (Ws.isEmpty(i) || i < 0 || i > 3) && (i = 4), t.direction = i;
        var o = document.getElementById("speed").selectedIndex,
            r = document.getElementById("frequency").selectedIndex;
        (Ws.isEmpty(o) || o < 0 || o > 6 || 3 === o) && (o = void 0), (Ws.isEmpty(r) || r < 0 || r > 6 || 3 === r) && (r = void 0), t.speed = o, t.frequency = r;
        var a = document.getElementById("rotation").selectedIndex;
        (Ws.isEmpty(a) || a <= 0 || a > 2) && (a = void 0), t.rotation = a;
        var s = document.getElementById("ontop").selectedIndex;
        (Ws.isEmpty(s) || s <= 0 || s > 4) && (s = void 0), t.onTop = s;
        var l = document.getElementById("block").checked;
        l && (l = void 0), t.block = l;
      }

      function g(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;

        if (void 0 !== e) {
          if (t && !m()) return !1;
          e.currentState = 0;
        } else e = js.getEvent();

        n = e, document.getElementById("eventi").style.removeProperty("color"), document.getElementById("eventj").style.removeProperty("color"), v(!1), document.getElementById("name").value = e.name, document.getElementById("eventi").valueAsNumber = e.i, document.getElementById("eventj").valueAsNumber = e.j;
        var i = document.getElementById("script");
        Ps.resetSelect(i);
        var o = cl.listScriptClasses();
        o.set("", "");
        var r = i.options,
            a = 0;

        var _iterator51 = _createForOfIteratorHelper(o),
            _step51;

        try {
          for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
            var _e67 = _step51.value;
            r[a] = new Option(_e67[0]), r[a].title = _e67[1], (_e67[0] === n.script || "" === _e67[0] && void 0 === n.script) && (i.selectedIndex = a), a++;
          }
        } catch (err) {
          _iterator51.e(err);
        } finally {
          _iterator51.f();
        }

        if (document.getElementById("state").valueAsNumber = 1, f(!1), function () {
          document.getElementById("key").value = "", document.getElementById("val").value = "";
          var e = document.getElementById("memory");

          for (; e.hasChildNodes();) {
            e.removeChild(e.lastChild);
          }
        }(), !Ws.isEmpty(n.memory)) for (var _e66 in n.memory) {
          y(_e66, n.memory[_e66]);
        }
        return !0;
      }

      function m() {
        return !l || void 0 === n || confirm("Event details not saved. If you continue, details of the currently selected event will be lost. Are you sure you want to continue?");
      }

      function v() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        l = e, document.getElementById("saveEvent").disabled = !e, kl.mapper.requestedNewFrame = !0;
      }

      function y(e, t) {
        var i = document.getElementById("memory"),
            o = i.rows;

        for (var _n36 = 0; _n36 < o.length; _n36++) {
          if (o[_n36].id === e) return void (i.rows[_n36].cells[1].childNodes[0].value = t);
        }

        var r,
            a,
            s,
            l = document.getElementById("memory").rows.length,
            c = document.getElementById("memory").insertRow(l);
        c.id = e, r = c.insertCell(), a = document.createElement("input"), a.type = "text", a.style.width = "5em", a.disabled = !0, a.value = e, r.appendChild(a), r = c.insertCell(), a = document.createElement("input"), a.type = "text", a.style.width = "8em", a.disabled = !0, a.value = t, r.appendChild(a), r = c.insertCell(), s = document.createElement("button"), s.onclick = function () {
          var t = document.getElementById("memory"),
              i = t.rows;

          for (var _n37 = 0; _n37 < i.length; _n37++) {
            if (i[_n37].id === e) {
              t.deleteRow(_n37);
              break;
            }
          }

          void 0 !== n ? Ys.deleteMem(n, e) : console.error("Current event undefined, cannot delete memory");
        }, s.innerText = "-", r.appendChild(s);
      }

      function E(e) {
        var n = document.getElementById("dialogPanel");
        if (null === n) return void console.error("Canont find element with id: dialogPanel");
        var o = document.getElementById("dialogEditorCheckbox");

        if (void 0 !== e && (o.checked = e), o.checked) {
          var _e68 = t.dialog;
          if (void 0 === _e68) _e68 = js.DEFAULT_ID;else if (_e68 === i) return;
          Fs.loadDialog(_e68, Bs.ui.lang, function (o) {
            if (void 0 !== o) {
              r.$data.root = o, t.dialog = _e68, i = _e68, n.style.display = "block";

              var _a15 = document.getElementById("dialogEditPanel");

              if (null === _a15) return void console.error("Canont find element with id: dialogEditPanel");
              _a15.style.display = "none";
            }
          });

          var _o18 = document.getElementById("eventEditorVue");

          if (null === _o18) return void console.error("Canont find element with id: eventEditorVue");
          n.style.top = _o18.getBoundingClientRect().top + window.pageYOffset + "px";
        } else n.style.display = "none";
      }

      e.start = function () {
        Wl.check(), void 0 === o && (o = new ps({
          el: "#eventEditorVue",
          components: {
            "event-editor": wl
          },
          data: {}
        })), function () {
          if (void 0 === r) {
            var _e69 = {
              id: js.FIRST_ELEM_ID
            };
            r = new ps({
              el: "#dialogSummaryVue",
              components: {
                "dialog-summary": Es
              },
              data: {
                root: js.getDialogNode(),
                selectedNodeId: _e69
              }
            });
          }

          void 0 === a && (a = new ps({
            el: "#dialogEditorVue",
            components: {
              "dialog-editor": ps.extend(hl)
            },
            data: {
              root: js.getDialogNode(),
              dialog: js.getDialogNode(),
              disconnectedNodes: [js.getDialogNode()],
              nodeIds: new Array(js.FIRST_ELEM_ID),
              edgeIds: new Array(js.FIRST_ELEM_ID),
              edgeConditions: [],
              edgeScripts: new Map(),
              edgeActions: []
            }
          }));
        }(), new ps({
          el: "#loginVue",
          components: {
            login: yl
          }
        }), s = new ps({
          el: "#autotilePickerVue",
          components: {
            "autotile-picker": Rl
          }
        });
        var e = {
          core: {
            animation: !1,
            data: {
              url: base_path + "data/" + ws.TREE + "/maps",
              dataType: "json"
            },
            check_callback: !0,
            error: function error() {
              console.warn("jsTree error on dialogTree");
            },
            multiple: !1
          },
          plugins: ["contextmenu", "dnd", "unique"]
        };
        $("#mapPanel").jstree(e);
        var t = document.getElementById("canvas1");
        $("#mapPanel").on("create_node.jstree ready.jstree rename_node.jstree delete_node.jstree changed.jstree", function (e, n) {
          switch (e.type) {
            case "ready":
              if (void 0 === d()) {
                var _e70 = $("#mapPanel").jstree(!0).get_json("#", {
                  flat: !0,
                  no_state: !0,
                  no_id: !1,
                  no_children: !1,
                  no_data: !0
                });

                _e70.length > 0 && $("#mapPanel").jstree(!0).select_node(_e70[0]);
              }

              $("#mapPanel").jstree("open_all");
              break;

            case "create_node":
              var _i27 = n.node.id.split("_").pop();

              isNaN(parseInt(_i27)) && (console.info("Cannot generate a sequential numeric id for node: " + n.node.id), _i27 = Ws.getRandomString()), $("#mapPanel").jstree(!0).set_id(n.node, _i27);

            case "rename_node":
            case "delete_node":
              u(!0);
              break;

            case "changed":
              switch (n.action) {
                case "ready":
                  break;

                case "delete_node":
                  var _e71 = $("#mapPanel").jstree(!0).get_prev_dom(n.node);

                  $("#mapPanel").jstree(!0).select_node(_e71);
                  break;

                case "model":
                case "select_node":
                  $("#mapDetailPanel").show();

                  var _i28 = d();

                  kl.start(t, _i28.id, function (e) {
                    void 0 !== e.map ? ($("#mapSizeW").val(e.map.width + ""), $("#mapSizeH").val(e.map.height + ""), void 0 !== e.map.tileset && document.getElementById("tiles").value !== e.map.tileset.image && ($("#tiles").val(e.map.tileset.image), Il.loadTile(e.map.tileset.image, function (t) {
                      e.setTilePicker(t), Il.setMapper(e);
                    }))) : console.error("Map is undefined, for id: " + _i28.id);
                  });
                  break;

                case "deselect_all":
                  break;

                default:
                  console.error('Unexpected event "changed" action: ' + n.action);
              }

              break;

            default:
              console.error("Unexpected event type: " + e.type);
          }
        }), cl.loadProperties(function (e) {
          var t = +e.get("cellWidth") * +e.get("tileColumns") + 2;
          $("#toolsPanel").width(t);
        }), $.getJSON(base_path + "assetlist/tile", function (e) {
          var t = document.getElementById("tiles");

          for (var _n38 = 0; _n38 < e.length; _n38++) {
            t.options.add(new Option(e[_n38], e[_n38]));
          }
        });
      }, e.changeSize = function () {
        var e = parseInt($("#mapSizeW").val()),
            t = parseInt($("#mapSizeH").val());
        kl.changeSize(e, t), u(!0);
      }, e.shiftMapHorizontal = function () {
        var e = parseInt($("#mapHorizontalShift").val()),
            t = kl.shift(e, 0);
        document.getElementById("mapSizeW").value = t.w + "";
      }, e.shiftMapVertical = function () {
        var e = parseInt($("#mapVerticalShift").val()),
            t = kl.shift(0, e);
        document.getElementById("mapSizeH").value = t.h + "";
      }, e.loadNews = function () {}, e.changeTile = function () {
        var e = document.getElementById("tiles").value;
        Il.loadTile(e, function (t) {
          kl.changeTile(e, t);
        }), u(!0);
      }, e.save = function () {
        (Ws.isEmpty(n) || m()) && Il.saveData(function (t, n) {
          t ? kl.saveMap(function (t) {
            t ? e.changeEditState(!1) : console.error("Map save failed");
          }) : console.error("Tilepicker save failed");
        });
      }, e.reload = function () {
        kl.reloadMap(function (e) {
          e && $("#mapPanel").jstree(!0).refresh(!0, !1);
        });
      }, e.getActiveMap = function () {
        return d().id;
      }, e.changeEditState = u, e.changeEventPosition = function () {
        if (void 0 === n) return void console.error("Current event undefined, cannot change its position");
        var e = document.getElementById("eventi").valueAsNumber,
            t = document.getElementById("eventj").valueAsNumber;
        kl.isCellAvailable(n, e, t) ? (v(), kl.changeEventPosition(n, e, t), document.getElementById("eventi").style.removeProperty("color"), document.getElementById("eventj").style.removeProperty("color")) : (v(!1), document.getElementById("eventi").style.color = Us.Color.RED, document.getElementById("eventj").style.color = Us.Color.RED);
      }, e.changeEventScript = function () {
        v(), p();
      }, e.deleteEvent = function () {
        void 0 !== n ? (kl.deleteEvent(n), v(), g(void 0, !1)) : console.error("Current event undefined, cannot delete it");
      }, e.deleteEventState = function () {
        if (void 0 === n) return void console.error("Current event undefined, cannot delete its state");
        var e = document.getElementById("state").valueAsNumber;
        (e > 1 || 1 === e && n.states.length > 1) && e <= n.states.length && (n.states.splice(e - 1, 1), e > 1 && (document.getElementById("state").valueAsNumber -= 1), v(), f(!1));
      }, e.loadEventState = f, e.loadEvent = g, e.saveEvent = function () {
        if (void 0 !== n) {
          if (n.name = document.getElementById("name").value, n.i = document.getElementById("eventi").valueAsNumber, n.j = document.getElementById("eventj").valueAsNumber, n.script = document.getElementById("script").value, h(), void 0 !== t.dialog) {
            var _e72 = t;
            Fs.saveDialog(t.dialog, r.$data.root, function (n) {
              void 0 !== n ? _e72.dialog = n : console.error("Could not save dialog, returned dialog id is undefined: " + t.dialog);
            });
          }

          kl.addEvent(n), e.eventModified(!1);
        }
      }, e.finishEventEditing = function () {
        return !!m() && (n = void 0, v(!1), !0);
      }, e.confirmCloseEventDetails = m, e.eventModified = v, e.addMemory = function () {
        if (void 0 === n) return void console.error("Current event undefined, cannot add to its memory");
        var e = document.getElementById("key").value,
            t = document.getElementById("val").value;
        Ws.isEmpty(e) || Ws.isEmpty(t) || (v(), Ys.saveMem(n, e, t), y(e, t), document.getElementById("key").value = "", document.getElementById("val").value = "");
      }, e.createNode = function () {
        return js.getDialogNode();
      }, e.createEdge = function () {
        return js.getDialogEdge();
      }, e.toggleDialogEditor = E, e.loadDialogEditor = function (e) {
        var t = r.$data.root;

        if (a.$data.root = Fs.search(t, e), void 0 === a.$data.dialog || a.$data.dialog.id !== t.id) {
          var _e73 = new Map(),
              _n39 = new Map();

          Fs.deconstructDialogTree(t, _e73, _n39), a.$data.nodeIds = Array.from(_e73.keys()), a.$data.edgeIds = Array.from(_n39.keys());
        }

        a.$data.dialog = t, r.$data.selectedNodeId.id = e;
        var n = document.getElementById("dialogEditPanel");
        null !== n && (n.style.display = "block"), a.$emit("update-focus");
      }, e.listEventStateConditions = function () {
        return cl.listEventStateConditions();
      }, e.onCancelAutotileSelection = function () {
        s.$emit("cancel-selection");
      };
    }(Pl || (Pl = {}));
  })(), L4W_mapper = i;
})();
