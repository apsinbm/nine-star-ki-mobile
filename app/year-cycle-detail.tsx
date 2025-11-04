import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../src/context/ThemeContext';
import { SeasonColors, DarkSeasonColors } from '../src/theme/colors';
import { getTypography } from '../src/theme/typography';
import { Spacing } from '../src/theme/spacing';

/**
 * Year Cycle Detail Screen
 *
 * Displays comprehensive information about a specific year in the nine-year cycle:
 * - Year and date range
 * - Large cycle number badge
 * - Element, Season, Direction, Keyword
 * - Full theme and guidance text
 */
export default function YearCycleDetailScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { isDarkMode, colors } = useTheme();
  const typography = getTypography(colors);

  // Parse params
  const year = params.year as string;
  const cycleNumber = params.cycleNumber as string;
  const cycleName = params.cycleName as string;
  const element = params.element as string;
  const direction = params.direction as string;
  const season = params.season as string;
  const keywords = params.keywords
    ? JSON.parse(params.keywords as string)
    : [];
  const theme = params.theme as string;
  const guidance = params.guidance as string;

  // Get seasonal color
  const seasonalColors = isDarkMode ? DarkSeasonColors : SeasonColors;
  const seasonColor = seasonalColors[season as keyof typeof seasonalColors] || colors.accent;

  // Calculate year period (Feb 4 to Feb 3)
  const yearNum = parseInt(year);
  const startDate = `February 4, ${yearNum}`;
  const endDate = `February 3, ${yearNum + 1}`;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: year,
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.text,
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => ({
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 16,
                opacity: pressed ? 0.5 : 1,
              })}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons
                name="chevron-back"
                size={24}
                color={colors.text}
              />
              <Text style={{
                color: colors.text,
                fontSize: 17,
                marginLeft: 4,
              }}>
                Back
              </Text>
            </Pressable>
          ),
        }}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={[styles.headerSection, { backgroundColor: colors.surface }]}>
          <Text style={[typography.h3, { color: colors.text, textAlign: 'center' }]}>
            Nine Star Ki Year Reading
          </Text>
          <Text
            style={[
              typography.body,
              { color: colors.textSecondary, textAlign: 'center', marginTop: Spacing.xs },
            ]}
          >
            {startDate} to {endDate}
          </Text>
        </View>

        {/* Large cycle number badge */}
        <View style={styles.badgeContainer}>
          <View style={[styles.largeBadge, { backgroundColor: seasonColor }]}>
            <Text style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 'bold' }}>
              {cycleNumber}
            </Text>
          </View>
        </View>

        {/* Cycle name */}
        <Text style={[typography.h2, { color: colors.text, textAlign: 'center', marginTop: Spacing.lg, paddingHorizontal: Spacing.lg }]}>
          {cycleName}
        </Text>

        {/* Metadata section */}
        <View style={styles.metadataSection}>
          {/* Element */}
          <View style={styles.metadataItem}>
            <Text style={[typography.label, { color: colors.textSecondary, fontWeight: '600' }]}>
              Element
            </Text>
            <Text style={[typography.body, { color: colors.text, marginTop: 4 }]}>
              {element}
            </Text>
          </View>

          {/* Season */}
          <View style={styles.metadataItem}>
            <Text style={[typography.label, { color: colors.textSecondary, fontWeight: '600' }]}>
              Season
            </Text>
            <Text style={[typography.body, { color: colors.text, marginTop: 4 }]}>
              {season}
            </Text>
          </View>

          {/* Direction */}
          <View style={styles.metadataItem}>
            <Text style={[typography.label, { color: colors.textSecondary, fontWeight: '600' }]}>
              Direction
            </Text>
            <Text style={[typography.body, { color: colors.text, marginTop: 4 }]}>
              {direction}
            </Text>
          </View>

          {/* Keyword */}
          <View style={styles.metadataItem}>
            <Text style={[typography.label, { color: colors.textSecondary, fontWeight: '600' }]}>
              Keywords
            </Text>
            <Text style={[typography.body, { color: colors.text, marginTop: 4 }]}>
              {keywords.join(', ')}
            </Text>
          </View>
        </View>

        {/* Theme section */}
        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <Text style={[typography.h3, { color: colors.text, marginBottom: Spacing.sm }]}>
            Theme
          </Text>
          <Text style={[typography.body, { color: colors.text, lineHeight: 26 }]}>
            {theme}
          </Text>
        </View>

        {/* Guidance section */}
        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <Text style={[typography.h3, { color: colors.text, marginBottom: Spacing.sm }]}>
            Guidance
          </Text>
          <Text style={[typography.body, { color: colors.text, lineHeight: 26 }]}>
            {guidance}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.xl,
  },
  headerSection: {
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  badgeContainer: {
    alignItems: 'center',
    marginTop: Spacing.xl,
    marginBottom: Spacing.md,
  },
  largeBadge: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  metadataSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xl,
    marginBottom: Spacing.lg,
  },
  metadataItem: {
    width: '50%',
    marginBottom: Spacing.md,
  },
  section: {
    marginTop: Spacing.md,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
});
