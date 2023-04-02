const person={
    firstName: "Dhivya",
    lastName: "Gokul",
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}
console.log(person.fullName());
//Call
const newPerson1 = {
    firstName:"Sakthi",
    lastName:"Kalai",
}
const newPerson2 = {
    fullName: function(greet,greeting){
        return this.firstName+" "+this.lastName+" "+greet+" "+greeting;
    }
}
console.log(newPerson2.fullName.call(newPerson1,"hai","hello"));
console.log(newPerson2.fullName.apply(newPerson1,["hai","hello"]));
const newMember={
    firstName:"shree",
    lastName:"dhivya",
}
let fullName=newPerson2.fullName.bind(newMember,"hello","welcome");
console.log(fullName());