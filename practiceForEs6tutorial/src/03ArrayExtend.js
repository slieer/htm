console.log('=======================数组扩展======================')

console.log('from :')

let oB = {
	0: 'hello',
	1: 'world',
	length: 2
}

// 只要部署了Symbal.iterator  就可以调用 Array.from
// 包括了 document.querySelectorAll  arguments等
let oR = Array.from(oB)

console.log('[].slice.call = ' + [].slice.call(oB, 0))

console.log(`oR = ${oR} oB = ${oB}`)

console.log('string is ' + Array.from('hello world'))

console.log('Set 对象转为数组: ')
let oSet = new Set([1, 2, 'a'])
console.log('oSet = ' + Array.from(oSet))

console.log('...扩展运算符:')

console.log(`... 也可以转为数组 oSet = ${[...oSet]}`)


console.log('copyWithin:')

console.log(`[1,2,3,4,5].copyWithin(0,3) = ${[1,2,3,4,5].copyWithin(0, 3)}`)

console.log('find & findIndex : 解决indexof NaN = NaN')

console.log('[1,2,3,4,5].find(n => n > 3) = ' + [1,2,3,4,5].find(n => n > 3))

console.log('[1,2,3,NaN,5].find(n => Object.is(NaN, n)) = ' + [1,2,3,NaN,5].find(n => Object.is(NaN, n)))
console.log('[1,2,3,NaN,5].findIndex(n => Object.is(NaN, n)) = ' + [1,2,3,NaN,5].findIndex(n => Object.is(NaN, n)))
console.log('')
console.log('fill: ')
console.log(`Array(10).fill(7) is ${Array(10).fill(7)}`)


console.log('entries() & keys & values()')
let aFoo = ['a', 'b']

for (let val of aFoo.keys()) {
	console.log(val)
}
// values 方法不支持
// for (let val of ["a", "b", "c"].values()) {
// 	console.log(val)
// }
for (let [key, value] of aFoo.entries()) {
	console.log(key, value)
}

console.log('includes: 解决NaN问题')

console.log(`[1, 2,NaN,4].includes(3) is ${[1, 2,NaN,4].includes(NaN)}`)