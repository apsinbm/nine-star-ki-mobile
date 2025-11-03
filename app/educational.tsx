import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeArea, Card } from '../src/components';
import { Colors } from '../src/theme/colors';
import { Typography } from '../src/theme/typography';
import { Spacing } from '../src/theme/spacing';

export default function Educational() {
  return (
    <SafeArea>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Learn About Nine Star Ki</Text>
        </View>

        <Card>
          <Text style={styles.sectionTitle}>What is Nine Star Ki?</Text>
          <Text style={styles.text}>
            Nine Star Ki is an ancient divination system based on the Chinese solar calendar. It uses numbers 1-9 to describe personality traits, strengths, and life patterns.
          </Text>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>The Three Stars</Text>
          <Text style={styles.subtitle}>Principal Star (Year)</Text>
          <Text style={styles.text}>
            Your outward personality and main character traits. Determined by your birth year and represents how you present yourself to the world.
          </Text>
          <Text style={styles.subtitle}>Month Star</Text>
          <Text style={styles.text}>
            Your inner nature and emotional tendencies. This reflects your inner world, relationships, and how you process feelings.
          </Text>
          <Text style={styles.subtitle}>Energetic Star</Text>
          <Text style={styles.text}>
            Your action style and how you engage with challenges. This shows your energy patterns and the way you take action in life.
          </Text>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>The Solar Calendar</Text>
          <Text style={styles.text}>
            Nine Star Ki uses the solar calendar, not the Gregorian calendar. The solar year begins at Li Chun (Start of Spring), around February 4th each year.
          </Text>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Elements</Text>
          <Text style={styles.text}>
            Each star is associated with one of five elements: Water, Wood, Fire, Earth, and Metal. Elements represent different qualities and energies.
          </Text>
        </Card>
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
});
