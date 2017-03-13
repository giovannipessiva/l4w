var HttpStatus = require('http-status-codes');
var Sequelize = require("sequelize");

var models = require(__dirname + "/models");
var utils = require(__dirname + "/utils");

module.exports = {
		
	isDevEnv: function() {
		return "development" === process.env.NODE_ENV;
	},
	
	isAuthenticationDisabled: function() {
		return module.exports.isDevEnv() && "true" === process.env.DISABLE_AUTHENTICATION;
	},
	
	logSecurityEvent: function(event, info) {
		if(utils.isEmpty(info)) {
			info = "(empty)";
		}
		models.log_security.upsert({
			event: event.substring(0,15),
			info: info.substring(0,127),
			date: new Date()
		});
	},
	
    getBodyData: function(request, response, callback) {
	    var queryData = "";
	    if(request.method === "POST") {
	        request.on("data", function(data) {
	            queryData += data;
	            if(queryData.length > 1e6) {
	            	this.logSecurityEvent(HttpStatus.REQUEST_TOO_LONG,queryData);
	                queryData = "";
	                response.status(HttpStatus.REQUEST_TOO_LONG).send("");
	                request.connection.destroy();  
	            }
	        });
	        request.on('end', function() {
	            callback(queryData);
	        });

	    } else {
	    	callback(null);
	    }
	},
	
	validateTokeninfoResponse: function(data) {
		if(utils.isEmpty(data)) {
			return false;
		}
		
		//see: https://developers.google.com/identity/sign-in/web/backend-auth#verify-the-integrity-of-the-id-token

		//The value of aud in the ID token is equal to one of your app's client IDs. This check is necessary to prevent ID tokens issued to a malicious app being used to access data about the same user on your app's backend server.
		if(data.aud !== "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com") {
			this.logSecurityEvent("Login.aud",data.aud);
			return false;
		}
		
		//The value of iss in the ID token is equal to accounts.google.com or https://accounts.google.com.
		if(data.iss !== "accounts.google.com" && data.iss !== "https://accounts.google.com") {
			this.logSecurityEvent("Login.iss",data.iss);
			return false;
		}
		
		//The expiry time (exp) of the ID token has not passed.
		if(data.exp < Math.floor((new Date).getTime()/1000)) {
			return false;
		}
		
		return true;		
	},
	
	getSecureCookieSetting: function() {
		if(this.isDevEnv()) {
			return false; // Cookies will work on http connection
		} else {
			return true; // Cookies will work only with https
		}
	}
}