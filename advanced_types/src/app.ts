// type Admin = {
//     name:string,
//     privileges:string[]
// }



// type Employee = {
//     name:string,
//     startDate:Date
// }

// type ElevatedEmployee = Admin & Employee

// const e1: ElevatedEmployee = {
//     name:'Ankit',
//     privileges:['amount'],
//     startDate:new Date()
// }

// console.log(e1)

// type Combinable = string | number
// type Numeric = number | Date

// type Universal = Combinable & Numeric

// type UnknownEmployee = Admin | Employee

// function printEmployeeInformation(emp:UnknownEmployee){
//     if('privileges' in emp){
//         console.log('Privelleged ', + emp.privileges)
//     }
//     if('startDate' in emp){
//         console.log('Start date', + emp.startDate)
//     }
// }

// printEmployeeInformation({name: 'Max', startDate: new Date()})

// class Car{
//     drive(){
//         console.log('driving...')
//     }
// }

// class Truck{
//     drive(){
//         console.log('driving a truck')
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo ...' + amount);
//       }
// }

// type Vechile = Car | Truck

// const v1 = new Car()
// const v2 = new Truck()

// function useVechile(vehicle: Vechile){
//     vehicle.drive()
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(100)
//     }
// }

// useVechile(v1)
// useVechile(v2)

interface Bird {
    type:'bird'
    flyingSpeed:number
}

interface Horse{
    type:'horse'
    runningSpeed:number
}

type Animal = Bird | Horse

function getAnimal(anm:Animal){
    let speed
    switch (anm.type) {
        case 'bird':
            speed = anm.flyingSpeed
            break;
        case 'horse':
        speed = anm.runningSpeed
    }
    console.log(`speed of this animal is ${speed}`)
}

getAnimal({type:'bird', flyingSpeed:10})


const UserInputElement = document.getElementById('input-value')! as HTMLInputElement
UserInputElement.value = 'test'

interface ErrorContainer{
    [prop:string] : string
}

const errorBag: ErrorContainer = {
    email: 'Not a valid Email',
    name: 'Must start with a capital character'
}

type Combinable = string | number
type Numeric = number

type Universal = Combinable | Numeric 


// function overloading
function add(a:number, b:string): number;
function add(a:string, b:string): string;
function add(a:string, b:number): string;
function add(a:Combinable, b:Combinable){
    if(typeof(a) == 'string' || typeof(b) == 'string'){
        return a.toString() + b.toString()
    }
    return a + b
}

const result = add('Max', 'Schemuller')
result.split('')

const fetchedUserData = {
    id:'u1',
    name:'ankit',
    job:{
        title:'CEO',
        description:'CEO of Tech Company'
    }
}

console.log(fetchedUserData?.job?.title)

const userInput = ''

const storedData = userInput ?? 'DEFAULT'
console.log(storedData)
