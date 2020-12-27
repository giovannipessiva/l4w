<template>
    <div class="container">
        <div v-bind:class="{ selected: autotile.selected, autotile: true }" v-for="autotile in autotiles" v-bind:key="autotile.image" v-on:click="select(autotile)">
            <img :src="'../assets/autotile/' + autotile.image" />
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue"

import { IAutoTileset } from "../../common/model/Tileset";
import { DataDefaults } from "../../common/DataDefaults";
import { Resource } from "../core/util/Resource";
import { ResourceType } from "../../common/Constants";
import { TilePicker } from "../tool/mapper/TilePicker";
import { Mapper } from "../tool/mapper/Mapper";

export default Vue.extend({
    name: "autotile-picker",
    data: function(): {
        autotiles: IAutoTileset[]
    } {
        return {
            autotiles: [ DataDefaults.getAutoTileset() ]
        };
    },
    mounted: function() {
        // Register custom event listener
        this.$root.$on("cancel-selection", this.cancelSelection)

        // Load autotiles
        Resource.listResources(ResourceType.AUTOTILE, (autotileImages) => {
            if(autotileImages !== undefined && autotileImages.length > 0) {
                // Initialize IAutotiles array
                Vue.set(this, "autotiles",  new Array());
                for(let autotileImage of autotileImages) {
                    this.autotiles.push({
                        blocked: false,
                        image: autotileImage
                    });
                }
            }
        });
    },
    methods: {
        select(autotile: IAutoTileset) {
            TilePicker.cancelSelection();
            for(let at of this.autotiles) {
                let selected = at.image === autotile.image;
                Vue.set(at, "selected", selected);
            }
            Mapper.onAutotileSelection(autotile.image);
        },
        cancelSelection() {
            TilePicker.cancelSelection();
            for(let at of this.autotiles) {
                Vue.set(at, "selected", false);
            }
            Mapper.onAutotileSelection(undefined);
        }
    }
});
</script>
<style scoped>
.container {
    overflow: auto;
}
.autotile {
    width: 32px;
    height: 32px;
    overflow: hidden;
    float:left;
    background-color: yellow;
    border:1px solid gray;
}
.autotile img {
    margin: 0 0 0 -64px;
}
.autotile img:hover {
    opacity: 0.5;
}
.selected {
    border-color: red !important;
}
</style>