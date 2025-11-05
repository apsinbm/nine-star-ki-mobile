import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { SafeArea, Button, Card, StarCircle, YearCycleCard } from '../src/components';
import { Colors, StarColors } from '../src/theme/colors';
import { Typography, getTypography } from '../src/theme/typography';
import { Spacing } from '../src/theme/spacing';
import { useTheme } from '../src/context/ThemeContext';
import { getStarMetadata, getCombination } from '../lib/data';
import { getCurrentYearCycle } from '../lib/calculator/year-cycle-calculator';
import type { NineStarKiProfile, StarNumber } from '../types/nine-star-ki';

export default function Results() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { colors } = useTheme();
  const typography = getTypography(colors);

  let profile: NineStarKiProfile | null = null;

  try {
    if (params.profile && typeof params.profile === 'string') {
      profile = JSON.parse(params.profile);
    }
  } catch (error) {
    console.error('Failed to parse profile:', error);
  }

  if (!profile) {
    return (
      <SafeArea>
        <View style={styles.errorContainer}>
          <Text style={[typography.h3, { color: Colors.error }]}>Error: Profile data not found</Text>
        </View>
      </SafeArea>
    );
  }

  const yearStarMeta = getStarMetadata(profile.yearStar);
  const monthStarMeta = getStarMetadata(profile.monthStar);
  const energeticStarMeta = getStarMetadata(profile.energeticStar);
  const combination = getCombination(profile.yearStar, profile.monthStar, profile.energeticStar);

  // Get the current year cycle for the user
  const currentYearCycle = getCurrentYearCycle(profile.principalStar as StarNumber, new Date());

  const formatDate = (dateString: string | Date) => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const openExternalLink = (url: string) => {
    Linking.openURL(url).catch(() => {
      console.error('Failed to open URL:', url);
    });
  };

  return (
    <SafeArea>
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <Text style={typography.h1}>Your Nine Star Ki Profile</Text>
        </View>

        {/* Three Stars Display */}
        <Card>
          <View style={styles.starsContainer}>
            <View style={styles.starColumn}>
              <StarCircle star={profile.yearStar} />
              <Text style={[styles.descriptiveLabel, { color: colors.text, marginTop: Spacing.sm }]}>Main Number</Text>
            </View>
            <View style={styles.starColumn}>
              <StarCircle star={profile.monthStar} />
              <Text style={[styles.descriptiveLabel, { color: colors.text, marginTop: Spacing.sm }]}>Emotional Self</Text>
            </View>
            <View style={styles.starColumn}>
              <StarCircle star={profile.energeticStar} />
              <Text style={[styles.descriptiveLabel, { color: colors.text, marginTop: Spacing.sm }]}>Life Challenge</Text>
              <Text style={[styles.descriptiveLabel, { color: colors.text }]}>& True Calling</Text>
            </View>
          </View>
        </Card>

        {/* Birth Date Info */}
        <Card>
          <Text style={typography.h3}>Birth Information</Text>
          <Text style={[typography.body, { marginTop: Spacing.sm }]}>
            Birth Date: {formatDate(profile.birthDate)}
          </Text>
        </Card>

        {/* Star Details */}
        <Card>
          <Text style={typography.h3}>Your Main Number Details</Text>
          <Text style={[typography.h4, { color: colors.primary, marginVertical: Spacing.sm }]}>{yearStarMeta.description}</Text>
          <Text style={[typography.label, { marginTop: Spacing.md, marginBottom: Spacing.sm, fontWeight: '600' }]}>Element:</Text>
          <Text style={[typography.body, { lineHeight: 24 }]}>{yearStarMeta.element}</Text>
          <Text style={[typography.label, { marginTop: Spacing.md, marginBottom: Spacing.sm, fontWeight: '600' }]}>Direction:</Text>
          <Text style={[typography.body, { lineHeight: 24 }]}>{yearStarMeta.direction}</Text>
          <Text style={[typography.label, { marginTop: Spacing.md, marginBottom: Spacing.sm, fontWeight: '600' }]}>Characteristics:</Text>
          {yearStarMeta.characteristics.map((char: string, idx: number) => (
            <Text key={idx} style={[typography.body, { marginLeft: Spacing.md, marginVertical: Spacing.xs }]}>• {char}</Text>
          ))}
        </Card>

        <Card>
          <Text style={typography.h3}>Your Emotional Self Details</Text>
          <Text style={[typography.h4, { color: colors.primary, marginVertical: Spacing.sm }]}>{monthStarMeta.description}</Text>
          <Text style={[typography.label, { marginTop: Spacing.md, marginBottom: Spacing.sm, fontWeight: '600' }]}>Element:</Text>
          <Text style={[typography.body, { lineHeight: 24 }]}>{monthStarMeta.element}</Text>
          <Text style={[typography.label, { marginTop: Spacing.md, marginBottom: Spacing.sm, fontWeight: '600' }]}>Direction:</Text>
          <Text style={[typography.body, { lineHeight: 24 }]}>{monthStarMeta.direction}</Text>
          <Text style={[typography.label, { marginTop: Spacing.md, marginBottom: Spacing.sm, fontWeight: '600' }]}>Characteristics:</Text>
          {monthStarMeta.characteristics.map((char: string, idx: number) => (
            <Text key={idx} style={[typography.body, { marginLeft: Spacing.md, marginVertical: Spacing.xs }]}>• {char}</Text>
          ))}
        </Card>

        <Card>
          <Text style={typography.h3}>Your Life Challenge &</Text>
          <Text style={typography.h3}>Your True Calling Details</Text>
          <Text style={[typography.h4, { color: colors.primary, marginVertical: Spacing.sm }]}>{energeticStarMeta.description}</Text>
          <Text style={[typography.label, { marginTop: Spacing.md, marginBottom: Spacing.sm, fontWeight: '600' }]}>Element:</Text>
          <Text style={[typography.body, { lineHeight: 24 }]}>{energeticStarMeta.element}</Text>
          <Text style={[typography.label, { marginTop: Spacing.md, marginBottom: Spacing.sm, fontWeight: '600' }]}>Direction:</Text>
          <Text style={[typography.body, { lineHeight: 24 }]}>{energeticStarMeta.direction}</Text>
          <Text style={[typography.label, { marginTop: Spacing.md, marginBottom: Spacing.sm, fontWeight: '600' }]}>Characteristics:</Text>
          {energeticStarMeta.characteristics.map((char: string, idx: number) => (
            <Text key={idx} style={[typography.body, { marginLeft: Spacing.md, marginVertical: Spacing.xs }]}>• {char}</Text>
          ))}
        </Card>

        {combination && (
          <Card>
            <Text style={typography.h3}>Your Combined Profile</Text>
            <Text style={[typography.label, { marginTop: Spacing.md, marginBottom: Spacing.sm, fontWeight: '600' }]}>In Healthy Expression:</Text>
            <Text style={[typography.body, { lineHeight: 24 }]}>{combination.healthy}</Text>
            <Text style={[typography.label, { marginTop: Spacing.md, marginBottom: Spacing.sm, fontWeight: '600' }]}>Potential Challenges:</Text>
            <Text style={[typography.body, { lineHeight: 24 }]}>{combination.unhealthy}</Text>
          </Card>
        )}

        {/* Current Year Cycle */}
        <View style={styles.yearCycleSection}>
          <Text style={[typography.h2, { textAlign: 'center', marginBottom: Spacing.md, color: colors.text }]}>
            Your Current Year Cycle
          </Text>
          <Text style={[typography.body, { textAlign: 'center', marginBottom: Spacing.lg, color: colors.textSecondary, lineHeight: 24 }]}>
            Each year, your life moves through a distinct rhythm in a repeating nine-year cycle that begins near February 4. As one energy fades and another rises, awareness of this flow helps you plan actions and rest in harmony with natural timing.
          </Text>
          <YearCycleCard
            cycle={currentYearCycle}
            showSolarYear={true}
            solarYear={profile.solarYear}
          />
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: '/year-cycles',
                params: {
                  profile: JSON.stringify(profile),
                },
              });
            }}
            style={[styles.viewAllButton, { backgroundColor: colors.accent }]}
            activeOpacity={0.8}
          >
            <Text style={[typography.label, { color: '#FFFFFF', textAlign: 'center', fontWeight: '600', fontSize: 16 }]}>
              View All Years in Your Cycle
            </Text>
          </TouchableOpacity>
        </View>

        <Card>
          <Text style={typography.h3}>Explore More</Text>
          <Text style={[typography.body, { marginVertical: Spacing.sm, lineHeight: 24 }]}>
            Interested in deepening your understanding and creating space for personal growth? Visit Make Space For More to discover tools and insights that support your journey.
          </Text>
          <TouchableOpacity
            onPress={() => openExternalLink('https://www.makespaceformore.com')}
            style={[styles.linkButton, { backgroundColor: colors.primary }]}
            activeOpacity={0.8}
          >
            <Text style={[typography.label, { color: colors.background, textAlign: 'center', fontWeight: '600', fontSize: 16 }]}>
              Learn More →
            </Text>
          </TouchableOpacity>
        </Card>

        <Button
          title="Calculate Another Profile"
          onPress={() => router.push('/calculator')}
          variant="primary"
        />
        <Button
          title="Home"
          onPress={() => router.push('/')}
          variant="secondary"
          style={styles.homeButton}
        />
      </ScrollView>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.md,
  },
  homeButton: {
    marginTop: Spacing.sm,
  },
  header: {
    alignItems: 'center',
    marginVertical: Spacing.lg,
  },
  title: Typography.h1,
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: Spacing.md,
  },
  starColumn: {
    alignItems: 'center',
  },
  starLabel: {
    ...Typography.label,
    marginTop: Spacing.sm,
    textAlign: 'center',
  },
  sectionTitle: {
    ...Typography.h3,
    marginBottom: Spacing.md,
  },
  subtitle: {
    ...Typography.h4,
    color: Colors.primary,
    marginVertical: Spacing.sm,
  },
  infoText: Typography.body,
  description: {
    ...Typography.body,
    lineHeight: 24,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  errorText: {
    ...Typography.h3,
    color: Colors.error,
    textAlign: 'center',
  },
  label: {
    ...Typography.label,
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
    fontWeight: '600',
  },
  bullet: {
    ...Typography.body,
    marginLeft: Spacing.md,
    marginVertical: Spacing.xs,
  },
  descriptiveLabel: {
    ...Typography.label,
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 15,
  },
  linkButton: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: 12,
    marginVertical: Spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAllButton: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: 12,
    marginTop: Spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yearCycleSection: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.lg,
  },
});
