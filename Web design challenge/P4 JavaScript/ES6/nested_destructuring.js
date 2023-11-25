const std = {
    name: 'Bob',
    age: 20,
    subject:{
        teacher: 'Bappu'
    },
    school:['smhss']
}

var {name, subject:{teacher}, school:[s]} = std;
console.log(name, teacher, s)

var arr = ['one', 'two', {three:3}];
var [a, b, {three}] = arr
console.log(a, b, three)