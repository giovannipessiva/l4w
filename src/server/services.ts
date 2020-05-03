import { IncomingMessage } from "http"
import { get, request } from "https"
import { Request, Response } from "express"

import { security } from "./security"
import { IEmptyCallback, IResponseCallback } from "../client/core/util/Commons";
import { IIssueRequest, IIssueResponse } from "../common/ServerAPI";
import { session } from "./session";
import { HttpStatus } from "../common/Constants";

/**
 * This module manage invocation of external services
 */
export namespace services {

    export function validateGoogleToken(request: Request, response: Response, onSuccess: IResponseCallback, onFailure: IEmptyCallback, token: string) {
        get("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + token, function(res: IncomingMessage) {
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

    export function validateFacebookToken(request: Request, response: Response, onSuccess: IResponseCallback, onFailure: IEmptyCallback, token: string, userId?: string) {
        let access_token = security.getFacebookAccessToken();
        get("https://graph.facebook.com/debug_token?input_token=" + token + "&access_token=" + access_token, function(res: IncomingMessage) {
            let authResponse: string = "";
            res.on("data", function(buffer: string) {
                authResponse += buffer;
            });
            res.on("end", function() {
                try {
                    let auth = JSON.parse(authResponse);
                    if(security.validateFacebookTokeninfoResponse(auth.data, userId)) {
                        get("https://graph.facebook.com/" + userId + "?fields=email&access_token=" + token, function(res: IncomingMessage) {
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

    const ACCEPTED_LABELS = [
        "bug", "enhancement", "question"
    ]

    export function openGitHubIssue(request: Request, response: Response, req: IIssueRequest): void {
        let user = session.getUser(request);
        if(user === undefined) {
            console.error("Cannot open issue if there is no valid session");
            response.status(HttpStatus.FORBIDDEN).send("");
            return;
        }
        if(process.env.GITHUB_TOKEN === undefined) {
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
        post("api.github.com", "/repos/giovannipessiva/l4w/issues", JSON.stringify(body), headers, function(responseBody?: string) {
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