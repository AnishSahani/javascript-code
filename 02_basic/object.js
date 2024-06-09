
//   object literals

const mykey=Symbol("mykey1")

const user={
    name:"Anish Sahani",
    RollNO: 2022071017,
    Branch:"Information Technology",
    Course:"B.tech",
    [mykey]:"mykeytocastle"
}

// console.log(user.name)
// console.log(user["name"])
// console.log(typeof user[mykey])

user.Branch="Computer Science"
// console.log(user.Branch)

// Object.freeze(user)

user.Branch="Electrical Engineering"

// console.log(user)

user.greeting=function(){
    console.log("Hello Js World")
}

user.greeting2=function(){
    console.log(`Hello user, ${this.name}`)
}

// console.log(user.greeting2())







// object singleton

const tinderUser=new Object()

tinderUser.id="123abc"
tinderUser.name="Samdesh"
tinderUser.email="sam@tinder.com"

// console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2};

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3)

