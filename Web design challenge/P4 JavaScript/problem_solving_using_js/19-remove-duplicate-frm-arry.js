const removeDuplicate = function (arr){
    const uniQueArray = []
    let found = false;
    for(let i of arr){
        for(let j of uniQueArray){
            if(i===j)
                {
                    found = true
                    break;
                }
        }
        found?found=false:uniQueArray.push(i)
    }
    return uniQueArray
}

console.log(removeDuplicate([1,2,33,33,6,7,9,1,0]))