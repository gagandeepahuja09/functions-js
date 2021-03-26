'use strict';

const bookings = []

// all default params must be at the last
// it a default param is dependent on another, then it should be defined later.
// price is dependent on numPassengers
const createBooking = (
  flightNum, 
  numPassengers = 1,
  price = 199 * numPassengers
) => {
  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking)
  bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 4, 3000)
createBooking('LH123', 2)
createBooking('LH123', undefined, 1000)