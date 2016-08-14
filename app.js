require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

// Define the port to run on
app.set('port', 3000);

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
<<<<<<< HEAD
  next();
=======
  next(); 
>>>>>>> bf895ecfd8bcfcbf644d3b9016f4731c3f0e1a1d
});

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/fonts', express.static(__dirname + '/fonts'));

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
=======

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
>>>>>>> bf895ecfd8bcfcbf644d3b9016f4731c3f0e1a1d

// Add some routing
app.use('/api', routes);

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
<<<<<<< HEAD
});
=======
});
>>>>>>> bf895ecfd8bcfcbf644d3b9016f4731c3f0e1a1d
