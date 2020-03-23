function fun() {
  var a = 10;
  return function() {
    console.log(a);
    console.log(b);
  };
}
var inn = fun();
var a = 88;
var b = 'hello，我是全局变量b';
inn();
