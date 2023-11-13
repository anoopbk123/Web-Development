const car={
    name:'BMW',
    model:'a10',
    color:'red',
    price:10000000,
}

//always use object[variable]. If object.variable it will search for a key varible
for (let key in car){
    console.log(`${key}\t${car[key]}`);
}
