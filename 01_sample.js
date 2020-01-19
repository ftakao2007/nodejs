var http = require('http');

// createServerメソッドでサーバオブジェクトを生成
// -> 引数にサーバリクエストを受けた時に動作させるコールバック関数を指定
// 第一引数 : httpリクエストオブジェクト(ここではreq)
// 第二引数 : httpレスポンスオブジェクト(ここではres)
var server = http.createServer(function(req, res) {
	// writeHeadメソッド
	// 第一引数 : ステータスコード(ここでは200)
	// 第二引数 : ヘッダ情報の連想配列
	// 以下はデフォルトで省略可能
	res.writeHead(200, {'Content-Type': 'text/plain'});

	// writeメソッドでhtmlコンテンツを書き出す
	// endメソッドでhtmlコンテンツ出力を完了する
	// -> endメソッドに直接書いてもコンテンツを書き出せる
	res.write('Hello World\n');
	res.write('こんにちは\n');
	res.end();
});

// 生成したサーバオブジェクトをlistenメソッドで待ち受け状態にする
// 引数でポートを指定
server.listen(1234);

// サーバを実行した際のコンソールに出力する内容を指定する
console.log('web server start');
