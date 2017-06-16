
/**
 * Following are the config parameters for mongodb so you can set accordingly to your server.
 * 
 * host-name: your mongodb host name
 * port: your mongodb port
 * db-name: your database name
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://host-name:port/db-name');

var userController = require('./controller/user');
var quotationsController = require('./controller/quotations');

app.use(bodyParser.json());
app.use('/user', userController);
app.use('/quotations', quotationsController);

var port = (process.env.PORT || 3003);

app.listen(port, function () {
	console.log('Server running on -- ' + port);
});
