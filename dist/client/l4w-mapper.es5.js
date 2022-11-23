"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e75) { throw _e75; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e76) { didErr = true; err = _e76; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! For license information please see l4w-mapper.js.LICENSE.txt */
var L4W_mapper;

(function () {
  var e = {
    24: function _(e, t, n) {
      var i = n(537),
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
      var i = n(537),
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
      var i = n(537),
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
      var i = n(537),
          o = n(645)(i);
      o.push([e.id, "\n.root[data-v-08ab550b] {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div[data-v-08ab550b] {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon[data-v-08ab550b] {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading[data-v-08ab550b] {\n    width: 2em;\n    height: 2em;\n}\n", "", {
        version: 3,
        sources: ["webpack://./src/client/components/Login.vue"],
        names: [],
        mappings: ";AAyNA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;AACA;AACA;IACA,YAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;AACA;AACA;IACA,iBAAA;IACA,mBAAA;IACA,mBAAA;IACA,4BAAA;AACA;AACA;IACA,iBAAA;IACA,oBAAA;IACA,kBAAA;IACA,2BAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA",
        sourcesContent: ['<template>\n    <div class="root">\n        <script type="application/javascript" async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=1885551381575204"><\/script>\n        <script type="application/javascript" async defer src="https://apis.google.com/js/platform.js?onload=gAsyncInit"><\/script>\n        <div v-show="!loginStatus && loginEnabled">\n            \x3c!-- <img class="statusIcon unloggedIcon" src="/style/ui/unlogged.png" alt="Unlogged icon" title="You are not currently logged in"> --\x3e\n            \x3c!-- Google login --\x3e\n            <div class="g-signin2" data-onsuccess="gLoginCallback" data-theme="dark"></div>\n            \x3c!-- Facebook login --\x3e\n            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false"\n                data-use-continue-as="false" data-width="" data-scope="email" ></div>\n            <br>\n            <slot name="unlogged"></slot>\n        </div>\n        <div v-if="loginStatus">\n            <img class="statusIcon loggedIcon" src="/style/ui/logged.png" alt="Logged icon" title="You are currently logged in!">\n            <br>\n            <div v-if="flagLoggingOut">\n                <img class="loading" src="/style/ui/spinner.gif" alt="logging out..." />\n            </div>\n            <div v-else>\n                <button v-on:click="logout">Logout</button>\n                <br><br>\n                <slot name="logged"></slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue from "vue"\nimport { Resource } from "../core/util/Resource"\nimport { AuthService, IAuthRequest, IAuthResponse, IHealthResponse } from "../../common/ServerAPI"\nimport { Utils } from "../../common/Utils";\n\ndeclare let FB: any; // Loaded from Facebook script\ndeclare let gapi: any; // Loaded from Google script\n\ninterface FBLoginResponse {\n    status: "connected" | "not_authorized" | "unknown",\n    authResponse?: {\n        accessToken: string,\n        expiresIn: any,\n        signedRequest: any,\n        userID: string\n    }\n}\n\nexport default Vue.extend({\n    name: "login",\n    props: {\n        showIcons: {\n            type: Boolean,\n            required: false,\n            default: true\n        }\n    },\n    data: function (): {\n        loginEnabled: boolean,\n        loginStatus: boolean,\n        loginService?: AuthService,\n        fbToken?: string,\n        flagLoggingOut: boolean\n    } {\n        return {\n            loginEnabled: false,\n            loginStatus: false,\n            loginService: undefined,\n            fbToken: undefined,\n            flagLoggingOut: false\n       }\n    },\n    created: function() {\n        // Check if database is available\n        Resource.sendGETRequest("/health", (response?: string) => {\n            if(response === undefined) {\n                console.error("No response from health endpoint");\n            } else {\n                let resp: IHealthResponse = JSON.parse(response);\n                if(!resp.database) {\n                    console.warn("Database unavailable, will not enable Social Login");\n                } else {\n                    this.loginEnabled = true; \n\n                    // Add Google login meta tags\n                    let meta = document.createElement("meta");\n                    meta.name = "google-signin-scope";\n                    meta.content = "profile email";\n                    document.head.appendChild(meta);\n\n                    meta = document.createElement("meta");\n                    meta.name = "google-signin-client_id";\n                    meta.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com";\n                    document.head.appendChild(meta);\n\n                    // Init Facebook login\n                    let vueScope = this;\n                    window["fbAsyncInit"] = function() {\n                        FB.init({\n                            appId: "1885551381575204",\n                            autoLogAppEvents: false,\n                            cookie: true,\n                            xfbml: false,\n                            version : "v12.0"\n                        });\n                        FB.Event.subscribe("auth.statusChange", function(response: FBLoginResponse) {\n                            vueScope.fbLoginStatusChangeCallback(response);\n                        });\n                        FB.getLoginStatus(function(response: FBLoginResponse) {\n                            vueScope.fbLoginStatusChangeCallback(response);\n                        });\n                    };\n\n                    // Init Google login\n                    window["gAsyncInit"] = function() {\n                        gapi.load("auth2", function() {\n                            const authInstance = gapi.auth2.getAuthInstance();\n                            if(authInstance.isSignedIn.get()) {\n                                Vue.set(vueScope, "loginStatus", true);\n                                Vue.set(vueScope, "loginService", "google");\n                            }\n                        });\n                    };\n                    window["gLoginCallback"] = this.gLoginCallback;\n                }\n            }\n        });\n    },\n    methods: {\n        logoutCallback: function() {\n            Vue.set(this, "loginStatus", false);\n            Vue.set(this, "loginService", undefined);\n            Vue.set(this, "flagLoggingOut", false);\n        },\n        logout: function logout() {\n            // Check which service is used, only logout from that service\n            if(this.loginStatus) {\n                switch(this.loginService) {\n                case "facebook":\n                    // Facebook logout\n                    if(this.fbToken !== undefined) {\n                        // Since Facebook logout is slow, display an animation and hide the buttons\n                        Vue.set(this, "flagLoggingOut", true);\n                        let vueScope = this;\n                        // Remove permission, so that the user is asked to authenticate the app again\n                        // (seems like FB.logout() isn\'t enough, if you refresh the page you are still logged)\n                        FB.api("/me/permissions", "delete", {\n                            access_token: vueScope.fbToken\n                        }, function(response: any) {\n                            if(response.success !== true) {\n                                console.error("Facebook permission revoking failed: ", response);\n                            }\n                            FB.logout(function(response: FBLoginResponse)  {\n                                vueScope.logoutCallback();\n                            });\n                        });\n                        this.fbToken = undefined;\n                    }\n                    break;\n                case "google":\n                    // Google logout\n                    let auth2 = gapi.auth2.getAuthInstance();\n                    auth2.signOut().then(this.logoutCallback());\n                    break;\n                default:\n                    console.error("Unexpected loginService: " + this.loginService);\n                }\n                Resource.sendGETRequest("logout", function(response?: string) {\n                    // Nothing to do\n                });\n            } else {\n                console.error("Cannot logout, user is not currently logged in")\n            }\n        },\n        fbLoginStatusChangeCallback: function(response: FBLoginResponse) {\n            if(response.status === "connected") {\n                this.fbToken = response.authResponse!.accessToken;\n                let request: IAuthRequest = {\n                    service: "facebook",\n                    token: response.authResponse!.accessToken,\n                    userId: response.authResponse!.userID\n                };\n                this.doLogin(request);\n            }\n        },\n        gLoginCallback: function(googleUser: any) {\n            let request: IAuthRequest = {\n                service: "google",\n                token: googleUser.getAuthResponse().id_token\n            };\n            this.doLogin(request);\n        },\n        doLogin(request: IAuthRequest) {\n            let vueScope = this;\n            Resource.sendPOSTRequest("/auth", JSON.stringify(request), function(response?: string) {\n                if(!Utils.isEmpty(response)) {\n                    try {\n                        let authResponse: IAuthResponse = JSON.parse(response!);\n                        if(authResponse.result) {\n                            Vue.set(vueScope, "loginStatus", true);\n                            Vue.set(vueScope, "loginService", request.service);\n                            return;\n                        }\n                    } catch(e) {\n                        console.error(e);\n                    }\n                }\n                Vue.set(vueScope, "loginStatus", false);\n                Vue.set(vueScope, "loginService", undefined);\n                console.warn("Login with " + request.service + " failed");\n            });\n        }\n    }\n});\n<\/script>\n\n<style scoped>\n.root {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading {\n    width: 2em;\n    height: 2em;   \n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = o;
    },
    645: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map(function (t) {
            var n = "",
                i = void 0 !== t[5];
            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), i && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), i && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n;
          }).join("");
        }, t.i = function (e, n, i, o, r) {
          "string" == typeof e && (e = [[null, e, void 0]]);
          var a = {};
          if (i) for (var s = 0; s < this.length; s++) {
            var l = this[s][0];
            null != l && (a[l] = !0);
          }

          for (var c = 0; c < e.length; c++) {
            var d = [].concat(e[c]);
            i && a[d[0]] || (void 0 !== r && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = r), n && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = n) : d[2] = n), o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = o) : d[4] = "".concat(o)), t.push(d));
          }
        }, t;
      };
    },
    537: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = e[1],
            n = e[3];
        if (!n) return t;

        if ("function" == typeof btoa) {
          var i = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),
              r = "/*# ".concat(o, " */"),
              a = n.sources.map(function (e) {
            return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */");
          });
          return [t].concat(a).concat([r]).join("\n");
        }

        return [t].join("\n");
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
        return zs;
      },
      Mapper: function Mapper() {
        return Dl;
      },
      MapperPage: function MapperPage() {
        return Hl;
      }
    });
    var e = {};
    n.r(e), n.d(e, {
      Ann: function Ann() {
        return dl;
      },
      Asgan: function Asgan() {
        return ul;
      },
      BaseScript: function BaseScript() {
        return cl;
      },
      DEFAULT_DIALOG: function DEFAULT_DIALOG() {
        return ll;
      },
      DEFAULT_MESSAGE: function DEFAULT_MESSAGE() {
        return sl;
      },
      Script1: function Script1() {
        return pl;
      },
      Transports: function Transports() {
        return fl;
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
          s = Ge(Boolean, o.type);
      if (s > -1) if (r && !A(o, "default")) a = !1;else if ("" === a || a === I(e)) {
        var l = Ge(String, o.type);
        (l < 0 || s < l) && (a = !0);
      }

      if (void 0 === a) {
        a = function (e, t, n) {
          if (A(t, "default")) {
            var i = t["default"];
            return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof i && "Function" !== He(t.type) ? i.call(e) : i;
          }
        }(i, o, e);

        var c = Ce;
        Ie(!0), Te(a), Ie(c);
      }

      return a;
    }

    var Ue = /^\s*function (\w+)/;

    function He(e) {
      var t = e && e.toString().match(Ue);
      return t ? t[1] : "";
    }

    function Ve(e, t) {
      return He(e) === He(t);
    }

    function Ge(e, t) {
      if (!Array.isArray(t)) return Ve(t, e) ? 0 : -1;

      for (var n = 0, i = t.length; n < i; n++) {
        if (Ve(t[n], e)) return n;
      }

      return -1;
    }

    function qe(e, t, n) {
      ge();

      try {
        if (t) for (var i = t; i = i.$parent;) {
          var o = i.$options.errorCaptured;
          if (o) for (var r = 0; r < o.length; r++) {
            try {
              if (!1 === o[r].call(i, e, t, n)) return;
            } catch (e) {
              Ye(e, i, "errorCaptured hook");
            }
          }
        }
        Ye(e, t, n);
      } finally {
        me();
      }
    }

    function ze(e, t, n, i, o) {
      var r;

      try {
        (r = n ? e.apply(t, n) : e.call(t)) && !r._isVue && f(r) && !r._handled && (r["catch"](function (e) {
          return qe(e, i, o + " (Promise/async)");
        }), r._handled = !0);
      } catch (e) {
        qe(e, i, o);
      }

      return r;
    }

    function Ye(e, t, n) {
      if (F.errorHandler) try {
        return F.errorHandler.call(null, e, t, n);
      } catch (t) {
        t !== e && Ke(t);
      }
      Ke(e);
    }

    function Ke(e, t, n) {
      if (!Y && !K || "undefined" == typeof console) throw e;
      console.error(e);
    }

    var Qe,
        Je = !1,
        Xe = [],
        Ze = !1;

    function et() {
      Ze = !1;
      var e = Xe.slice(0);
      Xe.length = 0;

      for (var t = 0; t < e.length; t++) {
        e[t]();
      }
    }

    if ("undefined" != typeof Promise && le(Promise)) {
      var tt = Promise.resolve();
      Qe = function Qe() {
        tt.then(et), te && setTimeout(M);
      }, Je = !0;
    } else if (X || "undefined" == typeof MutationObserver || !le(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Qe = "undefined" != typeof setImmediate && le(setImmediate) ? function () {
      setImmediate(et);
    } : function () {
      setTimeout(et, 0);
    };else {
      var nt = 1,
          it = new MutationObserver(et),
          ot = document.createTextNode(String(nt));
      it.observe(ot, {
        characterData: !0
      }), Qe = function Qe() {
        nt = (nt + 1) % 2, ot.data = String(nt);
      }, Je = !0;
    }

    function rt(e, t) {
      var n;
      if (Xe.push(function () {
        if (e) try {
          e.call(t);
        } catch (e) {
          qe(e, t, "nextTick");
        } else n && n(t);
      }), Ze || (Ze = !0, Qe()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
        n = e;
      });
    }

    var at = new ce();

    function st(e) {
      lt(e, at), at.clear();
    }

    function lt(e, t) {
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
          lt(e[n], t);
        } else for (n = (i = Object.keys(e)).length; n--;) {
          lt(e[i[n]], t);
        }
      }
    }

    var ct = b(function (e) {
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

    function dt(e, t) {
      function n() {
        var e = arguments,
            i = n.fns;
        if (!Array.isArray(i)) return ze(i, null, arguments, t, "v-on handler");

        for (var o = i.slice(), r = 0; r < o.length; r++) {
          ze(o[r], null, e, t, "v-on handler");
        }
      }

      return n.fns = e, n;
    }

    function ut(e, t, n, i, r, s) {
      var l, c, d, u;

      for (l in e) {
        c = e[l], d = t[l], u = ct(l), o(c) || (o(d) ? (o(c.fns) && (c = e[l] = dt(c, s)), a(u.once) && (c = e[l] = r(u.name, c, u.capture)), n(u.name, c, u.capture, u.passive, u.params)) : c !== d && (d.fns = c, e[l] = d));
      }

      for (l in t) {
        o(e[l]) && i((u = ct(l)).name, t[l], u.capture);
      }
    }

    function ft(e, t, n) {
      var i;
      e instanceof ve && (e = e.data.hook || (e.data.hook = {}));
      var s = e[t];

      function l() {
        n.apply(this, arguments), y(i.fns, l);
      }

      o(s) ? i = dt([l]) : r(s.fns) && a(s.merged) ? (i = s).fns.push(l) : i = dt([s, l]), i.merged = !0, e[t] = i;
    }

    function pt(e, t, n, i, o) {
      if (r(t)) {
        if (A(t, n)) return e[n] = t[n], o || delete t[n], !0;
        if (A(t, i)) return e[n] = t[i], o || delete t[i], !0;
      }

      return !1;
    }

    function ht(e) {
      return s(e) ? [Ae(e)] : Array.isArray(e) ? mt(e) : void 0;
    }

    function gt(e) {
      return r(e) && r(e.text) && !1 === e.isComment;
    }

    function mt(e, t) {
      var n,
          i,
          l,
          c,
          d = [];

      for (n = 0; n < e.length; n++) {
        o(i = e[n]) || "boolean" == typeof i || (c = d[l = d.length - 1], Array.isArray(i) ? i.length > 0 && (gt((i = mt(i, (t || "") + "_" + n))[0]) && gt(c) && (d[l] = Ae(c.text + i[0].text), i.shift()), d.push.apply(d, i)) : s(i) ? gt(c) ? d[l] = Ae(c.text + i) : "" !== i && d.push(Ae(i)) : gt(i) && gt(c) ? d[l] = Ae(c.text + i.text) : (a(e._isVList) && r(i.tag) && o(i.key) && r(t) && (i.key = "__vlist" + t + "_" + n + "__"), d.push(i)));
      }

      return d;
    }

    function vt(e, t) {
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

    function yt(e, t) {
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
        n[c].every(Et) && delete n[c];
      }

      return n;
    }

    function Et(e) {
      return e.isComment && !e.asyncFactory || " " === e.text;
    }

    function At(e) {
      return e.isComment && e.asyncFactory;
    }

    function bt(e, n, i) {
      var o,
          r = Object.keys(n).length > 0,
          a = e ? !!e.$stable : !r,
          s = e && e.$key;

      if (e) {
        if (e._normalized) return e._normalized;
        if (a && i && i !== t && s === i.$key && !r && !i.$hasNormal) return i;

        for (var l in o = {}, e) {
          e[l] && "$" !== l[0] && (o[l] = _t(n, l, e[l]));
        }
      } else o = {};

      for (var c in n) {
        c in o || (o[c] = St(n, c));
      }

      return e && Object.isExtensible(e) && (e._normalized = o), V(o, "$stable", a), V(o, "$key", s), V(o, "$hasNormal", r), o;
    }

    function _t(e, t, n) {
      var i = function i() {
        var e = arguments.length ? n.apply(null, arguments) : n({}),
            t = (e = e && "object" == _typeof(e) && !Array.isArray(e) ? [e] : ht(e)) && e[0];
        return e && (!t || 1 === e.length && t.isComment && !At(t)) ? void 0 : e;
      };

      return n.proxy && Object.defineProperty(e, t, {
        get: i,
        enumerable: !0,
        configurable: !0
      }), i;
    }

    function St(e, t) {
      return function () {
        return e[t];
      };
    }

    function wt(e, t) {
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

    function Ct(e, t, n, i) {
      var o,
          r = this.$scopedSlots[e];
      r ? (n = n || {}, i && (n = N(N({}, i), n)), o = r(n) || ("function" == typeof t ? t() : t)) : o = this.$slots[e] || ("function" == typeof t ? t() : t);
      var a = n && n.slot;
      return a ? this.$createElement("template", {
        slot: a
      }, o) : o;
    }

    function It(e) {
      return je(this.$options, "filters", e) || O;
    }

    function kt(e, t) {
      return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
    }

    function Tt(e, t, n, i, o) {
      var r = F.keyCodes[t] || n;
      return o && i && !F.keyCodes[t] ? kt(o, i) : r ? kt(r, e) : i ? I(i) !== t : void 0 === e;
    }

    function Nt(e, t, n, i, o) {
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

    function xt(e, t) {
      var n = this._staticTrees || (this._staticTrees = []),
          i = n[e];
      return i && !t || Dt(i = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), i;
    }

    function Mt(e, t, n) {
      return Dt(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
    }

    function Dt(e, t, n) {
      if (Array.isArray(e)) for (var i = 0; i < e.length; i++) {
        e[i] && "string" != typeof e[i] && Ot(e[i], t + "_" + i, n);
      } else Ot(e, t, n);
    }

    function Ot(e, t, n) {
      e.isStatic = !0, e.key = t, e.isOnce = n;
    }

    function Lt(e, t) {
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

    function $t(e, t, n, i) {
      t = t || {
        $stable: !n
      };

      for (var o = 0; o < e.length; o++) {
        var r = e[o];
        Array.isArray(r) ? $t(r, t, n) : r && (r.proxy && (r.fn.proxy = !0), t[r.key] = r.fn);
      }

      return i && (t.$key = i), t;
    }

    function Rt(e, t) {
      for (var n = 0; n < t.length; n += 2) {
        var i = t[n];
        "string" == typeof i && i && (e[t[n]] = t[n + 1]);
      }

      return e;
    }

    function Wt(e, t) {
      return "string" == typeof e ? t + e : e;
    }

    function Pt(e) {
      e._o = Mt, e._n = h, e._s = p, e._l = wt, e._t = Ct, e._q = L, e._i = R, e._m = xt, e._f = It, e._k = Tt, e._b = Nt, e._v = Ae, e._e = Ee, e._u = $t, e._g = Lt, e._d = Rt, e._p = Wt;
    }

    function Bt(e, n, i, o, r) {
      var s,
          l = this,
          c = r.options;
      A(o, "_uid") ? (s = Object.create(o))._original = o : (s = o, o = o._original);
      var d = a(c._compiled),
          u = !d;
      this.data = e, this.props = n, this.children = i, this.parent = o, this.listeners = e.on || t, this.injections = vt(c.inject, o), this.slots = function () {
        return l.$slots || bt(e.scopedSlots, l.$slots = yt(i, o)), l.$slots;
      }, Object.defineProperty(this, "scopedSlots", {
        enumerable: !0,
        get: function get() {
          return bt(e.scopedSlots, this.slots());
        }
      }), d && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = bt(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function (e, t, n, i) {
        var r = qt(s, e, t, n, i, u);
        return r && !Array.isArray(r) && (r.fnScopeId = c._scopeId, r.fnContext = o), r;
      } : this._c = function (e, t, n, i) {
        return qt(s, e, t, n, i, u);
      };
    }

    function jt(e, t, n, i, o) {
      var r = be(e);
      return r.fnContext = n, r.fnOptions = i, t.slot && ((r.data || (r.data = {})).slot = t.slot), r;
    }

    function Ft(e, t) {
      for (var n in t) {
        e[S(n)] = t[n];
      }
    }

    Pt(Bt.prototype);
    var Ut = {
      init: function init(e, t) {
        if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
          var n = e;
          Ut.prepatch(n, n);
        } else (e.componentInstance = function (e, t) {
          var n = {
            _isComponent: !0,
            _parentVnode: e,
            parent: t
          },
              i = e.data.inlineTemplate;
          return r(i) && (n.render = i.render, n.staticRenderFns = i.staticRenderFns), new e.componentOptions.Ctor(n);
        }(e, nn)).$mount(t ? e.elm : void 0, t);
      },
      prepatch: function prepatch(e, n) {
        var i = n.componentOptions;
        !function (e, n, i, o, r) {
          var a = o.data.scopedSlots,
              s = e.$scopedSlots,
              l = !!(a && !a.$stable || s !== t && !s.$stable || a && e.$scopedSlots.$key !== a.$key || !a && e.$scopedSlots.$key),
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
          e.$options._parentListeners = i, tn(e, i, g), c && (e.$slots = yt(r, o.context), e.$forceUpdate());
        }(n.componentInstance = e.componentInstance, i.propsData, i.listeners, n, i.children);
      },
      insert: function insert(e) {
        var t,
            n = e.context,
            i = e.componentInstance;
        i._isMounted || (i._isMounted = !0, ln(i, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = i)._inactive = !1, dn.push(t)) : an(i, !0));
      },
      destroy: function destroy(e) {
        var t = e.componentInstance;
        t._isDestroyed || (e.data.keepAlive ? sn(t, !0) : t.$destroy());
      }
    },
        Ht = Object.keys(Ut);

    function Vt(e, n, i, s, c) {
      if (!o(e)) {
        var d = i.$options._base;

        if (l(e) && (e = d.extend(e)), "function" == typeof e) {
          var u;
          if (o(e.cid) && (e = function (e, t) {
            if (a(e.error) && r(e.errorComp)) return e.errorComp;
            if (r(e.resolved)) return e.resolved;
            var n = Kt;
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
                e.resolved = Qt(n, t), s ? i.length = 0 : u(!0);
              }),
                  h = W(function (t) {
                r(e.errorComp) && (e.error = !0, u(!0));
              }),
                  g = e(p, h);

              return l(g) && (f(g) ? o(e.resolved) && g.then(p, h) : f(g.component) && (g.component.then(p, h), r(g.error) && (e.errorComp = Qt(g.error, t)), r(g.loading) && (e.loadingComp = Qt(g.loading, t), 0 === g.delay ? e.loading = !0 : c = setTimeout(function () {
                c = null, o(e.resolved) && o(e.error) && (e.loading = !0, u(!1));
              }, g.delay || 200)), r(g.timeout) && (d = setTimeout(function () {
                d = null, o(e.resolved) && h(null);
              }, g.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved;
            }
          }(u = e, d), void 0 === e)) return function (e, t, n, i, o) {
            var r = Ee();
            return r.asyncFactory = e, r.asyncMeta = {
              data: t,
              context: n,
              children: i,
              tag: o
            }, r;
          }(u, n, i, s, c);
          n = n || {}, Nn(e), r(n.model) && function (e, t) {
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
                pt(a, l, c, d, !0) || pt(a, s, c, d, !1);
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
            } else r(i.attrs) && Ft(l, i.attrs), r(i.props) && Ft(l, i.props);
            var u = new Bt(i, l, a, o, e),
                f = s.render.call(null, u._c, u);
            if (f instanceof ve) return jt(f, i, u.parent, s);

            if (Array.isArray(f)) {
              for (var p = ht(f) || [], h = new Array(p.length), g = 0; g < p.length; g++) {
                h[g] = jt(p[g], i, u.parent, s);
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
            for (var t = e.hook || (e.hook = {}), n = 0; n < Ht.length; n++) {
              var i = Ht[n],
                  o = t[i],
                  r = Ut[i];
              o === r || o && o._merged || (t[i] = o ? Gt(r, o) : r);
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

    function Gt(e, t) {
      var n = function n(_n2, i) {
        e(_n2, i), t(_n2, i);
      };

      return n._merged = !0, n;
    }

    function qt(e, t, n, i, o, c) {
      return (Array.isArray(n) || s(n)) && (o = i, i = n, n = void 0), a(c) && (o = 2), function (e, t, n, i, o) {
        if (r(n) && r(n.__ob__)) return Ee();
        if (r(n) && r(n.is) && (t = n.is), !t) return Ee();
        var a, s, c;
        (Array.isArray(i) && "function" == typeof i[0] && ((n = n || {}).scopedSlots = {
          "default": i[0]
        }, i.length = 0), 2 === o ? i = ht(i) : 1 === o && (i = function (e) {
          for (var t = 0; t < e.length; t++) {
            if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
          }

          return e;
        }(i)), "string" == typeof t) ? (s = e.$vnode && e.$vnode.ns || F.getTagNamespace(t), a = F.isReservedTag(t) ? new ve(F.parsePlatformTagName(t), n, i, void 0, void 0, e) : n && n.pre || !r(c = je(e.$options, "components", t)) ? new ve(t, n, i, void 0, void 0, e) : Vt(c, n, e, i, t)) : a = Vt(t, n, e, i);
        return Array.isArray(a) ? a : r(a) ? (r(s) && zt(a, s), r(n) && function (e) {
          l(e.style) && st(e.style), l(e["class"]) && st(e["class"]);
        }(n), a) : Ee();
      }(e, t, n, i, o);
    }

    function zt(e, t, n) {
      if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), r(e.children)) for (var i = 0, s = e.children.length; i < s; i++) {
        var l = e.children[i];
        r(l.tag) && (o(l.ns) || a(n) && "svg" !== l.tag) && zt(l, t, n);
      }
    }

    var Yt,
        Kt = null;

    function Qt(e, t) {
      return (e.__esModule || de && "Module" === e[Symbol.toStringTag]) && (e = e["default"]), l(e) ? t.extend(e) : e;
    }

    function Jt(e) {
      if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if (r(n) && (r(n.componentOptions) || At(n))) return n;
      }
    }

    function Xt(e, t) {
      Yt.$on(e, t);
    }

    function Zt(e, t) {
      Yt.$off(e, t);
    }

    function en(e, t) {
      var n = Yt;
      return function i() {
        var o = t.apply(null, arguments);
        null !== o && n.$off(e, i);
      };
    }

    function tn(e, t, n) {
      Yt = e, ut(t, n || {}, Xt, Zt, en, e), Yt = void 0;
    }

    var nn = null;

    function on(e) {
      var t = nn;
      return nn = e, function () {
        nn = t;
      };
    }

    function rn(e) {
      for (; e && (e = e.$parent);) {
        if (e._inactive) return !0;
      }

      return !1;
    }

    function an(e, t) {
      if (t) {
        if (e._directInactive = !1, rn(e)) return;
      } else if (e._directInactive) return;

      if (e._inactive || null === e._inactive) {
        e._inactive = !1;

        for (var n = 0; n < e.$children.length; n++) {
          an(e.$children[n]);
        }

        ln(e, "activated");
      }
    }

    function sn(e, t) {
      if (!(t && (e._directInactive = !0, rn(e)) || e._inactive)) {
        e._inactive = !0;

        for (var n = 0; n < e.$children.length; n++) {
          sn(e.$children[n]);
        }

        ln(e, "deactivated");
      }
    }

    function ln(e, t) {
      ge();
      var n = e.$options[t],
          i = t + " hook";
      if (n) for (var o = 0, r = n.length; o < r; o++) {
        ze(n[o], e, null, e, i);
      }
      e._hasHookEvent && e.$emit("hook:" + t), me();
    }

    var cn = [],
        dn = [],
        un = {},
        fn = !1,
        pn = !1,
        hn = 0,
        gn = 0,
        mn = Date.now;

    if (Y && !X) {
      var vn = window.performance;
      vn && "function" == typeof vn.now && mn() > document.createEvent("Event").timeStamp && (mn = function mn() {
        return vn.now();
      });
    }

    function yn() {
      var e, t;

      for (gn = mn(), pn = !0, cn.sort(function (e, t) {
        return e.id - t.id;
      }), hn = 0; hn < cn.length; hn++) {
        (e = cn[hn]).before && e.before(), t = e.id, un[t] = null, e.run();
      }

      var n = dn.slice(),
          i = cn.slice();
      hn = cn.length = dn.length = 0, un = {}, fn = pn = !1, function (e) {
        for (var t = 0; t < e.length; t++) {
          e[t]._inactive = !0, an(e[t], !0);
        }
      }(n), function (e) {
        for (var t = e.length; t--;) {
          var n = e[t],
              i = n.vm;
          i._watcher === n && i._isMounted && !i._isDestroyed && ln(i, "updated");
        }
      }(i), se && F.devtools && se.emit("flush");
    }

    var En = 0,
        An = function An(e, t, n, i, o) {
      this.vm = e, o && (e._watcher = this), e._watchers.push(this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, this.sync = !!i.sync, this.before = i.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++En, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ce(), this.newDepIds = new ce(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
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

    An.prototype.get = function () {
      var e;
      ge(this);
      var t = this.vm;

      try {
        e = this.getter.call(t, t);
      } catch (e) {
        if (!this.user) throw e;
        qe(e, t, 'getter for watcher "' + this.expression + '"');
      } finally {
        this.deep && st(e), me(), this.cleanupDeps();
      }

      return e;
    }, An.prototype.addDep = function (e) {
      var t = e.id;
      this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
    }, An.prototype.cleanupDeps = function () {
      for (var e = this.deps.length; e--;) {
        var t = this.deps[e];
        this.newDepIds.has(t.id) || t.removeSub(this);
      }

      var n = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
    }, An.prototype.update = function () {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
        var t = e.id;

        if (null == un[t]) {
          if (un[t] = !0, pn) {
            for (var n = cn.length - 1; n > hn && cn[n].id > e.id;) {
              n--;
            }

            cn.splice(n + 1, 0, e);
          } else cn.push(e);

          fn || (fn = !0, rt(yn));
        }
      }(this);
    }, An.prototype.run = function () {
      if (this.active) {
        var e = this.get();

        if (e !== this.value || l(e) || this.deep) {
          var t = this.value;

          if (this.value = e, this.user) {
            var n = 'callback for watcher "' + this.expression + '"';
            ze(this.cb, this.vm, [e, t], this.vm, n);
          } else this.cb.call(this.vm, e, t);
        }
      }
    }, An.prototype.evaluate = function () {
      this.value = this.get(), this.dirty = !1;
    }, An.prototype.depend = function () {
      for (var e = this.deps.length; e--;) {
        this.deps[e].depend();
      }
    }, An.prototype.teardown = function () {
      if (this.active) {
        this.vm._isBeingDestroyed || y(this.vm._watchers, this);

        for (var e = this.deps.length; e--;) {
          this.deps[e].removeSub(this);
        }

        this.active = !1;
      }
    };
    var bn = {
      enumerable: !0,
      configurable: !0,
      get: M,
      set: M
    };

    function _n(e, t, n) {
      bn.get = function () {
        return this[t][n];
      }, bn.set = function (e) {
        this[t][n] = e;
      }, Object.defineProperty(e, n, bn);
    }

    var Sn = {
      lazy: !0
    };

    function wn(e, t, n) {
      var i = !ae();
      "function" == typeof n ? (bn.get = i ? Cn(t) : In(n), bn.set = M) : (bn.get = n.get ? i && !1 !== n.cache ? Cn(t) : In(n.get) : M, bn.set = n.set || M), Object.defineProperty(e, t, bn);
    }

    function Cn(e) {
      return function () {
        var t = this._computedWatchers && this._computedWatchers[e];
        if (t) return t.dirty && t.evaluate(), pe.target && t.depend(), t.value;
      };
    }

    function In(e) {
      return function () {
        return e.call(this, this);
      };
    }

    function kn(e, t, n, i) {
      return d(n) && (i = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, i);
    }

    var Tn = 0;

    function Nn(e) {
      var t = e.options;

      if (e["super"]) {
        var n = Nn(e["super"]);

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

    function xn(e) {
      this._init(e);
    }

    function Mn(e) {
      return e && (e.Ctor.options.name || e.tag);
    }

    function Dn(e, t) {
      return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, !("[object RegExp]" !== c.call(n)) && e.test(t));
      var n;
    }

    function On(e, t) {
      var n = e.cache,
          i = e.keys,
          o = e._vnode;

      for (var r in n) {
        var a = n[r];

        if (a) {
          var s = a.name;
          s && !t(s) && Ln(n, r, i, o);
        }
      }
    }

    function Ln(e, t, n, i) {
      var o = e[t];
      !o || i && o.tag === i.tag || o.componentInstance.$destroy(), e[t] = null, y(n, t);
    }

    !function (e) {
      e.prototype._init = function (e) {
        var n = this;
        n._uid = Tn++, n._isVue = !0, e && e._isComponent ? function (e, t) {
          var n = e.$options = Object.create(e.constructor.options),
              i = t._parentVnode;
          n.parent = t.parent, n._parentVnode = i;
          var o = i.componentOptions;
          n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
        }(n, e) : n.$options = Be(Nn(n.constructor), e || {}, n), n._renderProxy = n, n._self = n, function (e) {
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
          t && tn(e, t);
        }(n), function (e) {
          e._vnode = null, e._staticTrees = null;
          var n = e.$options,
              i = e.$vnode = n._parentVnode,
              o = i && i.context;
          e.$slots = yt(n._renderChildren, o), e.$scopedSlots = t, e._c = function (t, n, i, o) {
            return qt(e, t, n, i, o, !1);
          }, e.$createElement = function (t, n, i, o) {
            return qt(e, t, n, i, o, !0);
          };
          var r = i && i.data;
          Ne(e, "$attrs", r && r.attrs || t, null, !0), Ne(e, "$listeners", n._parentListeners || t, null, !0);
        }(n), ln(n, "beforeCreate"), function (e) {
          var t = vt(e.$options.inject, e);
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
              Ne(i, _r2, a), _r2 in e || _n(e, "_props", _r2);
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
                return qe(e, t, "data()"), {};
              } finally {
                me();
              }
            }(t, e) : t || {}) || (t = {});

            for (var n = Object.keys(t), i = e.$options.props, o = (e.$options.methods, n.length); o--;) {
              var r = n[o];
              i && A(i, r) || H(r) || _n(e, "_data", r);
            }

            Te(t, !0);
          }(e) : Te(e._data = {}, !0), t.computed && function (e, t) {
            var n = e._computedWatchers = Object.create(null),
                i = ae();

            for (var o in t) {
              var r = t[o],
                  a = "function" == typeof r ? r : r.get;
              i || (n[o] = new An(e, a || M, M, Sn)), o in e || wn(e, o, r);
            }
          }(e, t.computed), t.watch && t.watch !== ie && function (e, t) {
            for (var n in t) {
              var i = t[n];
              if (Array.isArray(i)) for (var o = 0; o < i.length; o++) {
                kn(e, n, i[o]);
              } else kn(e, n, i);
            }
          }(e, t.watch);
        }(n), function (e) {
          var t = e.$options.provide;
          t && (e._provided = "function" == typeof t ? t.call(e) : t);
        }(n), ln(n, "created"), n.$options.el && n.$mount(n.$options.el);
      };
    }(xn), function (e) {
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
        if (d(t)) return kn(i, e, t, n);
        (n = n || {}).user = !0;
        var o = new An(i, e, t, n);

        if (n.immediate) {
          var r = 'callback for immediate watcher "' + o.expression + '"';
          ge(), ze(t, i, [o.value], i, r), me();
        }

        return function () {
          o.teardown();
        };
      };
    }(xn), function (e) {
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
            ze(n[r], t, i, t, o);
          }
        }

        return t;
      };
    }(xn), function (e) {
      e.prototype._update = function (e, t) {
        var n = this,
            i = n.$el,
            o = n._vnode,
            r = on(n);
        n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), r(), i && (i.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
      }, e.prototype.$forceUpdate = function () {
        this._watcher && this._watcher.update();
      }, e.prototype.$destroy = function () {
        var e = this;

        if (!e._isBeingDestroyed) {
          ln(e, "beforeDestroy"), e._isBeingDestroyed = !0;
          var t = e.$parent;
          !t || t._isBeingDestroyed || e.$options["abstract"] || y(t.$children, e), e._watcher && e._watcher.teardown();

          for (var n = e._watchers.length; n--;) {
            e._watchers[n].teardown();
          }

          e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), ln(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
        }
      };
    }(xn), function (e) {
      Pt(e.prototype), e.prototype.$nextTick = function (e) {
        return rt(e, this);
      }, e.prototype._render = function () {
        var e,
            t = this,
            n = t.$options,
            i = n.render,
            o = n._parentVnode;
        o && (t.$scopedSlots = bt(o.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = o;

        try {
          Kt = t, e = i.call(t._renderProxy, t.$createElement);
        } catch (n) {
          qe(n, t, "render"), e = t._vnode;
        } finally {
          Kt = null;
        }

        return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ve || (e = Ee()), e.parent = o, e;
      };
    }(xn);
    var $n = [String, RegExp, Array],
        Rn = {
      name: "keep-alive",
      "abstract": !0,
      props: {
        include: $n,
        exclude: $n,
        max: [String, Number]
      },
      methods: {
        cacheVNode: function cacheVNode() {
          var e = this,
              t = e.cache,
              n = e.keys,
              i = e.vnodeToCache,
              o = e.keyToCache;

          if (i) {
            var r = i.tag,
                a = i.componentInstance,
                s = i.componentOptions;
            t[o] = {
              name: Mn(s),
              tag: r,
              componentInstance: a
            }, n.push(o), this.max && n.length > parseInt(this.max) && Ln(t, n[0], n, this._vnode), this.vnodeToCache = null;
          }
        }
      },
      created: function created() {
        this.cache = Object.create(null), this.keys = [];
      },
      destroyed: function destroyed() {
        for (var e in this.cache) {
          Ln(this.cache, e, this.keys);
        }
      },
      mounted: function mounted() {
        var e = this;
        this.cacheVNode(), this.$watch("include", function (t) {
          On(e, function (e) {
            return Dn(t, e);
          });
        }), this.$watch("exclude", function (t) {
          On(e, function (e) {
            return !Dn(t, e);
          });
        });
      },
      updated: function updated() {
        this.cacheVNode();
      },
      render: function render() {
        var e = this.$slots["default"],
            t = Jt(e),
            n = t && t.componentOptions;

        if (n) {
          var i = Mn(n),
              o = this.include,
              r = this.exclude;
          if (o && (!i || !Dn(o, i)) || r && i && Dn(r, i)) return t;
          var a = this.cache,
              s = this.keys,
              l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
          a[l] ? (t.componentInstance = a[l].componentInstance, y(s, l), s.push(l)) : (this.vnodeToCache = t, this.keyToCache = l), t.data.keepAlive = !0;
        }

        return t || e && e[0];
      }
    },
        Wn = {
      KeepAlive: Rn
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
      }, e.set = xe, e["delete"] = Me, e.nextTick = rt, e.observable = function (e) {
        return Te(e), e;
      }, e.options = Object.create(null), B.forEach(function (t) {
        e.options[t + "s"] = Object.create(null);
      }), e.options._base = e, N(e.options.components, Wn), function (e) {
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
              _n(e.prototype, "_props", n);
            }
          }(a), a.options.computed && function (e) {
            var t = e.options.computed;

            for (var n in t) {
              wn(e.prototype, n, t[n]);
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
    }(xn), Object.defineProperty(xn.prototype, "$isServer", {
      get: ae
    }), Object.defineProperty(xn.prototype, "$ssrContext", {
      get: function get() {
        return this.$vnode && this.$vnode.ssrContext;
      }
    }), Object.defineProperty(xn, "FunctionalRenderContext", {
      value: Bt
    }), xn.version = "2.6.14";

    var Pn = g("style,class"),
        Bn = g("input,textarea,option,select,progress"),
        jn = function jn(e, t, n) {
      return "value" === n && Bn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
    },
        Fn = g("contenteditable,draggable,spellcheck"),
        Un = g("events,caret,typing,plaintext-only"),
        Hn = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),
        Vn = "http://www.w3.org/1999/xlink",
        Gn = function Gn(e) {
      return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
    },
        qn = function qn(e) {
      return Gn(e) ? e.slice(6, e.length) : "";
    },
        zn = function zn(e) {
      return null == e || !1 === e;
    };

    function Yn(e, t) {
      return {
        staticClass: Kn(e.staticClass, t.staticClass),
        "class": r(e["class"]) ? [e["class"], t["class"]] : t["class"]
      };
    }

    function Kn(e, t) {
      return e ? t ? e + " " + t : e : t || "";
    }

    function Qn(e) {
      return Array.isArray(e) ? function (e) {
        for (var t, n = "", i = 0, o = e.length; i < o; i++) {
          r(t = Qn(e[i])) && "" !== t && (n && (n += " "), n += t);
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

    var Jn = {
      svg: "http://www.w3.org/2000/svg",
      math: "http://www.w3.org/1998/Math/MathML"
    },
        Xn = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        Zn = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        ei = function ei(e) {
      return Xn(e) || Zn(e);
    };

    function ti(e) {
      return Zn(e) ? "svg" : "math" === e ? "math" : void 0;
    }

    var ni = Object.create(null),
        ii = g("text,number,password,search,email,tel,url");

    function oi(e) {
      return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e;
    }

    var ri = Object.freeze({
      createElement: function createElement(e, t) {
        var n = document.createElement(e);
        return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
      },
      createElementNS: function createElementNS(e, t) {
        return document.createElementNS(Jn[e], t);
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
        ai = {
      create: function create(e, t) {
        si(t);
      },
      update: function update(e, t) {
        e.data.ref !== t.data.ref && (si(e, !0), si(t));
      },
      destroy: function destroy(e) {
        si(e, !0);
      }
    };

    function si(e, t) {
      var n = e.data.ref;

      if (r(n)) {
        var i = e.context,
            o = e.componentInstance || e.elm,
            a = i.$refs;
        t ? Array.isArray(a[n]) ? y(a[n], o) : a[n] === o && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(o) < 0 && a[n].push(o) : a[n] = [o] : a[n] = o;
      }
    }

    var li = new ve("", {}, []),
        ci = ["create", "activate", "update", "remove", "destroy"];

    function di(e, t) {
      return e.key === t.key && e.asyncFactory === t.asyncFactory && (e.tag === t.tag && e.isComment === t.isComment && r(e.data) === r(t.data) && function (e, t) {
        if ("input" !== e.tag) return !0;
        var n,
            i = r(n = e.data) && r(n = n.attrs) && n.type,
            o = r(n = t.data) && r(n = n.attrs) && n.type;
        return i === o || ii(i) && ii(o);
      }(e, t) || a(e.isAsyncPlaceholder) && o(t.asyncFactory.error));
    }

    function ui(e, t, n) {
      var i,
          o,
          a = {};

      for (i = t; i <= n; ++i) {
        r(o = e[i].key) && (a[o] = i);
      }

      return a;
    }

    var fi = {
      create: pi,
      update: pi,
      destroy: function destroy(e) {
        pi(e, li);
      }
    };

    function pi(e, t) {
      (e.data.directives || t.data.directives) && function (e, t) {
        var n,
            i,
            o,
            r = e === li,
            a = t === li,
            s = gi(e.data.directives, e.context),
            l = gi(t.data.directives, t.context),
            c = [],
            d = [];

        for (n in l) {
          i = s[n], o = l[n], i ? (o.oldValue = i.value, o.oldArg = i.arg, vi(o, "update", t, e), o.def && o.def.componentUpdated && d.push(o)) : (vi(o, "bind", t, e), o.def && o.def.inserted && c.push(o));
        }

        if (c.length) {
          var u = function u() {
            for (var n = 0; n < c.length; n++) {
              vi(c[n], "inserted", t, e);
            }
          };

          r ? ft(t, "insert", u) : u();
        }

        if (d.length && ft(t, "postpatch", function () {
          for (var n = 0; n < d.length; n++) {
            vi(d[n], "componentUpdated", t, e);
          }
        }), !r) for (n in s) {
          l[n] || vi(s[n], "unbind", e, e, a);
        }
      }(e, t);
    }

    var hi = Object.create(null);

    function gi(e, t) {
      var n,
          i,
          o = Object.create(null);
      if (!e) return o;

      for (n = 0; n < e.length; n++) {
        (i = e[n]).modifiers || (i.modifiers = hi), o[mi(i)] = i, i.def = je(t.$options, "directives", i.name);
      }

      return o;
    }

    function mi(e) {
      return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
    }

    function vi(e, t, n, i, o) {
      var r = e.def && e.def[t];
      if (r) try {
        r(n.elm, e, n, i, o);
      } catch (i) {
        qe(i, n.context, "directive " + e.name + " " + t + " hook");
      }
    }

    var yi = [ai, fi];

    function Ei(e, t) {
      var n = t.componentOptions;

      if (!(r(n) && !1 === n.Ctor.options.inheritAttrs || o(e.data.attrs) && o(t.data.attrs))) {
        var i,
            a,
            s = t.elm,
            l = e.data.attrs || {},
            c = t.data.attrs || {};

        for (i in r(c.__ob__) && (c = t.data.attrs = N({}, c)), c) {
          a = c[i], l[i] !== a && Ai(s, i, a, t.data.pre);
        }

        for (i in (X || ee) && c.value !== l.value && Ai(s, "value", c.value), l) {
          o(c[i]) && (Gn(i) ? s.removeAttributeNS(Vn, qn(i)) : Fn(i) || s.removeAttribute(i));
        }
      }
    }

    function Ai(e, t, n, i) {
      i || e.tagName.indexOf("-") > -1 ? bi(e, t, n) : Hn(t) ? zn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Fn(t) ? e.setAttribute(t, function (e, t) {
        return zn(t) || "false" === t ? "false" : "contenteditable" === e && Un(t) ? t : "true";
      }(t, n)) : Gn(t) ? zn(n) ? e.removeAttributeNS(Vn, qn(t)) : e.setAttributeNS(Vn, t, n) : bi(e, t, n);
    }

    function bi(e, t, n) {
      if (zn(n)) e.removeAttribute(t);else {
        if (X && !Z && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
          var i = function i(t) {
            t.stopImmediatePropagation(), e.removeEventListener("input", i);
          };

          e.addEventListener("input", i), e.__ieph = !0;
        }

        e.setAttribute(t, n);
      }
    }

    var _i = {
      create: Ei,
      update: Ei
    };

    function Si(e, t) {
      var n = t.elm,
          i = t.data,
          a = e.data;

      if (!(o(i.staticClass) && o(i["class"]) && (o(a) || o(a.staticClass) && o(a["class"])))) {
        var s = function (e) {
          for (var t = e.data, n = e, i = e; r(i.componentInstance);) {
            (i = i.componentInstance._vnode) && i.data && (t = Yn(i.data, t));
          }

          for (; r(n = n.parent);) {
            n && n.data && (t = Yn(t, n.data));
          }

          return o = t.staticClass, a = t["class"], r(o) || r(a) ? Kn(o, Qn(a)) : "";
          var o, a;
        }(t),
            l = n._transitionClasses;

        r(l) && (s = Kn(s, Qn(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s);
      }
    }

    var wi,
        Ci,
        Ii,
        ki,
        Ti,
        Ni,
        xi = {
      create: Si,
      update: Si
    },
        Mi = /[\w).+\-_$\]]/;

    function Di(e) {
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

            g && Mi.test(g) || (c = !0);
          }
        } else void 0 === o ? (p = i + 1, o = e.slice(0, i).trim()) : m();
      }

      function m() {
        (r || (r = [])).push(e.slice(p, i).trim()), p = i + 1;
      }

      if (void 0 === o ? o = e.slice(0, i).trim() : 0 !== p && m(), r) for (i = 0; i < r.length; i++) {
        o = Oi(o, r[i]);
      }
      return o;
    }

    function Oi(e, t) {
      var n = t.indexOf("(");
      if (n < 0) return '_f("' + t + '")(' + e + ")";
      var i = t.slice(0, n),
          o = t.slice(n + 1);
      return '_f("' + i + '")(' + e + (")" !== o ? "," + o : o);
    }

    function Li(e, t) {
      console.error("[Vue compiler]: " + e);
    }

    function $i(e, t) {
      return e ? e.map(function (e) {
        return e[t];
      }).filter(function (e) {
        return e;
      }) : [];
    }

    function Ri(e, t, n, i, o) {
      (e.props || (e.props = [])).push(Gi({
        name: t,
        value: n,
        dynamic: o
      }, i)), e.plain = !1;
    }

    function Wi(e, t, n, i, o) {
      (o ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Gi({
        name: t,
        value: n,
        dynamic: o
      }, i)), e.plain = !1;
    }

    function Pi(e, t, n, i) {
      e.attrsMap[t] = n, e.attrsList.push(Gi({
        name: t,
        value: n
      }, i));
    }

    function Bi(e, t, n, i, o, r, a, s) {
      (e.directives || (e.directives = [])).push(Gi({
        name: t,
        rawName: n,
        value: i,
        arg: o,
        isDynamicArg: r,
        modifiers: a
      }, s)), e.plain = !1;
    }

    function ji(e, t, n) {
      return n ? "_p(" + t + ',"' + e + '")' : e + t;
    }

    function Fi(e, n, i, o, r, a, s, l) {
      var c;
      (o = o || t).right ? l ? n = "(" + n + ")==='click'?'contextmenu':(" + n + ")" : "click" === n && (n = "contextmenu", delete o.right) : o.middle && (l ? n = "(" + n + ")==='click'?'mouseup':(" + n + ")" : "click" === n && (n = "mouseup")), o.capture && (delete o.capture, n = ji("!", n, l)), o.once && (delete o.once, n = ji("~", n, l)), o.passive && (delete o.passive, n = ji("&", n, l)), o["native"] ? (delete o["native"], c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
      var d = Gi({
        value: i.trim(),
        dynamic: l
      }, s);
      o !== t && (d.modifiers = o);
      var u = c[n];
      Array.isArray(u) ? r ? u.unshift(d) : u.push(d) : c[n] = u ? r ? [d, u] : [u, d] : d, e.plain = !1;
    }

    function Ui(e, t, n) {
      var i = Hi(e, ":" + t) || Hi(e, "v-bind:" + t);
      if (null != i) return Di(i);

      if (!1 !== n) {
        var o = Hi(e, t);
        if (null != o) return JSON.stringify(o);
      }
    }

    function Hi(e, t, n) {
      var i;
      if (null != (i = e.attrsMap[t])) for (var o = e.attrsList, r = 0, a = o.length; r < a; r++) {
        if (o[r].name === t) {
          o.splice(r, 1);
          break;
        }
      }
      return n && delete e.attrsMap[t], i;
    }

    function Vi(e, t) {
      for (var n = e.attrsList, i = 0, o = n.length; i < o; i++) {
        var r = n[i];
        if (t.test(r.name)) return n.splice(i, 1), r;
      }
    }

    function Gi(e, t) {
      return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
    }

    function qi(e, t, n) {
      var i = n || {},
          o = i.number,
          r = "$$v";
      i.trim && (r = "(typeof $$v === 'string'? $$v.trim(): $$v)"), o && (r = "_n(" + r + ")");
      var a = zi(t, r);
      e.model = {
        value: "(" + t + ")",
        expression: JSON.stringify(t),
        callback: "function ($$v) {" + a + "}"
      };
    }

    function zi(e, t) {
      var n = function (e) {
        if (e = e.trim(), wi = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < wi - 1) return (ki = e.lastIndexOf(".")) > -1 ? {
          exp: e.slice(0, ki),
          key: '"' + e.slice(ki + 1) + '"'
        } : {
          exp: e,
          key: null
        };

        for (Ci = e, ki = Ti = Ni = 0; !Ki();) {
          Qi(Ii = Yi()) ? Xi(Ii) : 91 === Ii && Ji(Ii);
        }

        return {
          exp: e.slice(0, Ti),
          key: e.slice(Ti + 1, Ni)
        };
      }(e);

      return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")";
    }

    function Yi() {
      return Ci.charCodeAt(++ki);
    }

    function Ki() {
      return ki >= wi;
    }

    function Qi(e) {
      return 34 === e || 39 === e;
    }

    function Ji(e) {
      var t = 1;

      for (Ti = ki; !Ki();) {
        if (Qi(e = Yi())) Xi(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
          Ni = ki;
          break;
        }
      }
    }

    function Xi(e) {
      for (var t = e; !Ki() && (e = Yi()) !== t;) {
        ;
      }
    }

    var Zi;

    function eo(e, t, n) {
      var i = Zi;
      return function o() {
        var r = t.apply(null, arguments);
        null !== r && io(e, o, n, i);
      };
    }

    var to = Je && !(ne && Number(ne[1]) <= 53);

    function no(e, t, n, i) {
      if (to) {
        var o = gn,
            r = t;

        t = r._wrapper = function (e) {
          if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document) return r.apply(this, arguments);
        };
      }

      Zi.addEventListener(e, t, oe ? {
        capture: n,
        passive: i
      } : n);
    }

    function io(e, t, n, i) {
      (i || Zi).removeEventListener(e, t._wrapper || t, n);
    }

    function oo(e, t) {
      if (!o(e.data.on) || !o(t.data.on)) {
        var n = t.data.on || {},
            i = e.data.on || {};
        Zi = t.elm, function (e) {
          if (r(e.__r)) {
            var t = X ? "change" : "input";
            e[t] = [].concat(e.__r, e[t] || []), delete e.__r;
          }

          r(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c);
        }(n), ut(n, i, no, io, eo, t.context), Zi = void 0;
      }
    }

    var ro,
        ao = {
      create: oo,
      update: oo
    };

    function so(e, t) {
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
            lo(a, c) && (a.value = c);
          } else if ("innerHTML" === n && Zn(a.tagName) && o(a.innerHTML)) {
            (ro = ro || document.createElement("div")).innerHTML = "<svg>" + i + "</svg>";

            for (var d = ro.firstChild; a.firstChild;) {
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

    function lo(e, t) {
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

    var co = {
      create: so,
      update: so
    },
        uo = b(function (e) {
      var t = {},
          n = /:(.+)/;
      return e.split(/;(?![^(]*\))/g).forEach(function (e) {
        if (e) {
          var i = e.split(n);
          i.length > 1 && (t[i[0].trim()] = i[1].trim());
        }
      }), t;
    });

    function fo(e) {
      var t = po(e.style);
      return e.staticStyle ? N(e.staticStyle, t) : t;
    }

    function po(e) {
      return Array.isArray(e) ? x(e) : "string" == typeof e ? uo(e) : e;
    }

    var ho,
        go = /^--/,
        mo = /\s*!important$/,
        vo = function vo(e, t, n) {
      if (go.test(t)) e.style.setProperty(t, n);else if (mo.test(n)) e.style.setProperty(I(t), n.replace(mo, ""), "important");else {
        var i = Eo(t);
        if (Array.isArray(n)) for (var o = 0, r = n.length; o < r; o++) {
          e.style[i] = n[o];
        } else e.style[i] = n;
      }
    },
        yo = ["Webkit", "Moz", "ms"],
        Eo = b(function (e) {
      if (ho = ho || document.createElement("div").style, "filter" !== (e = S(e)) && e in ho) return e;

      for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < yo.length; n++) {
        var i = yo[n] + t;
        if (i in ho) return i;
      }
    });

    function Ao(e, t) {
      var n = t.data,
          i = e.data;

      if (!(o(n.staticStyle) && o(n.style) && o(i.staticStyle) && o(i.style))) {
        var a,
            s,
            l = t.elm,
            c = i.staticStyle,
            d = i.normalizedStyle || i.style || {},
            u = c || d,
            f = po(t.data.style) || {};
        t.data.normalizedStyle = r(f.__ob__) ? N({}, f) : f;

        var p = function (e, t) {
          for (var n, i = {}, o = e; o.componentInstance;) {
            (o = o.componentInstance._vnode) && o.data && (n = fo(o.data)) && N(i, n);
          }

          (n = fo(e.data)) && N(i, n);

          for (var r = e; r = r.parent;) {
            r.data && (n = fo(r.data)) && N(i, n);
          }

          return i;
        }(t);

        for (s in u) {
          o(p[s]) && vo(l, s, "");
        }

        for (s in p) {
          (a = p[s]) !== u[s] && vo(l, s, null == a ? "" : a);
        }
      }
    }

    var bo = {
      create: Ao,
      update: Ao
    },
        _o = /\s+/;

    function So(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(_o).forEach(function (t) {
        return e.classList.add(t);
      }) : e.classList.add(t);else {
        var n = " " + (e.getAttribute("class") || "") + " ";
        n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
      }
    }

    function wo(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(_o).forEach(function (t) {
        return e.classList.remove(t);
      }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
        for (var n = " " + (e.getAttribute("class") || "") + " ", i = " " + t + " "; n.indexOf(i) >= 0;) {
          n = n.replace(i, " ");
        }

        (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
      }
    }

    function Co(e) {
      if (e) {
        if ("object" == _typeof(e)) {
          var t = {};
          return !1 !== e.css && N(t, Io(e.name || "v")), N(t, e), t;
        }

        return "string" == typeof e ? Io(e) : void 0;
      }
    }

    var Io = b(function (e) {
      return {
        enterClass: e + "-enter",
        enterToClass: e + "-enter-to",
        enterActiveClass: e + "-enter-active",
        leaveClass: e + "-leave",
        leaveToClass: e + "-leave-to",
        leaveActiveClass: e + "-leave-active"
      };
    }),
        ko = Y && !Z,
        To = "transition",
        No = "animation",
        xo = "transition",
        Mo = "transitionend",
        Do = "animation",
        Oo = "animationend";
    ko && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (xo = "WebkitTransition", Mo = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Do = "WebkitAnimation", Oo = "webkitAnimationEnd"));
    var Lo = Y ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
      return e();
    };

    function $o(e) {
      Lo(function () {
        Lo(e);
      });
    }

    function Ro(e, t) {
      var n = e._transitionClasses || (e._transitionClasses = []);
      n.indexOf(t) < 0 && (n.push(t), So(e, t));
    }

    function Wo(e, t) {
      e._transitionClasses && y(e._transitionClasses, t), wo(e, t);
    }

    function Po(e, t, n) {
      var i = jo(e, t),
          o = i.type,
          r = i.timeout,
          a = i.propCount;
      if (!o) return n();

      var s = o === To ? Mo : Oo,
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

    var Bo = /\b(transform|all)(,|$)/;

    function jo(e, t) {
      var n,
          i = window.getComputedStyle(e),
          o = (i[xo + "Delay"] || "").split(", "),
          r = (i[xo + "Duration"] || "").split(", "),
          a = Fo(o, r),
          s = (i[Do + "Delay"] || "").split(", "),
          l = (i[Do + "Duration"] || "").split(", "),
          c = Fo(s, l),
          d = 0,
          u = 0;
      return t === To ? a > 0 && (n = To, d = a, u = r.length) : t === No ? c > 0 && (n = No, d = c, u = l.length) : u = (n = (d = Math.max(a, c)) > 0 ? a > c ? To : No : null) ? n === To ? r.length : l.length : 0, {
        type: n,
        timeout: d,
        propCount: u,
        hasTransform: n === To && Bo.test(i[xo + "Property"])
      };
    }

    function Fo(e, t) {
      for (; e.length < t.length;) {
        e = e.concat(e);
      }

      return Math.max.apply(null, t.map(function (t, n) {
        return Uo(t) + Uo(e[n]);
      }));
    }

    function Uo(e) {
      return 1e3 * Number(e.slice(0, -1).replace(",", "."));
    }

    function Ho(e, t) {
      var n = e.elm;
      r(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
      var i = Co(e.data.transition);

      if (!o(i) && !r(n._enterCb) && 1 === n.nodeType) {
        for (var a = i.css, s = i.type, c = i.enterClass, d = i.enterToClass, u = i.enterActiveClass, f = i.appearClass, p = i.appearToClass, g = i.appearActiveClass, m = i.beforeEnter, v = i.enter, y = i.afterEnter, E = i.enterCancelled, A = i.beforeAppear, b = i.appear, _ = i.afterAppear, S = i.appearCancelled, w = i.duration, C = nn, I = nn.$vnode; I && I.parent;) {
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
              P = qo(D),
              B = n._enterCb = W(function () {
            R && (Wo(n, x), Wo(n, N)), B.cancelled ? (R && Wo(n, T), L && L(n)) : O && O(n), n._enterCb = null;
          });
          e.data.show || ft(e, "insert", function () {
            var t = n.parentNode,
                i = t && t._pending && t._pending[e.key];
            i && i.tag === e.tag && i.elm._leaveCb && i.elm._leaveCb(), D && D(n, B);
          }), M && M(n), R && (Ro(n, T), Ro(n, N), $o(function () {
            Wo(n, T), B.cancelled || (Ro(n, x), P || (Go($) ? setTimeout(B, $) : Po(n, s, B)));
          })), e.data.show && (t && t(), D && D(n, B)), R || P || B();
        }
      }
    }

    function Vo(e, t) {
      var n = e.elm;
      r(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
      var i = Co(e.data.transition);
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
            A = qo(p),
            b = h(l(y) ? y.leave : y),
            _ = n._leaveCb = W(function () {
          n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), E && (Wo(n, d), Wo(n, u)), _.cancelled ? (E && Wo(n, c), m && m(n)) : (t(), g && g(n)), n._leaveCb = null;
        });

        v ? v(S) : S();
      }

      function S() {
        _.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), f && f(n), E && (Ro(n, c), Ro(n, u), $o(function () {
          Wo(n, c), _.cancelled || (Ro(n, d), A || (Go(b) ? setTimeout(_, b) : Po(n, s, _)));
        })), p && p(n, _), E || A || _());
      }
    }

    function Go(e) {
      return "number" == typeof e && !isNaN(e);
    }

    function qo(e) {
      if (o(e)) return !1;
      var t = e.fns;
      return r(t) ? qo(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
    }

    function zo(e, t) {
      !0 !== t.data.show && Ho(t);
    }

    var Yo = function (e) {
      var t,
          n,
          i = {},
          l = e.modules,
          c = e.nodeOps;

      for (t = 0; t < ci.length; ++t) {
        for (i[ci[t]] = [], n = 0; n < l.length; ++n) {
          r(l[n][ci[t]]) && i[ci[t]].push(l[n][ci[t]]);
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
                    i.activate[a](li, s);
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
        r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, m(e) ? (v(e, t), y(e)) : (si(e), t.push(e));
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
          i.create[o](li, e);
        }

        r(t = e.data.hook) && (r(t.create) && t.create(li, e), r(t.insert) && n.push(e));
      }

      function y(e) {
        var t;
        if (r(t = e.fnScopeId)) c.setStyleScope(e.elm, t);else for (var n = e; n;) {
          r(t = n.context) && r(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent;
        }
        r(t = nn) && t !== e.context && t !== e.fnContext && r(t = t.$options._scopeId) && c.setStyleScope(e.elm, t);
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
          if (r(a) && di(e, a)) return o;
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
                o(g) ? g = t[++f] : o(m) ? m = t[--h] : di(g, y) ? (w(g, y, i, n, p), g = t[++f], y = n[++p]) : di(m, A) ? (w(m, A, i, n, v), m = t[--h], A = n[--v]) : di(g, A) ? (w(g, A, i, n, v), _ && c.insertBefore(e, g.elm, c.nextSibling(m.elm)), g = t[++f], A = n[--v]) : di(m, y) ? (w(m, y, i, n, p), _ && c.insertBefore(e, m.elm, g.elm), m = t[--h], y = n[++p]) : (o(s) && (s = ui(t, f, h)), o(l = r(y.key) ? s[y.key] : S(y, t, f, h)) ? u(y, i, e, g.elm, !1, n, p) : di(d = t[l], y) ? (w(d, y, i, n, p), t[l] = void 0, _ && c.insertBefore(e, d.elm, g.elm)) : u(y, i, e, g.elm, !1, n, p), y = n[++p]);
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

            !g && l["class"] && st(l["class"]);
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
            if (!p && di(e, t)) w(e, t, f, null, null, s);else {
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
                    i.create[_](li, v);
                  }

                  var S = v.data.hook.insert;
                  if (S.merged) for (var I = 1; I < S.fns.length; I++) {
                    S.fns[I]();
                  }
                } else si(v);

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
      nodeOps: ri,
      modules: [_i, xi, ao, co, bo, Y ? {
        create: zo,
        activate: zo,
        remove: function remove(e, t) {
          !0 !== e.data.show ? Vo(e, t) : t();
        }
      } : {}].concat(yi)
    });

    Z && document.addEventListener("selectionchange", function () {
      var e = document.activeElement;
      e && e.vmodel && nr(e, "input");
    });
    var Ko = {
      inserted: function inserted(e, t, n, i) {
        "select" === n.tag ? (i.elm && !i.elm._vOptions ? ft(n, "postpatch", function () {
          Ko.componentUpdated(e, t, n);
        }) : Qo(e, t, n.context), e._vOptions = [].map.call(e.options, Zo)) : ("textarea" === n.tag || ii(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", er), e.addEventListener("compositionend", tr), e.addEventListener("change", tr), Z && (e.vmodel = !0)));
      },
      componentUpdated: function componentUpdated(e, t, n) {
        if ("select" === n.tag) {
          Qo(e, t, n.context);
          var i = e._vOptions,
              o = e._vOptions = [].map.call(e.options, Zo);
          o.some(function (e, t) {
            return !L(e, i[t]);
          }) && (e.multiple ? t.value.some(function (e) {
            return Xo(e, o);
          }) : t.value !== t.oldValue && Xo(t.value, o)) && nr(e, "change");
        }
      }
    };

    function Qo(e, t, n) {
      Jo(e, t), (X || ee) && setTimeout(function () {
        Jo(e, t);
      }, 0);
    }

    function Jo(e, t, n) {
      var i = t.value,
          o = e.multiple;

      if (!o || Array.isArray(i)) {
        for (var r, a, s = 0, l = e.options.length; s < l; s++) {
          if (a = e.options[s], o) r = R(i, Zo(a)) > -1, a.selected !== r && (a.selected = r);else if (L(Zo(a), i)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
        }

        o || (e.selectedIndex = -1);
      }
    }

    function Xo(e, t) {
      return t.every(function (t) {
        return !L(t, e);
      });
    }

    function Zo(e) {
      return "_value" in e ? e._value : e.value;
    }

    function er(e) {
      e.target.composing = !0;
    }

    function tr(e) {
      e.target.composing && (e.target.composing = !1, nr(e.target, "input"));
    }

    function nr(e, t) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(t, !0, !0), e.dispatchEvent(n);
    }

    function ir(e) {
      return !e.componentInstance || e.data && e.data.transition ? e : ir(e.componentInstance._vnode);
    }

    var or = {
      bind: function bind(e, t, n) {
        var i = t.value,
            o = (n = ir(n)).data && n.data.transition,
            r = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
        i && o ? (n.data.show = !0, Ho(n, function () {
          e.style.display = r;
        })) : e.style.display = i ? r : "none";
      },
      update: function update(e, t, n) {
        var i = t.value;
        !i != !t.oldValue && ((n = ir(n)).data && n.data.transition ? (n.data.show = !0, i ? Ho(n, function () {
          e.style.display = e.__vOriginalDisplay;
        }) : Vo(n, function () {
          e.style.display = "none";
        })) : e.style.display = i ? e.__vOriginalDisplay : "none");
      },
      unbind: function unbind(e, t, n, i, o) {
        o || (e.style.display = e.__vOriginalDisplay);
      }
    },
        rr = {
      model: Ko,
      show: or
    },
        ar = {
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

    function sr(e) {
      var t = e && e.componentOptions;
      return t && t.Ctor.options["abstract"] ? sr(Jt(t.children)) : e;
    }

    function lr(e) {
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

    function cr(e, t) {
      if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
        props: t.componentOptions.propsData
      });
    }

    var dr = function dr(e) {
      return e.tag || At(e);
    },
        ur = function ur(e) {
      return "show" === e.name;
    },
        fr = {
      name: "transition",
      props: ar,
      "abstract": !0,
      render: function render(e) {
        var t = this,
            n = this.$slots["default"];

        if (n && (n = n.filter(dr)).length) {
          var i = this.mode,
              o = n[0];
          if (function (e) {
            for (; e = e.parent;) {
              if (e.data.transition) return !0;
            }
          }(this.$vnode)) return o;
          var r = sr(o);
          if (!r) return o;
          if (this._leaving) return cr(e, o);
          var a = "__transition-" + this._uid + "-";
          r.key = null == r.key ? r.isComment ? a + "comment" : a + r.tag : s(r.key) ? 0 === String(r.key).indexOf(a) ? r.key : a + r.key : r.key;
          var l = (r.data || (r.data = {})).transition = lr(this),
              c = this._vnode,
              d = sr(c);

          if (r.data.directives && r.data.directives.some(ur) && (r.data.show = !0), d && d.data && !function (e, t) {
            return t.key === e.key && t.tag === e.tag;
          }(r, d) && !At(d) && (!d.componentInstance || !d.componentInstance._vnode.isComment)) {
            var u = d.data.transition = N({}, l);
            if ("out-in" === i) return this._leaving = !0, ft(u, "afterLeave", function () {
              t._leaving = !1, t.$forceUpdate();
            }), cr(e, o);

            if ("in-out" === i) {
              if (At(r)) return c;

              var f,
                  p = function p() {
                f();
              };

              ft(l, "afterEnter", p), ft(l, "enterCancelled", p), ft(u, "delayLeave", function (e) {
                f = e;
              });
            }
          }

          return o;
        }
      }
    },
        pr = N({
      tag: String,
      moveClass: String
    }, ar);

    function hr(e) {
      e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
    }

    function gr(e) {
      e.data.newPos = e.elm.getBoundingClientRect();
    }

    function mr(e) {
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

    delete pr.mode;
    var vr = {
      Transition: fr,
      TransitionGroup: {
        props: pr,
        beforeMount: function beforeMount() {
          var e = this,
              t = this._update;

          this._update = function (n, i) {
            var o = on(e);
            e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, o(), t.call(e, n, i);
          };
        },
        render: function render(e) {
          for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, o = this.$slots["default"] || [], r = this.children = [], a = lr(this), s = 0; s < o.length; s++) {
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
          e.length && this.hasMove(e[0].elm, t) && (e.forEach(hr), e.forEach(gr), e.forEach(mr), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
            if (e.data.moved) {
              var n = e.elm,
                  i = n.style;
              Ro(n, t), i.transform = i.WebkitTransform = i.transitionDuration = "", n.addEventListener(Mo, n._moveCb = function e(i) {
                i && i.target !== n || i && !/transform$/.test(i.propertyName) || (n.removeEventListener(Mo, e), n._moveCb = null, Wo(n, t));
              });
            }
          }));
        },
        methods: {
          hasMove: function hasMove(e, t) {
            if (!ko) return !1;
            if (this._hasMove) return this._hasMove;
            var n = e.cloneNode();
            e._transitionClasses && e._transitionClasses.forEach(function (e) {
              wo(n, e);
            }), So(n, t), n.style.display = "none", this.$el.appendChild(n);
            var i = jo(n);
            return this.$el.removeChild(n), this._hasMove = i.hasTransform;
          }
        }
      }
    };
    xn.config.mustUseProp = jn, xn.config.isReservedTag = ei, xn.config.isReservedAttr = Pn, xn.config.getTagNamespace = ti, xn.config.isUnknownElement = function (e) {
      if (!Y) return !0;
      if (ei(e)) return !1;
      if (e = e.toLowerCase(), null != ni[e]) return ni[e];
      var t = document.createElement(e);
      return e.indexOf("-") > -1 ? ni[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : ni[e] = /HTMLUnknownElement/.test(t.toString());
    }, N(xn.options.directives, rr), N(xn.options.components, vr), xn.prototype.__patch__ = Y ? Yo : M, xn.prototype.$mount = function (e, t) {
      return function (e, t, n) {
        var i;
        return e.$el = t, e.$options.render || (e.$options.render = Ee), ln(e, "beforeMount"), i = function i() {
          e._update(e._render(), n);
        }, new An(e, i, M, {
          before: function before() {
            e._isMounted && !e._isDestroyed && ln(e, "beforeUpdate");
          }
        }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, ln(e, "mounted")), e;
      }(this, e = e && Y ? oi(e) : void 0, t);
    }, Y && setTimeout(function () {
      F.devtools && se && se.emit("init", xn);
    }, 0);

    var yr,
        Er = /\{\{((?:.|\r?\n)+?)\}\}/g,
        Ar = /[-.*+?^${}()|[\]\/\\]/g,
        br = b(function (e) {
      var t = e[0].replace(Ar, "\\$&"),
          n = e[1].replace(Ar, "\\$&");
      return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
    }),
        _r = {
      staticKeys: ["staticClass"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = Hi(e, "class");
        n && (e.staticClass = JSON.stringify(n));
        var i = Ui(e, "class", !1);
        i && (e.classBinding = i);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
      }
    },
        Sr = {
      staticKeys: ["staticStyle"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = Hi(e, "style");
        n && (e.staticStyle = JSON.stringify(uo(n)));
        var i = Ui(e, "style", !1);
        i && (e.styleBinding = i);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
      }
    },
        wr = g("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        Cr = g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        Ir = g("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        kr = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Tr = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Nr = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + U.source + "]*",
        xr = "((?:" + Nr + "\\:)?" + Nr + ")",
        Mr = new RegExp("^<" + xr),
        Dr = /^\s*(\/?)>/,
        Or = new RegExp("^<\\/" + xr + "[^>]*>"),
        Lr = /^<!DOCTYPE [^>]+>/i,
        $r = /^<!\--/,
        Rr = /^<!\[/,
        Wr = g("script,style,textarea", !0),
        Pr = {},
        Br = {
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&amp;": "&",
      "&#10;": "\n",
      "&#9;": "\t",
      "&#39;": "'"
    },
        jr = /&(?:lt|gt|quot|amp|#39);/g,
        Fr = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        Ur = g("pre,textarea", !0),
        Hr = function Hr(e, t) {
      return e && Ur(e) && "\n" === t[0];
    };

    function Vr(e, t) {
      var n = t ? Fr : jr;
      return e.replace(n, function (e) {
        return Br[e];
      });
    }

    var Gr,
        qr,
        zr,
        Yr,
        Kr,
        Qr,
        Jr,
        Xr,
        Zr = /^@|^v-on:/,
        ea = /^v-|^@|^:|^#/,
        ta = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        na = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        ia = /^\(|\)$/g,
        oa = /^\[.*\]$/,
        ra = /:(.*)$/,
        aa = /^:|^\.|^v-bind:/,
        sa = /\.[^.\]]+(?=[^\]]*$)/g,
        la = /^v-slot(:|$)|^#/,
        ca = /[\r\n]/,
        da = /[ \f\t\r\n]+/g,
        ua = b(function (e) {
      return (yr = yr || document.createElement("div")).innerHTML = e, yr.textContent;
    }),
        fa = "_empty_";

    function pa(e, t, n) {
      return {
        type: 1,
        tag: e,
        attrsList: t,
        attrsMap: Ea(t),
        rawAttrsMap: {},
        parent: n,
        children: []
      };
    }

    function ha(e, t) {
      var n;
      !function (e) {
        var t = Ui(e, "key");
        t && (e.key = t);
      }(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
        var t = Ui(e, "ref");
        t && (e.ref = t, e.refInFor = function (e) {
          for (var t = e; t;) {
            if (void 0 !== t["for"]) return !0;
            t = t.parent;
          }

          return !1;
        }(e));
      }(e), function (e) {
        var t;
        "template" === e.tag ? (t = Hi(e, "scope"), e.slotScope = t || Hi(e, "slot-scope")) : (t = Hi(e, "slot-scope")) && (e.slotScope = t);
        var n = Ui(e, "slot");

        if (n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Wi(e, "slot", n, function (e, t) {
          return e.rawAttrsMap[":slot"] || e.rawAttrsMap["v-bind:slot"] || e.rawAttrsMap.slot;
        }(e))), "template" === e.tag) {
          var i = Vi(e, la);

          if (i) {
            var o = va(i),
                r = o.name,
                a = o.dynamic;
            e.slotTarget = r, e.slotTargetDynamic = a, e.slotScope = i.value || fa;
          }
        } else {
          var s = Vi(e, la);

          if (s) {
            var l = e.scopedSlots || (e.scopedSlots = {}),
                c = va(s),
                d = c.name,
                u = c.dynamic,
                f = l[d] = pa("template", [], e);
            f.slotTarget = d, f.slotTargetDynamic = u, f.children = e.children.filter(function (e) {
              if (!e.slotScope) return e.parent = f, !0;
            }), f.slotScope = s.value || fa, e.children = [], e.plain = !1;
          }
        }
      }(e), "slot" === (n = e).tag && (n.slotName = Ui(n, "name")), function (e) {
        var t;
        (t = Ui(e, "is")) && (e.component = t), null != Hi(e, "inline-template") && (e.inlineTemplate = !0);
      }(e);

      for (var i = 0; i < zr.length; i++) {
        e = zr[i](e, t) || e;
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
          if (i = o = c[t].name, r = c[t].value, ea.test(i)) {
            if (e.hasBindings = !0, (a = ya(i.replace(ea, ""))) && (i = i.replace(sa, "")), aa.test(i)) i = i.replace(aa, ""), r = Di(r), (l = oa.test(i)) && (i = i.slice(1, -1)), a && (a.prop && !l && "innerHtml" === (i = S(i)) && (i = "innerHTML"), a.camel && !l && (i = S(i)), a.sync && (s = zi(r, "$event"), l ? Fi(e, '"update:"+(' + i + ")", s, null, !1, 0, c[t], !0) : (Fi(e, "update:" + S(i), s, null, !1, 0, c[t]), I(i) !== S(i) && Fi(e, "update:" + I(i), s, null, !1, 0, c[t])))), a && a.prop || !e.component && Jr(e.tag, e.attrsMap.type, i) ? Ri(e, i, r, c[t], l) : Wi(e, i, r, c[t], l);else if (Zr.test(i)) i = i.replace(Zr, ""), (l = oa.test(i)) && (i = i.slice(1, -1)), Fi(e, i, r, a, !1, 0, c[t], l);else {
              var d = (i = i.replace(ea, "")).match(ra),
                  u = d && d[1];
              l = !1, u && (i = i.slice(0, -(u.length + 1)), oa.test(u) && (u = u.slice(1, -1), l = !0)), Bi(e, i, o, r, u, l, a, c[t]);
            }
          } else Wi(e, i, JSON.stringify(r), c[t]), !e.component && "muted" === i && Jr(e.tag, e.attrsMap.type, i) && Ri(e, i, "true", c[t]);
        }
      }(e), e;
    }

    function ga(e) {
      var t;

      if (t = Hi(e, "v-for")) {
        var n = function (e) {
          var t = e.match(ta);

          if (t) {
            var n = {};
            n["for"] = t[2].trim();
            var i = t[1].trim().replace(ia, ""),
                o = i.match(na);
            return o ? (n.alias = i.replace(na, "").trim(), n.iterator1 = o[1].trim(), o[2] && (n.iterator2 = o[2].trim())) : n.alias = i, n;
          }
        }(t);

        n && N(e, n);
      }
    }

    function ma(e, t) {
      e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
    }

    function va(e) {
      var t = e.name.replace(la, "");
      return t || "#" !== e.name[0] && (t = "default"), oa.test(t) ? {
        name: t.slice(1, -1),
        dynamic: !0
      } : {
        name: '"' + t + '"',
        dynamic: !1
      };
    }

    function ya(e) {
      var t = e.match(sa);

      if (t) {
        var n = {};
        return t.forEach(function (e) {
          n[e.slice(1)] = !0;
        }), n;
      }
    }

    function Ea(e) {
      for (var t = {}, n = 0, i = e.length; n < i; n++) {
        t[e[n].name] = e[n].value;
      }

      return t;
    }

    var Aa = /^xmlns:NS\d+/,
        ba = /^NS\d+:/;

    function _a(e) {
      return pa(e.tag, e.attrsList.slice(), e.parent);
    }

    var Sa,
        wa,
        Ca,
        Ia = [_r, Sr, {
      preTransformNode: function preTransformNode(e, t) {
        if ("input" === e.tag) {
          var n,
              i = e.attrsMap;
          if (!i["v-model"]) return;

          if ((i[":type"] || i["v-bind:type"]) && (n = Ui(e, "type")), i.type || n || !i["v-bind"] || (n = "(" + i["v-bind"] + ").type"), n) {
            var o = Hi(e, "v-if", !0),
                r = o ? "&&(" + o + ")" : "",
                a = null != Hi(e, "v-else", !0),
                s = Hi(e, "v-else-if", !0),
                l = _a(e);

            ga(l), Pi(l, "type", "checkbox"), ha(l, t), l.processed = !0, l["if"] = "(" + n + ")==='checkbox'" + r, ma(l, {
              exp: l["if"],
              block: l
            });

            var c = _a(e);

            Hi(c, "v-for", !0), Pi(c, "type", "radio"), ha(c, t), ma(l, {
              exp: "(" + n + ")==='radio'" + r,
              block: c
            });

            var d = _a(e);

            return Hi(d, "v-for", !0), Pi(d, ":type", n), ha(d, t), ma(l, {
              exp: o,
              block: d
            }), a ? l["else"] = !0 : s && (l.elseif = s), l;
          }
        }
      }
    }],
        ka = {
      model: function model(e, t, n) {
        var i = t.value,
            o = t.modifiers,
            r = e.tag,
            a = e.attrsMap.type;
        if (e.component) return qi(e, i, o), !1;
        if ("select" === r) !function (e, t, n) {
          var i = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
          Fi(e, "change", i = i + " " + zi(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0);
        }(e, i, o);else if ("input" === r && "checkbox" === a) !function (e, t, n) {
          var i = n && n.number,
              o = Ui(e, "value") || "null",
              r = Ui(e, "true-value") || "true",
              a = Ui(e, "false-value") || "false";
          Ri(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + o + ")>-1" + ("true" === r ? ":(" + t + ")" : ":_q(" + t + "," + r + ")")), Fi(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + r + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (i ? "_n(" + o + ")" : o) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + zi(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + zi(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + zi(t, "$$c") + "}", null, !0);
        }(e, i, o);else if ("input" === r && "radio" === a) !function (e, t, n) {
          var i = n && n.number,
              o = Ui(e, "value") || "null";
          Ri(e, "checked", "_q(" + t + "," + (o = i ? "_n(" + o + ")" : o) + ")"), Fi(e, "change", zi(t, o), null, !0);
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
          var u = zi(t, d);
          l && (u = "if($event.target.composing)return;" + u), Ri(e, "value", "(" + t + ")"), Fi(e, c, u, null, !0), (s || a) && Fi(e, "blur", "$forceUpdate()");
        }(e, i, o);else if (!F.isReservedTag(r)) return qi(e, i, o), !1;
        return !0;
      },
      text: function text(e, t) {
        t.value && Ri(e, "textContent", "_s(" + t.value + ")", t);
      },
      html: function html(e, t) {
        t.value && Ri(e, "innerHTML", "_s(" + t.value + ")", t);
      }
    },
        Ta = {
      expectHTML: !0,
      modules: Ia,
      directives: ka,
      isPreTag: function isPreTag(e) {
        return "pre" === e;
      },
      isUnaryTag: wr,
      mustUseProp: jn,
      canBeLeftOpenTag: Cr,
      isReservedTag: ei,
      getTagNamespace: ti,
      staticKeys: (Ca = Ia, Ca.reduce(function (e, t) {
        return e.concat(t.staticKeys || []);
      }, []).join(","))
    },
        Na = b(function (e) {
      return g("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""));
    });

    function xa(e, t) {
      e && (Sa = Na(t.staticKeys || ""), wa = t.isReservedTag || D, Ma(e), Da(e, !1));
    }

    function Ma(e) {
      if (e["static"] = function (e) {
        return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e["if"] || e["for"] || m(e.tag) || !wa(e.tag) || function (e) {
          for (; e.parent;) {
            if ("template" !== (e = e.parent).tag) return !1;
            if (e["for"]) return !0;
          }

          return !1;
        }(e) || !Object.keys(e).every(Sa))));
      }(e), 1 === e.type) {
        if (!wa(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;

        for (var t = 0, n = e.children.length; t < n; t++) {
          var i = e.children[t];
          Ma(i), i["static"] || (e["static"] = !1);
        }

        if (e.ifConditions) for (var o = 1, r = e.ifConditions.length; o < r; o++) {
          var a = e.ifConditions[o].block;
          Ma(a), a["static"] || (e["static"] = !1);
        }
      }
    }

    function Da(e, t) {
      if (1 === e.type) {
        if ((e["static"] || e.once) && (e.staticInFor = t), e["static"] && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);
        if (e.staticRoot = !1, e.children) for (var n = 0, i = e.children.length; n < i; n++) {
          Da(e.children[n], t || !!e["for"]);
        }
        if (e.ifConditions) for (var o = 1, r = e.ifConditions.length; o < r; o++) {
          Da(e.ifConditions[o].block, t);
        }
      }
    }

    var Oa = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        La = /\([^)]*?\);*$/,
        $a = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        Ra = {
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
        Wa = {
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
        Pa = function Pa(e) {
      return "if(" + e + ")return null;";
    },
        Ba = {
      stop: "$event.stopPropagation();",
      prevent: "$event.preventDefault();",
      self: Pa("$event.target !== $event.currentTarget"),
      ctrl: Pa("!$event.ctrlKey"),
      shift: Pa("!$event.shiftKey"),
      alt: Pa("!$event.altKey"),
      meta: Pa("!$event.metaKey"),
      left: Pa("'button' in $event && $event.button !== 0"),
      middle: Pa("'button' in $event && $event.button !== 1"),
      right: Pa("'button' in $event && $event.button !== 2")
    };

    function ja(e, t) {
      var n = t ? "nativeOn:" : "on:",
          i = "",
          o = "";

      for (var r in e) {
        var a = Fa(e[r]);
        e[r] && e[r].dynamic ? o += r + "," + a + "," : i += '"' + r + '":' + a + ",";
      }

      return i = "{" + i.slice(0, -1) + "}", o ? n + "_d(" + i + ",[" + o.slice(0, -1) + "])" : n + i;
    }

    function Fa(e) {
      if (!e) return "function(){}";
      if (Array.isArray(e)) return "[" + e.map(function (e) {
        return Fa(e);
      }).join(",") + "]";
      var t = $a.test(e.value),
          n = Oa.test(e.value),
          i = $a.test(e.value.replace(La, ""));

      if (e.modifiers) {
        var o = "",
            r = "",
            a = [];

        for (var s in e.modifiers) {
          if (Ba[s]) r += Ba[s], Ra[s] && a.push(s);else if ("exact" === s) {
            var l = e.modifiers;
            r += Pa(["ctrl", "shift", "alt", "meta"].filter(function (e) {
              return !l[e];
            }).map(function (e) {
              return "$event." + e + "Key";
            }).join("||"));
          } else a.push(s);
        }

        return a.length && (o += function (e) {
          return "if(!$event.type.indexOf('key')&&" + e.map(Ua).join("&&") + ")return null;";
        }(a)), r && (o += r), "function($event){" + o + (t ? "return " + e.value + ".apply(null, arguments)" : n ? "return (" + e.value + ").apply(null, arguments)" : i ? "return " + e.value : e.value) + "}";
      }

      return t || n ? e.value : "function($event){" + (i ? "return " + e.value : e.value) + "}";
    }

    function Ua(e) {
      var t = parseInt(e, 10);
      if (t) return "$event.keyCode!==" + t;
      var n = Ra[e],
          i = Wa[e];
      return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(i) + ")";
    }

    var Ha = {
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
        Va = function Va(e) {
      this.options = e, this.warn = e.warn || Li, this.transforms = $i(e.modules, "transformCode"), this.dataGenFns = $i(e.modules, "genData"), this.directives = N(N({}, Ha), e.directives);
      var t = e.isReservedTag || D;
      this.maybeComponent = function (e) {
        return !!e.component || !t(e.tag);
      }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
    };

    function Ga(e, t) {
      var n = new Va(t);
      return {
        render: "with(this){return " + (e ? "script" === e.tag ? "null" : qa(e, n) : '_c("div")') + "}",
        staticRenderFns: n.staticRenderFns
      };
    }

    function qa(e, t) {
      if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return za(e, t);
      if (e.once && !e.onceProcessed) return Ya(e, t);
      if (e["for"] && !e.forProcessed) return Ja(e, t);
      if (e["if"] && !e.ifProcessed) return Ka(e, t);

      if ("template" !== e.tag || e.slotTarget || t.pre) {
        if ("slot" === e.tag) return function (e, t) {
          var n = e.slotName || '"default"',
              i = ts(e, t),
              o = "_t(" + n + (i ? ",function(){return " + i + "}" : ""),
              r = e.attrs || e.dynamicAttrs ? os((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
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
          var i = t.inlineTemplate ? null : ts(t, n, !0);
          return "_c(" + e + "," + Xa(t, n) + (i ? "," + i : "") + ")";
        }(e.component, e, t);else {
          var i;
          (!e.plain || e.pre && t.maybeComponent(e)) && (i = Xa(e, t));
          var o = e.inlineTemplate ? null : ts(e, t, !0);
          n = "_c('" + e.tag + "'" + (i ? "," + i : "") + (o ? "," + o : "") + ")";
        }

        for (var r = 0; r < t.transforms.length; r++) {
          n = t.transforms[r](e, n);
        }

        return n;
      }

      return ts(e, t) || "void 0";
    }

    function za(e, t) {
      e.staticProcessed = !0;
      var n = t.pre;
      return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + qa(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
    }

    function Ya(e, t) {
      if (e.onceProcessed = !0, e["if"] && !e.ifProcessed) return Ka(e, t);

      if (e.staticInFor) {
        for (var n = "", i = e.parent; i;) {
          if (i["for"]) {
            n = i.key;
            break;
          }

          i = i.parent;
        }

        return n ? "_o(" + qa(e, t) + "," + t.onceId++ + "," + n + ")" : qa(e, t);
      }

      return za(e, t);
    }

    function Ka(e, t, n, i) {
      return e.ifProcessed = !0, Qa(e.ifConditions.slice(), t, n, i);
    }

    function Qa(e, t, n, i) {
      if (!e.length) return i || "_e()";
      var o = e.shift();
      return o.exp ? "(" + o.exp + ")?" + r(o.block) + ":" + Qa(e, t, n, i) : "" + r(o.block);

      function r(e) {
        return n ? n(e, t) : e.once ? Ya(e, t) : qa(e, t);
      }
    }

    function Ja(e, t, n, i) {
      var o = e["for"],
          r = e.alias,
          a = e.iterator1 ? "," + e.iterator1 : "",
          s = e.iterator2 ? "," + e.iterator2 : "";
      return e.forProcessed = !0, (i || "_l") + "((" + o + "),function(" + r + a + s + "){return " + (n || qa)(e, t) + "})";
    }

    function Xa(e, t) {
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

      if (e.attrs && (n += "attrs:" + os(e.attrs) + ","), e.props && (n += "domProps:" + os(e.props) + ","), e.events && (n += ja(e.events, !1) + ","), e.nativeEvents && (n += ja(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
        var i = e["for"] || Object.keys(t).some(function (e) {
          var n = t[e];
          return n.slotTargetDynamic || n["if"] || n["for"] || Za(n);
        }),
            o = !!e["if"];
        if (!i) for (var r = e.parent; r;) {
          if (r.slotScope && r.slotScope !== fa || r["for"]) {
            i = !0;
            break;
          }

          r["if"] && (o = !0), r = r.parent;
        }
        var a = Object.keys(t).map(function (e) {
          return es(t[e], n);
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
            var i = Ga(n, t.options);
            return "inlineTemplate:{render:function(){" + i.render + "},staticRenderFns:[" + i.staticRenderFns.map(function (e) {
              return "function(){" + e + "}";
            }).join(",") + "]}";
          }
        }(e, t);

        r && (n += r + ",");
      }

      return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + os(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
    }

    function Za(e) {
      return 1 === e.type && ("slot" === e.tag || e.children.some(Za));
    }

    function es(e, t) {
      var n = e.attrsMap["slot-scope"];
      if (e["if"] && !e.ifProcessed && !n) return Ka(e, t, es, "null");
      if (e["for"] && !e.forProcessed) return Ja(e, t, es);
      var i = e.slotScope === fa ? "" : String(e.slotScope),
          o = "function(" + i + "){return " + ("template" === e.tag ? e["if"] && n ? "(" + e["if"] + ")?" + (ts(e, t) || "undefined") + ":undefined" : ts(e, t) || "undefined" : qa(e, t)) + "}",
          r = i ? "" : ",proxy:true";
      return "{key:" + (e.slotTarget || '"default"') + ",fn:" + o + r + "}";
    }

    function ts(e, t, n, i, o) {
      var r = e.children;

      if (r.length) {
        var a = r[0];

        if (1 === r.length && a["for"] && "template" !== a.tag && "slot" !== a.tag) {
          var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
          return "" + (i || qa)(a, t) + s;
        }

        var l = n ? function (e, t) {
          for (var n = 0, i = 0; i < e.length; i++) {
            var o = e[i];

            if (1 === o.type) {
              if (ns(o) || o.ifConditions && o.ifConditions.some(function (e) {
                return ns(e.block);
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
            c = o || is;
        return "[" + r.map(function (e) {
          return c(e, t);
        }).join(",") + "]" + (l ? "," + l : "");
      }
    }

    function ns(e) {
      return void 0 !== e["for"] || "template" === e.tag || "slot" === e.tag;
    }

    function is(e, t) {
      return 1 === e.type ? qa(e, t) : 3 === e.type && e.isComment ? function (e) {
        return "_e(" + JSON.stringify(e.text) + ")";
      }(e) : "_v(" + (2 === (n = e).type ? n.expression : rs(JSON.stringify(n.text))) + ")";
      var n;
    }

    function os(e) {
      for (var t = "", n = "", i = 0; i < e.length; i++) {
        var o = e[i],
            r = rs(o.value);
        o.dynamic ? n += o.name + "," + r + "," : t += '"' + o.name + '":' + r + ",";
      }

      return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t;
    }

    function rs(e) {
      return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }

    function as(e, t) {
      try {
        return new Function(e);
      } catch (n) {
        return t.push({
          err: n,
          code: e
        }), M;
      }
    }

    function ss(e) {
      var t = Object.create(null);
      return function (n, i, o) {
        (i = N({}, i)).warn, delete i.warn;
        var r = i.delimiters ? String(i.delimiters) + n : n;
        if (t[r]) return t[r];
        var a = e(n, i),
            s = {},
            l = [];
        return s.render = as(a.render, l), s.staticRenderFns = a.staticRenderFns.map(function (e) {
          return as(e, l);
        }), t[r] = s;
      };
    }

    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
    var ls,
        cs,
        ds = (ls = function ls(e, t) {
      var n = function (e, t) {
        Gr = t.warn || Li, Qr = t.isPreTag || D, Jr = t.mustUseProp || D, Xr = t.getTagNamespace || D, t.isReservedTag, zr = $i(t.modules, "transformNode"), Yr = $i(t.modules, "preTransformNode"), Kr = $i(t.modules, "postTransformNode"), qr = t.delimiters;
        var n,
            i,
            o = [],
            r = !1 !== t.preserveWhitespace,
            a = t.whitespace,
            s = !1,
            l = !1;

        function c(e) {
          if (d(e), s || e.processed || (e = ha(e, t)), o.length || e === n || n["if"] && (e.elseif || e["else"]) && ma(n, {
            exp: e.elseif,
            block: e
          }), i && !e.forbidden) if (e.elseif || e["else"]) a = e, c = function (e) {
            for (var t = e.length; t--;) {
              if (1 === e[t].type) return e[t];
              e.pop();
            }
          }(i.children), c && c["if"] && ma(c, {
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
          }), d(e), e.pre && (s = !1), Qr(e.tag) && (l = !1);

          for (var u = 0; u < Kr.length; u++) {
            Kr[u](e, t);
          }
        }

        function d(e) {
          if (!l) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) {
            e.children.pop();
          }
        }

        return function (e, t) {
          for (var n, i, o = [], r = t.expectHTML, a = t.isUnaryTag || D, s = t.canBeLeftOpenTag || D, l = 0; e;) {
            if (n = e, i && Wr(i)) {
              var c = 0,
                  d = i.toLowerCase(),
                  u = Pr[d] || (Pr[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
                  f = e.replace(u, function (e, n, i) {
                return c = i.length, Wr(d) || "noscript" === d || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Hr(d, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
              });
              l += e.length - f.length, e = f, I(d, l - c, l);
            } else {
              var p = e.indexOf("<");

              if (0 === p) {
                if ($r.test(e)) {
                  var h = e.indexOf("--\x3e");

                  if (h >= 0) {
                    t.shouldKeepComment && t.comment(e.substring(4, h), l, l + h + 3), S(h + 3);
                    continue;
                  }
                }

                if (Rr.test(e)) {
                  var g = e.indexOf("]>");

                  if (g >= 0) {
                    S(g + 2);
                    continue;
                  }
                }

                var m = e.match(Lr);

                if (m) {
                  S(m[0].length);
                  continue;
                }

                var v = e.match(Or);

                if (v) {
                  var y = l;
                  S(v[0].length), I(v[1], y, l);
                  continue;
                }

                var E = w();

                if (E) {
                  C(E), Hr(E.tagName, e) && S(1);
                  continue;
                }
              }

              var A = void 0,
                  b = void 0,
                  _ = void 0;

              if (p >= 0) {
                for (b = e.slice(p); !(Or.test(b) || Mr.test(b) || $r.test(b) || Rr.test(b) || (_ = b.indexOf("<", 1)) < 0);) {
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
            var t = e.match(Mr);

            if (t) {
              var n,
                  i,
                  o = {
                tagName: t[1],
                attrs: [],
                start: l
              };

              for (S(t[0].length); !(n = e.match(Dr)) && (i = e.match(Tr) || e.match(kr));) {
                i.start = l, S(i[0].length), i.end = l, o.attrs.push(i);
              }

              if (n) return o.unarySlash = n[1], S(n[0].length), o.end = l, o;
            }
          }

          function C(e) {
            var n = e.tagName,
                l = e.unarySlash;
            r && ("p" === i && Ir(n) && I(i), s(n) && i === n && I(n));

            for (var c = a(n) || !!l, d = e.attrs.length, u = new Array(d), f = 0; f < d; f++) {
              var p = e.attrs[f],
                  h = p[3] || p[4] || p[5] || "",
                  g = "a" === n && "href" === p[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
              u[f] = {
                name: p[1],
                value: Vr(h, g)
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
          warn: Gr,
          expectHTML: t.expectHTML,
          isUnaryTag: t.isUnaryTag,
          canBeLeftOpenTag: t.canBeLeftOpenTag,
          shouldDecodeNewlines: t.shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
          shouldKeepComment: t.comments,
          outputSourceRange: t.outputSourceRange,
          start: function start(e, r, a, d, u) {
            var f = i && i.ns || Xr(e);
            X && "svg" === f && (r = function (e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var i = e[n];
                Aa.test(i.name) || (i.name = i.name.replace(ba, ""), t.push(i));
              }

              return t;
            }(r));
            var p,
                h = pa(e, r, i);
            f && (h.ns = f), "style" !== (p = h).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || ae() || (h.forbidden = !0);

            for (var g = 0; g < Yr.length; g++) {
              h = Yr[g](h, t) || h;
            }

            s || (function (e) {
              null != Hi(e, "v-pre") && (e.pre = !0);
            }(h), h.pre && (s = !0)), Qr(h.tag) && (l = !0), s ? function (e) {
              var t = e.attrsList,
                  n = t.length;
              if (n) for (var i = e.attrs = new Array(n), o = 0; o < n; o++) {
                i[o] = {
                  name: t[o].name,
                  value: JSON.stringify(t[o].value)
                }, null != t[o].start && (i[o].start = t[o].start, i[o].end = t[o].end);
              } else e.pre || (e.plain = !0);
            }(h) : h.processed || (ga(h), function (e) {
              var t = Hi(e, "v-if");
              if (t) e["if"] = t, ma(e, {
                exp: t,
                block: e
              });else {
                null != Hi(e, "v-else") && (e["else"] = !0);
                var n = Hi(e, "v-else-if");
                n && (e.elseif = n);
              }
            }(h), function (e) {
              null != Hi(e, "v-once") && (e.once = !0);
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
              (e = l || e.trim() ? "script" === (o = i).tag || "style" === o.tag ? e : ua(e) : u.length ? a ? "condense" === a && ca.test(e) ? "" : " " : r ? " " : "" : "") && (l || "condense" !== a || (e = e.replace(da, " ")), !s && " " !== e && (c = function (e, t) {
                var n = t ? br(t) : Er;

                if (n.test(e)) {
                  for (var i, o, r, a = [], s = [], l = n.lastIndex = 0; i = n.exec(e);) {
                    (o = i.index) > l && (s.push(r = e.slice(l, o)), a.push(JSON.stringify(r)));
                    var c = Di(i[1].trim());
                    a.push("_s(" + c + ")"), s.push({
                      "@binding": c
                    }), l = o + i[0].length;
                  }

                  return l < e.length && (s.push(r = e.slice(l)), a.push(JSON.stringify(r))), {
                    expression: a.join("+"),
                    tokens: s
                  };
                }
              }(e, qr)) ? d = {
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

      !1 !== t.optimize && xa(n, t);
      var i = Ga(n, t);
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

        var s = ls(t.trim(), i);
        return s.errors = o, s.tips = r, s;
      }

      return {
        compile: t,
        compileToFunctions: ss(t)
      };
    }),
        us = ds(Ta),
        fs = (us.compile, us.compileToFunctions);

    function ps(e) {
      return (cs = cs || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', cs.innerHTML.indexOf("&#10;") > 0;
    }

    var hs = !!Y && ps(!1),
        gs = !!Y && ps(!0),
        ms = b(function (e) {
      var t = oi(e);
      return t && t.innerHTML;
    }),
        vs = xn.prototype.$mount;
    xn.prototype.$mount = function (e, t) {
      if ((e = e && oi(e)) === document.body || e === document.documentElement) return this;
      var n = this.$options;

      if (!n.render) {
        var i = n.template;
        if (i) {
          if ("string" == typeof i) "#" === i.charAt(0) && (i = ms(i));else {
            if (!i.nodeType) return this;
            i = i.innerHTML;
          }
        } else e && (i = function (e) {
          if (e.outerHTML) return e.outerHTML;
          var t = document.createElement("div");
          return t.appendChild(e.cloneNode(!0)), t.innerHTML;
        }(e));

        if (i) {
          var o = fs(i, {
            outputSourceRange: !1,
            shouldDecodeNewlines: hs,
            shouldDecodeNewlinesForHref: gs,
            delimiters: n.delimiters,
            comments: n.comments
          }, this),
              r = o.render,
              a = o.staticRenderFns;
          n.render = r, n.staticRenderFns = a;
        }
      }

      return vs.call(this, e, t);
    }, xn.compile = fs;
    var ys = xn;

    var Es = function Es() {
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

    Es._withStripped = !0;
    var As = ys.extend({
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
    ys.filter("str_limit", function (e, t) {
      return void 0 === e ? "" : (void 0 === t && (t = 45), (e = e.toString()).length <= t ? e : e.substr(0, t) + "...");
    });
    var bs = As;

    function _s(e, t, n, i, o, r, a, s) {
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

    var Ss = _s(bs, Es, [], !1, null, "06f2eb40", null);

    Ss.options.__file = "src/client/components/DialogSummary.vue";
    var ws = Ss.exports;

    var Cs = function Cs() {
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

    Cs._withStripped = !0;
    var Is = "state";
    var ks, Ts, Ns, xs;
    !function (e) {
      e[e.OK = 200] = "OK", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED";
    }(ks || (ks = {})), function (e) {
      e.LOCATION = "Location";
    }(Ts || (Ts = {})), function (e) {
      e.AUTOTILE = "autotile", e.CHAR = "charset", e.FACE = "faceset", e.FAVICON = "favicon", e.SKIN = "skin", e.TILE = "tile", e.PICTURE = "picture", e.POINTER = "pointer", e.AUTOTILESET = "autotileset", e.MAP = "map", e.TREE = "tree", e.STRING = "string", e.TILESET = "tileset", e.DIALOG = "dialog", e.GENERIC_MESSAGE = "generic-message", e.CONFIGURATION = "configuration", e.SAVE = "save";
    }(Ns || (Ns = {})), function (e) {
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
    }(xs || (xs = {}));

    var Ms = function Ms() {
      _classCallCheck(this, Ms);

      _defineProperty(this, "showGrid", !1);

      _defineProperty(this, "showEditorGrid", !1);

      _defineProperty(this, "showFPS", !1);

      _defineProperty(this, "showCellNumbers", !1);

      _defineProperty(this, "showFocus", !1);

      _defineProperty(this, "enableSelection", !1);

      _defineProperty(this, "showBlocks", !1);

      _defineProperty(this, "showOnTops", !1);

      _defineProperty(this, "enableAntialiasing", !0);

      _defineProperty(this, "fps", 0);

      _defineProperty(this, "selectCellStart", void 0);

      _defineProperty(this, "selectCellEnd", void 0);

      _defineProperty(this, "selectEventCell", void 0);
    };

    function Ds() {}

    var Os = function Os(e, t, n, i, o) {};

    var Ls;
    !function (e) {
      var _class, _temp;

      var t = !1,
          n = [];

      var i = function i() {
        _classCallCheck(this, i);
      };

      _defineProperty(i, "UP", "ArrowUp");

      _defineProperty(i, "DOWN", "ArrowDown");

      _defineProperty(i, "LEFT", "ArrowLeft");

      _defineProperty(i, "RIGHT", "ArrowRight");

      _defineProperty(i, "CTRL", "Control");

      _defineProperty(i, "ALT", "Alt");

      _defineProperty(i, "ENTER", "Enter");

      _defineProperty(i, "SPACEBAR", " ");

      _defineProperty(i, "CAPS", "CapsLock");

      _defineProperty(i, "SHIFT", "Shift");

      _defineProperty(i, "W", "w");

      _defineProperty(i, "A", "a");

      _defineProperty(i, "D", "d");

      _defineProperty(i, "S", "s");

      _defineProperty(i, "P", "p");

      _defineProperty(i, "E", "e");

      _defineProperty(i, "F1", "F1");

      _defineProperty(i, "F2", "F2");

      _defineProperty(i, "F3", "F3");

      _defineProperty(i, "F4", "F4");

      _defineProperty(i, "F5", "F5");

      _defineProperty(i, "F6", "F6");

      _defineProperty(i, "N_0", "0");

      _defineProperty(i, "N_1", "1");

      _defineProperty(i, "N_2", "2");

      _defineProperty(i, "N_3", "3");

      _defineProperty(i, "N_4", "4");

      _defineProperty(i, "N_5", "5");

      _defineProperty(i, "N_6", "6");

      _defineProperty(i, "N_7", "7");

      _defineProperty(i, "N_8", "8");

      _defineProperty(i, "N_9", "9");

      function o() {
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

      e.Keys = i, e.MouseButtons = (_temp = _class = function _class() {
        _classCallCheck(this, _class);
      }, _defineProperty(_class, "LEFT", 1), _defineProperty(_class, "RIGHT", 2), _defineProperty(_class, "MIDDLE", 4), _temp), e.init = function (e, n, r, a, s, l, c, d, u, f, p, h, g, m, v) {
        var y,
            E = !1;

        r[i.P] = function (e) {
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
          t || s(n.i, n.j, n.x, n.y), o();
        }), e.addEventListener("mousemove", function (e) {
          var t = b(e);
          A ? d(t.i, t.j, e.buttons) : u(t.i, t.j);
        }), e.addEventListener("mousedown", function (e) {
          A = !0;
          var t = b(e);
          l(t.i, t.j, t.x, t.y, e.buttons), o();
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
          l(t.i, t.j, t.x, t.y), o();
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
          var t = r[e.key];
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
      }, e.executeActionCallback = o, e.disableActionEvents = function () {
        t = !0;
      }, e.enableActionEvents = function () {
        t = !1;
      };
    }(Ls || (Ls = {}));
    var $s = [];

    function Rs(e, t) {
      var n;

      switch (e) {
        case 0:
          n = Ls.Keys.N_0;
          break;

        case 1:
          n = Ls.Keys.N_1;
          break;

        case 2:
          n = Ls.Keys.N_2;
          break;

        case 3:
          n = Ls.Keys.N_3;
          break;

        case 4:
          n = Ls.Keys.N_4;
          break;

        case 5:
          n = Ls.Keys.N_5;
          break;

        case 6:
          n = Ls.Keys.N_6;
          break;

        case 7:
          n = Ls.Keys.N_7;
          break;

        case 8:
          n = Ls.Keys.N_8;
          break;

        case 9:
          n = Ls.Keys.N_9;
          break;

        default:
          return void console.error("Unexpected numericKey: " + e);
      }

      var i = function i(e) {
        e.key === n && (t(e), function () {
          var _iterator2 = _createForOfIteratorHelper($s),
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

          $s = [];
        }());
      };

      $s.push(i), document.addEventListener("keydown", i);
    }

    var Ws = function Ws() {
      _classCallCheck(this, Ws);
    };

    _defineProperty(Ws, "NONE", 0);

    _defineProperty(Ws, "UP", Math.pow(2, 0));

    _defineProperty(Ws, "DOWN", Math.pow(2, 1));

    _defineProperty(Ws, "LEFT", Math.pow(2, 2));

    _defineProperty(Ws, "RIGHT", Math.pow(2, 3));

    _defineProperty(Ws, "ALL", Ws.UP + Ws.DOWN + Ws.LEFT + Ws.RIGHT);

    var Ps = function Ps() {
      _classCallCheck(this, Ps);
    };

    _defineProperty(Ps, "NONE", 0);

    _defineProperty(Ps, "N", Math.pow(2, 0));

    _defineProperty(Ps, "S", Math.pow(2, 1));

    _defineProperty(Ps, "W", Math.pow(2, 2));

    _defineProperty(Ps, "E", Math.pow(2, 3));

    _defineProperty(Ps, "NE", Math.pow(2, 4));

    _defineProperty(Ps, "SE", Math.pow(2, 5));

    _defineProperty(Ps, "SW", Math.pow(2, 6));

    _defineProperty(Ps, "NW", Math.pow(2, 7));

    _defineProperty(Ps, "ALL", Math.pow(2, 8) - 1);

    var Bs = [Ps.N, Ps.NE, Ps.E, Ps.SE, Ps.S, Ps.SW, Ps.W, Ps.NW];
    var js, Fs;
    !function (e) {
      e.IT = "it", e.EN = "en";
    }(js || (js = {})), function (e) {
      e[e.BASIC = 0] = "BASIC", e[e.D_STAR_LITE = 1] = "D_STAR_LITE";
    }(Fs || (Fs = {}));
    var Us = {
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
        lang: js.EN,
        skin: "ld3-webskin1.png",
        enableCLI: !0,
        mapper: {
          scales: [.2, .4, .6, .94]
        }
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
      },
      development: {
        tracing: {
          enabled: !0,
          threshold: 800
        }
      }
    };
    var Hs, Vs, Gs, qs, zs, Ys, Ks, Qs;
    !function (e) {
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
    }(Hs || (Hs = {})), new Date().getTime(), function (e) {
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
        return (e & t) === t && t !== Ws.NONE;
      }

      function o(e, t) {
        var n = Ws.NONE;

        switch (t) {
          case 0:
            n = Ws.UP;
            break;

          case 2:
            n = Ws.DOWN;
            break;

          case 3:
            n = Ws.LEFT;
            break;

          case 1:
            n = Ws.RIGHT;
        }

        return i(e, n);
      }

      function r(e, t, n, i) {
        var o = Ws.NONE;
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
        return o |= e ? Ws.UP : 0, o |= t ? Ws.DOWN : 0, o |= n ? Ws.LEFT : 0, o |= i ? Ws.RIGHT : 0, o;
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
        return !Hs.isEmpty(e) && !Number.isNaN(e) && e >= 0 && e <= 4 ? e : 0;
      }, e.getDirectionName = s, e.getBlockName = function (e) {
        var t = "free";
        return i(e, Ws.UP) && (t = s(0)), i(e, Ws.DOWN) && (t += s(2)), i(e, Ws.LEFT) && (t += s(3)), i(e, Ws.RIGHT) && (t += s(1)), t;
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
          case Ps.W:
          case Ps.SW:
          case Ps.NW:
            if (e % n.w == 0) return;
            break;

          case Ps.E:
          case Ps.NE:
          case Ps.SE:
            if (e % n.w == n.w - 1) return;
        }

        var i = e;

        switch (t) {
          case Ps.N:
            i -= n.w;
            break;

          case Ps.S:
            i += n.w;
            break;

          case Ps.W:
            i -= 1;
            break;

          case Ps.E:
            i += 1;
            break;

          case Ps.NE:
            i -= n.w - 1;
            break;

          case Ps.SE:
            i += n.w + 1;
            break;

          case Ps.SW:
            i += n.w - 1;
            break;

          case Ps.NW:
            i -= n.w + 1;
            break;

          default:
            console.error("Unexpected case: " + t);
        }

        return i >= 0 && i < n.w * n.h ? i : void 0;
      };
    }(Vs || (Vs = {})), function (e) {
      function t() {
        return {
          id: Hs.getRandomString(),
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
          lang: Us.ui.lang,
          skin: Us.ui.skin,
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
        return e.name = Us.hero.name, e.i = Us.maps.start.i, e.j = Us.maps.start.j, e.states = [], e.states[0] = {
          direction: 2,
          condition: "always",
          trigger: 0
        }, e.states[0].charaset = Us.hero.charaset, e;
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
          timestamp: Hs.now(),
          currentMap: Us.maps.start.map,
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
    }(Gs || (Gs = {})), function (e) {
      var t = "dialogContainer";
      var n;

      function i() {
        var e = document.getElementById(t);
        null !== e ? (e.classList.replace("hiddenFadeOut", "visibleFadeIn"), setTimeout(function () {
          e.style.display = "none";
        }, 200), Ls.disableActionEvents()) : console.error("Element not foud: dialogContainer");
      }

      function o() {
        Ls.enableActionEvents();
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

            Ls.addActionCallback(n), e.onclick = n, e.style.cursor = "pointer";
          }, 500);
        });
      }

      function a(e, t, n) {
        hl.load(e, Ns.STRING, function (t) {
          Hs.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading string: " + e), n()) : n(t);
        }, t);
      }

      function s(e, t, n) {
        e !== Gs.DEFAULT_ID ? hl.load(e + "", Ns.DIALOG, function (t) {
          if (Hs.isEmpty(t) || "string" != typeof t) console.error("Error while loading dialog: " + e), n(Gs.getDialogNode(Gs.FIRST_ELEM_ID));else {
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

              return console.error("Cannot reconstruct dialog tree from node: " + e), Gs.getDialogNode();
            }(Gs.FIRST_ELEM_ID, _e4.nodes, _e4.edges);

            n(_i3);
          }
        }, t) : n(Gs.getDialogNode(Gs.FIRST_ELEM_ID));
      }

      function l(e, t, n) {
        if (e.referenced = !0, !Hs.isEmpty(e.edgeIds)) {
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

        if (!Hs.isEmpty(o)) {
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
        i(), Hs.isEmpty(l) ? console.error("skin is not defined!") : p.style.borderImageSource = "url('/assets/skin/" + l + "')";
        var v = s.face;
        void 0 !== v ? (h.style.display = "block", h.style.backgroundImage = "url('/assets/faceset/" + v + "')") : h.style.display = "none", void 0 !== s.name ? (g.firstChild.textContent = s.name, g.style.visibility = "block") : g.style.visibility = "hidden";

        var y = function (e) {
          var t;
          return void 0 !== e.genericMessage && (t = function (e) {
            var t = n.get(e);

            if (void 0 !== t && !Hs.isEmpty(t.values)) {
              var _e9, _n4;

              if (_e9 = void 0 === t.condition ? t.values : t.values.filter(function (e) {
                return u(t.condition, e.conditionParams);
              }), 0 === _e9.length) return;
              return _n4 = 1 === _e9.length ? 0 : Vs.getRandomInteger(0, _e9.length - 1), _e9[_n4].message;
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
            _o4 = _r3.value, _o4 = _o4.trim(), _o4 = Ls.escapeText(_o4), i = c(e, n, t, a, _o4);
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

              n.onclick = i, Rs(_e12, i), _e12++;
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
        return void 0 === e || (e in xs ? xs[e](t) : (console.error('Condition not found: "' + e + '", on event.'), !1));
      }

      function f(e, t, n, i, o) {
        if (!i.has(e.id)) {
          if (!n && e.id === t) return e;
          i.set(e.id, e);
          var _r4 = e.edges;

          if (!Hs.isEmpty(_r4)) {
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
        hl.save(e + "", i, Ns.STRING, function (t, i) {
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
        hl.save(e + "", JSON.stringify(r), Ns.DIALOG, function (t, i) {
          i ? (Hs.isNumeric(t) && (e = parseInt(t)), n(e)) : n();
        });
      }, e.deconstructDialogTree = c, e.loadGenericMessages = function (e, t, i) {
        isNaN(e) ? i(!1) : hl.load(e + "", Ns.GENERIC_MESSAGE, function (t) {
          Hs.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading dialog: " + e), i(!1)) : (n = JSON.parse(t), i(!0));
        });
      }, e.showComplexDialog = function (e, t, n, i, o, r, a) {
        s(i, o.lang, function (s) {
          void 0 === s ? console.error("Error while loading dialog: " + i) : d(e, t, n, s, o.skin, r, a);
        });
      }, e.showSimpleDialog = function (e, t, n, i, o, r) {
        a(i, o.lang, function (i) {
          var a = Gs.getDialogNode();
          a.message = i, d(e, t, n, a, o.skin, Os, r);
        });
      }, e.search = function (e, t, n) {
        return f(e, t, void 0 !== n && n, new Map(), new Map());
      };
    }(qs || (qs = {})), function (e) {
      var _class2, _temp2, _class3, _temp3, _class4, _temp4;

      var t, n, i;
      e.DOUBLE_PI = 2 * Math.PI, e.Color = (_temp2 = _class2 = function _class2() {
        _classCallCheck(this, _class2);
      }, _defineProperty(_class2, "YELLOW", "yellow"), _defineProperty(_class2, "RED", "red"), _defineProperty(_class2, "WHITE", "white"), _defineProperty(_class2, "GREY", "grey"), _defineProperty(_class2, "BLACK", "black"), _defineProperty(_class2, "AQUA", "aqua"), _defineProperty(_class2, "DARKBLUE", "darkblue"), _defineProperty(_class2, "GREEN", "green"), _defineProperty(_class2, "LIME", "lime"), _temp2), e.RequestType = (_temp3 = _class3 = function _class3() {
        _classCallCheck(this, _class3);
      }, _defineProperty(_class3, "GET", "GET"), _defineProperty(_class3, "POST", "POST"), _temp3), e.MimeType = (_temp4 = _class4 = function _class4() {
        _classCallCheck(this, _class4);
      }, _defineProperty(_class4, "JSON", "application/json"), _temp4), e.MEDIUM_MSPEED = .128, e.VERY_LOW_MSPEED = e.MEDIUM_MSPEED * (1 - .9), e.LOW_MSPEED = .5 * e.MEDIUM_MSPEED, e.MEDIUM_LOW_MSPEED = .8 * e.MEDIUM_MSPEED, e.MEDIUM_HIGH_MSPEED = 1.2 * e.MEDIUM_MSPEED, e.HIGH_MSPEED = 1.5 * e.MEDIUM_MSPEED, e.VERY_HIGH_MSPEED = 1.9 * e.MEDIUM_MSPEED, e.MEDIUM_FREQUENCY = .006, e.VERY_LOW_FREQUENCY = e.MEDIUM_FREQUENCY * (1 - .9), e.LOW_FREQUENCY = .5 * e.MEDIUM_FREQUENCY, e.MEDIUM_LOW_FREQUENCY = .8 * e.MEDIUM_FREQUENCY, e.MEDIUM_HIGH_FREQUENCY = 1.2 * e.MEDIUM_FREQUENCY, e.HIGH_FREQUENCY = 1.5 * e.MEDIUM_FREQUENCY, e.VERY_HIGH_FREQUENCY = 1.9 * e.MEDIUM_FREQUENCY, function (e) {
        e[e.LOW = 0] = "LOW", e[e.MID = 1] = "MID", e[e.TOP = 2] = "TOP", e[e.EVENTS = 3] = "EVENTS";
      }(t = e.MapLayer || (e.MapLayer = {})), function (e) {
        e[e.APPLY = 0] = "APPLY", e[e.ERASE = 1] = "ERASE", e[e.EVENTS = 2] = "EVENTS";
      }(n = e.EditMode || (e.EditMode = {})), function (e) {
        e[e.BLOCKS = 0] = "BLOCKS", e[e.ONTOP = 1] = "ONTOP";
      }(i = e.TileEditMode || (e.TileEditMode = {}));
    }(zs || (zs = {})), function (e) {
      function t(e, t) {
        switch (parseInt(t + "")) {
          case 0:
            e.frequencyVal = zs.VERY_LOW_FREQUENCY;
            break;

          case 1:
            e.frequencyVal = zs.LOW_FREQUENCY;
            break;

          case 2:
            e.frequencyVal = zs.MEDIUM_LOW_FREQUENCY;
            break;

          case 3:
            e.frequencyVal = zs.MEDIUM_FREQUENCY;
            break;

          case 4:
            e.frequencyVal = zs.MEDIUM_HIGH_FREQUENCY;
            break;

          case 5:
            e.frequencyVal = zs.HIGH_FREQUENCY;
            break;

          case 6:
            e.frequencyVal = zs.VERY_HIGH_FREQUENCY;
            break;

          default:
            e.frequencyVal = zs.MEDIUM_FREQUENCY;
        }
      }

      function n(e, t) {
        switch (parseInt(t + "")) {
          case 0:
            e.mSpeed = zs.VERY_LOW_MSPEED;
            break;

          case 1:
            e.mSpeed = zs.LOW_MSPEED;
            break;

          case 2:
            e.mSpeed = zs.MEDIUM_LOW_MSPEED;
            break;

          case 3:
            e.mSpeed = zs.MEDIUM_MSPEED;
            break;

          case 4:
            e.mSpeed = zs.MEDIUM_HIGH_MSPEED;
            break;

          case 5:
            e.mSpeed = zs.HIGH_MSPEED;
            break;

          case 6:
            e.mSpeed = zs.VERY_HIGH_MSPEED;
            break;

          default:
            e.mSpeed = zs.MEDIUM_MSPEED;
        }
      }

      e.setFrequency = t, e.setSpeed = n, e.isVisible = function (e, t) {
        return !(void 0 === e || t !== (0 !== Vs.normalizeZIndex(e.onTop)) || !Hs.isEmpty(e.visible) && !e.visible || !Hs.isEmpty(e.opacity) && 0 === e.opacity || Hs.isEmpty(e.charaset));
      }, e.initTransientData = function (e, i) {
        return void 0 === i && (i = Gs.getCharacter()), n(i, i.speed), t(i, i.frequency), i;
      };
    }(Ys || (Ys = {})), function (e) {
      e.showError = function (e, t) {
        null !== e ? (void 0 !== t && t.clear(e), e.fillStyle = "#000000", e.font = "bold 20px Oldenburg", e.fillText("An error occurred :(", 60, 60)) : console.error("Context is null");
      };
    }(Ks || (Ks = {})), function (e) {
      function t(e) {
        if (void 0 !== e.imageData && e.imageData.width > e.imageData.height) switch (e.frames = Math.floor(e.imageData.width / (e.imageData.height / 4 * 3)), void 0 === e.frequency && (e.frequency = 3), e.frequency) {
          case 0:
            e.frequencyVal = zs.VERY_LOW_FREQUENCY;
            break;

          case 1:
            e.frequencyVal = zs.LOW_FREQUENCY;
            break;

          case 2:
            e.frequencyVal = zs.MEDIUM_LOW_FREQUENCY;
            break;

          case 3:
            e.frequencyVal = zs.MEDIUM_FREQUENCY;
            break;

          case 4:
            e.frequencyVal = zs.MEDIUM_HIGH_FREQUENCY;
            break;

          case 5:
            e.frequencyVal = zs.HIGH_FREQUENCY;
            break;

          case 6:
            e.frequencyVal = zs.VERY_HIGH_FREQUENCY;
            break;

          default:
            e.frequencyVal = zs.MEDIUM_FREQUENCY;
        }
      }

      e.loadTileset = function (e, t, n) {
        hl.load(e + "", Ns.TILESET, function (i) {
          if (Hs.isEmpty(i)) console.error("Error while loading tileset: " + e), n();else try {
            var _e16 = JSON.parse(i);

            n(_e16);
          } catch (i) {
            "SyntaxError" === i.name ? console.error("Error while parsing tileset: " + e) : "TypeError" === i.name ? console.error("Error while reading tileset: " + e) : console.error(i), Ks.showError(t), n();
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
          hl.load("autotilesets", Ns.AUTOTILESET, function (n) {
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

                void 0 === n.imageData ? hl.load(n.image, Ns.AUTOTILE, function (e) {
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
        void 0 === e.animationStartTime && (e.animationStartTime = Hs.now());
        var t = Hs.now() - e.animationStartTime;
        return 3 * Math.floor(t * e.frequencyVal % e.frames);
      };
    }(Qs || (Qs = {}));

    var Js,
        Xs,
        Zs,
        el = window.requestAnimationFrame || function (e) {
      return window.setTimeout(e, 40), Math.floor(100 * Math.random());
    },
        tl = window.cancelAnimationFrame;

    var nl = /*#__PURE__*/function () {
      function nl(e) {
        _classCallCheck(this, nl);

        _defineProperty(this, "map", void 0);

        _defineProperty(this, "focus", void 0);

        _defineProperty(this, "pointer", void 0);

        _defineProperty(this, "renderingConfiguration", void 0);

        _defineProperty(this, "layers", void 0);

        _defineProperty(this, "context", void 0);

        _defineProperty(this, "grid", void 0);

        _defineProperty(this, "paused", void 0);

        _defineProperty(this, "pauseStartTime", void 0);

        _defineProperty(this, "pauseDuration", void 0);

        _defineProperty(this, "redrawArea", void 0);

        this.renderingConfiguration = new Ms(), this.grid = e, this.context = e.getContext(), this.paused = !1, this.focus = this.grid.mapCellToCanvas({
          i: 0,
          j: 0
        }), this.pointer = {
          i: 0,
          j: 0
        };
      }

      _createClass(nl, [{
        key: "start",
        value: function start(e) {
          this.changeScale();
          var t = this,
              n = el(function () {
            t.mainGameLoop(n);
          });
        }
      }, {
        key: "mainGameLoop",
        value: function mainGameLoop(e) {
          var t = this,
              n = el(function () {
            t.mainGameLoop(n);
          });
          !this.paused && this.mainGameLoop_pre() ? (this.render(this.map, this.context), this.mainGameLoop_post()) : tl(e);
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
          null != this.focus.x && null != this.focus.y && this.renderingConfiguration.showFocus && (this.context.save(), this.context.beginPath(), this.context.fillStyle = zs.Color.BLACK, this.context.arc(this.focus.x + Math.floor(this.grid.cellW / 2), this.focus.y + Math.floor(this.grid.cellH / 2), 15, 0, zs.DOUBLE_PI), this.context.closePath(), this.context.fill(), this.context.restore());
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
          this.paused = null != e ? e : !this.paused, this.paused ? this.pauseStartTime = Hs.now() : (void 0 === this.pauseStartTime && (this.pauseStartTime = 0), this.pauseDuration = Hs.now() - this.pauseStartTime, this.pauseStartTime = void 0);
        }
      }, {
        key: "changeMap",
        value: function changeMap(e, t) {
          this.togglePause(!0);
          var n = this;
          Hs.isEmpty(e) && (console.error("Uninitialized map"), console.trace()), n.map = e, n.changeTile(e.tileset.image, function (e) {
            Xs.initTransientData(n, function () {
              n.togglePause(!1), t(n);
            });
          });
        }
      }, {
        key: "changeTile",
        value: function changeTile(e, t) {
          var n = this;
          Qs.loadTileset(e, this.context, function (i) {
            if (void 0 === i) return console.error("Cannot change tile, tileset not found: " + e), void t(n);
            n.map.tileset = i, hl.load(i.image, Ns.TILE, function (e) {
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

          if (!Hs.isEmpty(e) && void 0 !== e.tileset.imageData) {
            for (var _s2 = i; _s2 <= o; _s2++) {
              for (var _i5 = r; _i5 <= a; _i5++) {
                var _o5 = Vs.cellToGid({
                  i: _i5,
                  j: _s2
                }, e.width);

                for (var _r6 = zs.MapLayer.LOW; _r6 <= zs.MapLayer.TOP; _r6++) {
                  var _a3 = this.map.layers[_r6];
                  if (void 0 === _a3 || void 0 === _a3.data || _a3.data.length < _o5) continue;
                  var _l2 = _a3.data[_o5];
                  if (null != _l2) if (Xs.isThisAnAutotileCell(_o5, _a3, e)) {
                    var _n6 = void 0;

                    if (void 0 !== e.autotilesets && (_n6 = e.autotilesets[_l2]), void 0 === _n6) {
                      console.warn("Autotile gid not set in map: " + _l2);
                      continue;
                    }

                    if (void 0 !== _n6.imageData) {
                      var _e18 = Ps.ALL;
                      void 0 !== _a3.autotileData && null !== _a3.autotileData[_o5] && (_e18 = _a3.autotileData[_o5]), this.applyLayerCustomizations(_r6), Hs.isEmpty(_a3.opacity) || (t.globalAlpha = _a3.opacity), this.renderAutotile(t, _n6, _l2, _e18, {
                        i: _i5,
                        j: _s2
                      }), t.globalAlpha = 1, this.removeLayerCustomizations(_r6);
                    }
                  } else {
                    var _o6 = 0;
                    void 0 !== e.tileset.onTop && (_o6 = Vs.normalizeZIndex(e.tileset.onTop[_l2])), 0 !== _o6 && n || (this.applyLayerCustomizations(_r6), Hs.isEmpty(_a3.opacity) || (t.globalAlpha = _a3.opacity), this.renderCell(t, e.tileset, _l2, _i5, _s2), t.globalAlpha = 1, this.removeLayerCustomizations(_r6));
                  }
                }

                Xs.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _i5, _s2, !1);
              }
            }

            this.renderPointer();

            for (var _s3 = i; _s3 <= o; _s3++) {
              for (var _o7 = r; _o7 <= a && n; _o7++) {
                for (var _n7 = i; _n7 <= _s3; _n7++) {
                  var _i6 = Vs.cellToGid({
                    i: _o7,
                    j: _n7
                  }, e.width);

                  for (var _r7 = zs.MapLayer.LOW; _r7 <= zs.MapLayer.TOP; _r7++) {
                    var _a4 = this.map.layers[_r7];
                    if (void 0 === _a4 || void 0 === _a4.data || _a4.data.length < _i6) continue;
                    var _l3 = _a4.data[_i6];
                    if (Hs.isEmpty(_l3)) continue;
                    var _c = 0;
                    void 0 !== e.tileset.onTop && (_c = Vs.normalizeZIndex(e.tileset.onTop[_l3])), _c > 0 && _n7 + _c === _s3 && (this.applyLayerCustomizations(_r7), Hs.isEmpty(_a4.opacity) || (t.globalAlpha = _a4.opacity), this.renderCell(t, e.tileset, _l3, _o7, _n7), t.globalAlpha = 1, this.removeLayerCustomizations(_r7));
                  }
                }
              }

              for (var _e19 = r; _e19 <= a; _e19++) {
                this.renderDynamicElements(i, o, r, a, _e19, _s3, !1);
              }
            }

            for (var _e20 = i; _e20 <= o; _e20++) {
              for (var _t7 = r; _t7 <= a; _t7++) {
                this.renderDynamicElements(i, o, r, a, _t7, _e20, !0), Xs.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _t7, _e20, !0);
              }
            }
          }

          Xs.renderGlobalUI(this.grid, this.context, this.renderingConfiguration), this.renderFocus();
        }
      }, {
        key: "renderCell",
        value: function renderCell(e, t, n, i, o) {
          var r = Vs.gidToCell(n, Math.floor(t.imageWidth / this.grid.cellW));
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
            case Ps.N | Ps.E | Ps.S | Ps.W:
              r = 2, a = 0;
              break;

            case Ps.E | Ps.S:
            case Ps.E | Ps.S | Ps.NE:
            case Ps.E | Ps.S | Ps.SW:
            case Ps.E | Ps.S | Ps.NE | Ps.SW:
            case Ps.E | Ps.S | Ps.NW:
            case Ps.E | Ps.S | Ps.NW | Ps.NE:
            case Ps.E | Ps.S | Ps.NW | Ps.SW:
            case Ps.E | Ps.S | Ps.NW | Ps.NE | Ps.SW:
              l = !0;

            case Ps.E | Ps.SE | Ps.S:
            case Ps.E | Ps.SE | Ps.S | Ps.NE:
            case Ps.E | Ps.SE | Ps.S | Ps.SW:
            case Ps.E | Ps.SE | Ps.S | Ps.NE | Ps.SW:
            case Ps.E | Ps.SE | Ps.S | Ps.NW:
            case Ps.E | Ps.SE | Ps.S | Ps.NW | Ps.NE:
            case Ps.E | Ps.SE | Ps.S | Ps.NW | Ps.SW:
            case Ps.E | Ps.SE | Ps.S | Ps.NW | Ps.NE | Ps.SW:
              r = 0, a = 1;
              break;

            case Ps.W | Ps.SW | Ps.S | Ps.SE | Ps.E:
            case Ps.W | Ps.SW | Ps.S | Ps.SE | Ps.E | Ps.NW:
            case Ps.W | Ps.SW | Ps.S | Ps.SE | Ps.E | Ps.NE:
            case Ps.W | Ps.SW | Ps.S | Ps.SE | Ps.E | Ps.NW | Ps.NE:
              r = 1, a = 1;
              break;

            case Ps.W | Ps.S:
            case Ps.W | Ps.S | Ps.NW:
            case Ps.W | Ps.S | Ps.SE:
            case Ps.W | Ps.S | Ps.NW | Ps.SE:
            case Ps.W | Ps.S | Ps.NE:
            case Ps.W | Ps.S | Ps.NE | Ps.NW:
            case Ps.W | Ps.S | Ps.NE | Ps.SE:
            case Ps.W | Ps.S | Ps.NE | Ps.NW | Ps.SE:
              l = !0;

            case Ps.W | Ps.SW | Ps.S:
            case Ps.W | Ps.SW | Ps.S | Ps.NW:
            case Ps.W | Ps.SW | Ps.S | Ps.SE:
            case Ps.W | Ps.SW | Ps.S | Ps.NW | Ps.SE:
            case Ps.W | Ps.SW | Ps.S | Ps.NE:
            case Ps.W | Ps.SW | Ps.S | Ps.NE | Ps.NW:
            case Ps.W | Ps.SW | Ps.S | Ps.NE | Ps.SE:
            case Ps.W | Ps.SW | Ps.S | Ps.NE | Ps.NW | Ps.SE:
              r = 2, a = 1;
              break;

            case Ps.N | Ps.NE | Ps.E | Ps.SE | Ps.S:
            case Ps.N | Ps.NE | Ps.E | Ps.SE | Ps.S | Ps.NW:
            case Ps.N | Ps.NE | Ps.E | Ps.SE | Ps.S | Ps.SW:
            case Ps.N | Ps.NE | Ps.E | Ps.SE | Ps.S | Ps.NW | Ps.SW:
              r = 0, a = 2;
              break;

            case Ps.ALL:
              r = 1, a = 2;
              break;

            case Ps.N | Ps.NW | Ps.W | Ps.SW | Ps.S:
            case Ps.N | Ps.NW | Ps.W | Ps.SW | Ps.S | Ps.NE:
            case Ps.N | Ps.NW | Ps.W | Ps.SW | Ps.S | Ps.SE:
            case Ps.N | Ps.NW | Ps.W | Ps.SW | Ps.S | Ps.NE | Ps.SE:
              r = 2, a = 2;
              break;

            case Ps.N | Ps.E:
            case Ps.N | Ps.E | Ps.NW:
            case Ps.N | Ps.E | Ps.SE:
            case Ps.N | Ps.E | Ps.NW | Ps.SE:
            case Ps.N | Ps.E | Ps.SW:
            case Ps.N | Ps.E | Ps.SW | Ps.NW:
            case Ps.N | Ps.E | Ps.SW | Ps.SE:
            case Ps.N | Ps.E | Ps.SW | Ps.NW | Ps.SE:
              l = !0;

            case Ps.N | Ps.NE | Ps.E:
            case Ps.N | Ps.NE | Ps.E | Ps.NW:
            case Ps.N | Ps.NE | Ps.E | Ps.SE:
            case Ps.N | Ps.NE | Ps.E | Ps.NW | Ps.SE:
            case Ps.N | Ps.NE | Ps.E | Ps.SW:
            case Ps.N | Ps.NE | Ps.E | Ps.SW | Ps.NW:
            case Ps.N | Ps.NE | Ps.E | Ps.SW | Ps.SE:
            case Ps.N | Ps.NE | Ps.E | Ps.SW | Ps.NW | Ps.SE:
              r = 0, a = 3;
              break;

            case Ps.W | Ps.NW | Ps.N | Ps.NE | Ps.E:
            case Ps.W | Ps.NW | Ps.N | Ps.NE | Ps.E | Ps.SW:
            case Ps.W | Ps.NW | Ps.N | Ps.NE | Ps.E | Ps.SE:
            case Ps.W | Ps.NW | Ps.N | Ps.NE | Ps.E | Ps.SW | Ps.SE:
              r = 1, a = 3;
              break;

            case Ps.W | Ps.N:
            case Ps.W | Ps.N | Ps.SW:
            case Ps.W | Ps.N | Ps.NE:
            case Ps.W | Ps.N | Ps.SW | Ps.NE:
            case Ps.W | Ps.N | Ps.SE:
            case Ps.W | Ps.N | Ps.SE | Ps.SW:
            case Ps.W | Ps.N | Ps.SE | Ps.NE:
            case Ps.W | Ps.N | Ps.SE | Ps.SW | Ps.NE:
              l = !0;

            case Ps.W | Ps.NW | Ps.N:
            case Ps.W | Ps.NW | Ps.N | Ps.SW:
            case Ps.W | Ps.NW | Ps.N | Ps.NE:
            case Ps.W | Ps.NW | Ps.N | Ps.SW | Ps.NE:
            case Ps.W | Ps.NW | Ps.N | Ps.SE:
            case Ps.W | Ps.NW | Ps.N | Ps.SE | Ps.SW:
            case Ps.W | Ps.NW | Ps.N | Ps.SE | Ps.NE:
            case Ps.W | Ps.NW | Ps.N | Ps.SE | Ps.SW | Ps.NE:
              r = 2, a = 3;
              break;

            default:
              if (0 == (i & (Ps.N | Ps.E | Ps.S | Ps.W))) {
                r = 0, a = 0;
                break;
              }

              r = 1, a = 2, (i & (Ps.N | Ps.E)) != (Ps.N | Ps.E) && (i & (Ps.S | Ps.E)) != (Ps.S | Ps.E) && (i & (Ps.S | Ps.W)) != (Ps.S | Ps.W) && (i & (Ps.N | Ps.W)) != (Ps.N | Ps.W) || (l = !0), (i & (Ps.N | Ps.S)) > 0 && (0 == (i & Ps.W) || 0 == (i & Ps.E)) ? c = !0 : (i & (Ps.W | Ps.E)) > 0 && (0 == (i & Ps.N) || 0 == (i & Ps.S)) && (d = !0);
          }

          var u = Qs.getAnimatedAutotileFrame(t);

          if (e.drawImage(s, (r + u) * this.grid.cellW, a * this.grid.cellH, this.grid.cellW, this.grid.cellH, o.i * this.grid.cellW, o.j * this.grid.cellH, this.grid.cellW, this.grid.cellH), l) {
            var _t8, _n8;

            r = 2, a = 0;

            var _l4 = Math.floor(this.grid.cellW / 2),
                _c2 = Math.floor(this.grid.cellH / 2);

            0 == (i & Ps.NW) && (i & (Ps.N | Ps.W)) == (Ps.N | Ps.W) && (_t8 = 0, _n8 = 0, this.drawAngle(e, s, r + u, a, _l4, _c2, o, _t8, _n8)), 0 == (i & Ps.NE) && (i & (Ps.N | Ps.E)) == (Ps.N | Ps.E) && (_t8 = _l4, _n8 = 0, this.drawAngle(e, s, r + u, a, _l4, _c2, o, _t8, _n8)), 0 == (i & Ps.SW) && (i & (Ps.S | Ps.W)) == (Ps.S | Ps.W) && (_t8 = 0, _n8 = _c2, this.drawAngle(e, s, r + u, a, _l4, _c2, o, _t8, _n8)), 0 == (i & Ps.SE) && (i & (Ps.S | Ps.E)) == (Ps.S | Ps.E) && (_t8 = _l4, _n8 = _c2, this.drawAngle(e, s, r + u, a, _l4, _c2, o, _t8, _n8));
          }

          if (c) {
            var _t9,
                _n9 = {
              w: Math.floor(this.grid.cellW / 2),
              h: this.grid.cellH
            };

            a = 2;
            var _l5 = 0;
            0 == (i & Ps.W) && (r = 0, _t9 = 0, this.drawBottleneck(e, s, r + u, a, o, _t9, _l5, _n9)), 0 == (i & Ps.E) && (r = 2, _t9 = Math.floor(this.grid.cellW / 2), this.drawBottleneck(e, s, r + u, a, o, _t9, _l5, _n9)), 0 == (i & Ps.N) ? (r = 0, a = 0, _t9 = 0, _l5 = 0, _n9 = {
              w: this.grid.cellW,
              h: Math.floor(this.grid.cellH / 2)
            }, this.drawBottleneck(e, s, r + u, a, o, _t9, _l5, _n9)) : 0 == (i & Ps.S) && (r = 0, a = 0, _t9 = 0, _l5 = Math.floor(this.grid.cellH / 2), _n9 = {
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

            0 == (i & Ps.N) && (a = 1, _n10 = 0, this.drawBottleneck(e, s, r + u, a, o, _l6, _n10, _t10)), 0 == (i & Ps.S) && (a = 3, _n10 = Math.floor(this.grid.cellH / 2), this.drawBottleneck(e, s, r + u, a, o, _l6, _n10, _t10)), 0 == (i & Ps.E) ? (r = 0, a = 0, _l6 = Math.floor(this.grid.cellW / 2), _n10 = 0, _t10 = {
              w: Math.floor(this.grid.cellW / 2),
              h: this.grid.cellH
            }, this.drawBottleneck(e, s, r + u, a, o, _l6, _n10, _t10)) : 0 == (i & Ps.W) && (r = 0, a = 0, _l6 = 0, _n10 = 0, _t10 = {
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

      return nl;
    }();

    !function (e) {
      function t(e) {
        return {
          id: e.id,
          memory: e.memory
        };
      }

      e.getSave = function (e, n) {
        if (Hs.isEmpty(e) || Hs.isEmpty(n)) return Gs.getSave();
        var i = new Array();

        if (!Hs.isEmpty(e.events)) {
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

        var o = Gs.getSave();
        return o.currentMap = e.id, o.hero = n, o.maps[e.id] = {
          events: i
        }, o;
      }, e.loadMapSave = function (e, t, n, i) {
        Xs.loadMap(t, e.context.canvas, function (t) {
          var o = t;
          !function (e, t) {
            if (Hs.isEmpty(e) || Hs.isEmpty(t.events) || Hs.isEmpty(e.maps[t.id])) return;
            var n = e.maps[t.id].events;

            if (!Hs.isEmpty(n)) {
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
            if (e.resetTranslation(), e.hero.i = n.i, e.hero.j = n.j, Zs.initTransientData(o, e.grid, e.hero), e.focus = e.grid.mapCellToCanvas(n), !Hs.isEmpty(e.map.events)) for (var _t11 = 0; _t11 < e.map.events.length; _t11++) {
              var _n13 = Zs.initTransientData(e.map, e.grid, e.map.events[_t11]);

              void 0 !== _n13 && (e.map.events[_t11] = _n13);
            }
            i(!0);
          });
        });
      };
    }(Js || (Js = {}));

    var il = /*#__PURE__*/function (_nl) {
      _inherits(il, _nl);

      var _super = _createSuper(il);

      function il(e, t, n) {
        var _temp5, _this;

        _classCallCheck(this, il);

        (_temp5 = _this = _super.call(this, e), _defineProperty(_assertThisInitialized(_this), "FPS", 20), _defineProperty(_assertThisInitialized(_this), "refreshInterval", 1e3 / _this.FPS), _defineProperty(_assertThisInitialized(_this), "autoFPS", !0), _defineProperty(_assertThisInitialized(_this), "secondFPS", 0), _defineProperty(_assertThisInitialized(_this), "countFPS", 0), _defineProperty(_assertThisInitialized(_this), "lastFPS", 0), _defineProperty(_assertThisInitialized(_this), "fpsPerformance", [22, 21, 20]), _defineProperty(_assertThisInitialized(_this), "hero", void 0), _defineProperty(_assertThisInitialized(_this), "action", void 0), _defineProperty(_assertThisInitialized(_this), "save", void 0), _defineProperty(_assertThisInitialized(_this), "eventScriptLauncher", void 0), _defineProperty(_assertThisInitialized(_this), "dialogScriptLauncher", void 0), _defineProperty(_assertThisInitialized(_this), "dialogName", void 0), _defineProperty(_assertThisInitialized(_this), "dialogText", void 0), _defineProperty(_assertThisInitialized(_this), "dialogSkin", void 0), _defineProperty(_assertThisInitialized(_this), "dialogAction", void 0), _temp5), _this.eventScriptLauncher = t, _this.dialogScriptLauncher = n;
        return _this;
      }

      _createClass(il, [{
        key: "mainGameLoop_pre",
        value: function mainGameLoop_pre() {
          if (!_get(_getPrototypeOf(il.prototype), "mainGameLoop_pre", this).call(this)) return !1;
          var e = !1,
              t = this,
              n = Hs.now();

          if (!Hs.isEmpty(this.hero)) {
            var _i7 = Zs.update(this.hero, this, this.hero, this.action, n, this.pauseDuration);

            void 0 !== _i7 && this.eventScriptLauncher(this.hero, this, this.hero, _i7), e = Zs.manageMovements(this.map, this.grid, this.hero, function (e, n) {
              t.grid.changeTranslation(t.focus.x + e, t.focus.y + n, t.map.width, t.map.height);
            }, function (e, n) {
              t.focus.x += e, t.focus.y += n;
            });
          }

          if (!Hs.isEmpty(this.map.events)) {
            var _iterator16 = _createForOfIteratorHelper(this.map.events),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _t12 = _step16.value;

                var _i8 = Zs.update(_t12, this, this.hero, this.action, n, this.pauseDuration);

                void 0 !== _i8 && this.eventScriptLauncher(_t12, this, this.hero, _i8), e = e || Zs.manageMovements(this.map, this.grid, _t12, Ds, Ds);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            this.action = void 0;
          }

          return e && Xs.updateDynamicData(t.hero, this.map), this.paused || (this.pauseDuration = void 0), this.redrawArea = this.getRedrawArea(), !0;
        }
      }, {
        key: "mainGameLoop_post",
        value: function mainGameLoop_post() {
          _get(_getPrototypeOf(il.prototype), "mainGameLoop_post", this).call(this), this.renderFPS();
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
          var e = Math.floor(Hs.now() / 1e3);
          if (e === this.secondFPS) this.countFPS++;else if (this.lastFPS = this.countFPS, this.countFPS = 1, this.secondFPS = e, !0 === this.autoFPS) {
            this.fpsPerformance.shift(), this.fpsPerformance[2] = this.lastFPS;

            var _e22 = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;

            this.FPS = Math.ceil(_e22) + 2;
          }
          this.renderingConfiguration.showFPS && (this.context.fillStyle = zs.Color.RED, this.context.font = "bold 18px Oldenburg", this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20));
        }
      }, {
        key: "renderDynamicElements",
        value: function renderDynamicElements(e, t, n, i, o, r, a) {
          try {
            Zs.isVisible(this.hero, e, t, n, i, o, r, a) && Zs.render(this.grid, this.hero, this.context, !0);
          } catch (e) {
            console.error(e);
          }

          if (!Hs.isEmpty(this.map.events)) {
            var _iterator17 = _createForOfIteratorHelper(this.map.events),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _s4 = _step17.value;

                try {
                  Zs.isVisible(_s4, e, t, n, i, o, r, a) && Zs.render(this.grid, _s4, this.context, !0, this.pointer);
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
            if (!Hs.isEmpty(this.map)) return void t(!1);
            n = Us.maps.start.map, i = Gs.getHero();
          } else this.save = e, n = e.currentMap, i = e.hero;

          var o = Zs.initTransientData(this.map, this.grid, i);
          void 0 === o ? console.error("Cannot initialize hero event") : this.hero = o, Js.loadMapSave(this, n, i, t);
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
          return Zs.startMovement(this.hero, e, t, function (e) {
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
          void 0 === this.save && (this.save = Gs.getSave()), this.save.config.lang = e;
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

      return il;
    }(nl);

    function ol(e, t, n) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Fs.D_STAR_LITE;
      var o = Hs.now(),
          r = n.i - t.i,
          a = n.j - t.j;
      if (0 === r && 0 === a) return 4;
      {
        var _r8 = 4;

        switch (i) {
          case Fs.BASIC:
            _r8 = rl(e, t, n);
            break;

          case Fs.D_STAR_LITE:
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
                var n = Vs.cellToGid(e.cell, u);
                r[n] = t;
              }

              function g(e, t) {
                t > s && (t = s);
                var n = Vs.cellToGid(e.cell, u);
                a[n] = t;
              }

              function m(e) {
                var t = Vs.cellToGid(e.cell, u);
                return r[t];
              }

              function v(e) {
                var t = Vs.cellToGid(e.cell, u);
                return a[t];
              }

              function y(t) {
                var n = Vs.cellToGid(t.cell, e.width),
                    o = [];
                return 0 !== t.cell.i && o.push(i[n - 1]), t.cell.i < e.width - 1 && o.push(i[n + 1]), n - e.width >= 0 && o.push(i[n - e.width]), n + e.width < i.length && o.push(i[n + e.width]), o;
              }

              function E(t) {
                var n = Vs.cellToGid(t.cell, e.width),
                    o = [];
                return 0 !== t.cell.i && o.push(i[n - 1]), t.cell.i < e.width - 1 && o.push(i[n + 1]), n - e.width >= 0 && o.push(i[n - e.width]), n + e.width < i.length && o.push(i[n + e.width]), o;
              }

              function A(t, n) {
                var i = Vs.getDirection(n.cell, t.cell),
                    o = 4 === Vs.getDirection(n.cell, c.cell);
                return Vs.isMovementBlocked(e, t.cell.i, t.cell.j, i, o) ? s : 1;
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

                  return l = _i9, _o8 >= s ? rl(e, t, n) : Vs.getDirection(l.cell, t);
                }

                return 4;
              }();
            }(e, t, n);

        }

        4 !== _r8 && (Zs.addDirectionToPath(t, _r8, 3), void 0 === t.path && (t.path = []), 3 === t.path.length && t.path[0] === t.path[2] && Vs.isDirectionsOpposed(t.path[0], t.path[1]) && (_r8 = 4));

        var _a5 = Hs.now() - o;

        return _a5 > 10 && console.debug("Path found in: " + _a5), _r8;
      }
    }

    function rl(e, t, n) {
      var i = n.i - t.i,
          o = n.j - t.j,
          r = 4;
      return Math.abs(i) > Math.abs(o) ? (i > 0 ? r = 1 : i < 0 && (r = 3), Xs.isMovementTowardsTargetBlocked(e, t.i, t.j, r, n) && (o > 0 ? r = 2 : o < 0 && (r = 0))) : (o > 0 ? r = 2 : o < 0 && (r = 0), Xs.isMovementTowardsTargetBlocked(e, t.i, t.j, r, n) && (i > 0 ? r = 1 : i < 0 && (r = 3))), Xs.isMovementTowardsTargetBlocked(e, t.i, t.j, r, n) && (r = 4), r;
    }

    !function (e) {
      function t(e, t, n, i) {
        var o = Ps.NONE;

        var _iterator27 = _createForOfIteratorHelper(Bs),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _r9 = _step27.value;

            var _a6 = Vs.getTargetGID(e, _r9, t);

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

            var _n19 = Zs.getState(_e31);

            if (void 0 === _n19 || Hs.isEmpty(_n19.block) || _n19.block) {
              var _n20 = Vs.cellToGid(_e31, t.width);

              t.dynamicBlocks[_n20] = Ws.ALL;
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
        hl.load(e + "", Ns.MAP, function (i) {
          if (Hs.isEmpty(i)) console.error("Error while loading map: " + e), n();else try {
            var _e32 = JSON.parse(i);

            n(_e32);
          } catch (o) {
            "SyntaxError" === o.name ? console.error("Error while parsing map: " + e) : "TypeError" === o.name ? console.error("Error while reading map: " + e) : console.error(o), console.error(i), Ks.showError(t.getContext("2d")), n();
          }
        });
      }, e.renderUI = function (e, t, n, i, o, r, a) {
        if ((a || i.showGrid || i.showEditorGrid || i.showFocus || i.showBlocks || i.showOnTops) && (!a || i.showFPS || i.showCellNumbers || i.showFocus) && !Hs.isEmpty(i)) {
          if (!a && i.showBlocks && !Hs.isEmpty(e) && (!Hs.isEmpty(e.blocks) || !Hs.isEmpty(e.dynamicBlocks))) {
            n.save(), n.globalAlpha = .5, n.fillStyle = zs.Color.YELLOW, n.strokeStyle = zs.Color.BLACK, n.lineWidth = 2;

            var _i12 = Hs.isEmpty(e.blocks) ? Ws.NONE : e.blocks[r * e.width + o],
                _a7 = Hs.isEmpty(e.dynamicBlocks) ? Ws.NONE : e.dynamicBlocks[r * e.width + o];

            (_i12 > Ws.NONE || _a7 > Ws.NONE) && (_a7 > Ws.NONE && (n.fillStyle = zs.Color.GREEN), Vs.isBlockDirectionBlocked(_i12 | _a7, Ws.UP) && (n.beginPath(), n.moveTo(o * t.cellW, r * t.cellH), n.lineTo((o + .5) * t.cellW, (r + .2) * t.cellH), n.lineTo((o + 1) * t.cellW, r * t.cellH), n.fill(), n.stroke()), Vs.isBlockDirectionBlocked(_i12 | _a7, Ws.DOWN) && (n.beginPath(), n.moveTo(o * t.cellW, (r + 1) * t.cellH), n.lineTo((o + .5) * t.cellW, (r + .8) * t.cellH), n.lineTo((o + 1) * t.cellW, (r + 1) * t.cellH), n.fill(), n.stroke()), Vs.isBlockDirectionBlocked(_i12 | _a7, Ws.LEFT) && (n.beginPath(), n.moveTo(o * t.cellW, r * t.cellH), n.lineTo((o + .2) * t.cellW, (r + .5) * t.cellH), n.lineTo(o * t.cellW, (r + 1) * t.cellH), n.fill(), n.stroke()), Vs.isBlockDirectionBlocked(_i12 | _a7, Ws.RIGHT) && (n.beginPath(), n.moveTo((o + 1) * t.cellW, r * t.cellH), n.lineTo((o + .8) * t.cellW, (r + .5) * t.cellH), n.lineTo((o + 1) * t.cellW, (r + 1) * t.cellH), n.fill(), n.stroke())), n.restore();
          }

          if (!a && i.showOnTops && !Hs.isEmpty(e) && !Hs.isEmpty(e.tileset.onTop)) {
            var _i13 = Vs.cellToGid({
              i: o,
              j: r
            }, e.width);

            Vs.normalizeZIndex(e.tileset.onTop[_i13]) > 0 && (n.save(), n.globalAlpha = .6, n.beginPath(), n.fillStyle = zs.Color.AQUA, n.arc(Math.floor((o + .5) * t.cellW), Math.floor((r + .5) * t.cellH), 10, 0, zs.DOUBLE_PI), n.closePath(), n.fill(), n.fillStyle = zs.Color.DARKBLUE, n.font = "bold 14px Arial", n.fillText("" + e.tileset.onTop[_i13], (o + .35) * t.cellW, (r + .65) * t.cellH), n.restore());
          }

          !a && i.showGrid && (n.strokeStyle = zs.Color.RED, n.strokeRect(o * t.cellW, r * t.cellH, t.cellW, t.cellH)), !a && i.showEditorGrid && (n.save(), n.globalAlpha = .4, n.strokeStyle = zs.Color.GREY, n.strokeRect(o * t.cellW, r * t.cellH, t.cellW, t.cellH), n.restore()), !a && i.showCellNumbers && (n.fillStyle = zs.Color.RED, n.font = "bold 10px Arial", n.fillText(o + "," + r, o * t.cellW + 1, r * t.cellH + 10));
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

            t.strokeStyle = zs.Color.RED, t.lineWidth = 3;
          } else _i14 = n.selectEventCell.i * e.cellW, _o9 = n.selectEventCell.j * e.cellH, t.strokeStyle = zs.Color.LIME, t.lineWidth = 2;

          t.strokeRect(_i14, _o9, _r10, _a8), t.restore();
        }
      }, e.resizeMap = function (e, t, n) {
        var i = e.width,
            o = t,
            r = e.height,
            a = n;
        if (i === o && r === a || Hs.isEmpty(e)) return;
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
        o instanceof il && (a = o.hero), Qs.initTransientData(s.tileset, l), function (n, i) {
          Hs.isEmpty(n.autotilesets) ? i() : Qs.initTransientDataAutotiles(Object.values(n.autotilesets)).then(function () {
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
            if (e.blocks = [], !Hs.isEmpty(e.layers) && !Hs.isEmpty(e.tileset.blocks)) {
              for (var _t26 = 0; _t26 < e.height * e.width; _t26++) {
                e.blocks[_t26] = 0;
              }

              for (var _t27 = 0; _t27 < e.layers.length; _t27++) {
                var _n23 = e.layers[_t27];
                if (void 0 !== _n23.data) for (var _t28 = 0; _t28 < _n23.data.length; _t28++) {
                  var _o11 = void 0;

                  if (i(_t28, _n23, e)) {
                    var _i18 = _n23.data[_t28];
                    void 0 === e.autotilesets || void 0 === e.autotilesets[_i18] ? console.warn("Autotile: NaN" + _t28 + " in map: " + e.id) : _o11 = e.autotilesets[_i18].blocked ? Ws.ALL : Ws.NONE;
                  } else {
                    var _i19 = _n23.data[_t28];
                    if (null === _i19 || _i19 < 0 || _i19 >= e.tileset.blocks.length) continue;
                    if (void 0 !== e.tileset.onTop && Vs.normalizeZIndex(e.tileset.onTop[_i19]) > 0) continue;
                    _o11 = e.tileset.blocks[_i19];
                  }

                  void 0 === _o11 && (_o11 = Ws.NONE), e.blocks[_t28] = _o11;
                }
              }
            }
          }(s), n(a, s), Hs.isEmpty(s.events)) s.events = [];else {
            s.maxEventId = 0;

            var _iterator30 = _createForOfIteratorHelper(s.events),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var _e39 = _step30.value;
                _e39.id > s.maxEventId && (s.maxEventId = _e39.id), Zs.initTransientData(s, l, _e39);
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
        var r = Vs.getDirectionTarget({
          i: t,
          j: n
        }, i),
            a = !1;
        return void 0 !== o && 4 === Vs.getDirection(r, o) && (a = !0), Vs.isMovementBlocked(e, t, n, i, a);
      }, e.isThisAnAutotileCell = i;
    }(Xs || (Xs = {})), function (e) {
      function t(e, t) {
        var n = e.states[t].condition;
        return n in xs ? xs[n](e) : (console.error('Condition not found: "' + n + '", on event: ' + e.name), !1);
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
          if (!Hs.isEmpty(_e40)) return _e40;
        }

        return zs.MEDIUM_MSPEED;
      }

      function r(e) {
        if (void 0 !== e && void 0 !== e.currentState && void 0 !== e.states) return e.states[e.currentState];
      }

      function a(e, t) {
        var n = t.states[t.currentState].direction;
        void 0 === n && (n = 4);
        var i = Vs.getNextAbsoluteDirection(n, 0),
            o = Xs.isMovementTowardsTargetBlocked(e, t.i, t.j, i) ? 0 : 3,
            r = Xs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
            a = Xs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
            s = o + r + a + (Xs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 1),
            l = 4;

        if (s > 0) {
          var _e41 = Vs.getRandomInteger(1, s);

          _e41 -= o, _e41 <= 0 ? l = i : (_e41 -= r, _e41 <= 0 || (_e41 -= a), l = 4);
        }

        return Vs.getDirectionTarget(t, l);
      }

      e.update = function (e, i, o, r, s) {
        var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        if (Hs.isEmpty(e.movementStartTime) || (e.movementStartTime += l), !Hs.isEmpty(e.states)) {
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

                var _l7 = ol(e, t, _s8, r.pathfinder);

                i = Vs.getDirectionTarget(t, _l7), _o13 = function o(i) {
                  var a = ol(e, t, _s8, r.pathfinder);

                  if (4 !== a) {
                    var _e42 = Vs.getDirectionTarget(t, a);

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

        if (!Hs.isEmpty(r.movementStartTime)) {
          if (0 === l && (l = Hs.now() - r.movementStartTime), void 0 === r.target) return console.error("No target set for movement"), !0;

          var _e43,
              _d = r.target,
              _u = function (e, t, n) {
            var i = 4,
                o = Vs.cellToGid(n, e.width),
                r = Vs.getMapStaticBlock(e, o),
                a = Vs.getMapDynamicBlock(e, o);
            if (Vs.isBlockDirectionBlocked(r, Ws.ALL) && !Vs.isBlockDirectionBlocked(a, Ws.ALL) || o < 0 || o >= e.width * e.height) i = 4;else if (Hs.isEmpty(t.movementDirection) || 4 !== t.movementDirection) {
              try {
                i = ol(e, t, n);
              } catch (t) {
                console.error(t);
              }

              var _r12 = Vs.getDirectionTarget(t, i),
                  _a11 = Vs.cellToGid(_r12, e.width),
                  _s9 = Vs.getMapDynamicBlock(e, _a11);

              Vs.isDirectionEnumBlocked(_s9, Vs.getOpposedDirections(i)) && (i = 4, _a11 === o && void 0 !== t.onTargetReached && t.onTargetReached(n));
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
            c = !0, r.movementDirection = void 0, r.movementStartTime = Hs.now(), l -= Math.floor(_e43 / o(r));

            var _t30 = n.mapCanvasToCell(r.position);

            r.i = _t30.i, r.j = _t30.j, s(_f, _p);

            var _a12 = n.mapCellToCanvas(r.target);

            (!Hs.isEmpty(r.newTarget) || r.position.x === _a12.x && r.position.y === _a12.y) && i(r);
          }
        }

        return !Hs.isEmpty(r.newTarget) && Hs.isEmpty(r.movementStartTime) && (r.target = r.newTarget, r.onTargetReached = r.newOnTargetReached, r.newTarget = void 0, r.newOnTargetReached = void 0, r.movementStartTime = Hs.now(), c = c || e(t, n, r, a, s, l)), c;
      }, e.addDirectionToPath = function (e, t, n) {
        void 0 === e.path && (e.path = []), e.path[e.path.length - 1] !== t && e.path.push(t), !Hs.isEmpty(n) && e.path.length > n && e.path.shift();
      }, e.render = function (e, t, n, i, o) {
        var a,
            s = r(t);
        if (void 0 !== s) if (Hs.isEmpty(s.charaset) ? Hs.isEmpty(s.gid) || console.warn("Not implemented") : a = hl.loadImageFromCache(s.charaset, Ns.CHAR), void 0 !== t.position) {
          if (i || (n.save(), n.strokeStyle = zs.Color.GREEN, n.lineWidth = 2, n.strokeRect(t.position.x, t.position.y, e.cellW, e.cellH)), void 0 !== a) {
            var _r13 = Math.floor(a.width / 4),
                _l8 = Math.floor(a.height / 4),
                _c3 = _r13,
                _d2 = _l8;

            i || (_l8 > _r13 ? (_c3 = Math.floor(_r13 * e.cellH / _l8), _d2 = e.cellH) : (_d2 = Math.floor(_l8 * e.cellW / _r13), _c3 = e.cellW));

            var _u2,
                _f2 = 0;

            if (_u2 = Hs.isEmpty(s.frequencyVal) ? zs.MEDIUM_FREQUENCY : s.frequencyVal, Hs.isEmpty(t.target)) {
              if (1 === s.rotation || 2 === s.rotation) {
                Hs.isEmpty(s.animationStartTime) && (s.animationStartTime = Hs.now());

                var _e44 = Hs.now() - s.animationStartTime;

                _u2 /= 4;

                var _t31 = Math.floor(_e44 * _u2 % 4);

                2 === s.rotation && (3 === _t31 ? _t31 = 1 : 1 === _t31 && (_t31 = 3)), s.direction = _t31;
              } else s.animationStartTime = void 0;
            } else {
              Hs.isEmpty(s.animationStartTime) && (s.animationStartTime = Hs.now());

              var _e45 = Hs.now() - s.animationStartTime;

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

            if (n.save(), Hs.isEmpty(s.opacity) || 100 === s.opacity || (n.globalAlpha = s.opacity / 100), void 0 !== o && o.i === t.i && o.j === t.j) {
              var _t32 = e.mapCellToCanvas(o);

              n.save(), n.beginPath(), n.fillStyle = zs.Color.YELLOW, n.scale(2, 1), n.arc(Math.floor((_t32.x + e.cellW / 2) / 2), _t32.y + e.cellH - 4, 8, 0, zs.DOUBLE_PI), n.closePath(), n.globalAlpha = .4, n.fill(), n.restore(), n.shadowColor = zs.Color.YELLOW, n.shadowBlur = 8;
            }

            n.drawImage(a, _f2, _p2, _r13, _l8, _h, _g, _c3, _d2), n.restore();
          }
        } else console.error("Event position undefined: " + t);
      }, e.isVisible = function (e, t, n, i, o, a, s, l) {
        return e.i === a && e.j === s && !!Ys.isVisible(r(e), l) && e.i >= i && e.i <= o && e.j >= t && e.j <= n;
      }, e.saveMem = function (e, t, n) {
        Hs.isEmpty(e.memory) && (e.memory = {}), e.memory[t] = n;
      }, e.loadMem = function (e, t) {
        if (!Hs.isEmpty(e.memory)) return e.memory[t];
      }, e.deleteMem = function (e, t) {
        Hs.isEmpty(e.memory) || delete e.memory[t];
      }, e.initTransientData = function (t, n, o) {
        if (Ys.initTransientData(n, e.getState(o)), void 0 !== o) return i(o), o.position = {
          x: o.i * n.cellW,
          y: o.j * n.cellH
        }, o;
      }, e.getState = r;
    }(Zs || (Zs = {}));

    var al = /*#__PURE__*/function () {
      function al(e, t, n) {
        _classCallCheck(this, al);

        _defineProperty(this, "event", void 0);

        _defineProperty(this, "hero", void 0);

        _defineProperty(this, "scene", void 0);

        this.event = e, this.hero = t, this.scene = n;
      }

      _createClass(al, [{
        key: "getConfig",
        value: function getConfig() {
          return void 0 !== this.scene.save && void 0 !== this.scene.save.config ? this.scene.save.config : Gs.getConfig();
        }
      }, {
        key: "showSimpleDialog",
        value: function showSimpleDialog(e, t) {
          var n = this.getConfig();
          return qs.showSimpleDialog(this.event, this.scene, this.hero, e, n, t), !0;
        }
      }, {
        key: "showComplexDialog",
        value: function showComplexDialog(e, t) {
          var n = this.getConfig();
          return qs.showComplexDialog(this.event, this.scene, this.hero, e, n, this.scene.dialogScriptLauncher, t), !0;
        }
      }, {
        key: "moveToTarget",
        value: function moveToTarget(e, t, n) {
          Zs.startMovement(e, t.i, t.j, n);
        }
      }, {
        key: "stepToTarget",
        value: function stepToTarget(e, t, n) {
          var i = Vs.getDirection(t, this.event);
          this.stepToDirection(e, i, n);
        }
      }, {
        key: "stepToDirection",
        value: function stepToDirection(e, t, n) {
          var i = Vs.moveToDirection(e, t);
          this.moveToTarget(e, i, n);
        }
      }, {
        key: "stepFromTarget",
        value: function stepFromTarget(e, t, n) {
          var i = Vs.getDirection(t, e);
          i = Vs.getOpposedDirections(i), this.stepToDirection(e, i, n);
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
          Zs.saveMem(this.event, e, t);
        }
      }, {
        key: "loadMem",
        value: function loadMem(e) {
          return Zs.loadMem(this.event, e);
        }
      }, {
        key: "incrementStateVar",
        value: function incrementStateVar() {
          var e = this.loadMem(Is),
              t = 0;
          return void 0 !== e && (t = Number.parseInt(e), Number.isNaN(t) && (t = 0)), t++, this.saveMem(Is, t + ""), t;
        }
      }, {
        key: "setStateVar",
        value: function setStateVar(e) {
          this.saveMem(Is, e + "");
        }
      }, {
        key: "goToMap",
        value: function goToMap(e, t) {
          var n = this.scene;
          Js.loadMapSave(n, e, t, function () {
            n.moveFocusToTarget(t), Zs.stopMovement(n.hero);
          });
        }
      }, {
        key: "changeSkin",
        value: function changeSkin(e) {
          this.scene.save.config.skin = e;
        }
      }]);

      return al;
    }();

    _defineProperty(al, "tooltip", "no description provided");

    var sl = "msg",
        ll = "dlg";

    var cl = /*#__PURE__*/function (_al) {
      _inherits(cl, _al);

      var _super2 = _createSuper(cl);

      function cl(e, t, n) {
        _classCallCheck(this, cl);

        return _super2.call(this, e, t, n);
      }

      _createClass(cl, [{
        key: "speak",
        value: function speak() {
          var e = this.loadMem(sl + (this.event.currentState + 1));
          Hs.isEmpty(e) && (e = this.loadMem(sl)), this.showSimpleDialog(e, Ds);
        }
      }, {
        key: "dialog",
        value: function dialog() {
          var e = this.event.states[this.event.currentState];
          void 0 !== e.dialog && this.showComplexDialog(e.dialog, Ds);
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

      return cl;
    }(al);

    _defineProperty(cl, "tooltip", "Basic script with simple actions");

    var dl = /*#__PURE__*/function (_al2) {
      _inherits(dl, _al2);

      var _super3 = _createSuper(dl);

      function dl() {
        _classCallCheck(this, dl);

        return _super3.apply(this, arguments);
      }

      _createClass(dl, [{
        key: "faceTheHero",
        value: function faceTheHero() {
          var e = this.getEventById(dl.eventId);
          void 0 !== e ? e.states[e.currentState].direction = Vs.getDirection(this.hero, e) : console.error("Cannot find Ann! id:" + dl.eventId);
        }
      }]);

      return dl;
    }(al);

    _defineProperty(dl, "eventId", 2);

    _defineProperty(dl, "tooltip", "Script for Ann, in the farm map");

    var ul = /*#__PURE__*/function (_al3) {
      _inherits(ul, _al3);

      var _super4 = _createSuper(ul);

      function ul() {
        _classCallCheck(this, ul);

        return _super4.apply(this, arguments);
      }

      _createClass(ul, [{
        key: "triggerQuest",
        value: function triggerQuest() {
          this.setStateVar(1);
        }
      }]);

      return ul;
    }(al);

    _defineProperty(ul, "tooltip", "Script for Asgan, in the woods map");

    var fl = /*#__PURE__*/function (_al4) {
      _inherits(fl, _al4);

      var _super5 = _createSuper(fl);

      function fl() {
        _classCallCheck(this, fl);

        return _super5.apply(this, arguments);
      }

      _createClass(fl, [{
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

      return fl;
    }(al);

    _defineProperty(fl, "tooltip", "Provide transportation from one map to another");

    var pl = /*#__PURE__*/function (_al5) {
      _inherits(pl, _al5);

      var _super6 = _createSuper(pl);

      function pl() {
        _classCallCheck(this, pl);

        return _super6.apply(this, arguments);
      }

      _createClass(pl, [{
        key: "testAction",
        value: function testAction() {
          this.showSimpleDialog("2", Ds);
        }
      }, {
        key: "giantTest",
        value: function giantTest() {
          this.showSimpleDialog("4", Ds);
          var e = this;
          this.wait(1e3).then(function () {
            e.stepFromTarget(e.event, e.hero);
          }), this.incrementStateVar();
        }
      }, {
        key: "giantTest2",
        value: function giantTest2() {
          this.showSimpleDialog("5", Ds);
          var e = this;
          this.wait(1e3).then(function () {
            e.stepFromTarget(e.event, e.hero);
          }), this.incrementStateVar();
        }
      }, {
        key: "giantTest3",
        value: function giantTest3() {
          this.showSimpleDialog("6", Ds);
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

      return pl;
    }(al);

    _defineProperty(pl, "tooltip", "Script for tests");

    var hl;

    function gl(e) {
      var t = Gs.DEFAULT_ID;

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

    function ml(e) {
      if (void 0 !== e.script) {
        ys.set(e, "actions", []);

        var _iterator33 = _createForOfIteratorHelper(hl.listScriptActions(e.script)),
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

    !function (t) {
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
        p(zs.RequestType.GET, void 0, e, t, n);
      }

      function f(e, t, n) {
        p(zs.RequestType.POST, t, e, n);
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
          void 0 !== o && r.setRequestHeader("lang", o), Hs.isEmpty(t) || e !== zs.RequestType.POST ? r.send() : r.send(t);
        } catch (e) {
          "NetworkError" === e.name ? console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files") : (console.error(e), console.trace()), i();
        }
      }

      function h(e, t, o, r) {
        Hs.isEmpty(e) && console.error("Trying to load empty file!");

        var l = function (e, t) {
          var o;

          switch (t) {
            case Ns.CHAR:
            case Ns.FACE:
            case Ns.SKIN:
            case Ns.PICTURE:
            case Ns.TILE:
            case Ns.AUTOTILE:
              o = i;
              break;

            case Ns.MAP:
            case Ns.SAVE:
            case Ns.STRING:
            case Ns.DIALOG:
            case Ns.GENERIC_MESSAGE:
            case Ns.TILESET:
            case Ns.AUTOTILESET:
              o = n;
              break;

            default:
              console.error("Unexpected resource type"), console.trace();
          }

          return o + t + "/" + e;
        }(e, t);

        if (void 0 === l) return console.error("Error while loading file: " + e + "/" + t), void o();

        switch (t) {
          case Ns.AUTOTILE:
          case Ns.CHAR:
          case Ns.FACE:
          case Ns.SKIN:
          case Ns.TILE:
          case Ns.PICTURE:
            var _n26 = s.get(t + a + e);

            void 0 !== _n26 ? o(_n26) : (_n26 = new Image(), _n26.onload = function () {
              s.set(t + a + e, _n26), o(_n26);
            }, _n26.src = l);
            break;

          case Ns.AUTOTILESET:
          case Ns.MAP:
          case Ns.SAVE:
          case Ns.STRING:
          case Ns.DIALOG:
          case Ns.GENERIC_MESSAGE:
          case Ns.TILESET:
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
        if (c.has(t)) e(c.get(t));else {
          var _i20 = function _i20(n) {
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
          };

          u(n + Ns.CONFIGURATION + "/" + t + ".properties", _i20);
        }
      }, t.sendGETRequest = u, t.sendPOSTRequest = f, t.load = h, t.loadImageFromCache = g, t.loadDefaultImage = function (e) {
        return g("404.png", e);
      }, t.save = function (e, t, n, i) {
        var o = function (e, t) {
          return r + t + "/" + e;
        }(e, n);

        f(o, t, function (e) {
          void 0 !== e ? n === Ns.STRING || n === Ns.DIALOG || n === Ns.GENERIC_MESSAGE ? i(e, !0) : i(void 0, !0) : (console.error("Empty response for: " + o), i(void 0, !1));
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
            return e[t].prototype instanceof al;
          } catch (e) {
            return !1;
          }
        }),
            n = new Map();

        var _iterator34 = _createForOfIteratorHelper(t),
            _step34;

        try {
          for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
            var _i21 = _step34.value;
            n.set(_i21, e[_i21].tooltip);
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
            return "constructor" !== e && !Hs.isEmpty(e) && "function" == typeof n[e];
          } catch (e) {
            return !1;
          }
        });
        return d.set(t, i), i;
      }, t.listEventStateConditions = function () {
        return Object.keys(xs);
      };
    }(hl || (hl = {}));
    var vl = ys.extend({
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

        var _iterator35 = _createForOfIteratorHelper(hl.listEventStateConditions()),
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

        var _iterator36 = _createForOfIteratorHelper(hl.listScriptClasses()),
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
              ml(_e47);
            }
          } catch (err) {
            _iterator37.e(err);
          } finally {
            _iterator37.f();
          }
        }

        var e = this;
        hl.listResources(Ns.FACE, function (t) {
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

          void 0 === this.node.edgeIds && ys.set(this.node, "edgeIds", []), void 0 === this.node.edges && ys.set(this.node, "edges", []);
          var e = gl(this.edgeIds);
          this.node.edgeIds.push(e), this.node.edges.push(Gs.getDialogEdge(e)), this.edgeIds.push(e), this.$nextTick(function () {
            void 0 !== _this2.$refs.dialogEdgeMessage && void 0 === _this2.node.edges[_this2.node.edges.length - 1].message && _this2.$refs.dialogEdgeMessage[_this2.node.edges.length - 1].focus();
          });
        },
        deleteEdge: function deleteEdge(e) {
          this.node.edgeIds.splice(this.node.edgeIds.indexOf(e.id), 1), this.node.edges.splice(this.node.edges.indexOf(e), 1);
        },
        addNode: function addNode(e) {
          var t = gl(this.nodeIds);
          ys.set(e, "nodeId", t), ys.set(e, "node", Gs.getDialogNode(t)), this.nodeIds.push(t), Hl.loadDialogEditor(t);
        },
        deleteNode: function deleteNode(e) {
          this.disconnectedNodes.push(e.node), ys.set(e, "nodeId", void 0), ys.set(e, "node", void 0);
        },
        onEdgeChange: function onEdgeChange(e) {
          var t = parseInt(e.target.selectedOptions.item(0).value);
          if (void 0 === this.node.edgeIds) ys.set(this.node, "edgeIds", []);else if (this.node.edgeIds.includes(t)) return;
          void 0 === this.node.edges && ys.set(this.node, "edges", []);
          var n = qs.search(this.dialog, t, !0);
          void 0 !== n && (this.node.edgeIds.push(t), this.node.edges.push(n));
        },
        onNodeChange: function onNodeChange(e, t) {
          var n = !0,
              i = parseInt(e.target.selectedOptions.item(0).value),
              o = qs.search(this.dialog, i, !1);

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

          void 0 !== o && (ys.set(t, "nodeReferenced", n), ys.set(t, "nodeId", i), ys.set(t, "node", o));
        },
        onScriptChange: function onScriptChange(e, t) {
          ml(t);
        },
        onFaceChange: function onFaceChange(e, t) {
          void 0 !== t.name || Hs.isEmpty(t.face) || (t.name = t.face.replace(".png", "").replace(".jpg", ""));
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

    var yl = _s(vl, Cs, [], !1, null, "73ccf623", null);

    yl.options.__file = "src/client/components/DialogEditor.vue";
    var El = yl.exports;

    var Al = function Al() {
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
          src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=1885551381575204"
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
          value: !e.loginStatus && e.loginEnabled,
          expression: "!loginStatus && loginEnabled"
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

    Al._withStripped = !0;
    var bl = ys.extend({
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
          loginEnabled: !1,
          loginStatus: !1,
          loginService: void 0,
          fbToken: void 0,
          flagLoggingOut: !1
        };
      },
      created: function created() {
        var _this3 = this;

        hl.sendGETRequest("/health", function (e) {
          if (void 0 === e) console.error("No response from health endpoint");else if (JSON.parse(e).database) {
            _this3.loginEnabled = !0;

            var _e51 = document.createElement("meta");

            _e51.name = "google-signin-scope", _e51.content = "profile email", document.head.appendChild(_e51), _e51 = document.createElement("meta"), _e51.name = "google-signin-client_id", _e51.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com", document.head.appendChild(_e51);
            var _t35 = _this3;
            window.fbAsyncInit = function () {
              FB.init({
                appId: "1885551381575204",
                autoLogAppEvents: !1,
                cookie: !0,
                xfbml: !1,
                version: "v12.0"
              }), FB.Event.subscribe("auth.statusChange", function (e) {
                _t35.fbLoginStatusChangeCallback(e);
              }), FB.getLoginStatus(function (e) {
                _t35.fbLoginStatusChangeCallback(e);
              });
            }, window.gAsyncInit = function () {
              gapi.load("auth2", function () {
                gapi.auth2.getAuthInstance().isSignedIn.get() && (ys.set(_t35, "loginStatus", !0), ys.set(_t35, "loginService", "google"));
              });
            }, window.gLoginCallback = _this3.gLoginCallback;
          } else console.warn("Database unavailable, will not enable Social Login");
        });
      },
      methods: {
        logoutCallback: function logoutCallback() {
          ys.set(this, "loginStatus", !1), ys.set(this, "loginService", void 0), ys.set(this, "flagLoggingOut", !1);
        },
        logout: function logout() {
          if (this.loginStatus) {
            switch (this.loginService) {
              case "facebook":
                if (void 0 !== this.fbToken) {
                  ys.set(this, "flagLoggingOut", !0);

                  var _e52 = this;

                  FB.api("/me/permissions", "delete", {
                    access_token: _e52.fbToken
                  }, function (t) {
                    !0 !== t.success && console.error("Facebook permission revoking failed: ", t), FB.logout(function (t) {
                      _e52.logoutCallback();
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

            hl.sendGETRequest("logout", function (e) {});
          } else console.error("Cannot logout, user is not currently logged in");
        },
        fbLoginStatusChangeCallback: function fbLoginStatusChangeCallback(e) {
          if ("connected" === e.status) {
            this.fbToken = e.authResponse.accessToken;
            var _t36 = {
              service: "facebook",
              token: e.authResponse.accessToken,
              userId: e.authResponse.userID
            };
            this.doLogin(_t36);
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
          hl.sendPOSTRequest("/auth", JSON.stringify(e), function (n) {
            if (!Hs.isEmpty(n)) try {
              if (JSON.parse(n).result) return ys.set(t, "loginStatus", !0), void ys.set(t, "loginService", e.service);
            } catch (e) {
              console.error(e);
            }
            ys.set(t, "loginStatus", !1), ys.set(t, "loginService", void 0), console.warn("Login with " + e.service + " failed");
          });
        }
      }
    });
    n(564);

    var _l = _s(bl, Al, [], !1, null, "08ab550b", null);

    _l.options.__file = "src/client/components/Login.vue";
    var Sl = _l.exports;

    var wl = function wl() {
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

    wl._withStripped = !0;

    var Cl = function Cl() {
      var e = this;
      e.$createElement;
      return e._self._c, e._m(0);
    };

    Cl._withStripped = !0;

    var Il = _s(ys.extend({
      name: "event-state-editor",
      props: {}
    }), Cl, [function () {
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

    Il.options.__file = "src/client/components/EventStateEditor.vue";
    var kl = Il.exports;

    var Tl = _s(ys.extend({
      components: {
        EventStateEditor: kl
      },
      name: "event-editor",
      props: {}
    }), wl, [function () {
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

    Tl.options.__file = "src/client/components/EventEditor.vue";
    var Nl = Tl.exports;

    var xl,
        Ml,
        Dl,
        Ol = function Ol() {
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

    Ol._withStripped = !0;

    var Ll = /*#__PURE__*/function (_nl2) {
      _inherits(Ll, _nl2);

      var _super7 = _createSuper(Ll);

      function Ll(e) {
        var _temp6, _this4;

        _classCallCheck(this, Ll);

        (_temp6 = _this4 = _super7.call(this, e), _defineProperty(_assertThisInitialized(_this4), "newDrawArea", void 0), _defineProperty(_assertThisInitialized(_this4), "oldDrawArea", void 0), _defineProperty(_assertThisInitialized(_this4), "requestedNewFrame", void 0), _temp6), _this4.renderingConfiguration.showEditorGrid = !0, _this4.renderingConfiguration.enableSelection = !0, _this4.renderingConfiguration.enableAntialiasing = !1, _this4.requestedNewFrame = !0;
        return _this4;
      }

      _createClass(Ll, [{
        key: "mainGameLoop_pre",
        value: function mainGameLoop_pre() {
          if (!_get(_getPrototypeOf(Ll.prototype), "mainGameLoop_pre", this).call(this)) return !1;
          if (void 0 === this.pointer && !this.requestedNewFrame) return !1;
          var e = void 0 === this.oldDrawArea || this.requestedNewFrame;
          return this.requestedNewFrame && (this.requestedNewFrame = !1), this.newDrawArea = this.getRedrawArea(e), this.redrawArea = Vs.mergeRectangles(this.oldDrawArea, this.newDrawArea), this.grid.clear(this.context, this.redrawArea), !0;
        }
      }, {
        key: "mainGameLoop_post",
        value: function mainGameLoop_post() {
          _get(_getPrototypeOf(Ll.prototype), "mainGameLoop_post", this).call(this), this.oldDrawArea = this.newDrawArea;
        }
      }, {
        key: "render",
        value: function render(e, t) {
          _get(_getPrototypeOf(Ll.prototype), "render", this).call(this, e, t, !1);
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
          void 0 !== this.pointer && (this.context.save(), this.context.globalAlpha = .4, this.context.fillStyle = zs.Color.YELLOW, this.context.fillRect(this.pointer.i * this.grid.cellW, this.pointer.j * this.grid.cellH, this.grid.cellW, this.grid.cellH), this.context.restore());
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
              var _t37 = n;
              n = e, e = _t37;
            }

            if (i > t) {
              var _e53 = i;
              i = t, t = _e53;
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
          e.clearRect(o.i * this.grid.cellW + r, o.j * this.grid.cellH + a, s.w, s.h), _get(_getPrototypeOf(Ll.prototype), "drawBottleneck", this).call(this, e, t, n, i, o, r, a, s);
        }
      }, {
        key: "drawAngle",
        value: function drawAngle(e, t, n, i, o, r, a, s, l) {
          e.clearRect(a.i * this.grid.cellW + s, a.j * this.grid.cellH + l, o, r), _get(_getPrototypeOf(Ll.prototype), "drawAngle", this).call(this, e, t, n, i, o, r, a, s, l);
        }
      }]);

      return Ll;
    }(nl);

    var $l = /*#__PURE__*/function (_Ll) {
      _inherits($l, _Ll);

      var _super8 = _createSuper($l);

      function $l() {
        _classCallCheck(this, $l);

        return _super8.apply(this, arguments);
      }

      _createClass($l, [{
        key: "updateSize",
        value: function updateSize(e, t) {
          this.map.tileset.imageWidth = e, this.map.tileset.imageHeight = t, this.map.width = Math.floor(e / this.grid.cellW), this.map.height = Math.floor(t / this.grid.cellH), this.grid.updateSize(this.map.width, this.map.height), this.requestedNewFrame = !0;
        }
      }, {
        key: "getRedrawArea",
        value: function getRedrawArea(e) {
          var t = this.getSelectionArea();
          return _get(_getPrototypeOf($l.prototype), "getRedrawArea", this).call(this, e, t);
        }
      }, {
        key: "select",
        value: function select(e, t) {
          _get(_getPrototypeOf($l.prototype), "select", this).call(this, e, t), this.requestedNewFrame = !0;
        }
      }]);

      return $l;
    }(Ll);

    var Rl = /*#__PURE__*/function (_$l) {
      _inherits(Rl, _$l);

      var _super9 = _createSuper(Rl);

      function Rl(e, t) {
        var _temp7, _this5;

        _classCallCheck(this, Rl);

        (_temp7 = _this5 = _super9.call(this, e), _defineProperty(_assertThisInitialized(_this5), "mapper", void 0), _temp7), _this5.map = Gs.getEmptyMap(), t(_assertThisInitialized(_this5));
        return _this5;
      }

      _createClass(Rl, [{
        key: "setMapper",
        value: function setMapper(e) {
          this.mapper = e;
        }
      }, {
        key: "select",
        value: function select(e, t) {
          Hs.isEmpty(this.mapper) || this.mapper.cleanSelection(), _get(_getPrototypeOf(Rl.prototype), "select", this).call(this, e, t);
        }
      }]);

      return Rl;
    }($l);

    !function (e) {
      e[e.game = 0] = "game", e[e.mapper = 1] = "mapper", e[e.tilePicker = 2] = "tilePicker";
    }(xl || (xl = {}));

    var Wl = /*#__PURE__*/function (_ref) {
      _inherits(Wl, _ref);

      var _super10 = _createSuper(Wl);

      function Wl(e, t, n, i) {
        var _temp8, _this6;

        _classCallCheck(this, Wl);

        (_temp8 = _this6 = _super10.call(this, e, t, n), _defineProperty(_assertThisInitialized(_this6), "rowsList", void 0), _defineProperty(_assertThisInitialized(_this6), "columnsList", void 0), _defineProperty(_assertThisInitialized(_this6), "overriddenProps", void 0), _temp8), _this6.overriddenProps = void 0 !== i ? i : new Map();
        return _this6;
      }

      _createClass(Wl, [{
        key: "deferredInit",
        value: function deferredInit(e) {
          switch (Hs.isEmpty(this.overriddenProps) || (e = Hs.mergeMaps(this.overriddenProps, e)), _get(_getPrototypeOf(Wl.prototype), "deferredInit", this).call(this, e), this.gridType) {
            case xl.mapper:
              var _e54 = Us.ui.mapper.scales.length;
              this.rowsList = new Array(_e54), this.columnsList = new Array(_e54);

              var _t38 = _e54 - 1;

              for (var _t39 = 0; _t39 < _e54; _t39++) {
                this.rowsList[_t39] = Math.floor(this.rows / Us.ui.mapper.scales[_t39]), this.columnsList[_t39] = Math.floor(this.columns / Us.ui.mapper.scales[_t39]);
              }

              this.selectScale(_t38);
              break;

            case xl.tilePicker:
              this.scaleX = 1, this.scaleY = 1;
              break;

            default:
              console.error("Unexpected gridType case: " + this.gridType);
          }
        }
      }, {
        key: "selectScale",
        value: function selectScale(e) {
          this.scaleX = Us.ui.mapper.scales[e], this.scaleY = Us.ui.mapper.scales[e], this.refreshCanvasSize();
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

      return Wl;
    }( /*#__PURE__*/function () {
      function _class6(e, t, n) {
        _classCallCheck(this, _class6);

        _defineProperty(this, "canvas", void 0);

        _defineProperty(this, "baseH", void 0);

        _defineProperty(this, "baseW", void 0);

        _defineProperty(this, "rows", void 0);

        _defineProperty(this, "columns", void 0);

        _defineProperty(this, "cellH", void 0);

        _defineProperty(this, "cellW", void 0);

        _defineProperty(this, "halfRows", void 0);

        _defineProperty(this, "halfColumns", void 0);

        _defineProperty(this, "currentTranslation", void 0);

        _defineProperty(this, "gridType", void 0);

        _defineProperty(this, "scaleX", void 0);

        _defineProperty(this, "scaleY", void 0);

        var i;
        this.canvas = e, this.currentTranslation = {
          x: 0,
          y: 0
        }, this.gridType = n, i = this, hl.loadProperties(function (e) {
          i.deferredInit(e), i.updateSizingDerivates(), i.refreshCanvasSize(), t(i);
        });
      }

      _createClass(_class6, [{
        key: "deferredInit",
        value: function deferredInit(e) {
          this.cellH = e.get("cellHeight"), this.cellW = e.get("cellWidth"), this.rows = e.get(xl[this.gridType] + "Rows"), this.columns = e.get(xl[this.gridType] + "Columns");
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
            var _e55 = (n - this.columns) * this.cellW;

            o > _e55 && (o = _e55);
          }
          var r = t - this.halfRows * this.cellH;
          if (r < 0) r = 0;else {
            var _e56 = (i - this.rows) * this.cellH;

            r > _e56 && (r = _e56);
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

      return _class6;
    }());

    !function (e) {
      var t;
      e.start = function (e, n) {
        void 0 !== t ? n(t) : new Wl(e, function (i) {
          new Rl(i, function (o) {
            t = o, function (e, n) {
              var i = new Map();
              Ls.init(e, n, i, Ds, Ds, function (e, n, i, o, r) {
                Hl.onCancelAutotileSelection(), (Hs.isEmpty(r) || r === Ls.MouseButtons.LEFT) && t.select(e, n);
              }, function (e, n, i) {
                (Hs.isEmpty(i) || i === Ls.MouseButtons.LEFT) && t.selectEnd(e, n);
              }, function (e, n, i) {
                t.requestedNewFrame = !0, (Hs.isEmpty(i) || i === Ls.MouseButtons.LEFT) && t.selectEnd(e, n), t.updatePointer(e, n);
              }, function (e, n) {
                t.updatePointer(e, n);
              }, Ds, Ds, Ds, function (e, n) {
                t.cleanSelection();
              }, Ds, Ds);
            }(e, i), t.start(e), n(t);
          });
        }, xl.tilePicker);
      }, e.loadTile = function (t, n) {
        var i = document.getElementById("canvasTile"),
            o = i.getContext("2d"),
            r = document.getElementById("canvasSelector");
        o.clearRect(0, 0, i.width, i.height), hl.load(t, Ns.TILE, function (t) {
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
        hl.sendPOSTRequest("/edit/" + Ns.TREE + "/maps", JSON.stringify(t), function (t) {
          e(void 0 !== t, t);
        });
      }, e.setMapper = function (e) {
        t.setMapper(e);
      }, e.cancelSelection = function () {
        t.cleanSelection(), t.pointer = void 0;
      };
    }(Ml || (Ml = {}));

    var Pl = /*#__PURE__*/function (_Ll2) {
      _inherits(Pl, _Ll2);

      var _super11 = _createSuper(Pl);

      function Pl(e, t) {
        var _temp9, _this7;

        _classCallCheck(this, Pl);

        (_temp9 = _this7 = _super11.call(this, e), _defineProperty(_assertThisInitialized(_this7), "activeLayer", void 0), _defineProperty(_assertThisInitialized(_this7), "editMode", void 0), _defineProperty(_assertThisInitialized(_this7), "tilePicker", void 0), _defineProperty(_assertThisInitialized(_this7), "autotileSelected", void 0), _temp9), _this7.activeLayer = zs.MapLayer.MID, document.getElementById(Hl.BUTTON_ID_LAYER + _this7.activeLayer).disabled = !0, t(_assertThisInitialized(_this7));
        return _this7;
      }

      _createClass(Pl, [{
        key: "renderPointer",
        value: function renderPointer() {
          if (void 0 !== this.pointer) {
            var _e57 = this.getSelectionArea();

            void 0 === _e57 ? _get(_getPrototypeOf(Pl.prototype), "renderPointer", this).call(this) : (this.context.save(), this.context.globalAlpha = .4, this.context.fillStyle = zs.Color.GREY, this.context.fillRect(this.pointer.i * this.grid.cellW, this.pointer.j * this.grid.cellH, (_e57.w + 1) * this.grid.cellW, (_e57.h + 1) * this.grid.cellH), this.context.restore());
          }
        }
      }, {
        key: "mainGameLoop_pre",
        value: function mainGameLoop_pre() {
          return !!_get(_getPrototypeOf(Pl.prototype), "mainGameLoop_pre", this).call(this);
        }
      }, {
        key: "getRedrawArea",
        value: function getRedrawArea(e) {
          var t;
          return void 0 !== this.tilePicker && (t = this.tilePicker.getSelectionArea()), _get(_getPrototypeOf(Pl.prototype), "getRedrawArea", this).call(this, e, t);
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
          _get(_getPrototypeOf(Pl.prototype), "select", this).call(this, e, t);
        }
      }, {
        key: "apply",
        value: function apply(e, t) {
          var n = !1,
              i = this.tilePicker.getSelectionArea(),
              o = e + t * this.map.width,
              r = this.map.layers[this.activeLayer];

          switch (Hs.isEmpty(r.data) && (r.data = []), this.editMode) {
            case zs.EditMode.APPLY:
              var _a13 = !1,
                  _s10 = {
                w: this.map.width,
                h: this.map.height
              };

              if (void 0 === i) {
                if (void 0 === this.autotileSelected) return !1;
                {
                  void 0 === this.map.autotilesets && (this.map.autotilesets = {});

                  var _e58,
                      _t40 = this.map.tileset.maxGID;

                  for (var _i22 = 0, _Object$entries = Object.entries(this.map.autotilesets); _i22 < _Object$entries.length; _i22++) {
                    var _n30 = _Object$entries[_i22];

                    var _i23 = parseInt(_n30[0]);

                    if (_n30[1].image === this.autotileSelected) {
                      _e58 = _i23;
                      break;
                    }

                    _i23 > _t40 && (_t40 = _i23);
                  }

                  if (void 0 === _e58) {
                    _e58 = _t40 + 1;

                    var _n31 = Gs.getAutoTileset();

                    _n31.image = this.autotileSelected, this.map.autotilesets[_e58 + ""] = _n31, Qs.initTransientDataAutotiles([_n31]);
                  }

                  r.data[o] !== _e58 && (n = !0, _a13 = !0, r.data[o] = _e58, void 0 === r.autotileData && (r.autotileData = []), r.autotileData[o] = Xs.getAutotileProximityValue(o, _s10, _e58, r));
                }
              } else {
                var _t41 = Math.floor(this.map.tileset.imageWidth / this.grid.cellW),
                    _s11 = i.x + i.y * _t41;

                for (var _l9 = 0; _l9 <= i.h; _l9++) {
                  for (var _c4 = 0; _c4 <= i.w; _c4++) {
                    if (e + _c4 < this.map.width) {
                      var _e59 = _c4 + _l9 * _t41,
                          _i24 = _c4 + _l9 * this.map.width;

                      r.data[o + _i24] !== _s11 + _e59 && (n = !0, Xs.isThisAnAutotileCell(o + _i24, r, this.map) && (_a13 = !0), r.data[o + _i24] = _s11 + _e59);
                    }
                  }
                }
              }

              if (_a13) {
                var _iterator41 = _createForOfIteratorHelper(Bs),
                    _step41;

                try {
                  for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                    var _e60 = _step41.value;

                    var _t42 = Vs.getTargetGID(o, _e60, _s10);

                    Xs.isThisAnAutotileCell(_t42, r, this.map) && (void 0 === r.autotileData && (r.autotileData = []), r.autotileData[_t42] = Xs.getAutotileProximityValue(_t42, _s10, r.data[_t42], r));
                  }
                } catch (err) {
                  _iterator41.e(err);
                } finally {
                  _iterator41.f();
                }
              }

              break;

            case zs.EditMode.ERASE:
              void 0 === i && (i = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
              });

              for (var _t43 = 0; _t43 <= i.h; _t43++) {
                for (var _a14 = 0; _a14 <= i.w; _a14++) {
                  if (e + _a14 < this.map.width) {
                    var _e61 = _a14 + _t43 * this.map.width;

                    void 0 !== r.data[o + _e61] && (n = !0, r.data[o + _e61] = null);
                  }
                }
              }

              break;

            case zs.EditMode.EVENTS:
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
          if (!Hl.confirmCloseEventDetails()) return !1;

          if (!Hs.isEmpty(this.map.events)) {
            var _iterator42 = _createForOfIteratorHelper(this.map.events),
                _step42;

            try {
              for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                var _i25 = _step42.value;

                if (_i25.i === e && _i25.j === t) {
                  n = _i25;
                  break;
                }
              }
            } catch (err) {
              _iterator42.e(err);
            } finally {
              _iterator42.f();
            }
          }

          return void 0 === n && (n = Gs.getEvent(), n.i = e, n.j = t), Hl.loadEvent(n, !1), !0;
        }
      }, {
        key: "getSelectionArea",
        value: function getSelectionArea() {
          return Hs.isEmpty(this.tilePicker) ? void 0 : this.tilePicker.getSelectionArea();
        }
      }, {
        key: "renderDynamicElements",
        value: function renderDynamicElements(e, t, n, i, o, r, a) {
          if (!Hs.isEmpty(this.map.events)) {
            var _iterator43 = _createForOfIteratorHelper(this.map.events),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var _e62 = _step43.value;

                try {
                  Zs.render(this.grid, _e62, this.context, !1);
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
          e > this.activeLayer ? this.context.globalAlpha = Pl.UPPER_LEVEL_OPACITY : e < this.activeLayer && (this.context.globalAlpha = Pl.LOWER_LEVEL_OPACITY);
        }
      }, {
        key: "removeLayerCustomizations",
        value: function removeLayerCustomizations(e) {
          this.context.globalAlpha = 1;
        }
      }, {
        key: "resizeMap",
        value: function resizeMap(e, t) {
          Xs.resizeMap(this.map, e, t), this.grid.updateSize(e, t), Pl.onMapSizeChange(this);
        }
      }, {
        key: "shiftMap",
        value: function shiftMap(e, t) {
          return Xs.shiftMap(this.map, e, t), this.grid.updateSize(this.map.width, this.map.height), Pl.onMapSizeChange(this), {
            w: this.map.width,
            h: this.map.height
          };
        }
      }, {
        key: "changeMap",
        value: function changeMap(e, t) {
          if (this.editMode === zs.EditMode.EVENTS && !Hl.confirmCloseEventDetails()) return !1;
          var n = this;
          return _get(_getPrototypeOf(Pl.prototype), "changeMap", this).call(this, e, function (i) {
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

      return Pl;
    }(Ll);

    _defineProperty(Pl, "LOWER_LEVEL_OPACITY", .8);

    _defineProperty(Pl, "UPPER_LEVEL_OPACITY", .4);

    !function (e) {
      function t(e, t, i, o) {
        Xs.loadMap(i, t, function (t) {
          if (void 0 === t) return console.error("Cannot init mapper, cannot load map: " + i), void o(e);
          e.changeMap(t, function () {
            n(zs.EditMode.APPLY), o(e);
          });
        });
      }

      function n(t) {
        e.mapper.setEditMode(t);
        var n = t === zs.EditMode.EVENTS;
        n ? e.mapper.apply(0, 0) : (Hl.finishEventEditing(), e.mapper.setSelectedEventCell(void 0)), document.getElementById(Hl.BUTTON_ID_MODE + "0").disabled = !1, document.getElementById(Hl.BUTTON_ID_MODE + "1").disabled = !1, document.getElementById(Hl.BUTTON_ID_MODE + "2").disabled = !1, document.getElementById(Hl.BUTTON_ID_MODE + t).disabled = !0, document.getElementById("layersPanel").hidden = n, document.getElementById("tilePanel").hidden = n, document.getElementById("autotilePickerVue").hidden = n, document.getElementById("eventPanel").hidden = !n, n || (document.getElementById("dialogPanel").style.display = "none");
      }

      e.start = function (n, i, o) {
        Hs.isEmpty(e.mapper) ? new Wl(n, function (r) {
          new Pl(r, function (a) {
            e.mapper = a, function (e, t, n) {
              var i = new Map();
              i[Ls.Keys.F2] = function (e) {
                t.toggleEditorGrid(), e.preventDefault();
              }, i[Ls.Keys.F3] = function (e) {
                t.toggleCellNumbering(), e.preventDefault();
              }, i[Ls.Keys.F4] = function (e) {
                t.toggleFocus(), e.preventDefault();
              }, Ls.init(e, n, i, Ds, Ds, function (e, n, i, o, r) {
                r === Ls.MouseButtons.LEFT ? t.apply(e, n) && Hl.changeEditState(!0) : t.select(e, n);
              }, function (e, n, i) {
                i === Ls.MouseButtons.LEFT && t.selectEnd(e, n);
              }, function (e, n, i) {
                i === Ls.MouseButtons.LEFT ? t.apply(e, n) && Hl.changeEditState(!0) : (t.selectEnd(e, n), t.requestedNewFrame = !0), t.updatePointer(e, n);
              }, function (e, n) {
                t.updatePointer(e, n);
              }, Ds, Ds, Ds, function (e, n) {
                t.cleanSelection();
              }, Ds, Ds);
            }(n, a, r), function (e, t, n) {
              document.getElementById("zoom").onchange = function (e) {
                Pl.onMapSizeChange(t);
              };
            }(0, a), t(a, n, i, function (e, t) {
              o(a), a.start(n);
            });
          });
        }, xl.mapper) : t(e.mapper, n, i, o);
      }, e.changeTile = function (t, n) {
        e.mapper.togglePause(!0), e.mapper.changeTile(t, function (t) {
          e.mapper.togglePause(!1), e.mapper.requestedNewFrame = !0;
        }), e.mapper.setTilePicker(n);
      }, e.changeSize = function (t, n) {
        e.mapper.resizeMap(t, n);
      }, e.shift = function (t, n) {
        return e.mapper.shiftMap(t, n);
      }, e.reloadMap = function (t) {
        var n = Hl.getActiveMap(),
            i = document.getElementById("canvas1");
        Xs.loadMap(n, i, function (n) {
          if (void 0 === n) return void t(!1);
          var i = e.mapper.changeMap(n, function () {
            t(i), Hl.changeEditState(!1);
          });
        });
      }, e.saveMap = function (t) {
        var n = Hl.getActiveMap(),
            i = JSON.stringify(e.mapper.getMap());
        hl.save(n + "", i, Ns.MAP, function (e, n) {
          void 0 !== n ? t(n) : (console.error("Undefined save result"), t(!1));
        });
      }, e.setMode = n, e.changeEventPosition = function (t, n, i) {
        t.i = n, t.j = i, Zs.initTransientData(e.mapper.map, e.mapper.grid, t), e.mapper.renderingConfiguration.selectEventCell = {
          i: n,
          j: i
        };
      }, e.setActiveLayer = function (t) {
        document.getElementById(Hl.BUTTON_ID_LAYER + "0").disabled = !1, document.getElementById(Hl.BUTTON_ID_LAYER + "1").disabled = !1, document.getElementById(Hl.BUTTON_ID_LAYER + "2").disabled = !1, document.getElementById(Hl.BUTTON_ID_LAYER + t).disabled = !0, e.mapper.setActiveLayer(t);
      }, e.deleteEvent = function (t) {
        if (!Hs.isEmpty(t.id)) for (var _n32 = 0; _n32 < e.mapper.map.events.length; _n32++) {
          var _i26 = e.mapper.map.events[_n32];
          if (t.id === _i26.id) return void e.mapper.map.events.splice(_n32, 1);
        }
      }, e.addEvent = function (t) {
        if (Hs.isEmpty(t.id) || t.id === Gs.DEFAULT_ID) {
          var _n33 = 0;
          void 0 !== e.mapper.map.maxEventId && (_n33 = e.mapper.map.maxEventId + 1), t.id = _n33, e.mapper.map.maxEventId = _n33, e.mapper.map.events.push(t), Zs.initTransientData(e.mapper.map, e.mapper.grid, t);
        }

        Hl.changeEditState(!0);
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
    }(Dl || (Dl = {}));
    var Bl = ys.extend({
      name: "autotile-picker",
      data: function data() {
        return {
          autotiles: [Gs.getAutoTileset()]
        };
      },
      mounted: function mounted() {
        var _this8 = this;

        this.$root.$on("cancel-selection", this.cancelSelection), hl.listResources(Ns.AUTOTILE, function (e) {
          if (void 0 !== e && e.length > 0) {
            ys.set(_this8, "autotiles", new Array());

            var _iterator45 = _createForOfIteratorHelper(e),
                _step45;

            try {
              for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                var _t44 = _step45.value;

                _this8.autotiles.push({
                  blocked: !1,
                  image: _t44
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
          Ml.cancelSelection();

          var _iterator46 = _createForOfIteratorHelper(this.autotiles),
              _step46;

          try {
            for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
              var _t45 = _step46.value;

              var _n34 = _t45.image === e.image;

              ys.set(_t45, "selected", _n34);
            }
          } catch (err) {
            _iterator46.e(err);
          } finally {
            _iterator46.f();
          }

          Dl.onAutotileSelection(e.image);
        },
        cancelSelection: function cancelSelection() {
          Ml.cancelSelection();

          var _iterator47 = _createForOfIteratorHelper(this.autotiles),
              _step47;

          try {
            for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
              var _e63 = _step47.value;
              ys.set(_e63, "selected", !1);
            }
          } catch (err) {
            _iterator47.e(err);
          } finally {
            _iterator47.f();
          }

          Dl.onAutotileSelection(void 0);
        }
      }
    });
    n(101);

    var jl = _s(Bl, Ol, [], !1, null, "582c06ce", null);

    jl.options.__file = "src/client/components/AutotilePicker.vue";
    var Fl = jl.exports;
    var Ul, Hl;
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
    }(Ul || (Ul = {})), function (e) {
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
        Hs.isEmpty(n.states) && (n.states = []), i > n.states.length && (n.states[i - 1] = Gs.getEventState());
        var o = n.states[i - 1];
        t = o, function (e) {
          var t = hl.listEventStateConditions(),
              n = document.getElementById("condition");
          Vs.resetSelect(n);
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
        0 === a.length && (a[0] = new Option("Click"), a[1] = new Option("Touch"), a[2] = new Option("Over"), a[3] = new Option("(auto)")), void 0 !== o.trigger && Hs.isNumeric(o.trigger) ? r.selectedIndex = o.trigger : r.selectedIndex = 0, p(), document.getElementById("dialogEditorCheckbox").checked = void 0 !== o.dialog, E(), document.getElementById("tot").innerText = n.states.length + "", function () {
          var e = document.getElementById("charasets");
          hl.listResources(Ns.CHAR, function (n) {
            Vs.resetSelect(e);
            var i = e.options;
            if (i[0] = new Option(""), void 0 !== n) for (var _o16 = 0; _o16 < n.length; _o16++) {
              i[_o16 + 1] = new Option(n[_o16]), n[_o16] === t.charaset && (e.selectedIndex = _o16 + 1);
            }
          });
          var n = t.visible;
          void 0 === n && (n = !0), document.getElementById("visible").checked = n;
          var i = Number.parseInt(t.opacity + "");
          (Hs.isEmpty(i) || Number.isNaN(i) || i < 0 || i > 100) && (i = 100), document.getElementById("opacity").valueAsNumber = i;
          var o = document.getElementById("direction");

          if (0 === o.length) {
            var _e64 = o.options;
            _e64[0] = new Option("Up"), _e64[1] = new Option("Right"), _e64[2] = new Option("Down"), _e64[3] = new Option("Left");
          }

          var r = Number.parseInt(t.direction + "");
          (Hs.isEmpty(r) || Number.isNaN(r) || r < 0 || r > 4) && (r = 2), document.getElementById("direction").selectedIndex = r;
          var a = 0,
              s = document.getElementById("speed").options,
              l = document.getElementById("frequency").options;

          if (0 === s.length || 0 === l.length) {
            var _iterator49 = _createForOfIteratorHelper(c),
                _step49;

            try {
              for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
                var _e65 = _step49.value;
                s[a] = new Option(_e65), l[a] = new Option(_e65), a++;
              }
            } catch (err) {
              _iterator49.e(err);
            } finally {
              _iterator49.f();
            }
          }

          var d = Number.parseInt(t.speed + "");
          (Hs.isEmpty(d) || Number.isNaN(d) || d < 0 || d > 6) && (d = 3), document.getElementById("speed").selectedIndex = d;
          var u = Number.parseInt(t.frequency + "");
          (Hs.isEmpty(u) || Number.isNaN(u) || u < 0 || u > 6) && (u = 3), document.getElementById("frequency").selectedIndex = u;
          var f = document.getElementById("rotation").options;
          0 === f.length && (f[0] = new Option("Off"), f[1] = new Option("Clockwise"), f[2] = new Option("Counterclockwise"));
          var p = Number.parseInt(t.rotation + "");
          (Hs.isEmpty(p) || Number.isNaN(p) || p < 0 || p > 2) && (p = 0), document.getElementById("rotation").selectedIndex = p;
          var h = document.getElementById("ontop").options;
          0 === h.length && (h[0] = new Option("Off"), h[1] = new Option("Liv. 1"), h[2] = new Option("Liv. 2"), h[3] = new Option("Liv. 3"), h[4] = new Option("Liv. 4"));
          var g = Number.parseInt(t.onTop + "");
          (Hs.isEmpty(g) || Number.isNaN(g) || g < 0 || g > 4) && (g = 0), document.getElementById("ontop").selectedIndex = g;
          var m = t.block;
          void 0 === m && (m = !0), document.getElementById("block").checked = m;
        }();
      }

      function p() {
        var e = document.getElementById("script").value,
            n = document.getElementById("action");

        if (Vs.resetSelect(n), !Hs.isEmpty(e)) {
          var _i27 = hl.listScriptActions(e);

          _i27.push("");

          var _o17 = n.options,
              _r15 = 0;
          n.selectedIndex = -1;

          var _iterator50 = _createForOfIteratorHelper(_i27),
              _step50;

          try {
            for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
              var _e66 = _step50.value;
              _o17[_r15] = new Option(_e66), (_e66 === t.action || "" === _e66 && void 0 === t.action) && (n.selectedIndex = _r15), _r15++;
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
        (Hs.isEmpty(n) || Number.isNaN(n) || n < 0 || n >= 100) && (n = void 0), t.opacity = n;
        var i = document.getElementById("direction").selectedIndex;
        (Hs.isEmpty(i) || i < 0 || i > 3) && (i = 4), t.direction = i;
        var o = document.getElementById("speed").selectedIndex,
            r = document.getElementById("frequency").selectedIndex;
        (Hs.isEmpty(o) || o < 0 || o > 6 || 3 === o) && (o = void 0), (Hs.isEmpty(r) || r < 0 || r > 6 || 3 === r) && (r = void 0), t.speed = o, t.frequency = r;
        var a = document.getElementById("rotation").selectedIndex;
        (Hs.isEmpty(a) || a <= 0 || a > 2) && (a = void 0), t.rotation = a;
        var s = document.getElementById("ontop").selectedIndex;
        (Hs.isEmpty(s) || s <= 0 || s > 4) && (s = void 0), t.onTop = s;
        var l = document.getElementById("block").checked;
        l && (l = void 0), t.block = l;
      }

      function g(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;

        if (void 0 !== e) {
          if (t && !m()) return !1;
          e.currentState = 0;
        } else e = Gs.getEvent();

        n = e, document.getElementById("eventi").style.removeProperty("color"), document.getElementById("eventj").style.removeProperty("color"), v(!1), document.getElementById("name").value = e.name, document.getElementById("eventi").valueAsNumber = e.i, document.getElementById("eventj").valueAsNumber = e.j;
        var i = document.getElementById("script");
        Vs.resetSelect(i);
        var o = hl.listScriptClasses();
        o.set("", "");
        var r = i.options,
            a = 0;

        var _iterator51 = _createForOfIteratorHelper(o),
            _step51;

        try {
          for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
            var _e68 = _step51.value;
            r[a] = new Option(_e68[0]), r[a].title = _e68[1], (_e68[0] === n.script || "" === _e68[0] && void 0 === n.script) && (i.selectedIndex = a), a++;
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
        }(), !Hs.isEmpty(n.memory)) for (var _e67 in n.memory) {
          y(_e67, n.memory[_e67]);
        }
        return !0;
      }

      function m() {
        return !l || void 0 === n || confirm("Event details not saved. If you continue, details of the currently selected event will be lost. Are you sure you want to continue?");
      }

      function v() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        l = e, document.getElementById("saveEvent").disabled = !e, Dl.mapper.requestedNewFrame = !0;
      }

      function y(e, t) {
        var i = document.getElementById("memory"),
            o = i.rows;

        for (var _n35 = 0; _n35 < o.length; _n35++) {
          if (o[_n35].id === e) return void (i.rows[_n35].cells[1].childNodes[0].value = t);
        }

        var r,
            a,
            s,
            l = document.getElementById("memory").rows.length,
            c = document.getElementById("memory").insertRow(l);
        c.id = e, r = c.insertCell(), a = document.createElement("input"), a.type = "text", a.style.width = "5em", a.disabled = !0, a.value = e, r.appendChild(a), r = c.insertCell(), a = document.createElement("input"), a.type = "text", a.style.width = "8em", a.disabled = !0, a.value = t, r.appendChild(a), r = c.insertCell(), s = document.createElement("button"), s.onclick = function () {
          var t = document.getElementById("memory"),
              i = t.rows;

          for (var _n36 = 0; _n36 < i.length; _n36++) {
            if (i[_n36].id === e) {
              t.deleteRow(_n36);
              break;
            }
          }

          void 0 !== n ? Zs.deleteMem(n, e) : console.error("Current event undefined, cannot delete memory");
        }, s.innerText = "-", r.appendChild(s);
      }

      function E(e) {
        var n = document.getElementById("dialogPanel");
        if (null === n) return void console.error("Canont find element with id: dialogPanel");
        var o = document.getElementById("dialogEditorCheckbox");

        if (void 0 !== e && (o.checked = e), o.checked) {
          var _e69 = t.dialog;
          if (void 0 === _e69) _e69 = Gs.DEFAULT_ID;else if (_e69 === i) return;
          qs.loadDialog(_e69, Us.ui.lang, function (o) {
            if (void 0 !== o) {
              r.$data.root = o, t.dialog = _e69, i = _e69, n.style.display = "block";

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
        Ul.check(), void 0 === o && (o = new ys({
          el: "#eventEditorVue",
          components: {
            "event-editor": Nl
          },
          data: {}
        })), function () {
          if (void 0 === r) {
            var _e70 = {
              id: Gs.FIRST_ELEM_ID
            };
            r = new ys({
              el: "#dialogSummaryVue",
              components: {
                "dialog-summary": ws
              },
              data: {
                root: Gs.getDialogNode(),
                selectedNodeId: _e70
              }
            });
          }

          void 0 === a && (a = new ys({
            el: "#dialogEditorVue",
            components: {
              "dialog-editor": ys.extend(El)
            },
            data: {
              root: Gs.getDialogNode(),
              dialog: Gs.getDialogNode(),
              disconnectedNodes: [Gs.getDialogNode()],
              nodeIds: new Array(Gs.FIRST_ELEM_ID),
              edgeIds: new Array(Gs.FIRST_ELEM_ID),
              edgeConditions: [],
              edgeScripts: new Map(),
              edgeActions: []
            }
          }));
        }(), new ys({
          el: "#loginVue",
          components: {
            login: Sl
          }
        }), s = new ys({
          el: "#autotilePickerVue",
          components: {
            "autotile-picker": Fl
          }
        });
        var e = {
          core: {
            animation: !1,
            data: {
              url: base_path + "data/" + Ns.TREE + "/maps",
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
                var _e71 = $("#mapPanel").jstree(!0).get_json("#", {
                  flat: !0,
                  no_state: !0,
                  no_id: !1,
                  no_children: !1,
                  no_data: !0
                });

                _e71.length > 0 && $("#mapPanel").jstree(!0).select_node(_e71[0]);
              }

              $("#mapPanel").jstree("open_all");
              break;

            case "create_node":
              var _i28 = n.node.id.split("_").pop();

              isNaN(parseInt(_i28)) && (console.info("Cannot generate a sequential numeric id for node: " + n.node.id), _i28 = Hs.getRandomString()), $("#mapPanel").jstree(!0).set_id(n.node, _i28);

            case "rename_node":
            case "delete_node":
              u(!0);
              break;

            case "changed":
              switch (n.action) {
                case "ready":
                  break;

                case "delete_node":
                  var _e72 = $("#mapPanel").jstree(!0).get_prev_dom(n.node);

                  $("#mapPanel").jstree(!0).select_node(_e72);
                  break;

                case "model":
                case "select_node":
                  $("#mapDetailPanel").show();

                  var _i29 = d();

                  Dl.start(t, _i29.id, function (e) {
                    void 0 !== e.map ? ($("#mapSizeW").val(e.map.width + ""), $("#mapSizeH").val(e.map.height + ""), void 0 !== e.map.tileset && document.getElementById("tiles").value !== e.map.tileset.image && ($("#tiles").val(e.map.tileset.image), Ml.loadTile(e.map.tileset.image, function (t) {
                      e.setTilePicker(t), Ml.setMapper(e);
                    }))) : console.error("Map is undefined, for id: " + _i29.id);
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
        }), hl.loadProperties(function (e) {
          var t = +e.get("cellWidth") * +e.get("tileColumns") + 2;
          $("#toolsPanel").width(t);
        }), $.getJSON(base_path + "assetlist/tile", function (e) {
          var t = document.getElementById("tiles");

          for (var _n37 = 0; _n37 < e.length; _n37++) {
            t.options.add(new Option(e[_n37], e[_n37]));
          }
        });
      }, e.changeSize = function () {
        var e = parseInt($("#mapSizeW").val()),
            t = parseInt($("#mapSizeH").val());
        Dl.changeSize(e, t), u(!0);
      }, e.shiftMapHorizontal = function () {
        var e = parseInt($("#mapHorizontalShift").val()),
            t = Dl.shift(e, 0);
        document.getElementById("mapSizeW").value = t.w + "";
      }, e.shiftMapVertical = function () {
        var e = parseInt($("#mapVerticalShift").val()),
            t = Dl.shift(0, e);
        document.getElementById("mapSizeH").value = t.h + "";
      }, e.loadNews = function () {}, e.changeTile = function () {
        var e = document.getElementById("tiles").value;
        Ml.loadTile(e, function (t) {
          Dl.changeTile(e, t);
        }), u(!0);
      }, e.save = function () {
        (Hs.isEmpty(n) || m()) && Ml.saveData(function (t, n) {
          t ? Dl.saveMap(function (t) {
            t ? e.changeEditState(!1) : console.error("Map save failed");
          }) : console.error("Tilepicker save failed");
        });
      }, e.reload = function () {
        Dl.reloadMap(function (e) {
          e && $("#mapPanel").jstree(!0).refresh(!0, !1);
        });
      }, e.getActiveMap = function () {
        return d().id;
      }, e.changeEditState = u, e.changeEventPosition = function () {
        if (void 0 === n) return void console.error("Current event undefined, cannot change its position");
        var e = document.getElementById("eventi").valueAsNumber,
            t = document.getElementById("eventj").valueAsNumber;
        Dl.isCellAvailable(n, e, t) ? (v(), Dl.changeEventPosition(n, e, t), document.getElementById("eventi").style.removeProperty("color"), document.getElementById("eventj").style.removeProperty("color")) : (v(!1), document.getElementById("eventi").style.color = zs.Color.RED, document.getElementById("eventj").style.color = zs.Color.RED);
      }, e.changeEventScript = function () {
        v(), p();
      }, e.deleteEvent = function () {
        void 0 !== n ? (Dl.deleteEvent(n), v(), g(void 0, !1)) : console.error("Current event undefined, cannot delete it");
      }, e.deleteEventState = function () {
        if (void 0 === n) return void console.error("Current event undefined, cannot delete its state");
        var e = document.getElementById("state").valueAsNumber;
        (e > 1 || 1 === e && n.states.length > 1) && e <= n.states.length && (n.states.splice(e - 1, 1), e > 1 && (document.getElementById("state").valueAsNumber -= 1), v(), f(!1));
      }, e.loadEventState = f, e.loadEvent = g, e.saveEvent = function () {
        if (void 0 !== n) {
          if (n.name = document.getElementById("name").value, n.i = document.getElementById("eventi").valueAsNumber, n.j = document.getElementById("eventj").valueAsNumber, n.script = document.getElementById("script").value, h(), void 0 !== t.dialog) {
            var _e73 = t;
            qs.saveDialog(t.dialog, r.$data.root, function (n) {
              void 0 !== n ? _e73.dialog = n : console.error("Could not save dialog, returned dialog id is undefined: " + t.dialog);
            });
          }

          Dl.addEvent(n), e.eventModified(!1);
        }
      }, e.finishEventEditing = function () {
        return !!m() && (n = void 0, v(!1), !0);
      }, e.confirmCloseEventDetails = m, e.eventModified = v, e.addMemory = function () {
        if (void 0 === n) return void console.error("Current event undefined, cannot add to its memory");
        var e = document.getElementById("key").value,
            t = document.getElementById("val").value;
        Hs.isEmpty(e) || Hs.isEmpty(t) || (v(), Zs.saveMem(n, e, t), y(e, t), document.getElementById("key").value = "", document.getElementById("val").value = "");
      }, e.createNode = function () {
        return Gs.getDialogNode();
      }, e.createEdge = function () {
        return Gs.getDialogEdge();
      }, e.toggleDialogEditor = E, e.loadDialogEditor = function (e) {
        var t = r.$data.root;

        if (a.$data.root = qs.search(t, e), void 0 === a.$data.dialog || a.$data.dialog.id !== t.id) {
          var _e74 = new Map(),
              _n38 = new Map();

          qs.deconstructDialogTree(t, _e74, _n38), a.$data.nodeIds = Array.from(_e74.keys()), a.$data.edgeIds = Array.from(_n38.keys());
        }

        a.$data.dialog = t, r.$data.selectedNodeId.id = e;
        var n = document.getElementById("dialogEditPanel");
        null !== n && (n.style.display = "block"), a.$emit("update-focus");
      }, e.listEventStateConditions = function () {
        return hl.listEventStateConditions();
      }, e.onCancelAutotileSelection = function () {
        s.$emit("cancel-selection");
      };
    }(Hl || (Hl = {}));
  })(), L4W_mapper = i;
})();
