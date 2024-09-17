import EventEmitter from 'events';
console.log('=============异步如理之Promise=================')

console.log('setTimeout')

let timer = (duration) => {
	return new Promise((resolve, reject) => {
		console.log(duration)
		setTimeout(resolve, duration)
	})
}

timer(1000)
	.then(() => {
		return timer(2000)
	})
	.then(() => {
		throw new Error('call stack accur')
	})
	.catch((e) => {
		console.log(e.message)
	})

class Image extends EventEmitter {
	constructor(...args) {
		super(...args)
		setTimeout(() => {
			this.emit('load',123)
		}, 4000)
	}
}

let loadImag = () => {
	return new Promise((resolve, reject) => {
		let image = new Image()
		image.on('load', resolve)
	} )
}

loadImag().then((data) => {
	console.log('success' + data)
})
.catch((e) => {
	console.log(e.message)
})



try {
	let h = y+z 
} catch (e) {
	console.log(e.message)
}



console.log('resolve && reject:')

let oPro = Promise.resolve('hello')
oPro
	.then((data) => {
		console.log('hello 作为resolve参数' + data)
	})
	.catch((e) => {
		console.log(e.message)
	})

oPro = Promise.resolve({
	then(res, rej) {
		// res('worold 1')
		console.log(132123123)
		rej('if error')
	}
})

oPro.then((data)=> {
	console.log('当传入对象有then方法时 执行then', data)
}).catch((e)=> {
	console.log(e)
})




let aPros = [1,1,1,1,1,1].map((value, index) => {
	return loadImag()
})

console.log('all： 所有执行成功之后执行Promise')
Promise.all(aPros)
	.then((data) => {
		console.log(data)
	})
	.catch((e) => {
		console.log(e)
	})
	.then(() => {
		console.log('catch之后仍会执行')
	})

console.log('race: 第一个成功的对象')
Promise.race(aPros)
	.then((data) => {
		console.log('race返回参数' + data)
	})
	.catch((e) => {
		console.log(e)
	})

console.log("race's usage: ")
console.log('1. 设置timeout')

let fetch = url => {
	return new Promise((res, rej)=> {
		setTimeout(res, 5000)
	});
}
let aPro1s = [fetch('url'), new Promise((res,rej) => {
	setTimeout(rej, 4000)
})]

Promise.race(aPro1s)
	.then((data) => {
		console.log('fetch: ' + data)
	})
	.catch(e => {
		console.log('fetch error :' + e)
	})

