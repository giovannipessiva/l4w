export var constants;
(function (constants) {
    let event;
    (function (event) {
        event[event["WELCOME"] = 1] = "WELCOME";
    })(event = constants.event || (constants.event = {}));
    let role;
    (function (role) {
        role[role["MAPPER"] = 1] = "MAPPER";
    })(role = constants.role || (constants.role = {}));
})(constants || (constants = {}));
;
