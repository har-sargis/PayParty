import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import CloseButton from '../../components/CloseButton';
import CustomButton from '../../components/Button';
import CustomInput from '../../components/Input';
import PhoneNumberInput from '../../components/PhoneNumberInput';

function RegistrationScreen({ navigation }: {navigation: any}) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <CloseButton onPress={() => navigation.goBack()} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Get Started</Text>
        </View>
        <View style={styles.form}>
          <CustomInput containerStyle={styles.input} placeholder="Name" />
          <PhoneNumberInput style={styles.input} />
          <CustomInput containerStyle={styles.input} placeholder="Country" />
          <CustomInput
            containerStyle={styles.input}
            placeholder="Date of Birth"
          />
          <CustomInput containerStyle={styles.input} placeholder="Name" />
          <CustomButton onPress={() => navigation.navigate('Congrats')}>
            Confirm
          </CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
