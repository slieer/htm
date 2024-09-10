# Javascript-ES6-ECMAScript6-ES2015
前端近些年发展很快，作为前端技术的核心支撑JS也从ES5过渡到了ES6，强有力的推进了前端的发展。作为一名前端从业人员学习掌握ES6是必不可少的一项技能。阮一峰老师写的[《ECMAScript 6 入门》](http://es6.ruanyifeng.com/#README)非常的棒，学习ES6看这本书基本就够了。但是这本书介绍的知识点实在太多了，就像我们中华的文字千千万，常用的也就那么些。我们没有必要把所有的文字都记住，遇到陌生的查一查就行了。

对于初学者刚学习ES6实在没必要把所有的知识点都学一遍，太耗费精力了，不在实际中运用不久也就遗忘了。本项目对自己项目中运用过的ES6语法知识给予介绍，并给出大量简洁易懂的示例代码,对于初学者来说敲过本项目中的代码，基本就入门ES6了，再在实际中运用所学知识、补充不足，相信很快就能掌握ES6的。
## 下载源码
```
git clone https://github.com/fangfeiyue/Javascript-ES6-ECMAScript6-ES2015.git
```
## 运行项目
```
npm install
gulp --watch
```
## 技术选型
- 版本控制：git 
- 开发工具：vscode
- js版本：ES6
- 辅助工具：babel、webpack、gulp
## let和const
### 一、块级作用域

ES5 只有全局作用域和函数作用域，没有块级作用域，这样的缺点是：1.用来计数的循环变量泄露为全局变量。2.内层变量可能会覆盖外层变量

```
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
```
输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量

var声明的变量,出了{}依然可以正确输出
```
{
    for (var i = 0; i < 1; i++){}
    console.log(i); //1
}
```
let声明的变量和const声明的常量只能在{}内有效,const声明的常量不能进行修改
```
for (let i = 0; i < 1; i++){
    const a = 123;
    a = 12; //Uncaught TypeError: Assignment to constant variable.
}
console.log(i); //01let和const.html:17 Uncaught ReferenceError: i is not defined
console.log(a); //01let和const.html:17 Uncaught ReferenceError: a is not defined
```
const声明变量不能在声明之后再赋值,只能声明的时候进行赋值
```
const p; //Uncaught SyntaxError: Missing initializer in const declaration
p = 2;
```
### 二、let、const声明变量不存在变量提升
```
a = 1;
var a;
console.log(a); //1

b = 2; //Uncaught ReferenceError: b is not defined
let b;
console.log(b);
c = 3;
const c; //Uncaught SyntaxError: Missing initializer in const declaration
console.log(c);
```
### 三、不允许重复声明
```
var a = 1;
var a = 2;
console.log(a); //2

let b = 1;
let b = 2; //Uncaught SyntaxError: Identifier 'b' has already been declared
console.log(b);
```
### 四、注意

const在声明对象的时候，const常量指向的是对象存储的指针，此时修改对象内部的属性并不会报错。
```
const k = {
    a:1
};
k.b = 2;
console.log(k); //{a:1, b:@}
```
## 结构赋值

### 一、结构赋值的分类
- 数组结构赋值
```
let a, b, rest;
[a, b] = [1, 2];
console.log(a, b);//1 2
```
- 对象结构赋值
```
let a, b;
({a, b} = {a:1, b:2});
console.log(a, b);//1  2
```
- 字符串结构赋值
- 布尔结构赋值
- 函数参数结构赋值
- 数值结构赋值

### 二、结构赋值的简单应用
- 变量交换
```
let a = 1,
b = 2;
[a, b] = [2, 1];
console.log(a, b); //2, 1
```
- 取出json中某个值
```
let metaData = {
    title: 'abc',
    test: [{
        title: 'test',
        desc: 'description'
    }]
};

let {title: esTitle, test:[{title:cnTitle}]} = metaData;

console.log(esTitle, cnTitle); //abc, test
```
## 字符串的扩展
### 一、常用方法的扩展
- includes(str)字符串中是否包含某个字符
```
let str = 'string';
console.log(str.includes('r')); //true
```
- startsWith(str)字符串是不是以某些字符开始，endsWith(str)字符串是不是以某些字符结束
```
let str = 'string';
console.log(str.startsWith('s'));// true
console.log(str.endsWith('g'));// true
```
- repeat(int)方法返回一个新字符串，表示将原字符串重复n次。
```
let str = 'string';
console.log(str.repeat(3)); //stringstringstring
```
- padStart()，padEnd() ES2017 引入了字符串补全长度的功能,如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全,这两个方法接收两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串
```
let str = '1';
console.log(str.padStart(2, '0')); //01
console.log(str.padEnd(2, '0')); //10
```
- String.raw方法，往往用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串。
```
console.log(String.raw`h\n23\45`);// h\n23\45
console.log('h\n23\45');
//h 
//23%
```
### 二、模板字符串

模板字符串是增强版的字符串，用反引号（`）标识
```
const name = 'FangFeiyue';
console.log(`My name is ${name}`);//My name is FangFeiyue
```

如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中
```
let str = `我是
一个
终生学习者`

console.log(str);
//我是
//一个
//终生学习者
```
## 数值扩展

- 二进制、八进制的表示方法
```
//二进制
console.log(0b11111);
//八进制
console.log(0o011111);
```
- Number.isFinite()用来检查一个数值是否为有限的（finite）
```
console.log(Number.isFinite(12)); // true
console.log(Number.isFinite(NaN)); // false
```
- Number.isNaN()用来检查一个值是否为NaN
```
console.log(Number.isNaN(1)); //false
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN('1')); //false
```
- Number.isInteger()用来判断一个值是否为整数。需要注意的是，在 JavaScript 内部，整数和浮点数是同样的储存方法，所以 3 和 3.0 被视为同一个值
```
console.log(Number.isInteger(1)); //true
console.log(Number.isInteger(1.0)); //true
console.log(Number.isInteger('1')); //false
console.log(Number.isInteger(1.2)); //false
```
- Number.isSafeInteger判断一个数字是否在有效范围内
```
console.log(Number.MAX_SAFE_INTEGER);//最大数
console.log(Number.MIN_SAFE_INTEGER);//最小数
console.log(Number.isSafeInteger(10));
```
- Math.trunc方法用于去除一个数的小数部分，返回整数部分。
```
console.log(Math.trunc(4.5)); // 4
```
- Math.sign()用来判断一个值的正负，但是如果参数是-0，它会返回-0。
```
console.log(Math.sign(-5)); // -1
console.log(Math.sign(5));  // 1
console.log(Math.sign(0));  // 0
console.log(Math.sign(-0));  // -0
console.log(Math.sign("40"));  // 1
console.log(Math.sign("hello")); //NaN 
```
- Math.cbrt方法用于计算一个数的立方根,对于非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值。x³=a，那么x叫做a的立方根
```
console.log(Math.cbrt(8)); //2
```
## 数组对象的扩展
- Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map
```
let pArr = Array.from(document.getElementsByTagName('p'));
pArr.forEach(item => {
    console.log(item.textContent);
});
```
- Array.of方法用于将一组值，转换为数组
```
console.log(Array.of(1, 2, 3, 'sdf', [1, 2,3]));// [1, 2, 3, 'sdf', [1, 2, 3]]
console.log(Array.of()); //[]
```
- fill方法使用给定值，填充一个数组,方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
```
console.log([1, 23, NaN].fill(8));  // [8, 8, 8]
console.log([1, 3, 23, 're', undefined, NaN].fill(7, 1, 3));//[1, 7, 7, "re", undefined, NaN]
```
- keys()和values()——用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
```
for(let index of [1, 2, 3, 4, 5].keys()){
    console.log(index);// 0, 1, 2, 3, 4
}

