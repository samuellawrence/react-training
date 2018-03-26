//Map Key Value Pair

var students = new Map();
students.set("1", "Jagan");
students.set("2", "Samuel");
if(students.has("1")){
    console.log(students.get("1"));
}

var staff = new Map([
["1", "Staff-1"],
["2", "Staff-2"],
["3", "Staff-3"]
]);
console.log(staff.get("1"));
for(let item of staff){
    console.log(item[0]+" - "+item[1]);
}

var iter = staff.keys();
console.log(iter.next().value);
console.log(iter.next().value);

var staffname = staff.values();
console.log(staffname.next().value);
console.log(staffname.next().value);


// -- Sets Unique List
var prices = new Set([10, 20, 30, 40, 50])
console.log("list sets");
for(let item of prices){
    console.log(item);    
}

console.log("add 10 and 60 in set");
prices.add(10);
prices.add(60);

console.log("list sets again");
for(let item of prices){
    console.log(item);    
}

console.log("delete 30 from set");
prices.delete(30);

console.log("list sets again");
for(let item of prices){
    console.log(item);    
}