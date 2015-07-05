/// <reference path="World.ts" />
  
 /**
 * Module to handle an event
 */
module Actor {

    export class Event {
        
        private state: number = 0;
        private x: number;
        private y: number;
        
        private states: [EventState];
        
        update(events: [Event],map: World.Map,time: number) {
            this.states[this.state].update(events,map,time);
        }
        
        render(x: number, y: number) {
            this.states[this.state].render(x,y);
        }

    };

    class EventState {
        
        private event: Event;
        
        constructor(event: Event) {
           this.event=event; 
        }
        
        update(events: [Event],map: World.Map,time: number) {
            //TODO update EventState
        } 
        
        render(x: number, y: number) {
            //TODO render EventState
        }
    }
}