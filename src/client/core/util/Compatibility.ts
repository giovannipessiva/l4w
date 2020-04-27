/**
 * Module for checking if user browser supports all the requirements
 */
export namespace Compatibility {

    /**
     * Check support for mandatory functionalities
     */
    export function check() {
        canvas();
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
        if (navigator.serviceWorker === undefined) {
            console.warn("Service Workers are not supported");
            return false;
        }

        // To make service workers registration work with local self-signed certificates,
        // it is necessary to use the 127.0.0.1 address, which is considered to be
        // a potentially trustworthy origin (localhost won't work)
        if(location.hostname === "localhost" || location.protocol === "https") {
            console.warn("Service Workers won't work when using local self-signed certificates. This could be fixed by trusting them, or using browser flags.");
            return false;
        }

        return true;
    }
    
    export function webWorker(): boolean {
        if(window.Worker === undefined) {
            console.warn("Web Workers are not supported");
            return false;
        }
        return true;
    }
    
    export function webSpeech(): boolean {
        if(window.SpeechSynthesisUtterance === undefined) {
            console.warn("Web Speech API are not supported");
            return false;
        }
        return true;
    }
}
