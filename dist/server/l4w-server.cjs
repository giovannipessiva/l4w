/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("compression");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("https");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENT_STATE_VAR": () => (/* binding */ EVENT_STATE_VAR),
/* harmony export */   "HttpStatus": () => (/* binding */ HttpStatus),
/* harmony export */   "HttpResponseHeader": () => (/* binding */ HttpResponseHeader),
/* harmony export */   "ResourceType": () => (/* binding */ ResourceType)
/* harmony export */ });
const EVENT_STATE_VAR = "state";
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatus[HttpStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["REQUEST_TOO_LONG"] = 413] = "REQUEST_TOO_LONG";
    HttpStatus[HttpStatus["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatus[HttpStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
})(HttpStatus || (HttpStatus = {}));
var HttpResponseHeader;
(function (HttpResponseHeader) {
    HttpResponseHeader["LOCATION"] = "Location";
})(HttpResponseHeader || (HttpResponseHeader = {}));
var ResourceType;
(function (ResourceType) {
    // Assets (graphic/audio resources)
    ResourceType["AUTOTILE"] = "autotile";
    ResourceType["CHAR"] = "charset";
    ResourceType["FACE"] = "faceset";
    ResourceType["FAVICON"] = "favicon";
    ResourceType["SKIN"] = "skin";
    ResourceType["TILE"] = "tile";
    ResourceType["PICTURE"] = "picture";
    ResourceType["POINTER"] = "pointer";
    // Static data (game data that cannot change during gameplay)
    ResourceType["AUTOTILESET"] = "autotileset";
    ResourceType["MAP"] = "map";
    ResourceType["TREE"] = "tree";
    ResourceType["STRING"] = "string";
    ResourceType["TILESET"] = "tileset";
    ResourceType["DIALOG"] = "dialog";
    ResourceType["GENERIC_MESSAGE"] = "generic-message";
    ResourceType["CONFIGURATION"] = "configuration";
    // Dynamic data (user-bound data that can change during gameplay)
    ResourceType["SAVE"] = "save";
})(ResourceType || (ResourceType = {}));


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils),
/* harmony export */   "enumFromValue": () => (/* binding */ enumFromValue),
/* harmony export */   "trace": () => (/* binding */ trace)
/* harmony export */ });
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

var Utils;
(function (Utils) {
    function isEmpty(obj) {
        if (obj === undefined || obj === null || typeof obj === "undefined") {
            return true;
        }
        else if (typeof obj === "string") {
            return obj === "";
        }
        else if (typeof obj === "object" && "size" in obj) {
            return obj.size === 0;
        }
        else if (obj.constructor === Array || obj.constructor === String) {
            return obj.length === 0;
        }
        else if (obj.constructor === Object && Object.keys(obj).length === 0) {
            return true;
        }
        return false;
    }
    Utils.isEmpty = isEmpty;
    /**
     * Unit test for the Utils.isEmpty method
     */
    function unitTestIsEmpty() {
        // ES6 map
        let test = new Map();
        console.assert(isEmpty(test), "empty ES6 map");
        test.set("a", "a");
        console.assert(!isEmpty(test), "not empty ES6 map");
        test.delete("a");
        console.assert(isEmpty(test), "empty ES6 map (deleted key)");
        // array
        test = [];
        console.assert(isEmpty(test), "empty array");
        test[0] = 1;
        console.assert(!isEmpty(test), "not empty array");
        // Array
        test = new Array();
        console.assert(isEmpty(test), "empty Array");
        test = test.push("1");
        console.assert(!isEmpty(test), "not empty Array");
        // string
        test = "";
        console.assert(isEmpty(test), "empty string");
        test = "a";
        console.assert(!isEmpty(test), "not empty string");
        // Object
        test = new Object();
        console.assert(isEmpty(test), "empty Object");
        test["a"] = 1;
        console.assert(!isEmpty(test), "not empty Object");
        delete test["a"];
        console.assert(isEmpty(test), "empty Object (deleted property)");
        // {}
        test = {};
        console.assert(isEmpty(test), "empty {}");
        test["a"] = 1;
        console.assert(!isEmpty(test), "not empty {}");
        delete test["a"];
        console.assert(isEmpty(test), "empty {} (deleted property)");
        // basic types
        console.assert(!isEmpty(true), "not empty boolean (true)");
        console.assert(!isEmpty(false), "not empty boolean (false)");
        console.assert(!isEmpty(0), "not empty number");
        console.assert(!isEmpty(0.0), "not empty float");
    }
    Utils.unitTestIsEmpty = unitTestIsEmpty;
    function mergeMaps(primary, secondary) {
        var newMap = new Map();
        function addToNewMap(value, index, map) {
            newMap.set(index, value);
        }
        secondary.forEach(addToNewMap);
        primary.forEach(addToNewMap);
        return newMap;
    }
    Utils.mergeMaps = mergeMaps;
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    Utils.isNumeric = isNumeric;
    Utils.convertStringToEnum = function (enumObj, value) {
        return enumObj[Object.keys(enumObj).filter(k => enumObj[k] === value)[0]];
    };
    const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";
    function getRandomString(length) {
        if (length === undefined) {
            length = 8;
        }
        return [...Array(length)].map(_ => CHARS[~~(Math.random() * CHARS.length)]).join("");
    }
    Utils.getRandomString = getRandomString;
    function now() {
        return (new Date()).getTime();
    }
    Utils.now = now;
})(Utils || (Utils = {}));
/**
 * Convert the value of a String enum to the enum object
 */
const enumFromValue = (_enum, val) => {
    const enumName = Object.keys(_enum).find(k => _enum[k] === val);
    if (!enumName || val === undefined) {
        return undefined;
    }
    else {
        return _enum[enumName];
    }
};
let lastTracedTimestamp = new Date().getTime();
/**
 * Logs the message if a certain delay has passed from last call
 *
 * @param message Leave undefined for start counting time
 */
function trace(message) {
    if (_GameConfig__WEBPACK_IMPORTED_MODULE_0__.gameConfig.development.tracing.enabled) {
        let newTimestamp = new Date().getTime();
        if (message !== undefined) {
            let delta = newTimestamp - lastTracedTimestamp;
            if (delta >= _GameConfig__WEBPACK_IMPORTED_MODULE_0__.gameConfig.development.tracing.threshold) {
                console.log(" (+ " + delta + ")\t" + message);
            }
        }
        lastTracedTimestamp = newTimestamp;
    }
}


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameConfig": () => (/* binding */ gameConfig)
/* harmony export */ });
/* harmony import */ var _Commons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

//TODO migrate here values from l4w.properties
/**
 * Contains game configuration variables.
 * This should be customized according to the needs of the specific game.
 *
 * Having these constant values in the code instead of a resource file
 * is preferrable in order to enable compiler optimizations.
 * (Is it? Perhaps... may be true for numerical and boolean values...)
 *
 * This is ok as long as there is no need for:
 * - different profiles for the same fork/branch
 * - changing config wihtout running the build
 * - conformity to universally recognized best practices
 */
const gameConfig = {
    maps: {
        /**
         * Starting position in the game
         */
        start: {
            map: "0",
            i: 2,
            j: 4 // position i of the hero
        }
    },
    hero: {
        /**
         * Default name of the hero
         */
        name: "Fart",
        /**
         * Starting charaset of the hero
         * Other charasets can be placed in: /assets/charaset/
         */
        charaset: "fart.png"
    },
    ui: {
        /**
         * Default language of the game.
         * Every text string defined using the editors (such as dialog messages) will be considered to be expressed in this language.
         * Additional supported languages can be added by manually creating a customized clone file here: /data/lang/
         * The default language will be used as fallback whenever a string is not available in another supported language;
         * so while default language file should cointains every possible text strings, files for additional languages can omit them.
         * This can also be used for stuff like: profanity-free language options
         */
        lang: _Commons__WEBPACK_IMPORTED_MODULE_0__.LanguageEnum.EN,
        /**
         * Default game UI skin.
         * Other skins can be placed in: /assets/skin/
         */
        skin: "ld3-webskin1.png",
        /**
         * Enable or disable L4W command line interface
         */
        enableCLI: true,
        mapper: {
            scales: [0.2, 0.4, 0.6, 0.94]
        }
    },
    services: {
        facebook: {
            url: "https://graph.facebook.com",
            applicationId: "1885551381575204"
        },
        google: {
            oauth: {
                url: "https://www.googleapis.com",
                applicationId: "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com"
            },
            recaptcha: {
                url: "www.google.com",
            }
        },
        github: {
            url: "api.github.com"
        }
    },
    development: {
        tracing: {
            enabled: true,
            threshold: 800
        }
    }
};


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockDirection": () => (/* binding */ BlockDirection),
/* harmony export */   "CardinalDirection": () => (/* binding */ CardinalDirection),
/* harmony export */   "CardinalDirections": () => (/* binding */ CardinalDirections),
/* harmony export */   "LanguageEnum": () => (/* binding */ LanguageEnum),
/* harmony export */   "PathfinderEnum": () => (/* binding */ PathfinderEnum)
/* harmony export */ });
;
;
;
;
;
;
;
;
/**
 * Set of constants that can be summed in a single number
 * to represent which of the four directions are blocked
 */
