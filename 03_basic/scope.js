// let a=10
// const b=20
// var c=30

// console.log(a);
// console.log(b)
// console.log(c)

{
    let a=10
    const b=20
    var c=30 
}

// console.log(a);   //outofscope
// console.log(b)    //outofscope
// console.log(c)    // 30   therefore we dont use var 

// function one(){
//     const username="Anish Sahani"

//     function two(){
//         const website="youtube"
//         console.log(username)
//     }
//     // console.log(website)

//     // two()
// }

// one()

console.log(addone(5))     // it will print
function addone(num){
    return num+1
}


console.log(addtwo(5))     // dont print due to hoeisting

const addtwo=function(num){
    return num+2
}


