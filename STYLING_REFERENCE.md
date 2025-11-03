# Nine Star Ki Mobile - Styling Patterns & Color Reference

## Quick Color Palette

### Main UI Colors
```
Primary (Dark Gray):     #1F2937  ← Headers, main text, button backgrounds
Secondary (Med Gray):    #6B7280  ← Secondary text, labels
Accent (Blue):           #3B82F6  ← Highlights, important elements
Background (White):      #FFFFFF  ← Screen background
Surface (Light Gray):    #F9FAFB  ← Card backgrounds, surfaces
Border (Light Gray):     #E5E7EB  ← Dividers, borders
Text:                    #1F2937  ← Body text (same as primary)
Text Secondary:          #6B7280  ← Secondary text (same as secondary)
Error (Red):             #DC2626  ← Error states
Success (Green):         #10B981  ← Success states
Warning (Orange):        #F59E0B  ← Warning states
```

### Nine Star Colors (Stars 1-9)
```
Star 1: #9B59B6   (Purple)
Star 2: #E74C3C   (Red)
Star 3: #F39C12   (Orange)
Star 4: #16A085   (Teal)
Star 5: #2980B9   (Blue)
Star 6: #27AE60   (Green)
Star 7: #8E44AD   (Purple)
Star 8: #C0392B   (Dark Red)
Star 9: #D35400   (Dark Orange)
```

---

## Component Styling Templates

### Button Styling
```typescript
// Primary Button
{
  backgroundColor: Colors.primary,
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 8,
  alignItems: 'center',
}

// Secondary Button
{
  backgroundColor: Colors.surface,
  borderWidth: 1,
  borderColor: Colors.border,
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 8,
  alignItems: 'center',
}

// Button Text
{
  fontSize: 16,
  fontWeight: '600',
  color: '#FFFFFF', // primary
  // or
  color: Colors.primary, // secondary
}
```

### Card Styling
```typescript
{
  backgroundColor: Colors.background,
  borderRadius: 12,
  padding: 16,
  marginVertical: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3, // Android
}
```

### Input Field Styling
```typescript
{
  borderWidth: 1,
  borderColor: Colors.border,
  borderRadius: 8,
  paddingHorizontal: 12,
  paddingVertical: 10,
  fontSize: 16,
  color: Colors.text,
}

// Disabled state
{
  backgroundColor: Colors.surface,
  color: Colors.textSecondary,
}
```

### Typography Styles
```typescript
// H1 - Page Title
{
  fontSize: 32,
  fontWeight: 'bold',
  color: Colors.primary,
  marginBottom: 8,
}

// H2 - Screen Title
{
  fontSize: 24,
  fontWeight: '600',
  color: Colors.primary,
}

// H3 - Section Title
{
  fontSize: 18,
  fontWeight: '600',
  color: Colors.primary,
  marginBottom: 12,
}

// Subtitle
{
  fontSize: 14,
  fontWeight: '600',
  color: Colors.accent,
  marginTop: 12,
}

// Body Text
{
  fontSize: 14,
  color: Colors.text,
  lineHeight: 20,
}

// Label
{
  fontSize: 14,
  fontWeight: '600',
  color: Colors.text,
  marginBottom: 8,
}

// Secondary Text / Note
{
  fontSize: 12,
  color: Colors.textSecondary,
  fontStyle: 'italic',
}
```

### Container/Layout Styles
```typescript
// Full-width container
{
  flex: 1,
  padding: 16,
}

// Centered header
{
  alignItems: 'center',
  marginVertical: 24,
}

// Row layout
{
  flexDirection: 'row',
  justifyContent: 'space-around',
}

// Border divider
{
  borderTopWidth: 1,
  borderTopColor: Colors.border,
  paddingTop: 16,
  marginVertical: 12,
}
```

### Star Circle Styling
```typescript
{
  width: 80,
  height: 80,
  borderRadius: 40,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: StarColors[starNumber],
}

// Star number text
{
  fontSize: 32,
  fontWeight: 'bold',
  color: '#FFFFFF',
}

// Label text
{
  fontSize: 12,
  color: '#666',
  marginTop: 8,
}
```

---

## Common Spacing Values
```
8px   - Small margins/padding (tight spacing)
12px  - Medium-small spacing
16px  - Standard spacing (most common)
24px  - Large spacing (between sections)
32px  - Extra large spacing (major sections)
```

---

## Border Radius Values
```
8px   - Buttons, input fields
12px  - Cards, major containers
20px  - Circles (80px / 2)
40px  - Large circles (80px radius)
```

---

## Shadow/Elevation
```typescript
// iOS Shadows
shadowColor: '#000'
shadowOffset: { width: 0, height: 2 }
shadowOpacity: 0.1
shadowRadius: 4

// Android Elevation
elevation: 3
```

---

## How to Import Colors

```typescript
import { Colors, StarColors } from '../theme/colors'

// Usage
<Text style={{ color: Colors.primary }}>Text</Text>
<View style={{ backgroundColor: Colors.background }}>
<Pressable style={{ backgroundColor: StarColors[starNumber] }}>
```

---

## Font Weight Reference
```
Regular:  400 (default)
600:      Semibold (labels, headers)
Bold:     700 (main titles)
```

---

## Safe Margins & Padding
Always use theme colors or spacing values from constants. All screens use:
- Padding: 16px (standard)
- Vertical margins: 8px to 32px depending on context
- No hardcoded colors (use Colors.xxx)

