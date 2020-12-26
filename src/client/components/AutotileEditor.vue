<template>
    <div>
        <div id="loginVue" style="background-color:white;float:right;position:relative;width:256px;border:1px solid black">
            <login>
                <template v-slot:logged>
                    <table>
                        <tr>
                        <td><button id="saveButton" type="button" v-on:click="save()" :disabled="!modified">Save</button></td>
                        <td><button id="reloadButton" type="button" v-on:click="loadAutotiles()" :disabled="!modified">Reload</button></td>
                        </tr>
                    </table>
                </template>
            </login>
        </div>

        <div class="warning">{{ warning }}</div>

        <div class="autotile" v-for="autotileset in autotilesets" v-bind:key="autotileset.image">
            Blocked <input type="checkbox" v-bind="autotileset.blocked" v-on:click="modified = true;" /><br>
            <img :src="'../assets/autotile/' + autotileset.image" /><br>
            <i>{{ autotileset.image }}</i>
        </div>

        <div style="clear:both" />
    </div>
</template>
<script lang="ts">
import Vue from "vue"

import { DataDefaults } from "../../common/DataDefaults";
import { ResourceType } from "../../common/Constants";
import { IAutoTileset } from "../../common/model/Tileset"
import { Resource } from "../core/util/Resource";
import LoginComponent from "./Login.vue"

export default Vue.extend({
    name: "autotile-editor",
    components: {
        "login": LoginComponent
    },
    data: function (): {
        warning: string,
        autotilesets: IAutoTileset[],
        pageTitle: string,
        modified: boolean
    } {
        return {
            warning: "",
            autotilesets: [ DataDefaults.getAutoTileset() ],
            pageTitle: document.title,
            modified: false
        };
    },
    mounted: function() {
        this.loadAutotiles();
    },
    methods: {
        loadAutotiles() {
            // Load autotiles
            Resource.listResources(ResourceType.AUTOTILE, (autotileImages) => {
                if(autotileImages === undefined || autotileImages.length === 0) {
                    this.warning = "No autotile asset available";
                } else {
                    // Initialize IAutotiles array
                    this.autotilesets = [];
                    for(let autotileImage of autotileImages) {
                        this.autotilesets.push({
                            image: autotileImage,
                            blocked: false
                        });
                    }
                    // Load autotiles data
                    Resource.load("-", ResourceType.AUTOTILESET, (response) => {
                        if(response === undefined || typeof response !== "string") {
                            console.warn("Non parsable autotileset data: " + response);
                            return;
                        }
                        let autotilesetsData: IAutoTileset[] = JSON.parse(response);
                        for(let autotileset of this.autotilesets) {
                            autotileset.blocked = false;
                            for(let autotilesetData of autotilesetsData) {
                                if(autotilesetData.image === autotileset.image) {
                                    // Restore data
                                    autotileset.blocked = autotilesetData.blocked;
                                    break;
                                }
                            }
                        }
                        this.changeEditState(false);
                    });
                }
            });
        },
        save() {
            Resource.save("-", JSON.stringify(this.$data.autotilesets), ResourceType.AUTOTILESET, (response, result) => {
                if(result) {
                    this.changeEditState(false);
                } else {
                    console.error("Autotile saving failed: " + response);
                }
            });
        },
        changeEditState(modified: boolean) {
            if (modified) {
                document.title = this.pageTitle + "*";
            } else {
                document.title = this.pageTitle;
            }
            this.modified = modified;
        }
    }
})
</script>
<style scoped>
.autotile{
    margin: 0.5em;
    float: left;
    border: 1px solid black;
}
.warning{
    text-shadow: 2px 2px yellow;
}
</style>