import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';

interface ITopBarProps {
  onMenuPress: () => void;
}

const BottomBar: React.FC<ITopBarProps> = ({ onMenuPress }) => (
  <LinearGradient
    colors={['#37C8C3', '#21A7B3']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.container}
  >
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <SIcon style={{ opacity: 0.6 }} name="wallet" size={32} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon
          style={{ opacity: 0.6 }}
          name="bookmark-multiple-outline"
          size={32}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons name="add-circle" size={32} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={onMenuPress}>
        <Icon style={{ opacity: 0.6 }} name="menu" size={32} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons
          style={{ opacity: 0.6 }}
          name="person-outline"
          size={32}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    height: 125,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});

export default BottomBar;
