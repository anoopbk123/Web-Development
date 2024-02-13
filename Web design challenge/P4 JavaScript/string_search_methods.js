//indexOf. return first index. second parameter is used for starting position of search
const froots = 'Banana, Apple, Orrange, Orrange';
console.log('indexOf\t'+froots.indexOf('Orrange'));
console.log('indexOf\t'+froots.indexOf('o'));//case sensitive if not found return -1;
console.log('\nIndexOf\t'+froots.indexOf('Orrange',16));

//lastIndexOf.return last index. case sensitive if not found return -1. second parameter(exclusive) is used for ending position of search;
console.log('\nlastIndexOf\t'+froots.lastIndexOf('Orrange'));
console.log('\nlastIndexOf\t'+froots.lastIndexOf('Orrange',23));

//search. same like index of but cannot take 2nd parameter and can take regex as parameter
console.log('\nsearch\t'+froots.search('Orrange'));
console.log('search\t'+froots.search(/Orrange/));

//match. return array of matching first strings. case sensitive accept regex;
const matchArray = froots.match('rrange');
const matchArray2 = froots.match(/rrange/g);
console.log('\nmatch\t'+matchArray);
console.log('match\t'+matchArray2);

//matchAll(). return all matching string as array

//includes. 2nd argument start position, case sensitive;
console.log('\ninclude\t'+froots.includes('Orr'));
console.log('include\t'+froots.includes('Orr',15));

//starts with. case sensitive. 2nd argument start position;
console.log('\nstartsWith\t'+froots.startsWith('Ban'));
console.log('startsWith\t'+froots.startsWith('A',8));

//endsWith. case sensitive. 2nd argument end position(excluded);
console.log('\nendsWith\t'+froots.endsWith('ge'));
console.log('\nendsWith\t'+froots.endsWith('na',6));