/* 题目：请将数组中的字母A都删除掉。注意，不是准备一个新数组push进去，而是真的删除掉原来数组中的项。 */
var arr = ['A','A', '帅哥', '美女', 'A', '帅哥', '考拉', 'A', '么么哒', '萌萌哒'];
for (var i = 0; i < arr.length; i++) {
    if(arr[i]=='A'){
        arr.splice(i,1);
        i--;
    }
}
console.log(arr);

