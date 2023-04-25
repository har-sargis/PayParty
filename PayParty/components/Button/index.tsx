// src/CustomButton.tsx
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface CustomButtonProps extends TouchableOpacityProps {
  type?: 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = 'primary',
  children,
  ...rest
}) => {
  const isPrimary = type === 'primary';

  return isPrimary ? (
    <TouchableOpacity {...rest} style={[styles.shadow]}>
      <LinearGradient
        colors={['#21A7B3', '#37C8C3']}
        style={[styles.button, rest.style,]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={[styles.text, styles.primaryText]}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      {...rest}
      style={[styles.button, styles.secondaryButton, rest.style]}>
      <Text style={[styles.text, styles.secondaryText]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: '#EBF5F5',
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#888888',
    fontSize: 16,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CustomButton;
