var fs = require('fs');
var content = fs.readFileSync('./44_捐款记录.txt');
// 读取文件，为带有换行符的字符串
var str = content.toString();
//按换行符拆成字符串
var arr = str.split('\r\n');

for (var i = 0, sum = 0; i < arr.length; i++) {
  // 每一项的数据
  var item = arr[i];
  //继续拆，用空格拆
  var _arr = item.split(' ');
  // 拆之后，_arr[1]这项就是数额，_arr[0]这项就是名字
  sum += Number(_arr[1]);
}
console.log(sum);
