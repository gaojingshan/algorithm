// 【游泳比赛得分】游泳比赛六个评委打分分别为39、45、42、44、51和48，最终得分计算方法是：去掉一个最高分、去掉一个最低分，剩下4个数字取平均。请问这个选手最终得分是多少？
var arr = [39, 45, 42, 44, 51, 48];
var min = arr[0]; //最低分
var max = arr[0]; //最高分
var sum = 0; //计算总分
var average = 0; //计算平均分
//循环遍历比赛分数
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max) {
    max = arr[i];
  }
  sum += arr[i];
}
average = (sum - min - max) / (arr.length - 2);
console.log(`这个选手最终得分是${average}`);
