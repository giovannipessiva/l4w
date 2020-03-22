import { HttpStatus } from "../common/Constants"
import * as utils from "./utils"
import { models } from "./models/index"

export namespace security {
        
    export function isDevEnv() {
        return "development" === process.env.NODE_ENV;
    }
    
    export function isAuthenticationDisabled() {
        return isDevEnv() && "true" === process.env.DISABLE_AUTHENTICATION;
    }
    
    export function logSecurityEvent(event: any, info: any) {
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
    
    export function getBodyData(request: any, response: any, callback: any) {
        var queryData = "";
        if(request.method === "POST") {
            request.on("data", function(data: any) {
                queryData += data;
                if(queryData.length > 1e6) {
                    logSecurityEvent(HttpStatus.REQUEST_TOO_LONG,queryData);
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
    
    export function requestFilter(req: any, res: any, next: any) {
        // Always redirect to https
        if (!req.secure && req.get("x-forwarded-proto") !== "https"
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
        res.setHeader("Content-Security-Policy","default-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data: https://*.gstatic.com https://*.googleapis.com https://*.google.com https://*.google-analytics.com");
        // Random referrer policy
        res.setHeader("Referrer-Policy", "origin-when-cross-origin");
        // Reduce information exposure
        res.removeHeader("Server");
        res.removeHeader("X-Powered-By");
        next();
    }
}