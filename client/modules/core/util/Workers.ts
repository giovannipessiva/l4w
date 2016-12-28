/**
 * Module for launching background jobs
 */
namespace Workers {
    
    let worker;
   
    export function launch(data) {
        if("Worker" in window) {
            if(Utils.isEmpty(worker)) {
               worker = new Worker("js/l4w-worker.js"); 
            }
            worker.postMessage(data);
        }
    }
}