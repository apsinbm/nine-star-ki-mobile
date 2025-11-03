import { TextStyle } from 'react-native';
import { Colors } from './colors';

export const Typography = {
  // Headings
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    color: Colors.primary,
  } as TextStyle,

  h2: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    color: Colors.primary,
  } as TextStyle,

  h3: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.primary,
  } as TextStyle,

  // Body text
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.text,
  } as TextStyle,

  // Secondary body text
  bodySecondary: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.textSecondary,
  } as TextStyle,

  // Labels and captions
  caption: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primary,
  } as TextStyle,

  label: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    color: Colors.textSecondary,
  } as TextStyle,
} as const;

export type TypographyKey = keyof typeof Typography;
