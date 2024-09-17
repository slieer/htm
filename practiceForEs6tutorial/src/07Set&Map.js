console.log('===========================Set 与map======================')
let hello = 'hello',
	world = 'world',
	json = 'json';

let oSet = new Set();
oSet.add(hello)
oSet.add(world)
oSet.add(json)
console.log(`size ${oSet.size}`)
console.log(oSet.has(world))
oSet.delete(hello)
console.log([...oSet])

console.log('遍历：')
for ( let val of oSet) {
	console.log(val)
}
console.log('获取下标 / 其实他的key值与value值相等')
for (let [key, val] of oSet.entries()) {
 console.log(key, val)
}
oSet.forEach(function (val, key) {
	console.log(val, key)
})

console.log('用法 数组去重')
console.log([...new Set([1,2,3,4,5,1,2,3,4])])

console.log('或者')
console.log(Array.from(new Set([1,2,3,4,5,1,2])))


console.log('WeakSet：（weakSet不会对add的对象产生引用 ， 不能被遍历， 可以用来做一些逻辑上的判断）')

let weaks = new WeakSet();
class A {
	constructor() {
		weaks.add(this)
	}

	foo() {
		if (!weaks.has(this)) {
			throw new Error('只能A类调用')
		}
	}
}

let myA = new A();

myA.foo()

try {
	A.prototype.foo();
} catch (e) {
	console.log(e.message)
}

console.log('Map： 和Set基本一致')

let map = new Map();
map = new Map([[1,true], ['hi', 'world']])
map.set('foo', true);
map.set('bar', false);

console.log(map.has(1))
map.delete(1)
console.log(map.has(1))
map.size // 2

console.log([...map])
for (let key of map.keys()) {
	console.log(key)
}