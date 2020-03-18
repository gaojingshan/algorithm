var fs = require('fs');
var content = fs.readFileSync('./45_公司数据.txt');
// 按空行拆为数组（一个公司拆成一项）
var arr = content.toString().split('\r\n\r\n');
// console.log(arr);

// 遍历每家公司
for (var i = 0; i < arr.length; i++) {
  // 再按回车拆
  var _arr = arr[i].split('\r\n');
  // 在通过下标输出公司名和联系电话
  // console.log(_arr[0], _arr[3]);

  // 追加文件
  fs.appendFileSync('./45_老板你要的结果.txt',_arr[0]+' '+_arr[3]+'\r\n');
}
