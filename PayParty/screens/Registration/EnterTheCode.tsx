import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import CloseButton from '../../components/CloseButton';
import Keyboard from '../../components/CustomNumberKeyBoard';
import Countdown from '../../components/CountDown';

const VerifyCodeScreen = ({navigation}: {navigation: any}) => {
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

  useEffect(() => {
    if (code.length === 4) {
      setTimeout(() => {
        navigation.navigate('Registration');
      }, 300);
    }
  }, [code, navigation]);
  console.log(code, '>>>>>>>>');
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
            <Text style={styles.subtitle}>
              Will expire in {' '}
            </Text>
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
                ]}>
                {code[i] && <Text style={styles.codeText}>{code[i]}</Text>}
              </View>
            ))}
          </View>
        </View>
        <Keyboard handlePress={handlePress}/>
      </View>
    </SafeAreaView>
  </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundColor: {
    backgroundColor: '#fff',
  },
  content: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
    color: '#222222',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
  },
  timer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
  },
  codeContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
  codeInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  codeCircle: {
    width: 32,
    height: 32,
    borderRadius: 36/2,
    borderWidth: 1,
    borderColor: '#999',
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 32,
  },
  codeFilled: {
    borderColor: '#5bc4ca',
  },
  codeText: {
    color: '#5bc4ca',
    fontSize: 16,
  },
});

export default VerifyCodeScreen;