for (let [index, value] of [1, 23, 234, 4, 5, 34].entries()){
    console.log(index, value);
    // 0 1
    // 1 23
    // 2 234
    // 3 4
    // 4 5
    // 5 34
}
```
- copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
它接受三个参数。target（必需）：从该位置开始替换数据。start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
```
console.log([17,26,53,44,25,6, 23, 84, 92].copyWithin(2, 3, 5)); //[17, 26, 44, 25, 25, 6, 23, 84, 92]
```
- find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined
```
console.log([1, 23, 45, 3, 5, 56, 23].find(item => item > 20));// 23
```
- findIndex方法返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
```
console.log([1, 23, 45, 3, 5, 56, 23].findIndex(item => item > 20));// 1
```
- includes方法返回一个布尔值，表示某个数组是否包含给定的值
```
console.log([1, 2, ,3, NaN].includes(NaN)); //true
console.log([1, 2, 34].includes(2)); //true
```
## 函数扩展
### 一、参数默认值
```
function test(x = 'Fang'){
    console.log(x);
}
test('Feiyue');

function test2 (x = 'Fang', y){//默认值后面不能在跟没有默认值的变量,参数默认值要放在函数参数最后面
    console.log(x, y);//feiyue, undefined
}

test2('feiyue');

//作用域
let  x = 'test';

