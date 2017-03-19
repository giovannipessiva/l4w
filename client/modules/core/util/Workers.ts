/// <reference path="../../interfaces/service-worker.d.ts" />

/**
 * Module for managing background jobs and services
 */
namespace Workers {
    
    export const WEBWORKER_URL: string = "workers/l4w-webworker.js";
    export const SERVICEWORKER_URL: string = "workers/l4w-serviceworker.js";
    export const SERVICEWORKER_OPTIONS: ServiceWorkerRegistrationOptions = {
        scope: "../"
    };
    
    let worker;
   
    export function launchWebWorker(data) {
        if("Worker" in window) {
            if(Utils.isEmpty(worker)) {
               worker = new Worker(WEBWORKER_URL); 
            }
            worker.postMessage(data);
        }
    }
        
    export function registerServiceWorker() {
        // Register service worker
        navigator.serviceWorker.register(Workers.SERVICEWORKER_URL, Workers.SERVICEWORKER_OPTIONS).then(function(registration) {
            // ServiceWorker registration successful
        }, function(err) {
            console.warn("ServiceWorker registration failed: ", err);
        });
    }
}