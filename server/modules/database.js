var fs = require("fs");
var path = require("path");
var pg = require("pg");
var Sequelize = require("sequelize");
var HttpStatus = require('http-status-codes');

var models = require(__dirname + "/models");
var utils = require(__dirname + "/utils");
var constants = require(__dirname + "/constants");
var defaults = require(__dirname + "/defaults");

function getDefaults(type, file) {
	if (!utils.isEmpty(file)) {
		return file;
	}
	if ("map" === type) {
		// TODO ora c'è un record di default, dovrei fare l'upsert sul solo
		// record interessato
		return "%MAPS%";
	}
}

function logAccess(user) {
	// User already known, log this access
	models.log_access.update({
		last_seen : new Date(),
		access_counter : Sequelize.literal('access_counter + 1')
	}, {
		where : {
			user : user,
		}
	}).then(function(r) {
	}, function(error) {
		console.log(error);
	});
};

module.exports = {
	init : function() {
		return new Promise(function(resolve, reject) {
			// Test authentication
			models.sequelize.authenticate().then(function() {
				resolve();
			}, function(err) {
				console.error("Authentication on PostgreSQL failed: " + err);
				reject();
			});
		});
	},

	read : function(type, file, user, response) {
		file = getDefaults(type, file);
		switch (type) {
		case "map":
			console.log("map");
			models.l4w_map.findOne({
				where : {
					id : file
				},
				attributes : [ "data" ]
			}).then(
					function(result) {
						console.log(result);
						if (!utils.isEmpty(result)) {
							response.json(result.data);
						} else {
							response.status(HttpStatus.NOT_FOUND).send(
									defaults.getDefaultMap());
						}
					},
					function(error) {
						console.log(error);
						response.status(HttpStatus.INTERNAL_SERVER_ERROR).send(
								defaults.getDefaultMap());
					});
			break;
		case "save":
			if (!utils.isEmpty(user)) {
				models.usr_save.findOne({
					where : {
						user : user,
						id : file
					},
					attributes : [ "save" ]
				}).then(
						function(result) {
							if (!utils.isEmpty(result)) {
								response.json(result.save);
							} else {
								response.status(HttpStatus.NOT_FOUND).send(
										defaults.getDefaultSave());
							}
						},
						function(error) {
							console.log(error);
							response.status(HttpStatus.INTERNAL_SERVER_ERROR)
									.send(defaults.getDefaultSave());
						});
			} else {
				response.status(HttpStatus.OK).send(defaults.getDefaultSave());
			}
			break;
		};
	},

	write : function(type, file, data, response) {
		file = getDefaults(type, file);

		if (type === "map") {
			models.l4w_map.upsert({
				id : file,
				data : JSON.parse(data)
			}).then(function(result) {
				response.status(HttpStatus.OK).send();
			}, function(error) {
				console.log(error);
				response.status(HttpStatus.BAD_REQUEST).send();
			});
		}
	},

	logUserSessionAccess : logAccess,

	logUser: function(mail, request, response) {
		models.usr_list.findOne({
			where: {
				mail: mail
			}
		}).then(function(user_record) {
			if(user_record == null) {
				// First access, create the user
				models.usr_list.upsert({
					mail: mail,
				}).then(function(updated) {
					// Get the new user record
					models.usr_list.findOne({
						where: {
							mail: mail
						}
					}).then(function(user_new_record) {
						if(user_record == null) {						
							// Add user id to session
							request.session.user = user_new_record.user;
							request.session.save();
							
							// Send welcome event to the new user
							models.usr_event.upsert({
								user: user_new_record.user,
								event: constants.event.WELCOME,
								date: new Date()
							}).then(function(res) {
							}, function(error) {
								console.log(error);
							});
							
							// Log first access for the new user user
							models.log_access.upsert({
								user: user_new_record.user,
								first_seen: new Date(),
								last_seen: new Date(),
								access_counter: 1
							}).then(function(res) {
							}, function(error) {
								console.log(error);
							});
						} else {
							console.error("Registration failed for: " + mail);
						}
					}, function(error) {
						console.log(error);
						response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
					});
				}, function(error) {
					console.log(error);
					response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
				});
			} else {
				// Add user id to session
				request.session.user = user_record.user;
				request.session.save();
				
				// Log this access
				logAccess(user_record.user);
			}
		}, function(error) {
			console.log(error);
			response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
		});
	},

	getNews : function(user, response) {
		if (utils.isEmpty(user)) {
			response.json({});
		} else {
			models.usr_event.findAll({
				where : {
					user : user
				},
				attributes : [ 'event' ],
			}).then(function(events) {
				if (!utils.isEmpty(events)) {
					var eventsArray = new Array;
					for (var i = 0; i < events.length; i++) {
						eventsArray.push(events[i].event);
					}
					models.lst_event.findAll({
						where : {
							event : eventsArray
						}
					}).then(function(datas) {
						response.json(datas);
					});
				} else {
					response.json({});
				}
			})
		}
	}
};
