"use strict"
/***
 * This is variable declaration
 * 
 */
// Single line comment
let carPlateNumber = "JCG8485";
console.log(carPlateNumber);
carPlateNumber = 5;
console.log(carPlateNumber);
var carNumber, carBrand;
const pi = 3.45
var test;
console.log(test);
var testNull = null;
console.log(testNull);

var a = 5;
var b = "5";
(a == b)? console.log("a equal b"):console.log("a not equal to b");
(a === b)?console.log("a equal b"):console.log("a not equal to b");

var serialNumber = new Number(5);
console.log(serialNumber);

var maxNumber = Number.MAX_VALUE;
console.log(maxNumber);

var c = 5;
console.log(c/0);
console.log(5/"a");

var serialNumber = new Number(5.6745);
console.log(serialNumber.toFixed(2));
console.log(serialNumber.toPrecision(2));

var studentName = ["Jegan","Samue","Boo Boo"];
var studentName = new Array("Jegan","Samue","Boo Boo");
console.log(studentName.length);
for(var i = 0; i < studentName.length; i++){
    console.log(studentName[i]);
}