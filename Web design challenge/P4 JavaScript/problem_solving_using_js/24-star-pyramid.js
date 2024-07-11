const starPyramid = (n)=>{
    for(let i=1; i<=n; i++){
        let row = ''
        for(let j=0; j<n-i; j++){
            row += ' '
        }
        for(let k=0; k<(i*2)-1; k++){
            row += '*'
        }
        console.log(row)
    }
}
starPyramid(5)