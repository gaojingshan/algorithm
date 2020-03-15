// 【数字金字塔】使用for循环语句输出下面的图形

//遍历第几行数字
for (var i = 1; i <= 6; i++) {
  var str = ''; //金字塔左边部分数字
  var str1 = ''; //金字塔右边部分数字
  var kong = ''; //左边的空格数
  // 打印左边的空格数
  for (var k = i; k < 6; k++) {
    kong += '  ';
  }
  // 循环遍历金字塔左边部分数字
  for (var j = i; j > 1; j--) {
    str += j + ' ';
  }
  // 循环遍历金字塔右边部分数字
  for (var j = 1; j <= i; j++) {
    str1 += j + ' ';
  }
  var zong = kong + str + str1; //每一行打印的
  console.log(zong);
}
