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
            <label for="checkbox">Blocked</label>
            <input type="checkbox" id="checkbox" v-model="autotileset.blocked" v-on:click="modified = true;" /><br>
            
            <div v-if="autotileset.frequency === undefined">
                <button v-on:click="animate(autotileset)">Animate</button>
            </div>
            <div v-else>
                <label for="frequency">Animation speed</label>
                <input type="range" id="frequency" v-model="autotileset.frequency" v-on:click="modified = true;" :min="minFrequency" :max="maxFrequency" step="1" /><br>
            </div>

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
import { ScaleEnum } from "../../common/Commons";

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
        modified: boolean,
        minFrequency: number,
        maxFrequency: number
    } {
        return {
            warning: "",
            autotilesets: [ DataDefaults.getAutoTileset() ],
            pageTitle: document.title,
            modified: false,
            minFrequency: ScaleEnum.VERY_LOW,
            maxFrequency: ScaleEnum.VERY_HIGH
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
                    Vue.set(this, "autotilesets",  new Array());
                    for(let autotileImage of autotileImages) {
                        this.autotilesets.push({
                            image: autotileImage,
                            blocked: false
                        });
                    }
                    // Load autotiles data
                    Resource.load("autotilesets", ResourceType.AUTOTILESET, (response) => {
                        if(response === undefined || typeof response !== "string") {
                            console.warn("Non parsable autotileset data: " + response);
                            return;
                        }
                        let autotilesetsData: IAutoTileset[] = JSON.parse(response);
                        for(let autotileset of this.autotilesets) {
                            for(let autotilesetData of autotilesetsData) {
                                if(autotilesetData.image === autotileset.image) {
                                    // Restore data
                                    autotileset.blocked = autotilesetData.blocked;
                                    autotileset.frequency = autotilesetData.frequency;
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
            Resource.save("autotilesets", JSON.stringify(this.$data.autotilesets), ResourceType.AUTOTILESET, (response, result) => {
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
        },
        animate(autotile: IAutoTileset) {
            Vue.set(autotile, "frequency", ScaleEnum.MEDIUM);
            this.changeEditState(true);
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