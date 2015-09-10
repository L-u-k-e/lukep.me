var express = require('express'),
		path = require('path'),
		sass = require('node-sass-middleware'),
		app = express(),
		server;
	      	
//run setup script
require(path.join(__dirname, 'setup'));

//compile sass
app.use(sass({
	src: path.join(__dirname, 'public/stylesheets'),
	dest: path.join(__dirname, 'public/stylesheets/compiled_css'),
	outputStyle: 'compressed',
	prefix: '/stylesheets/compiled_css'
}));

//set up static file serving
app.use(express.static(__dirname + '/public'));

//listen
server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('test app listening at http://%s:%s', host, port);
});  



