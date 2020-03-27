<template>
    <div>
        <div>
            <!-- Dialog node editor -->
            <div class="dialogNodeDetails">
                <div class="elementId">N{{ node.id }}</div>
                <textarea class="message" type="text" placeholder="<message>" v-model="node.message"/><br>
                <!-- TODO Generic message: <select id="genericMessage"></select><br/> -->
                Autoclose in <input class="nodeClosingTimeout" type="number" min="0" max="10000" step="1"/> msec<br>
                <br>
                <div style="float:none"/>
                <button style="color:red;float:right" title="Delete this node">Delete</button>
                <button style="float:left">Add new edge</button>
                <br>
            </div>
            
            <!-- Dialog edge editor -->
            <div class="dialogEdgeDetails" v-for="edge in node.edges" v-bind:key="edge.id">
                <div class="elementId">E{{ edge.id }}</div>
                <textarea class="message" type="text" placeholder="<message>" v-model="edge.message"/><br>

                Condition <select class="edgeCondition"></select><br>
                Cond. param: <input class="edgeConditionParameters" type="text"/><br>

                Script <select class="edgeScript"></select><br>
                Action <select class="edgeAction"></select>
                
                <div style="float:none"/>
                <button style="color:red;float:right" title="Delete this edge">Delete</button>
                <br>
                <br>
                Connect to <select class="nodes"></select> or <button>create a new node</button>               
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

<script>
export default {
    name: "dialog-editor",
    props: {
        node: {
            type: Object,
            required: true
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