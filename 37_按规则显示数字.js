// 【按规则显示数字】显示从100到1000之间所有既能被5整除，也能被6整除的数字，要求每行显示10个数字。
var str = ''; // 行字符串
var count = 0; // 计数
for (var i = 100; i <= 1000; i++) {
  if (i % 5 == 0 && i % 6 == 0) {
    //   console.log(i);
    str += i + ' ';
    count++;
    //当字符串加到10个数的时候输出
    if (count == 10) {
      console.log(str);
      str = ''; //清空行字符串
      count = 0; //清空计数器
    }
  }
}
