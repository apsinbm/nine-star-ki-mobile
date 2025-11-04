import { TextStyle } from 'react-native';
import { Colors } from './colors';

// Base typography styles (without color - added dynamically)
const baseTypography = {
  // Headings
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  } as TextStyle,

  h2: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
  } as TextStyle,

  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  } as TextStyle,

  h4: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
  } as TextStyle,

  // Body text
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  } as TextStyle,

  // Secondary body text
  bodySecondary: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  } as TextStyle,

  // Labels and captions
  caption: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  } as TextStyle,

  label: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  } as TextStyle,
} as const;

// Function to create typography with theme-aware colors
export function getTypography(colors: typeof Colors) {
  return {
    h1: { ...baseTypography.h1, color: colors.primary } as TextStyle,
    h2: { ...baseTypography.h2, color: colors.primary } as TextStyle,
    h3: { ...baseTypography.h3, color: colors.primary } as TextStyle,
    h4: { ...baseTypography.h4, color: colors.primary } as TextStyle,
    body: { ...baseTypography.body, color: colors.text } as TextStyle,
    bodySecondary: { ...baseTypography.bodySecondary, color: colors.textSecondary } as TextStyle,
    caption: { ...baseTypography.caption, color: colors.primary } as TextStyle,
    label: { ...baseTypography.label, color: colors.textSecondary } as TextStyle,
  };
}

// Default typography with light mode colors
export const Typography = getTypography(Colors);

export type TypographyKey = keyof typeof Typography;
