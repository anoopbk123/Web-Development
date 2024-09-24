// Interface
interface Details {
    name: String;
    age: Number;
    place?: String; //optional property
    post: String | Number;
}

let emp1 : Details = {
    name:'emp1',
    age: 23,
    post: '679321'
}
let emp2 : Details = {
    name:'emp2',
    age: 24,
    post: 679328
}
console.log(emp1, emp2)