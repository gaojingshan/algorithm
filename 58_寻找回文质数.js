// 题目：寻找这样的数字，它自己是对称的数字，正着读、反着读都是一样的，并且它自己也是质数。显示前100个，每行显示10个。

// 封装一个函数判断是不是质数
function checkPrime(a) {
  for (var i = 2; i < a; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

// 判断是不是回文数字 方法一
/* function checkHuiwen(b) {
  // 反过来的数字
  var newShu = b
    .toString()
    .split('')
    .reverse()
    .join('');
  if (b == newShu) {
    return true;
  } else {
    return false;
  }
} */

// 判断是不是回文数字 方法一
function checkHuiwen(b) {
  // 把数字变为字符串，字符串就可以遍历每一数字
  var str = b.toString();
  for (var i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - i - 1]) return false;
  }
  return true;
}

// 显示回文质数
//判断当前数字是不是回文质数
var num = 2;
// 计数100个回文质数
var count = 1;
//保存一行数
var str = '';
while (count <= 100) {
  if (checkPrime(num) && checkHuiwen(num)) {
    str += num + '\t';
    if (count % 10 == 0) {
      console.log(str);
      str = '';
    }
    count++;
  }
  num++;
}
