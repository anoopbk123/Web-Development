//name value is a attribute of property other properties are enumerable, writable, configurable
const car={
    name:'BMW',
    model:'a10',
    color:'red',
    price:10000000,
}

Object.defineProperty(car, 'price', 
    {
        writable: false,//can not change the value
        enumerable: false,//will not be enumerated in for loop
        configurable: false//can not delete
    })
car.price = 900000//will not cahnge
console.log(car);
delete car.price//can not delete
console.log(car);
for(let key in car){
    console.log(car[key])
    //price will not be visible
}
