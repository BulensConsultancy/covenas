// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    = 	process.env.PORT || 8080;
var path = require('path');

var public = __dirname + "/public/";

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
	res.send('this is a sample!');	
});

// we'll create our routes here

// Get an instance of router
var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {

	// log each request to the console
	console.log(req.method, req.url);

	// continue doing what we were doing and go to the route
	next();	
});

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
    res.sendFile(path.join(public + "index.html"));
});

router.get('/about', function(req, res) {
    res.sendFile(path.join(public + "about.html"));
});

router.get('/environment', function(req, res) {
    res.sendFile(path.join(public + "environment.html"));
});

router.get('/courses', function(req, res) {
    res.sendFile(path.join(public + "courses.html"));
});

router.get('/gallery', function(req, res) {
    res.sendFile(path.join(public + "gallery.html"));
});

router.get('/contact', function(req, res) {
    res.sendFile(path.join(public + "contact.html"));
});

app.use('/', router);
app.use(express.static('public'))

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
