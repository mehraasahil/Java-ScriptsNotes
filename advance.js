// HOISTING

  //undefined
// var x = 7
// function getName(){
//     console.log('my name is sahil')
    
// }
// getName()
// console.log(x)  
// getName()
// console.log(x)    //undefined
// var x = 7
// function getName(){
//     console.log('my name is sahil')

// }

// getName()
// console.log(x)    //non-undefined
// console.log(getName) //show function
// function getName(){
//     console.log('my name is sahil')

// }

// function getName(){
//     console.log(getName)   //show the function

// }


// getName()  // get name is not function it behaves like variable
// console.log(x)    //non-undefined
// console.log(getName) //show function
// var  getName=()=>{
//     console.log('my name is sahil')

// }


//call statck flow

// var x = 1
// a();
// b();
// console.log(x)

// function a(){
//     x=5;
//     console.log(x)
// }
// function b(){
//     x=100;
//     console.log(x)
// }


//Scope chain

// the chain of all the lexical enivironment and  parent refrences is known as scope chain
// local memory and lexical environment of parent


// function a(){
//   var c = 10;
//   d();
//   function d(){
//     console.log(c)
//   }

// }
// a()


// var let cont

// the time in between undefined to asigned in knows as temporal dea zone.let and consta hoisted but throws error

// whenver try to access the varibale in temporal deadzona is gives ReferenceError