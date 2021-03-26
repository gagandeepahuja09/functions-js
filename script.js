// 'use strict';

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



// PART 3: First Class And Higher Order Functions
// Functions as first class citizens ===> Just another type of object.
// 1. Store functions in variables or object properties.
// 2. Pass methods as arguments to other functions
// 3. Return functions from other functions.
// 4. Call methods on other functions. ==> counter.inc.bind(someOtherObject)
// counter.inc is the function and we are calling bind on that function.

// Higher order functions: Function that receives another function as an argument,
// that returns a new function or both.
// eg. addEventListener
