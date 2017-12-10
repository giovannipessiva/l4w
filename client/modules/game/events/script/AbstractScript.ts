namespace Script {

    export abstract class AbstractScript {
        
        protected e: IEvent;
        
        AbstractScript(event: IEvent) {
            this.e = event;    
        }
    
        protected dialog(message: string) {
            console.log(this.e.name + "> " + message); 
        }
    }
    
}