//window is the global object
//var variable declared globally will be a proporty of window
//global let cannot be a property of window
//try to avoid var global variables it may rewrite build in functions
var a = 10;
console.log(this);
console.log(this.a);
console.log(window.a);
console.log(window.document)