function test2(x, y=x){
    console.log(x, y);
}

test2('love'); //love, love
test2(); // undefined, undefined

let y = 'test2';
function test3(c, x = y){
    console.log(c, y);
}

test3('love'); //love, test2
test3(); //undefined, "test2"
```
### 二、rest参数,ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中

注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
```
function test(...arg){ //数组
    for (let v of arg){
        console.log(v);
    }
}

test(1, 2, 3, 4, 5, 6);
```
### 三、扩展运算符
```
console.log(...[1,2,3,4]); //1 2 3 4
```
### 四、箭头函数

ES6允许使用“箭头”（=>）定义函数。
```
var f = v => v;
等同于
var f = function(v) {
  return v;
};
```
如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
```
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```
#### 箭头函数注意点
- 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
- 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
- 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
- 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
### 五、this绑定
### 六、尾调用
尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。
```
function f(x){
  return g(x);
}
```
f函数最后一步调用的是一个函数，属于尾调用，下面这种情况不属于尾调用
```
function f(x){
  g(x);
}
```
因为它等同于
```
function f(x){
  g(x);
  return undefined;
}
```
#### 尾调用实践：
递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。
```
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5) // 120

换成递归如下
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) // 120
```
## 对象扩展
### 一、简洁表示法
```
let o = 1,
    y = 2;

const obj = {
    o: o,
    y: y,
    test: function(){
        console.log('test');
    }
};

console.log(obj); //{o: 1, y: 2, test: f()}

//简洁表示法
const obj2 = {
    o,
    y,
    test(){
        console.log(test);
    }
};
console.log(obj2); //{o: 1, y: 2, test: f()}
```
### 二、属性表达式
```
let name = 'FangFei';
const obj = {
    [name]: 'yue'
};
console.log(obj); //{FangFei: "yue"}
```
### 三、Object新增方法

- Object.is()它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
```
console.log(Object.is('111', '111')); //true
console.log(Object.is([], [])); //false
```
不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
```
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```
- Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
```
console.log(Object.assign({a:1}, {b:2})); //{a: 1, b: 2}
```
注意点：
    - Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
    ```
    const obj1 = {a: {b: 1}};
    const obj2 = Object.assign({}, obj1);

    obj1.a.b = 2;
    obj2.a.b // 2
    ```
    - 对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。
    ```
    let obj = {name: 'fang'};
    let obj2 = {name: 'feiyue'};
    console.log(Object.assign(obj, obj2)); //{name: "feiyue"}
    ```
- Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
```
let obj = {id:'12', name:'fang'};
for (let [key, value] of Object.entries(obj)){
    console.log(key, value); //name fang
}
```
### 四、扩展运算符
```
let {a, b, ...rest} = {a:123, b:456, c:34, d:23};
console.log(a, b, rest);//123 456 {c: 34, d: 23}
```
注意：解构赋值必须是最后一个参数，否则会报错。
```
let { ...x, y, z } = obj; // 句法错误
let { x, ...y, ...z } = obj; // 句法错误
```
扩展运算符的解构赋值，不能复制继承自原型对象的属性。
```
let o1 = { a: 1 };
let o2 = { b: 2 };
o2.__proto__ = o1;
let { ...o3 } = o2;
o3 // { b: 2 }
o3.a // undefined
```
上面代码中，对象o3复制了o2，但是只复制了o2自身的属性，没有复制它的原型对象o1的属性。
```
const o = Object.create({ x: 1, y: 2 });
o.z = 3;

let { x, ...{ y, z } } = o;
x // 1
y // undefined
z // 3
```
上面代码中，变量x是单纯的解构赋值，所以可以读取对象o继承的属性；变量y和z是扩展运算符的解构赋值，只能读取对象o自身的属性，所以变量z可以赋值成功，变量y取不到值。
## Symbol
JavaScript 语言的数据类型：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）、Symbol
### 一、作用
简单来说就是这种类型提供独一个一无二的值
### 二、初步操作
- 声明
```
// Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。
let a1 = Symbol(),
    a2 = Symbol();
console.log(a1 === a2);  // false 
console.log(a1, a2);    // Symbol() Symbol()

// Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
let a1 = Symbol.for('a1');
let a2 = Symbol.for('a1');
console.log(a1 === a2); //true
```
- 简单使用
```
let a1 = Symbol.for('abc');
let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
};

