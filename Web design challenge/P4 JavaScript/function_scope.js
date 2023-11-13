//every function declared out side of a block willbw the property of global object or window
function globalFunction(){
    return 'globalFunction'
}
console.log(this.globalFunction());

//automatic declared variables inside a variable will be a global variable and property of window
function sum(){
    x=20;
    x+=10;
    var x1=50;
};sum();
console.log(this.x)
//console.log(x1)//error

var a1 = 1;
var b1 = 1;
function sum1(){
    var a1=2;
    b1 = 2;
}
sum1();
console.log(a1)//variable declared inside a functioin will dei with it
console.log(b1)//considered as global variable

var a2 = 1;
var b2 = 1;
let b3 = 1;

function sum2(a2, b2, b3){
    a2=2;
    this.b2=2;//b2 assigned to its global var. Here 'this' means window. window already have a property b2 so value will be assigned to this
    this.b3 = 2;//let global is not a property of window so it will not change the global variable
}
sum2(a2, b2, b3)
console.log(a2)//arguments will die with function
console.log(b2)
console.log(b3)