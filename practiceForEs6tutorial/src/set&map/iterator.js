// 数组, 类数组, set与map 是自己实现iterator接口 可直接使用arr接口
var arr = [1,2,3,4,5,6,7];
for (let value of arr) {
  console.log(value);
}

// 对象是不支持 interator接口 可以通过声明Symbol.iterator以下方式
function a(start, end) {
  this.value = start;
  this.end = end;
}

a.prototype[Symbol.iterator] = function () {
  var context = this;
  return {
    next: function () {
      if (context.value < context.end) {
        return {
          value: ++ context.value,
          done: false
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}

var st = new a(0, 100);
for (let s of st) {
  console.log(s);
}

console.log([...st]);

// yield
console.log('===============================================');
var generator = function* () {
  yield a = 1;
  yield* [2,3,1];
  yield {st};
};

var g = generator();
for (let item of g) {
  console.log(item);
}