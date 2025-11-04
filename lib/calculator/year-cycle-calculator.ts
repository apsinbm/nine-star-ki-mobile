/**
 * Year Cycle Calculator
 *
 * Calculates the current year cycle (1-9) for a given person based on their
 * Principal Star number and the current solar year (bounded by Li Chun ~ Feb 4).
 */

import { StarNumber } from '../../types/nine-star-ki';
import { YearCycle } from '../../types/year-cycles';
import yearCyclesData from '../data/year-cycles.json';

/**
 * Determines the solar year based on the Li Chun boundary (February 4)
 *
 * If today's date is before February 4, the solar year is the previous Gregorian year.
 * Otherwise, it's the current Gregorian year.
 *
 * @param today - The date to check
 * @returns The solar year
 */
export function getCurrentSolarYear(today: Date): number {
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed (0 = January, 1 = February)
  const day = today.getDate();

  // Li Chun is around February 4 (month index 1, day 4)
  // If we're before Feb 4, use the previous year as the solar year
  if (month < 1 || (month === 1 && day < 4)) {
    return year - 1;
  }

  return year;
}

/**
 * Calculates which year in the 9-year cycle a person is experiencing
 *
 * Uses 2022 as the reference year with known mappings for each Principal Star.
 * The cycle repeats every 9 years in a consistent pattern.
 *
 * @param principalStar - The person's Principal Star (first number) from 1-9
 * @param solarYear - The solar year to calculate for
 * @returns The cycle year number (1-9)
 */
export function getCycleNumber(
  principalStar: StarNumber,
  solarYear: number
): StarNumber {
  // Reference chart offset for each principal star based on 2022 alignment
  // This maps what year cycle each principal star was in during 2022
  const offsets: Record<StarNumber, number> = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  const baseYear = 2022;
  const base = offsets[principalStar];

  // Calculate the difference from the base year
  const yearsDiff = solarYear - baseYear;

  // Calculate the current cycle position
  // We use modulo 9 to wrap around the 9-year cycle
  let cycleNum = (base + yearsDiff) % 9;

  // Handle the case where modulo gives 0 (should be 9)
  if (cycleNum <= 0) {
    cycleNum += 9;
  }

  return cycleNum as StarNumber;
}

/**
 * Gets the full year cycle data for a given cycle number
 *
 * @param cycleNumber - The cycle year number (1-9)
 * @returns The year cycle data or undefined if not found
 */
export function getYearCycleData(cycleNumber: StarNumber): YearCycle | undefined {
  return (yearCyclesData as YearCycle[]).find((cycle) => cycle.number === cycleNumber);
}

/**
 * Gets the current year cycle for a person based on their Principal Star
 *
 * @param principalStar - The person's Principal Star (first number) from 1-9
 * @param date - The date to calculate for (defaults to today)
 * @returns The current year cycle data
 * @throws Error if cycle data cannot be found
 */
export function getCurrentYearCycle(
  principalStar: StarNumber,
  date: Date = new Date()
): YearCycle {
  const solarYear = getCurrentSolarYear(date);
  const cycleNum = getCycleNumber(principalStar, solarYear);
  const cycleData = getYearCycleData(cycleNum);

  if (!cycleData) {
    throw new Error(`Year cycle data not found for cycle number ${cycleNum}`);
  }

  return cycleData;
}

/**
 * Gets the previous, current, and next year cycles for a timeline view
 *
 * @param principalStar - The person's Principal Star (first number) from 1-9
 * @param date - The date to calculate for (defaults to today)
 * @returns Object containing previous, current, and next cycles
 */
export function getYearCycleTimeline(
  principalStar: StarNumber,
  date: Date = new Date()
) {
  const current = getCurrentYearCycle(principalStar, date);
  const solarYear = getCurrentSolarYear(date);

  // Get previous year cycle
  const prevCycleNum = getCycleNumber(principalStar, solarYear - 1);
  const previous = getYearCycleData(prevCycleNum);

  // Get next year cycle
  const nextCycleNum = getCycleNumber(principalStar, solarYear + 1);
  const next = getYearCycleData(nextCycleNum);

  return {
    previous: previous || current,
    current,
    next: next || current,
    solarYear,
  };
}

/**
 * Gets all year cycles for a timeline spanning from birth year to future years
 *
 * Generates a complete list of years with their corresponding cycle numbers and data,
 * useful for displaying a scrollable list of all years in a person's cycle.
 *
 * @param principalStar - The person's Principal Star (first number) from 1-9
 * @param birthYear - The person's birth year (Gregorian calendar)
 * @param yearsAhead - How many years into the future to include (default: 30)
 * @returns Array of year cycle entries with calendar year, solar year, cycle number, and cycle data
 */
export function getAllYearCycles(
  principalStar: StarNumber,
  birthYear: number,
  yearsAhead: number = 30
): Array<{
  calendarYear: number;
  solarYear: number;
  cycleNumber: StarNumber;
  cycleData: YearCycle;
}> {
  const currentDate = new Date();
  const currentCalendarYear = currentDate.getFullYear();
  const endYear = currentCalendarYear + yearsAhead;

  const cycles: Array<{
    calendarYear: number;
    solarYear: number;
    cycleNumber: StarNumber;
    cycleData: YearCycle;
  }> = [];

  // Generate cycles for each year from birth year to end year
  for (let year = birthYear; year <= endYear; year++) {
    // For each calendar year, we need to determine the solar year
    // The solar year spans from Feb 4 of calendar year to Feb 3 of next calendar year
    const solarYear = year;
    const cycleNumber = getCycleNumber(principalStar, solarYear);
    const cycleData = getYearCycleData(cycleNumber);

    if (cycleData) {
      cycles.push({
        calendarYear: year,
        solarYear,
        cycleNumber,
        cycleData,
      });
    }
  }

  return cycles;
}
