import { View, Text, StyleSheet } from 'react-native';
import { StarColors, Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';

interface StarCircleProps {
  star: number;
  label?: string;
}

export default function StarCircle({ star, label }: StarCircleProps) {
  const color = StarColors[star as keyof typeof StarColors] || Colors.textSecondary;

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: color }]}>
        <Text style={styles.starText}>{star}</Text>
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
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
  },
  label: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
