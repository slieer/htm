/**
 * Created by niuyuanqiang on 16/8/3.
 */

// 这时候的generator的yield 执行顺序是次要的
import 'regenerator-runtime/runtime'

var wrapper = function (generatorFun) {
  return function (...args) {
    var generatorObj = new generatorFun();
    generatorObj.next();
    return generatorObj;
  }
}


let generator = wrapper(function* () {
  console.log(yield);
})

generator().next('hello');
