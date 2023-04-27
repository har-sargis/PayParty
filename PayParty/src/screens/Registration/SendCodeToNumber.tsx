import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Country } from 'react-native-country-picker-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from '../../components/PhoneNumberInput';
import CloseButton from '../../components/CloseButton';
import Button from '../../components/Button';
import Fetch from '../../services/Fetch';
import { AUTH_SVC, PHONE_KEY } from '../../config/constants';

function SendCodeToNumber({ navigation }: { navigation: any }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('374');

  const handleSend = async () => {
    console.log(AUTH_SVC, `+${phoneCode}${phoneNumber}`);
    const number = `+${phoneCode}${phoneNumber}`;
    try {
      await Fetch.post(AUTH_SVC, {
        phone: number,
      });
      await AsyncStorage.setItem(PHONE_KEY, number);
      navigation.navigate('EnterTheCode');
    } catch (e) {
      console.log(e);
    }
  };

  const handleCodeChange = (code: Country) => {
    setPhoneCode(code.callingCode[0]);
  };
  const handlePhoneChange = (number: string) => {
    setPhoneNumber(number);
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <CloseButton
          onPress={() => {
            console.log('goback');
            navigation.goBack();
          }}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.text}>
            Splitting bills made easy with PayParty
          </Text>
          <View style={{ marginBottom: 140 }}>
            <Input
              style={{ marginBottom: 20 }}
              handleChange={handleCodeChange}
              handlePhoneChange={handlePhoneChange}
            />
            <Button onPress={handleSend}>Send</Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebf4f6',
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  flex: {
    backgroundColor: '#ebf4f6',
    flex: 1,
  },
  text: {
    color: '#888888',
    fontSize: 16,
    marginBottom: 50,
    textAlign: 'center',
  },
  title: {
    color: '#222222',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default SendCodeToNumber;
