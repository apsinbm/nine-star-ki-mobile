import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Spacing } from '../theme/spacing';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
  disabled?: boolean;
  accessibilityLabel?: string;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  style,
  disabled,
  accessibilityLabel,
}: ButtonProps) {
  const { colors } = useTheme();
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel || title}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: isPrimary ? colors.accent : colors.surface,
          borderColor: colors.border,
          borderWidth: isPrimary ? 0 : 1,
        },
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={[styles.text, { color: isPrimary ? '#FFFFFF' : colors.primary }]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: 8,
    alignItems: 'center',
    minHeight: 52,
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
});
