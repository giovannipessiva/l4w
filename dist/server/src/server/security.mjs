import pkg from "bcryptjs";
const { hash } = pkg;
import { readFileSync } from "fs";
import { registerSecurityEvent } from "./database";
import { HttpStatus } from "../common/Constants";
import { Utils } from "../common/Utils";
import { gameConfig } from "../common/GameConfig";
export var security;
(function (security) {
    function isAuthenticationDisabled() {
        return isDevEnv() && "true" === process.env.DISABLE_AUTHENTICATION;
    }
    security.isAuthenticationDisabled = isAuthenticationDisabled;
    function logSecurityEvent(event, info) {
        if (Utils.isEmpty(info)) {
            info = "(empty)";
        }
        registerSecurityEvent(event, info);
    }
    security.logSecurityEvent = logSecurityEvent;
    function getBodyData(request, response, callback) {
        var queryData = "";
        if (request.method === "POST") {
            request.on("data", function (chunk) {
                queryData += chunk;
                if (queryData.length > 1e6) {
                    logSecurityEvent(HttpStatus.REQUEST_TOO_LONG, queryData);
                    queryData = "";
                    response.status(HttpStatus.REQUEST_TOO_LONG).send("");
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
        if (Utils.isEmpty(data)) {
            return false;
        }
        if (data.aud !== gameConfig.services.google.oauth.applicationId) {
            logSecurityEvent("Login.aud", data.aud);
            console.warn("Access token is invalid for this application");
            return false;
        }
        if (data.iss !== "accounts.google.com" && data.iss !== "https://accounts.google.com") {
            logSecurityEvent("Login.iss", data.iss);
            console.warn("Access token is invalid for this user");
            return false;
        }
        if (data.exp < Math.floor((new Date).getTime() / 1000)) {
            console.warn("Expiry time passed");
            return false;
        }
        return true;
    }
    security.validateGoogleTokeninfoResponse = validateGoogleTokeninfoResponse;
    function validateFacebookTokeninfoResponse(data, userId) {
        if (Utils.isEmpty(data)) {
            return false;
        }
        if (data.app_id !== gameConfig.services.facebook.applicationId) {
            logSecurityEvent("Login.aud", data.app_id);
            console.warn("Access token is invalid for this application");
            return false;
        }
        if (data.user_id !== userId) {
            logSecurityEvent("Login.iss", data.user_id);
            console.warn("Access token is invalid for this user");
            return false;
        }
        if (!data.is_valid) {
            console.warn("Flag is_valid is not set to true");
            return false;
        }
        if (data.expires_at < Math.floor((new Date).getTime() / 1000)) {
            console.warn("Expiry time passed");
            return false;
        }
        return true;
    }
    security.validateFacebookTokeninfoResponse = validateFacebookTokeninfoResponse;
    function validateGoogleReCaptchaResponse(gResponse) {
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
        if (!req.secure && req.get("x-forwarded-proto") !== "https") {
            return res.redirect("https://" + req.get("host") + req.url);
        }
        res.setHeader("Strict-Transport-Security", "max-age=31536000");
        res.setHeader("X-XSS-Protection", "1;mode=block");
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("X-Frame-Options", "ALLOW-FROM http://rpt.altervista.org");
        res.setHeader("Content-Security-Policy", "default-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data: "
            + "https://*.gstatic.com https://*.googleapis.com https://*.google.com "
            + "https://connect.facebook.net https://www.facebook.com https://web.facebook.com https://graph.facebook.com "
            + "https://code.jquery.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net");
        res.setHeader("Referrer-Policy", "origin-when-cross-origin");
        res.setHeader("Set-Cookie", "HttpOnly;SameSite=Strict");
        res.removeHeader("Server");
        res.removeHeader("X-Powered-By");
    }
    security.requestFilter = requestFilter;
    function computeUnsafeHash(plaintext) {
        return hash(plaintext, "$2b$10$OBjW2ZGF6rpUJKWEA9/kmO");
    }
    security.computeUnsafeHash = computeUnsafeHash;
    function getLocalServerOptions() {
        if (!isDevEnv()) {
            console.error("Cannot use local server options when ENV !== development");
            process.exit();
        }
        return {
            key: readFileSync("assets/localdev-key.pem"),
            cert: readFileSync("assets/localdev-cert.pem")
        };
    }
    security.getLocalServerOptions = getLocalServerOptions;
    function sanitizeIssueDescription(description) {
        description = description.split("\n").join("\n>");
        description = description.split("http").join("ht#p");
        description = description.split("href").join("hr#f");
        description = description.replace(/\(.+[^ ]\.[^ ].+\)/g, "(###)");
        description = description.split("javascript").join("javascri#t");
        return description;
    }
    security.sanitizeIssueDescription = sanitizeIssueDescription;
})(security || (security = {}));
let flagAlertNoEndVar = false;
export function isDevEnv() {
    if (process.env.NODE_ENV === undefined) {
        if (flagAlertNoEndVar) {
            flagAlertNoEndVar = true;
            console.warn("No ENV defined, defaulting to development");
        }
        return true;
    }
    return "development" === process.env.NODE_ENV;
}
export function useSSLDatabaseConnection() {
    return !isDevEnv();
}
