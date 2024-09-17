/**
 * Created by niuyuanqiang on 16/8/3.
 */

const generator = function *() {
  yield 1;yield 1;yield 1;yield 1;yield 1;yield 1;
}
console.log([...generator()]);


// for...of循环、扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。这意味着，它们可以将Generator函数返回的Iterator对象，作为参数。

