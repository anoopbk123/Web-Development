function Cars(model, price, color, fuel){
    this.model = model;
    this.price = price;
    this.color = color;
    this.fuel = fuel;
}

const car1 = new Cars('k10', 7e5, 'red', 'petrol');
car1.year = 2010;
console.log(car1);

const car2 = new Cars('swift', 12e4, 'black', 'ev');
console.log(car2);