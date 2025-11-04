import { View, Text, StyleSheet, AccessibilityInfo } from 'react-native';
import { StarColors, Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';

interface StarCircleProps {
  star: number;
  label?: string;
}

export default function StarCircle({ star, label }: StarCircleProps) {
  const color = StarColors[star as keyof typeof StarColors] || Colors.textSecondary;
  const accessibilityLabel = `Star ${star}${label ? `, ${label}` : ''}`;

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
    >
      <View style={[styles.circle, { backgroundColor: color }]}>
        <Text
          style={styles.starText}
          allowFontScaling={true}
          maxFontSizeMultiplier={1.3}
        >
          {star}
        </Text>
      </View>
      {label && (
        <Text style={styles.label} allowFontScaling={true}>
          {label}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: Spacing.sm,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  starText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.background,
    lineHeight: 40,
  },
  label: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
  },
});
