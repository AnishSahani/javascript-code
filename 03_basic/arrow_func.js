const user={
    username:"Anish sahani",
    price:199,
    message:function(){
         console.log(`${this.username}, welcome to the club`)
         console.log(this)
    }

    
}

// console.log(user.message())
// user.username="Akhilesh Sahani"
// console.log(user.message())


// function chai(){
//     let username="Anish Sahani"
//     console.log(this.username)
// }

// chai()

// const chai=function(){
//     let username="Anish Sahani"
//     console.log(this.username)
// }

// chai()

// const chai=()=>{
//     let username="Anish sahani"
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo =(num1,num2) => num1+num2

const addTwo=(num1,num2)=>(num1+num2)

console.log(addTwo(3,4))