var Hoge = function(){}

Hoge.prototype.add = function(val1, val2) {
	return val1 + val2;
}

Hoge.prototype.sub = function(val1, val2) {
	return val1 - val2;
}

var hoge = new Hoge();
// 規模の大きな機能を提供する場合はmodule.exportsの方が良い
// -> 代入可能なので後から中身を書き換える事ができる
module.exports = hoge;
