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
function combine(num1, num2) {
    var result;
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var integerValue = combine(2, 5);
console.log(integerValue);
var stringValue = combine('test', 'newtest');
console.log(stringValue);
