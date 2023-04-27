/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../components/Button';
import Separator from '../../components/Separator';

function AuthScreen({ navigation }: { navigation: any }) {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('SendCodeToNumber');
  };

  return (
    <LinearGradient
      colors={['#37C8C3', '#21A7B3', '#37C8C3', '#21A7B3']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.flex}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/logo.png')}
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
              style={{ marginBottom: 20 }}
              onPress={handleLogin}
            >
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
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column',
    marginBottom: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  designerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 25,
  },
  designerText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 4,
  },
  flex: {
    flex: 1,
  },
  logo: {
    height: 50,
    width: 50,
  },
  logoContainer: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    height: 93,
    justifyContent: 'center',
    marginTop: 12,
    width: 93,
  },
  separatorContainer: {
    alignItems: 'center',
    bottom: 20,
    left: 0,
    marginTop: 50,
    right: 0,
  },
  slogan: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 14,
    marginTop: 24,
  },
  titleWrapper: {
    flex: 1,
    paddingVertical: 20,
  },
});

export default AuthScreen;