class BlockDirection {
    static NONE = 0;
    static UP = Math.pow(2, 0);
    static DOWN = Math.pow(2, 1);
    static LEFT = Math.pow(2, 2);
    static RIGHT = Math.pow(2, 3);
    static ALL = BlockDirection.UP + BlockDirection.DOWN + BlockDirection.LEFT + BlockDirection.RIGHT;
}
;
/**
 * Set of constants that can be summed in a single number
 * to represent a boolean state for each of the 8 adiacent cells
 */
class CardinalDirection {
    static NONE = 0;
    static N = Math.pow(2, 0);
    static S = Math.pow(2, 1);
    static W = Math.pow(2, 2);
    static E = Math.pow(2, 3);
    static NE = Math.pow(2, 4);
    static SE = Math.pow(2, 5);
    static SW = Math.pow(2, 6);
    static NW = Math.pow(2, 7);
    static ALL = Math.pow(2, 8) - 1;
}
;
let CardinalDirections = [CardinalDirection.N, CardinalDirection.NE, CardinalDirection.E, CardinalDirection.SE, CardinalDirection.S, CardinalDirection.SW, CardinalDirection.W, CardinalDirection.NW];
;
;
;
var LanguageEnum;
(function (LanguageEnum) {
    LanguageEnum["IT"] = "it";
    LanguageEnum["EN"] = "en";
})(LanguageEnum || (LanguageEnum = {}));
var PathfinderEnum;
(function (PathfinderEnum) {
    PathfinderEnum[PathfinderEnum["BASIC"] = 0] = "BASIC";
    PathfinderEnum[PathfinderEnum["D_STAR_LITE"] = 1] = "D_STAR_LITE";
})(PathfinderEnum || (PathfinderEnum = {}));
;
;
;
;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "session": () => (/* binding */ session)
/* harmony export */ });
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connect_session_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var connect_session_sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connect_session_sequelize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _common_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
//@ts-ignore


//@ts-ignore

let SequelizeStoreConstructor = connect_session_sequelize__WEBPACK_IMPORTED_MODULE_1___default()(express_session__WEBPACK_IMPORTED_MODULE_0__.Store);





var session;
(function (session) {
    session.cookieName = "l4w.session";
    function init() {
        let secret = process.env.SESSION_SECRET;
        let store = new SequelizeStoreConstructor({
            db: _models_index__WEBPACK_IMPORTED_MODULE_4__.sequelizeInstance,
            tableName: "usr_session"
        });
        // Call sync in order to generate the ${tableName} table
        store.sync();
        let sessionOptions = {
            cookie: _security__WEBPACK_IMPORTED_MODULE_2__.security.getCookieSettings(),
            name: session.cookieName,
            proxy: true,
            resave: false,
            saveUninitialized: true,
            secret: secret,
            store: store
        };
        return express_session__WEBPACK_IMPORTED_MODULE_0___default()(sessionOptions);
    }
    session.init = init;
    function getUser(request) {
        if (request === undefined || request.session === undefined || _common_Utils__WEBPACK_IMPORTED_MODULE_6__.Utils.isEmpty(request.session.user)) {
            if (_security__WEBPACK_IMPORTED_MODULE_2__.security.isAuthenticationDisabled()) {
                // Nel caso l'autenticazione sia disabilitata, forza l'utente 0
                return "0";
            }
            return undefined;
        }
        return request.session.user;
    }
    session.getUser = getUser;
    function setUser(request, user) {
        return request.session.user = user;
    }
    session.setUser = setUser;
    function isAuthenticated(request) {
        if (_security__WEBPACK_IMPORTED_MODULE_2__.security.isAuthenticationDisabled()) {
            return true;
        }
        return !_common_Utils__WEBPACK_IMPORTED_MODULE_6__.Utils.isEmpty(getUser(request));
    }
    session.isAuthenticated = isAuthenticated;
    function doLogin(request, response, onSuccess, onFailure) {
        if (!session.isAuthenticated(request)) {
            // No valid session, use post data to authenticate user
            _security__WEBPACK_IMPORTED_MODULE_2__.security.getBodyData(request, response, function (data) {
                if (!_common_Utils__WEBPACK_IMPORTED_MODULE_6__.Utils.isEmpty(data)) {
                    let authRequest;
                    try {
                        authRequest = JSON.parse(data);
                    }
                    catch (e) {
                        console.error("Cannot parse body: ");
                        console.error(data);
                        onFailure();
                        return;
                    }
                    let successCallback = function (email) {
                        _database__WEBPACK_IMPORTED_MODULE_5__.database.doUserLogin(email, request, response);
                        onSuccess();
                    };
                    let errorCallback = function () {
                        doLogout(request, response, onFailure);
                    };
                    if (authRequest.service === "google") {
                        _services__WEBPACK_IMPORTED_MODULE_3__.services.validateGoogleToken(request, response, successCallback, errorCallback, authRequest.token);
                    }
                    else if (authRequest.service === "facebook") {
                        _services__WEBPACK_IMPORTED_MODULE_3__.services.validateFacebookToken(request, response, successCallback, errorCallback, authRequest.token, authRequest.userId);
                    }
                    else {
                        console.error("Unexpected auth service:" + authRequest.service);
                        onFailure();
                    }
                }
                else {
                    onFailure();
                }
            });
        }
        else {
            // Valid session found
            _database__WEBPACK_IMPORTED_MODULE_5__.database.logAccess(getUser(request));
            onSuccess();
        }
    }
    session.doLogin = doLogin;
    function doLogout(request, response, callback) {
        response.clearCookie(session.cookieName, { path: "/" });
        if (request.session !== undefined) {
            request.session.destroy(function () {
                if (request.session !== undefined) {
                    console.warn("Session is not undefined after destroy, is this ok?");
                }
                callback();
            });
        }
        else {
            callback();
        }
    }
    session.doLogout = doLogout;
})(session || (session = {}));


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("connect-session-sequelize");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "security": () => (/* binding */ security),
/* harmony export */   "isDevEnv": () => (/* binding */ isDevEnv),
/* harmony export */   "useSSLDatabaseConnection": () => (/* binding */ useSSLDatabaseConnection)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _common_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _common_GameConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
//@ts-ignore

const { hash } = (bcryptjs__WEBPACK_IMPORTED_MODULE_0___default());





