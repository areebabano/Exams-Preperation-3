// Object 

// let stuName: string = "Areeba";
// console.log(stuName);
// let stuAge: number = 22;
// console.log(stuAge);
// let rollNo: number = 1234
// console.log(rollNo);


// let stuData = {} object syntax

// let stuData = {
//   /*key*/   name: "Areeba",// value
//             age: 22,
//             isItStudent: true
// }

let stuData: {
    name: string,
    age: number,
    isItStudent: boolean
} = {
    name: "Areeba",
    age: 22,
    isItStudent: true
} 

let stuData2:  {
    name: string,
    age: number,
    isItStudent: boolean
} = {
    name: "Areeba",
    age: 22,
    isItStudent: true
} 

console.log(stuData);
// object get with . notation
console.log(stuData.name);

// object get with square [] bracket notation 
console.log(stuData["age"]);

// Type Alias 

type Student = {
    name: string,
    age: number
} // type alias syntax

let student1: Student = {
    name: "Shumaila",
    age: 22
}

let student2: Student = {
    name: "Saman",
    age: 50
}
















