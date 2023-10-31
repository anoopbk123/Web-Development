const array = [1, 2, 3, 5, 9, 11];
console.log('odd numbers in array');
for(let item of array){
    item &1?console.log(item):undefined;
}