console.log(obj);   //{abc: 345, c: 456, Symbol(abc): "123"}
```
注意：对象中有用Symbol做key话通过for...in是拿不到key值的
```
let a1 = Symbol.for('abc');
let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
};

console.log(obj);   //{abc: 345, c: 456, Symbol(abc): "123"}

for (let [key, value] of Object.entries(obj)){
    console.log(key, value);
    //abc 345
    //c 45
    //可见并没有输出Symbol(abc): "123"
}
```
那我们怎么才能获取对象中key值为Symbol的值呢？可以使用Object.getOwnPropertySymbols(obj)
```
Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(item); //Symbol(abc)
    console.log(obj[item]); //123
});
```
从上面的代码for...of拿到了对象普通属性的key，Object.getOwnPropertySymbols拿到了对象中Symbol类型key的值，那我们怎么把他们一块拿到呢？可以用Reflect.ownKeys
```
Reflect.ownKeys(obj).forEach(item=>{
    console.log(item);
    // abc
    // c
    // Symbol(abc)
});
```
## Set、Map数据结构
### Set的用法
- 声明、添加、获取元素个数
```
let list = new Set();
list.add(1);
list.add(2);
console.log(list); //Set(2)
console.log(list.size); //2


let arr = [2, 4, 345, 45, 23];
let list = new Set(arr);
console.log(list); //Set(5) {2, 4, 345, 45, 23}
console.log(list.size); //5
```
- Set数据元素必须是唯一的
```
let list = new Set();
list.add(1);
list.add(2);
list.add(1);
console.log(list); //Set(2) {1, 2}，只输出了一个1


let arr = [1, 23, 23, 34, 5, 56, 56];
let list = new Set(arr);
console.log(list); //Set(5) {1, 23, 34, 5, 56}
```
- 判断是否包含某个元素
```
let arr = [1, 1, 2, 3, 4, 5, 6],
    list = new Set(arr);
console.log(list.has(6));   //true
```
- 删除指定元素
```
let arr = [1, 2, 3, 4];
let list = new Set(arr);
list.delete(1);
console.log(list); //Set(3) {2, 3, 4}
```
- Set遍历
```
let arr = [1, 23, 23, 34, 5, 56, 56];
let list = new Set(arr);
for (let item of list){
    console.log('item====>>>', item);
    //item====>>> 1
    //item====>>> 23
    //item====>>> 34
    //item====>>> 5
    //item====>>> 56
}


let arr = [1, 2, 3, 4, 435, 45, 23, 12];
let list = new Set(arr);
list.forEach(item=>{
    console.log(item);//1, 2, 3, 4, 435, 45, 23, 12
})
```
### WeakSet用法
WeakSet的数值必须是对象，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。
```
let arr = [1, 2, 3, 4, 5, 6];
let list3 = new WeakSet(arr);//报错

let arr2 = [[1, 2, 3, 3,4, 5, 6, 6]];
let list4 = new WeakSet(arr2);
console.log(list4); // WeakSet {Array(8)}
```
由上面的代码可以看出，数组的成员成为 WeakSet 的成员，而不是数组本身。这意味着，数组的成员只能是对象，而不能是其他数据类型。
### Map的用法
JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
- 声明方式一
```
let map = new Map(),
    arr = [1];
//添加元素
map.set(arr, 123);

//获取制定的key值：get
console.log(map.get(arr)); //123 
console.log(map); //Map(1) {Array(1) => 123}
```
- 声明方式二
注意：这种方式Map的传值必须为[[key, value], [key, value]...],每个小数组中只能有两个值一个key，一个value不能再有其他的
```
let map = new Map([['key1', 2], ['key2', 5]]);
console.log(map); //Map(2) {"key1" => 2, "key2" => 5}
console.log(map.size); //2
console.log(map.delete(1),map);//false Map(2) {"key1" => 2, "key2" => 5}


let map2 = new Map([['name','fangfeiyue', 'age', 18]]);
console.log(map2); //Map(1) {"name" => "fangfeiyue"}
```
- clear清空Map
```
let map = new Map([['name', 'fangfeiyue'], ['age', 18]]);
console.log(map);   //Map(2) {"name" => "fangfeiyue", "age" => 18}
map.clear();
console.log(map); //Map(0) {}
```
### WeakMap的用法
WeakMap和WeakSet都是不可以遍历的
```
let weakMap = new WeakMap();
let o = {};
weakMap.set(o, 123);
console.log(weakMap);   //WeakMap {{…} => 123}
console.log(weakMap.get(o)); //123
```
### Map和Array的对比
```
//增
let map = new Map(),
    arr = [];
