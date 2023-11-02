//string is a collection of charectors;
let str = new String('string');
for(let char of str){
    console.log(char);
}
console.log('\n')
for(let index in str){
    console.log(str.charAt(index))
}

console.log('B'<'a')