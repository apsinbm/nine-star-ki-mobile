import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeArea, Button, Card, StarCircle } from '../src/components';
import { Colors, StarColors } from '../src/theme/colors';
import { Typography } from '../src/theme/typography';
import { Spacing } from '../src/theme/spacing';
import { getStarMetadata, getCombination } from '../lib/data';
import { NineStarKiProfile } from '../types';

export default function Results() {
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
          <Text style={styles.sectionTitle}>Your Characteristics</Text>
          <Text style={styles.subtitle}>{yearStarMeta.name}</Text>
          <Text style={styles.description}>{yearStarMeta.description}</Text>
        </Card>

        <Button
          title="Calculate Another Profile"
          onPress={() => {}}
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
});
