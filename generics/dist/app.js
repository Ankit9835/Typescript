"use strict";
// const names: Array<string> = ['test','new test']
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// const promise: Promise<string> = new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         resolve('test')
//     },2000)
// })
// promise.then(data => {
//     data.split(' ')
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Ankit', hobbies: ['sports'] }, { age: 29 });
console.log(mergeObj);
// interface Lengthy{
//   length:Number
// }
// function countAndDescribe<T extends Lengthy>(elememt: T){
//   let descriptionText = 'no value'
//   if(elememt.length == 1){
//     descriptionText = 'Got 1 element'
//   } else if(elememt.length > 1){
//     descriptionText = `Got ${elememt.length} element`
//   } 
//   return [elememt,descriptionText]
// }
// console.log(countAndDescribe('t'))
// function extractAndConvert<T extends object, U extends keyof T>(obj:T, key:U){
//   return 'Value ' + obj[key]
// }
// extractAndConvert({name:'ankit'}, 'name')
// Generic classes
class Generic {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const genericData = new Generic();
genericData.addItem('test');
console.log(genericData);
function createCourseGoal(title, description, countuntildate) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.countuntildate = countuntildate;
    return courseGoal;
}
const names = ['ankit', 'sam'];
function Logger(constructor) {
    console.log('logging');
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('creating person object');
    }
};
Person = __decorate([
    Logger
], Person);
