//in closure a function declared inside another function
//multiple functions can be declared inside the function
//the inner functions have access to the variables of outter function

// function human(){
//     const name = 'Sina';
//     function hai(){
//         console.log(`hai i am ${name}`);
//     }
//     function feeling(){
//         console.log(`${name} is feeling good`);
//     }
//     hai();
//     feeling();
// }
// human()

// console.log(name)//error. One benefit of closure is when a variable is only need to use for some functions and it must not be accessed for any other function or the chnges of varible must not affect the global variable

function human(name){
    //argument name passed to this function. If any modification done to it will not affect name outside.
    //let count=0
    function hai(){
        //console.log(`hai i am ${name}`);
        count=0
        count+=1
        console.log(`hai i am ${name} ${count}`);
    }
    function feeling(){
        console.log(`${name} is feeling good`);
    }
    //console.log(count)
    return{
        hai,
        feeling
    }
}
//here the human function bcome the factory function which creates and return objects
const sina = human('Sina');
const babu = human('Babu');
sina.hai()//directly calling the inner function but it will remeber the outer function scope even after creation time.
console.log(typeof sina)
console.log(sina)
human('babu2').hai()
sina.hai()
sina.hai()
sina.hai()
babu.hai()
//human()


