export function dayRate(ratePerHour) {
  return 8 * ratePerHour
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const daysInBudget = budget/(ratePerHour*8)
  return Math.floor(daysInBudget)
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const monthsCount = Math.floor(numDays / 22)
  const monthlyRate = ((ratePerHour * 8) * 22)
  const monthlyDiscount = monthlyRate * (1-discount)
  const exedingDays = numDays%22
  const excedingDayCost = exedingDays * (ratePerHour * 8)
  const totalPrice = (monthsCount * monthlyDiscount) + excedingDayCost
  return Math.ceil(totalPrice) 
}