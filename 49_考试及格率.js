/* 第4题 【考试及格率】有个txt文件，这个文件中是2000个学生的考试成绩。请分别统计语文、数学和英语的及格率，及格线均为60分。 */
var fs = require('fs');
// 打印出字符串类型的数据
var content = fs.readFileSync('./49_考试成绩.txt').toString();
// 按回车拆分
var arr = content.split('\r\n');
for (var i = 0, chinese = 0, math = 0, english = 0; i < arr.length; i++) {
  // 把每一项按空格拆分
  var _arr = arr[i].split(' ');
  // 计算语文的及格人数
  if (Number(_arr[3]) >= 60) {
    chinese++;
  }
  // 计算数学的及格人数
  if (Number(_arr[5]) >= 60) {
    math++;
  }
  // 计算英语的及格人数
  if (Number(_arr[7]) >= 60) {
    english++;
  }
}
// 统计语文、数学和英语的及格率
var _chinese = Math.round((chinese / arr.length) * 10000) / 100;
var _math = Math.round((math / arr.length) * 10000) / 100;
var _english = Math.round((english / arr.length) * 10000) / 100;
console.log(
  `语文的及格率是${_chinese}%,数学的及格率是${_math}%,英语的及格率是${_english}%`
);
