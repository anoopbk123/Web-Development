//strings are immutables and the string methods return new string;

//length
const str = 'lengthgg';
console.log ('length\t'+str.length)

//slice it takes two arguments start and end(excluded not compalsory) indexes, if nothig to return an empty string will bw the output;
console.log('slice\t' + str.slice(1,6));
console.log(str.slice(3));
console.log(str);
const froots = 'Banana, Apple, Orrange';
console.log(froots.slice(-14));
console.log(froots.slice(-22, -16));
console.log(froots.slice(8, -9));

//substring. same as slice but negative arguments considered as zero. Arguments are automaticaly swaped;
console.log('\nsubstring\t'+ froots.substring(-8,5));
console.log('substring\t'+ froots.substring(5,-8));//-8 will become zero and arguments swaped.;
console.log('substring\t'+ froots.substring(15,5));

//substr. 2nd argument is length of substring. negative arguments can be used;
console.log('\nsubstr\t'+froots.substr(-7));
console.log('substr\t'+froots.substr(0,6));

//replace. case sencitive, onle first is considerd;
const pets = 'dog, cat, Cow, dog';
console.log('\nreplace\t'+pets.replace('dog', 'lab'));
console.log('replace\t'+pets.replace(/cow/i, 'milk'));//insensitive using regex(regular expressions);

//replaceall
console.log('\nreplaceall\t'+pets.replace(/dog/g, 'lab'));//using regex;
console.log('replaceall\t'+pets.replaceAll('dog', 'lab'));

//uppercase and lowercase
console.log('\nuppercase\t'+pets.toUpperCase())
console.log('uppercase\t'+froots.toLowerCase())

//trim. rewove white space from start and end;
const h = '   hello   ';
console.log('\ntrim'+h);
console.log('trim'+h.trim());
console.log('trimstart'+h.trimStart());
console.log(h.trimEnd()+'trimend');

//charAt
console.log('\ncharat\t'+pets.charAt(0));
console.log('\ncharat\t'+pets.charAt());//if out off index return empty string;
console.log('charcodeat\t'+pets.charCodeAt(0));
console.log('indexing\t'+pets[0]);//if out off index return undefind

//split. return array
const petArray = pets.split(',');
const petArray2 = pets.split('');//tacken each char as an item
const petArray3 = pets.split();//default is ','
console.log('\n'+typeof petArray+'\t'+petArray);
console.log('\n'+typeof petArray2+'\t'+petArray2);
console.log('\n'+typeof petArray3+'\t'+petArray3);

//cocnat. same as + operator;
const concatString = pets.concat('\t', froots, '\tconcatString');
console.log(concatString);

//pad. arguments are length(total) and pad (pad added=str.length-given length)
const hai = 'hai'
console.log('padend\t'+hai.padEnd(4,'oo'));
console.log('padend\t'+hai.padEnd(6,'oo'));
console.log('padstart\t'+hai.padStart(8,'oo'));
