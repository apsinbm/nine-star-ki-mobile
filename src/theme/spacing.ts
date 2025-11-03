export const Spacing = {
  xs: 4,    // Extra small - minimal gaps
  sm: 8,    // Small - component internal spacing
  md: 16,   // Medium - standard section spacing (DEFAULT)
  lg: 24,   // Large - major section spacing
  xl: 32,   // Extra large - screen spacing
  xxl: 48,  // Double extra large - reserved
} as const;

export type SpacingKey = keyof typeof Spacing;
