import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const GroupItem: React.FC<{ amount: number; groupName: string }> = ({
  amount,
  groupName,
}) => (
  <View style={styles.container}>
    <View style={styles.circleContainer}>
      <View style={styles.greyCircle}>
        <View style={styles.blueCircle} />
        <Icon
          name="currency-usd"
          color="#37C8C3"
          style={styles.icon}
          size={24}
        />
      </View>
    </View>
    <Text style={styles.amount}>
      {amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}
    </Text>
    <Text style={styles.groupName}>{groupName}</Text>
  </View>
);

const styles = StyleSheet.create({
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  blueCircle: {
    left: -3,
    top: -3,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 4,
    borderColor: '#37C8C3',
    position: 'absolute',
    borderRightColor: 'transparent',
    borderRightWidth: 4,

    // position: 'relative',
    transform: [{ rotate: '-45deg' }],
    zIndex: 1,
  },
  circleContainer: {
    position: 'relative',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 3,
    height: 150,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    width: 150,
  },
  greyCircle: {
    alignItems: 'center',
    borderColor: '#CCDCDC',
    borderRadius: 48 / 2,
    borderWidth: 2,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  groupName: {
    color: '#888',
    fontSize: 10,
  },
  icon: {
    position: 'relative',
  },
});

export default GroupItem;
