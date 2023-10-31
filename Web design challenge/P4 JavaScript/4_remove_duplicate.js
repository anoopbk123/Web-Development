const array = [1,2,3,33,3,3,5,3,9,2,8,2,2,2];
for (let i=0; i<array.length-1; i++){
    var item = array[i];
    for (let j=i+1; j<array.length; j++){
        if (item==array[j]){
            array.splice(j,1);
            //check adjusent duplicates
            j--;//if the item removed the index will change. the index of next item will become the index of deleted item so it will not check
            
        }
    }
}
console.log(array)