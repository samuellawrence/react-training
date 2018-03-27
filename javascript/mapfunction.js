// Version 6
console.log("Data from array ")
var prices = [10, 20, 30, 40, 50];
prices.map((price, i) => console.log(price));

console.log("Data from object ")
prices = [
    {"id":1, "totalprice":10},
    {"id":2, "totalprice":20}, 
    {"id":3, "totalprice":30}, 
    {"id":4, "totalprice":40}, 
    {"id":5, "totalprice":50}];
prices.map((price) => console.log(price.totalprice));