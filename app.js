// Declare express app
var express = require('express');
var app = express();


// Serve static public file
app.use(express.static(__dirname + '/client'));


// Set port listening
app.listen(8080, function () {
	console.log("Listening on port: 8080");
});