var security;
(function (security) {
    function isAuthenticationDisabled() {
        return isDevEnv() && "true" === process.env.DISABLE_AUTHENTICATION;
    }
    security.isAuthenticationDisabled = isAuthenticationDisabled;
    function logSecurityEvent(event, info) {
        if (_common_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.isEmpty(info)) {
            info = "(empty)";
        }
        (0,_database__WEBPACK_IMPORTED_MODULE_2__.registerSecurityEvent)(event, info);
    }
    security.logSecurityEvent = logSecurityEvent;
    function getBodyData(request, response, callback) {
        var queryData = "";
        if (request.method === "POST") {
            request.on("data", function (chunk) {
                queryData += chunk;
                if (queryData.length > 1e6) {
                    logSecurityEvent(_common_Constants__WEBPACK_IMPORTED_MODULE_3__.HttpStatus.REQUEST_TOO_LONG, queryData);
                    queryData = "";
                    response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_3__.HttpStatus.REQUEST_TOO_LONG).send("");
                    request.connection.destroy();
                }
            });
            request.on("end", function () {
                callback(queryData);
            });
        }
        else {
            callback(null);
        }
    }
    security.getBodyData = getBodyData;
    function validateGoogleTokeninfoResponse(data) {
        if (_common_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.isEmpty(data)) {
            return false;
        }
        //see: https://developers.google.com/identity/sign-in/web/backend-auth#verify-the-integrity-of-the-id-token
        //The value of aud in the ID token is equal to one of your app's client IDs.
        //This check is necessary to prevent ID tokens issued to a malicious app being used to access data about the same user on your app's backend server.
        if (data.aud !== _common_GameConfig__WEBPACK_IMPORTED_MODULE_5__.gameConfig.services.google.oauth.applicationId) {
            logSecurityEvent("Login.aud", data.aud);
            console.warn("Access token is invalid for this application");
            return false;
        }
        //The value of iss in the ID token is equal to accounts.google.com or https://accounts.google.com.
        if (data.iss !== "accounts.google.com" && data.iss !== "https://accounts.google.com") {
            logSecurityEvent("Login.iss", data.iss);
            console.warn("Access token is invalid for this user");
            return false;
        }
        //The expiry time (exp) of the ID token has not passed.
        if (data.exp < Math.floor((new Date).getTime() / 1000)) {
            console.warn("Expiry time passed");
            return false;
        }
        return true;
    }
    security.validateGoogleTokeninfoResponse = validateGoogleTokeninfoResponse;
    function validateFacebookTokeninfoResponse(data, userId) {
        if (_common_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.isEmpty(data)) {
            return false;
        }
        //see: https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow#checktoken
        // Check that access token is valid for this application
        if (data.app_id !== _common_GameConfig__WEBPACK_IMPORTED_MODULE_5__.gameConfig.services.facebook.applicationId) {
            logSecurityEvent("Login.aud", data.app_id);
            console.warn("Access token is invalid for this application");
            return false;
        }
        // Check that access token is valid for this user
        if (data.user_id !== userId) {
            logSecurityEvent("Login.iss", data.user_id);
            console.warn("Access token is invalid for this user");
            return false;
        }
        // Check validity flag
        if (!data.is_valid) {
            console.warn("Flag is_valid is not set to true");
            return false;
        }
        //The expiry time (expires_at) of the ID token has not passed.
        if (data.expires_at < Math.floor((new Date).getTime() / 1000)) {
            console.warn("Expiry time passed");
            return false;
        }
        return true;
    }
    security.validateFacebookTokeninfoResponse = validateFacebookTokeninfoResponse;
    function validateGoogleReCaptchaResponse(gResponse) {
        //see: https://developers.google.com/recaptcha/docs/v3#site_verify_response
        if (gResponse.success !== true) {
            return false;
        }
        if (gResponse.score < 0.5) {
            return false;
        }
        return true;
    }
    security.validateGoogleReCaptchaResponse = validateGoogleReCaptchaResponse;
    function getCookieSettings() {
        return {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            secure: !isDevEnv(),
            sameSite: "lax"
        };
    }
    security.getCookieSettings = getCookieSettings;
    function requestFilter(req, res) {
        // Always redirect to https
        if (!req.secure && req.get("x-forwarded-proto") !== "https") {
            return res.redirect("https://" + req.get("host") + req.url);
        }
        // Explicitly force HTTPS
        res.setHeader("Strict-Transport-Security", "max-age=31536000");
        // Enable browser XSS protection
        res.setHeader("X-XSS-Protection", "1;mode=block");
        // Prevent MIME-sniffing attacks (definitely not useless)
        res.setHeader("X-Content-Type-Options", "nosniff");
        // Allow framing only from trusted sources
        res.setHeader("X-Frame-Options", "ALLOW-FROM http://rpt.altervista.org");
        // Very basic CSP
        res.setHeader("Content-Security-Policy", "default-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data: "
            // Google Authentication
            + "https://*.gstatic.com https://*.googleapis.com https://*.google.com "
            // Facebook Authentication
            + "https://connect.facebook.net https://www.facebook.com https://web.facebook.com https://graph.facebook.com "
            // CDN scripts
            + "https://code.jquery.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net");
        // Random referrer policy
        res.setHeader("Referrer-Policy", "origin-when-cross-origin");
        // HttpOnly: mitigates XSS attacks.
        // SameSite=Strict: defense against some classes of CSRF attacks
        res.setHeader("Set-Cookie", "HttpOnly;SameSite=Strict");
        // Reduce information exposure
        res.removeHeader("Server");
        res.removeHeader("X-Powered-By");
    }
    security.requestFilter = requestFilter;
    /**
     * NB this cannot be used for password hashing, since it uses a fixed salt
     *
     * @param plaintext string to hash
     */
    function computeUnsafeHash(plaintext) {
        return hash(plaintext, "$2b$10$OBjW2ZGF6rpUJKWEA9/kmO");
    }
    security.computeUnsafeHash = computeUnsafeHash;
    /**
     * Return a server configuration options for local development use only
     */
    function getLocalServerOptions() {
        if (!isDevEnv()) {
            console.error("Cannot use local server options when ENV !== development");
            process.exit();
        }
        return {
            key: (0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)("assets/localdev-key.pem"),
            cert: (0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)("assets/localdev-cert.pem")
        };
    }
    security.getLocalServerOptions = getLocalServerOptions;
    function sanitizeIssueDescription(description) {
        // Should be rendered as a quote
        description = description.split("\n").join("\n>");
        // Should not contains active links
        description = description.split("http").join("ht#p");
        description = description.split("href").join("hr#f");
        description = description.replace(/\(.+[^ ]\.[^ ].+\)/g, "(###)");
        // Should not contains javascript
        description = description.split("javascript").join("javascri#t");
        return description;
    }
    security.sanitizeIssueDescription = sanitizeIssueDescription;
})(security || (security = {}));
let flagAlertNoEndVar = false;
function isDevEnv() {
    if (process.env.NODE_ENV === undefined) {
        if (flagAlertNoEndVar) {
            flagAlertNoEndVar = true;
            console.warn("No ENV defined, defaulting to development");
        }
        // This is a bad practice, but necessary in order to
        // being able to run the node server locally without any config
        return true;
    }
    return "development" === process.env.NODE_ENV;
}
function useSSLDatabaseConnection() {
    return !isDevEnv();
}


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "database": () => (/* binding */ database),
/* harmony export */   "registerSecurityEvent": () => (/* binding */ registerSecurityEvent)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lowdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var lowdb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lowdb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lowdb_adapters_FileSync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var lowdb_adapters_FileSync__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lowdb_adapters_FileSync__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var _common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);
/* harmony import */ var _common_GameConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/* harmony import */ var _common_Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7);
/* harmony import */ var _common_StringsConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31);
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10);
/* harmony import */ var _sanitizer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32);



const lowdb = (lowdb__WEBPACK_IMPORTED_MODULE_1___default());
const fileSync = (lowdb_adapters_FileSync__WEBPACK_IMPORTED_MODULE_2___default());













/**
 * This module manage persistency for:
 * - Game data: on lowdb files, written only during development, and read at runtime
 * - User data: on PG database, read and written only during runtime
 */
