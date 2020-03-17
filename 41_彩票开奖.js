/* 请模拟双色球开奖，从1-33个数字中，随机选择6个，不能重复。
输出不需要排序。 */
var result = []; //存储结果的
while (result.length < 6) {
  var n = parseInt(Math.random() * 33) + 1;
  if (!result.includes(n)) {
    result.push(n);
  }
}
console.log(result);
