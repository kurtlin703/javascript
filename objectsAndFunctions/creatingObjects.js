// function constructor 



/*let Person = function(name, yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}// this points to the new object that was created and not to the global variable

Person.prototype.calcAge = 
function(){
    console.log(2020 - this.yearOfBirth)
}// tihs is the prototype function which is gonna be build into the Person

let john = new Person('john', 1990, "teacher") /* when we use the new operator a brand new object is created then the function is called*/
/*let jane = new Person("jane", 1711, "stripper")
let mark = new Person("mark", 1301, "driver")

jane.calcAge()
mark.calcAge()
john.calcAge()*/


let SoccerTeam = function(name, goals, position, CoachName){
    this.name = name
    this.goals = goals
    this.position = position
    this.CoachName = CoachName
}

SoccerTeam.prototype.goalAverage = 
function(){
    console.log(this.goals / 3 +""+ " per season")

}

let drogba = new SoccerTeam("chelsea", 33, "striker","Lampard")
console.log(drogba)
drogba.goalAverage()