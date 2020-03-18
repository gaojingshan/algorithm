// 【18孩子游戏】18个小孩子依次从1开始报数，喊道3的倍数的出局。所以，第一次报数出局的有3号、6号、9号、12号、15号和18号孩子。剩下了12个孩子，这12个孩子继续从最开始的孩子继续从19喊数，同样的，还是喊到3的倍数的孩子出局。依次往下进行。请问，最后剩下的1个孩子，它是最早的几号？
var arr = [];
for (var i = 1; i <= 18; i++) {
  arr.push(i);
}
// console.log(arr);
// 一直计数，不清零
var count = 1;
while (arr.length > 1) {
  for (var j = 0; j < arr.length; j++) {
    if (count % 3 == 0) {
      arr.splice(j, 1);
      // console.log(count);
      // console.log(arr);
      j--
    }
    count++;
  }
}
console.log(`最后剩下的1个孩子，它是最早的${arr}号`);
