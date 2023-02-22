//type Addfn = (n1:number, n2:number) => number

interface Addfn{
    (a:number, b:number): number
}

let add:Addfn

add = (n1:number, n2:number) => {
    return n1 + n2
}

interface Named{
    name?:string,
    age:number
}

interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable{
    name?: string;
    age = 300;

    constructor(n?: string){
        if(this.name){
            this.name = n
        } else {
            this.name = 'Max'
        }
        //this.name = n
    }
    greet(phrase: string) {
        console.log(`${phrase} ${ this.name}`)
    }
}

let user1: Greetable

user1 = new Person()
user1.greet('Hello I Am ')

// user1 = {
//     name:'Ankit',
//     age:29,
//     greet(phrase:string){
//         console.log(`${phrase} ${ this.name}`)
//     }
// }

//user1.greet('Hello I Am ')