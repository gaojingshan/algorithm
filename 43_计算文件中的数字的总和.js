// 不管文件里面有什么内容，都可以用这个方法读取文件
// 为了读取文件，需要使用fs模块
var fs = require('fs');

//  fs模块就可以读取文件，注意是readFileSync叫做“同步”读取文件
var content = fs.readFileSync('./43_数据.txt');

// 必须加toString，这样才能变为字符串。否则就是二进制数据。
// console.log(content.toString()); //带有换行符的一个字符串
// 所有数据被读取到了一个字符串中，现在要按换行符拆为数组。
var arr = content.toString().split('\r\n');
// 求和
for (var i = 0, sum = 0; i < arr.length; i++) {
  sum += Number(arr[i]);
}
console.log(`该txt文件数字总和是${sum},一共有${arr.length}行`);
