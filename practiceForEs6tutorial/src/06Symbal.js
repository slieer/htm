import 'regenerator-runtime/runtime'
let foo = Symbol('foo');
console.log(foo)

console.log(`Symbol('obj') === Symbol('obj') = ${Symbol('obj') === Symbol('obj')}`)

console.log('单例模式')

const FUNC_NAME = Symbol('func');

function func() {

}


if (global[FUNC_NAME]) {
	global[FUNC_NAME] = func;
}

module.exports = func;


console.log('全局symbol')

console.log(`Symbol.for('foo') = ${Symbol.for('foo').toString()}`)

console.log(`Symbol.for('foo') === Symbol.for('foo') is ${Symbol.for('foo') === Symbol.for('foo')}`)


console.log('Symbol.iterator')

let oBar = {};
oBar[Symbol.iterator] = function *() {
	yield 1;	
	yield 1;	
	yield 1;	
	yield 1;	
	yield 1;	
	yield 1;	
}

console.log([...oBar])


class A {
	*[Symbol.iterator]() {
		yield 1;
		yield 1;
		yield 1;
		yield 1;
		yield 1;
	}
}

let myA = new A ();
for (let val of myA) {
	console.log(val)
}



