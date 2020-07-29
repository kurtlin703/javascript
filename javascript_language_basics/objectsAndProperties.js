/* we use objects to group different variables
    in arrays postiion matters but in objects it doesnt matter
 
*/

let john =  {
    name: "john", // first name is the key and the name john is the value
    lastName: "smith",
    birthYear: "1997",
    familyMembers: ["jane","kurt","bob","shannon"],
    job: "teacher",
    isMarried:false
} //you use curly brackets to store objects

//how we access the object we use the dot notation

console.log(john.name)
console.log(john["lastname"])
let x = "birthYear"
console.log(john[x])


//if you want to change the value

john.job = "drug dealer"
john['isMarried'] = true

let jane = new Object()
jane.name = "jane"
jane.birthYear = "2001"
jane["lastYear"] = "smith"

// here we created a new objected and used the dot notation to add new vaulues to the key variable