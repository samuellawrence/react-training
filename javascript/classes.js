// Classes EMCA 6 Create class using class keyword
class Employee {
//    firstName;
//    lastName;

    /*getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }

    setFirstName(firstName){
        this.firstName = firstName;
    }

    setLastName(lastName){
        this.lastName = lastName;
    }*/

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static info(){
        console.log("This is a employee class");
    }


    sayHello(){
        return (this.firstName +" "+this.lastName);
    }
}

var emp1 = new Employee();
emp1.firstName = "Samuel";
emp1.lastName = "Raphael";
//emp1.setFirstName("Samuel");
//emp1.setLastName("Raphael");
console.log(emp1.sayHello());


var emp2 = new Employee("Bettle", "Bug");
console.log(emp2.sayHello());

Employee.info();

console.log(emp1 instanceof Employee);

console.log("========== Inheritance")
class Manager extends Employee{
    getDepartment(){
        return this.department;
    }
    setDepartment(department){
        this.department = department;
    }

    constructor(firstName, lastName, department){
        super(firstName, lastName);
        this.department = department;
    }

    sayHello(){
        console.log(super.sayHello());
        console.log("Department : "+this.department);
    }
}

var emp3 = new Manager("Raphael", "Eugin", "S/W");
emp3.sayHello();

class Director extends Manager{
     getFaculty(){
         this.faculty;
     }

     setFaculty(faculty){
         this.faculty = faculty;
     }

     constructor(firstName, lastName, department, faculty){
         super(firstName, lastName, department);
         this.faculty = faculty;
     }

     sayHello(){
         super.sayHello();
         console.log("Faculty "+this.faculty);
     }
}

var emp4 = new Director("Jeep", "Durai", "CEO", "Engineering");
emp4.sayHello();