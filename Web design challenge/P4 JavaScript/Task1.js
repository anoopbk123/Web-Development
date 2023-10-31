//Find triplet of a list whoes sum is zero
const nums = [-1, 0, 1, 2, -1, -4, -1];
const resultSet = new Set();
const result = [];
let len = nums.length;
for(let i=0; i<len-2; i++){
    for(let j=i+1; j<len-1; j++){
        for(let k=j+1; k<len; k++){
            if( nums[i]+nums[j]+nums[k] == 0 ){
                const tripleString = [nums[i], nums[j], nums[k]].sort().toString();
                resultSet.add(tripleString)
            }
        }
    }
}
resultSet.forEach(tripletString => {
    result.push(tripletString.split(',').map(Number));
});

console.log(result);