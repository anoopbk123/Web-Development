const pattern = function(row){
    for(let i =0; i<row; i++){
        let line = ''
        for(let sp=0; sp<=row-i; sp++){
            line+=' ';
        }
        for(let st=0; st<=i; st++){
            line+='*'
        }
        console.log(line)
    }
}
pattern(150)