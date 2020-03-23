// 如果高阶函数是这样的： 它根据外部的函数的参数，调整了内部函数的具体细节，这样的高阶函数也被称呼为“偏函数”。
function fun(a) {
  //标准体温
  return function(b) {
    //测量体温
    if (b > a) {
        console.log('体温异常！请隔离！');

    } else {
        console.log('正常体温！请放行！');

    }
  };
}
// A小区，检验标准比较低，37.2就算发烧
var biaozhun1 = fun(37.2);
biaozhun1(36.9);
biaozhun1(36.4);
biaozhun1(37.3); // 体温异常！请隔离！

// B小区，检验标准比较宽松，37.5才算发烧
var biaozhun2 = fun(37.5);
biaozhun2(36.9);
biaozhun2(36.4);
biaozhun2(37.3); // 正常体温！请放行！

