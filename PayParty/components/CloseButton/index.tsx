import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


interface IProps {
  onPress: () => void,
  icon?: JSX.Element,
}
const CloseButton = ({onPress, icon}: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.closeButton}>
     {icon ||  <Icon name="close" size={32} color="#a8acafff" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 9999,
  },
});

export default CloseButton;
