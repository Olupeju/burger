var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// set route 
router.get("/", function(req, res) {
  burger.all(function(data) {
  	//set table data as an array with key burger
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//post new burger to the table
router.post("/", function(req, res){
	console.log(req.body.input);
	burger.create(req.body.input, function(){
		res.redirect("/");
	})
});

//update burgers to devoured
router.put("/:id", function(req, res) {
  var id = req.params.id;

  console.log(id);

  burger.update("devoured",true, id, function(){
  	res.redirect("/");
  })
});

module.exports = router;