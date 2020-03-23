function fun() {
  return function() {
    console.log('我执行了');
  };
}
var inn = fun();
inn();
