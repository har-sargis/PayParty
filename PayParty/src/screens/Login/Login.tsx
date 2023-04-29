import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Country } from 'react-native-country-picker-modal';

import PhoneInput from '@components/PhoneNumberInput';
import Input from '@components/Input';
import CloseButton from '@components/CloseButton';
import Button from '@components/Button';
import Separator from '@components/Separator';
import Switch from '@components/Switch';
import { AUTH_LOGIN } from '@config/constants';
import Fetch from '@services/Fetch';
import { AuthContext } from '@store/AuthContext';

function SendCodeToNumber({ navigation }: { navigation: any }) {
  const { login } = useContext(AuthContext);
  const [saveInfo, setSaveInfo] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('374');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log(phoneNumber, phoneCode, password, AUTH_LOGIN);
    if (!phoneNumber || !password) return;
    try {
      const response: { message: string, accessToken: string, id: string, refreshToken: string } = await Fetch.post(AUTH_LOGIN, {
        phoneNumber: `+${phoneCode}${phoneNumber}`,
        password,
      });
      if (response.accessToken) {
        login(response.accessToken, response.refreshToken, response.id);
        navigation.navigate('Home');
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCodeChange = (code: Country) => {
    setPhoneCode(code.callingCode[0]);
  };
  const handlePhoneChange = (number: string) => {
    setPhoneNumber(number);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <CloseButton onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <PhoneInput
            style={{ marginBottom: 20 }}
            handleChange={handleCodeChange}
            handlePhoneChange={handlePhoneChange}
          />
          <Input
            containerStyle={{ marginBottom: 20 }}
            placeholder="password"
            onChangeText={handlePasswordChange}
            secureTextEntry
          />
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Switch
              onValueChange={() => setSaveInfo(!saveInfo)}
              value={saveInfo}
            />
            <Text style={{ color: '#888888', marginLeft: 16, fontSize: 16 }}>
              Save my info?
            </Text>
          </View>

          <Button onPress={handleLogin}>Login</Button>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Separator text="or" dark width={120} />
        </View>
        <View style={styles.scanner}>
          <TouchableOpacity style={styles.button}>
            <Icon name="fingerprint" size={60} color="#23a9b2" />
            <Text style={{ color: '#888888', marginTop: 20, fontSize: 16 }}>
              Scan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#ebf4f6',
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  content: {
    // flex: 1,
    // justifyContent: 'flex-end',
  },
  flex: {
    flex: 1,
  },
  scanner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
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
