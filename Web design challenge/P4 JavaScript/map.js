//map holds key value pairs of list
//keys can be string or numbers
const map = new Map([["one", 1], ['two', 2], ['three', 3]]);
console.log(map);
//console.log(map[0]);
//console.log(map['one']);
//get
console.log(map.get("two"));
//set
map.set('four', 4);
//size
console.log(map);
console.log(map.size);
//delete
map.delete('one');
console.log(map);
//has
console.log(map.has('two'));
//forEach
map.forEach((value, key)=>console.log(`${key}\t${value}`));
//clear
//keys
console.log(map.keys())