var database;
(function (database) {
    let gameData;
    let flagPostgresUnavailable = false;
    function logAccess(user) {
        if (flagPostgresUnavailable || user === undefined) {
            return;
        }
        // User already known, log this access
        _models_index__WEBPACK_IMPORTED_MODULE_5__.models.get("log_access").update({
            last_seen: new Date(),
            //@ts-ignore
            access_counter: sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize.literal("access_counter + 1")
        }, {
            where: {
                user: user,
            },
        }).then(function (r) {
            // Nothing to do
        }, function (error) {
            console.log(error);
        });
    }
    database.logAccess = logAccess;
    ;
    function manageQueryError(response, error) {
        console.error(error);
        response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.BAD_REQUEST).send("");
    }
    ;
    /**
     * Method called on module intialization, it will:
     * - load the game file database
     * - initialize the PG database connection
     */
    async function init() {
        return new Promise(async function (resolve, reject) {
            // Load game data from json files
            gameData = {
                dialogs: lowdb(new fileSync("data/dialogs.json")),
                maps: lowdb(new fileSync("data/maps.json")),
                trees: lowdb(new fileSync("data/trees.json")),
                tilesets: lowdb(new fileSync("data/tilesets.json")),
                autotileset: lowdb(new fileSync("data/autotilesets.json")),
                genericMessages: lowdb(new fileSync("data/dynmsgs.json")),
                langs: new Map()
            };
            // Load the language files
            let files = await _utils__WEBPACK_IMPORTED_MODULE_6__.listFiles("data/lang/");
            for (let file of files) {
                try {
                    // example: gameData.langs.it: {database from messages_it.json}
                    let lang = file.replace("messages_", "").replace(".json", "");
                    gameData.langs.set(lang, lowdb(new fileSync("data/lang/" + file)));
                }
                catch (e) {
                    console.error("Error while reading language file: " + file);
                    console.trace(e);
                }
            }
            // Test PostGres authentication
            if (_models_index__WEBPACK_IMPORTED_MODULE_5__.sequelizeInstance !== undefined) {
                try {
                    console.log("Testing Sequelize authentication...");
                    await _models_index__WEBPACK_IMPORTED_MODULE_5__.sequelizeInstance.authenticate();
                    console.log("Sequelize authentication OK");
                    // Database ready
                    resolve(true);
                    return;
                }
                catch (e) {
                    console.error(e);
                }
            }
            // Manage database connection fail
            console.info("PostgreSQL database not available, functionalities will be limitated");
            flagPostgresUnavailable = true;
            resolve(false);
        });
    }
    database.init = init;
    function read(type, file, user, response, lang) {
        let langVal = (0,_common_Utils__WEBPACK_IMPORTED_MODULE_10__.enumFromValue)(_common_Commons__WEBPACK_IMPORTED_MODULE_3__.LanguageEnum, lang);
        switch (type) {
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.MAP:
                let map = gameData.maps.get(["maps", file]).value();
                if (map === undefined) {
                    console.log("Map \"" + file + "\" not found, returning default");
                    map = _common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.getMap();
                    map.id = file;
                }
                response.json(map);
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.TREE:
                let tree = gameData.trees.get(["trees", file]).value();
                if (tree === undefined) {
                    console.log("Tree \"" + file + "\" not found, returning default");
                    tree = _common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.getTree();
                    tree.id = file;
                }
                response.json(tree);
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.TILESET:
                let tileset = gameData.tilesets.get("tilesets")["find"]({ image: file })
                    .value();
                if (tileset === undefined) {
                    console.log("Tileset \"" + file + "\" not found, returning default");
                    tileset = _common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.getTileset();
                    tileset.image = file;
                }
                response.json(tileset);
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.AUTOTILESET:
                let autotileset = gameData.autotileset.get("autotilesets").value();
                if (autotileset === undefined) {
                    // No autotileset data found, return empty array
                    autotileset = [];
                }
                response.json(autotileset);
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.STRING:
                let value = getString(langVal, _common_StringsConstants__WEBPACK_IMPORTED_MODULE_11__.GLOBAL_GROUP_ID, file);
                if (value !== undefined) {
                    response.send(value);
                }
                else {
                    response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.NOT_FOUND)
                        .send(_common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.getString());
                }
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.DIALOG:
                if (!_common_Utils__WEBPACK_IMPORTED_MODULE_10__.Utils.isNumeric(file)) {
                    console.warn("Cannot read not-numeric dialog id: " + file);
                    response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.BAD_REQUEST)
                        .send("");
                }
                let dialogId = parseInt(file);
                let nodes = [];
                let edges = [];
                traverseDialogDatabase(dialogId, _common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.FIRST_ELEM_ID, nodes, edges);
                if (nodes.length > 0) {
                    populateDialogMessages(dialogId, nodes, edges, langVal);
                    response.send({
                        nodes: nodes,
                        edges: edges
                    });
                }
                else {
                    response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.NOT_FOUND)
                        .send("");
                }
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.SAVE:
                if (!_common_Utils__WEBPACK_IMPORTED_MODULE_10__.Utils.isEmpty(user) && !flagPostgresUnavailable) {
                    _models_index__WEBPACK_IMPORTED_MODULE_5__.models.get("usr_save")["findOne"]({
                        where: {
                            user: user,
                            id: file
                        },
                        attributes: ["save"]
                    }).then(function (result) {
                        if (!_common_Utils__WEBPACK_IMPORTED_MODULE_10__.Utils.isEmpty(result)) {
                            response.send(result.dataValues.save);
                        }
                        else {
                            response.send(_common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.getSave());
                        }
                    }, function (error) {
                        console.log(error);
                        response
                            .status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.INTERNAL_SERVER_ERROR)
                            .send(_common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.getSave());
                    });
                }
                else {
                    response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.OK).send(_common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.getSave());
                }
                break;
            default:
                console.error("database.read - Unexpected case: " + type);
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.NOT_FOUND).send(_common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.getString());
        }
        ;
    }
    database.read = read;
    function write(type, file, data, user, response) {
        switch (type) {
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.MAP:
                let newMap = JSON.parse(data);
                (0,_sanitizer__WEBPACK_IMPORTED_MODULE_14__.sanitizeMap)(newMap);
                gameData.maps.set(["maps", file], newMap).write();
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.OK).send("");
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.TREE:
                let newTree = JSON.parse(data)[0];
                gameData.trees.set(["trees", file], newTree).write();
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.OK).send("");
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.TILESET:
                let oldTileset = gameData.tilesets.get("tilesets")["find"]({ image: file });
                let newTileset = JSON.parse(data);
                if (oldTileset.value() !== undefined) {
                    oldTileset.assign(newTileset).write();
                }
                else {
                    gameData.tilesets.set(["tilesets", file], newTileset).write();
                }
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.OK).send("");
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.AUTOTILESET:
                let autoTilesets = JSON.parse(data);
                gameData.autotileset.set("autotilesets", autoTilesets).write();
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.OK).send("");
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.STRING:
                let id = setString(_common_StringsConstants__WEBPACK_IMPORTED_MODULE_11__.GLOBAL_GROUP_ID, file, data);
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.OK).send(id + "");
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.DIALOG:
                // Extract a list of nodes and edges from the dialog tree, and save them to DB
                let dialogData = JSON.parse(data);
                let nodesList = dialogData.nodes;
                let edgesList = dialogData.edges;
                if (!_common_Utils__WEBPACK_IMPORTED_MODULE_10__.Utils.isNumeric(file)) {
                    response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.BAD_REQUEST).send("DialogId should be numeric: " + file);
                    return;
                }
                let dialogId = parseInt(file);
                if (dialogId === _common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.DEFAULT_ID) {
                    // Assign an incremental id to this dialog
                    let maxId = _common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.DEFAULT_ID;
                    for (let id of gameData.dialogs.keys().value()) {
                        if (_common_Utils__WEBPACK_IMPORTED_MODULE_10__.Utils.isNumeric(id) && parseInt(id) > maxId) {
                            maxId = parseInt(id);
                        }
                    }
                    dialogId = (maxId + 1);
                }
                // Save dialog strings
                let groupdId = getDialogGroupId(dialogId);
                clearStrings(groupdId);
                for (let node of nodesList) {
                    if (node.message !== undefined) {
                        setString(groupdId, getNodeMessageStringId(node), node.message);
                    }
                }
                for (let edge of edgesList) {
                    if (edge.message !== undefined) {
                        setString(groupdId, getEdgeMessageStringId(edge), edge.message);
                    }
                }
                (0,_sanitizer__WEBPACK_IMPORTED_MODULE_14__.sanitizeDialog)(nodesList, edgesList);
                gameData.dialogs.unset(dialogId).write();
                gameData.dialogs.set([dialogId, "nodes"], nodesList).write();
                gameData.dialogs.set([dialogId, "edges"], edgesList).write();
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.OK).send(dialogId + "");
                break;
            case _common_Constants__WEBPACK_IMPORTED_MODULE_4__.ResourceType.SAVE:
                if (flagPostgresUnavailable) {
                    response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.OK).send("");
                    return;
                }
                _models_index__WEBPACK_IMPORTED_MODULE_5__.models.get("usr_save")["upsert"]({
                    user: parseInt(user),
                    id: parseInt(file),
                    date: new Date(),
                    name: undefined,
                    save: JSON.parse(data)
                }).then(function (result) {
                    response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.OK).send("");
                }, function (error) {
                    manageQueryError(response, error);
                });
                break;
            default:
                console.error("Unexpected case: " + type);
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.NOT_FOUND).send("");
        }
    }
    database.write = write;
    function doUserLogin(mail, request, response) {
        if (flagPostgresUnavailable) {
            response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.NOT_IMPLEMENTED).send("");
        }
        _security__WEBPACK_IMPORTED_MODULE_12__.security.computeUnsafeHash(mail)
            .catch((reason) => {
            console.error(reason);
            response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.INTERNAL_SERVER_ERROR).send("");
        })
            .then((hashedMail) => {
            if (hashedMail === undefined) {
                console.log("Hash not available");
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.INTERNAL_SERVER_ERROR).send("");
                return;
            }
            _models_index__WEBPACK_IMPORTED_MODULE_5__.models.get("usr_list")["findOne"]({
                where: {
                    mail: hashedMail
                }
            }).then(function (user_record) {
                if (user_record == null) {
                    // First access, create the user
                    _models_index__WEBPACK_IMPORTED_MODULE_5__.models.get("usr_list")["upsert"]({
                        mail: hashedMail,
                    }).then(function (updated) {
                        // Get the new user record
                        _models_index__WEBPACK_IMPORTED_MODULE_5__.models.get("usr_list")["findOne"]({
                            where: {
                                mail: hashedMail
                            }
                        }).then(function (user_new_record) {
                            if (user_record == null) {
                                // Add user id to session
                                _session__WEBPACK_IMPORTED_MODULE_13__.session.setUser(request, user_new_record.user);
                                request.session.save(function (err) {
                                    if (!_common_Utils__WEBPACK_IMPORTED_MODULE_10__.Utils.isEmpty(err)) {
                                        console.error("Error while saving session: %s", err);
                                    }
                                });
                                // Send welcome event to the new user
                                _models_index__WEBPACK_IMPORTED_MODULE_5__.models.get("usr_event")["upsert"]({
                                    user: user_new_record.user,
                                    event: _constants__WEBPACK_IMPORTED_MODULE_7__.constants.event.WELCOME,
                                    date: new Date()
                                }).then(function (res) {
                                }, function (error) {
                                    console.log(error);
                                });
                                // Log first access for the new user user
                                _models_index__WEBPACK_IMPORTED_MODULE_5__.models.get("log_access")["upsert"]({
                                    user: user_new_record.user,
                                    first_seen: new Date(),
                                    last_seen: new Date(),
                                    access_counter: 1
                                }).then(function (res) {
                                }, function (error) {
                                    console.log(error);
                                });
                            }
                            else {
                                console.error("Registration failed for: " + hashedMail);
                            }
                        }, function (error) {
                            console.log(error);
                            response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.INTERNAL_SERVER_ERROR).send("");
                        });
                    }, function (error) {
                        console.log(error);
                        response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.INTERNAL_SERVER_ERROR).send("");
                    });
                }
                else {
                    // Add user id to session
                    _session__WEBPACK_IMPORTED_MODULE_13__.session.setUser(request, user_record.user);
                    request.session.save(function (err) {
                        if (!_common_Utils__WEBPACK_IMPORTED_MODULE_10__.Utils.isEmpty(err)) {
                            console.error("Error while saving session: %s", err);
                        }
                    });
                    // Log this access
                    logAccess(user_record.user);
                }
            }, function (error) {
                console.log(error);
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_4__.HttpStatus.INTERNAL_SERVER_ERROR).send("");
            });
        });
    }
    database.doUserLogin = doUserLogin;
    function getNews(user, response) {
        if (_common_Utils__WEBPACK_IMPORTED_MODULE_10__.Utils.isEmpty(user) || flagPostgresUnavailable) {
            response.json({});
        }
        else {
            _models_index__WEBPACK_IMPORTED_MODULE_5__.models.get("usr_event")["findAll"]({
                where: {
                    user: user
                },
                attributes: ["event"],
            }).then(function (events) {
                if (!_common_Utils__WEBPACK_IMPORTED_MODULE_10__.Utils.isEmpty(events)) {
                    var eventsArray = new Array;
                    for (var i = 0; i < events.length; i++) {
                        eventsArray.push(events[i].event);
                    }
                    _models_index__WEBPACK_IMPORTED_MODULE_5__.models.get("lst_event")["findAll"]({
                        where: {
                            event: eventsArray
                        }
                    }).then(function (datas) {
                        response.json(datas);
                    });
                }
                else {
                    response.json({});
                }
            });
        }
    }
    database.getNews = getNews;
    function traverseDialogDatabase(dialogId, nodeId, nodes, edges, parentEdgeId) {
        let node = gameData.dialogs.get([dialogId, "nodes"])["find"]({ id: nodeId })
            .value();
        if (node !== undefined) {
            nodes.push(node);
            if (node.edgeIds !== undefined) {
                for (let edgeId of node.edgeIds) {
                    let edge = gameData.dialogs.get([dialogId, "edges"])["find"]({ id: edgeId })
                        .value();
                    if (edge !== undefined) {
                        edges.push(edge);
                        if (edge.nodeId !== undefined) {
                            traverseDialogDatabase(dialogId, edge.nodeId, nodes, edges, edgeId);
                        }
                    }
                    else {
                        console.error("dialog " + dialogId + "- node " + node.id + " reference not-existing edge: " + edgeId);
                    }
                }
            }
        }
        else {
            if (parentEdgeId === undefined) {
                console.error("dialog " + dialogId + "- not-existing node: " + nodeId);
            }
            else {
                console.error("dialog " + dialogId + "- edge " + parentEdgeId + " reference not-existing node: " + nodeId);
            }
        }
    }
    function getString(lang, groupId, id) {
        if (lang === undefined || !gameData.langs.has(lang)) {
            lang = _common_GameConfig__WEBPACK_IMPORTED_MODULE_9__.gameConfig.ui.lang;
        }
        let langMap = gameData.langs.get(lang);
        if (langMap === undefined) {
            console.error("Cannot load language: " + lang);
        }
        else {
            if (langMap.has([groupId, id]).value()) {
                return langMap.get([groupId, id]).value();
            }
            if (lang !== _common_GameConfig__WEBPACK_IMPORTED_MODULE_9__.gameConfig.ui.lang) {
                // Fallback on default language
                langMap = gameData.langs.get(_common_GameConfig__WEBPACK_IMPORTED_MODULE_9__.gameConfig.ui.lang);
                if (langMap === undefined) {
                    console.error("Cannot load default language: " + lang);
                }
                else if (langMap.has([groupId, id]).value()) {
                    return langMap.get([groupId, id]).value();
                }
            }
        }
        return;
    }
    function clearStrings(groupId) {
        let langMap = gameData.langs.get(_common_GameConfig__WEBPACK_IMPORTED_MODULE_9__.gameConfig.ui.lang);
        if (langMap === undefined) {
            console.error("Cannot load default language: " + langMap);
        }
        else {
            langMap.unset(groupId).write();
        }
    }
    function setString(groupId, id, value) {
        if (_common_Utils__WEBPACK_IMPORTED_MODULE_10__.Utils.isEmpty(value) || value.trim().length === 0) {
            return;
        }
        let langMap = gameData.langs.get(_common_GameConfig__WEBPACK_IMPORTED_MODULE_9__.gameConfig.ui.lang);
        if (langMap === undefined) {
            console.error("Cannot load default language: " + langMap);
        }
        else {
            if (id === undefined) {
                let idNum;
                if (!langMap.has(groupId).value()) {
                    idNum = _common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.FIRST_ELEM_ID;
                }
                else {
                    // Assign an incremental id
                    let maxId = _common_DataDefaults__WEBPACK_IMPORTED_MODULE_8__.DataDefaults.DEFAULT_ID;
                    for (let id of langMap.get(groupId).keys().value()) {
                        if (_common_Utils__WEBPACK_IMPORTED_MODULE_10__.Utils.isNumeric(id) && parseInt(id) > maxId) {
                            maxId = parseInt(id);
                        }
                    }
                    idNum = (maxId + 1);
                }
                id = idNum + "";
            }
            langMap.set([groupId, id], value.trim()).write();
            return id;
        }
        return;
    }
    function populateDialogMessages(dialogId, nodes, edges, lang) {
        for (let node of nodes) {
            node.message = getString(lang, getDialogGroupId(dialogId), getNodeMessageStringId(node));
        }
        for (let edge of edges) {
            edge.message = getString(lang, getDialogGroupId(dialogId), getEdgeMessageStringId(edge));
        }
    }
    function getDialogGroupId(dialogId) {
        return "D" + dialogId;
    }
    function getNodeMessageStringId(node) {
        return "N" + node.id + "M";
    }
    function getEdgeMessageStringId(edge) {
        return "E" + edge.id + "M";
    }
})(database || (database = {}));
function registerSecurityEvent(event, info) {
    _models_index__WEBPACK_IMPORTED_MODULE_5__.models.get("log_security")["upsert"]({
        event: event,
        info: info,
        date: new Date()
    });
}


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("lowdb");

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("lowdb/adapters/FileSync");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "models": () => (/* binding */ models),
/* harmony export */   "sequelizeInstance": () => (/* binding */ sequelizeInstance)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


