// object.create 

/**
 * we first define the object that will act as a prototype then create a new object
 * 
 */

 let personProto = {
     calcAge: function(){
         console.log(2020 - this.yearOfBirth)
     }
 }

 let john = object.create(personProto)
 john.name = "john"
 john.yearOfBirth = "1969"
 john.job = "drug dealer"

 let kurtlin = object.create(personProto, {
     name: { value: "jane"},
     yearOfBirth: { value: 1792},
     job: { value: "unemployed"}
 })

 /**
  * here you created objects one after each other 
  * the prototpye is the function calculate age which means each object will inherit this function
  * 
  */