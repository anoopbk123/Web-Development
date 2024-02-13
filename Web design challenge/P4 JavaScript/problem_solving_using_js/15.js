const arr = [2, 1, 2];
let commonElements = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !commonElements.includes(arr[i])) {
            commonElements.push(arr[i]);
        }
    }
}

if (commonElements.length > 0) {
    console.log(` ${commonElements.join(', ')}`);
} else {
    console.log(arr);
}