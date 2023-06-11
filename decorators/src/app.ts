function Logger(logString: string) {
    return function(constructor: Function){
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string){
    return function(_: Function){
        const hookEl = document.getElementById('app')
        if(hookEl){
            hookEl.innerHTML = template
        }
    }
}
  
  @WithTemplate('Test', 'app')
  class Person {
    name = 'Max'
  
    constructor(){
      console.log('creating person object')
    }
  
  }