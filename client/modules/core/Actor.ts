/// <reference path="World.ts" />
  
/**
 * Module to handle an event
 */
module Actor {

    export class Event {

        private state: number;
        private x: number;
        private y: number;

        private states: EventState[];

        constructor() {
            this.states = [];
            this.states.push(new EventState(this));
            this.state = 0;
        }

        update(events: Event[], map: World.Location, time: number) {
            this.states[this.state].update(events, map, time);
        }

        render(x: number, y: number) {
            this.states[this.state].render(x, y);
        }

    };

    class EventState {

        private event: Event;

        constructor(event: Event) {
            this.event = event;
        }

        update(events: Event[], map: World.Location, time: number) {
            //TODO update EventState
        }

        render(x: number, y: number) {
            //TODO render EventState
        }
    }
}