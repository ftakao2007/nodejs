var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

var temp = fs.readFileSync('./02_temp.ejs', 'utf-8');

var server = http.createServer(function(req, res){
	// EJSオブジェクトのrenderメソッド
	// 第一引数 : あらかじめ読み込んでおいたテンプレート
	// 第二引数 : テンプレート上の特殊タグに埋め込むための値を連想配列で指定
	var data = ejs.render(temp, {
		title: 'EJS TEST',
		contents1: '<p>ここはエスケープされない</p>',
		contents2: '<p>ここはエスケープされる</p>',
		arr: ['いちご','メロン','バナナ']
	});
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.end();
});



server.listen(1234);
console.log('start web server');
