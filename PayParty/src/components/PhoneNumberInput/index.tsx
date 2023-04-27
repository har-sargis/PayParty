import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';

import CustomInput from '../Input';

interface IProps {
  style?: any;
  handleChange?: (code: Country) => void;
  handlePhoneChange?: (number: string) => void;
}

function PhoneNumberInput({ style, handleChange, handlePhoneChange }: IProps) {
  const [countryCode, setCountryCode] = useState<CountryCode>('AM');
  const [callingCode, setCallingCode] = useState<string>('374');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [show, setShow] = useState(false);

  const handelSelect = useCallback(
    (country: Country) => {
      setCountryCode(country.cca2);
      setCallingCode(country.callingCode[0]);
      handleChange?.(country);
    },
    [handleChange],
  );

  const changePhoneText = useCallback(
    (text: string) => {
      setPhoneNumber(text);
      handlePhoneChange?.(text);
    },
    [handlePhoneChange],
  );

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={() => setShow(true)}>
        <Text style={styles.code}>{callingCode}</Text>
      </TouchableOpacity>
      <CountryPicker
        countryCode={countryCode}
        withFilter
        renderFlagButton={() => null}
        withCallingCode
        onSelect={handelSelect}
        visible={show}
        containerButtonStyle={{ margin: 0 }}
      />
      <View style={styles.separator} />
      <CustomInput
        containerStyle={styles.input}
        placeholder="Enter phone number"
        keyboardType="number-pad"
        onChangeText={changePhoneText}
        value={phoneNumber}
        inputMode="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  code: {
    backgroundColor: 'transparent',
    color: '#23a9b2',
    marginRight: 8,
  },
  container: {
    alignItems: 'center',
    borderColor: '#23a9b2',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  input: {
    borderColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  separator: {
    backgroundColor: '#23a9b2',
    height: '100%',
    marginRight: 8,
    width: 1,
  },
});
export default PhoneNumberInput;
