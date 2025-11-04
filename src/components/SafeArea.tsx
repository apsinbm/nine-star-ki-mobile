import { StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import { Spacing } from '../theme/spacing';

interface SafeAreaProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function SafeArea({ children, style }: SafeAreaProps) {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacing.md,
  },
});
