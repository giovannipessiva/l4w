<template>
    <div :class="[ selectedNodeId.id === node.id ? 'selectedNode' : 'unselectedNode' ]">
        <div class="dialogSummaryRow" v-bind:onclick="'L4W_mapper.MapperPage.loadDialogEditor(' + node.id + ')'">
            <a v-bind:name="node.id" />
            {{ node.message }} <div class="elementId">N{{ node.id }}</div>
        </div>
        <ul>
            <li v-for="edge in node.edges" v-bind:key="edge.id">
                <div class="dialogSummaryRow" v-bind:onclick="'L4W_mapper.MapperPage.loadDialogEditor(' + node.id + ')'">
                    <div class="edge">{{ edge.message }}</div> <div class="elementId">E{{ edge.id }}</div>
                </div>
                <div v-if="edge.node !== undefined" class="dialogSummarySubnode">
                    <div v-if="!edge.nodeReferenced">
                        <!-- Recursive template render -->
                        <dialog-summary :node="edge.node" :selected-node-id="selectedNodeId" />
                    </div>
                    <div v-else>
                        <!-- To avoid repetition, only include message -->
                        <div class="dialogSummaryRow unselectedNode" v-bind:onclick="'L4W_mapper.MapperPage.loadDialogEditor(' + edge.node.id + ')'">
                            {{ edge.node.message }} <div class="elementId"><a v-bind:href="'#' + edge.node.id">(N{{ edge.node.id }})</a></div>
                        </div>
                        <div class="jumpElement" />
                    </div>
                </div>
            </li>
        </ul>
        <div class="endElement" />
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { IDialogNode } from "../../common/model/Dialog";

export default Vue.extend({
    name: "dialog-summary",
    props: {
        node: {
            type: Object as PropType<IDialogNode>,
            required: true
        },
        selectedNodeId: {
            type: Object as PropType<{ id: number }>,
            required: true
        }
    }
})
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.dialogSummaryRow {
	-webkit-user-select: none;  /* Chrome all / Safari all */
	-moz-user-select: none;     /* Firefox all */
	-ms-user-select: none;      /* IE 10+ */
	user-select: none;          /* Likely future */  
	border: 1px solid transparent;
    cursor: pointer;
    display: inline-block; /* Avoid newLine after list custom symbol */
}
.dialogSummaryRow:hover {
	border: 1px dotted blue;
}
.edge {
    font-style: italic;
    display: inline-block;
}
.edge:before {
    content: ">"; /* Insert content as new list symbol */
    margin-right: 6px;
    font-style: italic;
}
.elementId {
    display: inline-block;
	font-size: smaller;
	color: rgb(80, 80, 80);
}
.dialogSummarySubnode {
    margin-left: 2em;
}
.endElement {
    width: 100%;
    height: 0.5em;
    border-top:1px solid black;
}
.jumpElement {
    width: 100%;
    height: 0.5em;
    border-top:1px dashed black;
}
.selectedNode {
    background: lightyellow;
}
.unselectedNode {
    background: white;
}
</style>