class Student{
    teacher;
    principal = 'Thammarakshan Pillai'
    static collegeName(){
        console.log('NCERC');
    }
    constructor(fname, lname, yob){
    this.fname = fname;
    this.lname = lname;
    this.yob = yob;
    }
    name(){return this.fname+' '+this.lname};
    age () {return new Date().getFullYear()-this.yob};
}

function minYob(...args){
    var arryob = args.map(item => item.yob);
    console.log(Math.min(...arryob));
}

const student1 = new Student('Babu', 'Akbar', 2000);
const student2 = new Student('Abu', 'Bakkar', 2001);
const student3 = new Student('Amal', 'Akbar', 2002);
console.log(student1);
student1.teacher = 'Vasantha';
Student.collegeName();
console.log(student1.name());
console.log(student1.age());
console.log(student1);

minYob(student1, student2, student3);


