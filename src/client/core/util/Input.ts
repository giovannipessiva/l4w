import { IExtendedCell, IPoint, IEmptyCallback } from "../../../common/Commons";
import { AbstractGrid } from "../AbstractGrid";

/**
 * Module for input handling:
 * - keyboard
 * - mouse
 * - touch
 * - visibility change
 * - screen resize and rotation change
 */
export namespace Input {

    let disableActionCallback = false;
    let onActionCallbacks: IEmptyCallback[] = [];

    export class Keys {
        static UP = "ArrowUp";
        static DOWN = "ArrowDown";
        static LEFT = "ArrowLeft";
        static RIGHT = "ArrowRight";
        static CTRL = "Control";
        static ALT = "Alt";
        static ENTER = "Enter";
        static SPACEBAR = " ";
        static CAPS = "CapsLock";
        static SHIFT = "Shift";
        static W = "w";
        static A = "a";
        static D = "d";
        static S = "s";
        static P = "p";
        static F1 = "F1";
        static F2 = "F2";
        static F3 = "F3";
        static F4 = "F4";
        static F5 = "F5";
        static F6 = "F6";
        static N_0 = "0";
        static N_1 = "1";
        static N_2 = "2";
        static N_3 = "3";
        static N_4 = "4";
        static N_5 = "5";
        static N_6 = "6";
        static N_7 = "7";
        static N_8 = "8";
        static N_9 = "9";    
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

        let lastKey: string;
        let flagPause: boolean = false;
        
        // Always use P for pause
        inputCallbacks[Keys.P] = function(e: KeyboardEvent) {
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
            if(!disableActionCallback) {
                actionCallback(precisePosition.i, precisePosition.j, precisePosition.x, precisePosition.y);
            }
            executeActionCallback();
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
            executeActionCallback();
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
        }, {passive: true});
        
        // Touch events
        canvas.addEventListener("touchstart", function(e: Event) {
            let position = mapEvent(<PointerEvent> e);
            startActionCallback(position.i, position.j, position.x, position.y);
            executeActionCallback();
        }, {passive: true});
        canvas.addEventListener("touchend", function(e: Event) {
            let position = mapEvent(<PointerEvent> e);
            ongoingActionCallback(undefined, undefined);
            endActionCallback(position.i, position.j);

        }, {passive: true});
        canvas.addEventListener("touchcancel", function(e: Event) {
            let position = mapEvent(<PointerEvent> e);
            ongoingActionCallback(undefined, undefined);
            endActionCallback(position.i, position.j);
        }, {passive: true});
        canvas.addEventListener("touchmove", function(e: Event) {
            let position = mapEvent(<PointerEvent> e);
            ongoingActionCallback(position.i, position.j);
        }, {passive: true});
        
        // Keyboard events
        document.addEventListener("keydown", function(e: KeyboardEvent) {
            let callback = inputCallbacks[e.key];
            if (callback !== undefined) {
                callback(e);
            }
            if(e.key === Input.Keys.SPACEBAR) {
                executeActionCallback();
                e.preventDefault();
            }
            lastKey = e.key;
        });
        document.addEventListener("keyup", function(e: KeyboardEvent) {
            if (e.key === lastKey) {
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

    /**
     * Escape HTML special chars to avoid script injection
     */
    export function escapeText(unsafe: string): string {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /**
     * Register a callback which will be called
     * only once on next user action (click, touch, spacebar)
     */
    export function addActionCallback(callback: IEmptyCallback) {
        onActionCallbacks.push(callback);
    }

    function executeActionCallback() {
        for(let callback of onActionCallbacks) {
            try {
                callback();
            } catch (e) {
                console.error("Error executing onAction callback:");
                console.error(e);
            }
        }
        onActionCallbacks = [];
    }

    export function disableActionEvents() {
        disableActionCallback = true;
    }
    export function enableActionEvents() {
        disableActionCallback = false;
    }
}

let numericKeyListeners: Input.IKeyboardCallback[] = [];

export function resetNumericKeyListener() {
    for(let listener of numericKeyListeners) {
        document.removeEventListener("keydown", listener);
    }
    numericKeyListeners = [];
}

/**
 * Register a new listener for key press of a specific number.
 * Whenevet that key is pressed, all the numeric listeners are removed
 */
export function registerNumericKeyListener(n: number, callback: Input.IKeyboardCallback) {
    let key: String;
    switch(n) {
        case 0: key = Input.Keys.N_0; break;
        case 1: key = Input.Keys.N_1; break;
        case 2: key = Input.Keys.N_2; break;
        case 3: key = Input.Keys.N_3; break;
        case 4: key = Input.Keys.N_4; break;
        case 5: key = Input.Keys.N_5; break;
        case 6: key = Input.Keys.N_6; break;
        case 7: key = Input.Keys.N_7; break;
        case 8: key = Input.Keys.N_8; break;
        case 9: key = Input.Keys.N_9; break;
        default:
            console.error("Unexpected numericKey: " + n);
            return; 
    }
    let listener = function(e: KeyboardEvent) {
        if(e.key === key) {
            callback(e);
            resetNumericKeyListener();
        }
    };
    numericKeyListeners.push(listener);
    document.addEventListener("keydown", listener);
}

