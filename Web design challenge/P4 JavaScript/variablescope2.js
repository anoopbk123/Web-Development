// console.log(hol) //let and const are not hoisted 
console.log(ho)//declaration is hoisted not initialisation
hoisted()

var x=10;
let y=2
{
    var x=5;
    let y=8;
    var d=9;
    console.log(y)
    {
        var e='e'
    }
}
console.log(x)

console.log(y)
x=50
console.log(x)

y=33
console.log(y)
const z=11
// z=12//The difference between const and let is that let can be reassigned and const cannot.But both cannot be redeclared;
console.log(z)
var ho='hoisted variable'
console.log(ho)
let hol='hoisted let'
function hoisted(){
    console.log('hoisted function')
}
console.log(d)
console.log(e)

function abc(){
    if(true){
        var f='f'
    }
}
// console.log(f)