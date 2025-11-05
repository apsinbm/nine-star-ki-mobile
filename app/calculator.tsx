import { useRouter, Stack } from 'expo-router';
import { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Alert, Platform, ActivityIndicator, Pressable, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Card } from '../src/components';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../src/context/ThemeContext';
import { getTypography } from '../src/theme/typography';
import { Spacing } from '../src/theme/spacing';
import { calculateProfile } from '../lib/calculator';

export default function Calculator() {
  const router = useRouter();
  const { colors } = useTheme();
  const typography = getTypography(colors);
  const [birthDate, setBirthDate] = useState(new Date(2000, 0, 1));
  const [isCalculating, setIsCalculating] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate: any) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    if (selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  const handleCalculate = async () => {
    setIsCalculating(true);
    try {
      const profile = calculateProfile({
        date: birthDate,
        time: '12:00',
        timezone: 'UTC',
      });

      setIsCalculating(false);
      router.push({
        pathname: '/results',
        params: { profile: JSON.stringify(profile) },
      });
    } catch (error) {
      setIsCalculating(false);
      Alert.alert(
        'Calculation Error',
        error instanceof Error ? error.message : 'Unable to calculate profile',
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <View style={[styles.customHeader, { backgroundColor: colors.background }]}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => ({
            flexDirection: 'row',
            alignItems: 'center',
            padding: Spacing.md,
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
      </View>
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <Text style={typography.h1}>Nine Star Ki Calculator</Text>
        </View>

        {/* Your Personal Pattern Section */}
        <Card>
          <Text style={[typography.h3, { color: colors.text, marginBottom: Spacing.sm }]}>
            Your Personal Pattern
          </Text>
          <Text style={[typography.body, { color: colors.text, lineHeight: 24, marginBottom: Spacing.md }]}>
            Nine Star Ki uses your birth date to reveal three numbers that describe your inner design—like a user manual for how you're wired.
          </Text>
          <Text style={[typography.body, { color: colors.text, lineHeight: 24, marginBottom: Spacing.sm }]}>
            Based on the ancient Lo Shu square and the solar calendar, this system has been used for over 4,000 years to understand:
          </Text>
          <View style={styles.bulletList}>
            <Text style={[typography.body, { color: colors.text, lineHeight: 24 }]}>
              •  <Text style={{ fontStyle: 'italic' }}>Your main character</Text> - How you naturally show up in the world
            </Text>
            <Text style={[typography.body, { color: colors.text, lineHeight: 24 }]}>
              •  <Text style={{ fontStyle: 'italic' }}>Your emotional self</Text> - Your emotional core and decision-making style
            </Text>
            <Text style={[typography.body, { color: colors.text, lineHeight: 24 }]}>
              •  <Text style={{ fontStyle: 'italic' }}>How others experience you</Text> - Your outward expression and what you're moving toward
            </Text>
          </View>
        </Card>

        {/* Living in Your Own Rhythm Section */}
        <Card>
          <Text style={[typography.h3, { color: colors.text, marginBottom: Spacing.sm }]}>
            Living in Your Own Rhythm
          </Text>
          <Text style={[typography.body, { color: colors.text, lineHeight: 24, marginBottom: Spacing.md }]}>
            Just as nature moves through seasons—a time to plant and a time to harvest—your life moves through cycles. Based on the ancient Five Element cycles of nature, this system reveals the rhythm of your own energy so you can make better decisions about career, relationships, timing, moves.
          </Text>
          <Text style={[typography.body, { color: colors.text, lineHeight: 24 }]}>
            Understanding these patterns helps you know when to act and when to wait, when to invest and when to conserve. Work with your natural flow instead of against it.
          </Text>
        </Card>

        {/* Why This Calculator Section */}
        <Card>
          <Text style={[typography.h3, { color: colors.text, marginBottom: Spacing.sm }]}>
            Why This Calculator
          </Text>
          <Text style={[typography.body, { color: colors.text, lineHeight: 24, marginBottom: Spacing.md }]}>
            Unlike most online calculators, this one uses the correct solar calendar system (which starts in early February, not January 1st). That's why it actually works.
          </Text>
          <Text style={[typography.body, { color: colors.text, lineHeight: 24 }]}>
            Enter your birth date and discover your three-number pattern—your map for navigating life with less effort and better results.
          </Text>
        </Card>

        {/* Date Picker Card */}
        <Card>
          <Text style={[typography.label, { marginBottom: Spacing.sm }]}>Birth Date</Text>
          {Platform.OS === 'ios' && (
            <>
              <View style={[styles.dateDisplay, { backgroundColor: colors.background }]}>
                <Text style={[typography.h3, { color: colors.primary }]}>
                  {birthDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Text>
              </View>
              <Button
                title="Select Date"
                onPress={() => setShowDatePicker(true)}
                variant="secondary"
              />
              {showDatePicker && (
                <DateTimePicker
                  value={birthDate}
                  mode="date"
                  display="spinner"
                  onChange={handleDateChange}
                  maximumDate={new Date()}
                  textColor={colors.text}
                />
              )}
            </>
          )}
          {Platform.OS === 'android' && (
            <>
              {showDatePicker && (
                <DateTimePicker
                  value={birthDate}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                  maximumDate={new Date()}
                  textColor={colors.text}
                />
              )}
              <Button
                title={birthDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                onPress={() => setShowDatePicker(true)}
                variant="secondary"
              />
            </>
          )}
        </Card>

        <Button
          title={isCalculating ? 'Calculating...' : 'Calculate My Profile'}
          onPress={handleCalculate}
          variant="primary"
          disabled={isCalculating}
        />
        {isCalculating && (
          <ActivityIndicator
            size="large"
            color={colors.primary}
            style={styles.spinner}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  customHeader: {
    paddingTop: Spacing.xs,
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
  dateDisplay: {
    padding: Spacing.md,
    borderRadius: 8,
    marginBottom: Spacing.md,
    alignItems: 'center',
  },
  card: {
    marginVertical: Spacing.md,
  },
  spinner: {
    marginVertical: Spacing.lg,
  },
  bulletList: {
    marginTop: Spacing.sm,
    gap: Spacing.xs,
  },
});
