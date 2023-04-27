import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  onPress: () => void;
  icon?: JSX.Element;
}
function CloseButton({ onPress, icon }: IProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.closeButton}>
      {icon || <Icon name="close" size={32} color="#a8acafff" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    left: 20,
    position: 'absolute',
    top: 20,
    zIndex: 9999,
  },
});

export default CloseButton;