let models = new Map();
let sequelizeInstance;
if (process.env.DATABASE_URL === undefined) {
    console.warn("Env variable DATABASE_URL undefined");
}
else {
    initSequelizeModules();
}
/* eslint-disable @typescript-eslint/no-require-imports */
function initSequelizeModules() {
    let ssl = false;
    if ((0,_security__WEBPACK_IMPORTED_MODULE_1__.useSSLDatabaseConnection)()) {
        ssl = {
            require: true,
            rejectUnauthorized: false // https://stackoverflow.com/a/61350416/2700039
        };
    }
    let sequelizeOptions = {
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {
            ssl: ssl
        },
        define: {
            timestamps: false
        },
        logging: false
    };
    sequelizeInstance = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize(process.env.DATABASE_URL, sequelizeOptions);
    // Ugly but safer then dynamic module import
    // Need to use "require" instead of "import" since there are no TS definitions
    let sequelizeModelModule;
    sequelizeModelModule = __webpack_require__(20);
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = __webpack_require__(21);
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = __webpack_require__(22);
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = __webpack_require__(23);
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = __webpack_require__(24);
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = __webpack_require__(25);
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = __webpack_require__(26);
    onSequelizeModuleImport(sequelizeModelModule);
    sequelizeModelModule = __webpack_require__(27);
    onSequelizeModuleImport(sequelizeModelModule);
}
function onSequelizeModuleImport(importedModelModule) {
    try {
        let model = importedModelModule.default.init(sequelizeInstance, sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize);
        models.set(model.name, model);
    }
    catch (e) {
        console.trace(e);
        process.exit();
    }
    ;
}


/***/ }),
/* 20 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ log_access)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

const { DataTypes } = /*#__PURE__*/ (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(sequelize__WEBPACK_IMPORTED_MODULE_0__, 2)));

const { Model } = sequelize__WEBPACK_IMPORTED_MODULE_0__;

class log_access extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usr_list',
        key: 'user'
      }
    },
    first_seen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_seen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    access_counter: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'log_access',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "log_access_key",
        unique: true,
        fields: [
          { name: "user" },
        ]
      },
    ]
  });
  return log_access;
  }
}


/***/ }),
/* 21 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ log_security)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

const { DataTypes } = /*#__PURE__*/ (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(sequelize__WEBPACK_IMPORTED_MODULE_0__, 2)));

const { Model } = sequelize__WEBPACK_IMPORTED_MODULE_0__;

class log_security extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    event: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    info: {
      type: DataTypes.STRING(127),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'log_security',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "log_security_key",
        unique: true,
        fields: [
          { name: "event" },
        ]
      },
    ]
  });
  return log_security;
  }
}


/***/ }),
/* 22 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ lst_event)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

const { DataTypes } = /*#__PURE__*/ (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(sequelize__WEBPACK_IMPORTED_MODULE_0__, 2)));

const { Model } = sequelize__WEBPACK_IMPORTED_MODULE_0__;

class lst_event extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    event: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    message: {
      type: DataTypes.STRING(511),
      allowNull: true
    },
    type: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    action: {
      type: DataTypes.CHAR(31),
      allowNull: true
    },
    action_key: {
      type: DataTypes.CHAR(31),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lst_event',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "l4w_event_key",
        unique: true,
        fields: [
          { name: "event" },
        ]
      },
    ]
  });
  return lst_event;
  }
}


/***/ }),
/* 23 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ lst_role)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

const { DataTypes } = /*#__PURE__*/ (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(sequelize__WEBPACK_IMPORTED_MODULE_0__, 2)));

