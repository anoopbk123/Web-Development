//a property of an object includ both key and value. key must be a string or symbol. value can be anything
const obj = {name:'nam'}//keys are converted to string even if it is a number
const obj2 = {"name":'nam'}
const obj3 = {4:4}

console.log(obj)
console.log(obj2)
console.log(typeof obj3[4])
console.log(obj3[4])
//console.log(obj3.4)//key is a number
console.log(obj.name)
console.log(typeof obj.name)
console.log(obj['name'])



