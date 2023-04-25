import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

import CloseButton from '../../components/CloseButton';
import CustomButton from '../../components/Button';
import CustomInput from '../../components/Input';
import PhoneNumberInput from '../../components/PhoneNumberInput';

const RegistrationScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <CloseButton onPress={() => navigation.goBack()}/>
        <View style={[styles.header]}>
          <Text style={styles.headerText}>Get Started</Text>
        </View>
        <View style={styles.form}>
        <CustomInput containerStyle={styles.input} placeholder="Name" />
        <PhoneNumberInput style={styles.input} />
        <CustomInput containerStyle={styles.input} placeholder="Country" />
        <CustomInput containerStyle={styles.input} placeholder="Date of Birth" />
        <CustomInput containerStyle={styles.input} placeholder="Name" />
        <CustomButton onPress={() => navigation.navigate('Congrats')}>Confirm</CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ebf5f6',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  header: {
    alignSelf: 'stretch',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  form: {
  },
  input: {
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#5bc4ca',
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 16,
  },
});

export default RegistrationScreen;
