import { useRouter } from 'expo-router';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeArea, Button, Card } from '../src/components';
import { Colors } from '../src/theme/colors';
import { Typography } from '../src/theme/typography';
import { Spacing } from '../src/theme/spacing';

export default function Home() {
  const router = useRouter();

  return (
    <SafeArea>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Nine Star Ki</Text>
          <Text style={styles.subtitle}>Calculate Your Profile</Text>
        </View>

        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Welcome</Text>
          <Text style={styles.description}>
            Discover your Nine Star Ki profile - an ancient system that reveals your personality, strengths, and life path based on your birth date.
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <Text style={styles.description}>
            Enter your birth date and we'll calculate your three stars: Principal (your character), Month (your inner nature), and Energetic (your action style).
          </Text>
        </Card>

        <View style={styles.buttonContainer}>
          <Button
            title="Calculate My Profile"
            onPress={() => router.push('/calculator')}
            variant="primary"
          />
          <Button
            title="Learn More"
            onPress={() => router.push('/educational')}
            variant="secondary"
            style={styles.secondaryButton}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Nine Star Ki Calculator</Text>
          <Text style={styles.footerSubtext}>Based on traditional solar calendar calculations</Text>
        </View>
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
  subtitle: {
    ...Typography.h3,
    color: Colors.textSecondary,
  },
  card: {
    marginVertical: Spacing.sm,
  },
  sectionTitle: {
    ...Typography.h3,
    marginBottom: Spacing.sm,
  },
  description: Typography.body,
  buttonContainer: {
    marginVertical: Spacing.lg,
  },
  secondaryButton: {
    marginTop: Spacing.sm,
  },
  footer: {
    alignItems: 'center',
    marginVertical: Spacing.xl,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  footerText: {
    ...Typography.caption,
    color: Colors.primary,
  },
  footerSubtext: {
    ...Typography.label,
    marginTop: Spacing.xs,
  },
});
