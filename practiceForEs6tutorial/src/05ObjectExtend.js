import 'regenerator-runtime/runtime'
console.log('==========================对象扩展====================')

console.log('属性简介表达')

let iBar = 1;
let iFoo = 2;

let oPerson = {iBar, iFoo}

let oP = {
	name: '13',
	[iBar + 'hello'] () {
		console.log(1)
	},
	[iFoo + 'hello'] () {
		console.log(2)
	},
	[iBar + 'world']() {
		console.log(3)
	},
	get wheels() {
		console.log(this)
		return this.name
	},
	set wheels(val) {
		this.name = val;
	}
}

oP[iBar+'world']()
oP.wheels = 20;
console.log(oP.wheels)

console.log('Object.is: (基本与===行为一致 除了Object.is(NaN, NaN) 返回true 与 Object.is(+0, -0) 返回false )')

console.log(`Object.is(NaN,NaN) = ${Object.is(NaN,NaN)}` )
console.log(`Object.is(+0,-0) = ${Object.is(+0,-0)}` )

console.log('Object.assign()会讲扩展后的对象赋给第一个参数')
let oBar = {a: 1};
let oRs = Object.assign({}, oBar, {b: 2}, {c: 4});
console.log(oRs, oBar)
console.log(Object.assign([1,2,3], [4]))
console.log('assign用途：')

console.log('为对象添加属性')
class Point {
	constructor(x) {
		Object.assign(this, {x})
	}
}
console.log('对对象添加方法')

function fFoo(argument) {
	// body...
}
Object.assign(fFoo.prototype, {
	hello: function() {

	}
})

console.log('克隆对象')
function clone(argument) {
	return Object.assign({}, argument)
}

console.log('指定默认值')
function fFoo1(option) {
	let Default = {
		size: 18
	}

	option = Object.assign({}, Default, option)
}

console.log('keys values entries: ')

var obj = {
	name: 1,
	age: 2
}

console.log(`Object.keys(obj) = ${Object.keys(obj)}`)
console.log(`Object.values(obj) = ${Object.values(obj)}`)
console.log(`Object.entries(obj) = ${Object.entries(obj)[0]}`)


console.log('使用entries将Object转为Map')
let oMap = new Map(Object.entries(obj));
console.log(oMap.entries())

console.log('entries垫片')

function* entries(obj) {
	for (let key of Object.keys(obj)) {
		yield [key, obj[key]];
	}
}

console.log(...entries(obj))

console.log('扩展运算符...：')

let {name, ...age} = obj;

console.log(name, age)

console.log('扩展运算符做属性覆盖')

let objC = {
	...obj,
	name: 2,
	sex: 'man'
}

console.log(objC)
