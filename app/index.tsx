import { useRouter } from 'expo-router';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeArea, Button, Card, ThemeToggle } from '../src/components';
import { useTheme } from '../src/context/ThemeContext';
import { getTypography } from '../src/theme/typography';
import { Spacing } from '../src/theme/spacing';
import { useEffect, useState } from 'react';

const SPLASH_DURATION = 10000; // 10 seconds

export default function Home() {
  const router = useRouter();
  const { colors } = useTheme();
  const typography = getTypography(colors);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashPress = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleSplashPress}
        style={styles.splashContainer}
      >
        <View style={styles.splashContent}>
          <Image
            source={require('@/assets/splash-screen.png')}
            style={styles.splashImage}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeArea>
      <View style={[styles.topBar, { backgroundColor: colors.background, borderBottomColor: colors.border }]}>
        <ThemeToggle />
      </View>
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <Text style={typography.h1}>Nine Star Ki</Text>
          <Text style={[typography.h3, { marginTop: Spacing.xs }]}>Calculate Your Profile</Text>
        </View>

        <Card style={styles.card}>
          <Text style={[typography.h3, { marginBottom: Spacing.sm }]}>Welcome</Text>
          <Text style={typography.body}>
            Discover your Nine Star Ki profile - an ancient system that reveals your personality, strengths, and life path based on your birth date.
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={[typography.h3, { marginBottom: Spacing.sm }]}>How It Works</Text>
          <Text style={typography.body}>
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

        <View style={[styles.footer, { borderTopColor: colors.border }]}>
          <Text style={typography.caption}>Nine Star Ki Calculator</Text>
          <Text style={[typography.label, { marginTop: Spacing.xs }]}>Based on traditional solar calendar calculations</Text>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.md,
  },
  header: {
    alignItems: 'center',
    marginVertical: Spacing.lg,
  },
  card: {
    marginVertical: Spacing.sm,
  },
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
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  splashImage: {
    width: '100%',
    height: '100%',
    maxWidth: Dimensions.get('window').width,
    maxHeight: Dimensions.get('window').height,
  },
  disabledOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
});
