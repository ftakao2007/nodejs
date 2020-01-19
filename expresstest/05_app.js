var express = require('express');
var ejs = require('ejs');
var app = express();
// express-sessionのオブジェクト作成
var session = require('express-session');

app.engine('ejs', ejs.renderFile);
// express-sessionの利用宣言
// secret : セッションのハッシュ化に使用するための任意文字列
// resave : リクエストのたびに変更が無くてもセッションデータを保存しなおすかどうか
// saveUninitialized : 未初期化状態のセッションを保存するかどうか
app.use(session({
	secret : 'hoge',
	resave : true,
	saveUninitialized : true,
}));

app.get('/', function(req, res){
	var cnt = req.session.cnt == undefined ? 0 : req.session.cnt;
	cnt++;
	// 読み出しに使ったreqプロパティに対して値をセットする
	// cookieの時はres、sessionのときはreq
	req.session.cnt = cnt;

	res.render('05_temp.ejs', {
		cnt: cnt
	});
});


var server = app.listen(1234, function() {
	console.log('start web server');
});
