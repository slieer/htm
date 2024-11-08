
import 'regenerator-runtime/runtime'

const fs = require('fs');

console.log('使用generator模拟async：')

function byAsync(gen3) {
	return new Promise((resolve, reject)=> {
		let oGen = gen3();
		console.log('to generator')
		function nextStep(next) {
			if (next.done) {
				return resolve(next.value)
			}
			Promise.resolve(next.value)
			.then((data) => {
				nextStep(oGen.next(data))
			})
			.catch((e) => {
				console.log('occur error')
				reject(e)
			})
		}
		nextStep(oGen.next())
	})
}

let readFile1 = (fileName) => {
	return new Promise((res, rej) => {
		fs.readFile(fileName, (err, data) => {
			if (err) rej(err);
			res(data)
		})
	})
}


byAsync(function *() {
	let data = yield readFile1('../package.json')
	let data1 = yield readFile1('../.babelrc')
	console.log(data + '',data1 + '')
})
.catch(e => {
	console.log(e)
})

