// 第7题 【多次开方】请计算下面表达式的值，要求使用循环语句。
var a = Math.sqrt(2);
for (var i = 1; i <= 4; i++) {
  a = Math.sqrt(a / 2);
}
console.log(a);
