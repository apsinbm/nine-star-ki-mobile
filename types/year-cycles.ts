/**
 * Year Cycle Type Definitions
 *
 * Defines the nine-year cycle that each person moves through annually,
 * based on their Principal Star and the solar year (Li Chun boundary).
 */

import { StarNumber } from './nine-star-ki';

/**
 * Represents one year in the nine-year cycle
 */
export interface YearCycle {
  /** The cycle year number (1-9) */
  number: StarNumber;

  /** The name/theme of this year */
  name: string;

  /** The element associated with this cycle (Fire, Earth, Metal, Water, Wood) */
  element: string;

  /** The direction associated with this cycle (North, South, East, West, etc.) */
  direction: string;

  /** The season associated with this year */
  season: string;

  /** Key concepts and themes for this year */
  keywords: string[];

  /** Primary theme description */
  theme: string;

  /** Guidance for navigating this year */
  guidance: string;
}

/**
 * Extended year cycle info including timing
 */
export interface YearCycleInfo extends YearCycle {
  /** The solar year this applies to */
  solarYear: number;

  /** When this cycle year begins (Li Chun) */
  startDate: Date;

  /** When this cycle year ends (day before next Li Chun) */
  endDate: Date;

  /** Days remaining in this cycle year */
  daysRemaining?: number;
}

/**
 * Timeline showing previous, current, and next year cycles
 */
export interface YearCycleTimeline {
  /** Previous year cycle */
  previous: YearCycleInfo;

  /** Current year cycle */
  current: YearCycleInfo;

  /** Next year cycle */
  next: YearCycleInfo;
}
