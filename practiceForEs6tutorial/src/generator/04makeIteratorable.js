/**
 * Created by niuyuanqiang on 16/8/3.
 */

// 方法一
const mkIterator  = function *(obj) {
  let keys = Object.keys(obj);
  for (let item  of keys) {
    yield [item, obj[item]];
  }
}

var obj = {a: 1, b: 2};
for (let [key, value] of mkIterator(obj)) {
  console.log(key, value);
}

// 方法二
const mkIt = function *() {
  let keys = Object.keys(this);
  for (let item of keys) {
    yield [item, this[item]];
  }
}
obj[Symbol.iterator] = mkIt;
for (let [key, value] of obj) {
  console.log(key, value);
}