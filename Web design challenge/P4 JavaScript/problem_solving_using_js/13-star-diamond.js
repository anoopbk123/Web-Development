const n = 5;
for(i = 1; i <= n; i++){
    let space = ' '.repeat(n - i);
    let star = '* '.repeat(i);
    let raw = space + star;
    console.log(raw);
}
for(i = n - 1; i >= 0; i--){
    let space = ' '.repeat(n - i);
    let star = '* '.repeat(i);
    let raw = space + star;
    console.log(raw);
}