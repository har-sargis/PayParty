import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';

interface ITopBarProps {
  onMenuPress: () => void
  onUserPress: () => void;
}
const TopBar: React.FC<ITopBarProps> = ({onMenuPress, onUserPress}) => {
  return (
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
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#D4E2E2',
  },
  container: {
    flex: 1,
    backgroundColor: '#D4E2E2',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
});

export default TopBar;
