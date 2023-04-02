//Using object literal
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
console.log(person1["age"]); 
//using new 
const person={};
person.firstName = "Mohan";
person.lastName = "kumar";
person.age = 18;
person.eyeColor = "red";
console.log(person.age);
 
const person2 = new Object();
person2.firstName = "Dhivya";
person2.lastName = "Sakthi";
person2.age = 20;
person2.eyeColor = "green";
let x="";
person2.lang = "tamil";
delete person2.lang;
for(let i in person2){
    x+=person2[i];
}
console.log(x);
myObj = {
    name: "dhivya",
    dept: "ece",
    details: {
        age: 18,
        color: "red",
        hosteller: true
    }
}
console.log(myObj["details"]["hosteller"]);

newObj={
    dept: "ECE",
    section: "A",
    toppers: [
        {firstName: "sowndarya",lastName: "Ramesh", cgpa: [9.71,9.75,9.2]},
        {firstName: "dhivya", lastName: "shree", cgpa: [9.14,9.72,9.65]},
        {firstName: "renuka", lastName: "devi", cgpa: [9.5,8.9,9.6]}
    ]
}
let z="";
for(let i in newObj.toppers){
   z+=newObj.toppers[i].firstName+"\n";
   for(let j in newObj.toppers[i].cgpa){
    z+=newObj.toppers[i].cgpa[j]+"\n";
   }
}
console.log(z);