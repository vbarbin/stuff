module.exports = {
	run: function() {
		var express = require('express');
		var app = new express();
		app.use('/', express.static(__dirname + '\\..\\client\\'));
		app.use('/', express.static(__dirname + '\\..\\assets\\'));
		app.use('/libs', express.static(__dirname + '\\..\\bower_components\\'));
		console.log('Exposing ' + __dirname + '/../client/');
		app.listen(8080, function() {
			console.log('Listening on port 8080');
		});
	} 
}