 "use strict";   //  treat all js code as newer version

 //alert(3+3)   // we are using node js, not wed browser

 console.log(3+3);   console.log("Hello world")


 // number 2 to power 53
 // bigint
 // boolean true or false
 //null  => standalone value
 // undefined



 // primitive datatypes

//  7 types: Strings,Number,Boolean,null,undefined,BigInt,Symbol

//reference type(Non primitive type)

// Array,Objects,Functions


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   Stack(Primitive),   heap(Non Primitive)

let myName="Anish Sahani"

let anotherName=myName

console.log(anotherName)

anotherName="Akhilesh Sahani"

console.log(myName)
console.log(anotherName)


let userone={
    Name:"Binod",
    Age:34
    

}

let usertwo=userone

// console.log(usertwo)

usertwo.Name="Sachivji"
usertwo.Age=26

console.log(userone)
console.log(usertwo)