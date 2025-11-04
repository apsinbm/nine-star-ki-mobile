# Year Cycles Feature Documentation

## Overview

The Year Cycles module adds personal 9-year cycle tracking to the Nine Star Ki mobile app. Each user experiences a repeating 9-year energy cycle, and this feature helps them understand which year they're currently in and how to navigate it.

## User Experience

When users view their Nine Star Ki profile results, they now see a **"Your Current Year Cycle"** section that displays:

- Their current cycle year number (1-9) in a colorful badge
- The year's name and theme
- The associated season
- Key concepts and keywords
- Practical guidance for the year

## Technical Architecture

### Files Created

#### Type Definitions
**Location**: `types/year-cycles.ts`

```typescript
export interface YearCycle {
  number: StarNumber;
  name: string;
  season: string;
  keywords: string[];
  theme: string;
  guidance: string;
}
```

#### Data File
**Location**: `lib/data/year-cycles.json`

Contains all 9 year cycles with complete metadata:
- Number, name, season
- Keywords array
- Theme description
- Guidance text

#### Calculation Logic
**Location**: `lib/calculator/year-cycle-calculator.ts`

**Key Functions:**

```typescript
// Determines solar year based on Feb 4 boundary
getCurrentSolarYear(today: Date): number

// Calculates cycle number (1-9) for a person
getCycleNumber(principalStar: StarNumber, solarYear: number): StarNumber

// Gets the full year cycle data
getCurrentYearCycle(principalStar: StarNumber, date?: Date): YearCycle

// Gets previous, current, and next cycles
getYearCycleTimeline(principalStar: StarNumber, date?: Date): YearCycleTimeline
```

#### UI Component
**Location**: `src/components/YearCycleCard.tsx`

A React Native component that displays year cycle information with:
- Seasonal color accent badges
- Dark mode support
- Responsive typography
- Keyword badges
- Guidance section

#### Theme Colors
**Location**: `src/theme/colors.ts`

Added seasonal color palettes:
```typescript
export const SeasonColors = {
  Winter: '#3B82F6',
  'Early Spring': '#A3E635',
  Spring: '#10B981',
  // ... 9 seasons total
}

export const DarkSeasonColors = {
  // Lighter versions for dark mode
}
```

### Algorithm Details

#### Solar Year Calculation

The solar year in Nine Star Ki begins around **February 4** (Li Chun 立春), not January 1.

```typescript
function getCurrentSolarYear(today: Date): number {
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed
  const day = today.getDate();

  // If before Feb 4, use previous year
  if (month < 1 || (month === 1 && day < 4)) {
    return year - 1;
  }
  return year;
}
```

#### Cycle Number Calculation

Uses a reference chart anchored to **2022**:

```typescript
function getCycleNumber(principalStar: StarNumber, solarYear: number): StarNumber {
  const offsets = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  const base = offsets[principalStar];
  const yearsDiff = solarYear - 2022;
  let cycleNum = (base + yearsDiff) % 9;

  // Handle modulo giving 0 (should be 9)
  if (cycleNum <= 0) {
    cycleNum += 9;
  }

  return cycleNum as StarNumber;
}
```

This creates a repeating 9-year pattern where:
- Principal Star 1 in 2022 = Year Cycle 1
- Principal Star 1 in 2023 = Year Cycle 2
- Principal Star 1 in 2031 = Year Cycle 1 (cycle repeats)

## The 9 Year Cycles

### 1. Dream and Regenerate (Winter)
- **Keywords**: Rest, Rebirth, Imagination, Intuition
- **Theme**: Begin a new cycle by turning inward, restoring energy, and envisioning the future
- **Guidance**: Pause active pursuits. Focus on creativity, study, and emotional renewal

### 2. Organize and Prepare (Early Spring)
- **Keywords**: Planning, Foundation, Support, Patience
- **Theme**: Lay the groundwork for your dreams. Gather allies and resources
- **Guidance**: Structure routines, strengthen relationships, prepare for expansion

### 3. Take Action and Grow (Spring)
- **Keywords**: Momentum, Creativity, Expression, Opportunity
- **Theme**: Energy surges forward. Express ideas boldly and take tangible steps
- **Guidance**: Pursue new ventures but stay disciplined; avoid impulsive moves

### 4. Adapt and Navigate Change (Late Spring)
- **Keywords**: Flexibility, Learning, Mentorship, Influence
- **Theme**: Unpredictability tests stability. Growth continues through adaptability
- **Guidance**: Stay steady, communicate clearly, welcome mentors

### 5. Center and Transform (Summer)
- **Keywords**: Change, Power, Fulfillment, Turning Point
- **Theme**: Major shifts bring both endings and powerful beginnings
- **Guidance**: Stay centered, care for health, avoid rash commitments

### 6. Consolidate Power and Purpose (Late Summer)
- **Keywords**: Authority, Responsibility, Achievement, Reflection
- **Theme**: Harvest time—step into leadership and refine your calling
- **Guidance**: Accept recognition but remain humble

