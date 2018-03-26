/** JSON Object
var customer = {
    "firstname": "Samuel",
    "lastname": "Raphael"
}
 */
console.log("================= Method 1");
 console.log("================== using {} JSON format");
var customer = {
    firstname: "Samuel",
    lastname: "Raphael",
    sayHello: function(){
         return ("first name : "+this.firstname +" Last name : "+this.lastname);
    }
}

console.log(customer.firstname);
console.log(customer.lastname);
console.log(customer.sayHello());

console.log("======================== Method 2");
console.log("=================== Use Object Keyword");
var partner = new Object();
partner.firstname = "Samuel";
partner.lastname = "Lawrence";
partner.sayHello = function(){
    return ("first name "+this.firstname + " last name:"+this.lastname);
}

console.log(partner.firstname);
console.log(partner.lastname);
console.log(partner.sayHello());

console.log("======================== Method 3");
console.log("================== create object using function constructor");
function vendor(){
    this.firstname = "Kumar";
    this.lastname = "Eugin";
    this.sayHello = function(){
        return ("First name: "+this.firstname +" Last Name: "+this.lastname);
    }
}

var vendor1 = new vendor();
console.log(vendor1.firstname);
console.log(vendor1.lastname);
console.log(vendor1.sayHello());

var vendor2 = new vendor();
vendor2.firstname = "Lawrence";
vendor2.lastname = "Eugin";
console.log(vendor2.sayHello());


var news = {
    title: "",
    description: "",
    sayNews: function(user){
        return this.title + "-------" +this.description+"--------"+user;
    }
}

var news1 = {
    title:"news 1",
    description:"news1...........blah, blah"
}

var news2 = {
    title:"news 2",
    description:"news2...........blah, blah"
}

var news3 = {
    title:"news 1",
    description:"news1...........blah, blah"
}

var news4 = news1;

console.log(news1.title);
console.log(news.sayNews.apply(news1,["Samuel"]));

//================ Destructuring of objects mapped by name
console.log("=============== Destructuring of objects");
var {title, description} = news2;
console.log(title);
console.log(description);

//==================== Compares by reference
(news1 == news3)?console.log("1..3 equals"): console.log("1..3 not equals");
(news1 == news4)?console.log("1..4 equals"): console.log("1..4 not equals");

//=================== For loop
var currentNews = {
    title: "Political",
    description: "President says .............",
    logo: "world",
    date: "03-26-2018",
    showNews: function(){
        console.log("Show News");
    }
}

for(x in currentNews){
    console.log(x);
    console.log(currentNews[x]);
}