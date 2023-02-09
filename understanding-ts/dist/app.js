"use strict";
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
// enum Role {ADMIN = 1, READ_ONLY, AUTHOR}
// console.log(ADMIN)
// const person = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: Role.ADMIN // tuple
// };
// let favoriteActivities: any[];
// favoriteActivities = ['Sports',1];
// console.log(person.name);
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()); // !!! ERROR !!!
// }
// if(person.role === Role.ADMIN){
//   console.log('is admin')
// }
// union types
// function combine(num1: number | string, num2: number | string){
//     let result
//     if(typeof(num1) === 'number' && typeof(num2) === 'number'){
//       result = num1 + num2
//     } else{
//       result = num1.toString() + num2.toString()
//     }
//     return result
// }
// const integerValue = combine(2,5)
// console.log(integerValue)
// literal types
// alias for data types
// type Compaitable =  number | string
// type Description = 'as-number' | 'as-text'
// function literal(num1: Compaitable, num2: Compaitable, resultConversion: Description){
//   let result
//   if(typeof num1 === 'number' && typeof  num2 === 'number' || resultConversion === 'as-number'){
//     console.log('number')
//     result = +num1 + +num2
//   } else{
//     console.log('string')
//     result = num1.toString() + num2.toString()
//   }
//   return result
// }
// const integerValue = literal(2,5, 'as-number')
// console.log(integerValue)
// const stringValue = literal('string','test','as-text')
// console.log(stringValue)
// function add(num1:number, num2:number){
//   return num1 + num2
// }
// function printResult(num1:number){
//   console.log('Result is ' + num1)
// }
// let combineValues: (a:number, b:number) => number;
// combineValues = add;
// console.log(combineValues(2,4))
function addAndCallBack(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndCallBack(2, 8, (result) => {
    console.log(result);
});
