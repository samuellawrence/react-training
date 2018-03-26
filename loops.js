//Loops
console.log("========== For Loop ===============");
let mtable = 5;
for(let counter = 1; counter <= mtable; counter++){
    console.log(counter +"x"+mtable+"="+(counter * mtable));
}

console.log("========== For Loop With Break===============");
for(let counter = 1; counter <= mtable; counter++){
    console.log(counter +"x"+mtable+"="+(counter * mtable));
    if(counter == 2) break;
}

console.log("========== For Loop With Continue===============");
for(let counter = 1; counter <= mtable; counter++){
    if(counter == 2) continue;
    console.log(counter +"x"+mtable+"="+(counter * mtable));
}

console.log("========= While Loop ===============");
counter = 1;
while(counter <= 12){
    console.log(counter +"x"+mtable+"="+(counter * mtable));
    counter++;
}

console.log("========= Do Loop ===============");
counter = 1;
do{
    console.log(counter+"x"+mtable+"="+(counter * mtable));
    counter++;
}while(counter <= 12);

console.log("================ Foreach Loop ================");
var students = ["Jegan","David","Chan"];
for(student of students){
    console.log(student);
}