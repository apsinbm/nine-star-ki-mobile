import React, { useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { NineStarKiProfile } from '../types/nine-star-ki';
import { getAllYearCycles, getCurrentSolarYear } from '../lib/calculator/year-cycle-calculator';
import { YearCycleListItem } from '../src/components/YearCycleListItem';
import { useTheme } from '../src/context/ThemeContext';
import { getTypography } from '../src/theme/typography';
import { Spacing } from '../src/theme/spacing';

/**
 * Year Cycles Screen
 *
 * Displays a scrollable list of all years in the user's 9-year cycle timeline,
 * from their birth year through 30 years into the future.
 */
export default function YearCyclesScreen() {
  const { profile: profileParam } = useLocalSearchParams();
  const router = useRouter();
  const { colors } = useTheme();
  const typography = getTypography(colors);

  // Parse the profile from query params
  const profile: NineStarKiProfile | null = useMemo(() => {
    if (!profileParam) return null;
    try {
      return typeof profileParam === 'string'
        ? JSON.parse(profileParam)
        : null;
    } catch (error) {
      console.error('Error parsing profile:', error);
      return null;
    }
  }, [profileParam]);

  // Generate all year cycles
  const yearCycles = useMemo(() => {
    if (!profile) return [];

    const birthYear = new Date(profile.birthDate).getFullYear();
    return getAllYearCycles(profile.yearStar, birthYear, 30);
  }, [profile]);

  // Get current solar year for highlighting
  const currentSolarYear = getCurrentSolarYear(new Date());

  if (!profile) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Stack.Screen
          options={{
            title: 'Year Cycles',
            headerStyle: { backgroundColor: colors.surface },
            headerTintColor: colors.text,
            headerShadowVisible: false,
          }}
        />
        <View style={styles.errorContainer}>
          <Text style={[typography.body, { color: colors.text }]}>
            Error: Profile data not found
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Yearly Cycles',
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.text,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 16,
                backgroundColor: 'transparent',
              }}
              activeOpacity={0.6}
            >
              <Ionicons name="chevron-back" size={24} color={colors.text} />
              <Text style={{ color: colors.text, fontSize: 17, marginLeft: 4 }}>Back</Text>
            </TouchableOpacity>
          ),
        }}
      />

      {/* Header description */}
      <View style={[styles.headerContainer, { backgroundColor: colors.surface }]}>
        <Text style={[typography.h3, { color: colors.text, marginBottom: Spacing.xs }]}>
          Your Nine-Year Cycle
        </Text>
        <Text style={[typography.body, { color: colors.textSecondary, lineHeight: 22 }]}>
          Each year, your life moves through a distinct rhythm in a repeating nine-year cycle.
          Tap any year to view detailed guidance.
        </Text>
      </View>

      {/* Year list */}
      <FlatList
        data={yearCycles}
        keyExtractor={(item) => item.calendarYear.toString()}
        renderItem={({ item }) => (
          <YearCycleListItem
            year={item.calendarYear}
            cycleNumber={item.cycleNumber}
            cycleName={item.cycleData.name}
            season={item.cycleData.season}
            isCurrentYear={item.solarYear === currentSolarYear}
            onPress={() => {
              router.push({
                pathname: '/year-cycle-detail',
                params: {
                  year: item.calendarYear.toString(),
                  cycleNumber: item.cycleNumber.toString(),
                  cycleName: item.cycleData.name,
                  element: item.cycleData.element,
                  direction: item.cycleData.direction,
                  season: item.cycleData.season,
                  keywords: JSON.stringify(item.cycleData.keywords),
                  theme: item.cycleData.theme,
                  guidance: item.cycleData.guidance,
                },
              });
            }}
          />
        )}
        initialScrollIndex={
          yearCycles.findIndex((item) => item.solarYear === currentSolarYear)
        }
        getItemLayout={(data, index) => ({
          length: 72, // Approximate height of each item
          offset: 72 * index,
          index,
        })}
        onScrollToIndexFailed={(info) => {
          // Fallback if initial scroll fails
          setTimeout(() => {
            if (info.index >= 0 && info.index < yearCycles.length) {
              // Scroll to the index after a delay
            }
          }, 100);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
});
