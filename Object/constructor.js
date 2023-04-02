function Person(first,last,age,color){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.colour=color;
    this.nationality="Indian";
    this.changeName=function(name){
        this.lastName=name;
    }
}
const myFather=new Person("Sakthi","vel",49,"Red");
const myMother=new Person("Kalai","vani",42,"Green");
myFather.nationality="English";
myMother.name=function(){
    return this.firstName+this.lastName;
}
console.log(myFather.firstName+myFather.lastName+"'s age: "+myFather.age+"\nFavorite color is "+myFather.colour+"\nNationality: "+myFather.nationality);
console.log("FullName: "+myMother.name()+"\n"+myMother.firstName+myMother.lastName+"'s age: "+myMother.age+"\nFavorite color is "+myMother.colour);
myMother.changeName("Sakthi");
console.log("FullName: "+myMother.name()+"\n"+myMother.firstName+myMother.lastName+"'s age: "+myMother.age+"\nFavorite color is "+myMother.colour);