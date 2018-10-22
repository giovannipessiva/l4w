import { AbstractGrid } from "../AbstractGrid"
import { IExtendedCell, IPoint } from "../../../../common/src/model/Commons"

/**
 * Module for input handling:
 * - keyboard
 * - mouse
 * - touch
 * - visibility change
 * - screen resize and rotation change
 */
export namespace Input {

    export class Keys {
        static UP = "38";
        static DOWN = "40";
        static LEFT = "37";
        static RIGHT = "39";
        static CTRL = "17";
        static ALT = "18";
        static ENTER = "13";
        static SPACE = "32";
        static CAPS = "20";
        static SHIFT = "16";
        static W = "87";
        static A = "65";
        static D = "68";
        static S = "83";
        static J = "74";
        static K = "75";
        static F1 = "112";
        static F2 = "113";
        static F3 = "114";
        static F4 = "115";
        static F5 = "116";
        static F6 = "117";
    }

    export class MouseButtons {
        static LEFT = 1;
        static RIGHT = 2;
        static MIDDLE = 4;
    }

    export interface IPositionCallback {
        (i: number | undefined, j: number | undefined, mouseButton?: number): void;
    };
    export interface IExactPositionCallback {
        (i: number, j: number, x: number, y: number, mouseButton?: number): void;
    };
    export interface IEventCallback {
        (): void;
    };
    export interface IKeyboardCallback {
        (e: KeyboardEvent): void;
    };

    //TODO togli questa schifezza e metti tanti metodo "onQualcosa"
    export function init(
        canvas: HTMLCanvasElement,
        grid: AbstractGrid,
        inputCallbacks: Map<string, Input.IKeyboardCallback>,
        resetCallback: IEventCallback,
        actionCallback: IExactPositionCallback,
        startActionCallback: IExactPositionCallback,
        endActionCallback: IPositionCallback,
        ongoingActionCallback: IPositionCallback,
        hoverCallback: IPositionCallback,
        pauseCallback: IEventCallback,
        unpauseCallback: IEventCallback,
        resizeCallback: IEventCallback,
        rightClickCallback: IPositionCallback,
        doubleClickCallback: IPositionCallback,
        wheelCallback: IPositionCallback) {

        let lastKey: number;
        let flagPause: boolean = false;
        
        // Always use SPACE for pause
        inputCallbacks[Keys.SPACE] = function(e: KeyboardEvent) {
            if (flagPause) {
                unpauseCallback();
                flagPause = false;
            } else {
                pauseCallback();
                flagPause = true;
            }
        };
        // Mouse events 
        let flagMouseDown: boolean = false;
        canvas.addEventListener("click", function(e: Event) {
            let precisePosition: IExtendedCell = mapEvent(<PointerEvent> e);
            actionCallback(precisePosition.i, precisePosition.j, precisePosition.x, precisePosition.y);
        });
        canvas.addEventListener("mousemove", function(e: Event) {
            let position = mapEvent(<PointerEvent> e);
            if (flagMouseDown) {
                ongoingActionCallback(position.i, position.j, (<PointerEvent> e).buttons);
            } else {
                hoverCallback(position.i, position.j);
            }
        });
        canvas.addEventListener("mousedown", function(e: Event) {
            flagMouseDown = true;
            let precisePosition = mapEvent(<PointerEvent> e);
            startActionCallback(precisePosition.i, precisePosition.j, precisePosition.x, precisePosition.y, (<PointerEvent> e).buttons);
        });
        canvas.addEventListener("mouseup", function(e: Event) {
            flagMouseDown = false;
            let position = mapEvent(<PointerEvent> e);
            endActionCallback(position.i, position.j, (<PointerEvent> e).buttons);
        });
        canvas.addEventListener("mouseout", function(e: Event) {
            if (flagMouseDown) {
                ongoingActionCallback(undefined, undefined, (<PointerEvent> e).buttons);
            } else {
                hoverCallback(undefined, undefined);
            }
        });
        canvas.addEventListener("contextmenu", function(e: Event) {
            e.preventDefault();
            let position = mapEvent(<PointerEvent> e);
            rightClickCallback(position.i, position.j);
        });
        canvas.addEventListener("dblclick", function(e: Event) {
            let position = mapEvent(<PointerEvent> e);
            doubleClickCallback(position.i, position.j);
        });
        canvas.addEventListener("wheel", function(e: Event) {
            let position = mapEvent(<PointerEvent> e);
            wheelCallback(position.i, position.j);
        });
        
        // Touch events
        canvas.addEventListener("touchstart", function(e: Event) {
            let position = mapEvent(<PointerEvent> e);
            startActionCallback(position.i, position.j, position.x, position.y);
        });
        canvas.addEventListener("touchend", function(e: Event) {
            let position = mapEvent(<PointerEvent> e);
            ongoingActionCallback(undefined, undefined);
            endActionCallback(position.i, position.j);

        });
        canvas.addEventListener("touchcancel", function(e: Event) {
            let position = mapEvent(<PointerEvent> e);
            ongoingActionCallback(undefined, undefined);
            endActionCallback(position.i, position.j);
        });
        canvas.addEventListener("touchmove", function(e: Event) {
            let position = mapEvent(<PointerEvent> e);
            ongoingActionCallback(position.i, position.j);
        });
        
        // Keyboard events
        document.addEventListener("keydown", function(e: Event) {
            let callback = inputCallbacks[String((<KeyboardEvent> e).keyCode)];
            if (callback !== undefined) {
                callback(e);
            }
            lastKey = (<KeyboardEvent> e).keyCode;
        });
        document.addEventListener("keyup", function(e: Event) {
            if ((<KeyboardEvent> e).keyCode === lastKey) {
                resetCallback();
            }
        });
        
        // Visibility events
        document.addEventListener("visibilitychange", function() {
            if (document.hidden) {
                pauseCallback();
                flagPause = true;
            } else {
                unpauseCallback();
                flagPause = false;
            }
        });
        
        // Screen change events
        window.addEventListener("resize", function(e) {
            resizeCallback();
        });
        document.addEventListener("orientationchange", function() {
            resizeCallback();
        });

        function mapEvent(e: PointerEvent): IExtendedCell {
            let position: IPoint = {
                x: e.clientX,
                y: e.clientY
            };
            return grid.mapPositionToGrid(position);
        }

    };
}
