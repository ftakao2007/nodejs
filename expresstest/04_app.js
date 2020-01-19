var express = require('express');
var ejs = require('ejs');
var app = express();
// cookie-parserのオブジェクト作成
var cookieParser = require('cookie-parser');

app.engine('ejs', ejs.renderFile);
// cookie-parserの利用宣言
app.use(cookieParser());

app.get('/', function(req, res){
	// cookieから値を読みだして変数に格納
	var cnt = req.cookies.cnt == undefined ? 0 : req.cookies.cnt;
	cnt++;
	// cookieへの書き込み
	// 第一引数 : Cookieのキー名
	// 第二引数 : 値
	// 第三引数 : オプションの連想配列
	res.cookie('cnt', cnt, {maxAge: 5000});
	// 削除する場合はレスポンスオブジェクトのclearCookieメソッドに削除するキー名を指定

	res.render('04_temp.ejs', {
		cnt: cnt
	});
});


var server = app.listen(1234, function() {
	console.log('start web server');
});
