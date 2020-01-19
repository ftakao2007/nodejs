var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res){
	var urlParts = url.parse(req.url);
	var path = __dirname + '/' + urlParts.pathname;
	// createReadStreamメソッドでファイルを読み込むためのストリームオブジェクトを生成
	var stream = fs.createReadStream(path);

	// ストリームオブジェクトに対してdataイベントを登録
	// -> データを読み込むとdataイベントが発生
	stream.on('data', function(data){
		res.write(data);
	});
	// ストリームオブジェクトに対してendイベントを登録
	// -> データの読み込みが完了するとendイベントが発生
	stream.on('end', function(data){
		res.end();
	});
});

server.listen(1234);
console.log('start web server');
