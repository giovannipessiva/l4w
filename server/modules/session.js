const Session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(Session.Store);
const https = require('https');

const utils = require(__dirname + '/utils');
const security = require(__dirname + '/security');
const models = require(__dirname + "/models");
const database = require(__dirname + '/database');

module.exports = {
		
	cookieName: "l4w.session",
	
	init: function(){
		return Session({
			cookie: {
				secure: security.getSecureCookieSetting(),
				sameSite: "lax",
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
		if(utils.isEmpty(request.session.user)) {
			if(security.isAuthenticationDisabled()) {
				// Nel caso l'autenticazione sia disabilitata, forza l'utente 0
				return "0";
			}
			return undefined;
		}
		return request.session.user;
	},
	
	isAuthenticated: function(request) {
		if(security.isAuthenticationDisabled()) {
			return true;
		}
		return !utils.isEmpty(module.exports.getUser(request));
	},
	
	doLogout: function(request,response,callback) {
		request.session.destroy(function(){
			request.session = null;
	        response.clearCookie(this.cookieName,{ path: "/" });
	        callback();
	    });
	},

	doLogin: function(request, response, onSuccess, onFailure) {
		if(!this.isAuthenticated(request)) {
			// No valid session, use post data to authenticate user
			security.getBodyData(request,response,function(data){
				if(!utils.isEmpty(data)) {
					var paramMap = utils.parseParameters(data);
					https.get("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token="+paramMap.token, function(res) {
						res.setEncoding('utf8');
						var authResponse = "";
						res.on('data', function(buffer) {
							authResponse += buffer;
						});
						res.on('end', function() {
							try {
								var auth = JSON.parse(authResponse);
								if(security.validateTokeninfoResponse(auth)) {
									database.logUser(auth.email, request, response);
									onSuccess();
								} else {
									// Authentication failed
									onFailure();
								}
							} catch(e) {
								console.error("Unrecoverable session:");
								console.error(e);
								// Invalidate existing session, since it's unrecoverable
								module.exports.doLogout();
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
	}
}
