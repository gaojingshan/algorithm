// 【数字金字塔】使用for循环语句输出下面的图形

//遍历第几行数字
for (var i = 1; i <= 6; i++) {
  // 不用定义好几个变量，直接一个变量 += 就行
  /* var str = ''; //金字塔左边部分数字
  var str1 = ''; //金字塔右边部分数字 
  var kong = ''; //左边的空格数*/
  var str = ''; //每行的字符串
  // 打印左边的空格数
  str += ' '.repeat(12 - 2 * i);
  /* for (var k = i; k < 6; k++) {
    kong += '  ';
  } */
  // 循环遍历金字塔左边部分数字
  for (var j = i; j > 1; j--) {
    str += j + ' ';
  }
  // 循环遍历金字塔右边部分数字
  for (var j = 1; j <= i; j++) {
    str += j + ' ';
  }
  // var zong = kong + str + str1; //每一行打印的
  console.log(str);
}
