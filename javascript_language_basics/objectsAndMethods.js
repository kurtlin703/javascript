// we can attach objects to function then it is called an method

/*let john =  {
    name: "john", // first name is the key and the name john is the value
    lastName: "smith",
    birthYear: "1997",
    familyMembers: ["jane","kurt","bob","shannon"],
    job: "teacher",
    isMarried:false,
    calcAge: function(){
        this.age =  2018 - this.birthYear// this mean the object so the object john and the variable birthYear
    }
} //you use curly brackets to store objects

//here is our object so what we want to do is add and function(method) to our function

john.calcAge()
console.log(john)*/

let kurtlin = {
    firstName: "kurtlin",
    bodyMass: 75,
    height: 165,
    calcBmi: function(){
        this.bmi = this.bodyMass / (this.height*this.height)    }
}

let marvin = {
    firstName: "marvin",
    bodyMass: 90,
    height:  187,
    calcBmi: function(){
        this.bmi = this.bodyMass / (this.height * this.height)
    }
}


kurtlin.calcBmi()
console.log(kurtlin)
marvin.calcBmi()
console.log(marvin)

if(kurtlin.bmi > marvin.bmi){
    console.log(kurtlin.firstName + " has a higher " + "" + kurtlin.bmi )
}else{
    console.log(marvin.firstName + marvin.bmi)
}