map.set('name', 'fangfeiyue');
arr.push({'name': 'fangfeiyue'});
console.log(map);   //Map(1) {"name" => "fangfeiyue"}
console.log(arr);   //[{…}]

//查
let map_isExit = map.has('name'),
    arr_isExit = arr.find(item => item.name);
console.log(map_isExit);    //true
console.log(arr_isExit);    //{name: "fangfeiyue"}

//改
map.set('name', 'yuenong');
arr.forEach(item => item.name ? item.name='yuenong' : '');
console.log(map);   //Map(1) {"name" => "yuenong"}
console.log(arr);   //[{name : "yuenong"}]

//删除元素
map.delete('name');
let index = arr.findIndex(item => item.name);
arr.splice(index, 1);
console.log(map); // Map(0) {}
console.log(arr); // []
```
### Set和Array的对比
```
let index,
    set_isExit,
    arr_isExit,

    set = new Set(),
    arr = [];
// 增
set.add({name: 'fang'});
arr.push({name: 'fang'});
console.log(set); //Set(1) {{…}}
console.log(arr); //[{…}]

//查
//has({name:'fang'})是一个新生成的对象，返回肯定是false
//要想输出true，这个对象必须被保存到一个才行
let obj = {age:12};
set.add(obj);
console.log('sdsdf====>', set.has(obj)); //true
set_isExit = set.has({name:'fang'});
arr_isExit = arr.find(item => item.name);
console.log('let',set_isExit, arr_isExit); //false {name: "fang"}

// 改
console.log('改改改改改改');
console.log(arr);
set.forEach(item=>item.name ? item.name='yue' : '');
arr.forEach(item=>item.name ? item.name='yue' : '');
console.log(set); //Set(2) {{…}, {…}}
console.log(arr); //{[name: 'yue']}
// 删
set.forEach(item => item.name ? set.delete(item) : '');
index = arr.findIndex(item => item.name);
arr.splice(index, 1);
console.log(set); //Map(0) {}
console.log(arr); //[]
```
### Map、Set、Object对比
```
let item = {name   : 'fang'},
    obj  = {},
    map  = new Map(),
    set  = new Set();

//增
map.set('name', 'fang');
set.add(item);
obj['name'] = 'fang';
console.log(map); //Map(1) {"name" => "fang"}
console.log(set); //Set(1) {{…}}
console.log(obj); //{name: "fang"}

//查
console.info(map.has('name'), set.has(item), 'name' in obj);// true true true

//改
map.set('name', 'yue');
item.name   = 'yue';
obj['name'] = 'yue';
console.log('改',obj);   //{name: "yue"}
console.log(map);   //Map(1) {"name" => "yue"}
console.log(set);   //Set(1) {{…}}

//删
map.delete('name');
set.delete(item);
delete obj['name'];
console.info(map); //Map(0) {}
console.info(set); //Set(0) {}
console.info(obj); //{}
```
## 类
### 一、基本语法
```
class Parent{
    constructor(name = 'fangfeiyue'){
        this.name = name;
    }
}

let parent = new Parent('fangyuenong');
console.log('构造函数和实例', parent); //Parent {name: "fangyuenong"}
```
### 二、类的继承
```
class Parent{
    constructor(name = 'fangfeiyue'){
        this.name = name;
    }
}
class Child extends Parent{

}

let parent = new Parent('fangyuenong'),
    child = new Child();
console.log(child); //Child {name: "fangfeiyue"}
```
### 三、继承传递参数
```
class Parent{
    constructor(name = 'fangfeiyue'){
        this.name = name;
    }
}
class Child extends Parent{
    constructor(name='child'){
        super(name);//一定要在第一行,如果不传值，则默认继承父类的值
        this.age = 12;
    }
}

let parent = new Parent('fangyuenong'),
    child = new Child('hello');
console.log(child); //Child {name: "hello", age: 12}
console.log(parent); //Parent {name: "fangyuenong"}
```
### 四、getter、setter
```
class Parent{
    constructor(name = 'feiyue'){
        this.name = name;
    }
    get longName(){
        return 'fang' + this.name;
    }
    set longName(value){
        this.name = value;
    }
}
let parent = new Parent();
console.log(parent.longName ); //fangfeiyue
```
### 五、静态方法
注意：静态方法通过类去调用而不是通过类的实例去调用
```
class Parent{
    constructor(name = 'fangfeiyue'){
        this.name = name;
    }
    static tell(){
        console.log('执行了静态方法');
    }
}
Parent.tell(); //执行了静态方法
```
### 六、静态属性
```
class Parent{
    constructor(name = 'fangfeiyue'){
        this.name = name;
    }
}
//静态属性
Parent.age = 18;
console.log(Parent.age); //18
```
## Promise
Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。简单使用：
```
let ajax = function(){
    console.log('执行2');
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};     

