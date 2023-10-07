interface ICalculateTimeToYield {
  totalItems: number;
  stakedPercentage: number;
  apyPercentage: number;
  compoundingFrequency: number;
}

/**
 * 
 * @param totalItems 
 * @param stakedPercentage 
 * @param apyPercentage 
 * @param compoundingFrequency 
 * @description Calculates the time to yield all items based on the total items, staked percentage, APY percentage and compounding frequency.
 * @returns The time to yield all items in years.
 * @example
 * const totalItems = 10000000000;
 * const stakedPercentage = 30;
 * const apyPercentage = 90;
 * const compoundingFrequency = 365;
 * 
 * const timeToYield = calculateTimeToYield(totalItems, stakedPercentage, apyPercentage, compoundingFrequency);
 * console.log(`Time to yield all items: ${timeToYield.toFixed(2)} years`);
 */
function calculateTimeToYield(
  totalItems: number,
  stakedPercentage: number,
  apyPercentage: number,
  compoundingFrequency: number
): number {
  const PV = (stakedPercentage / 100) * totalItems;
  const r = apyPercentage / 100;
  const n = compoundingFrequency;

  const t = (Math.log(totalItems / PV)) / (n * Math.log(1 + r / n));

  return t;
}

export default calculateTimeToYield;
export type { ICalculateTimeToYield };
