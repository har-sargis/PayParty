import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

import Button from '../../components/Button';

function SendCodeToNumber({ navigation }: { navigation: any }) {
  const handleSend = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Congrats</Text>
          <Text style={styles.text}>You&apos;re almost done</Text>
          <View style={{ marginBottom: 140 }}>
            <Button onPress={handleSend}>Complete</Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebf4f6',
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  flex: {
    flex: 1,
  },
  text: {
    color: '#888888',
    fontSize: 16,
    marginBottom: 50,
    textAlign: 'center',
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
