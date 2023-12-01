const size = 6;
const target = 8;
const array = [5, 7, 7, 8, 8, 10];
console.log(position(size, target, array));

function position(size, target, array){
    const find = [];
    for(let i = 0; i < size; i++){
        if(target == array[i]){
            find.push(i);
        }
    }
    return find.length? [find[0], find[find.length-1]]: [-1, -1];
}