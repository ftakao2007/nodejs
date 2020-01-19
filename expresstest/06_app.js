var express = require('express');
var ejs = require('ejs');
var app = express();

var msg = "";

app.get('/', function(req, res){
	res.render('06_temp.ejs', {});
});

app.post('/ajax', function(req, res) {
	msg += 'hoge';
	res.json({
		msg: msg
	});
});

var server = app.listen(1234, function() {
	console.log('start web server');
});
