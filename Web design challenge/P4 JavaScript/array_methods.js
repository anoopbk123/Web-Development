//push
//length
//toString
//pop. remove item from the end of an array and return the removed element
const fruits = ['Apple', 'orrange', 'banana', 'grape'];
let removed = fruits.pop();
console.log(fruits+'\tremoved  '+removed);

//join. convert array into string but the given argument will be the seperator
console.log('\njoin\t'+fruits.join('*'));

//shift same like pop but the first item is affected;
//unshift. same like push but the item added to the first index;

//delete. the deleted position wil become undefind
delete fruits[1]
console.log(fruits)

//concat (merge arrays)
const androidBrands = ['Nokia', 'MI', 'Samsung'];
const otherBrands = ['BlackBerrry', 'iPhone', 'Nokia']
const mobileBrands = androidBrands.concat(otherBrands, 'Lava', 'Karbon');
console.log(mobileBrands);

//flat. creates a new array
const nums = [1, 2, [3, 4], [5, 6], [7,8]];
console.log(nums.flat());

//splice. if deleted retun deleted. arguments-1)start index 2) count from start.if not given deleted from the 1st argument if zero nothing deleted. 3)items to be added from first argument
let change = mobileBrands.splice(4)
console.log('\n'+mobileBrands+'\tchange\t'+change);
let change2 = mobileBrands.splice(4,0,'iPhone','Nokia','Lava','Karbon');
console.log(mobileBrands+'\tchange\t'+change2);

//slice return a new array of slice
console.log('\nslice\t'+mobileBrands.slice(3));
console.log('slice\t'+mobileBrands.slice(3,4));

//reverse. modify the current array
mobileBrands.reverse()
console.log('\n reverse\t'+mobileBrands);
