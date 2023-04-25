import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

import Input from '../../components/PhoneNumberInput';
import CloseButton from '../../components/CloseButton';
import Button from '../../components/Button';

const SendCodeToNumber = ({navigation}: {navigation: any}) => {
  const handleSend = () => {
    navigation.navigate('EnterTheCode');
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <CloseButton onPress={() => {
          console.log('goback')
          navigation.goBack()
        }} />
        <View style={styles.content}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.text}>
            Splitting bills made easy with PayParty
          </Text>
          <View style={{marginBottom: 140}}>
            <Input style={{marginBottom: 20}}/>
            <Button onPress={handleSend}>Send</Button>
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
