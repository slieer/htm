import yargs from 'yargs'; //yargs是一个npm模块用来完成命令行参数解析的
const args = yargs.option('production',{
    boolean: true,
    default: false,
    describe: 'min all scripts'
})
.option('watch', {
    boolean: true,
    default: false,
    describe: 'watch all scripts'
})
.option('verbose', {//命令行输出日志
    boolean: true,
    default: false,
    describe: 'log'
})
.option('sourcemaps',{
    describe: 'force the creation of sourcemaps'
})
.option('port', {
    string: true,
    default: 8080,
    describe: 'server port'
})
.argv

export default args;