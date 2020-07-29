///print numbers 0 to 9 

/* 
for loop 
the for loop has three parts 
i - the counter value the initial  value where the loop should start
ii - the condition where the loop should end
ii - an counter update 
*/




/*for (let i =0; i < 10; i++){
    console.log(i)
}
//i = 0, 0 < 10 true its gonna add 1 the i is gonna be 1 till i > 10 

let john = ["john",28,"banker","married"]
for(let i = 0; i < john.length; i++){
    console.log(john[i])
}

/* while loop
while loop only has the condition

 
let i = 0
 while(i < john.length){
     console.log(john[i])
     i++
 }


 // conitnue skips the value and contiues the loop


let john = ["john",28,"banker","married"]
for(let i = 0; i < john.length; i++){
    if(typeof john[i] !== "string") continue // if type of is different from a string if its a string continue if its not a string skip it
    console.log(john[i])

}

// break stops the loop 

let john = ["john",28,"banker","married"]
for(let i = 0; i < john.length; i++){
    if(typeof john[i] !== "string") break // if type of is different from a string if its a string stop the loop
    console.log(john[i])
}
*/


// looping backingwords


let john = ["john", 28, "banker", "blue"]
for(let i =john.length -1; i >= 0; i--){
    console.log(john[i])
}

// we want our i to start at the last element in the array(john.length - 1)
// how long do we want this array to run(the condition) we want it to run until i hits 0 (i >=0)
//we have to decrease the counter start at 5 and move to zero






