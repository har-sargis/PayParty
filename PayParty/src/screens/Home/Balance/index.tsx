import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ficon from 'react-native-vector-icons/FontAwesome5';

interface BalanceProps {
  balance?: number;
}

const Balance: React.FC<BalanceProps> = ({ balance = 10000 }) => (
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
        source={require('../../../../assets/images/shadow.png')}
        resizeMode="cover"
        style={styles.buttonGroup}
      >
        <TouchableOpacity>
          <View style={styles.sendButton}>
            <Icon name="attach-money" color="#37C8C3" size={24} />
            <Text style={styles.buttonText2}>Send</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.requestButton}>
            <Ficon name="hand-holding-usd" color="#37C8C3" size={20} />
            <Text style={styles.buttonText2}>Request</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  </View>
);

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
  balanceText: {
    color: '#222',
    fontSize: 32,
    marginBottom: 16,
    paddingHorizontal: 20,
    ...shadow,
  },
  buttonGroup: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: 180,
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 20,
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
  circleButton: {
    alignItems: 'center',
    backgroundColor: '#37C8C3',
    borderRadius: 21,
    elevation: 3,
    height: 42,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    width: 42,
  },
  container: {
    // height: 316,
    backgroundColor: '#fff',
    borderRadius: 30,
    ...shadow,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerText: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
    ...shadow,
  },
  overflowWrapper: {
    overflow: 'hidden',
    position: 'relative',
  },
  requestButton: {
    alignItems: 'center',
    borderColor: '#ccdcdc',
    borderRadius: 10,
    borderWidth: 1,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  sendButton: {
    alignItems: 'center',
    borderColor: '#ccdcdc',
    borderRadius: 10,
    borderWidth: 1,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});

export default Balance;
