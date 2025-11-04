import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Spacing } from '../theme/spacing';

interface ThemeToggleProps {
  style?: any;
}

export default function ThemeToggle({ style }: ThemeToggleProps) {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <Pressable
      onPress={toggleTheme}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
        pressed && { opacity: 0.7 },
        style,
      ]}
      accessibilityLabel="Toggle dark mode"
      accessibilityRole="switch"
      accessibilityState={{ checked: isDarkMode }}
    >
      <Text style={[styles.icon, { color: colors.text }]}>
        {isDarkMode ? '☀️' : '🌙'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  icon: {
    fontSize: 20,
  },
});
