import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Spacing } from '../theme/spacing';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function Card({ children, style }: CardProps) {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.surface }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: Spacing.md,
    marginVertical: Spacing.md,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
});
