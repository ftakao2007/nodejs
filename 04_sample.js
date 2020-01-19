var http = require('http');
var fs = require('fs');
// URL文字列を解析するために使用
var url = require('url');
// クエリ文字列を扱うために使用
var qs = require('querystring');

var indexPage = fs.readFileSync('./04_index.html', 'utf-8');

var server = http.createServer(function(req, res){
	// httpリクエストオブジェクトのmethodプロパティを使用してフォームリクエストがGETかPOSTかを判別
	if(req.method == 'GET') {
		// urlオブジェクトのparseメソッドを使ってリクエストがあったURLを解析している
		// 解析結果はオブジェクト型の値として返却される
		// 第二引数をtrueにすることによりqueryプロパティの値をオブジェクト型で保持する
		// false : name=hoge&age=20
		// true  : { name: 'hoge', age: '20' }
		var urlParts = url.parse(req.url, true);
		console.log('---GET Request---');
		  // クエリパラメータと同じ名前のプロパティで値へのアクセス可能
		  console.log('nameは' + urlParts.query.name);
		  console.log('ageは' + urlParts.query.age);
	} else {
		var body = "";
		// POSTの場合はGETと違ってまずhttpリクエストオブジェクトに対して
		// イベントハンドラを登録して送信データを扱う
		// ここでは「data」イベントを登録
		// -> このイベントはPOSTで送信されたデータを受信した際に発生し、引数に受信したデータを受け取る
		req.on('data', function(data){
			// 受信したデータは都度連結しておく
			body += data;
		});
		// データの受信が完了すると「end」イベントが発生する
		// イベントハンドラを登録
		req.on('end', function(){
			// 連結した受信データをqsオブジェクトのparseメソッドで解析する
			// 解析したデータはオブジェクト型で返却される
			var params = qs.parse(body);
			console.log('---Post Request---');
		  	console.log('nameは' + params.name);
		  	console.log('ageは' + params.age);
		});
	}


	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(indexPage);
	res.end();
});

server.listen(1234);
console.log('start web server');
