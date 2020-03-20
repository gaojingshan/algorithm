// 请你按治愈人数多少输出。

// 各国治愈数
var obj = {
  意大利: 4400,
  美国: 1107,
  德国: 115,
  法国: 1300,
};
//定义一个空数组
var arr = [];
//把对象变为数组
for (var k in obj) {
  arr.push({country: k, number: obj[k]});
}
// 排序，按治愈人数从大到小排
arr.sort(function(a, b) {
  return b.number - a.number;
});
// 数组遍历输出
for (var i = 0; i < arr.length; i++) {
  console.log(`第${i + 1}名:${arr[i].country} 治愈了${arr[i].number}人`);
}
