function sayMyName(){
  console.log("Anish")
  console.log("Sahani")
}

sayMyName()

function addTwoNumber1(number1,number2){
    console.log(number1+number2)
}

const result1=addTwoNumber1(3,5)
console.log("Result: ",result1)    // undefined


addTwoNumber1()      //NaN
addTwoNumber1(1,2)   //3
addTwoNumber1(1,"3")  //13
addTwoNumber1(1,null)  //1

function addTwoNumber(number1,number2){
    return number1+number2
}

const result=addTwoNumber(3,5)
console.log("Result: ",result) 


function userLogged(userName){
    if(undefined===userName){
        console.log("Please entered a userName")
        return 
    }
    return `${userName} just logged in`
}

console.log(userLogged("Anish Sahani"))
console.log(userLogged(""))   //  just logged in
console.log(userLogged())     // undefined just logged in


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,500))

const user={
    username:"Anish Sahani",
    price:199
}

function userdetail(anyObject){
    return `username is ${anyObject.username} and price is ${anyObject.price}`
}

console.log(userdetail(user))
