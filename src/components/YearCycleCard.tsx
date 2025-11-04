import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { YearCycle } from '../../types/year-cycles';
import Card from './Card';
import { useTheme } from '../context/ThemeContext';
import { SeasonColors, DarkSeasonColors } from '../theme/colors';
import { Typography, getTypography } from '../theme/typography';
import { Spacing } from '../theme/spacing';

interface YearCycleCardProps {
  cycle: YearCycle;
  showSolarYear?: boolean;
  solarYear?: number;
}

/**
 * YearCycleCard Component
 *
 * Displays a year cycle with its theme, season, keywords, and guidance.
 * Supports light and dark mode with seasonal color accents.
 */
export function YearCycleCard({ cycle, showSolarYear, solarYear }: YearCycleCardProps) {
  const { isDarkMode, colors } = useTheme();
  const typography = getTypography(colors);

  // Get the seasonal color based on theme
  const seasonalColors = isDarkMode ? DarkSeasonColors : SeasonColors;
  const seasonColor = seasonalColors[cycle.season as keyof typeof seasonalColors] || colors.accent;

  return (
    <Card style={styles.container}>
      {/* Header with Year Number and Name */}
      <View style={styles.header}>
        <View style={[styles.yearBadge, { backgroundColor: seasonColor }]}>
          <Text style={[typography.h2, { color: '#FFFFFF' }]}>
            {cycle.number}
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={[typography.h3, { color: colors.text }]}>
            {cycle.name}
          </Text>
          {showSolarYear && solarYear && (
            <Text style={[typography.label, { color: colors.textSecondary }]}>
              Solar Year {solarYear}
            </Text>
          )}
        </View>
      </View>

      {/* Season */}
      <View style={styles.seasonContainer}>
        <Text style={[typography.label, { color: seasonColor, fontWeight: '600' }]}>
          {cycle.season}
        </Text>
      </View>

      {/* Theme */}
      <Text style={[typography.body, { color: colors.text, marginTop: Spacing.sm, lineHeight: 24 }]}>
        {cycle.theme}
      </Text>

      {/* Keywords */}
      <View style={styles.keywordsContainer}>
        {cycle.keywords.map((keyword, index) => (
          <View
            key={index}
            style={[
              styles.keywordBadge,
              {
                backgroundColor: isDarkMode ? colors.surface : colors.accentLight,
                borderColor: seasonColor,
              },
            ]}
          >
            <Text style={[typography.label, { color: colors.text, fontSize: 12 }]}>
              {keyword}
            </Text>
          </View>
        ))}
      </View>

      {/* Guidance */}
      <View style={styles.guidanceContainer}>
        <Text style={[typography.label, { color: colors.textSecondary, fontWeight: '600', marginBottom: Spacing.xs }]}>
          Guidance
        </Text>
        <Text style={[typography.body, { color: colors.text, lineHeight: 24, fontStyle: 'italic' }]}>
          {cycle.guidance}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  yearBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  titleContainer: {
    flex: 1,
  },
  seasonContainer: {
    marginBottom: Spacing.sm,
  },
  keywordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: Spacing.md,
    marginBottom: Spacing.md,
    gap: Spacing.sm,
  },
  keywordBadge: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: 16,
    borderWidth: 1,
  },
  guidanceContainer: {
    marginTop: Spacing.md,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
});
