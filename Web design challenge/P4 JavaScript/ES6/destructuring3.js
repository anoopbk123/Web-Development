function sum({a:d, b, c}){
    console.log(d, b, c)
}
sum({a:'one', b:'two', c:'three'})

const nums = [1, 2, 3, {four:4, next:[5, 6, 7]}]
const [a, b, c, {four:d, next:[e, f, g]}] = nums;
console.log(a,b,c,d,e,f,g)