/****Memories *****/

// Stack (Primitive) copy of primitive data type, Heap(Non-Primitive) reference of data type

// const myName = "Ankit"

// let anotherName = myName

// anotherName = "Kadyan"

// console.log(myName);
// console.log(anotherName);

let userOne =  {
    email: "user@gmail.com",
    UPI: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kadyan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);