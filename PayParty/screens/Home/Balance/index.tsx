import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Ficon from 'react-native-vector-icons/FontAwesome5';

interface BalanceProps {
  balance?: number;
}

const Balance: React.FC<BalanceProps> = ({ balance  = 10000}) => {
  return (
    <View style={styles.container}>
      <View style={styles.overflowWrapper}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Balance</Text>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.balanceText}>
            {balance.toLocaleString('en-US', {
                style: 'currency',
              currency: 'USD',
            })}
          </Text>
      <ImageBackground
        source={require('../../../assets/images/shadow.png')}
        resizeMode="cover"
        style={styles.buttonGroup}
      >
        <TouchableOpacity>
          <View style={styles.sendButton}>
            <Icon name="attach-money" color="#37C8C3" size={24}/>
            <Text style={styles.buttonText2}>Send</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.requestButton}>
            <Ficon name="hand-holding-usd" color="#37C8C3" size={20}/>
            <Text style={styles.buttonText2}>Request</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
      </View>
    </View>
  );
};

const shadow = {
  shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.14902,
    shadowRadius: 25,
    elevation: 15,
};

const styles = StyleSheet.create({
  container: {
    // height: 316,
    backgroundColor: '#fff',
    borderRadius: 30,
   ...shadow,
  },
  overflowWrapper: {
    overflow: 'hidden',
    position: 'relative',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    ...shadow,
  },
  circleButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#37C8C3',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#222',
    fontSize: 16,
  },
  balanceText: {
    paddingHorizontal: 20,
    fontSize: 32,
    marginBottom: 16,
    color: '#222',
    ...shadow,
  },
  buttonGroup: {
    flexDirection: 'row',
    height: 180,
    paddingHorizontal: 20,
    alignItems:'flex-end',
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
    borderWidth:1,
    borderRadius: 10,
    borderColor: '#ccdcdc',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  requestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
    borderWidth:1,
    borderRadius: 10,
    borderColor: '#ccdcdc',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Balance;
