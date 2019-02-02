var connection = require("../config/connection.js");

var orm = {
	selectAll: function(cb){
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, res){
			if (err){
				 throw err;
			}
			cb(res);
		});
	},
	insertOne: function(burger,cb){
		var queryString = "INSERT INTO burgers (burger_name) VALUES (?);";
		
		connection.query(queryString, [burger], function(err, res){
			if (err) {
				throw err;
			}
			cb(res);
		});

	},
	updateOne: function(id,cb){
		var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
		// queryString += " WHERE id= "+valueId;
		connection.query(queryString,[id], function(err, res){
			if (err){
				throw err;
			}
			cb(res);
		});
	}
};

module.exports = orm;