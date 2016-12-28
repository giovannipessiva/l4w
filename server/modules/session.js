var Session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(Session.Store);
var https = require('https');

var utils = require(__dirname + '/utils');
var security = require(__dirname + '/security');
var models = require(__dirname + "/models");
var database = require(__dirname + '/database');

module.exports = {
		
	cookieName: "l4w.session",
	
	init: function(){
		return Session({
			cookie: {
				secure: security.getSecureCookieSetting(),
				maxAge: null
			},
			name: this.cookieName,
			proxy: true,
			resave: false,
			saveUninitialized: true,
			secret: process.env.SESSION_SECRET,
			store: new SequelizeStore({
				db: models,
				table: 'usr_session'
			})
		});
	},
	
	getUser: function(request) {
		if(utils.isEmpty(request.session.user) && security.isAuthenticationDisabled()) {
			return "-1";
		}
		return request.session.user;
	},
	
	isAuthenticated: function(request) {
		if(security.isAuthenticationDisabled()) {
			return true;
		}
		return !utils.isEmpty(module.exports.getUser(request));
	},

	doLogin: function(request, response, onSuccess, onFailure) {
		if(!this.isAuthenticated(request)) {
			// No valid session, use post data to authenticate user
			security.getBodyData(request,response,function(data){
				if(!utils.isEmpty(data)) {
					var paramMap = utils.parseParameters(data);
					https.get("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token="+paramMap.token, function(res) {
						res.on('data', function(buffer) {
							var d = JSON.parse(buffer.toString("utf8"));
							if(security.validateTokeninfoResponse(d)) {
								database.logUser(d.email,request,response);
								onSuccess();
							} else {
								// Authentication failed
								onFailure();
							}
						});
					}).on('error', function(e) {
						// Google API problem
						console.error(e);
						onFailure();
					});
				} else {
					onFailure();
				}
			});
		} else {
			// Valid session found
			database.logUserSessionAccess(request.session.user);
			onSuccess();
		}
	},
	
	doLogout: function(request,response,callback) {
		request.session.destroy(function(){
			request.session = null;
	        response.clearCookie(this.cookieName,{ path: "/" });
	        callback();
	    });
	}
}
