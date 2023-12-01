const num =1111221;
const target = 1;
console.log(countOfTarget(num, target))

function countOfTarget(num, target){
    let count = 0;
    while(num !== 0){
       let rem = num % 10;
        if(rem === target){
            count += 1;
        }
        num = parseInt(num/10);
    }
    return count;
}