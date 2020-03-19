// 字符串逆序
var str1 = '我爱北京天安门';
//变为数组，逆序，变回字符串
var str2 = str1
  .split('')
  .reverse()
  .join('');
console.log(str2);
