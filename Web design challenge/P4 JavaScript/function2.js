//self calling function
(function(){
    console.log('heloo');
}());

//recursive functio

let count = 0;
function sum(){
 count+=1;
 console.log(count);
 if (count<10){
    sum();
 }
}
sum();

//static function
class A{
    static abc(){
        console.log('heloi')
    }
}
let a1 = new A();
console.log(a1.abc);//static functions of a class cannot used by its objects;
console.log(A.abc());