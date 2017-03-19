/**
 * Module for launching background jobs
 */
namespace Workers {
    
    export const WORKER_URL = "js/l4w-worker.js";
    
    let worker;
   
    export function launch(data) {
        if("Worker" in window) {
            if(Utils.isEmpty(worker)) {
               worker = new Worker(WORKER_URL); 
            }
            worker.postMessage(data);
        }
    }
}