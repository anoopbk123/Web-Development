try{
    //the code writte here may have error. If there is an error it will throw it to the catch
    alert('hello');
}
catch (err){
    //This code will be exicuted if there is an error in try
    console.log('error');
    console.log(err);
}
finally{
    //it is executed even there is no error. it will always executed even there is an error in catch
    console.log('finally');
}
//throw. used to create a custom error

//the javaScript create an error object with two properties name and message

try{
    x/20;
}
catch(error){
    console.log(typeof error);
    console.log(error.name);
    console.log(error.message);
}
