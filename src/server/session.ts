//@ts-ignore
import Session from "express-session"
import { SessionOptions, Store } from "express-session"
//@ts-ignore
import SequelizeSessionInit from "connect-session-sequelize"
let SequelizeStoreConstructor = SequelizeSessionInit(Store);
import { Request as ExpressRequest, Response as ExpressResponse } from "express"

import * as utils from "./utils"
import { security } from "./security"
import { services } from "./services"
import { sequelizeInstance } from "./models/index"
import { database } from "./database"
import { IEmptyCallback } from "../client/core/util/Commons";
import { IAuthRequest } from "../common/ServerAPI";

export namespace session {
        
    export let cookieName = "l4w.session";
    
    export function init() {
        let secret: string =  process.env.SESSION_SECRET!;
        let store = new SequelizeStoreConstructor({
            db: sequelizeInstance,
            tableName: "usr_session2" //TODO delete original usr_session table, rename usr_session2 --> usr_session
        });
        // Call sync in order to generate the ${tableName} table
        store.sync();
        let sessionOptions: SessionOptions = {
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
    
    export function getUser(request: ExpressRequest): string | undefined {
        if(request === undefined || request.session === undefined || utils.isEmpty(request.session.user)) {
            if(security.isAuthenticationDisabled()) {
                // Nel caso l'autenticazione sia disabilitata, forza l'utente 0
                return "0";
            }
            return undefined;
        }
        return request.session.user;
    }
    
    export function setUser(request: ExpressRequest, user: string) {
        return request.session!.user = user;
    }

    export function isAuthenticated(request: ExpressRequest): boolean {
        if(security.isAuthenticationDisabled()) {
            return true;
        }
        return !utils.isEmpty(getUser(request));
    }

    export function doLogin(request: ExpressRequest, response: ExpressResponse, onSuccess: IEmptyCallback, onFailure: IEmptyCallback) {
        if(!session.isAuthenticated(request)) {
            // No valid session, use post data to authenticate user
            security.getBodyData(request, response, function(data: any){
                if(!utils.isEmpty(data)) {
                    let authRequest: IAuthRequest;
                    try {
                        authRequest = JSON.parse(data);
                    } catch(e) {
                        console.error("Cannot parse body: ");
                        console.error(data);
                        onFailure();
                        return;
                    }
                    let successCallback = function(email?: string) {
                        database.doUserLogin(email!, request, response);
                        onSuccess();
                    }
                    let errorCallback = function() {
                        doLogout(request, response, onFailure);
                    }
                    if(authRequest.service === "google") {
                        services.validateGoogleToken(request, response, successCallback, errorCallback, authRequest.token);
                    } else if(authRequest.service === "facebook") {
                        services.validateFacebookToken(request, response, successCallback, errorCallback, authRequest.token, authRequest.userId);
                    } else {
                        console.error("Unexpected auth service:" + authRequest.service);
                        onFailure();
                    }
                } else {
                    onFailure();
                }
            });
        } else {
            // Valid session found
            database.logAccess(getUser(request));
            onSuccess();
        }
    }
        
    export function doLogout(request: ExpressRequest, response: ExpressResponse, callback: IEmptyCallback) {
        response.clearCookie(session.cookieName, { path: "/" });
        if(request.session !== undefined) {
            request.session.destroy(function() {
                if(request.session !== undefined) {
                    console.warn("Session is not undefined after destroy, is this ok?");
                }
                callback();
            });
        } else {
            callback();
        }
    }
}