const { Model } = sequelize__WEBPACK_IMPORTED_MODULE_0__;

class lst_role extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    role: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(31),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lst_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "l4w_role_key",
        unique: true,
        fields: [
          { name: "role" },
        ]
      },
    ]
  });
  return lst_role;
  }
}


/***/ }),
/* 24 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usr_event)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

const { DataTypes } = /*#__PURE__*/ (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(sequelize__WEBPACK_IMPORTED_MODULE_0__, 2)));

const { Model } = sequelize__WEBPACK_IMPORTED_MODULE_0__;

class usr_event extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usr_list',
        key: 'user'
      }
    },
    event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lst_event',
        key: 'event'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usr_event',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usr_event_key",
        unique: true,
        fields: [
          { name: "user" },
          { name: "event" },
        ]
      },
    ]
  });
  return usr_event;
  }
}


/***/ }),
/* 25 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usr_list)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

const { DataTypes } = /*#__PURE__*/ (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(sequelize__WEBPACK_IMPORTED_MODULE_0__, 2)));

const { Model } = sequelize__WEBPACK_IMPORTED_MODULE_0__;

class usr_list extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    user: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mail: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usr_list',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usr_list_key",
        unique: true,
        fields: [
          { name: "user" },
        ]
      },
    ]
  });
  return usr_list;
  }
}


/***/ }),
/* 26 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usr_role)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

const { DataTypes } = /*#__PURE__*/ (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(sequelize__WEBPACK_IMPORTED_MODULE_0__, 2)));

const { Model } = sequelize__WEBPACK_IMPORTED_MODULE_0__;

class usr_role extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usr_list',
        key: 'user'
      }
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lst_role',
        key: 'role'
      }
    }
  }, {
    sequelize,
    tableName: 'usr_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usr_role_key",
        unique: true,
        fields: [
          { name: "user" },
          { name: "role" },
        ]
      },
    ]
  });
  return usr_role;
  }
}


/***/ }),
/* 27 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usr_save)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

const { DataTypes } = /*#__PURE__*/ (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (sequelize__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(sequelize__WEBPACK_IMPORTED_MODULE_0__, 2)));

const { Model } = sequelize__WEBPACK_IMPORTED_MODULE_0__;

class usr_save extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usr_list',
        key: 'user'
      }
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.CHAR(31),
      allowNull: true
    },
    save: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usr_save',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usr_save_key",
        unique: true,
        fields: [
          { name: "user" },
          { name: "id" },
        ]
      },
    ]
  });
  return usr_save;
  }
}


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendFile": () => (/* binding */ sendFile),
/* harmony export */   "endsWith": () => (/* binding */ endsWith),
/* harmony export */   "listFiles": () => (/* binding */ listFiles),
/* harmony export */   "pruneObject": () => (/* binding */ pruneObject)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



const placeholder = "404.png";
function sendFile(path, filename, response) {
    //Send a file as response
    let options = {
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true
        }
    };
    let extension = filename.split(".").pop();
    switch (extension) {
        case "json":
            response.type("application/json");
            break;
        case "properties":
            response.type("text/x-java-properties");
            break;
        case "js":
            response.type("application/javascript");
            break;
        case "css":
            response.type("text/css");
            break;
        case "woff2":
            response.type("font/woff2");
            break;
    }
    let filePath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(path, filename);
    response.sendFile(filePath, options, function (err) {
        if (err && response.statusCode !== _common_Constants__WEBPACK_IMPORTED_MODULE_2__.HttpStatus.NOT_MODIFIED && err.code !== "ECONNABORT") {
            if (response.statusCode === _common_Constants__WEBPACK_IMPORTED_MODULE_2__.HttpStatus.NOT_FOUND && filename !== placeholder) {
                sendFile(path, placeholder, response);
            }
            else {
                // Do not log requests aborted
                if (err.message !== "Request aborted") {
                    console.warn("utils.sendFile (file: " + filePath + ") " + err);
                }
                try {
                    if (err.status !== undefined) {
                        response.status(err.status).send("");
                    }
                    else {
                        response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_2__.HttpStatus.NO_CONTENT).send("");
                    }
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
    });
}
;
function endsWith(file, suffix) {
    return file.indexOf(suffix, file.length - suffix.length) !== -1;
}
/**
 * List the files in a directory (excluding dirs, hidden, 404)
 *
 * @param filePath path to read
 * @param response array of files (async)
 */
function listFiles(filePath, response) {
    return new Promise(resolve => {
        (0,fs__WEBPACK_IMPORTED_MODULE_0__.readdir)(filePath, (err, files) => {
            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                let is404 = file.startsWith("404");
                let isHidden = file.startsWith(".");
                let isDirectory = (0,fs__WEBPACK_IMPORTED_MODULE_0__.lstatSync)((0,path__WEBPACK_IMPORTED_MODULE_1__.join)(filePath, file)).isDirectory();
                if (is404 || isHidden || isDirectory) {
                    files.splice(i, 1);
                    i--;
                }
            }
            if (err !== null) {
                console.error(err);
            }
            if (response !== undefined) {
                response.json(files);
            }
            resolve(files);
        });
    });
}
/**
 * Return a copy of the input object, containing only number/string/boolean fields
 */
function pruneObject(obj) {
    let out = {};
    for (let field in obj) {
        let val = obj[field];
        while (Array.isArray(val) && val.length > 0) {
            val = val[0];
        }
        if (typeof val === "string" || typeof val === "boolean" || typeof val === "number") {
            out[field] = obj[field];
        }
    }
    return out;
}


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constants": () => (/* binding */ constants)
/* harmony export */ });
var constants;
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


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataDefaults": () => (/* binding */ DataDefaults)
/* harmony export */ });
/* harmony import */ var _common_GameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var DataDefaults;
(function (DataDefaults) {
    DataDefaults.DEFAULT_ID = -1;
    DataDefaults.DEFAULT_ID_STR = DataDefaults.DEFAULT_ID + "";
    DataDefaults.FIRST_ELEM_ID = 0;
    DataDefaults.DEFAULT_STR = "";
    function getDialogNode(nodeId) {
        return {
            id: nodeId !== undefined ? nodeId : DataDefaults.DEFAULT_ID
        };
    }
    DataDefaults.getDialogNode = getDialogNode;
    function getDialogEdge(edgeId) {
        return {
            id: edgeId !== undefined ? edgeId : DataDefaults.DEFAULT_ID
        };
    }
    DataDefaults.getDialogEdge = getDialogEdge;
    function getEmptyMap() {
        let map = getMap();
        for (let layer of map.layers) {
            layer.data = undefined;
        }
        return map;
    }
    DataDefaults.getEmptyMap = getEmptyMap;
    function getMap() {
        return {
            id: _Utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getRandomString(),
            height: 20,
            width: 25,
            layers: [
                {
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    type: "tilelayer",
                    x: 0,
                    y: 0
                },
                {
                    type: "tilelayer",
                    x: 0,
                    y: 0
                },
                {
                    type: "tilelayer",
                    x: 0,
                    y: 0
                },
                {
                    type: "tilelayer",
                    x: 0,
                    y: 0
                }
            ],
            tileset: getTileset(),
            events: []
        };
    }
    DataDefaults.getMap = getMap;
    function getTileset() {
        return {
            image: "002-Woods01.png",
            blocks: [],
            onTop: [],
            maxGID: 199
        };
    }
    DataDefaults.getTileset = getTileset;
    function getAutoTileset() {
        return {
            image: "001-G_Water01.png",
            blocked: false,
            selected: false,
            frequency: 3 /* MEDIUM */
        };
    }
    DataDefaults.getAutoTileset = getAutoTileset;
    function getSave() {
        return {
            id: DataDefaults.FIRST_ELEM_ID,
            timestamp: _Utils__WEBPACK_IMPORTED_MODULE_1__.Utils.now(),
            currentMap: _common_GameConfig__WEBPACK_IMPORTED_MODULE_0__.gameConfig.maps.start.map,
            hero: getHero(),
            maps: [],
            config: getConfig(),
            variables: {}
        };
    }
    DataDefaults.getSave = getSave;
    function getConfig() {
        return {
            lang: _common_GameConfig__WEBPACK_IMPORTED_MODULE_0__.gameConfig.ui.lang,
            skin: _common_GameConfig__WEBPACK_IMPORTED_MODULE_0__.gameConfig.ui.skin,
            flagAntialiasing: false,
            flagDouble: false,
            flagNatural: false
        };
    }
    DataDefaults.getConfig = getConfig;
    function getEvent() {
        let event = {
            id: -1,
            name: "NPC",
            i: 0,
            j: 0,
            states: [getEventState()],
            memory: {},
            script: "",
            currentState: 0
        };
        return event;
    }
    DataDefaults.getEvent = getEvent;
    ;
    function getHero() {
        let hero = getEvent();
        hero.name = _common_GameConfig__WEBPACK_IMPORTED_MODULE_0__.gameConfig.hero.name;
        hero.i = _common_GameConfig__WEBPACK_IMPORTED_MODULE_0__.gameConfig.maps.start.i;
        hero.j = _common_GameConfig__WEBPACK_IMPORTED_MODULE_0__.gameConfig.maps.start.j;
        hero.states = [];
        hero.states[0] = getEventState();
        hero.states[0].charaset = _common_GameConfig__WEBPACK_IMPORTED_MODULE_0__.gameConfig.hero.charaset;
        return hero;
    }
    DataDefaults.getHero = getHero;
    function getEventState() {
        return {
            ...getCharacter(),
            condition: "always",
            trigger: 0 /* CLICK */
        };
    }
    DataDefaults.getEventState = getEventState;
    ;
    function getString() {
        return "";
    }
    DataDefaults.getString = getString;
    function getTree() {
        return {};
    }
    DataDefaults.getTree = getTree;
    function getCharacter() {
        return {
            direction: 2 /* DOWN */
        };
    }
    DataDefaults.getCharacter = getCharacter;
    ;
})(DataDefaults || (DataDefaults = {}));
;


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLOBAL_GROUP_ID": () => (/* binding */ GLOBAL_GROUP_ID)
/* harmony export */ });
const GLOBAL_GROUP_ID = "GLOBAL";


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sanitizeMap": () => (/* binding */ sanitizeMap),
/* harmony export */   "sanitizeDialog": () => (/* binding */ sanitizeDialog)
/* harmony export */ });
/**
 * This module manage sanitizer methods for models.
 * Should be used before writing model object to DB,
 * in order to clean up transient fields and remove
 * any invalid or useless data
 */
