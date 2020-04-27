import { Compatibility } from "./Compatibility"
import { Utils } from "../../../common/Utils"

/**
 * Module for managing background jobs and services
 */
export namespace Workers {
    
    export const WEBWORKER_URL: string = "workers/l4w-webworker.js";
    export const SERVICEWORKER_URL: string = "workers/l4w-serviceworker.js";
    export const SERVICEWORKER_OPTIONS = {
        scope: "../"
    };
    
    let worker: Worker;
   
    export function launchWebWorker(data: any) {
        if(Compatibility.webWorker()) {
            if(Utils.isEmpty(worker)) {
               worker = new Worker(WEBWORKER_URL); 
            }
            worker.postMessage(data);
        }
    }
        
    export function registerServiceWorker() {
        if(Compatibility.serviceWorker()) {
            navigator.serviceWorker.register(Workers.SERVICEWORKER_URL, Workers.SERVICEWORKER_OPTIONS).then(function(registration) {
                // ServiceWorker registration successful
            }, function(err) {
                console.warn("ServiceWorker registration failed: ", err);
            });
        }
    }
}