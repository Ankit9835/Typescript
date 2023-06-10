"use strict";
// const names: Array<string> = ['test','new test']
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
// genericData.removeItem('test')
// genericData.getItems()