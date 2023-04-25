import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IconButtonProps {
  iconName: React.ReactNode;
  buttonName: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconName, buttonName }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>{iconName}</View>
      <Text style={styles.buttonName}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 74,
  },
  iconContainer: {
    width: 74,
    height: 74,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.14902,
    shadowRadius: 25,
    elevation: 15,
  },
  buttonName: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
    color: '#666666'
  },
});

export default IconButton;
