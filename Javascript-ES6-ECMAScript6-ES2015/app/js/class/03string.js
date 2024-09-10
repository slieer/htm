// {
//     console.log(String.raw`h\n23\45`);// h\n23\45
//     console.log('h\n23\45');
//     //h 
//     //23%
// }

{
    let str = '1';
    console.log(str.padStart(2, '0')); //01
    console.log(str.padEnd(2, '0')); //10
}

{
    let str = ' 11 ';
    console.log(str.length);
    console.log(str.trim().length);
}

{
   let str = ` 我是
   一个
   终生学习者 s`

    console.log(str);
    //我是
   //一个
   //终生学习者
}

{
    const name = 'FangFeiyue';
    console.log(`My name is ${name}`);//My name is FangFeiyue
}

{
    let str = 'string';
    console.log(str.repeat(3)); //stringstringstring
}

{
    let str = 'string';
    console.log(str.startsWith('s'));// true
    console.log(str.endsWith('g'));// true
}

{
    let str = 'string';
    console.log(str.includes('r'));
}