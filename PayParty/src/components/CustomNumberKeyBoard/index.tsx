import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Keyboard({
  handlePress,
}: {
  handlePress: (number: number | string) => void;
}) {
  return (
    <View style={styles.keyboardContainer}>
      <View style={styles.row}>
        {[1, 2, 3].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.button}
            onPress={() => handlePress(number)}
          >
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {[4, 5, 6].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.button}
            onPress={() => handlePress(number)}
          >
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {[7, 8, 9].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.button}
            onPress={() => handlePress(number)}
          >
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.cornerButton]}
          onPress={() => handlePress('')}
        >
          <Text style={styles.buttonText}> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('backspace')}
        >
          <Text style={styles.buttonText}>←</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.resendButton}
        onPress={() => console.log('resend')}
      >
        <Text style={styles.resendText}>Resend</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 20,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  buttonText: {
    color: '#aaa',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cornerButton: {
    borderTopLeftRadius: 0,
  },
  keyboardContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 4,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 16,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: -6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '100%',
  },
  resendButton: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
    width: '100%',
  },
  resendText: {
    color: '#23a9b2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Keyboard;