function sanitizeMap(map) {
    delete map.blocks;
    delete map.dynamicBlocks;
    delete map.maxEventId;
    if (map.layers !== undefined) {
        for (let layer of map.layers) {
            delete layer.autotileData;
        }
    }
    if (map.autotilesets !== undefined) {
        for (let autotile of Object.entries(map.autotilesets)) {
            delete autotile[1].imageData;
            delete autotile[1].selected;
        }
    }
}
function sanitizeDialog(nodesList, edgesList) {
    for (let node of nodesList) {
        delete node.message;
        delete node.edges;
        delete node.referenced;
        // Remove unexisting edges
        if (node.edgeIds !== undefined) {
            node.edgeIds = node.edgeIds.filter((referencesEdge) => {
                if (edgesList === undefined) {
                    return false;
                }
                for (let edge of edgesList) {
                    if (referencesEdge === edge.id) {
                        return true;
                    }
                }
                return false;
            });
        }
    }
    for (let edge of edgesList) {
        delete edge.message;
        delete edge.node;
        delete edge.nodeReferenced;
        delete edge.actions;
    }
}


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "services": () => (/* binding */ services)
/* harmony export */ });
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _common_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _common_GameConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);






/**
 * This module manage invocation of external services
 */
var services;
(function (services) {
    function validateGoogleToken(request, response, onSuccess, onFailure, token) {
        (0,https__WEBPACK_IMPORTED_MODULE_0__.get)(_common_GameConfig__WEBPACK_IMPORTED_MODULE_5__.gameConfig.services.google.oauth.url + "/oauth2/v3/tokeninfo?id_token=" + token, function (res) {
            let authResponse = "";
            res.on("data", function (buffer) {
                authResponse += buffer;
            });
            res.on("end", function () {
                try {
                    let auth = JSON.parse(authResponse);
                    if (_security__WEBPACK_IMPORTED_MODULE_1__.security.validateGoogleTokeninfoResponse(auth)) {
                        onSuccess(auth.email);
                    }
                    else {
                        // Authentication failed
                        onFailure();
                    }
                }
                catch (e) {
                    console.error("Unrecoverable session:");
                    console.error(e);
                    onFailure();
                }
            });
        }).on("error", function (e) {
            // Google API problem
            console.error(e);
            onFailure();
        });
    }
    services.validateGoogleToken = validateGoogleToken;
    function validateFacebookToken(request, response, onSuccess, onFailure, token, userId) {
        if (_common_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.isEmpty(process.env.FACEBOOK_SECRET)) {
            console.error("No env variable FACEBOOK_SECRET defined");
            onFailure();
            return;
        }
        let access_token = _common_GameConfig__WEBPACK_IMPORTED_MODULE_5__.gameConfig.services.facebook.applicationId + "|" + process.env.FACEBOOK_SECRET;
        (0,https__WEBPACK_IMPORTED_MODULE_0__.get)(_common_GameConfig__WEBPACK_IMPORTED_MODULE_5__.gameConfig.services.facebook.url + "/debug_token?input_token=" + token + "&access_token=" + access_token, function (res) {
            let authResponse = "";
            res.on("data", function (buffer) {
                authResponse += buffer;
            });
            res.on("end", function () {
                try {
                    let auth = JSON.parse(authResponse);
                    if (_security__WEBPACK_IMPORTED_MODULE_1__.security.validateFacebookTokeninfoResponse(auth.data, userId)) {
                        (0,https__WEBPACK_IMPORTED_MODULE_0__.get)(_common_GameConfig__WEBPACK_IMPORTED_MODULE_5__.gameConfig.services.facebook.url + "/" + userId + "?fields=email&access_token=" + token, function (res) {
                            let graphResponse = "";
                            res.on("data", function (buffer) {
                                graphResponse += buffer;
                            });
                            res.on("end", function () {
                                try {
                                    let graphData = JSON.parse(graphResponse);
                                    onSuccess(graphData.email);
                                }
                                catch (e) {
                                    console.error("Cannot read graph response");
                                    console.error(e);
                                    onFailure();
                                }
                            });
                        }).on("error", function (e) {
                            // Facebook API problem
                            console.error(e);
                            onFailure();
                        });
                    }
                    else {
                        // Authentication failed
                        onFailure();
                    }
                }
                catch (e) {
                    console.error("Unrecoverable session:");
                    console.error(e);
                    onFailure();
                }
            });
        }).on("error", function (e) {
            // Facebook API problem
            console.error(e);
            onFailure();
        });
    }
    services.validateFacebookToken = validateFacebookToken;
    function validateReCaptchaToken(request, response, callback, token, ip) {
        let body = "secret=" + process.env.RECAPTCHA_SECRET + "&response=" + token + "&remoteip=" + ip;
        let headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        post(_common_GameConfig__WEBPACK_IMPORTED_MODULE_5__.gameConfig.services.google.recaptcha.url, "/recaptcha/api/siteverify", body, headers, function (responseBody) {
            try {
                if (responseBody === undefined) {
                    response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_3__.HttpStatus.INTERNAL_SERVER_ERROR).send("");
                }
                else {
                    let gResponse = JSON.parse(responseBody);
                    callback(_security__WEBPACK_IMPORTED_MODULE_1__.security.validateGoogleReCaptchaResponse(gResponse));
                }
            }
            catch (e) {
                console.error("Cannot read Google ReCaptcha response");
                console.error(e);
                callback(false);
            }
        });
    }
    services.validateReCaptchaToken = validateReCaptchaToken;
    const ACCEPTED_LABELS = [
        "bug", "enhancement", "question"
    ];
    function openGitHubIssue(request, response, req) {
        let user = _session__WEBPACK_IMPORTED_MODULE_2__.session.getUser(request);
        if (user === undefined) {
            console.error("Cannot open issue if there is no valid session");
            response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_3__.HttpStatus.FORBIDDEN).send("");
            return;
        }
        if (_common_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.isEmpty(process.env.GITHUB_TOKEN)) {
            console.error("No env variable GITHUB_TOKEN defined");
            response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_3__.HttpStatus.INTERNAL_SERVER_ERROR).send("");
            return;
        }
        let issueDescription = "Issue generated from L4W bug reporting interface\nUser #" + user + " wrote:\n> ";
        issueDescription += _security__WEBPACK_IMPORTED_MODULE_1__.security.sanitizeIssueDescription(req.description);
        let body = {
            title: "Feedback by " + user,
            body: issueDescription,
            labels: []
        };
        if (req.label !== undefined && ACCEPTED_LABELS.includes(req.label)) {
            body.labels.push(req.label);
        }
        let headers = {
            "Accept": "application/vnd.github.v3+json",
            "Authorization": "token " + process.env.GITHUB_TOKEN,
            "User-Agent": "giovannipessiva" // https://developer.github.com/v3/#user-agent-required
        };
        post(_common_GameConfig__WEBPACK_IMPORTED_MODULE_5__.gameConfig.services.github.url, "/repos/giovannipessiva/l4w/issues", JSON.stringify(body), headers, function (responseBody) {
            try {
                if (responseBody === undefined) {
                    response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_3__.HttpStatus.INTERNAL_SERVER_ERROR).send("");
                }
                else {
                    let ghResponse = JSON.parse(responseBody);
                    let res = {
                        url: ghResponse.html_url
                    };
                    response.json(res);
                }
            }
            catch (e) {
                console.error("Cannot read GitHub response");
                console.error(e);
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_3__.HttpStatus.INTERNAL_SERVER_ERROR).send("");
            }
        });
    }
    services.openGitHubIssue = openGitHubIssue;
    function post(host, path, body, headers, callback) {
        let options = {
            protocol: "https:",
            host: host,
            path: path,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(body)
            }
        };
        Object.assign(options.headers, headers);
        let req = (0,https__WEBPACK_IMPORTED_MODULE_0__.request)(options, function (res) {
            let responseBody = "";
            res.setEncoding("utf8");
            res.on("data", function (buffer) {
                responseBody += buffer;
            }).on("end", function () {
                callback(responseBody);
            }).on("error", function (e) {
                console.error(e);
                callback();
            });
        });
        req.write(body);
        req.end();
    }
})(services || (services = {}));


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _common_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33);

