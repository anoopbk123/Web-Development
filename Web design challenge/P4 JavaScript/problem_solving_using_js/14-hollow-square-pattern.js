const n = 10;
for(let i = 0; i <= n; i++){
    let raw;
if(i === 0 || i === n){
    raw = '*'.repeat(n)
}
else{
    let space = ' '.repeat(n - 2);
    raw = `*${space}*`;
}
console.log(raw);
}