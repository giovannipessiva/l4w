import { HttpStatus } from "../common/Constants"
import * as utils from "./utils"
import { models } from "./models/index"
//@ts-ignore TS1192
import bcrypt from "bcrypt"
import { Request, Response } from "express"

export namespace security {

    export function isDevEnv() {
        return "development" === process.env.NODE_ENV;
    }
    
    export function isAuthenticationDisabled() {
        return isDevEnv() && "true" === process.env.DISABLE_AUTHENTICATION;
    }
    
    export function logSecurityEvent(event: any, info: string) {
        if(utils.isEmpty(info)) {
            info = "(empty)";
        }
        let table: any = (models.log_security);
        table.upsert({
            event: event.substring(0,15),
            info: info.substring(0,127),
            date: new Date()
        });
    }
    
    export function getBodyData(request: Request, response: Response, callback: any) {
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
    
    export function validateTokeninfoResponse(data: any) {
        if(utils.isEmpty(data)) {
            return false;
        }
        
        //see: https://developers.google.com/identity/sign-in/web/backend-auth#verify-the-integrity-of-the-id-token

        //The value of aud in the ID token is equal to one of your app"s client IDs. This check is necessary to prevent ID tokens issued to a malicious app being used to access data about the same user on your app"s backend server.
        if(data.aud !== "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com") {
            logSecurityEvent("Login.aud",data.aud);
            return false;
        }
        
        //The value of iss in the ID token is equal to accounts.google.com or https://accounts.google.com.
        if(data.iss !== "accounts.google.com" && data.iss !== "https://accounts.google.com") {
            logSecurityEvent("Login.iss",data.iss);
            return false;
        }
        
        //The expiry time (exp) of the ID token has not passed.
        if(data.exp < Math.floor((new Date).getTime()/1000)) {
            console.log("expiry time passed"); //TODO is the expiry time enough?
            return false;
        }
        
        return true;        
    }
    
    export function getSecureCookieSetting() {
        if(isDevEnv()) {
            return false; // Cookies will work on http connection
        } else {
            return true; // Cookies will work only with https
        }
    }
    
    export function requestFilter(req: Request, res: Response, next: any) {
        // Always redirect to https
        if (!req.secure
                && req.get("x-forwarded-proto") !== "https"
                && process.env.NODE_ENV !== "development") {
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

        next();
    }

    /**
     * NB this cannot be used for password hashing, since it uses a fixed salt
     * @param plaintext string to hash
     */
    export function computeUnsafeHash(plaintext: string): Promise<string> {
        return bcrypt.hash(plaintext, "$2b$10$when_life_gives_you_lemons,_ask_for_salt_and_tequila");
    }
}