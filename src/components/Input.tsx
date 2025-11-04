import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Spacing } from '../theme/spacing';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  editable?: boolean;
  style?: ViewStyle;
}

export default function Input({
  label,
  value,
  onChangeText,
  placeholder,
  editable = true,
  style,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useTheme();

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: isFocused ? colors.accent : colors.border,
            backgroundColor: isFocused ? colors.accentLight : colors.background,
            color: colors.text,
            borderWidth: isFocused ? 2 : 1,
          },
          !editable && { backgroundColor: colors.surface, color: colors.textSecondary, opacity: 0.6 },
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable}
        placeholderTextColor={colors.textSecondary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.sm,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: Spacing.sm,
    lineHeight: 20,
  },
  input: {
    borderRadius: 8,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.md,
    fontSize: 16,
    lineHeight: 24,
    minHeight: 48,
  },
});
