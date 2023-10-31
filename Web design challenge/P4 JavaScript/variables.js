//literls(fixed)
5+10;
8;

//automaatically declared
x=5;
y=8;
z=x+y;
console.log(z, typeof (z))

var a;
console.log(typeof a)


//const
const list=[1,2,3]//const must be assigned with a value when they are declared
//const yx;//shows error
//In const variable the reference to the value is saved and it cannot be changed so it cannot reassign. when changing items in an array only the items are changed not the reference to the array;
console.log(list)
list[0]=0;
console.log(list)
list[2]='a';
console.log(list);
// const list=[8,6]
// list=[994,48] // const cannot be reassigned or redeclared;
console.log(list)//the list will be the same as first declared
// const Name2;
// const Name2='anoop'
// console.log(Name2)

//var
var list2=[5,43,2], b=b+5
console.log(list2)
list2=[5]
console.log(list2)
console.log(b)
console.log(typeof b)
var Name;
var Name='anoop'
console.log(Name)

//let
let Name3;
// let Name3='anoop' //let cannot be redeclared but can be reassigned
Name3='anoop3'
console.log(Name3)

//$ as a variable
let $='this is $variable';
console.log($);
let _="this is _ variable"
console.log(_);

console.log(10/0)
