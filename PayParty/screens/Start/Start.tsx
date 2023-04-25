/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, Image, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../components/Button';
import Separator from '../../components/Separator';

const AuthScreen = ({navigation}: {navigation: any}) => {
  const handleLogin = () => {
     navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('SendCodeToNumber');
  };

  return (
    <LinearGradient
      colors={['#37C8C3', '#21A7B3']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <SafeAreaView style={styles.flex}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Pay together, share together!</Text>
          <Text style={styles.slogan}>
            Share expenses, share memories with PayParty
          </Text>
          <Separator height={4} width={20} />
        </View>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <Button
              type="secondary"
              style={{marginBottom: 20}}
              onPress={handleLogin}>
              Login
            </Button>
            <Button onPress={handleSignUp}>Sign Up</Button>
          </View>
          <View style={styles.separatorContainer}>
            <Separator />
            <View style={styles.designerContainer}>
              <Icon name="check" size={16} color="#fff" />
              <Text style={styles.designerText}>Designed by Sargis</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  logoContainer: {
    marginTop: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
    width: 93,
    height: 93,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    flex: 1,
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 14,
    marginTop: 24,
  },
  slogan: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.75)',
    marginBottom: 4,
  },
  separatorSmall: {
    width: 20,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 8,
    opacity: 0.5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginBottom: 50,
  },
  separatorContainer: {
    marginTop: 50,
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  designerContainer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  designerText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 4,
  },
});

export default AuthScreen;
