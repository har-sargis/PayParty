// src/CustomInput.tsx
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from 'react-native';

interface CustomInputProps extends TextInputProps {
  containerStyle?: ViewProps['style'];
}

const CustomInput: React.FC<CustomInputProps> = ({containerStyle, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    if (rest.onFocus) {
      rest.onFocus(e);
    }
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    if (rest.onBlur) {
      rest.onBlur(e);
    }
  };

  return (
    <View
      style={[
        styles.container,
        isFocused ? styles.focusedContainer : styles.unfocusedContainer,
        containerStyle,
      ]}>
      <TextInput
        {...rest}
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor="#CCDCDC"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: '100%',
  },
  focusedContainer: {
    borderColor: '#23a9b2',
  },
  unfocusedContainer: {
    borderColor: '#CCDCDC',
  },
  input: {
    backgroundColor: 'transparent',
    color: '#23a9b2',
    fontSize: 16,
    width: '100%',
  },
});

export default CustomInput;
