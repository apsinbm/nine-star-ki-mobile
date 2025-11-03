import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeArea, Button, Card, StarCircle } from '../src/components';
import { Colors, StarColors } from '../src/theme/colors';
import { Typography } from '../src/theme/typography';
import { Spacing } from '../src/theme/spacing';
import { getStarMetadata, getCombination } from '../lib/data';
import { NineStarKiProfile } from '../types';

export default function Results() {
  const router = useRouter();
  const params = useLocalSearchParams();

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
          <Text style={styles.errorText}>Error: Profile data not found</Text>
        </View>
      </SafeArea>
    );
  }

  const yearStarMeta = getStarMetadata(profile.yearStar);
  const monthStarMeta = getStarMetadata(profile.monthStar);
  const energeticStarMeta = getStarMetadata(profile.energeticStar);
  const combination = getCombination(profile.yearStar, profile.monthStar, profile.energeticStar);

  const formatDate = (dateString: string | Date) => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <SafeArea>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Nine Star Ki Profile</Text>
        </View>

        {/* Three Stars Display */}
        <Card>
          <View style={styles.starsContainer}>
            <View style={styles.starColumn}>
              <StarCircle star={profile.yearStar} label="Principal" />
              <Text style={styles.starLabel}>{yearStarMeta.name}</Text>
            </View>
            <View style={styles.starColumn}>
              <StarCircle star={profile.monthStar} label="Month" />
              <Text style={styles.starLabel}>{monthStarMeta.name}</Text>
            </View>
            <View style={styles.starColumn}>
              <StarCircle star={profile.energeticStar} label="Energetic" />
              <Text style={styles.starLabel}>{energeticStarMeta.name}</Text>
            </View>
          </View>
        </Card>

        {/* Birth Date Info */}
        <Card>
          <Text style={styles.sectionTitle}>Birth Information</Text>
          <Text style={styles.infoText}>
            Birth Date: {formatDate(profile.birthDate)}
          </Text>
        </Card>

        {/* Star Details */}
        <Card>
          <Text style={styles.sectionTitle}>Principal Star Details</Text>
          <Text style={styles.subtitle}>{yearStarMeta.description}</Text>
          <Text style={styles.label}>Element:</Text>
          <Text style={styles.description}>{yearStarMeta.element}</Text>
          <Text style={styles.label}>Direction:</Text>
          <Text style={styles.description}>{yearStarMeta.direction}</Text>
          <Text style={styles.label}>Characteristics:</Text>
          {yearStarMeta.characteristics.map((char, idx) => (
            <Text key={idx} style={styles.bullet}>• {char}</Text>
          ))}
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Month Star Details</Text>
          <Text style={styles.subtitle}>{monthStarMeta.description}</Text>
          <Text style={styles.label}>Element:</Text>
          <Text style={styles.description}>{monthStarMeta.element}</Text>
          <Text style={styles.label}>Direction:</Text>
          <Text style={styles.description}>{monthStarMeta.direction}</Text>
          <Text style={styles.label}>Characteristics:</Text>
          {monthStarMeta.characteristics.map((char, idx) => (
            <Text key={idx} style={styles.bullet}>• {char}</Text>
          ))}
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Energetic Star Details</Text>
          <Text style={styles.subtitle}>{energeticStarMeta.description}</Text>
          <Text style={styles.label}>Element:</Text>
          <Text style={styles.description}>{energeticStarMeta.element}</Text>
          <Text style={styles.label}>Direction:</Text>
          <Text style={styles.description}>{energeticStarMeta.direction}</Text>
          <Text style={styles.label}>Characteristics:</Text>
          {energeticStarMeta.characteristics.map((char, idx) => (
            <Text key={idx} style={styles.bullet}>• {char}</Text>
          ))}
        </Card>

        {combination && (
          <Card>
            <Text style={styles.sectionTitle}>Your Combined Profile</Text>
            <Text style={styles.label}>In Healthy Expression:</Text>
            <Text style={styles.description}>{combination.healthy}</Text>
            <Text style={[styles.label, { marginTop: Spacing.md }]}>Potential Challenges:</Text>
            <Text style={styles.description}>{combination.unhealthy}</Text>
          </Card>
        )}

        <Button
          title="Calculate Another Profile"
          onPress={() => router.push('/calculator')}
          variant="primary"
        />
      </ScrollView>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.md,
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
});
