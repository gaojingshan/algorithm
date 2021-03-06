// 寻找10000以内的完美数。  封装函数写法
// 如果一个数字的所有约数和等于它本身（约数中不包括它自己），这个数字叫做“完美数”。比如6就是完美数，因为6的约数是1、2、3、6。不包括它自己的约数就是1、2、3。而1+2+3正好等于6，所以6是完美数。求1~10000之间的所有完美数。

// 返回除自己本身的约数和
function perfectNum(n) {
  for (var i = 1, sum = 0; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  return sum;
}
//遍历1~10000之间的所有数，找到完美数
for (var i = 1; i <= 10000; i++) {
  if (perfectNum(i) == i) {
    console.log(i);
  }
}
