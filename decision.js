// Decision Statments
"use strict"

let givenNumber = 10;
if(givenNumber%2 == 0){
    console.log("even number");
} else {
    console.log("odd number");
}

let gender = "male";
switch(gender){
    case "male":
        console.log("Male");
        break;
    case "female":
        console.log("Female");
        break;
    default:
        console.log("Undefinded");
        break;
}