//call by value. primitive data types are called by value
var a = 10;
var b = a;//here a copy of a is assigned to b
b = 2
console.log(a)

//call by reference. non primitive datas are called by reference.
var arr = [1, 2, 4]
var arr2 = arr;//a reference of arr saved to the arr2 changes to arr2 will also affect the arr
arr2[2] = 80;
console.log(arr)
console.log(arr == arr2);
var arr3 = [...arr]//here values saved to the arr3. Hence it will not affect arr
arr3.push(55)
console.log(arr3, arr);
console.log(arr3 == arr);//they are different arrays
//the spread operator will not copy the object inside the object it copies the reference for inner object
//So if we change a value assigned using spread operator if there is a inner object or array it will also change the original value
const x1 = [1, 2, 3, [4, 5, 6]]
const x2 = [...x1]
x2[3][1] = 7;
console.log(x1,' , ', x2);

console.log(Math.max(...arr));
console.log(Math.max.apply(null, arr))