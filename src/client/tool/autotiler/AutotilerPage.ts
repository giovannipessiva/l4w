import Vue from "vue"

import AutotileEditorComponent from "../../components/AutotileEditor.vue"

export namespace AutotilerPage {

    export function start() {
        new Vue({
            el: "#autotileEditorVue",
            components: {
                "autotile-editor": AutotileEditorComponent,
            }
        });
    }
}