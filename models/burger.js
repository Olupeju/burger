var orm = require("../config/orm.js");

var burger = {
	all: function(cb){
		orm.selectAll(function(res){
			cb(res);
		})
	},
	create: function(burger,cb){
		orm.insertOne(burger,function(res){
			cb(res);
		})

	},
	update: function(id,cb){
		orm.updateOne([id],function(res){
			cb(res)
		})
	}
}

module.exports = burger;