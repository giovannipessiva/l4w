//@ts-ignore
import pkg from "bcryptjs";
const { hash } = pkg;
import { Request as ExpressRequest, Response as ExpressResponse } from "express"
import { ServerOptions } from "https"
import { readFileSync } from "fs"
import { SessionOptions } from "express-session"

import { registerSecurityEvent } from "./database"
import { HttpStatus } from "../common/Constants"
import { Utils } from "../common/Utils"
import { gameConfig } from "../common/GameConfig";

export namespace security {

    let flagAlertNoEndVar = false;

    export function isDevEnv() {
        if(process.env.NODE_ENV === undefined) {
            if(flagAlertNoEndVar) {
                flagAlertNoEndVar = true;
                console.warn("No ENV defined, defaulting to development");
            }
            // This is a bad practice, but necessary in order to
            // being able to run the node server locally without any config
            return true;
        }
        return "development" === process.env.NODE_ENV;
    }
    
    export function isAuthenticationDisabled() {
        return isDevEnv() && "true" === process.env.DISABLE_AUTHENTICATION;
    }
    
    export function logSecurityEvent(event: any, info: string) {
        if(Utils.isEmpty(info)) {
            info = "(empty)";
        }
        registerSecurityEvent(event, info);
    }
    
    export function getBodyData(request: ExpressRequest, response: ExpressResponse, callback: any) {
        var queryData = "";
        if(request.method === "POST") {
            request.on("data", function(chunk: any) {
                queryData += chunk;
                if(queryData.length > 1e6) {
                    logSecurityEvent(HttpStatus.REQUEST_TOO_LONG, queryData);
                    queryData = "";
                    response.status(HttpStatus.REQUEST_TOO_LONG).send("");
                    request.connection.destroy();  
                }
            });
            request.on("end", function() {
                callback(queryData);
            });

        } else {
            callback(null);
        }
    }
    
    export function validateGoogleTokeninfoResponse(data: any) {
        if(Utils.isEmpty(data)) {
            return false;
        }
        
        //see: https://developers.google.com/identity/sign-in/web/backend-auth#verify-the-integrity-of-the-id-token

        //The value of aud in the ID token is equal to one of your app's client IDs.
        //This check is necessary to prevent ID tokens issued to a malicious app being used to access data about the same user on your app's backend server.
        if(data.aud !== gameConfig.services.google.oauth.applicationId) {
            logSecurityEvent("Login.aud", data.aud);
            console.warn("Access token is invalid for this application");
            return false;
        }
        
        //The value of iss in the ID token is equal to accounts.google.com or https://accounts.google.com.
        if(data.iss !== "accounts.google.com" && data.iss !== "https://accounts.google.com") {
            logSecurityEvent("Login.iss", data.iss);
            console.warn("Access token is invalid for this user");
            return false;
        }
        
        //The expiry time (exp) of the ID token has not passed.
        if(data.exp < Math.floor((new Date).getTime()/1000)) {
            console.warn("Expiry time passed");
            return false;
        }
        
        return true;        
    }

    export function validateFacebookTokeninfoResponse(data: any, userId?: string) {
        if(Utils.isEmpty(data)) {
            return false;
        }

        //see: https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow#checktoken

        // Check that access token is valid for this application
        if(data.app_id !== gameConfig.services.facebook.applicationId) {
            logSecurityEvent("Login.aud", data.app_id);
            console.warn("Access token is invalid for this application");
            return false;
        }
        
        // Check that access token is valid for this user
        if(data.user_id !== userId) {
            logSecurityEvent("Login.iss", data.user_id);
            console.warn("Access token is invalid for this user");
            return false;
        }

        // Check validity flag
        if(!data.is_valid) {
            console.warn("Flag is_valid is not set to true");
            return false;
        }

        //The expiry time (expires_at) of the ID token has not passed.
        if(data.expires_at < Math.floor((new Date).getTime()/1000)) {
            console.warn("Expiry time passed");
            return false;
        }

        return true;
    }

    export function validateGoogleReCaptchaResponse(gResponse: any): boolean {
        //see: https://developers.google.com/recaptcha/docs/v3#site_verify_response
        if(gResponse.success !== true) {
            return false;
        }
        if(gResponse.score < 0.5) {
            return false;
        }
        return true;
    }
    
    export function getCookieSettings(): SessionOptions["cookie"] {
        return {
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
            secure: !isDevEnv(), // In development, cookies will work on http connection
            sameSite: "lax"
        };
    }
    
    export function requestFilter(req: ExpressRequest, res: ExpressResponse) {
        // Always redirect to https
        if (!req.secure && req.get("x-forwarded-proto") !== "https") {
            // The "x-forwarded-proto" check is for Heroku
            return res.redirect("https://" + req.get("host") + req.url);
        }
        // Explicitly force HTTPS
        res.setHeader("Strict-Transport-Security","max-age=31536000");
        // Enable browser XSS protection
        res.setHeader("X-XSS-Protection","1;mode=block");
        // Prevent MIME-sniffing attacks (definitely not useless)
        res.setHeader("X-Content-Type-Options","nosniff");
        // Allow framing only from trusted sources
        res.setHeader("X-Frame-Options", "ALLOW-FROM http://rpt.altervista.org");
        // Very basic CSP
        res.setHeader("Content-Security-Policy","default-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data: " 
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

    /**
     * NB this cannot be used for password hashing, since it uses a fixed salt
     * 
     * @param plaintext string to hash
     */
    export function computeUnsafeHash(plaintext: string): Promise<string> {
        return hash(plaintext, "$2b$10$OBjW2ZGF6rpUJKWEA9/kmO");
    }

    /**
     * Return a server configuration options for local development use only
     */
    export function getLocalServerOptions(): ServerOptions {
        if(!isDevEnv()) {
            console.error("Cannot use local server options when ENV !== development");
            process.exit();
        }
        return {
            key: readFileSync("assets/localdev-key.pem"),
            cert: readFileSync("assets/localdev-cert.pem")
        };
    }

    export function sanitizeIssueDescription(description: string): string {
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
}