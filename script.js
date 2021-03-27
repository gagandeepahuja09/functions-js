'use strict';

// // const bookings = []

// // // all default params must be at the last
// // // it a default param is dependent on another, then it should be defined later.
// // // price is dependent on numPassengers
// // const createBooking = (
// //   flightNum, 
// //   numPassengers = 1,
// //   price = 199 * numPassengers
// // ) => {
// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price
// //   }
// //   console.log(booking)
// //   bookings.push(booking)
// // }

// // createBooking('LH123')
// // createBooking('LH123', 4, 3000)
// // createBooking('LH123', 2)
// // createBooking('LH123', undefined, 1000)

// // PART 2: Passing reference and primitive parameters
// // const flight = 'LH234'
// // const me = {
// //   name: 'Gagandeep',
// //   passport: 245464521
// // }

// // const checkIn = (flightNum, passenger) => {
// //   flightNum = 'LH999'
// //   passenger.name = `Mr. ${passenger.name}`
// //   if (passenger.passport === 245464521) {
// //     console.log('YO')
// //   } else {
// //     console.log('NO')
// //   }
// // }

// // // It's the same as doing
// // // const flightNum = flight
// // // const passenger = me
// // // When we log me, we'll get the change as passed by reference
// // // But not with flight as it's a copy(parameter type)

// // checkIn(flight, me)


// // // Interaction of 2 or more different functions with the same object can cause issues.

// // const newPassport = person => {
// //   person.passport = Math.random(Math.random() * 100000000000)
// // }

// // newPassport(me)
// // checkIn(flight, me)

// // // Note: We can pass a reference variable in JS. But this is not the same as passing by reference.



// // // PART 3: First Class And Higher Order Functions
// // // Functions as first class citizens ===> Just another type of object.
// // // 1. Store functions in variables or object properties.
// // // 2. Pass methods as arguments to other functions
// // // 3. Return functions from other functions.
// // // 4. Call methods on other functions. ==> counter.inc.bind(someOtherObject)
// // // counter.inc is the function and we are calling bind on that function.

// // // Higher order functions: Function that receives another function as an argument,
// // // that returns a new function or both.
// // // eg. addEventListener


// // PART 4: Functions accepting callback functions
// // const oneWord = str => {
// //   return str.replace(/ /g, '').toLowerCase()
// // }

// // // Beautifully written
// // const upperFirstWord = str => {
// //   // rest parameter, destructuring at the left side
// //   const [ first, ...others ] = str.split(' ')
// //   return [ first.toUpperCase(), ...others ].join(' ')
// // }

// // const transformer = (str, fn) => {
// //   console.log(`Original string: ${str}`)
// //   console.log(`Transformed string: ${fn(str)}`)
// //   console.log('Function:', fn)
// //   console.log('Function name:', fn.name)
// // }

// // transformer('Javascript is the best', oneWord)
// // transformer('Javascript is the best', upperFirstWord)

// // // Advantages of these callback functions
// // // 1. Most important: Abstraction ==> transformer function does not care about 
// // // how the string is transformed. That job is delegated to the lower level functions.
// // // That's the reason these are called higher-order functions.
// // // Similarily addEventListener does not care about what will happen when the event
// // // actually occurs.
// // // 2. Break up into functions, helping code readability.

// // // JS uses callbacks all the time
// // const high5 = () => {
// //   console.log('👋🏻')
// // }

// // document.body.addEventListener('click', high5)
// // ['Jonas', 'Martin', 'Gary'].forEach(high5)


// // PART 5: Functions returning functions
// // Where are they used? 
// // In functional programming
// // How and why? Don't know

// // const greet = greeting => {
// //   return name => {
// //     console.log(`${greeting} ${name}`)
// //   }
// // }


// // const greet = greeting => name => console.log(`${greeting} ${name}`)

// // const greetHey = greet('Hey')
// // greetHey('Gary')
// // greetHey('Jonas')

// // greet('Hello')('World')
// // greet('Yo')('Guys')

// // // PART 6: The call and apply methods
// // // Use case: To explicitly specify the this object to be used while calling a 
// // // function

// // // Example
// const lufthansa = {
//   airline: 'Lufthansa',
//   iatacode: 'LH',
//   bookings: [],
//   // Old way
//   // book: function()
//   // New way
//   book(flightNum, name) {
//     const flight = `${this.iatacode}${flightNum}`
//     console.log(
//       `${name} booked a seat on ${this.airline}
//       flight ${flight}`
//     )
//     this.bookings.push({ flight, name })
//   }
// }

