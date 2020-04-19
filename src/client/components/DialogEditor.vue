<template>
    <div>
        <div>
            <!-- Dialog node editor -->
            <div class="dialogNodeDetails">
                <div class="elementId">N{{ node.id }}</div>
                <textarea ref="dialogNodeMessage" class="message" type="text" placeholder="<message>" v-model="node.message"/><br>
                <!-- TODO Generic message: <select id="genericMessage"></select><br/> -->
                Autoclose in <input ref="nodeClosingTimeout" type="number" min="0" max="10000" step="1" v-model="node.closingTimeout"/> msec<br>
                <br>
                <div style="float:none"/>
                <!-- Disabled edges selection, until it is needed bad enough to justify fixing the render stack overflow problem -->
                <!--
                Connect to <select ref="edges" v-on:change="onEdgeChange($event)">
                    <option selected disabled value="">&nbsp;</option>
                    <option v-for="option in edgeIds" v-bind:key="option" v-bind:value="option">
                        {{ option }}
                    </option>
                </select> or 
                -->
                <button v-on:click="addEdge()">Create new edge</button>
                <br>
            </div>
            
            <!-- Dialog edge editor -->
            <div class="dialogEdgeDetails" v-for="edge in node.edges" v-bind:key="edge.id">
                <div class="elementId">E{{ edge.id }}</div>
                <textarea ref="dialogEdgeMessage" class="message" type="text" placeholder="<message>" v-model="edge.message"/><br>

                Condition <select ref="edgeCondition" v-model="edge.condition">
                    <option v-for="option in edgeConditions" v-bind:key="option" v-bind:value="option">
                        {{ option }}
                    </option>
                </select><br>
                <div v-if="edge.condition">Cond. param: <input class="edgeConditionParameters" type="text" v-model="edge.conditionParams"/><br></div>

                Script <select ref="edgeScript" v-model="edge.script" v-on:change="onScriptChange($event, edge)">
                    <option v-for="option in edgeScripts" v-bind:key="option[0]" v-bind:value="option[0]">
                        {{  option[0] + " (" + option[1] + ")" }}
                    </option>
                </select><br>
                <div v-if="edge.script !== undefined">
                    Action <select ref="edgeAction" v-model="edge.action">
                        <option v-for="option in edge.actions" v-bind:key="option" v-bind:value="option">
                            {{  option }}
                        </option>
                    </select>
                </div>
                
                <div style="float:none"/>
                <button style="color:red;float:right" title="Remove this edge (if disconnected, will be deleted when saving)" v-on:click="deleteEdge(edge)">Remove</button>
                <br>
                <br>
                Connect to <select ref="nodes" v-model="edge.nodeId" v-on:change="onNodeChange($event, edge)">
                    <option selected disabled value="">&nbsp;</option>
                    <option v-for="option in nodeIds" v-bind:key="option" v-bind:value="option">
                        {{ option }}
                    </option>
                </select>
                <span v-if="edge.nodeId === undefined"> or <button v-on:click="addNode(edge)">Create new node</button></span>
                <span v-else> or <button style="color:red" title="Remove this node (if disconnected, will be deleted when saving)" v-on:click="deleteNode(edge)">Remove node</button></span>            
            </div>
        </div>

        <!-- TODO -->
        <!--
        <div id="genericMessageArea" style="display:block">
            <div class="dialogMessage">
                Message &amp; GenericMessage editor

                // A message that can be resolved to different strings, based on some conditions
                IGenericMessage
                    id: number; // ID of the generic string
                    description: string; // Description of the generic string
                    condition?: string; // Name of function that returns true if this state can be active (see Conditions.ts)
                    values: IGenericMessageValue[]; // Array of possible values for this generic message
                    
                // Single value that could be used for a generic message
                IGenericMessageValue
                    message: string; // String of the message
                    conditionParams: string; // Parameters to be used for evaluating the condition
            </div>
        </div>
        -->
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { Resource } from "../core/util/Resource";
import { DataDefaults } from "../../common/DataDefaults";
import { Utils } from "../../common/Utils";
import { IDialogNode, IDialogEdge } from "../../common/model/Dialog";
import { DialogManager } from "../core/manager/DialogManager";
import { MapperPage } from "../tool/mapper/MapperPage";

