var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res){
	var urlParts = url.parse(req.url);
	var path = __dirname + '/' + urlParts.pathname;
	var stream = fs.createReadStream(path);
	// pipeメソッドで読み込んだデータを引き素手指定したオブジェクトにそのまま流し込める
	// -> イベントハンドラを登録する必要が無くなる
	// -> 読み込み完了時に内部でレスポンスのendメソッドも呼び出してくれる
	// ※ 静的ファイルの供給にはストリームのpipeメソッドを使うべき
	stream.pipe(res);

	// stream.on('data', function(data){
	//	res.write(data);
	// });
	// stream.on('end', function(data){
	// 	res.end();
	// });
});

server.listen(1234);
console.log('start web server');
