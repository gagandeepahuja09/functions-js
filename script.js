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

const flight = 'LH234'
const me = {
  name: 'Gagandeep',
  passport: 245464521
}

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH999'
  passenger.name = `Mr. ${passenger.name}`
  if (passenger.passport === 245464521) {
    console.log('YO')
  } else {
    console.log('NO')
  }
}

// It's the same as doing
// const flightNum = flight
// const passenger = me
// When we log me, we'll get the change as passed by reference
// But not with flight as it's a copy(parameter type)

checkIn(flight, me)


// Interaction of 2 or more different functions with the same object can cause issues.

const newPassport = person => {
  person.passport = Math.random(Math.random() * 100000000000)
}

newPassport(me)
checkIn(flight, me)

// Note: We can pass a reference variable in JS. But this is not the same as passing by reference.
