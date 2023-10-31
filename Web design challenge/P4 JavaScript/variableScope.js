var g='varglobalVariable';
let l='letglobalVariable';
function fun(){
    console.log(g)
    if(true){
        let b='blockVariable'
        var f='functionVariable'
        console.log(b);
        console.log(f);
        console.log(g);
        console.log(l);
    }
    console.log(f);
    //console.log(b);//b is a block scoped variable its scope is only inside the if statement
}
fun()
//console.log(f);//var variables declared inside the function will not have a global scope

var x='x'
console.log(x);
//const x='x2'//error
const y='y'
//var y='y2'//error
{
    const y='y3'
    console.log(y)
    const x='x3'
    console.log(x)
}