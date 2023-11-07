let d = new Date()//todays date
console.log(d);
//Date can be given as Date(YYYY, MM[0-11], day[1-31], hour[0-23], minitues, milliseconds)
//or Date('yyyy-mm-dd')....
//year and month must be given . If only one argument id given it is considerd as milliseconds from 1970;
d = new Date(2018, 11, 31);
console.log(d);
//if the month is more than 11 it is counted to the next year. If day id morethan 31 it is cinsiderd to month
d = new Date(2018, 12, 40);
console.log(d);

//If only one argument id given it is consderd as milliseconds from 1970;
d = new Date(2018113124366);
console.log(d);

//to convert a date into millisecond use Date.parse
let millisecond = Date.parse('2018-11-30');
console.log(millisecond)
d = new Date(millisecond);
console.log(d);
console.log(Date.now());//retun milliseconds from 1970