//@ts-ignore

//@ts-ignore










// Database initialization
_database__WEBPACK_IMPORTED_MODULE_10__.database.init().then(onDatabaseInit);
// Server initialization (will initialize session middleware only when DB is available)
function onDatabaseInit(flagDBAvailable) {
    let app = express__WEBPACK_IMPORTED_MODULE_1___default()();
    app.set("port", (process.env.PORT || 5000));
    // Middleware
    if (flagDBAvailable) {
        app.use(_session__WEBPACK_IMPORTED_MODULE_7__.session.init());
    }
    app.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());
    app.use(function (req, res, next) {
        // Remove trailing slash
        if (req.path.substr(-1) === "/" && req.path.length > 1) {
            let query = req.url.slice(req.path.length);
            res.redirect(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.HttpStatus.MOVED_PERMANENTLY, req.path.slice(0, -1) + query);
        }
        else {
            next();
        }
    });
    app.use(function (req, res, next) {
        _security__WEBPACK_IMPORTED_MODULE_9__.security.requestFilter(req, res);
        next();
    });
    // Views redirection
    const viewPath = (0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)("views");
    app.all("/", function (request, response) {
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(viewPath, "home.html", response);
    });
    app.all("/edit", function (request, response) {
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(viewPath, "hub.html", response);
    });
    app.all("/edit/:editor", function (request, response) {
        let editor = request.params.editor;
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(viewPath, editor + ".html", response);
    });
    app.all("/test", function (request, response) {
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(viewPath, "test.html", response);
    });
    app.all("/privacy", function (request, response) {
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(viewPath, "privacy.html", response);
    });
    // Resources redirection
    const jsPath = (0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)("dist", "client"));
    app.get("/js/:script", function (request, response) {
        let file = request.params.script;
        if ((0,_security__WEBPACK_IMPORTED_MODULE_9__.isDevEnv)()) {
            // In development, use files with sourcemaps
            file = file.replace(".min.", ".");
        }
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(jsPath, file, response);
    });
    let libPath = (0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)("assets", "lib"));
    app.get("/lib/:script", function (request, response) {
        let file = request.params.script;
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(libPath, file, response);
    });
    app.get("/data/:type/:file", function (request, response) {
        let file = request.params.file;
        let type = _common_Utils__WEBPACK_IMPORTED_MODULE_6__.Utils.convertStringToEnum(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.ResourceType, request.params.type);
        if (type === _common_Constants__WEBPACK_IMPORTED_MODULE_5__.ResourceType.CONFIGURATION) {
            let filePath = (0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)("data", _common_Constants__WEBPACK_IMPORTED_MODULE_5__.ResourceType.CONFIGURATION));
            _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(filePath, file, response);
            return;
        }
        else {
            let lang = request.headers.lang;
            _database__WEBPACK_IMPORTED_MODULE_10__.database.read(type, file, _session__WEBPACK_IMPORTED_MODULE_7__.session.getUser(request), response, lang);
        }
    });
    const assetsPath = (0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)("assets");
    app.get("/assets/:file", function (request, response) {
        let file = request.params.file;
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(assetsPath, file, response);
    });
    app.get("/assets/:type/:file", function (request, response) {
        let file = request.params.file;
        let type = _common_Utils__WEBPACK_IMPORTED_MODULE_6__.Utils.convertStringToEnum(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.ResourceType, request.params.type);
        let filePath = (0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)("assets", type));
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(filePath, file, response);
    });
    app.get("/assetlist/:type/", function (request, response) {
        let type = _common_Utils__WEBPACK_IMPORTED_MODULE_6__.Utils.convertStringToEnum(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.ResourceType, request.params.type);
        let filePath = (0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)("assets", type));
        _utils__WEBPACK_IMPORTED_MODULE_8__.listFiles(filePath, response);
    });
    const stylePath = (0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)("style"));
    app.get("/style/:file", function (request, response) {
        let file = request.params.file;
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(stylePath, file, response);
    });
    app.get("/style/:path/:file", function (request, response) {
        let pathS = request.params.path;
        let file = request.params.file;
        let filePath = (0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)("style", pathS));
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(filePath, file, response);
    });
    let workersPath = (0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)("src", "workers"));
    app.get("/workers/:script", function (request, response) {
        let file = request.params.script;
        response.set("Service-Worker-Allowed", "..");
        _utils__WEBPACK_IMPORTED_MODULE_8__.sendFile(workersPath, file, response);
    });
    // Server logic
    app.post("/edit/:type/:id", function (request, response) {
        if (_session__WEBPACK_IMPORTED_MODULE_7__.session.isAuthenticated(request)) {
            let fileId = request.params.id;
            let type = _common_Utils__WEBPACK_IMPORTED_MODULE_6__.Utils.convertStringToEnum(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.ResourceType, request.params.type);
            _security__WEBPACK_IMPORTED_MODULE_9__.security.getBodyData(request, response, function (data) {
                _database__WEBPACK_IMPORTED_MODULE_10__.database.write(type, fileId, data, _session__WEBPACK_IMPORTED_MODULE_7__.session.getUser(request), response);
            });
        }
        else {
            response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.HttpStatus.FORBIDDEN).send("");
        }
    });
    app.get("/news", function (request, response) {
        if (_session__WEBPACK_IMPORTED_MODULE_7__.session.isAuthenticated(request)) {
            _database__WEBPACK_IMPORTED_MODULE_10__.database.getNews(_session__WEBPACK_IMPORTED_MODULE_7__.session.getUser(request), response);
        }
        else {
            response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.HttpStatus.FORBIDDEN).send("");
        }
    });
    app.get("/v", function (request, response) {
        (0,fs__WEBPACK_IMPORTED_MODULE_3__.readFile)("package.json", "utf8", function (err, data) {
            if (err !== null) {
                console.error(err);
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.HttpStatus.INTERNAL_SERVER_ERROR).send("");
            }
            else {
                let packageJson = JSON.parse(data);
                response.send(packageJson.name + " " + packageJson.version);
            }
        });
    });
    app.post("/auth", function (request, response) {
        let authResponse;
        _session__WEBPACK_IMPORTED_MODULE_7__.session.doLogin(request, response, () => {
            authResponse = {
                result: true
            };
            try {
                response.json(authResponse);
            }
            catch (e) {
                console.warn("Exception catched on response.json(): ");
                console.trace(e);
            }
        }, () => {
            console.error("Login failed");
            authResponse = {
                result: false
            };
            response.json(authResponse);
        });
    });
    app.get("/logout", function (request, response) {
        _session__WEBPACK_IMPORTED_MODULE_7__.session.doLogout(request, response, () => {
            response.send("");
        });
    });
    app.post("/issue", function (request, response) {
        _security__WEBPACK_IMPORTED_MODULE_9__.security.getBodyData(request, response, (data) => {
            let req;
            try {
                req = JSON.parse(data);
            }
            catch (e) {
                console.error("Cannot parse body: ");
                console.error(data);
                response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.HttpStatus.BAD_REQUEST).send("");
                return;
            }
            let reCaptchaCallback = function (success) {
                if (success) {
                    _services__WEBPACK_IMPORTED_MODULE_11__.services.openGitHubIssue(request, response, req);
                }
                else {
                    console.error("ReCaptcha token validation failed");
                    response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.HttpStatus.BAD_REQUEST).send("");
                }
            };
            _services__WEBPACK_IMPORTED_MODULE_11__.services.validateReCaptchaToken(request, response, reCaptchaCallback, req.captchaToken, request.ip);
        });
    });
    app.get("/health", function (request, response) {
        let healthResponse = {
            database: flagDBAvailable
        };
        response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.HttpStatus.OK).send(healthResponse);
    });
    app.all("/teapot", function (request, response) {
        response.status(_common_Constants__WEBPACK_IMPORTED_MODULE_5__.HttpStatus.IM_A_TEAPOT).send("🫖");
    });
    let server;
    let port = app.get("port");
    if (!(0,_security__WEBPACK_IMPORTED_MODULE_9__.isDevEnv)()) {
        // Hosting provider will take care of HTTPS
        server = app.listen(port);
    }
    else {
        // Setup HTTPS with self-signed cert for local dev
        server = (0,https__WEBPACK_IMPORTED_MODULE_4__.createServer)(_security__WEBPACK_IMPORTED_MODULE_9__.security.getLocalServerOptions(), app).listen(port);
    }
    server.on("listening", function () {
        console.log("L4W is running on port", port);
    }).on("error", function (err) {
        console.trace(err);
        if (err.code === "EADDRINUSE") {
            console.error("Another instance is already running on port " + err.port);
        }
        else {
            console.error(err);
        }
        process.exit();
    });
}

})();

/******/ })()
;
//# sourceMappingURL=l4w-server.cjs.map