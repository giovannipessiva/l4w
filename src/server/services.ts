import { IncomingMessage } from "http"
import { get, request } from "https"
import { Request as ExpressRequest, Response as ExpressResponse } from "express"

import { security } from "./security"
import { IEmptyCallback, IResponseCallback, IBooleanCallback } from "../common/Commons";
import { IIssueRequest, IIssueResponse } from "../common/ServerAPI";
import { session } from "./session";
import { HttpStatus } from "../common/Constants";
import { Utils } from "../common/Utils";
import { gameConfig } from "../common/GameConfig";

/**
 * This module manage invocation of external services
 */
export namespace services {

    export function validateGoogleToken(request: ExpressRequest, response: ExpressResponse, onSuccess: IResponseCallback, onFailure: IEmptyCallback, token: string) {
        get(gameConfig.services.google.oauth.url + "/oauth2/v3/tokeninfo?id_token=" + token, function(res: IncomingMessage) {
            let authResponse: string = "";
            res.on("data", function(buffer: string) {
                authResponse += buffer;
            });
            res.on("end", function() {
                try {
                    let auth = JSON.parse(authResponse);
                    if(security.validateGoogleTokeninfoResponse(auth)) {
                        onSuccess(auth.email);
                    } else {
                        // Authentication failed
                        onFailure();
                    }
                } catch(e) {
                    console.error("Unrecoverable session:");
                    console.error(e);
                    onFailure();
                }
            });
        }).on("error", function(e: Error) {
            // Google API problem
            console.error(e);
            onFailure();
        });
    }

    export function validateFacebookToken(request: ExpressRequest, response: ExpressResponse, onSuccess: IResponseCallback, onFailure: IEmptyCallback, token: string, userId?: string) {
        if(Utils.isEmpty(process.env.FACEBOOK_SECRET)) {
            console.error("No env variable FACEBOOK_SECRET defined");
            onFailure();
            return;
        }
        let access_token = gameConfig.services.facebook.applicationId + "|" + process.env.FACEBOOK_SECRET;
        get(gameConfig.services.facebook.url + "/debug_token?input_token=" + token + "&access_token=" + access_token, function(res: IncomingMessage) {
            let authResponse: string = "";
            res.on("data", function(buffer: string) {
                authResponse += buffer;
            });
            res.on("end", function() {
                try {
                    let auth = JSON.parse(authResponse);
                    if(security.validateFacebookTokeninfoResponse(auth.data, userId)) {
                        get(gameConfig.services.facebook.url + "/" + userId + "?fields=email&access_token=" + token, function(res: IncomingMessage) {
                            let graphResponse: string = "";
                            res.on("data", function(buffer: string) {
                                graphResponse += buffer;
                            });
                            res.on("end", function() {
                                try {
                                    let graphData = JSON.parse(graphResponse);    
                                    onSuccess(graphData.email);
                                } catch(e) {
                                    console.error("Cannot read graph response");
                                    console.error(e);
                                    onFailure();
                                }
                            });

                        }).on("error", function(e: Error) {
                            // Facebook API problem
                            console.error(e);
                            onFailure();
                        });
                    } else {
                        // Authentication failed
                        onFailure();
                    }
                } catch(e) {
                    console.error("Unrecoverable session:");
                    console.error(e);
                    onFailure();
                }
            });
        }).on("error", function(e: Error) {
            // Facebook API problem
            console.error(e);
            onFailure();
        });
    }

    export function validateReCaptchaToken(request: ExpressRequest, response: ExpressResponse, callback: IBooleanCallback, token: string, ip: string) {
        let body = "secret=" + process.env.RECAPTCHA_SECRET + "&response=" + token + "&remoteip=" + ip;
        let headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        post(gameConfig.services.google.recaptcha.url, "/recaptcha/api/siteverify", body, headers, function(responseBody?: string) {
            try {
                if(responseBody === undefined) {
                    response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
                } else {
                    let gResponse = JSON.parse(responseBody);
                    callback(security.validateGoogleReCaptchaResponse(gResponse));
                }
            } catch(e) {
                console.error("Cannot read Google ReCaptcha response");
                console.error(e);
                callback(false);
            }
        });
    }

    const ACCEPTED_LABELS = [
        "bug", "enhancement", "question"
    ]

    export function openGitHubIssue(request: ExpressRequest, response: ExpressResponse, req: IIssueRequest): void {
        let user = session.getUser(request);
        if(user === undefined) {
            console.error("Cannot open issue if there is no valid session");
            response.status(HttpStatus.FORBIDDEN).send("");
            return;
        }
        if(Utils.isEmpty(process.env.GITHUB_TOKEN)) {
            console.error("No env variable GITHUB_TOKEN defined");
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
            return;
        }
        let issueDescription = "Issue generated from L4W bug reporting interface\nUser #" + user + " wrote:\n> ";
        issueDescription += security.sanitizeIssueDescription(req.description);
        let body = {
            title: "Feedback by " + user,
            body: issueDescription,
            labels: <string[]> []
        };
        if(req.label !== undefined && ACCEPTED_LABELS.includes(req.label)) {
            body.labels.push(req.label);
        }
        let headers = {
            "Accept": "application/vnd.github.v3+json", // https://developer.github.com/v3/#current-version
            "Authorization": "token " + process.env.GITHUB_TOKEN, // https://developer.github.com/v3/auth/#basic-authentication
            "User-Agent": "giovannipessiva" // https://developer.github.com/v3/#user-agent-required
        }
        post(gameConfig.services.github.url, "/repos/giovannipessiva/l4w/issues", JSON.stringify(body), headers, function(responseBody?: string) {
            try {
                if(responseBody === undefined) {
                    response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
                } else {
                    let ghResponse = JSON.parse(responseBody);
                    let res: IIssueResponse = {
                        url: ghResponse.html_url
                    }
                    response.json(res);
                }
            } catch(e) {
                console.error("Cannot read GitHub response");
                console.error(e);
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
            }
        });
    }

    function post(host: string, path: string, body: string, headers: any, callback: IResponseCallback) {
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
        let req = request(options, function(res) {
            let responseBody = "";
            res.setEncoding("utf8");
            res.on("data", function(buffer: string) {
                responseBody += buffer;
            }).on("end", function() {
                callback(responseBody);
            }).on("error", function(e: Error) {
                console.error(e);
                callback();
            });
        });
        req.write(body);
        req.end();
    }
}