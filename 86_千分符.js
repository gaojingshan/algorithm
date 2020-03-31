// 编写函数fNum(n)，功能是给数字n加逗号千分符，例如将数字1234567传入，函数将返回字符串“222,111,234,567”
// 方法一 
var n = 1234567;
function fNum(n) {
  var arr = String(n).split('');
  for (var i = arr.length - 3; i > 0; i -= 3) {
    arr.splice(i, 0, ',');
  }
  return arr.join('');
}
console.log(fNum(n));

// 方法二 自我感觉这个方法不好想
/* var n = 1234567;
function fNum(n) {
  var str = String(n);
  for (var i = str.length - 3; i > 0; i -= 3) {
    str = str.slice(0, i) + ',' + str.slice(i);
  }
  return str;
}

console.log(fNum(n)); */
