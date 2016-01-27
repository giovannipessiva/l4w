var pg = require('pg');
var Sequelize = require('sequelize');
var sequelize;

var utils = require(__dirname + '/utils');

module.exports = {
	testConnection: function() {
		// Test DB connection
		if (utils.isEmpty(process.env.DATABASE_URL)) {
		    console.error("Env variable DATABASE_URL undefined!");
		    process.exit(1);
		} else {
		    sequelize = new Sequelize(process.env.DATABASE_URL, {
		        dialect: 'postgres',
		        protocol: 'postgres',
		        dialectOptions: {
		            // ssl: true //Required for connection to Heroku PostgreSQL
		        }
		    });

		    sequelize.authenticate().catch(function(err) {
		        console.error("Connection to PostgreSQL failed: " + err);
		        process.exit(1);
		    }).done();
		}
	},
	read: function(type, file, response){
		if(type === "map"){
			//TODO leggi da DB la mappa richiesta, ritorna il JSON
			response.json("{}");
		}
		
	}
};