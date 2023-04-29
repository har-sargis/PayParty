import { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Country } from 'react-native-country-picker-modal';

import { PHONE_C_KEY, PHONE_N_KEY, AUTH_SIGNUP } from '@config/constants';
import CustomButton from '@components/Button';
import CustomInput from '@components/Input';
import PhoneNumberInput from '@components/PhoneNumberInput';
import Fetch from '@services/Fetch';
import { AuthContext } from '@store/AuthContext';

function RegistrationScreen({ navigation }: {navigation: any}) {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('374');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleCodeChange = (code: Country) => {
    setPhoneCode(code.callingCode[0]);
  };

  const handlePhoneChange = (number: string) => {
    setPhoneNumber(number);
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handlePasswordChange = (dateOfBirth: string) => {
    setPassword(dateOfBirth);
  };

  useEffect(() => {
    try {
      (async function () {
        const phoneNumber = await AsyncStorage.getItem(PHONE_N_KEY);
        const phonCode = await AsyncStorage.getItem(PHONE_C_KEY);
        setPhoneCode(phonCode || '');
        setPhoneNumber(phoneNumber || '');
      }());
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleRegister = async () => {
    try {
      console.log({
        name,
        phone: `+${phoneCode}${phoneNumber}`,
        email,
        password,
      });
      console.log(AUTH_SIGNUP);
      const res: { message: string, accessToken: string, id: string, refreshToken: string } = await Fetch.post(AUTH_SIGNUP, {
        firstName: name,
        phoneNumber: `+${phoneCode}${phoneNumber}`,
        email,
        password,
      });
      console.log(res);
      if (res.accessToken) {
        login(res.accessToken, res.refreshToken, res.id)
        navigation.navigate('Congrats');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.flex}>
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
          {/* <CloseButton onPress={() => navigation.goBack()} /> */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Get Started</Text>
        </View>
        <View style={styles.form}>
            <CustomInput containerStyle={styles.input} placeholder="Name" value={name} onChangeText={handleNameChange} />
            <PhoneNumberInput
              style={styles.input}
              handleChange={handleCodeChange}
              handlePhoneChange={handlePhoneChange}
          />
            <CustomInput containerStyle={styles.input} placeholder="Email" value={email} onChangeText={handleEmailChange} />
            <CustomInput containerStyle={styles.input} placeholder="Password" value={password} onChangeText={handlePasswordChange} secureTextEntry />
            <CustomButton onPress={handleRegister}>
            Confirm
          </CustomButton>
        </View>
      </View>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#ebf5f6',
  },
  container: {
    backgroundColor: '#ebf5f6',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  form: {},
  header: {
    alignSelf: 'stretch',
  },
  headerText: {
    color: '#222222',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
  },
  safeAreaView: {
    flex: 1,
  },
});

export default RegistrationScreen;
