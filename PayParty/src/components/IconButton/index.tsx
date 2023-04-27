import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IconButtonProps {
  iconName: React.ReactNode;
  buttonName: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconName, buttonName }) => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.iconContainer}>{iconName}</View>
    <Text style={styles.buttonName}>{buttonName}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonName: {
    color: '#666666',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    width: 74,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 15,
    height: 74,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.14902,
    shadowRadius: 25,
    width: 74,
  },
});

export default IconButton;
