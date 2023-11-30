const input = '7, 2';

const powerOfaNumber = (str) =>{
    const num = str.split(', ');
    return num[0]**num[1];
    }

console.log(powerOfaNumber(input));