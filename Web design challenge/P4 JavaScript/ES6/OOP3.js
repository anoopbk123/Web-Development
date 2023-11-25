class A{
    constructor(){
        console.log('A con')
    }
    aa(){
        console.log('parent aa');
    }
}
class B extends A{
    constructor(){
        super()
        console.log('B con')
    }

    //method overriding
    aa(){
        super.aa()//used to metion the parent class. if not used it will run the B's function if mentioned parent function is called
        console.log('child aa')
    }

    //method overloading is not supported in js
    ab(nn,mm){
        console.log(nn, mm);
    }
    ab(nn){
        console.log(nn);
    }
}

try{
    const a1 = new B();
    a1.aa()
}
catch(err){
    console.log(err.name)
}

const x = new B();
x.ab('nn')
x.ab('nn', 'mm')