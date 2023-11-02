const fruits = ['Apple', 'orrange', 'banana', 'grape'];
//foreach takes three arguments item value, index, array itself
//forEach. we can give a function as argument or anoni,ous function.
//fruits.forEach(function((fruit, index){})) or fruits.forEach(myFunction); 
fruits.forEach((fruit, index) => {
    console.log(`${fruit} at index of ${index}`);
});