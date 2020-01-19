var http = require('http');
var fs = require('fs');

// readFileSyncメソッドでhtmlファイルを読み込み
// 同期処理でファイル読み込みを行うメソッド
var indexPage = fs.readFileSync('./03_index.html', 'utf-8');
var nextPage = fs.readFileSync('./03_next.html', 'utf-8');

var server = http.createServer(function(req, res){
	var target = "";
	switch(req.url){
		case '/':
		case '/index':
			// 事前に読み込んだファイルを再利用
			target = indexPage;
			break;
		case '/next':
			// 事前に読み込んだファイルを再利用
			target = nextPage;
			break;
		default:
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.end('bad request');
			return;
	}
	res.writeHead(200, {'Content-Type': 'text/html'});
	// 事前に読み込んだファイルを再利用
	res.write(target);
	res.end();
});

server.listen(1234);
console.log('start web server');
