interface Details {
    name: String;
    age: Number;
    place?: String; //optional property
    post: String | Number;
    getAge: ()=>void;
}

let emp1 : Details = {
    name:'emp1',
    age: 23,
    post: '679321',
    getAge(){console.log(this.age)}
}
emp1.getAge()