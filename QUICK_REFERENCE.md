# Nine Star Ki Mobile - Quick Reference Card

## File Locations at a Glance

```
/app/theme/colors.ts              ← ALL colors defined here
/app/screens/                      ← 4 main screens
/app/components/                   ← 5 reusable components
/lib/calculator/                   ← Calculation engine
/lib/data/                         ← Lookup tables & metadata
/types/nine-star-ki.ts             ← All TypeScript types
```

---

## Main Routes

| Path | Component | File |
|------|-----------|------|
| `/` | HomeScreen | `/app/screens/HomeScreen.tsx` |
| `/calculator` | CalculatorScreen | `/app/screens/CalculatorScreen.tsx` |
| `/results` | ResultsScreen | `/app/screens/ResultsScreen.tsx` |
| `/educational` | EducationalScreen | `/app/screens/EducationalScreen.tsx` |

---

## Color Palette (Hex Codes)

```
Primary:        #1F2937   (Dark Gray)
Secondary:      #6B7280   (Medium Gray)
Accent:         #3B82F6   (Blue)
Background:     #FFFFFF   (White)
Surface:        #F9FAFB   (Light Gray)
Text:           #1F2937   (Dark Gray)
TextSecondary:  #6B7280   (Medium Gray)
Border:         #E5E7EB   (Light Gray)
Error:          #DC2626   (Red)
Success:        #10B981   (Green)
Warning:        #F59E0B   (Orange)
```

### Star Colors (1-9)
```
Star 1: #9B59B6    Star 4: #16A085    Star 7: #8E44AD
Star 2: #E74C3C    Star 5: #2980B9    Star 8: #C0392B
Star 3: #F39C12    Star 6: #27AE60    Star 9: #D35400
```

---

## Typography Scale

```
32px - Main titles (bold)
28px - Page titles
24px - Screen titles
18px - Section titles
16px - Body text & labels
14px - Secondary text
12px - Small text & notes
```

---

## Component Props Quick Reference

### Button
```typescript
<Button 
  title="text"
  onPress={() => {}}
  variant="primary"      // or "secondary"
  disabled={false}
  style={{}}
/>
```

### Card
```typescript
<Card style={{}}>
  {children}
</Card>
```

### SafeArea
```typescript
<SafeArea style={{}}>
  {children}
</SafeArea>
```

### StarCircle
```typescript
<StarCircle 
  star={5}           // 1-9
  label="Month"
/>
```

### Input
```typescript
<Input 
  label="Birth Date"
  value={date}
  onChangeText={setDate}
  placeholder="Enter date"
  editable={true}
/>
```

---

## Common Spacing Values

```
8px    - Small gaps
12px   - Medium-small
16px   - Standard (most used)
24px   - Large sections
32px   - Major breaks
```

---

## Import Pattern

```typescript
// Colors
import { Colors, StarColors } from '../theme/colors'

// Components
import { Button, Card, SafeArea, Input, StarCircle } from '../components'

// Screens
import { HomeScreen, CalculatorScreen, ResultsScreen, EducationalScreen } from './screens'

// Calculator
import { calculateProfile } from '../../lib/calculator'

// Data
import { getStarMetadata, getCombination } from '../../lib/data'
```

---

## Styling Template

All components use `StyleSheet.create()`:

```typescript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primary,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary,
  },
})
```

---

## Project Structure Summary

```
app/                    Screens & Components
├── screens/            4 main screens
├── components/         5 reusable components
└── theme/              colors.ts

lib/                    Business Logic
├── calculator/         Nine Star Ki engine
├── data/               Lookup tables
└── utils/              Helper functions

types/                  TypeScript definitions
assets/                 Icons & splash images
```

---

## Key Dependencies

- **expo**: ~54.0.20 - React Native framework
- **expo-router**: 6.0.14 - File-based routing
- **react-native**: 0.81.5
- **react**: 19.1.0
- **typescript**: ~5.9.2 (strict mode)
- **date-fns**: 4.1.0 - Date utilities
- **date-fns-tz**: 3.2.0 - Timezone support

---

## Navigation Pattern

```typescript
// From anywhere with navigation prop:
navigation.navigate('Calculator')
navigation.navigate('Results', { profile })
navigation.navigate('Educational')
```

---

## No CSS Frameworks

This app uses **pure React Native StyleSheet** - no Tailwind, styled-components, or emotion.

---

## Current Styling Status

- Colors: CENTRALIZED in `/app/theme/colors.ts`
- Typography: System fonts, sizes 12px-32px
- Spacing: 8px, 12px, 16px, 24px, 32px pattern
- Shadows: iOS + Android compatible (elevation)
- Approach: Co-located styles with components

---

## Files to Modify for Styling Changes

1. **Colors**: `/app/theme/colors.ts`
2. **Button style**: `/app/components/Button.tsx`
3. **Card style**: `/app/components/Card.tsx`
4. **Screen styles**: `/app/screens/*.tsx`

---

## TypeScript Support

Full strict mode - all files properly typed.
Main type file: `/types/nine-star-ki.ts`

---

## Testing

Located in `/lib/calculator/__tests__/`
7 test files covering calculation logic.

---

Created: Nov 2, 2025
Project: Nine Star Ki Mobile
