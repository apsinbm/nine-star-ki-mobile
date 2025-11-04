# Nine Star Ki Mobile App

A comprehensive mobile application for calculating and exploring your Nine Star Ki astrological profile, including your Principal, Month, and Energetic stars, plus your current year cycle.

## Features

### Core Functionality
- **Nine Star Ki Calculator**: Calculate your three stars based on birth date and time
- **Accurate Solar Calendar**: Uses precise Li Chun (立春) dates for year boundaries
- **Time Zone Support**: Handles different time zones for accurate calculations
- **Dark Mode**: Full support for light and dark themes

### Profile Information
- **Principal Star (Year Star)**: Your main character and personality
- **Month Star**: Your emotional and inner nature
- **Energetic Star**: Your energy and action tendency
- **81 Combinations**: Detailed insights for your unique star combination

### Year Cycle Module (NEW)
- **9-Year Cycle Tracking**: Discover which year of your personal 9-year cycle you're in
- **Solar Year Alignment**: Automatically calculates based on Li Chun boundary (February 4)
- **Seasonal Themes**: Each year has unique themes, guidance, and keywords
- **Visual Design**: Beautiful cards with seasonal colors that adapt to dark mode

## Technology Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router
- **Styling**: React Native StyleSheet with custom theme system
- **Date Handling**: date-fns and date-fns-tz
- **Platform**: iOS (with Android support ready)

## Project Structure

```
nine-star-ki-mobile/
├── app/                          # Expo Router screens
│   ├── index.tsx                 # Home screen
│   ├── calculator.tsx            # Date input screen
│   ├── results.tsx               # Profile results screen
│   ├── educational.tsx           # Educational content
│   └── _layout.tsx               # Root layout
├── src/
│   ├── components/               # Reusable components
│   │   ├── YearCycleCard.tsx    # Year cycle display component
│   │   ├── StarCircle.tsx       # Star number display
│   │   ├── Card.tsx             # Card container
│   │   └── ...
│   ├── theme/                    # Theme configuration
│   │   ├── colors.ts            # Color definitions + seasonal colors
│   │   ├── typography.ts        # Typography system
│   │   └── spacing.ts           # Spacing constants
│   └── context/                  # React contexts
│       └── ThemeContext.tsx     # Theme provider
├── lib/
│   ├── calculator/               # Calculation logic
│   │   ├── nine-star-calculator.ts
│   │   └── year-cycle-calculator.ts  # Year cycle calculations
│   └── data/                     # Static data
│       ├── year-cycles.json     # 9 year cycles data
│       └── ...
└── types/                        # TypeScript definitions
    ├── nine-star-ki.ts
    └── year-cycles.ts           # Year cycle types
```

## Getting Started

### Prerequisites
- Node.js 16+
- Expo CLI
- iOS Simulator (for iOS development)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## Year Cycle Feature

The app now includes a powerful Year Cycle module that helps users understand their personal 9-year energy cycle.

### How It Works

Each person moves through a repeating 9-year cycle based on their Principal Star (first number). The cycle begins each year around February 4th (Li Chun).

**The 9 Year Cycles:**

1. **Dream and Regenerate** (Winter) - Rest, creativity, and envisioning the future
2. **Organize and Prepare** (Early Spring) - Lay groundwork, gather resources
3. **Take Action and Grow** (Spring) - Express ideas boldly, take tangible steps
4. **Adapt and Navigate Change** (Late Spring) - Stay flexible, welcome mentors
5. **Center and Transform** (Summer) - Major shifts, powerful beginnings
6. **Consolidate Power and Purpose** (Late Summer) - Step into leadership
7. **Celebrate and Appreciate** (Autumn) - Enjoy rewards, cultivate grace
8. **Transform Within** (Late Autumn) - Inner transformation, quiet regeneration
9. **Complete and Illuminate** (Early Winter) - Endings, visibility, renewal

### Implementation Details

- **Solar Year Boundary**: February 4 (Li Chun)
- **Reference Year**: 2022 (used for cycle calculations)
- **Visual Design**: Each season has unique colors in light and dark modes
- **Location**: Displayed on Results screen after calculation

## Documentation

- [Structure Overview](STRUCTURE_OVERVIEW.md)
- [Styling Reference](STYLING_REFERENCE.md)
- [Quick Reference](QUICK_REFERENCE.md)
- [Year Cycles Feature](YEAR_CYCLES_FEATURE.md)
- [Documentation Index](DOCUMENTATION_INDEX.md)

## Contributing

This is a private project. For questions or suggestions, please contact the project owner.

## License

Copyright © 2025. All rights reserved.
