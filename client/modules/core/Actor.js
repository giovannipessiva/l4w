var Actor;
(function (Actor) {
    var Event = (function () {
        function Event() {
            this.state = 0;
        }
        Event.prototype.update = function (events, map, time) {
            this.states[this.state].update(events, map, time);
        };
        Event.prototype.render = function (x, y) {
            this.states[this.state].render(x, y);
        };
        return Event;
    })();
    Actor.Event = Event;
    ;
    var EventState = (function () {
        function EventState(event) {
            this.event = event;
        }
        EventState.prototype.update = function (events, map, time) {
        };
        EventState.prototype.render = function (x, y) {
        };
        return EventState;
    })();
})(Actor || (Actor = {}));
