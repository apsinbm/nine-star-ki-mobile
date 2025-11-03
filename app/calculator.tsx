import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Alert, Platform, ActivityIndicator } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeArea, Button, Card } from '../src/components';
import { Colors } from '../src/theme/colors';
import { Typography } from '../src/theme/typography';
import { Spacing } from '../src/theme/spacing';
import { calculateProfile } from '../lib/calculator';

export default function Calculator() {
  const router = useRouter();
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
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Enter Your Birth Date</Text>
        </View>

        <Card>
          <Text style={styles.label}>Birth Date</Text>
          {Platform.OS === 'ios' && (
            <>
              <View style={styles.dateDisplay}>
                <Text style={styles.dateText}>
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
          <Text style={styles.description}>
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
            color={Colors.primary}
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
    padding: Spacing.md,
  },
  header: {
    alignItems: 'center',
    marginVertical: Spacing.lg,
  },
  title: Typography.h2,
  label: {
    ...Typography.label,
    marginBottom: Spacing.sm,
  },
  dateDisplay: {
    padding: Spacing.md,
    backgroundColor: Colors.background,
    borderRadius: 8,
    marginBottom: Spacing.md,
    alignItems: 'center',
  },
  dateText: {
    ...Typography.h3,
    color: Colors.primary,
  },
  card: {
    marginVertical: Spacing.md,
  },
  description: Typography.body,
  spinner: {
    marginVertical: Spacing.lg,
  },
});
