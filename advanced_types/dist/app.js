"use strict";
const e1 = {
    name: 'Ankit',
    privileges: ['amount'],
    startDate: new Date()
};
console.log(e1);
function printEmployeeInformation(emp) {
    if ('privileges' in emp) {
        console.log('Privelleged ', +emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start date', +emp.startDate);
    }
}
printEmployeeInformation({ name: 'Max', startDate: new Date() });
class Car {
    drive() {
        console.log('driving...');
    }
}
class Truck {
    drive() {
        console.log('driving a truck');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVechile(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}
useVechile(v1);
useVechile(v2);
