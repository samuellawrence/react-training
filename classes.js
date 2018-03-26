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
