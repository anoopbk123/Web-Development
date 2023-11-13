//set automaticaly clear the duplicate values
let set = new Set([1,2,2,2,5,7,4,8]);
console.log(set);
//size
console.log(`size of set ${set.size}`);
set.add(88);
set.add(88);
set.add(99);
console.log(set);
console.log(`size of set ${set.size}`);
//delete
set.delete(88);//only take one argument at a time
console.log(set);
//size
console.log(`size of set ${set.size}`);
//has
console.log(set.has(2));
//values.return items of iterator
console.log(set.values());
//forEach
set.forEach(item=>console.log(item));
//clear. clear all the element
set.clear()
console.log(set)