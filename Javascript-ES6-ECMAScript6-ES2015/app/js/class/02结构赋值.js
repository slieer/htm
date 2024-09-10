//模拟取出json中的某个值
{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'description'
        }]
    };

    let {title: esTitle, test:[{title:cnTitle}]} = metaData;

    console.log(esTitle, cnTitle); //abc, test
}

//结构赋值的简单应用
{
    let a = 1,
        b = 2;
    
    [a, b] = [2, 1];

    console.log(a, b); //2, 1
}

//对象结构赋值
{
    let a, b;
    ({a, b} = {a:1, b:2});
    console.log(a, b);//1  2
}

{
    let a, b, rest;
    [a, b, ...rest] = [1,2 ,3, 4, 5, 6];
    console.log(a, b, rest);//1 2 [3, 4, 5, 6]
}

//数组结构赋值
{
    let a, b, rest;
    [a, b] = [1, 2];
    console.log(a, b);//1 2
}