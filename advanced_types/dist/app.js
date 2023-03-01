"use strict";
// type Admin = {
//     name:string,
//     privileges:string[]
// }
var _a;
function getAnimal(anm) {
    let speed;
    switch (anm.type) {
        case 'bird':
            speed = anm.flyingSpeed;
            break;
        case 'horse':
            speed = anm.runningSpeed;
    }
    console.log(`speed of this animal is ${speed}`);
}
getAnimal({ type: 'bird', flyingSpeed: 10 });
const UserInputElement = document.getElementById('input-value');
UserInputElement.value = 'test';
const errorBag = {
    email: 'Not a valid Email',
    name: 'Must start with a capital character'
};
function add(a, b) {
    if (typeof (a) == 'string' || typeof (b) == 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Max', 'Schemuller');
result.split('');
const fetchedUserData = {
    id: 'u1',
    name: 'ankit',
    job: {
        title: 'CEO',
        description: 'CEO of Tech Company'
    }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
