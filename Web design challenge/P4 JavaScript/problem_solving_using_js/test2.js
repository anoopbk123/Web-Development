var removeDuplicates = function(nums) {
    let i = nums.length - 1;
    while (i > 0) {
        if (nums[i] == nums[i - 1]) {
            nums.splice(i, 1);
        }
        i--;
    }
    return nums.length;
};
const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums), nums)