const array = [1, 1, 2, 4, 5, 6,1,6,6,5];
let common = [];
let count = 0;
let found = 0;
console.log('common elements are')
for(let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
        if(array[i]==array[j]){
            count++;
            break;
        }
    }
    if(count>0){
        for(let k=0; k<=common.length; k++){
            if(common[k]==array[i]){
                found++;
                break;
            }
        }
        if(found==0){
            common.push(array[i]);
        }
        found=0;
    }
    count=0;
}
console.log(common)