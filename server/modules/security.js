
module.exports = {
    getBodyData: function(request, response, callback) {
	    var queryData = "";
	    if(request.method === "POST") {
	        request.on("data", function(data) {
	            queryData += data;
	            if(queryData.length > 1e6) {
	                queryData = "";
	                response.status(413).end();
	                request.connection.destroy();
	            }
	        });
	        request.on('end', function() {
	            callback(queryData);
	        });

	    } else {
	        response.status(405);
	        response.end();
	    }
	},
	
	validateTokeninfoResponse: function(data) {
	    //see: https://developers.google.com/identity/sign-in/web/backend-auth#verify-the-integrity-of-the-id-token
		//TODO log failed login attempts
		
		//The value of aud in the ID token is equal to one of your app's client IDs. This check is necessary to prevent ID tokens issued to a malicious app being used to access data about the same user on your app's backend server.
		if(data.aud !== "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com") {
			return false;
		}
		
		//The value of iss in the ID token is equal to accounts.google.com or https://accounts.google.com.
		if(data.iss !== "accounts.google.com" && data.iss !== "https://accounts.google.com") {
			return false;
		}
		
		//The expiry time (exp) of the ID token has not passed.
		if(data.exp < Math.floor((new Date).getTime()/1000)) {
			return false;
		}
		
		return true;		
	}
}