// // lufthansa.book(2356, 'Gary')
// // lufthansa.book(2357, 'Jim')
// // console.log(lufthansa)

// const eurowings = {
//   airline: 'Eurowings',
//   iatacode: 'EW',
//   bookings: []
// }

// // const book = lufthansa.book

// // // Does NOT work
// // // in strict mode, 'this' will be undefined
// // // book(23, 'Sarah')

// // book.call(eurowings, 23, 'Sarah')

// // // Apply method also does the same thing, only difference being that apply
// // // uses array of arguments instead of passing all the arguments.
// // // Apply: not used much in mordern JS

// // const flightData = [ 83, 'Steve' ]

// // book.apply(eurowings, flightData)
// // book.call(eurowings, ...flightData)


// // PART 7: Bind method
// // Similar to call method
// // But it does not immediately call the function. 
// // It returns a new function where the this keyword is bound.

// // Rather than using call multiple times, we can create their bound functions

// const { book } = lufthansa
// const bookEW = book.bind(eurowings)
// const bookLH = book.bind(lufthansa)

// bookEW(245, 'Sarah')
// bookLH(345, 'Emily')

// // We can also pass extra parameters in bind. Those will be marked as constant
// // Example: here flightNum will also be a constant now

// // Partial application: A part of the arguments are already applied.
// const bookEW23 = book.bind(eurowings, 23)
// bookEW23('James')

// // With event listeners
// lufthansa.planes = 30
// lufthansa.buyPlane = function() {
//   console.log(this)
//   this.planes++
//   console.log(this.planes)
// }

// // this would work, but if we use arrow function, then it will use this of the parent.
// // window object in this case
// // lufthansa.buyPlane()

// // In this case, the this would be point to the dom element
// // Hence we need to explicitly specify the this object using bind in the function
// // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// // Partial application
// // For partially setting up some of the parameters
// // In many use cases of partial application, we don't even care about the this keyword

// const addTax = (rate, value) => value + value * rate

// console.log(addTax(.1, 200))

// const addVAT = addTax.bind(null, .23)

// console.log(addVAT(200))

// // this is very much different from default parameters
// // this is creating specific functions from a general function.


// // CODING Challenge implement a similar abstraction like addVAT without using bind
// const addGST = (value) => {
//   return addTax(.2, value)
// }

// console.log(addGST(100))

// // We can also do this using functions returning functions
// const addTaxRate = rate => value => value + value * rate

// const addVAT2 = addTaxRate(.23)
// console.log(addVAT2(200))

///////////////////////////////////////
// PART 8: Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/


// const poll = {
//   question: 'Which is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}`
//       )
//     )
//     console.log(answer)

//     // Register the answer
//     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
//     console.log(this.answers)
//     this.displayResults()
//     this.displayResults('string')
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers)
//     } else if (type === 'string') {
//       console.log(`Result is ${this.answers.join(', ')}`)
//     }
//   }
// }

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

// // Bonus part
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string')

// PART 9: IIFE(Immediately Invoked Function Expressions)
// Not used often in modern JS
// Was more of a design pattern than a feature for data privacy as all variables inside would have
// a function scope. But in modern JS, we can acheive the same using block scope.
// Covering with bracket will trick a function --> to be considered as an expression and can be called immediately
// There is also another use case of it in async await

// (() => {
//   const privateNum = 23
//   console.log('This will never be used again', privateNum)
// })()

// {
//   const privateNum = 23
//   console.log('Blocks', privateNum)
// }

// PART 10: CLOSURES
// A closure gives a function access to all variables of its parent function, even after parent function
// is returned. That is even though the parent function is now not a part of the call stack.
// In the example we would have thought that since the execution context of the parent function was
// gone from the call stack, it won't be accessible.

// The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

// We don't have to manually create closures. This is just a property which happens.
// We can't access closed over variables explicitly
// They are not in a tangible JS object.
// But we can take a look at this internal property [[]] using console.dir(booker)
// [[]] ==> internal property which can't be accessed through code
// In this we can check the scopes property.

// NOTE: Closure has higher priority over scope chain. So if there was a variable passengerCount in
// global scope then also closure would have higher priority.

const secureBooking = () => {
  let passengerCount = 0
  return () => {
    passengerCount++
    console.log(`Passenger count ${passengerCount}`)
  }
}

const booker = secureBooking()

booker()
booker()
console.dir(booker)
booker()