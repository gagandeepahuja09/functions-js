'use strict';

// const bookings = []

// // all default params must be at the last
// // it a default param is dependent on another, then it should be defined later.
// // price is dependent on numPassengers
// const createBooking = (
//   flightNum, 
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) => {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking)
//   bookings.push(booking)
// }

// createBooking('LH123')
// createBooking('LH123', 4, 3000)
// createBooking('LH123', 2)
// createBooking('LH123', undefined, 1000)

// PART 2: Passing reference and primitive parameters
// const flight = 'LH234'
// const me = {
//   name: 'Gagandeep',
//   passport: 245464521
// }

// const checkIn = (flightNum, passenger) => {
//   flightNum = 'LH999'
//   passenger.name = `Mr. ${passenger.name}`
//   if (passenger.passport === 245464521) {
//     console.log('YO')
//   } else {
//     console.log('NO')
//   }
// }

// // It's the same as doing
// // const flightNum = flight
// // const passenger = me
// // When we log me, we'll get the change as passed by reference
// // But not with flight as it's a copy(parameter type)

// checkIn(flight, me)


// // Interaction of 2 or more different functions with the same object can cause issues.

// const newPassport = person => {
//   person.passport = Math.random(Math.random() * 100000000000)
// }

// newPassport(me)
// checkIn(flight, me)

// // Note: We can pass a reference variable in JS. But this is not the same as passing by reference.



// // PART 3: First Class And Higher Order Functions
// // Functions as first class citizens ===> Just another type of object.
// // 1. Store functions in variables or object properties.
// // 2. Pass methods as arguments to other functions
// // 3. Return functions from other functions.
// // 4. Call methods on other functions. ==> counter.inc.bind(someOtherObject)
// // counter.inc is the function and we are calling bind on that function.

// // Higher order functions: Function that receives another function as an argument,
// // that returns a new function or both.
// // eg. addEventListener


// PART 4: Functions accepting callback functions
// const oneWord = str => {
//   return str.replace(/ /g, '').toLowerCase()
// }

// // Beautifully written
// const upperFirstWord = str => {
//   // rest parameter, destructuring at the left side
//   const [ first, ...others ] = str.split(' ')
//   return [ first.toUpperCase(), ...others ].join(' ')
// }

// const transformer = (str, fn) => {
//   console.log(`Original string: ${str}`)
//   console.log(`Transformed string: ${fn(str)}`)
//   console.log('Function:', fn)
//   console.log('Function name:', fn.name)
// }

// transformer('Javascript is the best', oneWord)
// transformer('Javascript is the best', upperFirstWord)

// // Advantages of these callback functions
// // 1. Most important: Abstraction ==> transformer function does not care about 
// // how the string is transformed. That job is delegated to the lower level functions.
// // That's the reason these are called higher-order functions.
// // Similarily addEventListener does not care about what will happen when the event
// // actually occurs.
// // 2. Break up into functions, helping code readability.

// // JS uses callbacks all the time
// const high5 = () => {
//   console.log('👋🏻')
// }

// document.body.addEventListener('click', high5)
// ['Jonas', 'Martin', 'Gary'].forEach(high5)


// PART 5: Functions returning functions
// Where are they used? 
// In functional programming
// How and why? Don't know

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`)
//   }
// }


// const greet = greeting => name => console.log(`${greeting} ${name}`)

// const greetHey = greet('Hey')
// greetHey('Gary')
// greetHey('Jonas')

// greet('Hello')('World')
// greet('Yo')('Guys')

// // PART 5: The call and apply methods
// // Use case: To explicitly specify the this object to be used while calling a 
// // function

// // Example
const lufthansa = {
  airline: 'Lufthansa',
  iatacode: 'LH',
  bookings: [],
  // Old way
  // book: function()
  // New way
  book(flightNum, name) {
    const flight = `${this.iatacode}${flightNum}`
    console.log(
      `${name} booked a seat on ${this.airline}
      flight ${flight}`
    )
    this.bookings.push({ flight, name })
  }
}

// lufthansa.book(2356, 'Gary')
// lufthansa.book(2357, 'Jim')
// console.log(lufthansa)

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: []
}

// const book = lufthansa.book

// // Does NOT work
// // in strict mode, 'this' will be undefined
// // book(23, 'Sarah')

// book.call(eurowings, 23, 'Sarah')

// // Apply method also does the same thing, only difference being that apply
// // uses array of arguments instead of passing all the arguments.
// // Apply: not used much in mordern JS

// const flightData = [ 83, 'Steve' ]

// book.apply(eurowings, flightData)
// book.call(eurowings, ...flightData)


// PART 6: Bind method
// Similar to call method
// But it does not immediately call the function. 
// It returns a new function where the this keyword is bound.

// Rather than using call multiple times, we can create their bound functions

const { book } = lufthansa
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)

bookEW(245, 'Sarah')
bookLH(345, 'Emily')

// We can also pass extra parameters in bind. Those will be marked as constant
// Example: here flightNum will also be a constant now

// Partial application: A part of the arguments are already applied.
const bookEW23 = book.bind(eurowings, 23)
bookEW23('James')

// With event listeners
lufthansa.planes = 30
lufthansa.buyPlane = function() {
  console.log(this)
  this.planes++
  console.log(this.planes)
}

// this would work, but if we use arrow function, then it will use this of the parent.
// window object in this case
// lufthansa.buyPlane()

// In this case, the this would be point to the dom element
// Hence we need to explicitly specify the this object using bind in the function
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// Partial application
// For partially setting up some of the parameters
// In many use cases of partial application, we don't even care about the this keyword

const addTax = (rate, value) => value + value * rate

console.log(addTax(.1, 200))

const addVAT = addTax.bind(null, .23)

console.log(addVAT(200))

// this is very much different from default parameters
// this is creating specific functions from a general function.


// CODING Challenge implement a similar abstraction like addVAT without using bind
const addGST = (value) => {
  return addTax(.2, value)
}

console.log(addGST(100))

// We can also do this using functions returning functions
const addTaxRate = rate => value => value + value * rate

const addVAT2 = addTaxRate(.23)
console.log(addVAT2(200))