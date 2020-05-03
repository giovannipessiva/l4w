//@ts-ignore TS1192
import Session from "express-session"
//@ts-ignore TS1192
import SequelizeSessionInit from "connect-session-sequelize"
/* tslint:disable-next-line */
let SequelizeStore = SequelizeSessionInit(Session.Store);
import { Request, Response } from "express"

import * as utils from "./utils"
import { security } from "./security"
import { services } from "./services"
import { models } from "./models/index"
import { database } from "./database"
import { IEmptyCallback } from "../client/core/util/Commons";
import { IAuthRequest } from "../common/ServerAPI";

export namespace session {
        
    export let cookieName = "l4w.session";
    
    export function init(){
        let secret: string =  process.env.SESSION_SECRET!;
        let sessionOptions : Session.SessionOptions = {
            cookie: {
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                secure: security.getSecureCookieSetting(),
                sameSite: "lax"
            },
            name: session.cookieName,
            proxy: true,
            resave: false,
            saveUninitialized: true,
            secret: secret,
            store: new SequelizeStore({
                db: models,
                table: "usr_session"
            })
        };
        return Session(sessionOptions);
    }
    
    export function getUser(request: Request): string | undefined {
        if(request.session === undefined || utils.isEmpty(request.session.user)) {
            if(security.isAuthenticationDisabled()) {
                // Nel caso l"autenticazione sia disabilitata, forza l'utente 0
                return "0";
            }
            return undefined;
        }
        return request.session.user;
    }
    
    export function isAuthenticated(request: Request): boolean {
        if(security.isAuthenticationDisabled()) {
            return true;
        }
        return !utils.isEmpty(getUser(request));
    }

    export function doLogin(request: Request, response: Response, onSuccess: IEmptyCallback, onFailure: IEmptyCallback) {
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
            database.logAccess(request.session!.user);
            onSuccess();
        }
    }
        
    export function doLogout(request: Request, response: Response, callback: IEmptyCallback) {
        response.clearCookie(session.cookieName, { path: "/" });
        if(request.session !== undefined) {
            request.session.destroy(function(){
                request.session = undefined;
                callback();
            });
        } else {
            callback();
        }
    }
}
