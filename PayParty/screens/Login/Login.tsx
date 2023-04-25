import React, {useState} from 'react';
import {
View,
StyleSheet,
Text,
SafeAreaView,
TouchableOpacity,
NativeSyntheticEvent,
TextInputChangeEventData,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Country} from 'react-native-country-picker-modal';

import PhoneInput from '../../components/PhoneNumberInput';
import Input from '../../components/Input';
import CloseButton from '../../components/CloseButton';
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import Switch from '../../components/Switch';;
import { AUTH_LOGIN } from '../../config/constants';
import Fetch from '../../services/Fetch';

const SendCodeToNumber = ({navigation}: {navigation: any}) => {
  const [saveInfo, setSaveInfo] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('374');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log(phoneNumber, phoneCode, password, AUTH_LOGIN);
    if (!phoneNumber || !password) return;
    // navigation.navigate('Home');
    // try {
    //   const response = await Fetch.post(AUTH_LOGIN, {
    //     phone: `${phoneCode}${phoneNumber}`,
    //     password,
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleCodeChange = (code:Country) => {
    setPhoneCode(code.callingCode[0]);
  }
  const handlePhoneChange = (number: string) => {
    setPhoneNumber(number)
  }

  const handlePasswordChange = (password: string) => {
    setPassword(password)
  }

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <CloseButton onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <PhoneInput style={{marginBottom: 20}} handleChange={handleCodeChange} handlePhoneChange={handlePhoneChange}/>
          <Input containerStyle={{marginBottom: 20}} placeholder="password" onChangeText={handlePasswordChange} secureTextEntry/>
          <View style={{marginBottom: 20, flexDirection: 'row', alignItems: 'center'}}>
            <Switch
              onValueChange={() => setSaveInfo(!saveInfo)}
              value={saveInfo}
            />
            <Text style={{ color: '#888888', marginLeft: 16, fontSize: 16,}}>Save my info?</Text>
          </View>

          <Button onPress={handleLogin}>Login</Button>
        </View>
        <View style={{alignItems: 'center'}}>
          <Separator text="or" dark width={120}/>
        </View>
        <View style={styles.scanner}>
          <TouchableOpacity style={styles.button}>
            <Icon name="fingerprint" size={60} color="#23a9b2"/>
            <Text style={{ color: '#888888', marginTop: 20, fontSize: 16,}}>Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ebf4f6',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  content: {
    // flex: 1,
    // justifyContent: 'flex-end',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222222',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888888',
    marginBottom: 50,
  },
  scanner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default SendCodeToNumber;
