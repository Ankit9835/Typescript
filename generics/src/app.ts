// const names: Array<string> = ['test','new test']

// const promise: Promise<string> = new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         resolve('test')
//     },2000)
// })

// promise.then(data => {
//     data.split(' ')
// })


function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}



const mergeObj = merge<{name:string, hobbies:string[]},{age:number}>({name:'Ankit', hobbies:['sports']},{age:29})
console.log(mergeObj)

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

class Generic<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item:T){
    this.data.push(item)
  }

  removeItem(item:T){
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems(){
    return [...this.data]
  }


}

const genericData = new Generic<string>()
genericData.addItem('test')
console.log(genericData)
// genericData.removeItem('test')
// genericData.getItems()

interface CourseGoal {
  title:string;
  description:string;
  countuntildate:Date;
}

function createCourseGoal(title:string,description:string,countuntildate:Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title;
  courseGoal.description = description
  courseGoal.countuntildate = countuntildate
  return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['ankit','sam']

function Logger(constructor: Function) {
  console.log('logging')
  console.log(constructor)
}

@Logger
class Person {
  name = 'Max'

  constructor(){
    console.log('creating person object')
  }

}
 