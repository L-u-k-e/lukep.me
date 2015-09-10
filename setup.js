#! /usr/bin/env node
//This script runs on server startup.

//It globs html files in the web_components directory and puts the 
//corresponding html includes in web_components/glob.js

//Obviously this is only for Dev. 


var glob = require('glob'), 
    fs = require('fs'),
    _ = require('underscore'),
    output = 'public/web_components/glob.html';

glob("public/web_components/**/*.html", function (er, matches) {
	var file_string = 
	'<!-- The contents of this file are overwritten everytime the server is \n' +
	'restarted. See startup.js for more details. -->\n\n';

	//remove the output file from the array of matches
	matches = _.without(matches, output);

	//generate output string from the matches array
	file_string += _.map(matches, function(file_name) { 
		return generateImport(file_name.replace('public',''))
	}).join('\n');

	fs.writeFileSync(output, file_string); 
});

function generateImport(string) {
	return '<link rel="import" href="'+ string + '">';
}


