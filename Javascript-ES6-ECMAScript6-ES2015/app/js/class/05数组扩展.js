{
    console.log('------------------');
}
{
    console.log('------------------');
}
{
    console.log('------------------');
}
{
    console.log([1, 2, ,3, NaN].includes(NaN)); //true
    console.log([1, 2, 34].includes(2)); //true
    console.log('------------------');
}
{
    console.log([1, 23, 45, 3, 5, 56, 23].findIndex(item => item > 20)); //1
    console.log('------------------');
}
{
    console.log([1, 23, 45, 3, 5, 56, 23].find(item => item > 20));//23
    console.log('------------------');
}
{
    console.log([17,26,53,44,25,6, 23, 84, 92].copyWithin(2, 3, 5)); //[17, 26, 44, 25, 25, 6, 23, 84, 92]
    console.log('------------------');
}
{
    for (let [index, value] of [1, 23, 234, 4, 5, 34].entries()){
        console.log(index, value);
        // 0 1
        // 1 23
        // 2 234
        // 3 4
        // 4 5
        // 5 34
    }

    for(let index of [1, 2, 3, 4, 5].keys()){
        console.log(index);// 0, 1, 2, 3, 4
    }

    for (let value of [1, 2, 3, 4, 54, 45].values()){
        console.log(value);
    }
    console.log('------------------');
}
{
    console.log([1, 23, NaN].fill(8));  // [8, 8, 8]
    console.log([1, 3, 23, 're', undefined, NaN].fill(7, 1, 3));//[1, 7, 7, "re", undefined, NaN]
    console.log('------------------');
}
{
    let pArr = Array.from(document.getElementsByTagName('p'));
    pArr.forEach(item => {
        console.log(item.textContent);
    });
    console.log('------------------');
}
{
    console.log(Array.of(1, 2, 3, 'sdf', [1, 2,3]));// [1, 2, 3, 'sdf', [1, 2, 3]]
    console.log('------------------');
}