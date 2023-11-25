//return one value for last item. it will be the last value of the first argument in the functioin. the second argument of call back function is the item of array
//there are two arguments in reduce one is call back function and the other is the initial value of the 1st parameter of callback function

const std = [
    {name: 'Bob', mark:32},
    {name: 'Babu', mark:0},
    {name:'Raman', mark:90}
]

console.log(std.reduce( (t, item) => { return item.mark}, 0))//the t will have the value of previous return. the 2nd argument of reduce is the init of t.
//console.log(mark.reduce())
console.log(std.reduce( (t, item) => { return total = t + item.mark}, 0));