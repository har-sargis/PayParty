// src/Separator.tsx
import React from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';

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
}) => {
  return (
    <View {...rest} style={[styles.container, style, {width}, ]}>
      <View style={[styles.line, {height}, dark && styles.dark]} />
      {text && <Text style={[styles.text, dark && styles.darkText]}>{text}</Text>}
      <View style={[styles.line, {height}, dark && styles.dark]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  text: {
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#FFFFFF',
  },
  dark: {
    backgroundColor: '#CCDCDC',
  },
  darkText: {
    color: '#CCDCDC',
  },
});

export default Separator;
