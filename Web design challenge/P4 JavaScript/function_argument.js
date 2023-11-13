//...(rest parameter). it takes arguments as an array. any amount of arguments can be send using this.
function sum(...array){
    let sum = 0;
    array.forEach(value => sum += value);
    return sum;
}
console.log(sum(1,2,3,4,476,46));

//functions have a build in argument object
function fun1(){
    console.log('\n'+arguments.length);
    for (let i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
fun1(33,4,5,7);