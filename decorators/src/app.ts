function Logger(logString: string) {
    return function(constructor: Function){
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string){
  console.log('TEMPLATE FACTORY');
  return function<T extends { new (...args: any[]): {name: string} }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}
  
  @WithTemplate('<h1> Test </h1>', 'app')
  class Person {
    name = 'Max'
  
    constructor(){
      console.log('creating person object')
    }
  
  }

  function Log(target:any, propertyName: string | Symbol){
    console.log('property decorator')
    console.log('test',target,'property',propertyName)
  }

  function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
  }


  class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
    set price(val:number){
      if(val > 0){
        this._price = val
      } else {
        throw new Error('Invalid Price')
      }
    }

    constructor(t:string, p:number){
      this.title = t;
      this._price = p;
    }
    @Log3
    getPriceWithTax(@Log4 tax:number){
      return this._price * (1 + tax)
    }

  }

  function Analog(_:any, _2:string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value
   const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
   }
   return adjDescriptor
  }

  class Printer {
    message = 'this works'
    @Analog
    showMessage(){
      console.log(this.message)
    }
  }

  const p = new Printer()
  p.showMessage()

  const btnClick = document.querySelector('button')!
  btnClick.addEventListener('click', p.showMessage)

  function Required(){

  }

  function PositiveNumber(){

  }

  function Validator(){

  }


  class Course {
    @Required
    title:string
    @PositiveNumber
    price:number

    constructor(t:string, p:number){
      this.title = t;
      this.price = p;
    }
  }

  const courseForm = document.querySelector('form')!
  courseForm.addEventListener('submit', event => {
    event.preventDefault()
    const title = document.getElementById('title') as HTMLInputElement
    const price = document.getElementById('price') as HTMLInputElement
    const elTitle = title.value
    const elPrice = +price.value
    @Validator
    const createdCourse = new Course(elTitle,elPrice)
    console.log(createdCourse)
  })