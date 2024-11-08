console.log('======================decorator====================')
function addPro(name, value) {
	return function (target) {
		target[name] = value;
	}
}

@addPro('hello', 'world')
class A {

}

console.log(A.hello)

function readonly(target, name, descripter) {
	console.log(descripter.value)
	
	// descriptor对象原来的值如下
	// {
	//   value: specifiedFunction,
	//   enumerable: false,
	//   configurable: true,
	//   writable: true
	// };
	descripter.writable = false;
	console.log('set success')
}

class B {
	@readonly 
	say() {
		console.log('hello world')
	}
}

const b = new B();

b.say()

console.log('不能直接用在函数上面 因为函数存在变量提生')