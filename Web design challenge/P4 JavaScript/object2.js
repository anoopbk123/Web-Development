const car={
    name:'BMW',
    model:'a10',
    color:'red',
    price:10000000,
}

console.log(car)
console.log('car name\t'+car.name)
console.log('price\t'+car['price'])

const name={
    first_name:'abu',
    last_name:'babu',
    full_name:function(){return this.first_name+" "+this.last_name;}
}
console.log(name)
console.log(name.full_name())

let str=new String('hai')
console.log(typeof str)
let num=new Number(7)
let bool=new Boolean(true)
console.log(bool)

const customer={
    name:'',
    age:'',
    place:'',
}
console.log(customer)
customer.name='Raman';
customer.age=28;
customer['place']='kerala'
customer.position='CEO'
console.log(customer)

