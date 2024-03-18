//the process represent node process includes properties related to input/out put environment variables and command line arguments
const argument = process.argv.splice(2)//to remove node and file name
console.log(argument.join(' '))