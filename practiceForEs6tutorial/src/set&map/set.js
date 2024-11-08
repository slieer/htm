'use strict';

var set = new Set();
set.add(1);
set.add(2);
set.add(6);
for (let a of set.keys()) {
  console.log(a);  
}

console.log([...new Set([1,2,3,4,5,4,3,2])]);


// map
let a = {};
let map = new Map();
map.set(1, 'ha ha');
map.set(a, 'aa');

map.set('test', 'test');

for (let [key, value] of map) {
  console.log(key , value);
}