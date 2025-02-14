/**
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */

export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  const REMAINING_MINUTES = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
  return REMAINING_MINUTES
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */

export function preparationTimeInMinutes(numberOfLayers) {
  const PREPARATION_TIME_IN_MINUTES = PREPARATION_MINUTES_PER_LAYER * numberOfLayers
  return PREPARATION_TIME_IN_MINUTES
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const TOTAL_TIME = (PREPARATION_MINUTES_PER_LAYER * numberOfLayers) + actualMinutesInOven
  return TOTAL_TIME
}
