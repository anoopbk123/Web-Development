const array = [1, 2, 3, 4, 5, 6];
console.log(sumOfOdd(array));
function sumOfOdd(array){
    let sum = 0;
    for(let item of array){
        if(item & 1) sum += item;
    }
    return sum;
}