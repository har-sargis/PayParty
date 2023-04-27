// src/Separator.tsx
import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';

interface SeparatorProps extends ViewProps {
  text?: string;
  width?: number | string;
  height?: number | string;
  dark?: boolean;
}

const Separator: React.FC<SeparatorProps> = ({
  text,
  style,
  height = 1,
  width = '100%',
  dark,
  ...rest
}) => (
  <View {...rest} style={[styles.container, style, { width }]}>
    <View style={[styles.line, { height }, dark && styles.dark]} />
    {text && (
    <Text style={[styles.text, dark && styles.darkText]}>{text}</Text>
    )}
    <View style={[styles.line, { height }, dark && styles.dark]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  dark: {
    backgroundColor: '#CCDCDC',
  },
  darkText: {
    color: '#CCDCDC',
  },
  line: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    flex: 1,
    height: 1,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 8,
  },
});

export default Separator;
