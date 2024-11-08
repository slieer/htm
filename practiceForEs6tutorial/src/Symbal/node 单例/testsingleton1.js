/**
 * Created by niuyuanqiang on 16/8/9.
 */


// 对大小写文件系统不密感的操作系统 单例是有必要的 因为他的modules 虽然读取的是统一文件但是大小写不同 他的模块就会被缓存
// 即代码重新执行 就会出现对象被重置 这时候就需要单例模式

const count = require('./testsingleton');

const user = require('./singleton');

console.log(user);
