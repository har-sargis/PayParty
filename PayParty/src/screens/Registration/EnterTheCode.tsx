import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CloseButton from '../../components/CloseButton';
import Keyboard from '../../components/CustomNumberKeyBoard';
import Countdown from '../../components/CountDown';
import Fetch from '../../services/Fetch';
import { AUTH_VC, PHONE_KEY } from '../../config/constants';

type VerificationResponse = {
  message: string;
  verified: boolean;
};

function VerifyCodeScreen({ navigation }: {navigation: any}) {
  const [code, setCode] = useState('');

  const handlePress = (value: any) => {
    if (value === 'backspace') {
      setCode(prev => prev.substring(0, prev.length - 1));
      return;
    }
    if (code.length === 4) {
      return;
    }

    setCode(prev => prev + value);
  };

  const verifyCode = useCallback(async () => {
    try {
      const phoneNumber = await AsyncStorage.getItem(PHONE_KEY);
      const res: VerificationResponse = await Fetch.post(AUTH_VC, {
        phoneNumber,
        code,
      });
      if (res.verified) {
        navigation.navigate('SignUp');
      }
    } catch (e) {
      console.log(e);
    }
  }, [code]);

  useEffect(() => {
    if (code.length === 4) {
      verifyCode();
    }
  }, [code]);

  return (
    <View style={[styles.flex, styles.backgroundColor]}>
      <SafeAreaView style={styles.flex}>
        <View style={styles.container}>
          <CloseButton onPress={() => navigation.goBack()} />
          <View style={styles.content}>
            <Text style={styles.title}>Enter the code</Text>
            <Text style={styles.subtitle}>
              Please enter the code sent to your phone, Code
            </Text>
            <View style={styles.timer}>
              <Text style={styles.subtitle}>Will expire in </Text>
              <Countdown seconds={60} />
            </View>
          </View>
          <View style={styles.codeContainer}>
            <View style={styles.codeInput}>
              {[1, 2, 3, 4].map((index, i) => (
                <View
                  key={index}
                  style={[
                    styles.codeCircle,
                    code.length > i && styles.codeFilled,
                  ]}
                >
                  {code[i] && <Text style={styles.codeText}>{code[i]}</Text>}
                </View>
              ))}
            </View>
          </View>
          <Keyboard handlePress={handlePress} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#fff',
  },
  codeCircle: {
    alignItems: 'center',
    borderColor: '#999',
    borderRadius: 36 / 2,
    borderWidth: 1,
    height: 32,
    justifyContent: 'center',
    lineHeight: 32,
    marginHorizontal: 6,
    width: 32,
  },
  codeContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
  codeFilled: {
    borderColor: '#5bc4ca',
  },
  codeInput: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  codeText: {
    color: '#5bc4ca',
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  subtitle: {
    color: '#888888',
    fontSize: 16,
  },
  timer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    color: '#222222',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center',
  },
});

export default VerifyCodeScreen;