ajax().then(function(){
    console.log('Promise', 'timer2');
});
```
- Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
```
function loadImg(src){
    return new Promise((resolve, reject)=>{
        let img = document.createElement('img');
        img.src = src;
        img.onload=function(){
            resolve(img);
        };
        img.onerror=function(){
            reject(err);
        };
    });
}
function showImgs(imgs){
    imgs.forEach(img => {
        document.body.appendChild(img);
    });
}

Promise.all([
    loadImg('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=49366202,632101467&fm=27&gp=0.jpg'),
    loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=594559231,2167829292&fm=27&gp=0.jpg'),
    loadImg('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1501729109,4046516680&fm=27&gp=0.jpg')
]).then(showImgs);
```
只有这 3 个实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。
- Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。只要有一个实例率先改变状态，变量状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给变量的回调函数。
```
function loadImg(src){
    return new Promise((resolve, reject)=>{
        let img = document.createElement('img');
        img.src = src;
        img.onload = function(){
            resolve(img);
        };
        img.onerror = function(){
            reject(err);
        };
    });
}

function showImg(img){
    document.body.appendChild(img);
}

Promise.race([
    loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1517420881,1284406776&fm=27&gp=0.jpg',),
    loadImg('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2546506461,4214746746&fm=11&gp=0.jpg'),
    loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1517420881,1284406776&fm=27&gp=0.jpg')
]).then(showImg);
```
## 模块化
ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。
### 一、export 命令
export命令用于规定模块的对外接口，一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量
```
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
``` 
export的写法，除了像上面这样，还有另外一种。
```
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};
```
需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系
```
// 报错
export 1;

// 报错
var m = 1;
export m;
```
上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口。正确的写法是下面这样。
```
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
```
上面三种写法都是正确的，规定了对外的接口m。其他脚本可以通过这个接口，取到值1。它们的实质是，在接口名与模块内部变量之间，建立了一一对应的关系。
### 二、import 命令
使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块
## Iterator
JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。

遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
- 简单demo
```
let arr = ['hello', 'world'];
let map = arr[Symbol.iterator]();
console.log(JSON.stringify(map.next())); //{"value":"hello","done":false}
console.log(JSON.stringify(map.next())); //{"value":"world","done":false}
console.log(JSON.stringify(map.next())); //{"done":true}
```
- 部署Iterator接口
```
let obj = {
    start:[1, 3, 2],
    end:[7, 8, 9],
    [Symbol.iterator](){
        let self = this;
        let index = 0;
        let arr = self.start.concat(self.end);
        let len = arr.length;
        return {
            next(){
                if (index < len){
                    return {
                        value: arr[index++],
                        done: false
                    };    
                }else{
                    return {
                        value: arr[index++],
                        done: true
                    };
                }
            }
        };
    }
};

for (let key of obj){
    console.log(key);//1, 3, 2, 7, 9, 8
}
```

## 资料借鉴
[《ECMAScript 6 入门》](http://es6.ruanyifeng.com/#README)
## 说明
如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

或者您可以 "follow" 一下，我会不断开源更多的有趣的项目
## 个人简介
作者：房飞跃

博客地址：[前端网](http://www.qdfuns.com/house/31986/note)  [博客园](https://www.cnblogs.com/fangfeiyue)  [GitHub](https://github.com/fangfeiyue)

职业：web前端开发工程师

爱好：探索新事物，学习新知识

座右铭：一个终身学习者

## 联系方式
坐标：北京

微信：

![XinShiJieDeHuHuan](http://note.youdao.com/yws/public/resource/c2361265179a03449f6d52397fd50033/xmlnote/100D55934BB446839482D3EA0CDC3E8D/17820)

QQ：294925572

邮箱：fangfeiyue918@163.com
## 赞赏
觉得有帮助可以微信扫码支持下哦，赞赏金额不限，一分也是您对作者的鼎力支持

![微信打赏](http://note.youdao.com/yws/public/resource/c2361265179a03449f6d52397fd50033/xmlnote/D77744C8EC944CF6AA232272CBC5CF6D/17828)
