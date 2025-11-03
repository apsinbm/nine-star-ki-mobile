# Nine Star Ki Mobile - Complete Structural Overview

## Project Summary
A React Native mobile app built with Expo and TypeScript that calculates Nine Star Ki profiles (an ancient divination system) based on birth dates. The app features date input, calculation engine, and educational content with a clean, modern UI design system.

---

## 1. APP STRUCTURE & ROUTING

### Root App Entry Point
- **`App.tsx`** - Root component that wraps the app with GestureHandlerRootView and StatusBar
- **`index.ts`** - Entry point exports
- Uses Expo Router for file-based routing (expo-router v6.0.14)

### Routing Configuration
**File**: `/app/_layout.tsx` (Stack Navigator)
- Uses `expo-router` Stack for screen navigation
- Header styling uses Colors.primary (#1F2937) with white text
- Four main routes configured:

| Route | Title | File | Purpose |
|-------|-------|------|---------|
| `index` | "Nine Star Ki" | `/app/index.tsx` | Home page entry |
| `calculator` | "Calculator" | `/app/calculator.tsx` | Birth date input screen |
| `results` | "Your Profile" | `/app/results.tsx` | Nine Star Ki profile results |
| `educational` | "Learn More" | `/app/educational.tsx` | Educational content |

---

## 2. SCREENS/PAGES INVENTORY

### HomeScreen (`/app/screens/HomeScreen.tsx`)
**Purpose**: Welcome/landing page with navigation options
**Key Features**:
- Welcome card with app description
- "How It Works" explanation card
- Navigation buttons to Calculator and Educational screens
- Footer with app credits
**Dependencies**: SafeArea, Button, Card components
**Navigation Props**: Uses `navigation.navigate()` to other screens

### CalculatorScreen (`/app/screens/CalculatorScreen.tsx`)
**Purpose**: Birth date input and calculation interface
**Key Features**:
- DatePickerIOS component for date selection
- Birth date range: 1900 to present
- Default date: January 1, 2000
- Calculate button triggers `calculateProfile()` from lib
- Navigation to Results screen with profile data
- Info card explaining timezone/birth time behavior
**State Management**:
  - `birthDate` (Date)
  - `isCalculating` (boolean)
**Dependencies**: `calculateProfile()` from lib/calculator

### ResultsScreen (`/app/screens/ResultsScreen.tsx`)
**Purpose**: Display calculated Nine Star Ki profile
**Key Features**:
- Three star circles (Principal, Month, Energetic)
- Element display with color indicators
- Birth date formatting and display
- Balanced Expression and Growth Opportunities sections
- "Calculate Another" button for new calculations
**Data Flow**: Receives profile via route params
**Dependencies**: StarCircle component, getStarMetadata, getCombination from lib

### EducationalScreen (`/app/screens/EducationalScreen.tsx`)
**Purpose**: Educational content about Nine Star Ki system
**Key Sections**:
- What is Nine Star Ki?
- The Three Stars (Principal, Month, Energetic)
- Solar Calendar explanation
- Elements (Water, Wood, Fire, Earth, Metal)
- How Birth Date Matters
**Static Content**: No state management, informational only

---

## 3. COMPONENTS INVENTORY

### Location: `/app/components/`

#### Button Component
**File**: `Button.tsx`
**Props**:
```typescript
interface ButtonProps {
  title: string
  onPress: () => void
  variant?: 'primary' | 'secondary'
  style?: ViewStyle
  disabled?: boolean
}
```
**Features**:
- Two variants: primary (dark background) and secondary (light with border)
- Press opacity feedback (0.7)
- Disabled state support (opacity 0.5)
- Padding: 12px vertical, 24px horizontal
- Border radius: 8px

#### Card Component
**File**: `Card.tsx`
**Props**:
```typescript
interface CardProps {
  children: React.ReactNode
  style?: ViewStyle
}
```
**Features**:
- White background with rounded corners (12px)
- Padding: 16px
- Shadow effect (iOS & Android compatible)
- Can accept custom styles override
- Used for content grouping throughout app

#### Input Component
**File**: `Input.tsx`
**Props**:
```typescript
interface InputProps {
  label: string
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  editable?: boolean
  style?: object
}
```
**Features**:
- Text input with label
- Border styling with Colors.border
- Disabled state styling
- Border radius: 8px
- Currently not used in main screens

#### SafeArea Component
**File**: `SafeArea.tsx`
**Props**:
```typescript
interface SafeAreaProps {
  children: React.ReactNode
  style?: ViewStyle
}
```
**Features**:
- Wraps React Native SafeAreaView
- Ensures content doesn't overlap with notches/status bars
- White background (Colors.background)
- Flex: 1

#### StarCircle Component
**File**: `StarCircle.tsx`
**Props**:
```typescript
interface StarCircleProps {
  star: number
  label?: string
}
```
**Features**:
- Visual representation of star numbers 1-9
- Dynamic coloring based on StarColors mapping
- Circular badge (80x80px)
- Large white centered number text (32px, bold)
- Optional label below circle
- Colors derived from Colors.theme.StarColors

### Component Exports
**File**: `/app/components/index.ts`
```typescript
export Button, Card, StarCircle, Input, SafeArea
```

---

## 4. CONFIGURATION FILES

### package.json
**Location**: `/package.json`
```json
{
  "name": "nine-star-ki-mobile",
  "version": "1.0.0",
  "main": "index.ts",
  "dependencies": {
    "react": "19.1.0",
    "react-native": "0.81.5",
    "expo": "~54.0.20",
    "expo-router": "6.0.14",
    "expo-status-bar": "3.0.8",
    "expo-constants": "18.0.10",
    "@react-native-community/datetimepicker": "8.5.0",
    "date-fns": "4.1.0",
    "date-fns-tz": "3.2.0",
    "react-native-gesture-handler": "2.29.0",
    "react-native-reanimated": "4.1.3"
  },
  "devDependencies": {
    "@types/react": "~19.1.0",
    "typescript": "~5.9.2"
  }
}
```

### app.json (Expo Configuration)
**Location**: `/app.json`
- **App Name**: "Nine Star Ki"
- **Slug**: "nine-star-ki"
- **Version**: 1.0.0
- **Orientation**: Portrait only
- **Icons**: ./assets/icon.png, ./assets/adaptive-icon.png
- **Splash**: ./assets/splash.png (white background)
- **iOS Bundle ID**: com.ninestarki.mobile
- **Android Package**: com.ninestarki.mobile
- **Scheme**: ninestarki

### tsconfig.json
**Location**: `/tsconfig.json`
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true
  }
}
```
- Extends Expo's base TypeScript config
- Strict mode enabled for type safety

### .gitignore
**Location**: `/.gitignore`
- Standard Node/Expo ignores

### eas.json (EAS Build Configuration)
**Location**: `/eas.json`
- Expo Application Services build configuration

---

## 5. STYLING & DESIGN SYSTEM

### Theme File Structure
**Location**: `/app/theme/colors.ts`

#### Main Colors Object
```typescript
export const Colors = {
  primary: '#1F2937',        // Dark gray (headers, main text)
  secondary: '#6B7280',      // Medium gray
  accent: '#3B82F6',         // Blue
  background: '#FFFFFF',    // White
  surface: '#F9FAFB',        // Very light gray
  error: '#DC2626',          // Red
  text: '#1F2937',           // Dark gray (same as primary)
  textSecondary: '#6B7280',  // Medium gray (same as secondary)
  border: '#E5E7EB',         // Light gray
  success: '#10B981',        // Green
  warning: '#F59E0B',        // Orange
}
```

#### Star Colors Object (Nine Stars 1-9)
```typescript
export const StarColors = {
  1: '#9B59B6',    // Purple
  2: '#E74C3C',    // Red
  3: '#F39C12',    // Orange
  4: '#16A085',    // Teal
  5: '#2980B9',    // Blue
  6: '#27AE60',    // Green
  7: '#8E44AD',    // Purple
  8: '#C0392B',    // Dark Red
  9: '#D35400',    // Dark Orange
}
```

### Typography
**Fonts Used**: System fonts (no custom fonts imported)
**Font Weights**:
- `'bold'` - 700: Titles (HomeScreen 32px)
- `'600'` - 600: Section titles, labels
- Regular - 400: Body text

**Font Sizes**:
- **32px** - Main page titles (HomeScreen)
- **28px** - Educational screen title
- **24px** - Calculator/Results screen titles
- **18px** - Section titles, headers
- **16px** - Labels, regular text
- **14px** - Secondary text, descriptions
- **12px** - Small text, notes, labels

### Spacing System
**No formal spacing scale defined, but observed patterns**:
- **Padding**: 16px (standard), 12px (inputs), 24px (buttons)
- **Margins**: 8px (small), 12px (medium), 16px (standard), 24px (large), 32px (extra large)
- **Border Radius**: 8px (buttons, inputs), 12px (cards), 20px (circles)
- **Line Height**: 20px (standard text)

### Shadow/Elevation
**Card Component Shadows**:
```typescript
shadowColor: '#000'
shadowOffset: { width: 0, height: 2 }
shadowOpacity: 0.1
shadowRadius: 4
elevation: 3  // Android
```

### Styling Approach
**Method**: React Native `StyleSheet.create()` - NOT CSS-in-JS or Tailwind
- All styles are co-located with components
- No external CSS files
- No styled-components, emotion, or Tailwind
- Pure React Native styling
- Inline styles for dynamic colors only

### Common Style Patterns
**Containers**:
```typescript
flex: 1, padding: 16
```

**Card Styling**:
```typescript
backgroundColor: Colors.background (white)
borderRadius: 12
padding: 16
marginVertical: 8
```

**Button Styling**:
```typescript
paddingVertical: 12
paddingHorizontal: 24
borderRadius: 8
```

**Text Styling**:
- Primary text: Colors.primary (#1F2937), fontWeight: '600'
- Secondary text: Colors.textSecondary (#6B7280), fontWeight: regular
- Descriptions: Colors.text, lineHeight: 20

---

## 6. LIBRARY STRUCTURE (Calculation Logic)

### Location: `/lib/`

#### Calculator Module (`/lib/calculator/`)
Contains the Nine Star Ki calculation engine:

**Files**:
- `nine-star-calculator.ts` - High-level API
- `calculation-engine.ts` - Core calculation logic (27KB)
- `dst-utils.ts` - Daylight Saving Time utilities
- `examples.ts` - Example calculations
- `index.ts` - Module exports
- `README.md` - Documentation
- `__tests__/` - Comprehensive test suite (7 test files)

**Main Exports**:
- `calculateProfile()` - Calculate Nine Star Ki from date/time/timezone
- `validateInput()` - Validate calculation input
- `formatProfile()` - Format profile output

#### Data Module (`/lib/data/`)
Contains lookup tables, metadata, and data utilities:

**Files**:
- `star-metadata.ts` - Star characteristics, elements, trigrams
- `star-tables.ts` - Principal/Month/Energetic star lookups
- `solar-calendar.ts` - Li Chun dates and solar year calculations
- `solar-terms.ts` - Solar term calculations
- `solar-terms-data.ts` - Solar term utilities
- `combinations.ts` - 81 combination profiles (29KB)
- `index.ts` - Module exports

**JSON Lookup Tables**:
- `month-star-lookup-table.json` - Month star by year star
- `energetic-star-81-combinations.json` - Star combination profiles
- `verified-month-star-lookup-v2.json` - Verified month star data
- `solar-terms.json` - Solar term dates (105KB)

#### Utils Module (`/lib/utils/`)
**Files**:
- `date-utils.ts` - Date manipulation utilities
- `index.ts` - Exports

#### Types Module (`/types/`)
**Files**:
- `nine-star-ki.ts` - Core type definitions (238 lines)
- `index.ts` - Type exports

**Key Types**:
- `NineStarKiProfile` - Complete profile with all three stars
- `StarNumber` - 1-9
- `Element` - Water, Wood, Fire, Earth, Metal
- `StarMetadata` - Star characteristics
- `CalculationInput` - Input parameters
- `BoundaryWarning` - Solar term boundary warnings

---

## 7. PROJECT LAYOUT TREE

```
nine-star-ki-mobile/
├── app/                           # Main app code (expo-router structure)
│   ├── _layout.tsx               # Stack navigator config
│   ├── index.tsx                 # Home route wrapper
│   ├── calculator.tsx            # Calculator route wrapper
│   ├── results.tsx               # Results route wrapper
│   ├── educational.tsx           # Educational route wrapper
│   ├── screens/                  # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── CalculatorScreen.tsx
│   │   ├── ResultsScreen.tsx
│   │   ├── EducationalScreen.tsx
│   │   └── index.ts
│   ├── components/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── SafeArea.tsx
│   │   ├── StarCircle.tsx
│   │   └── index.ts
│   └── theme/                    # Design system
│       └── colors.ts
├── lib/                          # Business logic & calculations
│   ├── calculator/               # Nine Star Ki calculation engine
│   │   ├── nine-star-calculator.ts
│   │   ├── calculation-engine.ts
│   │   ├── dst-utils.ts
│   │   ├── examples.ts
│   │   ├── index.ts
│   │   ├── README.md
│   │   └── __tests__/            # Test suite
│   ├── data/                     # Data & lookup tables
│   │   ├── star-metadata.ts
│   │   ├── star-tables.ts
│   │   ├── solar-calendar.ts
│   │   ├── solar-terms.ts
│   │   ├── solar-terms-data.ts
│   │   ├── combinations.ts
│   │   ├── index.ts
│   │   ├── *.json                # Lookup tables
│   │   └── solar-terms.json      # Large data file
│   └── utils/                    # Utility functions
│       ├── date-utils.ts
│       └── index.ts
├── types/                        # TypeScript definitions
│   ├── nine-star-ki.ts          # Core types
│   └── index.ts
├── assets/                       # App icons & splash
│   ├── icon.png
│   ├── adaptive-icon.png
│   ├── splash.png
│   ├── splash-icon.png
│   └── favicon.png
├── ios/                          # iOS build files
├── App.tsx                       # Root component
├── app.json                      # Expo config
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
└── index.ts                      # Entry point
```

---

## 8. KEY DESIGN DECISIONS

### Styling System
- **React Native StyleSheet**: Used exclusively for all styling
- **No CSS Framework**: No Tailwind, styled-components, emotion, etc.
- **Theme Centralization**: Colors defined in single file (`/app/theme/colors.ts`)
- **Inline Styles for Dynamic**: Only used for dynamic color values (e.g., star colors)

### Component Architecture
- **Functional Components**: All components are functional with hooks
- **Props-Based**: All components accept props for customization
- **Separation of Concerns**: Screens separate from reusable components
- **Index Exports**: Components organized with index.ts barrel exports

### Routing
- **Expo Router**: File-based routing (modern approach)
- **Stack Navigator**: Linear navigation model
- **Four Main Routes**: Home → Calculator → Results / Educational

### Type Safety
- **Full TypeScript**: Strict mode enabled
- **Comprehensive Types**: Detailed type definitions in `/types/`
- **Interface-Driven**: Props defined with interfaces

### Data Flow
- **Unidirectional**: Components receive data via props and route params
- **Route Params**: Profile data passed from Calculator → Results screen
- **No Global State**: No Redux, Zustand, or Recoil (not needed for this app)

---

## 9. CURRENT STATE SUMMARY

### Fully Implemented
- Complete UI component library (Button, Card, Input, SafeArea, StarCircle)
- All four main screens with functional layouts
- Theme/color system
- Nine Star Ki calculation engine with lookup tables
- Solar calendar and solar terms data
- 81 star combination profiles
- Comprehensive type definitions
- Test suite for calculation logic

### Not Implemented
- Error handling UI (basic Alert only)
- Animations/transitions
- Dark mode
- Localization/i18n
- Analytics
- Persistence/AsyncStorage
- Push notifications
- Offline support

---

## 10. NEXT STEPS FOR ENHANCEMENT

If expanding styling capabilities:
1. Consider adding spacing constants (sm, md, lg, xl)
2. Create typography scale constants
3. Add responsive breakpoints for tablet support
4. Consider adding theme variants (dark mode)
5. Define animation/transition presets
