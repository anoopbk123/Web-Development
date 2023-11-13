//get: creates a function as property that return the other property value
const car={
    name:'BMW',
    model:'a10',
    color:'red',
    price:10000000,
    get value(){
        return this.price;
    },
    design: function(){return this.color},//method
    //fuel:'',
    set energy(use){
        this.fuel=use;
    }
};
console.log(car.design());
console.log(car.value);
//set: create a function to set a property to an object
car.energy = 'petrol';
console.log(car)