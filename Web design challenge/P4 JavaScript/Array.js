const froots = ['Apple', 
            'orrange',
            'banana',
            'grape'];
froots[froots.length] = 'tomato';
froots[froots.length-2] = 'Grape';
console.log(froots);

//of means item of array and in means index of array
for (let froot of froots){
    console.log(froot)
}

for (let froot in froots){
    console.log(froot)
}

//toString
console.log(froots.toString())

froots[7] = 'abc'
console.log(froots);
console.log(Array.isArray(froots));