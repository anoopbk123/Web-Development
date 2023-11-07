//forEach
//map. return an array after a operation.arguments are same as forEach
//from. convert an iteratable to an array
const numbers = '123456';
const arrsnum = Array.from(numbers);
console.log(arrsnum);
const arr_num = arrsnum.map((value)=>Number(value));
console.log(arr_num);

//...   spread operator. Used to spread the values of an iterator
const spread = [[...numbers], [...arrsnum], [...arr_num]];
console.log(`\nspread`);
console.log(spread);

//includes
//indexOf
//lastIndexOf
//filter. return an array of values satisfying a condition. arguments same as forEach
const odd = arr_num.filter((value=>value&1==1));
console.log(odd);

//every. return true if all the value satisfies a condition
console.log(`\nevery\t${arr_num.every((value)=>value>0)}`)

//some. return ture if any of the value satisfy a condition
console.log(`\nsome\t${arr_num.some((value=>value===4))}`);

//find. return the first value which satisfy a condition
console.log(`find\t${arr_num.find(v=>v>5)}`);

//findIndexOf
//findLastIndex
//entries. return array of subarrys on index and value
const entries = arr_num.entries();
for (x of entries){
    console.log(x)
}
console.log(typeof entries);