export default Vue.extend({
    name: "dialog-editor",
    props: {
        node: {
            type: Object as PropType<IDialogNode>,
            required: true
        },
        dialog: {
            type: Object as PropType<IDialogNode>,
            required: true
        },
        disconnectedNodes: {
            type: Array as () => Array<IDialogNode>,
            required: true
        },
        nodeIds: {
            type: Array as () => Array<number>,
            required: true
        },
        edgeIds: {
            type: Array as () => Array<number>,
            required: true
        },
        edgeConditions: {
            type: Array as () => Array<string>,
            default: function() {
                return [];
            }
        },
        edgeScripts: {
            type: Map,
            default: function() {
                return new Map<string,string>();
            }
        },
        edgeActions: {
            type: Array as () => Array<string>,
            default: function() {
                return [];
            }
        }
    },
    mounted: function() {
        // Populate static comboboxes
        for(let condition of Resource.listEventStateConditions()) {
            this.edgeConditions.push(condition);
        }
        for(let script of Resource.listScriptClasses()) {
            this.edgeScripts.set(script[0], script[1]);
        }
        if(this.node.edges !== undefined) {
            for(let edge of this.node.edges) {
                // Reload edge actions
                loadEdgeScriptActions(edge);
            }
        }
    },

    updated: function() {
        let edges = <HTMLSelectElement[]> this.$refs.edges;
        if(edges !== undefined && edges[0].options !== undefined) {
            // Reset at the first option (the empty one)
            edges[0].options[0].selected = true;
        }
        let nodes = <HTMLSelectElement[]> this.$refs.nodes;
        if(nodes !== undefined && edges !== undefined) {
            for(let edge of edges) {
                // Reset at the first option (the empty one)
                if(edge.options !== undefined) {
                    edge.options[0].selected = true;
                }
            }
        }
        // Focus node message, or last edge message
        if(this.node !== undefined) {
            if(Utils.isEmpty(this.node.edges)) {
                if(this.$refs.dialogNodeMessage != undefined) {
                    (<HTMLElement> this.$refs.dialogNodeMessage).focus();
                }
            } else {
                if(this.node.edges![this.node.edges!.length - 1].message === undefined) {
                    let lastEdge = this.$refs.dialogEdgeMessage[this.node.edges!.length - 1];
                    lastEdge.focus();
                }
            }
        }
    },
    methods: {
        addEdge() {
            if(this.node.edgeIds === undefined) {
                Vue.set(this.node, "edgeIds", []);
            }
            if(this.node.edges === undefined) {
                Vue.set(this.node, "edges", []);
            }
            let edgeId = getNextId(this.edgeIds);
            this.node.edgeIds!.push(edgeId);
            this.node.edges!.push(DataDefaults.getDialogEdge(edgeId));
            this.edgeIds.push(edgeId);
        },
        deleteEdge(edge: IDialogEdge) {
            this.node.edgeIds!.splice(this.node.edgeIds!.indexOf(edge.id), 1);
            this.node.edges!.splice(this.node.edges!.indexOf(edge), 1);
        },
        addNode(edge: IDialogEdge) {
            let nodeId = getNextId(this.nodeIds);
            Vue.set(edge, "nodeId", nodeId);
            Vue.set(edge, "node", DataDefaults.getDialogNode(nodeId));
            this.nodeIds.push(nodeId);
            // When creating a new node, immediately select it
            MapperPage.loadDialogEditor(nodeId);
        },
        deleteNode(edge: IDialogEdge) {
            // Back it up, so that it can be selected
            // even if it it disconnected from the tree
            this.disconnectedNodes.push(edge.node!);
            Vue.set(edge, "nodeId", undefined);
            Vue.set(edge, "node", undefined);
        },
        onEdgeChange(event: Event) {
            let edgeId = parseInt((<HTMLSelectElement> event.target).selectedOptions.item(0)!.value);
            if(this.node.edgeIds === undefined) {
                Vue.set(this.node, "edgeIds", []);
            } else if(this.node.edgeIds.includes(edgeId)) {
                // Edge already connected, cannot duplicate it
                return;
            }
            if(this.node.edges === undefined) {
                Vue.set(this.node, "edges", []);
            }
            let edge = DialogManager.search(this.dialog, edgeId, true);
            if(edge !== undefined) {
                this.node.edgeIds!.push(edgeId);
                this.node.edges!.push(<IDialogEdge> edge);
            }
        },
        onNodeChange(event: Event, edge: IDialogEdge) {
            let isNodeReferenced = true;
            let nodeId = parseInt((<HTMLSelectElement> event.target).selectedOptions.item(0)!.value);
            // Search it in the dialog tree
            let node = DialogManager.search(this.dialog, nodeId, false);
            if(node === undefined) {
                // Search it in the disconnected nodes
                for(let disconnectedNode of this.disconnectedNodes) {
                    if(disconnectedNode.id === nodeId) {
                        node = disconnectedNode;
                        isNodeReferenced = false;
                    }
                }
            }
            if(node !== undefined) {
                Vue.set(edge, "nodeReferenced", isNodeReferenced);
                Vue.set(edge, "nodeId", nodeId);
                Vue.set(edge, "node", <IDialogNode> node);
            }
        },
        onScriptChange(event: Event, edge: IDialogEdge) {
            loadEdgeScriptActions(edge);
        }
    }
})

function getNextId(ids: number[]): number {
    let maxId = DataDefaults.DEFAULT_ID;
    for(let id of ids) {
        if(id > maxId) {
            maxId = id;
        }
    }
    return maxId + 1;
}

function loadEdgeScriptActions(edge: IDialogEdge): void {
    if(edge.script !== undefined) {
        Vue.set(edge, "actions", []);
        for(let action of Resource.listScriptActions(edge.script)) {
            edge.actions!.push(action);
        }
    }
}
</script>

<style scoped>
.dialogNodeDetails{
    text-align: left;
    padding: 0.5em;
}
.dialogEdgeDetails{
    text-align: left;
	border: 1px dotted black;
    margin: 0.5em;
    padding: 0.5em;
}
.elementId {
    float: right;
    font-size: smaller;
	color: rgb(80, 80, 80);
}
.dialogSelectionDetails{
	border: 1px dotted black;
	margin: 0.5em;
}
.dialogMessage{
	float: left;
	border: 10px solid black;
	margin: 0.5em;
}
.message{
    width: 21em;
    height: 3em;
    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;
    font-size: medium;
    resize: vertical;
}
.nodeClosingTimeout{
    width: 6em;
}
</style>