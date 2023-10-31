//return 2 indices of two numbers whichs sum is upto target;
const nums = [2, 7, 11, 15], target = 9, result=[];
let sum = 0;
for (let i=0; i<nums.length-1; i++){
    for(let j=i+1; j<nums.length; j++){
        if(nums[i] + nums[j] <= target){
            result.push(i,j);
            delete nums[i];
            delete nums[j];
        }
    }
}
console.log(result);
