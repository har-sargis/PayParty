import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

import Input from '../../components/PhoneNumberInput';
import CloseButton from '../../components/CloseButton';
import Button from '../../components/Button';

const SendCodeToNumber = ({navigation}: {navigation: any}) => {
  const handleSend = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Congrats</Text>
          <Text style={styles.text}>
            You're almost done
          </Text>
          <View style={{marginBottom: 140}}>
            <Button onPress={handleSend}>Complete</Button>
          </View>
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
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
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
});

export default SendCodeToNumber;
