// 循环天数
for (var i = 1; i <= 3; i++) {
    // 循环每天吃的包子数
  for (var j = 1; j <= 4; j++) {
    // 可以用``这个字符串和变量拼接，而不用斩断连接的方式来字符串和变量拼接
      console.log(`第${i}天吃${j}个包子`);
  }
  console.log('哇，好撑啊');
}
