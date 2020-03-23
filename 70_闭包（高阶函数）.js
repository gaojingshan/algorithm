// 术语上，把一个函数返回一个函数的情况，叫做高阶函数。
// fun就是一个高阶函数。

function fun() {
  var a = 10;
  return function(b) {
    console.log(a + b);
  };
}
var inn = fun();
inn(3); //13
inn(9); //19
