const car = {
  color: "red",
  model: "k10",
  speed: 900,
};

const marks = [3, 5, 6, 245, 543];

//name must be same
function a() {
  // let color = car.color;
  // let model = car.model;
  // let speed = car.speed;
  //let {...car2} = car;
  let { color, speed, model, status = 0 } = car; //can give default value
  console.log(color, model, speed, status);

  let [a, e, , d] = marks;
  console.log(a, e, d);
}
a();

const arr = [1, 2, 3, 4];
//argument destructuring
function arrPrint([a, b, c]){
    console.log(a, b, c);
}
arrPrint(arr);

const obj = {one: 1, three: 3};
const obj2 = {one: 'a', two: 'b', three: 'c'};

function o(){
    let {one, two=2, three} = obj;
    let {one: one2, two: two2, three: three2} = obj2;
    console.log(one, two, three, one2, two2, three2)
}
o();

//by using destructuring we can declare and assign many variables at a time
const [x, y, z] = ["x", "y", "z"];
console.log(x, y, z);

//variable swap using destructuring;
let x1 = 0;
let y1 = 2;
[y1, x1] = [x1, y1];
console.log(x1, y1);
