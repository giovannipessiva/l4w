/// <reference path="../core/Scene.ts" />

module Scene {

    /*
     * Scene implementation for managing static rendering
     */
    export class StaticScene extends AbstractScene {

        constructor() {
            super();
        }

        protected mainGameLoop_pre() {
            if (!super.mainGameLoop_pre()) {
                return false;
            }

            return true;
        }

        protected mainGameLoop_post() {
            super.mainGameLoop_post();
        }
        
        toggleEditorGrid(enable?: boolean) {
            if (enable != null) {
                this.renderingOptions.showEditorGrid = enable;
            } else {
                this.renderingOptions.showEditorGrid = !this.renderingOptions.showEditorGrid;
            }
        }

    }
}