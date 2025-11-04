import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Alert, Platform, ActivityIndicator } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeArea, Button, Card } from '../src/components';
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
    <SafeArea>
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <Text style={typography.h2}>Enter Your Birth Date</Text>
        </View>

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

        <Card style={styles.card}>
          <Text style={typography.body}>
            Your Nine Star Ki profile will be calculated based on your birth date according to the traditional solar calendar system.
          </Text>
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
    </SafeArea>
  );
}

const styles = StyleSheet.create({
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
});
