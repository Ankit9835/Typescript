"use strict";
//type Addfn = (n1:number, n2:number) => number
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 300;
        if (this.name) {
            this.name = n;
        }
        else {
            this.name = 'Max';
        }
        //this.name = n
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1;
user1 = new Person();
user1.greet('Hello I Am ');
// user1 = {
//     name:'Ankit',
//     age:29,
//     greet(phrase:string){
//         console.log(`${phrase} ${ this.name}`)
//     }
// }
//user1.greet('Hello I Am ')
