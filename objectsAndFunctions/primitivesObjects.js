/** difference between primitives and objects
 * variables containing primitives actually holds that data inside that variable itself
 * variables containing objects donot cotain objects but it contains a memory where its store
 */



 // primitives 

 let a = 23 
 let b = a
 a = 46

 console.log(a) // results = 46
 console.log(b) // results = 23


 // objects

 let objectOne = {
     name: "john", 
     age: 26
 }

 /**
  * 
  */


 let objectTwo = objectOne
 objectOne.age = 30

 console.log(objectOne.age) // results = 30
 console.log(objectTwo.age) // results = 30

 /**
  * when we said objectOne must be = objectTwo we didnt copy we just referenced it  
  * which means object one is a reflection of objectTwo like an mirror image
  * thats why when we changed the age in objectOne it changed in ObjectTwo cause its the exact same thing
  * 
  */




  // functions 

  let age = 27 
  let obj = {
      name: "kurtlin",
      city: "roodepoort"
  }

  function  change(a, b){
      a = 30
      b.city = "durban"
  }

  change(age, obj)
  console.log(age)
  console.log(obj.city)