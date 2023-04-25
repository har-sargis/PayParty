import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const GroupItem: React.FC<{ amount: number; groupName: string }> = ({ amount, groupName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.greyCircle}>
          <View style={styles.blueCircle} />
          <Icon name="currency-usd" color="#37C8C3" style={styles.icon} size={24}/>
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
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 30,
    width: 150,
    height: 150,
    justifyContent: 'space-between',
  },
  blueCircle: {
    left: -3,
    top: -3,
    width: 50,
    height: 50,
    borderRadius: 50/2,
    borderWidth: 4,
    borderColor: '#37C8C3',
    position: 'absolute',
    borderRightColor: 'transparent',
    borderRightWidth: 4,

    // position: 'relative',
    transform: [{rotate: '-45deg'}],
    zIndex: 1,
  },
  greyCircle: {
    width: 48,
    height: 48,
    borderRadius: 48/2,
    borderWidth: 2,
    borderColor: '#CCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    position: 'relative',
  },
  icon: {
    position: 'relative',
    // transform: [{rotate: '45deg'}]
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  groupName: {
    fontSize: 10,
    color: '#888'
  },
});

export default GroupItem;
