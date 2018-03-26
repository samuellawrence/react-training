function sayHello(){
    return "Hello World";
}

function sayHelloByName(guestName){
    return ("Hello World "+guestName);
}

function sum(a, b, c){
    return a + b + c;
}

function sum2(a, b, c){
    if(c == undefined) c = 0;
    return a + b + c;
}


var average = function(a, b){
    return (a + b) /2;
}

var welcomeMessage = sayHello() +" Jagan";
console.log(welcomeMessage);

welcomeMessage = sayHelloByName("Jagan");
console.log(welcomeMessage);

console.log(sum(10,20,30,40));// ignores the last arguments
console.log(sum(10,20)); // third argument not passed so it become Nan

console.log(sum2(10,20)); 

console.log(average(10, 20));

function area(shape, length, breath){
    return shape(length, breath)
}

var areaofsquare = function (length, breath){
    return length * breath;
}
console.log(areaofsquare);

var areaofcircle = function(radius){
    return 3.14 * radius;
}

console.log(area(areaofsquare, 5, 5));
console.log(area(areaofcircle, 5));

var myvalue = 100;
(function(){
    var myvalue = 120;
    console.log("Loaded............");
    console.log("Inside My value : "+ myvalue);
})();
console.log("Outside My value "+ myvalue);

var simpleInterest = function(principal, period, rate=6){
    return ((principal*period*rate) / 100);
}

console.log(simpleInterest(1000, 1));
console.log(simpleInterest(1000, 1, 4));

var summarize = function(...numbers){
    var total = 0;
    for(var counter = 0; counter < numbers.length; counter++){
        total = total + numbers[counter];
    }
    return total;
}

console.log(summarize(10, 20, 30));
var multiplication = new Function("a", "b", "return a * b");
console.log(multiplication(5,2));

// Lambda expression
var addition = (a, b) => {
    return a + b;
}

// Lambda expression
var substract = (a, b)=> a - b ;
console.log(addition(5, 6));

// Lambra exporession withoud mac
var increment = x => x +1;
console.log(increment(112));
