var fs = require("fs");
var path = require("path");
var pg = require("pg");

var models = require(__dirname + "/models");
var utils = require(__dirname + "/utils");

function getDefaults(type,file) {
	if(!utils.isEmpty(file)) {
		return file;
	}
	if("map" === type) {
		//TODO ora c'è un record di default, dovrei fare l'upsert sul solo record interessato
		return "%MAPS%";
	}
}

module.exports = {
	init : function() {
		return new Promise(function(resolve, reject) {
			// Test authentication
			models.sequelize.authenticate().then(
					function() {
						resolve();
					}, function(err) {
				console.error("Authentication on PostgreSQL failed: " + err);
				reject();
			});
		});
	},
	
	read: function(type, file, response){
		file = getDefaults(type,file);
		
		if(type === "map") {
			models.l4w_map.findOne({
				where: {
					id: file
				},
				attributes: ["data"]
			}).then(function(result) {
				if(!utils.isEmpty(result)) {
					response.json(result.data);
				} else {
					response.status(404).send("Not found");
				}
			}, function(error) {
				console.log(error);
				response.status(500).send("Error");
			});
		}
	},
	
	write: function(type,file,data,response) {
		file = getDefaults(type,file);
		
		if(type === "map") {
			models.l4w_map.upsert({
				id: file,
				data: JSON.parse(data)
			}).then(function(result) {
				//FIXME perchè result è sempre false?
				console.log("Maps updated: " + file);
				response.status(200).send();
			}, function(error) {
				console.log(error);
				response.status(400).send();
			});
		}
	},
	
	logUser: function(user) {
		models.log_usr_access.findById(user).then(function(result) {
			if(result == null) {
				// First access for this user
				models.log_usr_access.upsert({
					user: user,
					first_seen: new Date(),
					last_seen: new Date(),
					access_counter: 1
				}).then(function(r) {
					console.log("User first access logged: " + user);
				}, function(error) {
					console.log(error);
				});
			} else {
				// User already known
				models.log_usr_access.update({
					last_seen: new Date(),
					access_counter: result.access_counter+1
				},{
					where: {
						user: user,
					}
				}).then(function(r) {
					console.log("User new access logged: " + user);
				}, function(error) {
					console.log(error);
				});
			}
		}, function(error) {
			console.log(error);
			response.status(500).send();
		});
	}
};
