export interface NineStarKiProfile {
  birthDate: Date;
  yearStar: number;
  principalStar: number;
  monthStar: number;
  solarMonth: number;
  energeticStar: number;
  solarYear: number;
}

export interface CalculationInput {
  date: Date;
  time: string;
  timezone: string;
}