### 7. Celebrate and Appreciate (Autumn)
- **Keywords**: Joy, Beauty, Gratitude, Relationships
- **Theme**: Enjoy rewards, cultivate grace, and share abundance
- **Guidance**: Travel, celebrate, enjoy art

### 8. Transform Within (Late Autumn)
- **Keywords**: Introspection, Healing, Metamorphosis, Patience
- **Theme**: Inner transformation and quiet regeneration unfold beneath the surface
- **Guidance**: Slow down, review priorities, meditate

### 9. Complete and Illuminate (Early Winter)
- **Keywords**: Closure, Visibility, Cleansing, Transition
- **Theme**: Endings and illumination lead to renewal. Prepare for the next cycle
- **Guidance**: Finish projects, release clutter, step into the public eye

## Integration Points

### Results Screen
**Location**: `app/results.tsx`

The YearCycleCard is displayed after the combined profile section:

```tsx
const currentYearCycle = getCurrentYearCycle(profile.yearStar, new Date());

<YearCycleCard
  cycle={currentYearCycle}
  showSolarYear={true}
  solarYear={profile.solarYear}
/>
```

### Component Exports
Added to `src/components/index.ts`:
```typescript
export { YearCycleCard } from './YearCycleCard';
```

### Type Exports
Added to `types/index.ts`:
```typescript
export type { YearCycle, YearCycleInfo, YearCycleTimeline } from './year-cycles'
```

## Visual Design

### Color System

Each season has a unique color that adapts to the theme:

**Light Mode:**
- Winter: Cool Blue (#3B82F6)
- Spring: Vibrant Green (#10B981)
- Summer: Warm Amber (#F59E0B)
- Autumn: Deep Red/Orange (#DC2626)

**Dark Mode:**
- Lighter, more vibrant versions of each color
- Higher contrast for visibility

### Layout

The YearCycleCard uses a clean, hierarchical design:

1. **Header**: Colored circle badge with year number + name/solar year
2. **Season**: Small label with seasonal color
3. **Theme**: Main descriptive text
4. **Keywords**: Pill-shaped badges with subtle borders
5. **Guidance**: Italicized practical advice section

## Testing Checklist

- [x] Cycle calculation for all 9 principal stars
- [x] Feb 4 boundary handling (dates before/after)
- [x] Solar year calculation across year boundaries
- [x] Dark mode color rendering
- [x] Seasonal color display for all 9 seasons
- [x] Integration with Results screen
- [x] TypeScript type safety
- [x] Component import/export consistency

## Troubleshooting

### Import Error: "Element type is invalid"

**Issue**: When the app loads, you see a render error: "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined."

**Cause**: Import mismatch between default and named exports. The `Card` component is exported as a default export, but was being imported as a named export in `YearCycleCard.tsx`.

**Solution**:
Changed line 4 in `src/components/YearCycleCard.tsx` from:
```typescript
import { Card } from './Card';  // ❌ Wrong
```
to:
```typescript
import Card from './Card';  // ✅ Correct
```

**File**: `src/components/YearCycleCard.tsx:4`

## Future Enhancements

### Planned Features
1. **Timeline View**: Show previous, current, and next year cycles in a carousel
2. **Notifications**: Alert users in late January about the incoming year theme
3. **Year History**: Store and display past year cycles
4. **Educational Content**: Dedicated screen explaining the 9-year cycle concept
5. **Cycle Calendar**: Visual calendar showing transition dates

### Technical Improvements
1. Add `useYearCycle` hook for easier component integration
2. Implement year cycle history storage (AsyncStorage or Supabase)
3. Add animation when transitioning between cycles
4. Create interactive timeline component
5. Add user notes/journaling for each cycle year

## API Reference

### getCurrentSolarYear()
Determines the solar year based on Li Chun boundary.

**Parameters:**
- `today: Date` - The date to check

**Returns:** `number` - The solar year

### getCycleNumber()
Calculates which year in the 9-year cycle a person is experiencing.

**Parameters:**
- `principalStar: StarNumber` - Person's principal star (1-9)
- `solarYear: number` - The solar year

**Returns:** `StarNumber` - The cycle year (1-9)

### getCurrentYearCycle()
Gets the complete year cycle data for a person.

**Parameters:**
- `principalStar: StarNumber` - Person's principal star (1-9)
- `date?: Date` - Date to calculate for (defaults to today)

**Returns:** `YearCycle` - Complete cycle data

### getYearCycleTimeline()
Gets previous, current, and next year cycles.

**Parameters:**
- `principalStar: StarNumber` - Person's principal star (1-9)
- `date?: Date` - Date to calculate for (defaults to today)

**Returns:** Object with `previous`, `current`, `next` cycles and `solarYear`

## Related Documentation

- [Structure Overview](STRUCTURE_OVERVIEW.md)
- [Styling Reference](STYLING_REFERENCE.md)
- [Quick Reference](QUICK_REFERENCE.md)
- [README](README.md)
