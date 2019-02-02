var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));


//set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//put routes to use
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//listen on port 3000
app.listen(port ,function(){
    console.log("App Listening on Port " + port);
});
