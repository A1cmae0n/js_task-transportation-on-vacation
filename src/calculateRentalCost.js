'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // Every day you rent the car costs $40.
  let total = days * 40;

  // If you rent the car for 7 or more days, you get $50 off your total.
  if (days >= 7) {
    return (total -= 50);
  }

  // Alternatively, if you rent the car for 3 or more days,
  // you get $20 off your total.
  if (days >= 3) {
    return (total -= 20);
  }

  return total;
}

module.exports = calculateRentalCost;
