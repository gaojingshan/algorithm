// 请将字符串“我爱北京天安门”逆序。
// 方法一
var str = '我爱北京天安门';
console.log(
  str
    .split('')
    .reverse()
    .join('')
);

// 方法二  循环遍历
/* var str = '我爱北京天安门';
var result = '';
for (var i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result); */
