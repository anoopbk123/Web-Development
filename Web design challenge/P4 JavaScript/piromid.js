let h = 10;
for (i = 1; i<=h; i++){
    let raw = '';
    raw += ' '.repeat(h-i);
    raw += '*'.repeat(i);
    console.log(raw);
}
console.log('\n');

for (i = 1; i<=h; i++){
    let raw = '';
    raw += ' '.repeat(h-i);
    raw += '*'.repeat((i*2)-1);
    console.log(raw);
}