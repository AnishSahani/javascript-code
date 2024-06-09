const myArr=[0,1,2,3,4,5]
const superheroes=["shaktiman","Baalvir","Krissh","Flying jaat"]

const arr=new Array(1,2,3,4,5)
// console.log(arr[0])

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()
myArr.shift()

// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr=myArr.join()
// console.log(newArr)
// console.log(myArr)
// console.log(typeof(newArr))


// *****   slipce and splice

// console.log("A ",myArr)
// const myn1=myArr.slice(1,3);
// console.log(myn1)
// console.log("B ", myArr)

// const myn2=myArr.splice(1,3)
// console.log(myn2)
// console.log("c ",myArr)

const marvel_heros=["SpiderMan","ironMan","CaptionAmerica"]
const dc_heroes=["SuperMan","AquaMan","BatMan"]

// marvel_heros.push(dc_heroes)

// console.log(marvel_heros)

// console.log(marvel_heros[3][1])

const allheroes=marvel_heros.concat(dc_heroes)

console.log(allheroes)

const sg=[...marvel_heros,...dc_heroes]
console.log(sg)
