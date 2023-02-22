type Admin = {
    name:string,
    privileges:string[]
}

type Employee = {
    name:string,
    startDate:Date
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name:'Ankit',
    privileges:['amount'],
    startDate:new Date()
}

console.log(e1)

type Combinable = string | number
type Numeric = number | Date

type Universal = Combinable & Numeric

type UnknownEmployee = Admin | Employee

function printEmployeeInformation(emp:UnknownEmployee){
    if('privileges' in emp){
        console.log('Privelleged ', + emp.privileges)
    }
    if('startDate' in emp){
        console.log('Start date', + emp.startDate)
    }
}

printEmployeeInformation({name: 'Max', startDate: new Date()})

class Car{
    drive(){
        console.log('driving...')
    }
}

class Truck{
    drive(){
        console.log('driving a truck')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
      }
}

type Vechile = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVechile(vehicle: Vechile){
    vehicle.drive()
    if(vehicle instanceof Truck){
        vehicle.loadCargo(100)
    }
}

useVechile(v1)
useVechile(v2)