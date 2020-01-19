var http = require('http');
// fsオブジェクトの生成
var fs = require('fs');

var server = http.createServer(function(req, res){
	// fsオブジェクトのreadFileメソッドでhtmlファイルを読み込み
	// 第一引数 : 対象のファイルパス
	// 第二引数 : エンコード
	// 第三引数 : 読み込み完了時に動作するコールバック関数
	//
	// コールバック関数第一引数 : エラーオブジェクト(ここではerr)
	// コールバック関数第二引数 : 読み込んだデータの受け取り(ここではdata)
	//
	// readFileメソッドは非同期で動作する
	// -> 読み込み結果が戻値として返るのではなくコールバック関数の引数として渡されるのはこのため
	//    -> 大きなファイルを読み込んだとしても読み込みが終わる前に後の処理を進められる
	fs.readFile('./02_temp.html', 'utf-8', function(err, data){
		// htmlファイルを読み込み後にhttpヘッダや読み込み結果を出力
		// -> コールバック関数内で行わないとファイルを読み込む前にレスポンスを返してしまう
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});

server.listen(1234);
console.log('start web server');
