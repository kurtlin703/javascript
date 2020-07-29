/**let johnsMass = 65
let marksMass = 590//
let johnsHeight = 183
let marksHeight = 195
let johnsBmi = johnsMass / (johnsHeight * johnsHeight)
let marksBmi = marksMass / (marksHeight * marksHeight)
if (marksBmi > johnsBmi){
    console.log(marksBmi + "" + " marks bmi is higher then johns")
}else{
    console.log(johnsBmi + "johns bmi is higher then marks")
}
 
// if else statements

let firstName = kurtlin
let civilStatus = "single"

if(civilStatus === "married") {
    console.log(firstName + "is married for 68 years ")
}else{
    console.log(firstName + "is still single hahahha")
}//in the if statement you write a logic information something that returns a true or false

let isMarried = true
if(isMarried){
    console.log(firstName )
}*/


// boolean logic

/*let firstName = "kurtlin"
let age = "17"

if(age < 20){
    console.log(firstName + "is a boy")
}else if(age >= 13 && age < 20){
    console.log(firstName + "is a teenager")


}else if(age >= 20 && age>20)
console.log(firstName + "young man")
else{
    console.log(firstName + "is a man")
}*/


// the ternary operator and switch statements

/*let firstName = "kurt" 
let age = 16

age =>18 ? console.log(firstName + "drinks beer")
: console.log(firstName + "drinks juice")

let drinkingAge = age =>18 ? "beer" : "juice" // if his older then 18 he drinks beer else he drinks juice

// switch statement

let job = "teacher"
switch (job){
    case "teacher":
        console.log(firstName + "teaches kids how to code") //if the job is a teacher it will run this
        break; //will run the code over and over if theres no break
    case "driver":
        console.log(firstName + "drives") //if the job is driver do this
        break
    case "rapper":
        console.log(firstName + "makes music") //if the job is rapper do this
        break
    default: //if none of these conditions are met do this
        console.log(firstName + " does something else ")
}


switch(true){
    case age >= 20:
        console.log(firstName + "drinks beer")
        break
    case age >= 13 && age < 20:
        console.log(firstName + "juice")
        break
    case age >= 20 && age < 30:
    console.log(firstName + "is a man")
        break
    default:
        console.log(firstName + "is old")

}

// truthy and falsy
// falsy values: underfine,null,0 "",nAN
//truthy values: not falsy


let height; //vairaible has not be defined
heiht = 22 //variablle has been defined
if(height){
    console.log("variable is defined")

}else{
    console.log("variable is not defined")
}

// equality operatora
// ===: compares it and it must be exactly the same
// ==:

if(height == "23"){
    console.log("t9he == operator does the typw coercion")// to convert the string to a number then compares it
}*/

/*let johnsPoints = 80 + 120 + 103
let mikesPoints = 600 + 94 + 123
let marryPoints = 970 + 134 + 105
let firstName = "marry"
let johnsAveragePoints = johnsPoints / 3
let mikesAveragePoints = mikesPoints / 3
let marryAveragePoints = marryPoints / 3

if(johnsAveragePoints > mikesPoints && johnsAveragePoints > marryPoints){
    console.log(johnsAveragePoints + "is the winner")

}else if(johnsAveragePoints === mikesAveragePoints && johnsPoints === marryPoints){
    console(johnsPoints + "" + mikesAveragePoints  + "" + "is a draw")
}
else if(mikesAveragePoints > johnsAveragePoints && mikesAveragePoints > marryPoints ){
    console.log(mikesPoints + " is the winner")

}else if(marryAveragePoints > johnsAveragePoints && marryAveragePoints > mikesAveragePoints){
    console.log(marryPoints + "" + firstName)
}*/

// functions 

/*function calculateAge(birthYear){
    return 2018 - birthYear
}
let ageKurtlin = calculateAge(1990)
let ageJohn = calculateAge(1071)
let ageSipho = calculateAge(1981)

console.log(ageJohn, ageKurtlin, ageSipho)*/


/*function yearsUntilRetirement(year, firstName){
    let age = calculateAge(year)
    let retirement = 65 - age

    if(retirement > 0){
    console.log(firstName + "retires in" + retirement + " year\'s")// if theres no return theres no result
    }else{
        console.log(firstName + " is already retired")
    }
}
yearsUntilRetirement(1997, "kurtlin")*/



// function statements and expressions

// function statement

/*function whatDoYouDo(job, firstName) {

}*/

// function expressions

/*let whatDoYouDo = function(job, firstName) //*we write a function without a name {
    switch(job){
        case "teacher":
            return firstName + "teaches kids" // if there is an return you dont need a break cause the code ends
        case "boss":
            return firstName + " in control of everthing"
        default:
            return firstName + " does something else"
        
    }

}
console.log(whatDoYouDo("teacher","john")) // if you return something you should save it or console.log it */

/* the difeerence between statements and expressions
     expressions return a value
     statements doesnt return a value */



                                                   //  arrays

// arrays is like an collection of variables
//arrays are zero based which means the first element in the array is 0

/*let names = ["kurt", "john", "kim"]
let years = [1990,1892,2000]

console.log(names[0])// will print out the first element in the array which is kurt
console.log(names.length)//shows you how much element is in the array which is 3

names[1]= "ben"
names[names.length] = "marry" //adds this to the array the last element
console.log(names[1]) //the element one will be changed to ben


let john = ["john","white","1990"]
john.push("working")//adds to the array the last
john.unshift("single")//adds it to element 0
john.pop()//removes the last element in the array
john.shift()//removes element 0 in the array
john.indexOf(1990)//gives you the position of the array which is 2 */


function tipCalculator(){
    let restuarantsBill = [124,48,268]
    let restuarantTip = [2,(15/100),(10/100)]
    let finalAmount = (restuarantsBill * restuarantTip)
    if(restuarantsBill[0] < 50){
        console.log(finalAmount)
    }else if(restuarantsBill > 50 && restuarantsBill < 200){
        console.log(finalAmount[1])
    }else if(restuarantsBill > 200){
        console.log(finalAmount[2])
    }

}
console.log(tipCalculator(48))







    

