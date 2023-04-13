console.log("js is linked..");
class Student{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
}

class Person extends Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let myStu1 = new Student("Rohan", 214);
let myStu2 = new Student("Keyur", 156);
let myStu3 = new Student("Mohan", 067);
let myStu4 = new Student("Rohit", 178);
let myStu5 = new Student("Aman", 123);

document.getElementById("stu").innerHTML="Student name is "+myStu1.name + " and id is "+myStu1.id;
document.getElementById("stu1").innerHTML="Student name is "+myStu2.name + " and id is "+myStu2.id;
document.getElementById("stu2").innerHTML="Student name is "+myStu3.name + " and id is "+myStu3.id;
document.getElementById("stu3").innerHTML="Student name is "+myStu4.name + " and id is "+myStu4.id;
document.getElementById("stu4").innerHTML="Student name is "+myStu5.name + " and id is "+myStu5.id;