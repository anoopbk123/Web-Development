5/*(operand)*/+/*(operator)*/5

//Arithmetic operators(+,-,*,%,/,++,--,**)
//comparison operators(===,==,<,>=...)
//logical operators(&&,||,!)
//assignment operators(=,+=...)
//bitwise operators(&,|,^(xor),~(not)...)
//type operators(typeof,instanceof)
//string operators(concatenation +)
//ternary(conditional) operator(? :)
//comma opertator(,)
//unary operators(+,-,--,++,!)

//concatenation
fname='acb'
lname='df'
fulln=fname+lname;
console.log(fulln)

let a1='A'
let b1='B'
result=a1<b1
console.log(result)

//instanceof
class Animal{}
class Dog extends Animal{}
let myDog =new Dog();
console.log(myDog instanceof Dog);
console.log(myDog instanceof Animal);

//post and pre increments
x=1
x2=x++
x3=++x
console.log(x2+' '+x3)//in for loop not assigning the increment so we can use post incement and pre incerent as same

for(var i=0;i<3;++i){
    console.log(i+' ')
}
for(var j=0;j<3;j++){
    console.log(j+' ')
}

//bitwise operators
console.log(5&1)
console.log(4&1)
console.log(3&2)

//ternary operator
let age=18;
age>=18 ? console.log('adult'):console.log('not adult');

console.log(typeof true)
console.log(typeof document)
