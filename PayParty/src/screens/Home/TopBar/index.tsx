import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';

interface ITopBarProps {
  onMenuPress: () => void;
  onUserPress: () => void;
}
const TopBar: React.FC<ITopBarProps> = ({ onMenuPress, onUserPress }) => (
  <View style={styles.topBar}>
    <View style={styles.userSection}>
      <TouchableOpacity onPress={onUserPress}>
        <Image
          source={{ uri: 'https://via.placeholder.com/48' }}
          style={styles.userImage}
        />
      </TouchableOpacity>
      <Text style={styles.userName}>Hi! User</Text>
    </View>
    <View style={styles.iconSection}>
      <TouchableOpacity>
        <Icon name="bell-outline" size={24} color="#888888" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onMenuPress}>
        <FIcon name="settings" size={24} color="#888888" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  topBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  userImage: {
    borderRadius: 24,
    height: 48,
    marginRight: 8,
    width: 48,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userSection: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default TopBar;
