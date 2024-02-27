const containsDuplicate = (array)=>{
    for(let i =0; i<array.length-1; i++){
        for(let j=i+1; j<array.length;j++){
            if(array[i] === array[j]){
                return true
            }
        }
    }
    return false
}

console.log(containsDuplicate([1,2,3,1]))