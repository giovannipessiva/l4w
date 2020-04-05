<template>
    <div>
        <div>
            <!-- Dialog node editor -->
            <div class="dialogNodeDetails">
                <div class="elementId">N{{ node.id }}</div>
                <textarea class="message" type="text" placeholder="<message>" v-model="node.message"/><br>
                <!-- TODO Generic message: <select id="genericMessage"></select><br/> -->
                Autoclose in <input ref="nodeClosingTimeout" type="number" min="0" max="10000" step="1" v-model="node.closingTimeout"/> msec<br>
                <br>
                <div style="float:none"/>
                Connect to <select ref="edges">
                    <option selected value="">&nbsp;</option>
                    <option v-for="option in edgeIds" v-bind:key="option" v-bind:value="option">
                        {{ option }}
                    </option>
                </select> or <button v-on:click="addEdge()">Create new edge</button>
                <br>
            </div>
            
            <!-- Dialog edge editor -->
            <div class="dialogEdgeDetails" v-for="edge in node.edges" v-bind:key="edge.id">
                <div class="elementId">E{{ edge.id }}</div>
                <textarea class="message" type="text" placeholder="<message>" v-model="edge.message"/><br>

                Condition <select ref="edgeCondition" v-model="edge.condition"></select><br>
                Cond. param: <input class="edgeConditionParameters" type="text" v-model="edge.conditionParams"/><br>

                Script <select ref="edgeScript" v-model="edge.script"></select><br>
                Action <select ref="edgeAction" v-model="edge.action"></select>
                
                <div style="float:none"/>
                <button style="color:red;float:right" title="Remove this edge (if disconnected, will be deleted when saving)" v-on:click="deleteEdge(edge)">Remove</button>
                <br>
                <br>
                Connect to <select ref="nodes" v-model="edge.nodeId">
                    <option selected value="">&nbsp;</option>
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
import { DialogManager } from "../core/manager/DialogManager";
import { IDialogNode, IDialogEdge } from "../../common/model/Dialog";

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
        nodeIds: {
            type: Array,
            required: true
        },
        edgeIds: {
            type: Array,
            required: true
        }
    },
    mounted: function() {
        // Load each <select> options when it becomes visible
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    // Add the options to each <select>
                    let edgeConditions = <Element[]> this.$refs.edgeCondition;
                    if(edgeConditions !== undefined) {
                        edgeConditions.forEach((selectElement) => {
                            let conditionOptions = [];
                            for(let element of Resource.listEventStateConditions()) {
                                let opt = document.createElement<"option">("option");
                                opt.label = element;
                                conditionOptions.push(opt);
                            }
                            for(let opt of conditionOptions) {
                                selectElement.appendChild(opt);
                            }
                        });
                    }
                    let edgeScripts = <Element[]> this.$refs.edgeScript;
                    if(edgeScripts !== undefined) {
                            edgeScripts.forEach((selectElement) => {
                            let scriptOptions = [];

                            for(let element of Resource.listScriptClasses()) {
                                let opt = document.createElement<"option">("option");
                                opt.label = element[0] + " (" + element[1] + ")";
                                scriptOptions.push(opt);
                            }
                            for(let opt of scriptOptions) {
                                selectElement.appendChild(opt);
                            }
                        });
                    }
                }
            });
        }, {
            root: document.documentElement
        });
        observer.observe(this.$el);
    },
    methods: {
        addEdge() {
            if(this.node.edgeIds === undefined) {
                Vue.set(this.node, "edgeIds", []);
            }
            if(this.node.edges === undefined) {
                Vue.set(this.node, "edges", []);
            }
            let edgeId = DialogManager.getNextEdgeId(this.dialog);
            this.node.edgeIds!.push(edgeId);
            this.node.edges!.push(DataDefaults.getDialogEdge(edgeId));
            this.edgeIds.push(edgeId);
        },
        deleteEdge(edge: IDialogEdge) {
            this.node.edgeIds!.splice(this.node.edgeIds!.indexOf(edge.id), 1);
            this.node.edges!.splice(this.node.edges!.indexOf(edge), 1);
        },
        addNode(edge: IDialogEdge) {
            let nodeId = DialogManager.getNextNodeId(this.dialog);
            Vue.set(edge, "nodeId", nodeId);
            Vue.set(edge, "node", DataDefaults.getDialogNode(nodeId));
            this.nodeIds.push(nodeId);
        },
        deleteNode(edge: IDialogEdge) {
            Vue.set(edge, "nodeId", undefined);
            Vue.set(edge, "node", undefined);
        }
    }
})
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