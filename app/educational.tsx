import { useRouter } from 'expo-router';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeArea, Card, Button } from '../src/components';
import { Colors } from '../src/theme/colors';
import { Typography, getTypography } from '../src/theme/typography';
import { Spacing } from '../src/theme/spacing';
import { useTheme } from '../src/context/ThemeContext';

export default function Educational() {
  const router = useRouter();
  const { colors } = useTheme();
  const typography = getTypography(colors);

  return (
    <SafeArea>
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <Text style={typography.h1}>Learn About Nine Star Ki</Text>
        </View>

        <Card>
          <Text style={typography.h3}>What is Nine Star Ki?</Text>
          <Text style={[typography.body, { marginTop: Spacing.sm }]}>
            Nine Star Ki is an ancient divination system based on the Chinese solar calendar. It uses numbers 1-9 to describe personality traits, strengths, and life patterns.
          </Text>
        </Card>

        <Card>
          <Text style={typography.h3}>The Three Stars</Text>
          <Text style={[typography.h4, { color: colors.primary, marginTop: Spacing.md, marginBottom: Spacing.xs }]}>Principal Star (Year)</Text>
          <Text style={[typography.body, { marginBottom: Spacing.md }]}>
            Your outward personality and main character traits. Determined by your birth year and represents how you present yourself to the world.
          </Text>
          <Text style={[typography.h4, { color: colors.primary, marginTop: Spacing.md, marginBottom: Spacing.xs }]}>Month Star</Text>
          <Text style={[typography.body, { marginBottom: Spacing.md }]}>
            Your inner nature and emotional tendencies. This reflects your inner world, relationships, and how you process feelings.
          </Text>
          <Text style={[typography.h4, { color: colors.primary, marginTop: Spacing.md, marginBottom: Spacing.xs }]}>Energetic Star</Text>
          <Text style={typography.body}>
            Your action style and how you engage with challenges. This shows your energy patterns and the way you take action in life.
          </Text>
        </Card>

        <Card>
          <Text style={typography.h3}>The Solar Calendar</Text>
          <Text style={[typography.body, { marginTop: Spacing.sm }]}>
            Nine Star Ki uses the solar calendar, not the Gregorian calendar. The solar year begins at Li Chun (Start of Spring), around February 4th each year.
          </Text>
        </Card>

        <Card>
          <Text style={typography.h3}>Elements</Text>
          <Text style={[typography.body, { marginTop: Spacing.sm }]}>
            Each star is associated with one of five elements: Water, Wood, Fire, Earth, and Metal. Elements represent different qualities and energies.
          </Text>
        </Card>

        <Button
          title="Back to Home"
          onPress={() => router.back()}
          variant="primary"
          style={styles.backButton}
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
  sectionTitle: {
    ...Typography.h3,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    ...Typography.h4,
    marginTop: Spacing.md,
    marginBottom: Spacing.xs,
    color: Colors.primary,
  },
  text: Typography.body,
  backButton: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.md,
  },
});
