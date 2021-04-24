import Session from "express-session";
import { Store } from "express-session";
import SequelizeSessionInit from "connect-session-sequelize";
let SequelizeStoreConstructor = SequelizeSessionInit(Store);
import { security } from "./security";
import { services } from "./services";
import { sequelizeInstance } from "./models/index";
import { database } from "./database";
import { Utils } from "../common/Utils";
export var session;
(function (session) {
    session.cookieName = "l4w.session";
    function init() {
        let secret = process.env.SESSION_SECRET;
        let store = new SequelizeStoreConstructor({
            db: sequelizeInstance,
            tableName: "usr_session"
        });
        store.sync();
        let sessionOptions = {
            cookie: security.getCookieSettings(),
            name: session.cookieName,
            proxy: true,
            resave: false,
            saveUninitialized: true,
            secret: secret,
            store: store
        };
        return Session(sessionOptions);
    }
    session.init = init;
    function getUser(request) {
        if (request === undefined || request.session === undefined || Utils.isEmpty(request.session.user)) {
            if (security.isAuthenticationDisabled()) {
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
        if (security.isAuthenticationDisabled()) {
            return true;
        }
        return !Utils.isEmpty(getUser(request));
    }
    session.isAuthenticated = isAuthenticated;
    function doLogin(request, response, onSuccess, onFailure) {
        if (!session.isAuthenticated(request)) {
            security.getBodyData(request, response, function (data) {
                if (!Utils.isEmpty(data)) {
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
                        database.doUserLogin(email, request, response);
                        onSuccess();
                    };
                    let errorCallback = function () {
                        doLogout(request, response, onFailure);
                    };
                    if (authRequest.service === "google") {
                        services.validateGoogleToken(request, response, successCallback, errorCallback, authRequest.token);
                    }
                    else if (authRequest.service === "facebook") {
                        services.validateFacebookToken(request, response, successCallback, errorCallback, authRequest.token, authRequest.userId);
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
            database.logAccess(getUser(request));
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
