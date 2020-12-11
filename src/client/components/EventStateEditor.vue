<!-- TODO adopt Vue -->
<template>
	<table id="eventState" style="border:1px solid black;position:relative;margin-left:10px;background-color:#ffffd0;width:90%">
		<tbody onchange="L4W_mapper.MapperPage.eventModified()">
			<tr><td>Condition</td>		<td><select id="condition"></select></td></tr>
			<tr><td>Trigger</td>		<td><select id="trigger"></select></td></tr>
			<tr><td>Action</td>			<td><select id="action" style="background-color:#d0ffd0"></select></td></tr>
			<tr><td>Dialog</td>			<td><input id="toggleDialogEditor" type="checkbox" onclick="L4W_mapper.MapperPage.toggleDialogEditor()"/></td></tr>
			<tr><td>&nbsp;</td>			<td></td></tr>
			<tr><td>Charaset</td>		<td><select id="charasets"></select></td></tr>
			<tr><td>Visible</td>		<td><input id="visible" type="checkbox" checked /></td></tr>
			<tr><td>Opacity</td>		<td><input id="opacity" type="number" min="0" max="100" step="1" value="100" style="width:3em" /></td></tr>
			<tr><td>Direction</td>		<td><select id="direction"></select></td></tr>
			<tr><td>Speed</td>			<td><select id="speed"></select></td></tr>
			<tr><td>Frequency</td>		<td><select id="frequency"></select></td></tr>
			<tr><td>Rotation</td>		<td><select id="rotation"></select></td></tr>
			<tr><td>On top</td>			<td><select id="ontop"></select></td></tr>
			<tr><td>Blocking</td>		<td><input id="block" type="checkbox" checked></td></tr>
		</tbody>
		<tfoot><tr>
			<td></td>
			<td><button style="color:red" onclick="L4W_mapper.MapperPage.deleteEventState()" title="This will delete the currently selected state">Delete state &#x2620;</button></td>
		</tr></tfoot>
	</table>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "event-state-editor",
    props: {
    }
})
</script>

<style scoped>

</style>