interface Greetable{
    name: string,
    age: number,
    greet(phrase: string): void
}

class Person implements Greetable{
    name: string;
    age = 300;

    constructor(n: string){
        this.name = n
    }
    greet(phrase: string) {
        console.log(`${phrase} ${ this.name}`)
    }
}

let user1: Greetable

user1 = new Person('Ankit')
user1.greet('Hello I Am ')

// user1 = {
//     name:'Ankit',
//     age:29,
//     greet(phrase:string){
//         console.log(`${phrase} ${ this.name}`)
//     }
// }

//user1.greet('Hello I Am ')