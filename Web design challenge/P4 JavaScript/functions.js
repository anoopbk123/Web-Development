//function as a variable
//anonimous function
var fun = function(){console.log('function as a variable');};
fun();

//function constructor
const fun2 = new Function('a,b', 'return a*b');
console.log(fun2(2,3));

//call by value: a variable passed as an argument to a function will  be a copy of that variable and any change to this argument will not affect the original variable
//call by referance: an array, object or any other derived data passed to a function as an object will be sharing the same data. the changes to this arguments wil also affect the original data
