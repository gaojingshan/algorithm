// 编写程序，查找字符串中连续出现的最多的文字

var str = 'aabbbbbccccccccccddd';
var i = 0;
var j = 1;
// 当前最大的连续相同间距
var max = 0;
// 重复最多的字
var strmax = '';
while (str[i] != undefined) {
  // 如果下标相同，j后移
  // 如果下标不同，保存两个下标的距离和当前的字。i追上j，j后移
  if (str[i] != str[j]) {
    if (j - i > max) {
      max = j - i;
      strmax = str[i];
    }
    i = j;
  }
  j++;
}
console.log(max, strmax);
