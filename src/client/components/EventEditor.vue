<!-- TODO adopt Vue -->
<template>
	<div id="eventPanel" style="border:1px solid black;position:relative"> <!-- hidden=true> -->
		<table style="width:100%">
			<tr>
				<td>Name</td>
				<td><input id="name" type="text" placeholder="Event name" onchange="L4W_mapper.MapperPage.eventModified();"/></td>
			</tr>
			<tr>
				<td>Position</td>
				<td onchange="L4W_mapper.MapperPage.changeEventPosition()">
					<input id="eventi" type="number" min="0" max="999" step="1" style="width:3em" />
					<input id="eventj" type="number" min="0" max="999" step="1" style="width:3em" />
				</td>
			</tr>
			<tr>
				<td>Script</td>
				<td><select id="script" title="To use a new script, add it to ScriptsRegister.ts" style="background-color:#d0ffd0" onchange="L4W_mapper.MapperPage.changeEventScript();"></select></td>
			</tr>
		</table>
		<div id="scriptTooltip" style="font-style:italic"></div>
		<br/>
		<table style="width:100%">
			<tr>
				<td>State</td>
				<td><input id="state" style="background-color:#ffffd0" type="number" min="1" max="99" value="1" onchange="L4W_mapper.MapperPage.loadEventState();"/></td>
				<td>of</td>
				<td id="tot">1</td>
			</tr>
		</table>
		
		<event-state-editor />

		<table style="width:100%">

		</table>
		Memory<br/>
		<input id="key" type="text" style="width:5em" placeholder="Key" title='Standard keys:
msg1: message displayed by "speak" Action (the number represent the state number)
state: variable used by Conditions "isStateVar0", "isStateVar1", ...
' />
		<input id="val" type="text" style="width:8em" placeholder="Value" />
		<button onclick="L4W_mapper.MapperPage.addMemory();">+</button>
		<table id="memory" style="border:1px solid black;position:relative;margin-left:10px"></table>
		<br/>
		<button id="saveEvent" onclick="L4W_mapper.MapperPage.saveEvent()" title="This will confirm the event details">Save event</button>
		<button id="deleteEvent" style="color:red" onclick="L4W_mapper.MapperPage.deleteEvent()" title="This will delete the currently selected event">Delete event &#x2620;</button>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

import EventStateEditor from "./EventStateEditor.vue"

export default Vue.extend({
  components: { EventStateEditor },
    name: "event-editor",
    props: {
	}
})
</script>

<style scoped>

</style>