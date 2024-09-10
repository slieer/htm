{
    // for (var i = 0; i < 1; i++){}
    // console.log(i); //1
}
{
    // for (let i = 0; i < 1; i++){
    //     const a = 123;
    //     a = 12; //Uncaught TypeError: Assignment to constant variable.
    // }
    // console.log(i); //01let和const.html:17 Uncaught ReferenceError: i is not defined
    // console.log(a); //01let和const.html:17 Uncaught ReferenceError: a is not defined
}

{
    // const p; //Uncaught SyntaxError: Missing initializer in const declaration
    // p = 2;
}

//变量提升
// {
//     a = 1;
//     var a;
//     console.log(a); //1

//     b = 2; //Uncaught ReferenceError: b is not defined
//     let b;
//     console.log(b);
//     c = 3;
//     const c; //Uncaught SyntaxError: Missing initializer in const declaration
//     console.log(c);
// }

//重复声明
{
    // var a = 1;
    // var a = 2;
    // console.log(a); //2

    // let b = 1;
    // let b = 2; //Uncaught SyntaxError: Identifier 'b' has already been declared
    // console.log(b);
}

//const的特殊情况
{
    let obj = {};

    const k = {
        a : 1
    };

    console.log(k);
}