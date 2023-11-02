const fruits = ['Apple', 'apple', 'orrange', 'Banana', 'banana', 'grape'];
fruits.sort();
console.log(fruits);

//number string sort
const numberString = ['6', '5', '66', '2', '0'];
numberString.sort();
console.log(numberString);

//number sort. sort consider string as default
const numbers = [5, 6, 8, 1, 5, 8, 0, 7, 100, 200];
numbers.sort();
console.log(numbers);
numbers.sort((a, b)=> a-b);//if a-b is -ve first a is sorted if positive then b;
console.log(numbers);