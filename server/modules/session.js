var Session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(Session.Store);

var security = require(__dirname + '/security');
var models = require(__dirname + "/models");

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
	}
}
