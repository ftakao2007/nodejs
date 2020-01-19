var express = require('express');
var ejs = require('ejs');
// body-parserを扱うためのオブジェクト生成
var bodyParser = require('body-parser');
var app = express();

app.engine('ejs', ejs.renderFile);
// body-parserの初期化
// -> リクエストオブジェクトのbodyプロパティにPOSTパラメータがまとめられる
app.use(bodyParser.urlencoded({
	extended: true
}));

// リクエストオブジェクトのqueryプロパティを書き出し
// -> ExpressではGETパラメータはリクエストオブジェクトのqueryプロパティにまとめられている
app.get('/', function(req, res){
	console.log('--- GET Request---');
	console.log('name: ' + req.query.name);
	console.log('age: ' + req.query.age);
	res.render('03_temp.ejs', {
	});
});

app.post('/', function(req, res){
	console.log('--- POST Request---');
	console.log('name: ' + req.body.name);
	console.log('age: ' + req.body.age);
	res.render('03_temp.ejs', {
	});
});

var server = app.listen(1234, function() {
	console.log('start web server');
});
