//Regular Expressions
//i (insesitive)
//g (global)
//test()
let str = 'hello, hai, good mornig 007';
console.log(/e/.test(str));//to check the char 'e' is precent
console.log(/0/.test(str));//to check the number 0 is precent
console.log(/\s/.test(str))//to check any space in the string
console.log(/\d/.test(str))//to check any digit in the string
console.log(/[abc]/.test(str))//to check any of in this in the string
console.log(/[0-9]/.test(str))//to check any 0 to 9 in the string
console.log(/(x|y)/.test(str))//to check x or y in the string

