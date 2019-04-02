/**
 * Module for checking if user browser supports all the requirements
 */
export namespace Compatibility {

    export function check() {
        // Mandatory
        canvas();

        // Optionals
        serviceWorker();
        webWorker();
        webSpeech();
        passiveEventListeners();
    }

    function canvas(): boolean {
        let elem = document.createElement("canvas");
        if (!(elem.getContext && elem.getContext("2d"))) {
            console.error("HTML5 canvas is not supported");
            return false;
        }
        return true;
    }
    
    export function serviceWorker(): boolean {
        if (!("serviceWorker" in navigator)) {
            console.error("Service Workers are not supported");
            return false;
        }
        return true;
    }
    
    export function webWorker(): boolean {
        if(!("Worker" in window)) {
            console.error("Web Workers are not supported");
            return false;
        }
        return true;
    }
    
    function webSpeech(): boolean {
        if(!("SpeechSynthesisUtterance" in window)) {
            console.error("Web Speech API are not supported");
            return false;
        }
        return true;
    }

    /**
     * https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
     */
    export function passiveEventListeners(): boolean {
        // Test via a getter in the options object to see if the passive property is accessed
        let supportsPassive = false;
        try {
            let opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassive = true;
                }
            });
            window.addEventListener("testPassive", null!, opts);
            window.removeEventListener("testPassive", null!, opts);
        } catch (e) {}
        return supportsPassive;
    }
}
