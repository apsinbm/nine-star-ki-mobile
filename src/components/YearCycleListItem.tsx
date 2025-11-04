import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { SeasonColors, DarkSeasonColors } from '../theme/colors';
import { getTypography } from '../theme/typography';
import { Spacing } from '../theme/spacing';
import { StarNumber } from '../../types/nine-star-ki';

interface YearCycleListItemProps {
  /** Calendar year (e.g., 2025) */
  year: number;

  /** Cycle number (1-9) */
  cycleNumber: StarNumber;

  /** Cycle name (e.g., "Fame - 'in the spotlight'") */
  cycleName: string;

  /** Season for color mapping */
  season: string;

  /** Whether this is the current year */
  isCurrentYear?: boolean;

  /** Callback when item is pressed */
  onPress: () => void;
}

/**
 * YearCycleListItem Component
 *
 * Renders a single row in the year cycles list showing:
 * - Year
 * - Colored badge with cycle number
 * - Cycle name
 * - Chevron for navigation
 */
export function YearCycleListItem({
  year,
  cycleNumber,
  cycleName,
  season,
  isCurrentYear = false,
  onPress,
}: YearCycleListItemProps) {
  const { isDarkMode, colors } = useTheme();
  const typography = getTypography(colors);

  // Get the seasonal color based on theme
  const seasonalColors = isDarkMode ? DarkSeasonColors : SeasonColors;
  const seasonColor = seasonalColors[season as keyof typeof seasonalColors] || colors.accent;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: isCurrentYear
            ? isDarkMode
              ? colors.surface
              : colors.accentLight
            : colors.background,
          borderLeftColor: isCurrentYear ? seasonColor : 'transparent',
          borderLeftWidth: isCurrentYear ? 4 : 0,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      {/* Year */}
      <Text style={[typography.h3, styles.yearText, { color: colors.text }]}>
        {year}
      </Text>

      {/* Badge with cycle number */}
      <View style={[styles.badge, { backgroundColor: seasonColor }]}>
        <Text style={[typography.h3, { color: '#FFFFFF', fontSize: 18 }]}>
          {cycleNumber}
        </Text>
      </View>

      {/* Cycle name */}
      <Text
        style={[typography.body, styles.nameText, { color: colors.text }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {cycleName}
      </Text>

      {/* Chevron */}
      <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  yearText: {
    width: 60,
    fontWeight: '600',
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  nameText: {
    flex: 1,
    fontSize: 16,
  },
});
