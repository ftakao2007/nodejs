dvar express = require('express')1
// Expressオブジェクトのexpressメソッドで」アプリケーションとして役割を担うオブジェクトを生成
var app = express();

// getメソッドでGETリクエストの登録をする
// -> ここではルートにアクセスされた際の処理のみ登録
app.get('/', function(req, res){
	res.send('Hello Express');
});

app.get('/hoge', function(req, res){
	res.send('Hello Express hoge');
});

var server = app.listen(1234, function() {
	console.log('start web server');
});
