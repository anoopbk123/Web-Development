//infinity and -infinity
var inf = 10/0;
var inf2 = -10/0;
console.log(typeof inf+`\t${inf}`);
console.log(typeof inf2+`\t${inf2}`);

//NaN. not a number
var nan = 10/'q';
console.log('\n'+typeof nan+`\t${nan}\t${nan+5}`);

//isInteger
var num = 8;
console.log('\n'+Number.isInteger(num));
console.log(Number.isInteger('5'));
console.log(Number.isInteger(5.5));

//toString()
var nums = num.toString();
console.log('\n'+typeof nums+`\t${nums}\t${nums+5}`);
console.log(typeof num);

//toExponantial
console.log('\n'+num.toExponential());

//toFixed. length after decimal point is the argument
var num2 = 6.9565;
console.log('\n'+num2.toFixed());
console.log(num2.toFixed(1));
console.log(num2.toFixed(2));
console.log(num2.toFixed(3));
console.log(num2.toFixed(5));

//toPrecision().total length is the argument
console.log('\nprecision\t'+num2.toPrecision());//if no argument no precision is done
console.log('precision\t'+num2.toPrecision(1));
console.log('precision\t'+num2.toPrecision(3));

//conversion
//Number()
console.log('\nnumber()\t'+Number(true));
console.log('number()\t'+Number('45.6'));

//praseFloat and int
console.log('\n'+parseFloat(num2));
console.log(parseFloat(num));
console.log(parseInt(num2))//no rounding;