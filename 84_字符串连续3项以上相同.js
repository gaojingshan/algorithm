// 编写程序，查找字符串“aabbbbbccdd”中是否有连续3项或3项以上重复字符，如果有，则返回这些字符的下标位置。
var str = 'aabbbbbccddd';
var i = 0;
var j = 1;
while (str[i] != undefined) {
  // 如果第i项与第j项，相等，j++
  // 如果第i项与第j项，不相同,看有没有连续三项输出下标，i追上j
  if (str[i] != str[j]) {
    if (j - i >= 3) {
      console.log(i, j-1);
    }
    i = j;
  }
  j++;
}
