console.log('-------------------------解构---------------------------------');

console.log('*********************************')
let bar = [1, 2, 3, 4]
let [a, b, ...state] = bar;

// 数组解构的实质是解构特殊的对象
let {0: copyA, 1: copyB, ...copyState} = bar
console.log(`a is ${a}, b is ${b} , state is ${state}`);
console.log(`copyA is ${copyA}, copyB is ${copyB} , copyState is ${JSON.stringify(copyState)}`);

let foo = {name: 'foo', patern: {
	sex: 'nan',
	age: 1
}}

let {name: fooName, patern: {
	sex,
	size= 'mid'
}} = foo;

console.log(`fooName is ${fooName}, name is undefined and patern is undefined, sex is ${sex}, size is ${size}`)


console.log('*********************************')


console.log('-------------------------usage---------------------------------')

console.log('*************对象交换******************')

let [fooX, fooY] = [1, 2]

[fooY, fooX] = [fooX, fooY] 

console.log(`[fooY, fooX] = [fooX, fooY] : fooX is ${fooX}, fooY is ${fooY}`)

console.log('****************模块加载********************')

const { open } = require("fs");

console.log('***************遍历map对象*****************')

var map = new Map();
map.set('name', 'hello')
map.set('nickName', 'world')

for (let [key, value] of map) {
	console.log(`key is ${key}, values is ${value}`)
}

for (let [key] of map) {
	console.log(`key is ${key}`)
}

for (let [,value] of map)  {
	console.log(`value is ${value}`)
}

console.log('************函数参数的默认值***************')

function fnFoo([a = 12, b = 22]) {
	console.log(`a is ${a}, b is ${b}`)	
}

fnFoo([a])
console.log('************提取JSON数据******************')
let {sin: sinx, cos: cosx} = Math;
console.log(`type of sin is ${typeof sinx} typeof cos is ${typeof cosx}`)

console.log('************函数定义*********************')
function testFoo([a, b]) {
	console.log(`${a} + ${b} = ${a + b}`)
}

testFoo([2,4])
