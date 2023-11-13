//the call function allows to use an object in a function
function fullName(){
    return this.fname+' '+this.lname
}
const name = {fname:'babu', lname:'sabu'};
let fullname = fullName.call(name);;//can also send arguments with call(name, 'aa', 'bbb')
console.log(fullname)

//the call() invoke the function directily but the bind will save it to the variable
let fullname2 = fullName.bind(name);
console.log(fullname2())

//apply(). same like call(). but other arguments are passed as an array
function placeName(pin, state){
    return this.pname+' '+pin+' '+state
}
const place = {pname: 'Palakkad'};
console.log(placeName.apply(place, ['679341', 'Kerala']));
const nums  = [1,2,4,4,8,3];
console.log(Math.max.apply(null, nums));