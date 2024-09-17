import 'regenerator-runtime/runtime'

console.log('==============================iterator=================')
console.log('usage：')

console.log('解构')
let oSet = new Set([1,2,3,4])
let [bar, ...foo] = oSet;
console.log(bar, foo)

console.log('扩展运算符：')

console.log(...oSet)


console.log('yield *:')
function* setName(argument) {
	yield 'username'
	yield 'passworld'
}

console.log(...setName())
