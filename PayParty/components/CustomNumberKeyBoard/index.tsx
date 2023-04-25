import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Keyboard = ({handlePress}: { handlePress: (number: number | string) => void}) => (
  <View style={styles.keyboardContainer}>
    <View style={styles.row}>
      {[1, 2, 3].map(number => (
        <TouchableOpacity
          key={number}
          style={styles.button}
          onPress={() => handlePress(number)}>
          <Text style={styles.buttonText}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.row}>
      {[4, 5, 6].map(number => (
        <TouchableOpacity
          key={number}
          style={styles.button}
          onPress={() => handlePress(number)}>
          <Text style={styles.buttonText}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.row}>
      {[7, 8, 9].map(number => (
        <TouchableOpacity
          key={number}
          style={styles.button}
          onPress={() => handlePress(number)}>
          <Text style={styles.buttonText}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.row}>
      <TouchableOpacity
        style={[styles.button, styles.cornerButton]}
        onPress={() => handlePress('')}>
        <Text style={styles.buttonText}> </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress(0)}>
        <Text style={styles.buttonText}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('backspace')}>
        <Text style={styles.buttonText}>←</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={styles.resendButton}
      onPress={() => console.log('resend')}>
      <Text style={styles.resendText}>Resend</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  keyboard: {
    marginTop: 64,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  keyboardButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  keyboardText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5bc4ca',
  },
  keyboardContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: '100%',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: -6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 80,
    height: 80,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cornerButton: {
    borderTopLeftRadius: 0,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#aaa',
  },
  resendButton: {
    alignSelf: 'center',
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  resendText: {
    color: '#23a9b2',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default Keyboard;
