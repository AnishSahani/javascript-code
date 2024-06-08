let mydates=new Date()

// console.log(mydates);
// console.log(mydates.toString())
// console.log(mydates.toDateString())
// console.log(mydates.toLocaleString())

console.log(typeof(mydates))

let myCreatedDate=new Date(2024,8,4)
console.log(myCreatedDate.toDateString())

let mytimeStamp=Date.now()

console.log(mytimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now())/1000)