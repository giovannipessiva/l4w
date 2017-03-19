/**
 * Module for checking if user browser supports all the requirements
 */
namespace Compatibility {

    //TODO usa su https, per evitare errore "Bloccato il caricamento di contenuto misto attivo (mixed active content)"
//    const THIRDPARTY_COOKIE_CHECK_URL = "http://rpt.altervista.org/api/3rdpartycookiecheck/start.html";

    export function check() {
        canvas();
        serviceWorker();
        webWorker();
        thirdPartyCookies();
    }

    function canvas() {
        let elem = document.createElement("canvas");
        if (!(elem.getContext && elem.getContext("2d"))) {
            console.error("HTML5 canvas is not supported");
        }
    }
    
    function serviceWorker() {
        if (!("serviceWorker" in navigator)) {
            console.error("Service Workers are not supported");
        }
    }
    
    function webWorker() {
        if(!("Worker" in window)) {
            console.error("Web Workers are not supported");
        }
    }

    function thirdPartyCookies() {
//        let receiveMessage = function(event) {
//            if (event.data === "MM:3PCunsupported") {
//                console.error("Thid party cookies are not supported");
//            }
//        };
//        window.addEventListener("message", receiveMessage, false);
//
//        let iframe: HTMLIFrameElement = document.createElement("iframe");
//        iframe.src = THIRDPARTY_COOKIE_CHECK_URL;
//        iframe.style.display = "none";
//        document.body.appendChild(iframe);
    }
}
